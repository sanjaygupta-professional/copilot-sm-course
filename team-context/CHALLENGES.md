# Velocity Squad Challenges

The specific challenges you'll address throughout the course.

---

## Overview

After 3 months with the Velocity Squad, you've identified six key challenges affecting team performance. These challenges will be the focus of exercises throughout the course.

| Challenge | Impact | Severity |
|-----------|--------|----------|
| Velocity Inconsistency | Unpredictable delivery | High |
| Retrospective Fatigue | No improvement | High |
| Standup Inefficiency | Wasted time | Medium |
| Design Bottleneck | Blocked stories | High |
| Remote Inclusion | Team cohesion | Medium |
| PO Coaching Needs | Story quality | Medium |

---

## Challenge 1: Velocity Inconsistency

### The Problem

Sprint velocity swings wildly from 35 to 55 points - a 20-point range that makes planning unreliable.

| Sprint | Velocity | Deviation from Average |
|--------|----------|----------------------|
| Sprint 40 | 48 | +3 |
| Sprint 41 | 52 | +7 |
| Sprint 42 | 35 | -10 (holiday sprint) |
| Sprint 43 | 55 | +10 |
| Sprint 44 | 42 | -3 |
| Sprint 45 | 38 | -7 |
| Sprint 46 | 45 | 0 |
| Sprint 47 | 42 | -3 |

**Average:** 45 points | **Range:** 35-55 | **Standard Deviation:** 7.2

### Root Causes

1. **Capacity variability** - PTO, holidays not well-factored
2. **Design dependencies** - David's availability blocks stories unpredictably
3. **Estimation inconsistency** - Different team members estimate differently
4. **Scope creep** - Stories grow mid-sprint
5. **Technical debt** - Unexpected complexity from legacy code

### Impact

- Stakeholders don't trust delivery commitments
- Planning is guesswork
- Team feels like they're failing
- Carryover creates guilt and pressure

### Course Exercises

- **Module 1.4:** Analyze velocity data with Analyst agent
- **Module 2.1:** Improve sprint planning to address causes
- **Module 2.2:** Track impediments affecting velocity

---

## Challenge 2: Retrospective Fatigue

### The Problem

The same issues come up sprint after sprint. Action items are created but not completed. The team is losing faith in the retrospective process.

### Evidence

**Sprint 44 Retro Actions:**
- [ ] Implement focus Fridays (never started)
- [ ] Timebox sprint planning to 2 hours (partially done)
- [ ] Create async decision log (never started)

**Sprint 45 Retro Actions:**
- [ ] Focus Fridays (raised again)
- [ ] Better requirements from PO (ongoing)
- [ ] Tech debt allocation (never started)

**Sprint 46 Retro Actions:**
- [ ] Focus Fridays (raised AGAIN)
- [ ] 10% tech debt time (raised again)
- [ ] Design capacity escalation (pending)

### Root Causes

1. **No ownership** - Actions have no clear owner
2. **No follow-up** - SM doesn't track action completion
3. **Too many actions** - Team takes on 5+ items, completes 1
4. **Same format** - Start/Stop/Continue is stale
5. **Systemic issues** - Some problems are beyond team control

### Impact

- Team sees retros as pointless
- Same frustrations build over time
- Improvement culture eroding
- Team morale declining

### Course Exercises

- **Module 1.3:** Synthesize retro feedback for patterns
- **Module 2.1:** Design fresh retrospective formats
- **Module 2.3:** Track improvement metrics over time

---

## Challenge 3: Standup Inefficiency

### The Problem

Daily standups are running 25 minutes instead of the target 15 minutes.

### Observed Patterns

**What's Happening:**
- Status reports instead of blocker focus
- Problem-solving in standup (should be offline)
- Lisa gives too much technical detail
- Side conversations start
- People wait until standup to raise blockers (should raise immediately)
- Raj adds "one quick thing" (scope discussions)

**Time Breakdown (Typical Standup):**
| Activity | Time | Should Be |
|----------|------|-----------|
| Actual updates | 10 min | 7 min |
| Problem-solving | 8 min | 0 min |
| Side conversations | 5 min | 0 min |
| "Quick questions" | 2 min | 0 min |
| **Total** | **25 min** | **15 min max** |

### Impact

- 10 min/day x 5 days x 7 people = 350 min/week wasted
- Developer frustration (flow interrupted longer)
- Important blockers get lost in noise
- Meeting fatigue

### Course Exercises

- **Module 1.3:** Process standup notes to identify patterns
- **Module 2.1:** Redesign standup format

---

## Challenge 4: Design Bottleneck

### The Problem

David (UX Designer) is shared across 3 teams, making design capacity a constant bottleneck.

### Impact by Sprint

| Sprint | Stories Blocked | Points Blocked | Carryover |
|--------|----------------|----------------|-----------|
| Sprint 44 | 4 stories | 15 points | 8 points |
| Sprint 45 | 3 stories | 11 points | 5 points |
| Sprint 46 | 3 stories | 13 points | 8 points |
| Sprint 47 | 2 stories | 8 points | (current) |

**Total Impact:** ~47 points blocked over 4 sprints

### Root Causes

1. **Organizational structure** - Design is a shared service
2. **No dedicated designer** - Velocity Squad shares David with 2 other teams
3. **Design work not planned ahead** - Stories enter sprint without designs ready
4. **Review cycles** - Multiple rounds of feedback extend timelines
5. **Priority conflicts** - Other teams' urgencies override Velocity Squad

### Attempted Solutions

- Asked David to prioritize Velocity Squad (temporary help)
- Tried doing design in sprint (creates waterfall within sprint)
- Escalated to Jennifer (acknowledged but no action yet)

### Course Exercises

- **Module 2.2:** Analyze impediment patterns, draft escalation
- **Module 1.4:** Research industry approaches to shared resources
- **Module 1.9:** Draft escalation email with Outlook Copilot

---

## Challenge 5: Remote Inclusion

### The Problem

Priya works from Bangalore (IST timezone, 10.5 hours ahead of NY). She sometimes feels excluded from decisions and team bonding.

### Symptoms

**Communication Gaps:**
- Decisions made in hallway conversations (not documented)
- Slack discussions happen during her night
- By morning, decisions are "already made"
- Limited social connection with team

**Ceremony Challenges:**
- Standup at 8 PM her time (video fatigue)
- Her items get less airtime in retros
- Connection issues affect participation
- Hard to read room over video

### What Priya Has Said

> "I saw the discussion in Slack but by the time I responded, the decision was already made."

> "Sometimes I feel like the team forgets about the timezone difference."

> "I'd love to feel more connected to everyone, but it's hard from here."

### Root Causes

1. **Timezone math** - Team forgets the 10.5 hour difference
2. **Async discipline** - Important decisions aren't documented
3. **Informal communication** - Hallway conversations exclude remote
4. **Social bonding** - Team lunches, after-work events she can't attend
5. **Video fatigue** - Late-night ceremonies are exhausting

### Course Exercises

- **Module 1.3:** Transform communications for async inclusion
- **Module 1.6:** Create context docs for async consumption
- **Module 2.3:** Address inclusion in team health discussions

---

## Challenge 6: PO Coaching Needs

### The Problem

Raj is new to the Product Owner role (6 months) and needs coaching on several PO skills.

### Specific Gaps

| Area | Current State | Target State |
|------|---------------|--------------|
| Prioritization | Says yes to everything | Strategic trade-offs |
| Story Quality | Missing acceptance criteria | Clear, testable stories |
| Stakeholder Management | Over-promises | Manages expectations |
| Sprint Planning | Overcommits by 20% | Realistic commitments |
| Saying No | Can't refuse requests | Prioritizes effectively |

### Evidence

**Sprint Planning Issues:**
- Sprint 45: Committed 50 points, completed 38 (-24%)
- Sprint 46: Committed 55 points, completed 45 (-18%)
- Sprint 47: Committed 52 points, on track for ~42 (-19%)

**Story Quality Issues:**
- 40% of stories lack clear acceptance criteria
- Developers frequently ask clarifying questions
- QA finds gaps during testing

### Impact

- Team frustration with unclear requirements
- Lisa has to "figure out" what's needed
- James catches issues late in testing
- Stakeholder disappointment with delivery

### Course Exercises

- **Module 1.5:** Use persona prompting for PO perspective
- **Module 2.1:** Support sprint planning facilitation
- **Module 2.3:** Prepare coaching conversation with Raj

---

## Challenge Interconnections

These challenges reinforce each other:

```
Design Bottleneck ─────> Velocity Inconsistency
       │                         │
       │                         v
       └───────> Retrospective Fatigue (same issues)
                         │
                         v
              Standup Inefficiency
              (problem-solving in standup)
                         │
                         v
              Remote Inclusion Suffers
              (decisions made in standup not documented)
                         │
                         v
              PO Coaching Needs
              (unclear requirements add to problems)
```

---

## Measuring Progress

By the end of this course, you'll have tools to measure improvement:

| Challenge | Current | Target | How to Measure |
|-----------|---------|--------|----------------|
| Velocity Inconsistency | 35-55 range | 40-50 range | Sprint data |
| Retrospective Fatigue | 20% action completion | 80% completion | Action tracking |
| Standup Inefficiency | 25 min | 15 min | Timer |
| Design Bottleneck | 4 sprints impacted | Escalation in progress | Impediment log |
| Remote Inclusion | -8 Priya NPS | +15 Priya NPS | Survey |
| PO Coaching | 40% stories unclear | 10% stories unclear | Story audit |

---

## Using These Challenges in Exercises

Throughout the course:

1. **Sample files** contain evidence of these challenges (raw ceremony notes, etc.)
2. **Exercises** ask you to analyze and address specific challenges
3. **Prompts** are designed around real scenarios from the team
4. **Outcomes** help you track improvement

These aren't hypothetical problems - they're the realistic challenges every Scrum Master faces.

---

**Next:** See [WORKING-AGREEMENTS.md](WORKING-AGREEMENTS.md) for the team's current agreements.
