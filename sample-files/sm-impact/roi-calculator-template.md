# SM Intervention ROI Calculator

A structured approach to quantifying the financial impact of Scrum Master interventions. Use this template to translate process improvements into dollar values that resonate with leadership.

---

## Methodology

SM impact is calculated across three categories:

1. **Time Savings** — Hours recovered from more efficient processes, applied to productive work
2. **Quality Improvement** — Reduced rework, fewer production issues, lower support burden
3. **Delivery Predictability** — Fewer missed commitments, reduced re-planning overhead, increased stakeholder confidence

**Formula per intervention:**

```
ROI = (Hours Saved per Sprint × Sprints per Quarter × Loaded Cost per Hour)
    + (Defects Avoided × Average Cost per Defect)
    + (Re-planning Hours Avoided × Loaded Cost per Hour)
```

---

## Assumptions Table

Define these values for your organization before calculating. The numbers below are illustrative defaults based on industry benchmarks for a mid-level software team.

| Assumption | Value | Source/Basis |
|------------|-------|-------------|
| **Loaded cost per developer hour** | $95/hr | Accenture internal rate for mid-level IC (salary + benefits + overhead) |
| **Loaded cost per SM hour** | $85/hr | SM band equivalent |
| **Team size** | 7 people | Velocity Squad headcount |
| **Sprints per quarter** | 6.5 sprints | 2-week sprints, ~13 weeks per quarter |
| **Working hours per sprint** | 80 hrs/person | 10 business days x 8 hours |
| **Average cost per production defect** | $2,500 | Includes triage, fix, test, deploy, and communication |
| **Average cost per missed sprint goal** | $4,800 | Re-planning meetings + stakeholder communication + delayed value |
| **Average cost of 1 blocked developer-day** | $760 | 8 hours x $95/hr |

**Note:** Adjust these values for your context. Use your organization's actual loaded cost rates if available. Conservative estimates are more credible than optimistic ones.

---

## Intervention ROI Calculations

### 1. Standup Duration Reduction (25 min to 15 min)

Reducing standup from 25 minutes to 15 minutes by introducing a parking lot, visible timer, and async blocker follow-ups.

| Component | Calculation | Value |
|-----------|-------------|-------|
| Time saved per standup | 10 min x 7 team members | 70 person-min (1.17 hrs) |
| Standups per sprint | 10 (daily, 2-week sprint) | |
| Time saved per sprint | 1.17 hrs x 10 standups | 11.7 hrs |
| Time saved per quarter | 11.7 hrs x 6.5 sprints | 76 hrs |
| **Dollar value per quarter** | 76 hrs x $95/hr | **$7,220** |

**Additional qualitative value:** Improved focus, reduced context-switching, better engagement from remote team members.

---

### 2. Impediment Resolution Speed (5 days to 2 days)

Implementing a 3-tier escalation framework with clear ownership and timelines, plus a visible blocker board.

| Component | Calculation | Value |
|-----------|-------------|-------|
| Days saved per impediment | 5 days - 2 days | 3 days |
| Average blocked developers per impediment | 1.5 people | |
| Developer-days recovered per impediment | 3 days x 1.5 people | 4.5 developer-days |
| Impediments per sprint (avg) | 3 | |
| Developer-days recovered per sprint | 4.5 x 3 impediments | 13.5 developer-days |
| Developer-days recovered per quarter | 13.5 x 6.5 sprints | 87.75 developer-days |
| **Dollar value per quarter** | 87.75 days x $760/day | **$66,690** |

**Note:** This is the highest-impact intervention. Blocked developers are the most expensive waste on a software team.

---

### 3. Sprint Goal Achievement (60% to 85%)

Coaching the PO on capacity-based planning, introducing confidence voting, and right-sizing sprint commitments.

| Component | Calculation | Value |
|-----------|-------------|-------|
| Sprints per quarter | 6.5 | |
| Missed goals before (40% miss rate) | 6.5 x 0.40 = 2.6 missed goals | |
| Missed goals after (15% miss rate) | 6.5 x 0.15 = 1.0 missed goals | |
| Goals saved per quarter | 2.6 - 1.0 | 1.6 fewer misses |
| **Dollar value per quarter** | 1.6 x $4,800/missed goal | **$7,680** |

**Additional qualitative value:** Higher stakeholder trust, fewer emergency re-planning sessions, improved team morale from consistent delivery.

---

### 4. Retro Action Completion (30% to 75%)

Assigning owners to every retro action item, adding actions to the sprint backlog, and reviewing completion at the start of each retrospective.

| Component | Calculation | Value |
|-----------|-------------|-------|
| Actions generated per retro | 4 (average) |  |
| Actions completed before (30%) | 1.2 per sprint | |
| Actions completed after (75%) | 3.0 per sprint | |
| Additional actions completed per sprint | 1.8 | |
| Avg time saved per completed action (future sprints) | 2 hrs/sprint (reduced friction, fewer recurring issues) | |
| Cumulative time saved per quarter | 1.8 actions x 2 hrs x 6.5 sprints | 23.4 hrs |
| **Dollar value per quarter** | 23.4 hrs x $95/hr | **$2,223** |

**Note:** The real ROI of retro actions compounds over time. Each completed improvement removes a recurring drag on the team. The calculation above is conservative — it only counts the immediate sprint after implementation.

---

### 5. Meeting Documentation Automation with Copilot

Using Microsoft Copilot to auto-generate meeting notes, action items, and sprint review summaries instead of manual documentation.

| Component | Calculation | Value |
|-----------|-------------|-------|
| SM time on documentation (before) | 4 hrs/sprint | Standup summaries, retro notes, review minutes |
| SM time on documentation (after) | 1 hr/sprint | Review and edit Copilot-generated output |
| SM time saved per sprint | 3 hrs | |
| SM time saved per quarter | 3 hrs x 6.5 sprints | 19.5 hrs |
| **Dollar value per quarter (SM time)** | 19.5 hrs x $85/hr | **$1,658** |
| Quality improvement | More complete, consistent documentation | Not quantified |
| Knowledge sharing | Notes available within minutes, not days | Not quantified |

---

## Quarterly Impact Summary

| Intervention | Quarterly Savings | Confidence |
|-------------|-------------------|------------|
| Standup duration reduction | $7,220 | High — directly measurable |
| Impediment resolution speed | $66,690 | Medium — based on estimates of blocked time |
| Sprint goal achievement | $7,680 | Medium — cost-per-miss is estimated |
| Retro action completion | $2,223 | Low-Medium — compounding effects are hard to isolate |
| Meeting documentation automation | $1,658 | High — directly measurable |
| **Total Quarterly Impact** | **$85,471** | |
| **Annualized Impact** | **$341,884** | |

---

## How to Present This

### Do

- **Lead with the total, then break it down.** Executives want the headline number first.
- **Use conservative estimates.** If someone questions your numbers, you want to be able to defend them. Round down, not up.
- **Acknowledge confidence levels.** Saying "I'm highly confident in X and moderately confident in Y" builds trust.
- **Compare to SM cost.** If your loaded annual cost is ~$170K and your annualized impact is ~$342K, that's a 2:1 return. Say so.
- **Bring the data source.** Be ready to show the Jira data, meeting logs, or survey results behind each number.

### Don't

- **Don't claim sole credit.** The team improved. You facilitated the conditions. Use language like "interventions I led" or "changes I facilitated."
- **Don't present without context.** Always pair numbers with the story of what was happening and why it changed.
- **Don't include interventions you can't defend.** If you can't explain how you calculated a number, leave it out.
- **Don't over-precision.** "$85,471" is fine in a spreadsheet. In a presentation, say "approximately $85K per quarter."

### Suggested Opening Statement

> "Over the past quarter, process improvements I facilitated for the Velocity Squad recovered approximately $85K in team productivity — primarily from faster impediment resolution and more efficient ceremonies. That represents roughly a 2:1 return on my fully-loaded cost."

### Handling Pushback

**"These numbers seem high."**
Point to the impediment resolution line. One blocked senior developer costs ~$760/day. Recovering 3 days across 3 impediments per sprint adds up fast. Offer to walk through the math.

**"How do we know this wouldn't have happened anyway?"**
Fair question. Point to the timeline: these changes correlate with specific interventions you introduced at identifiable dates. Before the intervention, the metric was flat. After, it changed. Correlation isn't proof, but it's evidence.

**"Can you sustain this?"**
Yes, because these are structural changes (new processes, frameworks, habits), not one-time fixes. The improvements are embedded in how the team works.
