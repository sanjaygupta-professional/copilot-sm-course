# Complete Fix Report — Copilot SM Course (P1 + P2 + P3 Low-Hanging Fruit)

**Date:** 2026-04-07
**Total fix entries:** 58 (50 DONE, 7 DEFERRED, 1 N/A)
**P1 fixes:** 22 of 24 DONE (2 deferred — structural content changes)
**P2 fixes:** 19 of 31 DONE (5 deferred — require deeper content design)
**P3 low-hanging fruit:** 9 entries covering ~40+ individual edits across 21 files
**Build verification:** `node build-static.js` — 111 files, zero errors
**Pattern verification:** All critical patterns confirmed at 0 remaining occurrences

---

## Executive Summary

### What Was Fixed

| Category | Issues | Description |
|----------|--------|-------------|
| **Keyboard shortcuts** | 6 | Alt+Spacebar → Windows key+C; Alt+I → Home tab > Copilot button |
| **UI icon** | 3 | Paperclip → + (Add content) button |
| **Enterprise URL** | 3 | copilot.microsoft.com → m365.cloud.microsoft |
| **Scrum terminology** | 2 | "Standup" → "Daily Scrum"; "ceremonies" → "Scrum events" |
| **Enterprise caveats** | 4 | Memory preview warning; Teams channel guidance; Outlook requirements |
| **Content accuracy** | 3 | Rate limit days; Example 5 classification; date-dependent references |
| **Missing Scrum connections** | 4 | Added ceremony mapping tables and cross-references |
| **Unclear instructions** | 4 | Improved prompts, added style guide tip, Scrum artifact connections |
| **Responsible AI guidance** | 3 | Accuracy & Limitations sections; cross-references to Module 2.4 |
| **Visual guidance** | 2 | Success criteria checklists; UI element descriptions |
| **Troubleshooting** | 2 | Enterprise issues table; long prompt error guidance |
| **Usability** | 5 | Quick Start box; sample file access tips; SPC skip option; dependency map instructions |
| **Dark mode readability** | 1 | Exercise card CSS fix for dark mode |
| **Copy/paste** | 1 | Updated button text to show Ctrl+V hint |

### Files Modified

| File | P1 Fixes | P2 Fixes | Total |
|------|----------|----------|-------|
| 1.1-welcome/MODULE.md | 5 | 3 | 8 |
| 1.2-workspace-setup/MODULE.md | 5 | 2 | 7 |
| 1.3-first-tasks/MODULE.md | 2 | 3 | 5 |
| 1.4-researcher-analyst-agents/MODULE.md | 0 | 5 | 5 |
| 1.6-copilot-memory/MODULE.md | 3 | 1 | 4 |
| 1.7-m365-navigation/MODULE.md | 1 | 1 | 2 |
| 1.8-teams-integration/MODULE.md | 2 | 2 | 4 |
| 1.9-outlook-integration/MODULE.md | 1 | 0 | 1 |
| 1.10-sharepoint-collaboration/MODULE.md | 2 | 0 | 2 |
| 2.3-team-health/MODULE.md | 1 | 0 | 1 |
| 2.4-responsible-ai/MODULE.md | 0 | 1 | 1 |
| 2.5-advanced-prompts/MODULE.md | 0 | 1 | 1 |
| 3.1-image-basics/MODULE.md | 0 | 1 | 1 |
| 4.1-sprint-analytics/MODULE.md | 1 | 1 | 2 |
| 5.2-multi-team/MODULE.md | 0 | 1 | 1 |
| 5.3-organizational-change/MODULE.md | 0 | 1 | 1 |
| build-static.js | 1 | 1 | 2 |

---

## Fixes by Module (for team verification)

### Module 1.1 — Welcome to Microsoft Copilot

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-002, ISS-502 | P1 | Replaced Alt+Spacebar with Windows key+C / Copilot key | DONE |
| ISS-007 | P1 | Paperclip reference not in this module (UI-level concern) | N/A |
| ISS-013 | P1 | Replaced copilot.microsoft.com with m365.cloud.microsoft (2 locations) | DONE |
| ISS-383 | P1 | "Standup inefficiency" → "Daily Scrum inefficiency" (3 locations) | DONE |
| ISS-005 | P2 | Enhanced Exercise 1 with detailed UI descriptions + change-resilient tip | DONE |
| ISS-010 | P2 | Added "Where Copilot Fits in Scrum Events" mapping table | DONE |
| ISS-213 | P2 | Added "Quick Start for Scrum Masters" section with 3 starter prompts | DONE |

### Module 1.2 — Setting Up Your Workspace

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-013, ISS-016 | P1 | Replaced keyboard shortcuts + copilot.microsoft.com (6 locations) | DONE |
| ISS-017 | P1 | Dark mode exercise card CSS fix (in build-static.js) | DONE |
| ISS-007, ISS-014 | P1 | Replaced paperclip (📎) with + (Add content) button (2 locations) | DONE |
| ISS-023 | P2 | Added formatting instructions to Exercise 1 prompt | DONE |
| ISS-222 | P2 | Added Troubleshooting Common Enterprise Issues table (6 problems) | DONE |
| ISS-218 | P2 | Enterprise data responsibility section | DEFERRED |

### Module 1.3 — Your First Scrum Master Tasks

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-385 | P1 | Added sample file access tip callout | DONE |
| ISS-504 | P1 | Fixed rate limit blocker days ("recurring across the week") | DONE |
| ISS-032, ISS-036 | P2 | Added style-matching tip with sample prompt | DONE |
| ISS-038 | P2 | Added Scrum artifact connection callout with follow-up prompt | DONE |

### Module 1.4 — Researcher & Analyst Agents

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-045 | P2 | Duration already consistent (25 min header = course-structure.json) | N/A |
| ISS-046, ISS-053 | P2 | Added Scrum practice connection callout after Researcher section | DONE |
| ISS-055 | P2 | Added "From Analysis to Action" section + responsible AI warning + Module 2.4 cross-ref | DONE |
| ISS-233, ISS-234 | P2 | Added Quality Gate Checklist (5 items) + Fix the Output playbook (5 steps) | DONE |
| ISS-049 | P2 | Step-by-step agent access instructions | DEFERRED |

### Module 1.6 — Building Context with Memory

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-068 | P1 | Replaced copilot.microsoft.com with m365.cloud.microsoft | DONE |
| ISS-398 | P1 | Added Memory preview (Frontier) warning with fallback path | DONE |
| ISS-075 | P1 | Added sample file access tip before Exercise 3 | DONE |
| ISS-246 | P2 | Added stale memory anti-pattern warning with concrete example | DONE |
| ISS-072 | P1 | Section reorganization | DEFERRED |
| ISS-477 | P2 | Stakeholder context example | DEFERRED |

### Module 1.7 — Copilot Across M365 Apps

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-479, ISS-481, ISS-482 | P1 | Replaced Alt+I with Home tab > Copilot button (7 locations) | DONE |
| ISS-401 | P2 | Added "Data Access & Permissions" warning section | DONE |

### Module 1.8 — Copilot in Microsoft Teams

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-507 | P1 | "Template by EOW" → "Template by end of sprint" | DONE |
| ISS-508 | P1 | Added Teams channel Copilot guidance (immersive view, 1000-char minimum) | DONE |
| ISS-274 | P2 | Added forward references to Modules 2.1, 2.3, 4.1 | DONE |
| ISS-405 | P2 | Added transcription/recording requirement warning | DONE |

### Module 1.9 — Copilot in Outlook

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-118 | P1 | Added license + privacy settings warning before Exercise 5 | DONE |

### Module 1.10 — SharePoint & Collaboration

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-119 | P1 | "Daily Standup" → "Daily Scrum"; "ceremonies" → "events"; "will" → "may" | DONE |
| (cascade) | P1 | Updated keyboard shortcuts table | DONE |
| ISS-458 | P2 | Ceremony checklists | DEFERRED |

### Module 2.1 — Facilitating Ceremonies with Copilot

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-301 | P1 | Before/after ceremony states | DEFERRED |

### Module 2.3 — Team Health & Continuous Improvement

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-468 | P1 | Added two-method instructions (upload file OR copy-paste) | DONE |

### Module 2.4 — Responsible AI & Data Governance

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-469 | P2 | Fixed Example 5 from "GREEN if anonymized" to "YELLOW" | DONE |

### Module 2.5 — Advanced Prompt Engineering

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-140 | P2 | Added "Accuracy & Limitations" section + Module 2.4 cross-reference | DONE |
| ISS-424 | P2 | Exercise success criteria and prompt customization guidance | DEFERRED |

### Module 3.1 — Image Generation Basics

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-430 | P2 | Added success criteria checklist + generation time note | DONE |

### Module 4.1 — Sprint Analytics & KPI Dashboards

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-170 | P1 | Added SPC skip-if-advanced tip | DONE |
| ISS-432 | P2 | Added long prompt error troubleshooting (3 fixes) | DONE |

### Module 5.2 — Multi-Team Coordination

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-496 | P2 | Added dependency map file access instructions | DONE |

### Module 5.3 — Organizational Change

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-447 | P2 | Added "When NOT to Use Copilot" section (4 scenarios) | DONE |

### Module 6.1 — AI Agents & Workflow Automation

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-513 | P2 | Copy/paste Ctrl+V hint (via build-static.js change) | DONE |

### build-static.js (Styling & Functionality)

| Issue | Priority | What Changed | Status |
|-------|----------|-------------|--------|
| ISS-017 | P1 | Dark mode exercise card CSS: lime badge on dark background | DONE |
| ISS-510, ISS-513 | P2 | Copy button text: "Copied! Use Ctrl+V to paste" | DONE |

---

## P3 Low-Hanging Fruit Fixes

### P3-A: Scrum Terminology Sweep (ISS-165, ISS-182, ISS-196 + cascades)

**Scope:** 126 occurrences of "standup" across 21 module files + 1 quiz.json
**Approach:** Context-aware replacement — NOT blind find-replace

| Context | Action | Count |
|---------|--------|-------|
| Section headings (## / ###) | Changed to "Daily Scrum" | ~12 |
| Table headers, learning objectives, checklists | Changed to "Daily Scrum" | ~12 |
| Formal instructional prose (first mention per module) | Changed to "Daily Scrum (standup)" | ~12 |
| Inside code blocks (Copilot prompts) | Left as "standup" | ~60 |
| Scenario/dialogue text | Left as "standup" | ~15 |
| Metric/data labels | Left as "standup" | ~8 |
| File path references | Left unchanged | ~7 |

**Files modified:** 1.1, 1.2, 1.3, 1.4, 1.7, 1.8, 2.1, 2.6, 3.2, 4.1, 4.2, 5.1, 6.1 (MODULE.md files)
**Files NOT modified:** quiz.json (left as-is), files where all occurrences were in code blocks

### P3-B: Sample File Access Tips (ISS-027, ISS-029 + cascades)

Added the standard file access tip callout to 4 additional modules that reference sample files but didn't have instructions:

| Module | Location |
|--------|----------|
| 2.2 Impediment Management | Before Exercise 1 (impediment log reference) |
| 4.1 Sprint Analytics | Before Exercise 1 (velocity/metrics CSV references) |
| 5.1 Many Hats | Before Exercise 2 (role-mode inventory reference) |
| 6.1 Agents & Automation | Before Exercise 1 (time-sink audit reference) |

### P3-C: Jargon Definitions (ISS-352 + cascades)

| Term | Module | Fix |
|------|--------|-----|
| WIP | 4.1 | Added "(Work In Progress)" expansion |
| ContextIQ | 1.10 | Added inline explanation: "Microsoft's feature that automatically finds and suggests relevant files" |
| RACI | 2.5 | Added "(Responsible, Accountable, Consulted, Informed)" expansion |
| SPC | 4.1 | Already defined in existing Tip callout — no additional fix needed |
| Nelson rules | 4.1 | Already has inline explanation — no additional fix needed |
| DoD | 1.10, 2.6 | Already self-defining in context — no fix needed |
| DoR | — | Not found without definition — no fix needed |

### P3-D: S2-in-P3 Easy Fixes

| Issue | Module | Fix |
|-------|--------|-----|
| ISS-345 | 6.3 | Changed "Slack channel" → "Teams channel" for M365 course consistency |
| ISS-165, ISS-182, ISS-196 | multiple | Already addressed by P3-A terminology sweep |
| ISS-352 | 4.1 | Already addressed by P3-C jargon definitions |

---

## Deferred Items (7 total)

| Issue | Module | Reason | Recommended Approach |
|-------|--------|--------|---------------------|
| ISS-072 | 1.6 | Section reorganization | Review module flow with content design team |
| ISS-301 | 2.1 | Before/after ceremony states | Create content aligned with Scrum Guide events |
| ISS-049 | 1.4 | Agent access step-by-step | Requires current M365 UI screenshots |
| ISS-218 | 1.2 | Enterprise data responsibility | Align with Module 2.4 to avoid duplication |
| ISS-424 | 2.5 | Exercise success criteria | Module-by-module review of all exercises |
| ISS-458 | 1.10 | Ceremony checklists | Substantial content creation needed |
| ISS-477 | 1.6 | Stakeholder context example | Align with team persona files |

---

## Research Sources

| Topic | Source URL |
|-------|-----------|
| Windows Copilot shortcuts | https://support.microsoft.com/en-us/topic/getting-started-with-copilot-on-windows-1159c61f |
| Copilot button in M365 apps | https://support.microsoft.com/en-us/office/how-to-find-and-enable-missing-copilot-button-c8482b93 |
| File attachment UI (+ button) | https://support.microsoft.com/en-us/topic/add-content-to-microsoft-365-copilot-chat-prompts-438173cf |
| Enterprise URL transition | https://support.microsoft.com/en-us/office/the-microsoft-365-app-transition-22eac811 |
| Memory/Personalization (preview) | https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-personalization-memory |
| Teams channels Copilot | https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-chat-and-channels-cccccca2 |
| M365 Copilot requirements | https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-requirements |
| Scrum Guide 2020 | https://scrumguides.org/scrum-guide.html |

---

## Verification Checklist

- [x] `node build-static.js` — 111 files, zero errors
- [x] Grep: `Alt + Spacebar` / `Alt+Spacebar` — 0 results
- [x] Grep: `Alt + I` / `Alt+I` — 0 results
- [x] Grep: `paperclip` / `📎` — 0 results
- [x] Grep: `copilot.microsoft.com` — 0 results
- [ ] Visual check: Open static site, verify affected modules
- [ ] Visual check: Dark mode exercise cards readable
- [ ] Deploy to GitHub Pages for team review
