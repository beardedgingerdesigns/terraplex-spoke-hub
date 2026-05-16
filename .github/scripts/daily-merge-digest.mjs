#!/usr/bin/env node
// Daily email digest of auto-merged PRs.
//
// Strategy: query the GH search API for PRs merged in the last 24h, pull each
// PR body, extract the "Open questions for human review" section verbatim (that's
// the routine's self-flagged concerns), and ship one HTML email via Resend.
//
// Zero dependencies. Uses fetch (Node 18+).

const {
  GH_TOKEN,
  RESEND_API_KEY,
  DIGEST_EMAIL_TO,
  DIGEST_EMAIL_FROM,
  REPO,
} = process.env;

function die(msg) {
  console.error(`::error::${msg}`);
  process.exit(1);
}

if (!GH_TOKEN) die('GH_TOKEN missing');
if (!RESEND_API_KEY) die('RESEND_API_KEY secret missing — add it to repo secrets');
if (!DIGEST_EMAIL_TO) die('DIGEST_EMAIL_TO secret missing — add it to repo secrets');
if (!DIGEST_EMAIL_FROM) die('DIGEST_EMAIL_FROM secret missing — add it to repo secrets (e.g. digest@yourdomain.com)');
if (!REPO) die('REPO env missing');

const [OWNER, NAME] = REPO.split('/');

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GH ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

// --- Find merged PRs in last 24h ---

const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
const q = `repo:${REPO} is:pr is:merged merged:>=${since}`;
const search = await gh(`/search/issues?q=${encodeURIComponent(q)}&per_page=100`);
const prs = search.items || [];

console.log(`Found ${prs.length} PR(s) merged since ${since}`);

if (prs.length === 0) {
  console.log('No merged PRs — skipping email.');
  process.exit(0);
}

// --- Enrich with file counts + extract flagged sections ---

const SECTION_RE = /##\s+Open questions for human review\s*\n([\s\S]*?)(?=\n##\s|\n---\s*\n|$)/i;

function extractFlagged(body) {
  if (!body) return null;
  const m = body.match(SECTION_RE);
  if (!m) return null;
  const section = m[1].trim();
  // Strip the auto-opened footer if it leaked in
  return section.replace(/_Auto-opened by[\s\S]*$/, '').trim() || null;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function mdToHtml(md) {
  // Tiny markdown subset: bold, links, bullet lists, code spans, newlines.
  // Not a real parser — just enough to make the email scannable.
  let html = escapeHtml(md);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // Lists
  const lines = html.split('\n');
  const out = [];
  let inList = false;
  for (const line of lines) {
    if (/^- /.test(line)) {
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${line.replace(/^- /, '')}</li>`);
    } else {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (line.trim()) out.push(`<p>${line}</p>`);
    }
  }
  if (inList) out.push('</ul>');
  return out.join('\n');
}

const enriched = [];
for (const pr of prs) {
  const detail = await gh(`/repos/${OWNER}/${NAME}/pulls/${pr.number}`);
  enriched.push({
    number: pr.number,
    title: pr.title,
    url: pr.html_url,
    additions: detail.additions,
    deletions: detail.deletions,
    changedFiles: detail.changed_files,
    mergedAt: detail.merged_at,
    flagged: extractFlagged(detail.body),
  });
}

enriched.sort((a, b) => new Date(b.mergedAt) - new Date(a.mergedAt));

// --- Compose email ---

const today = new Date().toISOString().slice(0, 10);
const subject = `[${NAME}] daily merge digest — ${today} (${enriched.length} merged)`;

const items = enriched
  .map((pr) => {
    const flaggedBlock = pr.flagged
      ? `<div style="margin-top:8px;padding:12px;background:#fff8e1;border-left:3px solid #f59e0b;border-radius:4px;">
           <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#92400e;font-weight:600;margin-bottom:6px;">Self-flagged for review</div>
           ${mdToHtml(pr.flagged)}
         </div>`
      : '';
    return `
      <div style="margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid #e5e5e5;">
        <div style="font-size:14px;color:#666;">#${pr.number} · +${pr.additions} / −${pr.deletions} · ${pr.changedFiles} file(s)</div>
        <div style="font-size:16px;font-weight:600;margin:4px 0;">
          <a href="${pr.url}" style="color:#2563eb;text-decoration:none;">${escapeHtml(pr.title)}</a>
        </div>
        ${flaggedBlock}
      </div>`;
  })
  .join('\n');

const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:680px;margin:0 auto;padding:24px;color:#222;">
  <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#666;margin-bottom:4px;">${escapeHtml(REPO)}</div>
  <h1 style="font-size:22px;margin:0 0 24px 0;">Auto-merged in the last 24h</h1>
  <p style="color:#666;margin-bottom:32px;">${enriched.length} PR(s) landed. Items with a yellow flag self-reported something worth eyeballing.</p>
  ${items}
  <p style="font-size:12px;color:#999;margin-top:32px;">
    Sent by <code>.github/workflows/daily-merge-digest.yml</code>. To stop, disable the workflow or remove the cron schedule.
  </p>
</body></html>`;

// --- Send via Resend ---

const recipients = DIGEST_EMAIL_TO.split(',').map((s) => s.trim()).filter(Boolean);

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: DIGEST_EMAIL_FROM,
    to: recipients,
    subject,
    html,
  }),
});

if (!res.ok) {
  const text = await res.text();
  die(`Resend ${res.status}: ${text}`);
}

const result = await res.json();
console.log(`Email sent: ${result.id} → ${recipients.join(', ')}`);
