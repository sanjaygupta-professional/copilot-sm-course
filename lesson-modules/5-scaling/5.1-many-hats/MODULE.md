# Module 5.1: The Many Hats — Role Fluency at Scale

**Duration:** 35 minutes
**Prerequisites:** Level 4 completed

---

## What You'll Learn

By the end of this module, you will:
1. Map 7 SM role modes (facilitator, coach, impediment remover, change agent, servant leader, trainer, bridge) with different Copilot strategies per hat
2. Diagnose which hat a situation requires within 60 seconds
3. Navigate team maturity phases (forming/storming/norming/performing) with appropriate SM emphasis
4. Handle the "SM doing PM work" anti-pattern
5. Plan an SM-to-RTE transition pathway

---

## The Seven Hats Problem

Most Scrum Masters over-index on one or two role modes — usually facilitator and impediment remover. But the Horizon Program demands all seven. You're running ceremonies for Velocity Squad, coaching Ana Martinez through Catalyst Crew's tech debt crisis, bridging timezone gaps for Nexus Team, and doing 20% interim SM coverage for Insight Engine (which has no SM at all).

Each hat requires a different Copilot strategy:

| Role Mode | When You Wear It | Copilot Strategy |
|-----------|-----------------|------------------|
| **Facilitator** | Ceremonies, workshops, decisions | Generate agendas, timeboxes, facilitation guides |
| **Coach** | Team maturity, individual growth | Prepare questions, reframes, conversation plans |
| **Impediment Remover** | Blockers, organizational friction | Root cause analysis, escalation drafts, research |
| **Change Agent** | Process improvement, culture shifts | Build business cases, influence maps, proposals |
| **Servant Leader** | Team needs, protection, support | Coaching prep, 1:1 guides, team health analysis |
| **Trainer** | Skill gaps, onboarding, knowledge | Create training materials, assessments, guides |
| **Bridge** | Cross-team, stakeholder, communication | Synthesize information, translate between audiences |

The mistake is using a facilitator approach when the situation calls for coaching, or coaching when it calls for impediment removal. Let's build your diagnostic muscle.

---

## Exercise 1: Role Mode Inventory (5 min)

Tag your actual week by role mode. Most SMs are surprised by the distribution.

```
Analyze my weekly activities and tag each by SM role mode.

MY ACTUAL WEEK (Velocity Squad SM, Horizon Program):

MONDAY:
- 9:00 Sprint 47 standup (15 min)
- 9:30 Reviewed Jira board, updated burndown
- 10:00 Call with Tom Harrison re: staging environment access for Velocity Squad
- 11:00 1:1 with Marcus (he's struggling with confidence in group settings)
- 14:00 Backlog refinement with Raj and team
- 15:30 Helped James understand Definition of Done for his first story

TUESDAY:
- 9:00 Standup
- 9:30 Scrum of Scrums prep (all 4 Horizon teams)
- 10:30 SoS meeting with Ana Martinez, Chris Wong, Jennifer Walsh
- 11:30 Wrote escalation email to Jennifer about shared designer bottleneck
- 14:00 Sprint 47 retrospective
- 16:00 Checked in with Insight Engine team (no SM, I cover 20%)

WEDNESDAY:
- 9:00 Standup
- 10:00 Coached Ana Martinez on handling Catalyst Crew's velocity decline
- 11:00 Created presentation for Jennifer on cross-team dependency risks
- 14:00 Sprint 47 Review prep
- 15:00 Sprint 47 Review (stakeholders: Jennifer, Richard Thorne)

THURSDAY:
- 9:00 Sprint 48 Planning
- 12:00 Lunch-and-learn: taught team story splitting techniques
- 14:00 Cross-team sync with Nexus Team (timezone overlap window)
- 15:00 Drafted process improvement proposal for sprint commitment model

FRIDAY:
- 9:00 Standup
- 10:00 1:1 with Priya (remote inclusion concerns)
- 11:00 Updated impediment log and metrics
- 14:00 Read about SAFe practices for multi-team coordination
- 15:00 Wrote weekly status for Jennifer

TAG EACH ACTIVITY with one of these role modes:
- Facilitator
- Coach
- Impediment Remover
- Change Agent
- Servant Leader
- Trainer
- Bridge

Then analyze:
1. What percentage of my time goes to each role mode?
2. Which modes am I over-indexing on?
3. Which modes am I neglecting?
4. What does the Horizon Program actually need from me right now?
5. What should I shift toward next week?
```

### What You Should See

A tagged breakdown revealing something like:
- **Facilitator:** 30-35% (standups, retro, review, planning, refinement)
- **Bridge:** 20-25% (SoS, cross-team sync, status reports, presentations)
- **Servant Leader:** 15% (1:1s with Marcus, Priya)
- **Impediment Remover:** 10% (Tom Harrison call, escalation email)
- **Coach:** 10% (Ana Martinez, Marcus)
- **Trainer:** 5% (lunch-and-learn, James DoD help)
- **Change Agent:** 5% (process improvement proposal)

The insight: Bridge work is consuming more time than expected because of the multi-team context. Change Agent is underweighted given the organizational impediments (designer bottleneck, Insight Engine having no SM). You're spending time on activities that could be delegated or eliminated.

---

## Exercise 2: Situation-to-Hat Matcher (5 min)

Rapid diagnosis: given a scenario, which hat do you reach for?

**Reference: `sample-files/scaling/role-mode-inventory-template.md`**

```
I'm going to give you 10 scenarios from the Horizon Program. For each one, tell me:
- Which SM role mode is PRIMARY (the main hat)
- Which is SECONDARY (supporting hat)
- WHY (one sentence)
- What Copilot prompt strategy fits

SCENARIOS:

1. Catalyst Crew's velocity has dropped from 42 to 31 over 4 sprints. Ana Martinez asks you for advice.

2. During SoS, you realize Velocity Squad's API work blocks Nexus Team's mobile notifications feature, and neither team flagged it.

3. Marcus has a great solution idea in your 1:1 but says "Lisa will just override me in planning."

4. Insight Engine shipped a feature without testing because "we don't have time for ceremonies." Product owner is making all decisions.

5. Jennifer Walsh asks you to present cross-team impediment trends to the leadership team next Thursday.

6. Nexus Team (Sprint 4, forming stage) asks: "What should our working agreements look like?"

7. David (shared UX designer) tells you privately that he's considering quitting because the cross-team demands are unsustainable.

8. Richard Thorne (CKO) says at a review: "Why can't we just add two more developers instead of fixing the process?"

9. Chris Wong (Nexus SM) is struggling with timezone coordination across PST/BRT/JST/GST and asks for help.

10. You notice that 3 of 4 Horizon teams are raising the same impediment: unclear deployment pipeline ownership.

For each, respond in this format:
- PRIMARY HAT: [mode]
- SECONDARY HAT: [mode]
- WHY: [one sentence]
- COPILOT STRATEGY: [what kind of prompt to use]
```

### What You Should See

Correct mappings like:
1. **Coach** (secondary: Change Agent) — Ana needs coaching on diagnosis, not someone to fix it for her
2. **Bridge** (secondary: Impediment Remover) — Cross-team dependency surfacing is bridge work
3. **Servant Leader** (secondary: Coach) — Protect Marcus's voice, then coach confidence
4. **Change Agent** (secondary: Trainer) — Insight Engine needs process introduction, not just facilitation
5. **Bridge** (secondary: Change Agent) — Translating team data for leadership audience
6. **Trainer** (secondary: Facilitator) — New team needs education before facilitation
7. **Servant Leader** (secondary: Impediment Remover) — Person first, then systemic fix
8. **Change Agent** (secondary: Bridge) — Challenge the assumption, translate agile principles for exec
9. **Coach** (secondary: Trainer) — Help Chris solve it himself, provide frameworks
10. **Change Agent** (secondary: Bridge) — Pattern across teams = organizational impediment

---

## Exercise 3: Phase-Based SM Emphasis (8 min)

Different team maturity demands radically different SM behavior. Map three Horizon teams.

```
Help me plan my SM approach for three teams at different Tuckman stages.

TEAM 1: VELOCITY SQUAD (Norming → Performing)
- Sprint 47, established team, 7 members
- Stable velocity ~42 points
- Good collaboration, some recurring issues (design capacity, Priya's inclusion)
- Team self-organizes most work
- I'm the dedicated SM

TEAM 2: NEXUS TEAM (Forming)
- Sprint 4, brand new team
- SM: Chris Wong (new to SM role)
- Distributed: PST (3), BRT (2), JST (1), GST (1)
- Still establishing ceremonies, working agreements, team norms
- High energy but disorganized

TEAM 3: CATALYST CREW (Storming)
- Velocity declining: 42 → 38 → 35 → 31
- SM: Ana Martinez (experienced but struggling)
- Senior dev Sofia Reyes is frustrated, vocally critical of process
- Tech debt mounting, quality declining
- Team divided on whether to "push through" or "slow down to speed up"

For each team, generate:

1. **TUCKMAN PHASE DIAGNOSIS**
   - Evidence that confirms the phase
   - What to expect next in their journey

2. **SM EMPHASIS (rank the 7 role modes)**
   - Which hats matter most at this phase?
   - Which hats would be counterproductive?

3. **TOP 3 SM ACTIONS**
   - The most impactful things the SM should do RIGHT NOW
   - Specific to this team's situation

4. **COPILOT USAGE PATTERN**
   - What kinds of prompts help most at this phase?
   - What to avoid generating (e.g., don't over-process a forming team)

5. **PHASE TRANSITION INDICATORS**
   - What signals that this team is moving to the next phase?
   - What could cause regression?
```

### What You Should See

Distinct strategies per phase:

**Velocity Squad (Norming):** SM emphasis on Coach and Change Agent. The team doesn't need heavy facilitation — they need you to remove organizational barriers and coach individuals. Top actions: address design bottleneck systemically, coach Marcus's confidence, prepare team for performing stage by delegating more facilitation.

**Nexus Team (Forming):** SM emphasis on Trainer and Facilitator. Chris needs to establish foundations — working agreements, ceremony cadence, communication norms. Counterproductive: Change Agent (too early for process experimentation). Top actions: help Chris create async standup format for timezone spread, establish clear DoD, run a team chartering session.

**Catalyst Crew (Storming):** SM emphasis on Servant Leader and Coach. Ana needs to address Sofia's frustration directly and facilitate the "push through vs. slow down" conflict. Counterproductive: Facilitator-only (running ceremonies won't fix the trust issues). Top actions: 1:1 with Sofia to understand frustration, facilitate a tech debt vs. feature conversation with data, create psychological safety for disagreement.

---

## Exercise 4: When You're Also the PM (5 min)

Insight Engine has no Scrum Master. You cover 20% of your time. But the product owner is making process decisions and the team is skipping ceremonies. How do you triage?

**Reference: `sample-files/scaling/sm-to-rte-transition-plan.md`**

```
I'm covering 20% SM duties for a team (Insight Engine) that has NO dedicated Scrum Master.

INSIGHT ENGINE SITUATION:
- Analytics & Reporting team, 6 members
- No SM — product owner (Kelly Park) is running everything
- Kelly is making process decisions: "We don't need retros, we need to ship"
- No sprint planning — Kelly assigns work directly
- No standups — team uses ad-hoc Slack threads
- No retrospectives — "waste of time" per Kelly
- Quality issues emerging: 3 production bugs last month
- Team members seem disengaged, just executing tasks
- Two devs have asked about transferring to other teams

MY CONSTRAINTS:
- I can only give 20% of my time (1 day/week equivalent)
- I'm not "their" SM — I'm interim support
- Kelly is resistant to "process overhead"
- Jennifer Walsh asked me to stabilize them

Help me:

1. **TRIAGE: SM WORK vs. PM WORK**
   - What is Kelly doing that's actually PM work? (fine, let her)
   - What is she doing that's SM work she's absorbed? (problem)
   - What SM work is simply not happening? (critical gap)

2. **MINIMUM VIABLE SCRUM MASTERING**
   - With only 1 day/week, what ceremonies/practices are non-negotiable?
   - What can I skip or make async?
   - Priority order for introducing practices

3. **THE KELLY CONVERSATION**
   - How to approach her without threatening her authority
   - Frame: what's in it for HER if I help with process
   - Specific language to use
   - What to avoid (telling her she's "doing SM work")

4. **90-DAY STABILIZATION PLAN**
   - Month 1: [what to introduce]
   - Month 2: [what to add]
   - Month 3: [what to hand off or make the case for dedicated SM]

5. **RED FLAGS THAT NEED ESCALATION**
   - What signals mean this team needs a dedicated SM NOW
   - When to go to Jennifer
```

### What You Should See

A triage framework:
- **PM work Kelly should keep:** Backlog prioritization, stakeholder communication, roadmap decisions
- **SM work Kelly absorbed:** Running standups (poorly), deciding on process, resolving team conflicts
- **SM work not happening:** Retrospectives, impediment tracking, team health monitoring, coaching

Minimum viable SM plan:
- **Week 1-2:** Introduce a 15-min weekly retro (not "retrospective" — just "what's working, what isn't")
- **Week 3-4:** Add lightweight sprint planning (even 30 min of "what are we committing to this sprint?")
- **Month 2:** Introduce standup cadence, begin impediment tracking
- **Month 3:** Full ceremony cadence, make the case for dedicated SM with data

---

## Exercise 5: SM-to-RTE Transition (7 min)

Jennifer Walsh asks you to coordinate the entire Horizon Program. This is an SM-to-RTE (Release Train Engineer) transition. What changes?

```
Jennifer Walsh just asked me to consider taking on a program-level coordination role for the Horizon Program (4 teams, ~25 people).

CURRENT ROLE:
- Dedicated SM for Velocity Squad
- 20% interim coverage for Insight Engine
- Informal mentor to Ana Martinez (Catalyst Crew) and Chris Wong (Nexus Team)

PROPOSED ROLE:
- Coordinate all 4 teams (RTE-equivalent, though we don't use SAFe terminology)
- Run Scrum of Scrums, program increment planning, cross-team ceremonies
- Report to Jennifer Walsh on program health
- Still keep some SM work for Velocity Squad (transition over time)

THE ASK: Help me think through this transition.

1. **WHAT CHANGES**
   - What do I START doing as program coordinator?
   - What do I STOP doing (or delegate)?
   - What stays the same?

2. **NEW SKILLS NEEDED**
   - What skills does an RTE need that a single-team SM doesn't?
   - Where am I strong? Where are my gaps?
   - How do I develop what I'm missing?

3. **VELOCITY SQUAD TRANSITION**
   - Who takes over as SM? Options and trade-offs
   - How do I transition without the team feeling abandoned?
   - 4-week handoff plan

4. **90-DAY PROGRAM COORDINATOR PLAN**
   - Days 1-30: Establish visibility and relationships
   - Days 31-60: Introduce program-level practices
   - Days 61-90: Drive first cross-team improvement

5. **RISKS AND MITIGATIONS**
   - What could go wrong with this transition?
   - How do I maintain influence without direct team authority?
   - What if a team SM pushes back on program-level coordination?

6. **THE CONVERSATION WITH JENNIFER**
   - What should I ask her before accepting?
   - What support/authority do I need?
   - What does success look like in 6 months?
```

### What You Should See

A comprehensive transition plan:
- **Start:** Program increment planning, cross-team dependency management, SM community of practice, program metrics, stakeholder communication
- **Stop:** Daily facilitation for Velocity Squad, individual impediment removal, detailed sprint-level work
- **Gaps:** Portfolio-level thinking, executive communication, organizational change management, budget awareness
- **Velocity Squad handoff:** Promote from within (Lisa has leadership skills) or bring in new SM. 4-week shadow period.
- **Key question for Jennifer:** "What authority will I have to resolve cross-team conflicts? What's the budget for a Velocity Squad SM replacement?"

---

## Exercise 6: Organizational Impediment Removal (5 min)

The shared designer bottleneck affects 3 of 4 Horizon teams. This isn't a team impediment — it's organizational. Design an influence campaign.

**Reference: `sample-files/scaling/organizational-impediment-campaign.md`**

```
Design an influence campaign to resolve the shared designer bottleneck across the Horizon Program.

THE PROBLEM:
- David Chen (UX Designer) is shared across Velocity Squad, Catalyst Crew, and Nexus Team
- Insight Engine has no design support at all
- 3 of 4 teams report design as their #1 impediment
- David is burning out (privately told me he's considering leaving)
- Total impact: ~15-20 story points blocked per sprint across the program
- Jennifer Walsh is sympathetic but says "Design leadership won't approve headcount"

STAKEHOLDER MAP:
- Jennifer Walsh (VP, our sponsor) — sympathetic, needs data
- Richard Thorne (CKO, exec sponsor) — cares about delivery speed
- Sarah Mitchell (MD Strategy) — controls budget conversations
- Tom Harrison (Infra Lead) — neutral, but understands shared resource pain
- Maria Santos (Design Director) — owns designer allocation, defensive about her team's capacity
- David Chen (the designer) — exhausted, key witness but can't be seen as complaining

CAMPAIGN GOAL:
Get approval for either:
A) A second designer dedicated to Horizon Program, OR
B) A contractor designer for 6 months while permanent headcount is approved

Help me design a 6-week influence campaign:

1. **WEEK 1-2: BUILD THE CASE**
   - What data to collect from all 4 teams
   - How to quantify the cost (in dollars, not just points)
   - How to frame this as a business problem, not a staffing request

2. **WEEK 3: ALLY BUILDING**
   - Who to talk to first, second, third
   - What each stakeholder cares about (their motivation)
   - Specific talking points per stakeholder

3. **WEEK 4: INFORMAL PROPOSALS**
   - How to float the idea before the formal ask
   - Who should make the ask (hint: not just me)
   - How to make Maria Santos feel like a partner, not a target

4. **WEEK 5: FORMAL PROPOSAL**
   - Where to present (which meeting, what format)
   - One-page business case structure
   - The "if we do nothing" scenario

5. **WEEK 6: DECISION AND FOLLOW-UP**
   - How to handle "yes," "no," or "not now"
   - Fallback options
   - How to protect David regardless of outcome

6. **THROUGHOUT: PROTECT DAVID**
   - How to advocate without making him a target
   - How to use aggregate data instead of his personal frustration
   - What to do if he gives notice before the campaign succeeds
```

### What You Should See

A detailed campaign plan:
- **Data collection:** Aggregate blocked points across all teams, convert to developer idle cost (~$X/sprint), calculate delivery delay in weeks
- **Stakeholder approach:** Jennifer first (get her coaching), then Richard (delivery speed angle), then Sarah (ROI framing), then Maria (collaborative — "help us help your designers")
- **Maria Santos strategy:** Frame as "your designer is being set up to fail" not "give us more designers." Propose that SHE presents the solution to protect her ownership
- **Formal proposal:** One-page format — Problem (15-20 pts blocked/sprint), Cost ($X/quarter in delayed delivery), Solution (contractor for 6 months, $Y), ROI (3:1 return)
- **David protection:** Never cite his personal feelings. Use team-level data. If he gives notice, that becomes the escalation trigger — "we're about to lose our only designer"

---

> **Signals to Watch For**
>
> As you practice role fluency, notice these signals:
> - You default to the same hat regardless of situation → Expand your range
> - You feel uncomfortable in a particular role mode → That's where growth is
> - Teams at different stages need dramatically different SM behavior → Adapt, don't standardize
> - The "SM doing PM work" trap is most dangerous when there IS no PM → Set boundaries early
> - Organizational impediments require influence campaigns, not just escalation emails → Think politically

---

## When This Doesn't Work

- **Copilot suggests a hat that feels wrong:** Trust your instinct but examine why. Sometimes the "wrong" hat is actually correct — you're just uncomfortable wearing it.
- **You can't cover all the hats:** You're not supposed to. At program scale, you develop other SMs to cover hats you can't. Coach Ana and Chris to be self-sufficient.
- **Kelly (Insight Engine PO) won't let you do SM work:** Start with what helps HER — "I can take the process stuff off your plate so you can focus on product decisions." Frame SM work as reducing her burden.
- **The influence campaign stalls:** Organizational change takes longer than expected. If the formal ask fails, double down on mitigations (design system, developer design skills, sprint-ahead planning) while waiting for the next budget cycle.

---

## Module Complete!

You now know how to:
- Map your actual time against 7 SM role modes and rebalance
- Diagnose which hat a situation requires in seconds
- Adapt SM emphasis to team maturity phase
- Triage SM vs. PM work when covering teams without an SM
- Plan a transition from team-level SM to program-level coordinator
- Design organizational influence campaigns for systemic impediments

---

## Next Steps

Continue to **Module 5.2: Multi-Team Coordination & Program Support**

---

## Quick Reference

### Role Mode Inventory
```
Analyze my weekly activities and tag each by SM role mode:
Facilitator, Coach, Impediment Remover, Change Agent,
Servant Leader, Trainer, Bridge.
Show time distribution and what I should shift toward.
```

### Situation Diagnosis
```
Scenario: [describe situation].
Which SM role mode is primary? Secondary?
What Copilot prompt strategy fits this hat?
```

### Phase-Based Planning
```
Team is at [Tuckman phase]. Evidence: [observations].
Rank the 7 SM role modes by importance for this phase.
Top 3 SM actions right now. What's counterproductive at this phase?
```

### SM/PM Triage
```
Team has no dedicated SM. PO is absorbing SM duties.
My capacity: [X]% of time.
Triage: what's PM work (fine), what's SM work absorbed (problem),
what's not happening (critical). Minimum viable SM plan.
```

### Influence Campaign
```
Organizational impediment: [problem]. Affects [X] teams.
Stakeholders: [list with motivations].
Design 6-week influence campaign: data collection, ally building,
informal proposals, formal ask, decision handling.
```

---

**Ready to coordinate across teams? Let's continue to Module 5.2!**
