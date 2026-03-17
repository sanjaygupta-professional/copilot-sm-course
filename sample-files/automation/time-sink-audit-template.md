# Weekly SM Time-Sink Audit Template

**Scrum Master:** You (Velocity Squad)
**Week of:** [Date]
**Sprint:** [Sprint Number]

---

## Purpose

This template helps you identify where your time goes each week and which activities are candidates for Copilot automation. Complete this audit for one full sprint (2 weeks) to establish your baseline before automating.

---

## Weekly Activity Audit

| # | Activity | Frequency (per week) | Time per Instance | Weekly Total | Automatable? | Copilot Approach |
|---|----------|---------------------|-------------------|-------------|-------------|-----------------|
| 1 | Standup facilitation | 5x | 15 min | 1h 15m | Partially | Generate talking points from Jira updates; pre-flag blockers |
| 2 | Standup notes processing | 5x | 20 min | 1h 40m | Fully | Prompt to extract action items, blockers, and parking lot from raw notes |
| 3 | Impediment tracking & follow-up | 3x | 25 min | 1h 15m | Partially | Generate status update emails; draft escalation messages from impediment log |
| 4 | Sprint report writing | 1x (every 2 weeks) | 90 min | 45m avg | Fully | Prompt to generate sprint report from velocity data, burndown, and ceremony notes |
| 5 | Sprint Planning prep | 1x (every 2 weeks) | 60 min | 30m avg | Fully | Generate agenda from backlog priorities, capacity data, and retro action items |
| 6 | Sprint Review prep | 1x (every 2 weeks) | 45 min | 22m avg | Fully | Generate demo agenda and stakeholder summary from completed stories |
| 7 | Retro prep | 1x (every 2 weeks) | 45 min | 22m avg | Partially | Generate data-driven discussion topics; create anonymous survey from sprint signals |
| 8 | Coaching prep (1:1s) | 3x | 20 min | 1h 00m | Partially | Analyze patterns from team member's recent work; suggest coaching questions |
| 9 | Stakeholder emails & updates | 4x | 15 min | 1h 00m | Fully | Draft status emails from sprint data and impediment log |
| 10 | Metrics updating & visualization | 2x | 30 min | 1h 00m | Fully | Generate metric summaries and trend analysis from raw data |
| 11 | Retro action item follow-up | 3x | 10 min | 30m | Fully | Generate follow-up reminders with context for each action owner |
| 12 | Scrum of Scrums prep | 1x | 30 min | 30m | Fully | Generate cross-team dependency summary and risk update from team data |
| 13 | Backlog refinement support | 1x | 20 min | 20m | Partially | Pre-analyze stories for missing acceptance criteria; suggest story splits |
| 14 | Ad-hoc team support & questions | Daily | Varies | 1h 30m | Not | Human judgment required — relationship and context dependent |

---

## Time Summary

| Category | Current Weekly Time | Estimated After Automation | Savings |
|----------|-------------------|---------------------------|---------|
| **Fully Automatable** | 4h 07m | 0h 50m (review/approve time) | 3h 17m |
| **Partially Automatable** | 4h 00m | 2h 15m | 1h 45m |
| **Not Automatable** | 1h 30m | 1h 30m | 0h 00m |
| **Total** | **9h 37m** | **4h 35m** | **5h 02m** |

> **Potential weekly savings: ~5 hours** — redirected to coaching, team development, and strategic work.

---

## Prioritization Matrix

After completing the audit, rank your automation candidates:

| Priority | Activity to Automate | Reason | Effort to Set Up | Expected Weekly Savings |
|----------|---------------------|--------|-------------------|------------------------|
| 1 | Standup notes processing | Highest frequency, fully automatable | Low (1 prompt) | 1h 40m |
| 2 | Sprint report writing | High time cost, predictable format | Medium (prompt chain) | 45m |
| 3 | Stakeholder emails | Repetitive, template-driven | Low (1 prompt) | 1h 00m |
| 4 | Metrics updating | Data-driven, consistent format | Medium (data prep + prompt) | 1h 00m |
| 5 | [Your next priority] | | | |

---

## Instructions

1. **Track honestly for 2 full weeks** — include interruptions and context switching
2. **Include prep and follow-up time** — not just the activity itself
3. **Note variability** — some weeks are heavier than others
4. **Review with your manager** — Jennifer may have visibility into time you're not counting
5. **Re-audit monthly** — your time distribution will shift as you automate

---

## Reflection Questions

After completing the audit, discuss with Copilot:

```
Here's my weekly time audit as SM for the Velocity Squad:
[paste table]

1. Which activities have the best automation ROI (highest time savings, lowest setup effort)?
2. What am I spending time on that I shouldn't be doing at all?
3. What high-value SM activities am I NOT doing because I'm out of time?
4. Suggest a 3-week automation rollout sequence.
```
