---
sourceUrl: filesystem
domain: manual
fetchedAt: 2026-05-24T12:45:00Z
fetchedBy: manual-import
title: "I-19 (INDEPENDENCE 19) User Manual — V1.3, 2026"
originalFormat: pdf
originalFilename: "I-19_MANUAL_V1.3-2.pdf"
originalAuthor: "Lance Gunderson (GTEEX REVOLUTION)"
pageCount: 55
pdfInternalTitle: "KING-100 Manual"
---

# I-19 (INDEPENDENCE 19) — User Manual V1.3, 2026

Operator-facing manual for the INDEPENDENCE 19 / I-19 agricultural drone (GTEEX REVOLUTION, "Independence Series"). Covers operation, calibration, flight safety, RTK, remote control, app, hazards, troubleshooting, and storage/maintenance. Intended audience: pilots and producers (farmers and custom applicators).

This file is the canonical raw record of the V1.3 (2026) operator manual. Original PDF source preserved in this directory (see [README.md](README.md) for namespace rules). The PDF's internal Word-document title is "KING-100 Manual" — Lance Gunderson rebranded the source manual when localizing for the I-19 product line. The Independence Series naming (INDEPENDENCE 19 → I-19) is what dealers and operators see on the platform.

## Contents (manual TOC)

1. Reading Tips
   - 1.1 Explanation of Symbols
   - 1.2 Usage Suggestions
2. Safety Summary
   - 2.1 Environment
   - 2.2 Pre-flight Inspection
   - 2.3 Operation
   - 2.4 Flight restrictions and local regulations
   - 2.5 Protection level description
   - 2.6 Instructions for pesticide use
3. Product Overview
   - 3.1 Introduction
   - 3.2 Prepare the Remote Controller (powering, charging, SIM, RTK marker, antenna)
   - 3.3 Prepare the Aircraft (arm-unfold order M4/M3 then M1/M2, propellers, battery)
   - 3.4 Aircraft Components (17 labelled parts)
   - 3.5 Remote Control Components (22 labelled parts)
   - 3.6 Activation
4. Flight Safety
   - 4.1 Requirements for the Operating Environment
   - 4.2 Flight Limit (no-fly zones, height/distance limits)
   - 4.3 Pre-flight Inspection
   - 4.4 Calibrate Weighing Scale and Flowmeter
   - 4.5 Calibrate IMU and Compass
   - 4.6 Powering On/Off the Motor (Combined Sticks Command)
   - 4.7 Basic Flight (Takeoff, Safe Parking)
5. Aircraft
   - 5.1 Flight Modes (Normal/P, Attitude/A)
   - 5.2 Operation Modes (Route, AB, Manual, Enhanced Manual)
   - 5.3 Operation Recovery (breakpoints, continue, manual obstacle avoidance)
   - 5.4 Tank Empty Point
   - 5.5 Safety System (Obstacle Avoidance, Terrain Following, Radar precautions)
   - 5.6 Automatic Return (Smart RTH, Low Battery, Loss of Control)
   - 5.7 Low Power and Low Voltage Protection
   - 5.8 RTK Function (mobile base, network RTK, custom RTK service)
   - 5.9 Flight Indicator Light and Night Light
6. Remote Control
   - 6.1 Joystick Mode (Mode 1/2/3; manual uses Mode 1 examples)
   - 6.2 Joystick Calibration
   - 6.3 Remote Control Pairing
7. GTEEX REVOLUTION Drone App
   - 7.1 Main Interface
   - 7.2 Plot Planning (Add plots, Edit plots)
   - 7.3 Start Operation
   - 7.4 Operation Mode (Route, AB Point, Manual, Enhanced Manual)
8. List of Hazards and Risks and Countermeasures
9. Troubleshooting Instructions (9.1 Power System, 9.2 Avionics, 9.3 Radar System, 9.4 Spraying System)
10. Storage, Transport, and Maintenance
    - 10.1 Storage and Transport
    - 10.2 Maintenance
    - 10.3 GTR 101 Flight Battery Use and Storage Protocol

## Key headline specs (from §3.1 and the spec tables at the back)

| Spec | Value |
| --- | --- |
| Spray tank capacity | 19 gal |
| Spreading tank capacity | 25 gal |
| Max load | 175 lbs |
| Aircraft weight | 152 lb (with battery) / 110 lb (without battery) |
| Dimensions (unfolded) | 50 in × 34 in × 34 in (arms) |
| Max wheelbase | 103 in |
| Motor size | 5.5 × 1.4 in |
| Architecture | Stable four-axis, foldable frame (M1–M4 arms) |
| Standard nozzles | 2 centrifugal nozzles |
| Max flow (2 nozzles) | 5 gal/min |
| Max flow (4 nozzles) | 8 gal/min |
| Spray width | 38 ft (at 11.5 ft ± 1.6 ft op height, 33 ft/s flight speed) |
| Effective spray width (per §3.1) | 50–54 ft |
| Radar | 360° rotating + terrain-following; measurement height 3–180 ft |
| RTK accuracy | ±4 in horizontal (activated) |
| Max configurable flight radius | 1.2 miles |
| Standard max flight distance | 3,280 ft (adjustable up to 6,562 ft) |
| Hover time (unloaded) | 16 min |
| Hover time (max load) | 6 min |
| Total battery life (system) | ≥ 8 hours |
| Protection | IP65 overall; IP67 core module (per IEC 60529) |
| Remote control screen | 6 in high-brightness |

## Safety-critical operating envelope

**Environment / weather:**
- Max altitude: 95 ft (operator default); absolute max 300 ft (load capacity drops with altitude).
- Temperature: 32 °F to 104 °F operating.
- Max wind: 14 mph (general); ≤ 7 mph for drift-prone herbicides/fungicides/insecticides.
- No-fly: rain ≥ 1 in / 12 hrs, dense fog, snow, thunder/lightning, winds > 14 mph.
- Indoor operation prohibited.

**Distances / clearances:**
- Pilot/crew standoff: ≥ 95 ft from aircraft (helmets required).
- Standoff during operation: 50–95 ft from propellers/motor.
- Min safety distance for radar use: 8.2 ft (propeller tip to obstacle).
- For radar terrain following: relative height must be > 6.6 ft, speed < 23 ft/s.

**Battery limits:**
- Use within 41 °F to 113 °F ambient. Above 122 °F may cause fire/explosion; below 40 °F severely reduces capacity.
- Cold-weather operation: pre-warm batteries above 45 °F (68 °F recommended).
- IMU/compass recalibration recommended after transport > 125 miles.

**Spray-system minimums:**
- When flight speed < 16.4 ft/s and spray width < 22 ft: min pesticide application rate is 4 gal/acre.
- When flight speed > 16 ft/s and spray width > 26 ft: min application rate also 4 gal/acre.

**Critical rotor-stop protocol (§2.3):** Never stop motors during flight — emergency cutoff only when collision with persons is imminent. Trigger: full outward stick deflection > 0.5 s → irreversible motor cutoff → free fall.

**No-fly zones (§4.2.1):** Worldwide enforcement on large airports, major cities/regions, and temporary event areas. Restrictions include warnings, prohibited takeoff, altitude caps, and forced landing.

## Flight modes & operation modes (§5.1, §5.2, §7.4)

- **Normal (P) mode** — default; precise hovering with RTK centimeter-level positioning.
- **Attitude (A) mode** — no fixed-point hover; manual stabilization; for experienced pilots only. Auto-engaged when GNSS is weak (and breakpoint is recorded at last good signal).
- **Route Operation** — autonomous plot coverage from planned route.
- **AB Point Operation** — record A→B vector, drone repeats parallel passes. Requires aircraft speed < 1.25 ft/s when marking points.
- **Manual Operation** — full pilot control, obstacle-avoidance assists in hover only.
- **Enhanced Manual Operation** — assisted manual mode.

## Operation Recovery (§5.3)

Breakpoints record when: pause button pressed, RTH entered, tilt/rotate stick moved, obstacle detected (auto-brake), radar fails, flight limit reached, tank empties, low-battery alarm, connection loss (if "continue after loss" disabled), or spray/spread equipment fault. Continue function lets aircraft fly back to selected breakpoint via transfer points or auto-bypassed obstacles.

## Indicator Light reference (§5.9.1)

LED map for M3/M4 arm lights (status indicators; M1/M2 are front-direction red continuous):
- Green for 1s → successful lock/unlock, calibration success, RC pair success.
- Red for 1s → unlock failed, calibration failed, RC pair failed.
- Yellow slow flash → IMU vibration/data abnormal/uncalibrated; RC signal loss.
- Red slow flash → no GNSS.
- Green slow flash → GNSS acquired.
- Yellow/green alternating → RTK enabled but not located.
- Red alternating → compass uncalibrated/abnormal.
- Yellow solid → IMU leveling or RC pairing in progress.
- Green solid → compass leveling.

## RTK options (§5.8)

1. **Onboard RTK** — dual-antenna anti-magnetic-interference steering. Auto-activates with good GNSS.
2. **Mobile base station** — pair via documented frequency-matching; RTK icon green = data in use.
3. **Network RTK service** — RC connects to designated server (needs internet).
4. **Custom Network RTK** — third-party server; configure under Settings > RTK Settings > Custom network RTK.

If not using RTK: disable "RTK Detection" in settings, otherwise aircraft will not take off without RTK fix.

## Pesticide use (§2.6)

- Minimize powdered chemicals; clean spray system immediately after to prevent damage.
- Use mineral-free water for preparation; filter before tank loading.
- Operators must be downwind during application; wear PPE; wash skin/aircraft/RC after use.
- Prohibited: strong acids, strong alkalis, high-temperature liquids, government-prohibited pesticides.
- Disposal: spray remaining solution + rinse on the crops; install specialized piping for cleaning solution disposal.

## Troubleshooting categories (§9)

- §9.1 Power System
- §9.2 Avionics
- §9.3 Radar System
- §9.4 Spraying System

(Each section provides symptom → cause → resolution tables; consult the source PDF or text extract for individual fault entries.)

## Storage, transport, maintenance (§10)

- §10.1 Storage and transport guidance (climate, packing, transport vibration).
- §10.2 Periodic maintenance schedule.
- §10.3 **GTR 101 Flight Battery Use and Storage Protocol** — temperature ranges, cycle counting, long-term storage SOC, transport documentation requirements.

## Cross-references

- Product wiki entry: [products/i-19.md](../../../products/i-19.md)
- Product JSON: [products/i-19.json](../../../products/i-19.json)
- Sister sell-sheet (positioning copy): [2024-i-19-sell-sheet.md](2024-i-19-sell-sheet.md)
- Companion technical/service manual: [2026-i-19-technical-manual.md](2026-i-19-technical-manual.md)
- Manufacturer profile: [research/manufacturers/terraplex.md](../../../research/manufacturers/terraplex.md)
- Content exclusions (what dealer sites must avoid): [content/content-exclusions.md](../../../content/content-exclusions.md)
