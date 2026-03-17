# 90-Day AI Adoption Plan for Scrum Masters

**Goal:** Systematically integrate Microsoft Copilot into your SM practice over 3 months
**Starting Point:** You have Copilot access and basic familiarity
**Success Measure:** Measurable time savings, one successful prediction, established coaching rhythm

---

## Plan Overview

| Month | Theme | Focus Areas | Success Criteria |
|-------|-------|-------------|------------------|
| **Month 1** | Automate | Meeting docs, sprint reports, blocker tracking | 3+ hours/week saved on routine tasks |
| **Month 2** | Predict | Early warning signals, data-driven ceremonies | First successful early detection of a sprint risk |
| **Month 3** | Coach | Coaching practice regimen, prompt library mastery | Weekly coaching gym sessions established |

---

## Month 1: AUTOMATE (Weeks 1-4)

### Goal
Eliminate 3+ hours/week of manual information processing by automating your top time-sinks.

### Top 3 Time-Sinks to Target

| Time-Sink | Current Time/Week | Target Time/Week | Savings |
|-----------|-------------------|-------------------|---------|
| Meeting documentation (standups, ceremonies) | 3-4 hours | 1 hour | 2-3 hours |
| Sprint reports and status updates | 2 hours | 30 min | 1.5 hours |
| Blocker tracking and follow-up | 1.5 hours | 30 min | 1 hour |
| **Total** | **6.5-7.5 hours** | **2 hours** | **4.5-5.5 hours** |

### Week-by-Week Milestones

#### Week 1: Meeting Documentation

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Set up Copilot in Teams for meeting transcription | Copilot active in all recurring meetings |
| Tue | Run standup with Copilot note-taking; compare to manual notes | Side-by-side quality comparison |
| Wed | Refine prompt: "Extract action items, blockers, and decisions from this meeting" | Tested prompt saved to prompt library |
| Thu | Process a full day's meetings using only Copilot summaries | Time log showing actual time spent |
| Fri | Retrospective: What worked? What did Copilot miss? | Week 1 journal entry |

**Rollback trigger:** If Copilot summaries require more than 15 minutes of editing per meeting, simplify — use it only for action item extraction, not full summaries.

#### Week 2: Sprint Reports

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Gather all data sources for sprint report (board, burndown, impediments) | Data source inventory |
| Tue | Draft sprint report using Copilot: "Generate a sprint report from this data..." | First AI-assisted sprint report |
| Wed | Compare AI draft to your last manually written report | Quality gap analysis |
| Thu | Create a reusable sprint report prompt template | Prompt template in library |
| Fri | Time the full process end-to-end | Baseline measurement |

**Rollback trigger:** If the AI-generated report requires more than 50% rewriting, break it into smaller prompts — generate each section separately rather than the whole report at once.

#### Week 3: Blocker Tracking

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Consolidate all blocker sources (standup notes, Jira, Slack) into one input | Single blocker source-of-truth |
| Tue | Use Copilot to generate blocker status summary and aging report | First AI-generated blocker report |
| Wed | Draft follow-up messages for each open blocker using Copilot | Template for blocker follow-ups |
| Thu | Set up daily prompt: "Given these blockers, which are at risk of aging past 3 days?" | Daily blocker triage prompt |
| Fri | Review: How many blockers were resolved faster this week? | Week 3 metrics |

**Rollback trigger:** If blocker tracking feels more complicated with AI than without, simplify to one prompt: daily blocker summary from standup notes only.

#### Week 4: Integration & Measurement

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Run full daily rhythm with all 3 automated workflows | Integrated workflow test |
| Tue | Time every Copilot-assisted task; compare to pre-automation baseline | Time savings spreadsheet |
| Wed | Identify quality issues: What did Copilot get wrong this month? | Error log and mitigation plan |
| Thu | Refine all prompts based on month's experience | Updated prompt library |
| Fri | Month 1 retrospective: Are we saving 3+ hours/week? | Month 1 report |

### Month 1 Success Criteria

| Criteria | Measurement | Target |
|----------|-------------|--------|
| Time saved per week | Self-tracked time log | 3+ hours |
| Prompt library size | Count of tested, reusable prompts | 8-10 prompts |
| Quality of AI output | % of output usable without major edits | 70%+ |
| Confidence level | Self-rated 1-5 | 3+ ("comfortable") |

---

## Month 2: PREDICT (Weeks 5-8)

### Goal
Build an early warning system that catches sprint risks before they become blockers.

### Week-by-Week Milestones

#### Week 5: Data Foundation

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Audit available data: velocity history, blocker patterns, team health surveys | Data inventory document |
| Tue | Create a "sprint health dashboard" prompt using last 5 sprints of data | Sprint health prompt |
| Wed | Test: "Based on Sprint 47 data at Day 3, what risks do you see?" | First predictive analysis |
| Thu | Compare Copilot's risk assessment to what actually happened in Sprint 47 | Accuracy baseline |
| Fri | Identify the 3 most useful signals for early warning | Signal priority list |

**Rollback trigger:** If you don't have 5 sprints of clean historical data, start with just the current sprint. Use Copilot for pattern recognition on standup notes ("What themes are emerging in this week's standups?").

#### Week 6: Daily Signal Scanning

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Set up daily prompt: "Analyze these standup notes for early warning signals" | Daily scan running |
| Tue | Add burndown data to daily scan: "Given this burndown trajectory, will we hit the sprint goal?" | Enhanced daily scan |
| Wed | Cross-reference with impediment log: "Which of these blockers has the highest risk of escalation?" | Risk-ranked blocker list |
| Thu | Create a "concern → prediction → action" template | Prediction tracking format |
| Fri | Review: Did any signals this week predict a real problem? | Weekly signal accuracy |

#### Week 7: Data-Driven Ceremonies

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Pre-analyze sprint review data: "What were our top 3 wins and top 3 concerns this sprint?" | Ceremony prep with data |
| Tue | Generate retro seed questions from sprint data patterns | AI-informed retro facilitation |
| Wed | Use Copilot to compare this sprint's patterns to the last 3 sprints | Trend analysis for planning |
| Thu | Draft sprint planning risk flags: "Given these trends, what should we watch for next sprint?" | Predictive planning input |
| Fri | Full ceremony chain test: prep → capture → process → follow-up | End-to-end ceremony workflow |

**Rollback trigger:** If data-driven ceremony prep feels forced or adds time, scale back to one ceremony (retrospective only). Retro benefits most from pattern analysis.

#### Week 8: Early Warning System v1

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Compile all prediction attempts from Weeks 5-7; score accuracy | Prediction accuracy report |
| Tue | Identify your 3 best-performing prompts for prediction | Refined prompt set |
| Wed | Create a "sprint risk dashboard" prompt that combines all signals | Integrated risk prompt |
| Thu | Share a prediction with the team: "Based on the data, here's what I'm watching..." | First team-facing prediction |
| Fri | Month 2 retrospective: Did we catch a risk early? | Month 2 report |

### Month 2 Success Criteria

| Criteria | Measurement | Target |
|----------|-------------|--------|
| First successful prediction | Documented case of early risk detection | 1+ instances |
| Daily signal scan habit | Days per week running the scan | 4+ days/week |
| Ceremony data integration | Ceremonies using AI-prepared data | 2+ per sprint |
| Prediction accuracy | % of flagged risks that materialized | Tracking started (no target yet) |

---

## Month 3: COACH (Weeks 9-12)

### Goal
Establish a sustainable coaching practice amplified by AI — reflective journals, coaching prep, and continuous learning.

### Week-by-Week Milestones

#### Week 9: Reflective Practice

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Start an AI coaching journal: end each day with "What went well? What would I do differently?" | Journal template established |
| Tue | Use Copilot to identify patterns in your journal entries over the week | First self-coaching insight |
| Wed | Create a "coaching conversation prep" prompt for upcoming 1:1s | 1:1 prep prompt |
| Thu | Prep a coaching conversation using AI-generated questions | AI-prepped 1:1 |
| Fri | Reflect: Did the AI-prepped conversation go better than usual? | Journal entry |

#### Week 10: Coaching Gym Setup

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Design your "coaching gym" — 30 min/week practicing coaching scenarios with Copilot | Coaching gym format |
| Tue | First session: "Simulate a team member who is frustrated about sprint overcommitment" | Practice session notes |
| Wed | Second session: "I need to give feedback to a PO about unclear acceptance criteria" | Practice session notes |
| Thu | Create a library of 10 coaching scenarios relevant to your team | Scenario library |
| Fri | Retrospective on coaching gym: What's the learning value? | Quality assessment |

**Rollback trigger:** If coaching gym feels artificial after 2 sessions, pivot to "coaching debrief" — after each real coaching conversation, use Copilot to analyze what happened: "Here's what was said. What coaching patterns did I use? What else could I have tried?"

#### Week 11: Prompt Library Mastery

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Audit your full prompt library — categorize by use case | Organized prompt library |
| Tue | Identify gaps: What SM tasks still have no Copilot support? | Gap analysis |
| Wed | Create prompts for top 3 gaps | 3 new prompts |
| Thu | Share 3 best prompts with another SM; get feedback | Peer-reviewed prompts |
| Fri | Contribute prompts to the team/CoP prompt library | Shared prompt library updated |

#### Week 12: Sustainability & Assessment

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Mon | Full day using every established AI workflow — time everything | Complete workflow timing |
| Tue | Self-assess against the AI-Enabled SM Competency Model | Competency self-assessment |
| Wed | Create your personal "AI SM Operating System" (see ai-sm-operating-system-template.md) | Personal operating system v1 |
| Thu | Plan Month 4+: What's next? Advanced prompting? Copilot Studio? Scaling to other SMs? | Growth plan |
| Fri | 90-day retrospective: What changed? What's the ROI? | 90-day report |

### Month 3 Success Criteria

| Criteria | Measurement | Target |
|----------|-------------|--------|
| Coaching gym sessions | Weekly sessions completed | 3+ out of 4 weeks |
| Prompt library | Total tested, documented prompts | 20+ prompts |
| Reflective journal | Journal entries completed | 8+ entries |
| Peer sharing | Prompts shared with other SMs | 3+ prompts shared |

---

## Weekly Check-In Template

Copy this template every Friday:

```
## Week [X] Check-In — [Date]

### Time Saved This Week
- Meeting docs: ___ min saved
- Sprint reports: ___ min saved
- Blocker tracking: ___ min saved
- Other: ___ min saved
- **Total: ___ min saved**

### What Worked Well
1. ___
2. ___

### What Didn't Work
1. ___
   - Root cause: ___
   - Adjustment for next week: ___

### Prompts Added/Refined
- [prompt name]: [what changed]

### Prediction Accuracy (Month 2+)
- Signals flagged: ___
- Signals that materialized: ___

### Coaching Notes (Month 3+)
- Coaching gym session completed: Yes / No
- Journal entries this week: ___

### Confidence Level (1-5): ___
### Next Week's Focus: ___
```

---

## Rollback Decision Framework

Use this when something isn't working:

| Signal | Timeframe | Action |
|--------|-----------|--------|
| Copilot output requires >50% manual editing | After 1 week | Simplify the prompt; break into smaller tasks |
| A workflow takes MORE time with AI than without | After 2 weeks | Drop the AI step; revisit in Month 3 with better prompts |
| Team pushback on AI-generated artifacts | After 1 week | Stop sharing AI-generated output; use it for personal prep only |
| You skip the daily signal scan 3+ days in a row | After 1 week | Reduce to 3x/week; attach it to an existing habit (after standup) |
| Coaching gym feels artificial/useless | After 2 sessions | Switch to coaching debrief model (analyze real conversations) |
| Overall: no measurable time savings after Month 1 | After 4 weeks | Pause and reassess — are you solving the right problems? |

---

## Monthly and Quarterly Activities

### Monthly (Last Friday of Each Month)

| Activity | Duration | Output |
|----------|----------|--------|
| Prompt library review and cleanup | 30 min | Archived unused prompts, refined active ones |
| Time savings analysis | 15 min | Monthly ROI summary |
| Competency self-assessment update | 15 min | Progress on competency model |
| Peer sharing session | 30 min | Lessons learned shared with SM community |

### Quarterly (End of 90 Days and Beyond)

| Activity | Duration | Output |
|----------|----------|--------|
| Full 90-day retrospective | 60 min | Comprehensive adoption report |
| AI tool landscape scan | 30 min | New features to evaluate (see new-feature-evaluation-template.md) |
| Operating system refresh | 45 min | Updated weekly rhythm based on what's working |
| Goal setting for next quarter | 30 min | Next 90-day plan |

---

*This plan pairs with ai-sm-operating-system-template.md (weekly rhythm), competency-model.md (self-assessment), and new-feature-evaluation-template.md (staying current).*
