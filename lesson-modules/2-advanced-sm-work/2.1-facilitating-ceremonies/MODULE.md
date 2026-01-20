# Module 2.1: Facilitating Ceremonies with Copilot

**Duration:** 35 minutes
**Prerequisites:** Level 1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Use Copilot as a thinking partner for ceremony facilitation
2. Generate agendas and facilitation guides for each ceremony
3. Process ceremony outcomes into actionable items
4. Handle difficult ceremony situations
5. Design fresh retrospective formats

---

## Copilot as Your Facilitation Partner

Great facilitation requires preparation, awareness, and adaptability. Copilot can help with all three:

| Phase | How Copilot Helps |
|-------|-------------------|
| **Preparation** | Generate agendas, facilitation guides, questions to ask |
| **During** | Quick reference notes, timeboxes, things to watch for |
| **After** | Process outcomes, extract actions, identify patterns |

Let's explore each ceremony.

---

## Sprint Planning Facilitation

Sprint planning sets the tone for the sprint. Good facilitation ensures realistic commitment and team alignment.

### Pre-Planning Prep

**Exercise 1: Generate Planning Facilitation Guide**

```
Help me prepare to facilitate Sprint 48 Planning.

CONTEXT:
- Team: Velocity Squad (7 members)
- Sprint length: 2 weeks
- Last sprint velocity: 42 points
- Carryover from Sprint 47: 10 points (push notifications)
- Known capacity constraints:
  * Lisa: 9 days (1 day training)
  * Priya: 8 days (2 days holiday)
  * David: 4 days (shared resource)

CHALLENGES TO ADDRESS:
- We often overcommit (historically by 15-20%)
- Sprint planning runs long (2.5-3 hours, target is 2)
- Stories sometimes lack clear acceptance criteria
- Raj (PO) struggles to prioritize when pushed

Generate:

1. **FACILITATION AGENDA** (2 hours, strict timebox)
   - Time allocations for each section
   - Specific activities and checkpoints

2. **CAPACITY CALCULATION**
   - Calculate realistic capacity for this sprint
   - Recommended commitment with buffer

3. **QUESTIONS TO ASK**
   - To surface risks early
   - To pressure-test estimates
   - To ensure stories are ready

4. **THINGS TO WATCH FOR**
   - Signs of overcommitment
   - Stories that aren't ready
   - Team members not engaging

5. **INTERVENTIONS**
   - If we're going over time
   - If Raj adds "one more thing"
   - If the team is quiet about concerns
```

### What You Should Get

A complete facilitation guide with:
- Timeboxed agenda (Intro: 5min, Capacity: 15min, Story Review: 60min, etc.)
- Capacity calculation (~32-35 points realistic)
- Specific questions ("What could make this story take longer than estimated?")
- Intervention scripts ("Let's pause and check if we have capacity for this")

---

## Daily Standup Optimization

Standups should be brief and blocker-focused. Many teams struggle with standups running long.

### Exercise 2: Redesign Standup Format

```
Our daily standups are running 25 minutes instead of 15.

Analysis of recent standups shows:
- Status updates take too long (detailed play-by-play)
- Problem-solving happens in standup (should be offline)
- Side conversations start
- Team waits until standup to raise blockers

Help me redesign our standup:

1. **ALTERNATIVE FORMATS**
   - 3 options beyond traditional "what I did/doing/blockers"
   - Pros and cons of each
   - Which fits a team with 1 remote member (Priya)

2. **FACILITATION TECHNIQUES**
   - How to keep updates brief
   - How to redirect problem-solving
   - How to cut off side conversations politely
   - Specific phrases I can use

3. **ANTI-PATTERN INTERVENTION**
   - If Lisa gives too much technical detail
   - If Raj raises "one quick thing" (scope discussion)
   - If Marcus says "no blockers" but seems stuck

4. **PRIYA INCLUSION**
   - How to ensure she's not passed over
   - Async standup option when timezone is hard
   - How to bring her into discussions

5. **TRIAL PLAN**
   - How to introduce a new format
   - How long to trial before evaluating
   - What success looks like
```

### What You Should Get

Format options like:
- **Walk the Board:** Focus on tickets, not people
- **Three Questions Reframed:** "What's blocking?" first, then progress
- **Async-First:** Written updates, live time for blockers only

Plus intervention scripts:
- "Great point - let's take that offline right after standup."
- "Let's stay high-level. Details can go in the ticket."

---

## Sprint Review Facilitation

Sprint reviews should engage stakeholders and gather meaningful feedback.

### Exercise 3: Sprint Review Prep

```
Help me prepare for the Sprint 47 Review.

ATTENDEES:
- Team: Raj, Lisa, Marcus, Priya, James, Emma, David
- Stakeholders: Jennifer Walsh (VP), Richard Thorne (CKO)

WHAT WE'RE SHOWING:
- Notification system MVP (3 features)
- Search optimization (45% faster)
- API rate limiting
- Caching layer

WHAT'S NOT DONE:
- Push notifications (8 pts) - carrying over
- Dashboard loading (3 pts) - stretch goal

CONCERNS:
- Richard will ask about push notifications
- Jennifer has raised design capacity concerns
- Sarah might ask about document notifications (not planned)

Generate:

1. **DEMO SCRIPT**
   - Order of demos
   - Who presents what
   - Talking points for each feature
   - How to show business value, not just features

2. **CARRYOVER FRAMING**
   - How to present push notifications carryover honestly
   - How to connect it to Sprint 48 plan
   - Avoiding defensiveness

3. **ANTICIPATED QUESTIONS**
   - Questions each stakeholder might ask
   - Suggested responses
   - How to deflect scope creep gracefully

4. **FEEDBACK COLLECTION**
   - Questions to ask stakeholders
   - How to capture feedback productively
   - What to do with feature requests

5. **FACILITATION NOTES**
   - Time allocation (1 hour total)
   - How to manage if demos run long
   - Transition between topics
```

---

## Retrospective Facilitation

Retrospectives are where continuous improvement happens - or doesn't.

### Exercise 4: Design Fresh Retrospective

```
Design a fresh retrospective for a team with "retrospective fatigue."

SYMPTOMS:
- Same issues come up every sprint
- Action items created but rarely completed
- Energy is low during retros
- Team seems to go through the motions
- Some people (Marcus) don't speak up

TEAM CONTEXT:
- 7 members, 1 remote (Priya in Bangalore)
- Last format: Start/Stop/Continue (used for 6+ sprints)
- Key recurring issues: Focus time, tech debt, design capacity
- Voted actions last retro: Focus Fridays, async decision log

Generate:

1. **NEW FORMAT**
   - A retrospective format that surfaces new perspectives
   - Not Start/Stop/Continue
   - Must work for hybrid team (in-room + remote)
   - Should produce max 3 actionable items

2. **FACILITATION GUIDE**
   - Step-by-step with time boxes
   - Specific instructions
   - How to include Priya effectively
   - How to draw out Marcus (quiet participants)

3. **ADDRESSING RECURRING ISSUES**
   - How to acknowledge "we've discussed this before"
   - How to get commitment to actual change
   - When to escalate vs. keep trying

4. **ACTION ACCOUNTABILITY**
   - How to track action completion
   - How to review previous actions in next retro
   - How to reduce number of actions taken

5. **ENERGY TECHNIQUES**
   - Ways to make the retro more engaging
   - Opening activities
   - How to end on a positive note
```

### What You Should Get

A fresh format like:
- **Sailboat:** Wind (helps), Anchor (slows), Rocks (risks), Island (goals)
- **4Ls:** Loved, Learned, Lacked, Longed For
- **Team Radar:** Rate dimensions 1-5, discuss biggest gaps

Plus facilitation techniques:
- Silent writing before discussion (helps Marcus)
- Remote-first contributions (Priya goes first)
- "We will only commit to 2 actions" (force prioritization)

---

## Handling Difficult Situations

Every facilitator faces tough moments.

### Exercise 5: Difficult Situation Prep

```
Help me prepare for difficult situations that might arise in ceremonies.

SCENARIO 1: Stakeholder Scope Creep
Richard (CKO) asks in sprint review: "Can we add one quick feature
to this sprint?" How do I handle this without offending him?

SCENARIO 2: Team Conflict
In retrospective, Lisa says "Raj's stories are never clear enough"
and Raj gets defensive. How do I de-escalate?

SCENARIO 3: Silent Participant
Marcus hasn't spoken in 30 minutes of sprint planning. Everyone
else is debating. How do I include him without putting him on the spot?

SCENARIO 4: Retro Turns Emotional
Priya shares that she feels excluded and starts to tear up.
The room goes awkward. What do I do?

SCENARIO 5: Running Over Time
We're at 1:45 of a 2-hour planning session with 3 stories left
to discuss. What do I do?

For each scenario:
1. What's actually happening (root cause)
2. Immediate response/de-escalation
3. Language I can use
4. Follow-up needed after the ceremony
```

### What You Should Get

Specific interventions:
- **Scope creep:** "Great idea Richard! Let's capture that for Sprint 49 planning. Raj, can you add it to the backlog?"
- **Conflict:** "Both perspectives are valid. Let's explore this constructively - what would help both of you?"
- **Silent participant:** "Marcus, I'd love to hear your thoughts - what's your read on this?"
- **Emotional moment:** Allow the emotion, don't rush past it. "Thank you for sharing that, Priya. This is important."
- **Time management:** "We have 15 minutes left. Let's quickly assess the remaining stories - can they be committed to without detailed discussion, or should we stop here?"

---

## Module Complete!

You now know how to:
- ✅ Use Copilot to prepare for each ceremony type
- ✅ Generate agendas and facilitation guides
- ✅ Handle difficult situations with prepared interventions
- ✅ Design fresh retrospective formats
- ✅ Process ceremony outcomes effectively

---

## Next Steps

Continue to **Module 2.2: Impediment Management & Resolution**

---

## Quick Reference

### Planning Prep
```
Sprint [X] planning prep. Context: [capacity, carryover].
Generate: agenda, capacity calc, questions, watch-fors, interventions.
```

### Standup Redesign
```
Standups running [X] minutes (target [Y]).
Issues: [list problems].
Generate: alternative formats, facilitation techniques, interventions.
```

### Review Prep
```
Sprint review prep. Showing: [features]. Not done: [carryover].
Stakeholders: [list]. Concerns: [anticipated].
Generate: demo script, carryover framing, Q&A prep, feedback collection.
```

### Retro Design
```
Team has [problem]. Last format: [format]. Recurring issues: [list].
Generate: new format, facilitation guide, action accountability approach.
```

---

**Ready for impediment management? Let's continue!**
