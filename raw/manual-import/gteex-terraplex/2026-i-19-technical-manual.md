---
sourceUrl: filesystem
domain: manual
fetchedAt: 2026-05-24T12:50:00Z
fetchedBy: manual-import
title: "I-19 Technical Manual V1.0 — GTEEX-Revolution Technical Support Team"
originalFormat: pdf
originalFilename: "i-19-technical-manual.pdf"
originalAuthor: "Russell Hedrick (GTEEX-Revolution)"
pageCount: 308
created: 2026-03-17
modified: 2026-05-20
---

# I-19 Technical Manual V1.0 — Service / Maintenance / Configuration

Deep technical reference for the I-19 platform: installation, configuration, calibration, and maintenance of all onboard systems. Audience: dealers, technicians, and "Custom applicators to maintain and repair their equipment to keep them covering acres and increasing their production" (per the manual's own framing — Russell's right-to-repair stance is built into the foreword).

This file is the canonical raw record of the V1.0 technical manual. Original PDF (~36 MB, 308 pages, image-heavy) is gitignored at this directory (kept locally only, too large for plain git); see [README.md](README.md) for the namespace rule. For operator-facing instructions instead, see [2026-i-19-user-manual.md](2026-i-19-user-manual.md). The technical manual goes deeper on hardware procedures and remote-control software settings than the user manual.

## Foreword (verbatim, §Introduction)

> This technical manual is designed to provide detailed and practical instructions for the operation, configuration, calibration, and maintenance of GTEEX-Revolution aircraft—essential equipment for precision agriculture and the modernization of field operations.
>
> This material was developed by the GTEEX-Revolution technical team with the purpose of training agricultural professionals, promoting the proper use of the equipment, optimizing resources, reducing operational costs, and enhancing sustainability in agricultural practices. **This manual is intended to give the power back to the farmers and Custom applicators to maintain and repair their equipment to keep them covering acres and increasing their production.** If you see anything not listed in this manual please contact us directly or our any of our partners.

The repair-empowerment framing is editorially significant — it is the closest first-party justification for the Terraplex "dealer-supported, owner-operated maintenance" positioning that appears in dealer sites and the compliance program.

## Contents (manual TOC)

### 1. Power System (battery + charger)
- 1.1 How to turn the battery on and off
- 1.2 Checking the battery percentage
- 1.3 Charger panel display (10 labelled controls: power switch, pause/play, firmware/serial, cycle count, cell voltage, real-time data, charge level, power/Bluetooth status, manual power adjustment)
- 1.4 Battery Technical Specifications
- 1.5–1.7 (Battery handling, charger maintenance, log retrieval via Remote Control)

### 2. Powertrain System
- 2.1 How to Install a Motor (uses M10×20 mm screws; thread-locking adhesive cure time 4 hours)
- 2.2 How to Install the Propeller
- 2.3 How to Identify Motor Model and Serial Number
- 2.4 How and Where to Connect Each Motor to the Boards

### 3. Communication System
- 3.1 How to Install and Connect Communication Boards
- 3.2 Drone Communication and Positioning Assembly
- 3.3 Remote Controller Communication and Positioning Assembly (includes incorrect-vs-correct antenna positioning illustrations)
- 3.4 How to Install the Camera
- 3.5 Radar System (Wi-Fi)
- 3.6 Communication Board Connectors

### 4. Spraying System
- 4.1 How to Install the Centrifugal Nozzle (note: cut 6.5 cm off the hose so the nozzle fits)
- 4.2 How to Install the Liquid Tank
- 4.3 Spraying System Maintenance
  - 4.3.1 How to Replace the Magnetic Pumps
  - 4.3.2 How to Replace a Flowmeter
  - 4.3.3 How to Connect the Liquid Tank Control Unit

### 5. Seeding System
- 5.1 Solid Tank Assembly
- 5.3 How to Perform Material Calibration
- 5.4 How to Begin Working with the Solid Tank
  - 5.4.1 How to Set the Remaining Dose Limit
- 5.5 How to Set the Spreading Flow Rate per Minute
- 5.6 How to Set the Rotary Platform Speed per Minute

### 6. Remote Control Software (the bulk of the manual — pp. 84–306)

#### 6.1 Interface
- 6.1.2 Map Viewing
- 6.1.3 Map Search
- 6.1.4 Uploading Maps to the Cloud
- 6.1.5 Downloading My Maps from the Cloud
- 6.1.6 Importing a KML Map into the Remote Controller
- 6.1.7 User Information
- 6.1.8 Checking for Updates
- 6.1.9 Remote Controller Information
- 6.1.10 Drone Information
- 6.1.11 Retrieving Logs from the Drone and Remote Controller
- 6.1.12 Retrieving Logs from the Charger
- 6.1.13 Changing the Speed Unit
- 6.1.14 Changing the Spraying Unit
- 6.1.15–6.1.18 Android Settings, Applications, System Brightness, System Volume
- 6.1.19 Intelligent Equipment Detection
- 6.1.20 Status Bar

#### 6.2 Aircraft Settings
- 6.2.1 Takeoff/Return Altitude
- 6.2.2 Takeoff/Return Speed
- 6.2.3 Return-to-Home Button
- 6.2.4 U-Turn
- 6.2.5 After the Dose Is Sprayed
  - 6.2.5.1 After the Drone Loses Contact
- 6.2.6 Continue Working After Signal Loss
- 6.2.7 After the Work Is Completed
- 6.2.8 Limit Maximum Altitude
- 6.2.9 Limit Maximum Distance
- 6.2.10 Light Switches (Front, Rear, Bottom LEDs)
- 6.2.11 IMU Calibration
- 6.2.12 Motor Angle Verification
- 6.2.13 Vibration Check
- 6.2.14 Aircraft Altitude
- 6.2.15 Automatic Fine Adjustment of Row Spacing
- 6.2.16 Intelligent Takeoff Point
- 6.2.17 Optimization of Breakpoint
- 6.2.18 Return Accuracy Verification
- 6.2.19 Real-Time Data Rack

#### 6.3 Radar Settings
- 6.3.1 Ground-Following Radar (Sensitivity)
- 6.3.2 Front/Rear Obstacle Avoidance
- 6.3.3 Rice Field Mode
- 6.3.4 Ground Sensitivity Adjustment
- 6.3.5 Radar Obstacle Warning Sound
- 6.3.6 Radar Detection Distance
- 6.3.7 Radar Warning Distance
- 6.3.8 Obstacle Avoidance Delay Time
- 6.3.9 Radar Compass Display Size

#### 6.4 Remote Controller Settings
- 6.4.1 Stick Mode: American Hand / Chinese Hand / Japanese Hand
- 6.4.2 Stick Calibration
- 6.4.4 Pairing the Remote Controller with the Drone
- 6.4.5 Obstacle Avoidance Shortcut Button
- 6.4.6 Custom Buttons
- 6.4.7 Map Rotates with Drone

#### 6.5 Spraying Settings
- 6.5.1 System
- 6.5.2 Real-Time Data of the Spraying System
- 6.5.3 Application Type
- 6.5.4 Centrifugal Nozzle Type
- 6.5.5 Number of Centrifugal Nozzles
- 6.5.6 Spraying Button Mode
- 6.5.7 Centrifugal Nozzle Configuration
- 6.5.8 Manual Operation Modes
- 6.5.9 Flow
- 6.5.10 Remaining Dose Limit
- 6.5.11 Exhaust Duct Air
- 6.5.12 Current Liquid Volume
- 6.5.13 Weight Calibration
- 6.5.14 Flow Calibration
- 6.5.15 Intelligent Speed Adjustment (up to 31 MPH, depending on selected flow rate)

#### 6.6 Battery Settings
- 6.6.1 Low Battery Warning
- 6.6.2 Critical Low Battery Warning

#### 6.7 RTK Settings
- 6.7.1 RTK Detection
- 6.7.2 Signal Source
- 6.7.3 RTK Diagnostics
- 6.7.4 RTK Satellite Signal
- 6.7.5 Point Accuracy

#### 6.8 Image Transmission Settings
- 6.8.1 Channel Mode

#### 6.9 Other Settings
- 6.9.1 Voice Broadcast
- 6.9.2 Speech Speed
- 6.9.3 Speech Engine
- 6.9.4 Proactive Interface and Rear Camera Interface
- 6.9.5 Front Video Parameters
- 6.9.6 Post Video Parameters
- 6.9.7 Language
- 6.9.8 Restart / Power Off

#### 6.10 Route Planning
- 6.10.2 Field × Free Navigation Route
- 6.10.2 Types of Points
- 6.10.3 Shortcut Buttons
- 6.10.4 ROUTE and STOP
- 6.10.5 OBSTACLE
- 6.10.6 Route Split
- 6.10.7 Course Offset
- 6.10.8 Starting Point
- 6.10.9 Course (Application Strip Angle)

#### 6.11 Start Working
- 6.11.1 Work Mode
- 6.11.2 Call Plan
- 6.11.4 Order Splitting
- 6.11.5 Application Parameterization
- 6.11.6 Service Report (acreage, obstacle area, flight time, area of operation, total product, per-unit usage)

## Key technical specs

### Battery (§1.4)

| Spec | Value |
| --- | --- |
| Max charging current | 140 A |
| Max charging voltage | 78.3 V / 30,000 mAh |
| Single-cell voltage | 3.75 V |
| Battery weight | 32 lbs |
| Operating temperature (charging) | 41 °F – 149 °F |
| Operating temperature (discharging) | 32 °F – 140 °F |

### Powertrain (§2)

- Motor mount: 2 × M10 × 20 mm screws (one at top of locking sleeve, plus assembly attachment screws).
- Thread-locking adhesive cure time: 4 hours.

### Spray plumbing (§4.1)

- Hose must be cut 6.5 cm shorter than supplied so the centrifugal nozzle seats properly.

### Speed performance (§6.5.15)

- Intelligent Speed Adjustment supports operator-configurable top speed up to **31 MPH**, dependent on selected flow rate.

## Service Report fields (§6.11.6)

The post-mission Service Report exposes:
- **Anti-Collision Contraction Area** — non-operational area (borders, exclusions).
- **Obstacle Area** — total combined area of mapped obstacles.
- **Flight Time (min)** — total mission time (takeoff → route → return → land).
- **Area of This Operation** — area actually sprayed.
- **Total Product Amount** — total volume of input applied.
- **Per-Unit Usage** — pre-configured dose per hectare (baseline).

This is the data dealers can surface to operators for record-keeping, billing, and compliance documentation.

## Copyright / distribution note

> © 2026 Gteex Revolution. All rights reserved. The content on this Technical Manual, including text, images, graphics, and other materials, are protected by copyright law. No part of this manual may be copied, reproduced, or used in any form without prior written permission than for the use of Gteex Revolution Drone owners, users, Dealers, and Distributors.

Implication for dealer sites: this manual's content is **not** safe for verbatim reuse in marketing copy. Dealers can reference its existence and direct operators to it, but lifted excerpts would breach the license. Sell-sheet language (see [2024-i-19-sell-sheet.md](2024-i-19-sell-sheet.md)) is the appropriate source for marketing copy.

## Cross-references

- Product wiki entry: [products/i-19.md](../../../products/i-19.md)
- Product JSON (specs + asset refs): [products/i-19.json](../../../products/i-19.json)
- Operator-facing companion: [2026-i-19-user-manual.md](2026-i-19-user-manual.md)
- Sell-sheet (marketing language): [2024-i-19-sell-sheet.md](2024-i-19-sell-sheet.md)
- Manufacturer profile: [research/manufacturers/terraplex.md](../../../research/manufacturers/terraplex.md)
- Content exclusions / pricing rules: [content/content-exclusions.md](../../../content/content-exclusions.md), [content/pricing-policy.md](../../../content/pricing-policy.md)
- Compliance program (Part 137/107 services): [content/compliance-program.md](../../../content/compliance-program.md)
