# P1 Fix Report — Copilot SM Course

**Date:** 2026-04-07
**Fixes applied:** 22 of 24 P1 issues DONE, 2 DEFERRED
**Build verification:** `node build-static.js` — 111 files generated, zero errors
**Pattern verification:** All eliminated patterns confirmed at 0 remaining occurrences

---

## Summary by Module

### Module 1.1 — Welcome to Microsoft Copilot
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-002 | A | Replaced Alt+Spacebar with Windows key+C / Copilot key | DONE |
| ISS-502 | A | Same as ISS-002 (duplicate report from Team Musk) | DONE |
| ISS-007 | B | No paperclip reference in this module (reported against UI, not course text) | N/A |
| ISS-013 | C | Replaced copilot.microsoft.com with m365.cloud.microsoft (2 locations) | DONE |
| ISS-383 | D | Changed "Standup inefficiency" to "Daily Scrum inefficiency"; "standups" to "Daily Scrums"; "standup notes" to "Daily Scrum notes" (3 locations) | DONE |

### Module 1.2 — Setting Up Your Workspace
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-013 | C | Replaced copilot.microsoft.com with m365.cloud.microsoft (3 locations) | DONE |
| ISS-016 | A | Replaced Alt+Spacebar with Windows key+C; Alt+I with Home tab > Copilot button | DONE |
| ISS-017 | G | Added dark mode CSS overrides for exercise cards in build-static.js (lime badge on dark bg) | DONE |
| ISS-007/ISS-014 | B | Replaced paperclip icon (📎) with + (Add content) button (2 locations) | DONE |
| ISS-026 | B | No paperclip reference in 1.2 (ISS-026 was for 1.3 but 📎 was only in 1.2) | N/A |

### Module 1.3 — Your First Scrum Master Tasks
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-385 | F | Added Tip callout explaining how to access sample files (copy from viewer or save locally) | DONE |
| ISS-504 | F | Changed "rate limit requirements blocker (4 days open)" to "recurring across the week" | DONE |

### Module 1.6 — Building Context with Memory
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-068 | C | Replaced copilot.microsoft.com with m365.cloud.microsoft | DONE |
| ISS-398 | E | Replaced generic note with detailed Warning callout about Memory being preview (Frontier program); added fallback path | DONE |
| ISS-075 | G | Added Tip callout before Exercise 3 with instructions on accessing sample files | DONE |
| ISS-072 | G | Section reorganization — **DEFERRED** (requires deeper structural analysis) | DEFERRED |

### Module 1.7 — Copilot Across M365 Apps
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-479 | A | Replaced Alt+I with "Home tab > Copilot button" in Excel exercise | DONE |
| ISS-481 | A | Replaced Alt+I with "Home tab > Copilot button" in PowerPoint exercise | DONE |
| ISS-482 | A | Same as ISS-481 (duplicate report) | DONE |
| (cascade) | A | Also fixed Chat vs In-App table and keyboard shortcuts summary | DONE |

### Module 1.8 — Copilot in Microsoft Teams
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-507 | E | Changed "Template by EOW" to "Template by end of sprint" (evergreen language) | DONE |
| ISS-508 | E | Added Tip callout with step-by-step guidance for Teams channel Copilot (immersive view, 1000-char minimum, admin note) | DONE |

### Module 1.9 — Copilot in Outlook
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-118 | E | Added Warning callout before Exercise 5 explaining license + privacy settings requirements + troubleshooting steps | DONE |

### Module 1.10 — SharePoint & Collaboration
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-119 | D | Changed "Daily Standup" to "Daily Scrum"; "Scrum ceremonies" to "Scrum events"; "Copilot will:" to "Copilot may:" | DONE |
| (cascade) | A | Updated Quick Reference keyboard shortcuts table | DONE |

### Module 2.1 — Facilitating Ceremonies with Copilot
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-301 | G | Adding before/after ceremony states — **DEFERRED** (requires substantial content creation) | DEFERRED |

### Module 2.3 — Team Health & Continuous Improvement
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-468 | G | Added two-method instructions (upload file OR copy-paste inline) before Exercise 1 | DONE |

### Module 4.1 — Sprint Analytics & KPI Dashboards
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-170 | G | Added Tip callout before Exercise 5 (SPC) explaining it's optional/advanced and can be skipped | DONE |

### build-static.js (Styling)
| Issue | Batch | What Changed | Status |
|-------|-------|-------------|--------|
| ISS-017 | G | Added `[data-theme="dark"] .exercise-card` and `[data-theme="dark"] .exercise-badge` CSS overrides for improved dark mode readability | DONE |

---

## Cascade Fixes (not in original P1 list)

These additional occurrences were found via grep and fixed along with the P1 issues:

| Module | What | Batch |
|--------|------|-------|
| 1.10 | Alt+Space / Alt+I in Quick Reference table | A |
| 1.2 | ISS-014 (P3) paperclip icon — fixed along with P1 batch | B |
| 1.1 | copilot.microsoft.com found in 2 locations (not in original issue) | C |

---

## Deferred Items

| Issue | Module | Reason |
|-------|--------|--------|
| ISS-072 | 1.6 | Section reorganization requires structural analysis — not a text fix |
| ISS-301 | 2.1 | Before/after ceremony states requires substantial new content creation |

---

## Research Sources (all fixes grounded in official documentation)

| Topic | Source |
|-------|--------|
| Windows Copilot keyboard shortcuts | [Microsoft Support: Getting started with Copilot on Windows](https://support.microsoft.com/en-us/topic/getting-started-with-copilot-on-windows-1159c61f) |
| In-app Copilot button location | [Microsoft Support: How to find and enable missing Copilot button](https://support.microsoft.com/en-us/office/how-to-find-and-enable-missing-copilot-button-c8482b93) |
| File attachment UI (+ button) | [Microsoft Support: Add content to Copilot Chat prompts](https://support.microsoft.com/en-us/topic/add-content-to-microsoft-365-copilot-chat-prompts-438173cf) |
| Enterprise Copilot URL | [Microsoft Support: M365 app transition to M365 Copilot app](https://support.microsoft.com/en-us/office/the-microsoft-365-app-transition-22eac811) |
| Memory/Personalization (preview) | [Microsoft Learn: Copilot personalization and memory](https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-personalization-memory) |
| Copilot in Teams channels | [Microsoft Support: Use Copilot in Teams chat and channels](https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-chat-and-channels-cccccca2) |
| Scrum terminology | [The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) |

---

## Verification Checklist

- [x] `node build-static.js` — 111 files, zero errors
- [x] Grep: `Alt + Spacebar` / `Alt+Spacebar` — 0 results across all modules
- [x] Grep: `Alt + I` / `Alt+I` — 0 results across all modules
- [x] Grep: `paperclip` / `📎` — 0 results across all modules
- [x] Grep: `copilot.microsoft.com` — 0 results across all modules
- [ ] Visual check: Open static site, verify affected pages in light + dark mode
- [ ] Visual check: Dark mode exercise cards readable
- [ ] Visual check: Sample file links accessible
