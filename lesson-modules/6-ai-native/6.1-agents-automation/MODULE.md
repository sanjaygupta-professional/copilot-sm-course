# Module 6.1: AI Agents & Workflow Automation

**Duration:** 35 minutes
**Prerequisites:** Level 5 completed

---

## What You'll Learn

By the end of this module, you will:
1. Design Copilot agent workflows that automate meeting docs, sprint reports, and blocker tracking
2. Build multi-step agent chains for end-to-end ceremony workflows
3. Design custom Copilot agents using Copilot Studio concepts
4. Automate the "weekly SM rhythm" — targeting the top time-sinks from survey data (meeting docs 60%, sprint reports 50%, blocker tracking 30%)
5. Know when automation helps vs. harms (the human judgment boundary)

---

## Introduction

You've spent five levels learning to prompt Copilot for individual tasks. Now it's time to think in systems.

The average Scrum Master spends 8-12 hours per week on documentation, reporting, and status tracking — work that follows predictable patterns. Survey data from SM practitioners consistently highlights the same time-sinks:

| Time-Sink | % of SMs Reporting | Avg Hours/Week | Automatable? |
|---|---|---|---|
| Meeting documentation | 60% | 3-4 hrs | Mostly |
| Sprint/status reports | 50% | 2-3 hrs | Mostly |
| Blocker tracking & follow-up | 30% | 1-2 hrs | Partially |
| Ceremony preparation | 25% | 1-2 hrs | Partially |
| Stakeholder communication | 20% | 1-2 hrs | Partially |

In this module, you'll move from one-off prompts to agent workflows — multi-step chains that handle entire processes. You'll also learn the critical skill of knowing where automation stops and human judgment begins.

---

## Exercise 1: Time-Sink Audit (5 min)

**Level: Basic**

Before automating anything, you need a clear picture of where your time actually goes. This exercise maps your weekly SM activities and rates each one for automation potential.

```
I'm a Scrum Master for the Velocity Squad (7 members) at Accenture, currently in Sprint 47 of the Horizon Program (4 teams).

Help me conduct a time-sink audit of my weekly SM activities.

MY WEEKLY ACTIVITIES:
- Monday: Scrum of Scrums prep + facilitation (1.5 hrs)
- Monday-Friday: Daily standup facilitation (15 min/day = 1.25 hrs)
- Monday-Friday: Standup notes and action tracking (15 min/day = 1.25 hrs)
- Tuesday: Sprint report for stakeholders (1.5 hrs)
- Wednesday: Backlog refinement prep (45 min)
- Wednesday: Refinement facilitation (1 hr)
- Thursday: Impediment log update and follow-up (45 min)
- Friday: Retrospective prep (30 min)
- Ad hoc: Blocker escalation and resolution (2-3 hrs)
- Ad hoc: Stakeholder questions and status requests (1-2 hrs)
- Ad hoc: Team health check-ins (1 hr)

For each activity, rate it:
- **FULLY AUTOMATABLE** — Copilot can handle end-to-end with minimal review
- **PARTIALLY AUTOMATABLE** — Copilot does the heavy lifting, I review and adjust
- **NOT AUTOMATABLE** — Requires human judgment, empathy, or real-time facilitation

Then:
1. Calculate my total weekly hours and the % that's automatable
2. Rank activities by (time spent × automation potential) to find highest-impact targets
3. Recommend my top 3 automation priorities
4. Estimate realistic time savings per week

Format the output as a table I can reference throughout this module.
```

### What You Should See

A structured audit showing:
- Total weekly hours (likely 12-16 hrs of SM activities)
- Top automation targets: standup notes, sprint reports, impediment log updates
- Estimated time savings of 4-6 hours/week from automating the top 3
- Clear distinction: facilitation and coaching remain human, documentation and reporting become automated

> **Reference:** See `sample-files/automation/time-sink-audit-template.md` for a blank template you can customize for your actual role.

---

## Exercise 2: The One-Prompt Sprint Report (5 min)

**Level: Basic**

Sprint reports are the single highest-ROI automation target. This exercise compresses what typically takes 90 minutes into a single prompt.

```
Generate a Sprint 47 status report for the Velocity Squad.

INPUT DATA:

VELOCITY:
- Sprint 47 commitment: 38 points
- Sprint 47 completed: 35 points (92% completion rate)
- 3-sprint rolling average: 36 points
- Sprint 46: 34 points | Sprint 45: 38 points

COMPLETED WORK:
- Notification system MVP (13 pts) — 3 features shipped
- Search optimization (8 pts) — 45% performance improvement
- API rate limiting (8 pts) — production-ready
- Caching layer (6 pts) — deployed to staging

CARRYOVER:
- Push notifications (8 pts) — blocked by third-party API changes, carrying to Sprint 48
- Dashboard loading optimization (3 pts) — stretch goal, deprioritized

IMPEDIMENTS:
- Third-party API documentation outdated (blocked push notifications for 3 days)
- CI/CD pipeline flaky tests — 2 builds failed, added 4 hrs debugging
- Design resource (David) at 50% capacity due to cross-team commitment

TEAM HEALTH:
- Morale: Stable (team proud of search optimization results)
- Concern: Lisa showing signs of overload (worked late 3 of 5 days)
- Win: Marcus led his first technical design session

Generate a stakeholder-ready report with:
1. **Executive Summary** (3 sentences max)
2. **Sprint Scorecard** (velocity, completion rate, trend)
3. **Key Deliverables** (business value, not just features)
4. **Risks & Impediments** (status, mitigation, owner)
5. **Sprint 48 Outlook** (capacity, planned work, key risks)
6. **Team Spotlight** (one positive callout)

Tone: Professional, honest about challenges, forward-looking. This goes to Jennifer Walsh (VP) and Richard Thorne (CKO).
```

### What You Should See

A polished report that:
- Leads with business value ("45% search improvement" not "8 story points")
- Frames carryover honestly without being defensive
- Highlights the Lisa overload risk as something being actively managed
- Celebrates Marcus's growth
- Takes about 2 minutes to review vs. 90 minutes to write from scratch

> **Time savings:** If you generate and review this report weekly, you save ~75 minutes per sprint. Over a quarter, that's 5+ hours returned to coaching and facilitation.

---

## Exercise 3: Ceremony Automation Chain (8 min)

**Level: Intermediate**

Individual prompts are useful. Chains are transformative. This exercise builds a 4-step automation chain that handles the full lifecycle of any ceremony.

### Step 1: Pre-Ceremony Agenda Generation

```
I'm preparing for Sprint 48 Planning for the Velocity Squad.

CONTEXT:
- Sprint 47 velocity: 35 points (committed 38)
- Carryover: Push notifications (8 pts), dashboard loading (3 pts)
- Capacity: Lisa at 80% (taking Friday off), David at 50% (cross-team), all others at 100%
- Raj (PO) has 12 stories refined, totaling ~52 points
- Key risk: Third-party API dependency for push notifications still unresolved

Generate a FACILITATION AGENDA with:
1. Time-boxed sections (total: 2 hours max)
2. Specific facilitation questions for each section
3. Decision points that need explicit team agreement
4. A "parking lot" protocol for scope discussions
5. Pre-meeting message I can post in Teams 30 min before

Format as a checklist I can print and reference during the ceremony.
```

### Step 2: Real-Time Notes Template

```
Based on the Sprint 48 Planning agenda you just generated, create a REAL-TIME NOTES TEMPLATE.

For each agenda section, include:
1. Pre-filled headers matching the agenda
2. Placeholder fields: [Decision Made], [Action Item], [Owner], [Due Date]
3. A "Commitments" section at the bottom
4. A "Parking Lot" section for deferred topics
5. A "Risks Identified" section

Format as a markdown template I can paste into OneNote or a Teams Wiki before the meeting starts.
```

### Step 3: Post-Ceremony Action Extraction

```
Here are my raw notes from Sprint 48 Planning (paste your actual notes or use this example):

RAW NOTES:
- Team agreed to commit 34 points (conservative due to carryover)
- Push notifications: Lisa and Marcus will pair on API investigation first 2 days
- Lisa raised concern about testing coverage for notification system — James offered to pair
- Raj wants to add "urgent" priority filter — team pushed back, agreed to evaluate after Sprint 48
- David confirmed 5 days this sprint (up from 4 last sprint)
- Emma flagged: documentation for caching layer still incomplete, needs 1 day
- Sprint goal: "Complete notification system and resolve API dependency"

Extract:
1. **COMMITTED STORIES** — list with owners and points
2. **ACTION ITEMS** — who, what, by when
3. **DECISIONS MADE** — what was agreed and why
4. **RISKS ACCEPTED** — what could go wrong and mitigation
5. **DEFERRED ITEMS** — what was explicitly NOT committed to
6. **SPRINT GOAL** — as stated
```

### Step 4: Follow-Up Reminders

```
Based on the Sprint 48 Planning action items you just extracted, generate:

1. **IMMEDIATE POST-MEETING MESSAGE** — Teams message summarizing outcomes (post within 30 min)
2. **DAY 2 CHECK-IN PROMPTS** — Specific questions for standup about early-sprint actions
3. **MID-SPRINT REVIEW TRIGGERS** — What to check at day 5 to see if we're on track
4. **ESCALATION CRITERIA** — Conditions that should trigger immediate action (not wait for standup)

For each, give me the exact text I can copy-paste into Teams.
```

### What You Should See

A complete ceremony lifecycle in 4 connected prompts:
- Agenda that prevents the common planning pitfalls
- Notes template that makes capture easy during the meeting
- Clean action extraction that would normally take 30 minutes of post-meeting processing
- Follow-up system that ensures nothing falls through cracks

> **Reference:** See `sample-files/automation/ceremony-chain-template.md` for a reusable template of this 4-step chain pattern.

> **Key insight:** The chain pattern works for ANY ceremony. Replace the context and you have the same workflow for retros, reviews, and refinement.

---

## Exercise 4: Custom Agent Design (7 min)

**Level: Intermediate**

Now think bigger. What if you had a persistent Copilot agent that knew your team, had access to your data, and could take action on triggers?

```
I want to design a "Velocity Squad SM Agent" using Copilot Studio concepts. This agent should function as my always-on SM assistant.

AGENT DESIGN REQUIREMENTS:

1. **PERSISTENT CONTEXT** — The agent knows:
   - Team roster, roles, and working agreements
   - Current sprint number, goal, and commitment
   - Historical velocity (last 6 sprints)
   - Active impediments and their status
   - Stakeholder list and communication preferences
   - Team health trends

2. **DATA ACCESS** — The agent can read:
   - Azure DevOps / Jira board (story status, burndown)
   - Teams messages in the Velocity Squad channel
   - Sprint planning and retro notes (SharePoint)
   - Calendar (ceremony schedule, PTO)

3. **TRIGGER-BASED ACTIONS:**
   - Daily at 9 AM: Generate standup prep summary (what changed since yesterday)
   - When story moves to "Blocked": Alert me with context and suggested action
   - 24 hours before ceremony: Generate prep materials
   - When velocity trend drops 2+ sprints: Flag with analysis
   - When team member works 3+ late days in a week: Private alert to me

4. **INTERACTION MODEL:**
   - I can ask questions in natural language ("How's Lisa's workload this sprint?")
   - It proactively surfaces anomalies ("Marcus hasn't moved any stories in 2 days")
   - It drafts but NEVER sends communications without my approval

Design this agent with:
- Architecture diagram (text-based)
- Data flow for each trigger
- Permission model (what it can read vs. write)
- Guardrails (what it should NEVER do autonomously)
- Implementation roadmap (what's possible today vs. 6 months vs. aspirational)
```

### What You Should See

An agent design that includes:
- Clear separation between read (autonomous) and write (human-approved) actions
- Realistic assessment: daily summaries and blocker alerts are buildable today; proactive anomaly detection is emerging; autonomous communication is aspirational
- Guardrails: never send messages on your behalf, never modify sprint data, never provide performance feedback
- Implementation starting point: Power Automate flows for triggers, Copilot Studio for the conversational interface, SharePoint for persistent context

> **Reference:** See `sample-files/automation/agent-design-spec-template.md` for a blank agent specification template.

---

## Exercise 5: Automated Early Warning System (5 min)

**Level: Advanced**

This exercise combines the signal-detection skills from Module 4.2 with automation to create a daily early warning scan.

```
Design an automated early warning system for the Velocity Squad.

SIGNAL SOURCES (from Module 4.2):
- Burndown data (Azure DevOps)
- Daily standup notes (Teams/OneNote)
- Team channel activity (Teams)
- PR review times (GitHub/Azure DevOps)
- Story cycle time (board data)

DETECTION RULES:
1. **Sprint Health:**
   - Burndown deviation > 15% from ideal at any point → YELLOW
   - Burndown deviation > 30% → RED
   - No stories completed by day 3 → YELLOW

2. **Individual Signals:**
   - Team member hasn't updated stories in 2+ days → CHECK IN
   - Same person blocked on 2+ stories → ESCALATE
   - PR open > 24 hours without review → NUDGE

3. **Team Dynamics:**
   - Standup notes show same blocker 3+ days → ESCALATE
   - Channel activity drops significantly (compared to sprint baseline) → WATCH
   - After-hours commits increase for any individual → PRIVATE CHECK-IN

For each detection rule, generate:
1. The specific data query or check
2. The alert message (what I see in Teams)
3. Recommended first action
4. Escalation path if first action doesn't resolve

Output as a monitoring dashboard specification I could implement with Power Automate + Teams.
```

### What You Should See

A practical early warning specification with:
- Tiered alerts (WATCH / YELLOW / RED / ESCALATE) with clear thresholds
- Specific Teams messages: "Sprint 48 Day 3: Burndown shows 18% deviation. 2 stories still in 'In Progress' with no movement. Suggested action: Check with Lisa and Marcus in today's standup."
- Implementation notes distinguishing what Power Automate can do today vs. what needs custom development
- Privacy considerations: individual workload alerts go only to you, never to the team channel

---

## Exercise 6: The Human Judgment Boundary (5 min)

**Level: Advanced**

This is the most important exercise in the module. Automation without boundaries is dangerous. Here you'll define exactly where the line is.

```
For each of the following SM workflows, define the boundary between AI automation and human judgment.

WORKFLOWS:
1. Sprint reporting
2. Impediment tracking and escalation
3. Ceremony preparation
4. Daily standup facilitation
5. Team health monitoring
6. Stakeholder communication
7. Coaching and mentoring
8. Conflict resolution
9. Performance concerns
10. Team morale and psychological safety

For each workflow, specify three zones:

**AGENT DOES** (fully automated, I review output):
- [specific tasks]

**AGENT RECOMMENDS** (AI drafts, I decide and act):
- [specific tasks]

**AGENT NEVER TOUCHES** (human-only, no AI involvement):
- [specific tasks]

Also identify:
- The RISK if the boundary is set wrong (what goes wrong if AI does too much)
- The COST if the boundary is set too conservatively (what time is wasted)

Present as a decision matrix I can reference when designing any new automation.
```

### What You Should See

A clear boundary matrix revealing that:
- **Fully automatable:** Data gathering, report drafting, scheduling reminders, status aggregation
- **AI recommends, human decides:** Impediment escalation paths, ceremony format suggestions, stakeholder message tone
- **Human only, always:** Coaching conversations, conflict mediation, trust-building, psychological safety interventions, performance feedback

The critical insight: the things that matter most — coaching, trust, conflict resolution — are precisely the things that cannot be automated. Automation's job is to free up your time and attention FOR those human moments.

---

> ### Signals to Watch For
>
> As you build automation into your SM practice, watch for these signals:
>
> **Healthy automation:**
> - You spend MORE time coaching and facilitating, not less time with the team
> - Reports go out faster AND are more accurate
> - You catch problems earlier because you have systematic monitoring
> - The team doesn't even know what's automated — they just see a more responsive SM
>
> **Unhealthy automation:**
> - You start skipping review of automated outputs ("it's usually fine")
> - Team members feel monitored rather than supported
> - You automate communication and relationships start feeling transactional
> - You have more free time but aren't investing it in the team

---

## When This Doesn't Work

Automation can fail or backfire in specific situations:

- **Stale context:** Your agent uses outdated team information, generating misleading reports. Fix: build context refresh into your weekly rhythm.
- **False positives:** Early warning system flags normal variation as problems, creating alert fatigue. Fix: tune thresholds over 2-3 sprints using actual data.
- **Over-automation:** You automate stakeholder communication and a VP notices the messages feel generic. Fix: always personalize the last mile.
- **Privacy concerns:** Team members discover the monitoring system and feel surveilled. Fix: be transparent about what you track and why. Share the dashboard with the team.
- **Tool limitations:** Power Automate or Copilot Studio can't do what you designed. Fix: start with the simplest possible version and iterate.

---

## Module Complete!

You now know how to:
- ✅ Audit your SM activities for automation potential
- ✅ Build single-prompt automations for high-ROI tasks like sprint reports
- ✅ Chain prompts into end-to-end ceremony workflows
- ✅ Design custom Copilot agents with persistent context and trigger-based actions
- ✅ Create automated early warning systems for sprint and team health
- ✅ Define the human judgment boundary — where automation stops and leadership begins

---

## Next Steps

Continue to **Module 6.2: AI as Coaching Partner & Practice Simulator**

---

## Quick Reference

### Time-Sink Audit
```
List my weekly SM activities with time estimates.
Rate each: fully automatable / partially / not at all.
Rank by (time × automation potential). Recommend top 3 targets.
```

### One-Prompt Sprint Report
```
Generate Sprint [X] report. Velocity: [data]. Completed: [stories].
Carryover: [items]. Impediments: [list]. Team health: [notes].
Format: executive summary, scorecard, deliverables, risks, outlook, spotlight.
Audience: [stakeholders].
```

### Ceremony Chain (4 steps)
```
Step 1: Generate facilitation agenda for [ceremony]. Context: [sprint data, capacity].
Step 2: Create real-time notes template matching the agenda.
Step 3: Extract actions, decisions, risks from these raw notes: [paste notes].
Step 4: Generate follow-up messages: immediate summary, day 2 check-ins, mid-sprint triggers.
```

### Custom Agent Design
```
Design an SM agent for [team]. Persistent context: [what it knows].
Data access: [what it reads]. Triggers: [when it acts].
Guardrails: [what it never does autonomously].
```

### Early Warning System
```
Design early warning system. Signal sources: [list data].
Detection rules: [thresholds for sprint health, individual signals, team dynamics].
For each rule: data query, alert message, first action, escalation path.
```

### Human Judgment Boundary
```
For [workflow]: what should the agent DO, RECOMMEND, and NEVER TOUCH?
Include risk of over-automation and cost of under-automation.
```

---

**Ready to use AI as a coaching partner? Let's continue to Module 6.2!**
