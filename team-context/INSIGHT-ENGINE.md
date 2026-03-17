# Insight Engine

The Insight Engine is the Analytics & Reporting team within the Horizon Program. This team has no dedicated Scrum Master. You interim-cover this team at 20% of your time, making it the "what happens without a good SM" scenario in the course.

---

## Team Overview

| Attribute | Details |
|-----------|---------|
| **Team Name** | Insight Engine |
| **Organization** | Accenture - Internal Digital Products |
| **Product** | AKX (Accenture Knowledge Exchange) |
| **Focus Area** | Analytics & Reporting |
| **Team Size** | 5 members |
| **Sprint Length** | 1-week "iterations" (not true sprints) |
| **Current Iteration** | Unclear - numbering is inconsistent |
| **Scrum Master** | Vacant (you cover 20% interim) |
| **Work Tracking** | Mix of Jira and spreadsheets |

---

## Team Structure

| Role | Name | Location | Notes |
|------|------|----------|-------|
| Product Owner / Acting Project Lead | Nadia Petrova | New York | Overwhelmed, filling PO + PM + partial SM roles |
| Senior Developer / Informal Tech Lead | Alex Turner | Chicago | Opinionated, makes unilateral technical decisions |
| Developer / Data Engineer | Jordan Lee | New York | Quiet, capable, heads-down worker |
| Developer | Sam Patel | New York | Raj Patel's cousin (coincidence), 2 years experience |
| QA Engineer (Part-time) | Maya Chen | New York | Shared with Catalyst Crew, ~40% allocated here |

---

## The Current State

This team is the cautionary tale. It demonstrates what happens when a capable group of individuals operates without agile practices, servant leadership, or protected team norms.

### What Passes for Process

| Practice | Status |
|----------|--------|
| Sprint Planning | Does not exist. Nadia assigns work via Slack and email. |
| Daily Standup | Informal. Sometimes happens, sometimes doesn't. No fixed time. |
| Sprint Review | Nadia demos to stakeholders ad-hoc when features are ready. |
| Retrospective | Last one held 3 months ago. No one remembers the action items. |
| Backlog Refinement | Nadia maintains a spreadsheet. Jira is partially updated. |
| Definition of Done | Unwritten. Each developer has their own standard. |

### Work Tracking

The team's work is split across two systems with no single source of truth:

- **Jira** - Has a backlog that's 6 months out of date. Some items are tracked here.
- **Google Sheets** - Nadia's personal tracking sheet. This is the actual source of truth, but only she updates it.
- **Slack threads** - Many tasks exist only as Slack messages. If the message scrolls out of view, the task is forgotten.

---

## Team Dynamics

### Strengths

- **Strong individual talent** - Alex and Jordan are technically excellent
- **Important product** - The analytics dashboard is genuinely valuable and used by leadership
- **Willingness to change** - Sam and Jordan have both mentioned wanting more structure
- **Nadia cares deeply** - She's burning out because she cares, not because she doesn't

### Challenges

- **No servant leadership** - Without an SM, nobody removes impediments, facilitates conversations, or protects the team
- **Nadia's burnout** - She's doing the work of 3 roles. She stays late every day. She hasn't taken PTO in 8 months.
- **Alex's unilateral decisions** - He decides architecture, technology choices, and priorities without consulting the team or Nadia. He's usually right technically, but the team has no voice.
- **No retrospectives** - Problems pile up with no forum to discuss them. Jordan and Sam have stopped raising issues because nothing changes.
- **Unreliable output** - The analytics dashboards that all other teams depend on are frequently broken, delayed, or inaccurate. This causes program-level pain.
- **Maya is stretched thin** - As a part-time shared QA resource, she can't provide consistent quality coverage

---

## Why This Team Matters

### Everyone Depends on Insight Engine

The analytics dashboards this team builds are used by:

| Consumer | What They Need | Impact When Broken |
|----------|---------------|-------------------|
| Velocity Squad | Sprint metrics, velocity charts | Your team can't do data-driven retrospectives |
| Catalyst Crew | Search performance analytics | Can't measure search improvement initiatives |
| Nexus Team | Mobile usage metrics | Can't validate mobile app beta success |
| Jennifer Walsh | Program-level dashboards | Can't report to Richard Thorne with confidence |
| Richard Thorne | OKR tracking, adoption metrics | Executive decisions made on stale or wrong data |

### Current Reliability

| Metric | Current | What It Should Be |
|--------|---------|-------------------|
| Dashboard uptime | ~85% | 99%+ |
| Data freshness | 24-48 hours delayed | Real-time or near-real-time |
| Report accuracy | Unknown (no QA process) | Validated and trusted |
| Feature request backlog | 47 items, unprioritized | Prioritized and estimated |
| Average delivery time | "It's done when it's done" | Predictable |

---

## Your Interim Role (20%)

Jennifer Walsh asked you to cover this team at 20% of your time while the SM position is filled. The hiring process has been open for 2 months with no strong candidates yet.

### What You've Done So Far

In your first 3 weeks of interim coverage, you've:

1. Attended 2 of their informal "standups" (they happened to occur while you were available)
2. Had a 1:1 with Nadia where she described feeling overwhelmed
3. Reviewed their Jira board and found it unusable in its current state
4. Observed Alex making a major architectural decision in a Slack thread without team input

### What You Haven't Done Yet

- Established any regular ceremony cadence
- Had 1:1s with Alex, Jordan, Sam, or Maya
- Created any working agreements
- Addressed the Jira/spreadsheet split
- Raised the team's state as a program-level concern to Jennifer

### The Dilemma

You have 20% of your time (roughly 1 day per week) for this team. That's not enough to be a proper SM. You need to:

- Triage: what's the highest-impact change you can make with limited time?
- Coach: help Nadia reclaim her PO role by shedding the SM and PM responsibilities
- Stabilize: get basic ceremonies running so the team has a foundation
- Advocate: make the case to Jennifer that this team needs a full-time SM urgently

This is a recurring exercise scenario throughout the course.

---

## Key Personalities

### Nadia Petrova - The Overwhelmed PO

Nadia is a skilled product person who has been forced into too many roles. She knows the analytics domain deeply and has strong stakeholder relationships. But she's drowning.

**Signs of burnout you've observed:**
- Responding to Slack messages at 11 PM
- Canceling her own 1:1s to "get work done"
- Becoming short-tempered in meetings (unlike her usual demeanor)
- Saying "I'll just do it myself" when things fall through cracks

### Alex Turner - The Unilateral Tech Lead

Alex is technically brilliant. His architectural instincts are usually correct. The problem is process, not skill.

**Patterns you've observed:**
- Makes technology decisions in private Slack DMs with Jordan, then announces them as fait accompli
- Dismisses process suggestions as "overhead"
- Respects competence - if you bring data and clear reasoning, he'll listen
- Has said: "We don't need a Scrum Master, we need fewer meetings"

---

## Dependencies

### Incoming Dependencies

| From | What | Impact |
|------|------|--------|
| All Teams | Metrics collection endpoints | Inconsistent data from teams with different formats |
| Tom Harrison (Infra) | Data pipeline, analytics database | Batch processing jobs need infrastructure support |

### Outgoing Dependencies

| To | What | Impact |
|----|------|--------|
| All Teams | Analytics dashboards | Unreliable, causing frustration program-wide |
| Jennifer Walsh | Program metrics | Executive reporting depends on this data |
| Richard Thorne | OKR tracking | Quarterly reviews use these dashboards |

---

**See also:**
- [PROGRAM-PERSONAS.md](PROGRAM-PERSONAS.md) - Detailed profiles of Nadia, Alex, and others
- [HORIZON-PROGRAM.md](HORIZON-PROGRAM.md) - Program-level context
- [TEAM.md](TEAM.md) - Your primary team, the Velocity Squad
