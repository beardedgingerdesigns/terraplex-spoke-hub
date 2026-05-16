#!/usr/bin/env node
// Structural lint for chore/* PRs. Zero dependencies; uses git via child_process.
//
// Failure modes covered:
//   1. New research/library files missing required frontmatter keys
//   2. Markdown relative links that don't resolve to a real file
//   3. Branch type vs. files-touched mismatch (digest branch editing component-library, etc.)
//
// Editorial quality is intentionally NOT checked — that's the human's job via the
// daily digest email. This script only catches things that would silently break
// downstream consumers (broken links, missing keys, files in the wrong place).

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const BASE = process.env.PR_BASE_SHA;
const HEAD = process.env.PR_HEAD_SHA;
const BRANCH = process.env.PR_BRANCH || '';
const REPO_ROOT = resolve('.');

if (!BASE || !HEAD) {
  fail('PR_BASE_SHA and PR_HEAD_SHA must be set');
}

const failures = [];

function fail(msg) {
  console.error(`::error::${msg}`);
  process.exit(1);
}

function record(msg) {
  failures.push(msg);
  console.error(`::error::${msg}`);
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

// --- Gather changed files ---
const diffOutput = git('diff', '--name-status', `${BASE}...${HEAD}`);
const changed = diffOutput
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [status, ...rest] = line.split('\t');
    return { status: status[0], path: rest[rest.length - 1] };
  });

const added = changed.filter((c) => c.status === 'A').map((c) => c.path);
const modified = changed.filter((c) => c.status === 'M' || c.status === 'A').map((c) => c.path);

console.log(`Branch: ${BRANCH}`);
console.log(`Changed files (${changed.length}):`);
for (const c of changed) console.log(`  ${c.status} ${c.path}`);

// --- Frontmatter checks ---

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---/;

function parseFrontmatter(content) {
  const m = content.match(FRONTMATTER_RE);
  if (!m) return null;
  return m[1];
}

function hasKey(block, key) {
  // Match `key:` at the start of a line within the frontmatter block.
  return new RegExp(`^${key}\\s*:`, 'm').test(block);
}

const DIGEST_REQUIRED_KEYS = ['title', 'category', 'publishedAt', 'sources', 'tags'];
const LIBRARY_REQUIRED_KEYS = [
  'referoScreenId',
  'referoUrl',
  'section',
  'applicableArchetypes',
  'savedAt',
  'tags',
];

for (const path of added) {
  if (!path.endsWith('.md')) continue;
  if (!existsSync(path)) continue;
  const content = readFileSync(path, 'utf8');

  // Digest files
  if (/^research\/digests\/\d{4}-\d{2}-\d{2}\.md$/.test(path)) {
    const fm = parseFrontmatter(content);
    if (!fm) {
      record(`${path}: missing frontmatter block`);
      continue;
    }
    for (const key of DIGEST_REQUIRED_KEYS) {
      if (!hasKey(fm, key)) record(`${path}: digest missing required key \`${key}\``);
    }
  }

  // Library research notes
  if (/^component-library\/[^/]+\/research\/refero-[^/]+\.md$/.test(path)) {
    const fm = parseFrontmatter(content);
    if (!fm) {
      record(`${path}: missing frontmatter block`);
      continue;
    }
    for (const key of LIBRARY_REQUIRED_KEYS) {
      if (!hasKey(fm, key)) record(`${path}: library note missing required key \`${key}\``);
    }
  }
}

// --- Link integrity ---

// Matches `[text](path)` where path is a relative file path (not http/mailto/#).
const LINK_RE = /\[[^\]]*\]\(([^)]+)\)/g;

for (const path of modified) {
  if (!path.endsWith('.md')) continue;
  if (!existsSync(path)) continue;
  const content = readFileSync(path, 'utf8');
  const baseDir = dirname(path);

  let match;
  while ((match = LINK_RE.exec(content)) !== null) {
    let target = match[1].trim();
    // Strip optional title: `path "title"`
    target = target.split(/\s+/)[0];
    // Skip external, mailto, anchors, root anchors
    if (/^(https?:|mailto:|tel:|#)/.test(target)) continue;
    // Strip anchor fragment for existence check
    const cleanTarget = target.split('#')[0];
    if (!cleanTarget) continue;

    const resolved = normalize(join(baseDir, cleanTarget));
    if (!existsSync(resolved)) {
      record(`${path}: broken link \`${target}\` (resolved to \`${resolved}\`)`);
    }
  }
}

// --- Branch-vs-files alignment ---
// Tightens the contract: a digest branch should only add digest files (+ its log);
// a library-audit branch should only touch component-library/** (+ its log).
// This catches a routine that crossed wires and edited the wrong subtree.

const branchType = (() => {
  const m = BRANCH.match(/^chore\/(digest|library-audit)-(\d{4}-\d{2}-\d{2})$/);
  if (!m) return null;
  return { kind: m[1], date: m[2] };
})();

if (branchType) {
  const allowedPrefixes = branchType.kind === 'digest'
    ? ['research/digests/', `log/${branchType.date}-digest.md`, 'research/digests/index.md']
    : [
        'component-library/',
        `log/${branchType.date}-library-audit.md`,
      ];

  for (const path of modified) {
    const ok = allowedPrefixes.some((p) => path === p || path.startsWith(p));
    if (!ok) {
      record(
        `${path}: file outside allowed paths for \`${branchType.kind}\` branch ` +
          `(allowed: ${allowedPrefixes.join(', ')})`,
      );
    }
  }

  // Require the canonical files for each branch type
  if (branchType.kind === 'digest') {
    const digestFile = `research/digests/${branchType.date}.md`;
    const logFile = `log/${branchType.date}-digest.md`;
    if (!added.includes(digestFile)) record(`digest branch missing expected file \`${digestFile}\``);
    if (!added.includes(logFile)) record(`digest branch missing expected log file \`${logFile}\``);
  }
  if (branchType.kind === 'library-audit') {
    const logFile = `log/${branchType.date}-library-audit.md`;
    if (!added.includes(logFile)) record(`library-audit branch missing expected log file \`${logFile}\``);
  }
}

// --- Final ---

if (failures.length > 0) {
  console.error(`\nValidation failed with ${failures.length} issue(s).`);
  process.exit(1);
}

console.log('\nAll structural checks passed.');
