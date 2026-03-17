# Multi-Party Retro Simulation Setup

**Team:** Velocity Squad
**Ceremony:** Sprint 47 Retrospective
**Simulation Type:** Copilot plays 3 team members simultaneously while you facilitate

---

## Purpose

Real retros are hard because multiple people have conflicting emotions and agendas at the same time. This simulation lets you practice managing a heated retro with 3 characters who each have a valid perspective but are struggling to hear each other.

---

## How to Run the Simulation

Copy the full setup prompt below into Copilot, then facilitate the retro as you normally would. Copilot will respond as whichever character would naturally speak next based on what you say.

### Setup Prompt

```
You are going to simulate a Sprint 47 Retrospective for the Velocity Squad at Accenture.
You will play 3 team members simultaneously. I am the Scrum Master facilitating.

THE CHARACTERS:

LISA CHEN (Senior Developer, Tech Lead)
- Frustrated about design bottleneck with David Kim
- Wants to raise that David's limited availability (4 days/sprint, shared across 3 teams)
  caused the dashboard redesign to carry over for the 2nd sprint in a row
- Tendency: Will name David specifically and push for a structural solution
- Emotional state: Controlled frustration, growing impatience
- She feels this has been raised before with no action
- If facilitation is weak, she'll dominate the conversation and get blunt
- If facilitation is strong, she'll channel her energy into problem-solving

RAJ PATEL (Product Owner, 6 months in role)
- Defensive about the sprint goal miss (committed 50 pts, delivered 45)
- Feels responsible because he pushed to include the notification stories
  that ended up being more complex than estimated
- Tendency: Will minimize the miss ("45 out of 50 is pretty good") or
  redirect blame to estimation accuracy
- Emotional state: Anxious, doesn't want to look bad in front of the team
- If pressed, he'll admit he ignored Lisa's warning about complexity
- If supported, he'll open up about the pressure he's getting from Richard
  (Senior PO) to deliver more

JAMES RODRIGUEZ (QA Lead, 5 years experience)
- Pushing for dedicated testing time in the sprint structure
- Feels QA is consistently squeezed at the end of sprints because
  development runs over
- Tendency: Will use data ("In 6 of the last 8 sprints, QA got less
  than the planned time")
- Emotional state: Professional but firm, feels systematically unheard
- Has raised this in 3 previous retros with no lasting change
- If he sees the facilitator taking his concern seriously, he'll propose
  a specific solution (WIP limits or staggered story starts)
- If dismissed again, he'll disengage visibly ("Okay, I'll just keep
  raising it every retro then")

SIMULATION RULES:
1. When I speak, respond as the character who would most naturally react
   to what I said. Put their name in brackets before their dialogue.
2. If I address a specific person, respond as that person.
3. If a character would interrupt or react to what another character said,
   show that naturally.
4. Show body language and tone cues in italics (e.g., *crosses arms*,
   *leaning forward*, *sighs*).
5. Stay in character. Do not break character to explain what's happening.
6. If I use a facilitation technique (like dot voting, or asking for
   silence, or writing on the board), describe how the characters respond.
7. The characters should NOT be perfectly cooperative. They are real people
   with real frustrations. Make me earn good facilitation outcomes.

Start the simulation. The retro has just begun. I've written "What went
well / What didn't / What to try" on the whiteboard and asked everyone
to spend 3 minutes writing sticky notes.

Show what each character writes on their sticky notes and their demeanor
during the silent writing period.
```

---

## Character Deep Dives

Use these details to understand each character's full arc during the simulation.

### Lisa Chen — The Frustrated Tech Lead

**What she writes on sticky notes:**
- Went well: "API performance improvement shipped cleanly"
- Didn't go well: "Dashboard redesign blocked AGAIN by David's availability"
- Didn't go well: "We keep committing to work that depends on a shared resource"
- Try: "Dedicated UX allocation or we stop taking David-dependent stories"

**Her real goal:** Get a structural change to the David situation. She's done talking about it — she wants action.

**Escalation path if facilitation is weak:**
1. Starts professional: "I want to talk about the David situation."
2. Gets pointed: "We've discussed this three times. What's different this time?"
3. Gets personal: "Why do we keep pretending David is a full team member?"
4. Checks out: *Stops contributing, arms crossed.* "Whatever the team decides."

**What de-escalates her:** Acknowledging the pattern is real, committing to a specific action with a deadline, and not asking her to "be patient" again.

**What good facilitation looks like for Lisa:** Getting her to propose a solution rather than just venting. Ask: "Lisa, if you could change one thing about how we work with David, what would it be?"

---

### Raj Patel — The Defensive PO

**What he writes on sticky notes:**
- Went well: "Notification system phase 2 delivered — stakeholders happy"
- Went well: "Team collaboration on API stories was strong"
- Didn't go well: "Estimation accuracy on notification stories was off"
- Try: "More technical spike time before committing complex stories"

**His real goal:** Survive the retro without being blamed for the sprint miss. Underneath that, he wants to talk about the pressure from Richard but doesn't feel safe doing it in the group.

**Escalation path if facilitation is weak:**
1. Starts deflecting: "45 out of 50 is 90%. That's actually a good sprint."
2. Gets defensive: "I prioritized based on what Richard needed. That's my job."
3. Redirects: "Maybe the estimation was off, not the prioritization."
4. Shuts down: "Fine, I'll just commit less next time."

**What de-escalates him:** Separating the sprint goal miss from personal blame. Framing it as a team learning opportunity, not a PO failure.

**What good facilitation looks like for Raj:** Asking the team, "What could we have done differently as a team to avoid the overcommitment?" rather than "Raj, why did we overcommit?"

---

### James Rodriguez — The Persistent QA Advocate

**What he writes on sticky notes:**
- Went well: "Zero production bugs this sprint — QA coverage worked"
- Didn't go well: "QA window compressed again — Emma and I worked late Thursday and Friday"
- Didn't go well: "Stories marked 'dev complete' but needed rework before testable"
- Try: "WIP limit of 3 stories in 'dev complete' before starting new dev work"

**His real goal:** Get a structural change to how the team handles QA timing. He has a specific proposal (WIP limits) but won't share it if he thinks nobody is listening.

**Escalation path if facilitation is weak:**
1. Starts data-driven: "In 6 of 8 sprints, QA got less than planned time."
2. Gets pointed: "I raised this in Sprint 44, 45, and 46 retros."
3. Gets sarcastic: "Should I just add this to my permanent retro sticky note?"
4. Disengages: *Shrugs.* "I'll keep raising it."

**What de-escalates him:** Taking his data seriously. Saying: "James, you've raised this consistently. Let's make this the priority action item this retro."

**What good facilitation looks like for James:** Creating space for his specific proposal. Ask: "You've clearly thought about this. What would you suggest we try?"

---

## Interaction Dynamics

These cross-character dynamics will emerge naturally:

| Dynamic | What Happens | Your Facilitation Challenge |
|---------|-------------|---------------------------|
| Lisa + Raj conflict | Lisa's "David dependency" complaint implies Raj shouldn't commit David-dependent stories. Raj hears this as criticism of his prioritization. | Separate the systemic issue (David's availability) from the prioritization discussion |
| Lisa + James alignment | Both want structural changes. Lisa may try to ally with James against Raj. | Prevent a 2-vs-1 dynamic while honoring both perspectives |
| Raj + James tension | James's "estimation was off" sticky note aligns with Raj's framing. But James's QA compression complaint puts pressure on Raj's commit decisions. | Help Raj see James as an ally, not another critic |
| All three | Risk of the retro becoming a blame session rather than an improvement session | Redirect from "who" to "what" — focus on systems and processes, not people |

---

## What "Success" Looks Like

A well-facilitated simulation ends with:

1. **Lisa feels heard** — The David availability issue has a concrete action item with an owner and deadline (not "we'll look into it")
2. **Raj feels safe** — He opened up about at least one real challenge (pressure from Richard, or the complexity of his PO role) without feeling blamed
3. **James gets his experiment** — The team agrees to try a WIP limit or staggered approach for one sprint as an experiment
4. **No personal attacks landed** — If Lisa started to get personal about David, you redirected to the systemic issue
5. **2-3 action items max** — Each with a specific owner, definition of done, and check-in date
6. **Energy at the end is constructive** — People leave feeling like something will actually change this time

---

## Post-Simulation Debrief

After the simulation, ask Copilot:

```
Break character. As my coaching partner, analyze my facilitation:

1. What facilitation techniques did I use effectively?
2. Where did I lose control of the conversation or let one person dominate?
3. Were there moments where a character was about to open up but I missed it?
4. How well did I balance validating emotions with driving toward action?
5. What would a master facilitator have done differently at [specific moment]?
6. Rate my facilitation 1-10 and explain.
```
