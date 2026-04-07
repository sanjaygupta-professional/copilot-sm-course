# Module 4.2: Predictive Intelligence & Early Warning Systems

**Duration:** 35 minutes
**Prerequisites:** Module 4.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Build an early warning system from existing team data
2. Identify 5 leading indicators that predict sprint failure 3-5 days early
3. Create automated signal detection prompts
4. Distinguish correlation from causation in team data
5. Design intervention playbooks triggered by specific signals

---

## Introduction: From Rearview Mirror to Windshield

Module 4.1 taught you to analyze what happened. This module teaches you to see what's about to happen.

Most Scrum Masters learn about sprint failures at the Sprint Review. By then it's too late. The data was there on Day 5 -- they just weren't looking at it. The Velocity Squad's Sprint 44 is a case study. Velocity dropped from 45 to 35, sprint goal achievement fell to 50%. The team felt blindsided. But the signals were visible days before the sprint ended.

Your job isn't to predict the future. It's to notice the present sooner.

---

## Exercise 1: Signal Inventory (Basic)

**Time:** 5 minutes

Before building an early warning system, you need to know what data sources exist and which ones contain leading indicators.

```
I'm a Scrum Master for the Velocity Squad (7-person team, Sprint 47, AKX project at Accenture).

I want to build an early warning system that detects sprint problems 3-5 days before they become visible in a Sprint Review.

AVAILABLE DATA SOURCES:
- Daily standup notes (who said what, blockers raised)
- Jira board (story status, WIP count, blocker flags)
- Sprint burndown (daily points remaining)
- PR review queue (open PRs, review time)
- Team health survey (bi-weekly)
- Slack/Teams message patterns (volume, after-hours messages)
- Calendar data (meeting load per person)
- Impediment log

For each data source:

1. **WHAT LEADING INDICATORS CAN I EXTRACT?**
   - Specific signals that predict trouble
   - How early does each signal appear before the problem manifests?

2. **SIGNAL STRENGTH**
   - Rate each: Strong predictor / Moderate / Weak
   - False positive risk (how often does this signal fire without a real problem?)

3. **COLLECTION DIFFICULTY**
   - Easy (already available), Medium (need to start tracking), Hard (requires tooling)

4. **THE TOP 5 EARLY WARNING SIGNALS**
   - Ranked by prediction strength + ease of collection
   - For each: what it looks like, when to check, what threshold triggers action

Present as a prioritized signal inventory table.
```

### What You Should See

Copilot will identify signals like:
- **Burndown slope change at Day 3-4** (Strong predictor, Easy): If the burndown is flat or rising by mid-sprint, the sprint is at risk. 2-3 day early warning.
- **WIP exceeding team size** (Strong, Easy): More stories in progress than team members means nothing is finishing. 3-5 day early warning.
- **Blocker age > 2 days** (Strong, Easy): Unresolved blockers that persist past 48 hours rarely self-resolve.
- **Daily Scrum tone shift** (Moderate, Medium): When updates shift from "I will..." to "I'm still working on..." across multiple people. 2-3 day warning.
- **After-hours activity spike** (Moderate, Medium): Sudden increase in late messages or weekend commits signals someone is struggling.

---

## Exercise 2: "5 Days Before Sprint Failure" Checklist (Basic)

**Time:** 5 minutes

Let's use a real example. Sprint 44 was the Velocity Squad's worst sprint: velocity 35, goal achievement 50%. Let's work backwards from the failure to find what was visible at Day 5.

**Reference `sample-files/early-warning/sprint-44-daily-signals.md`:**

```
Help me perform a post-mortem timeline analysis of the Velocity Squad's Sprint 44.

SPRINT 44 OUTCOME:
- Velocity: 35 (planned: 48, previous sprint: 45)
- Sprint goal achievement: 50%
- 3 stories carried over
- David (UX) became unavailable mid-sprint
- Team morale dropped significantly

WHAT WE KNOW HAPPENED (day by day):
- Day 1-2: Sprint started normally, team committed to 48 points
- Day 3: David mentioned in standup he had competing priorities from another team
- Day 4: First design-dependent story blocked, team continued other work
- Day 5: Second design-dependent story blocked, burndown starting to flatten
- Day 6: Lisa (senior dev) started working evenings to compensate
- Day 7: Team acknowledged sprint goal was at risk in standup
- Day 8: Emergency scope reduction discussion
- Day 9-10: Scramble to complete what they could

ANALYSIS:
1. **AT EACH DAY, WHAT WAS VISIBLE?**
   - What data point was available?
   - Who would have seen it?
   - What should have happened?

2. **THE 5 MISSED SIGNALS**
   - What could an SM have detected at Day 3? Day 4? Day 5?
   - What action at Day 3 could have changed the outcome?
   - What action at Day 5 could have limited the damage?

3. **BUILD THE CHECKLIST**
   Create a "Mid-Sprint Health Check" I can run at Day 5 of every sprint:
   - 10 yes/no questions
   - If 3+ answers are concerning, take action
   - Specific actions for each failing check

4. **THE INTERVENTION WINDOW**
   - How early is "early enough" to save a sprint?
   - What's the latest point where intervention still helps?
   - What changes at each day?
```

### What You Should See

A timeline showing that by Day 3, the David signal was already visible. By Day 5, the burndown data confirmed the problem. Key missed intervention points:

- **Day 3 (earliest):** David's competing priorities mentioned. SM action: Immediately assess which stories depend on David, negotiate priority with other team's SM, alert PO to potential scope risk.
- **Day 5 (still recoverable):** Two stories blocked, burndown flat. SM action: Emergency scope negotiation with PO, re-plan remaining sprint around non-design stories, communicate revised forecast to stakeholders.

The mid-sprint health checklist should include items like: "Are all in-progress stories moving daily?", "Are any blockers older than 24 hours?", "Is the burndown tracking within 10% of ideal?", "Has anyone mentioned competing priorities?"

---

## Exercise 3: Automated Signal Detection Prompts (Intermediate)

**Time:** 8 minutes

Now let's create reusable prompts you can run weekly to scan for trouble across different data sources. Each prompt has a built-in threshold that triggers action.

```
Create 5 automated early warning detection prompts I can run weekly as a Scrum Master for the Velocity Squad.

Each prompt should:
- Scan a specific data source
- Have a clear threshold that triggers action
- Output a simple RED / YELLOW / GREEN signal
- Include the specific action to take for each signal level

PROMPT 1: BURNDOWN HEALTH CHECK (Run: Day 5 of each sprint)
- Input: Current burndown data (points remaining vs. ideal)
- Threshold: >15% deviation from ideal = YELLOW, >30% = RED
- Output: Signal + root cause hypothesis + recommended action

PROMPT 2: WIP & FLOW ANALYSIS (Run: Every standup)
- Input: Current board state (stories by status)
- Threshold: WIP > team size = YELLOW, stories stuck >2 days = RED
- Output: Signal + bottleneck location + recommended action

PROMPT 3: TEAM ENERGY SCAN (Run: Wednesday of each sprint week)
- Input: Standup notes from the week so far
- Threshold: 2+ people expressing frustration/blockers = YELLOW, tone shift across team = RED
- Output: Signal + affected individuals + recommended conversation

PROMPT 4: DEPENDENCY & BLOCKER RADAR (Run: Daily)
- Input: Current blockers, external dependencies, waiting items
- Threshold: Any blocker >24 hours = YELLOW, >48 hours = RED
- Output: Signal + blocker aging report + escalation recommendation

PROMPT 5: SPRINT COMMITMENT REALITY CHECK (Run: Day 3 and Day 7)
- Input: Stories completed vs. planned, velocity trend, team capacity changes
- Threshold: <40% done at Day 5 = YELLOW, <25% = RED
- Output: Signal + completion forecast + scope adjustment recommendation

For each prompt:
- Write the complete, copy-paste ready prompt
- Include example input data from the Velocity Squad
- Show example output for GREEN, YELLOW, and RED scenarios
- Explain when false positives might occur and how to handle them
```

### What You Should See

Five complete, ready-to-use prompts. For example, the Burndown Health Check prompt would include:

**GREEN example:** "Day 5, 22 points remaining of 48 planned. Ideal: 24. Status: GREEN. Team is tracking slightly ahead. No action needed."

**YELLOW example:** "Day 5, 35 points remaining of 48 planned. Ideal: 24. Deviation: 46%. Status: RED. 3 stories still in 'In Progress' with no movement since Day 3. Hypothesis: Design dependency blocking front-end stories. Recommended action: Emergency scope discussion with PO, identify which stories can be completed without design input."

False positive guidance: "YELLOW on Day 3 may be premature -- some teams back-load completions. Check again on Day 5 before acting."

---

## Exercise 4: The Correlation Trap (Intermediate)

**Time:** 5 minutes

Copilot is excellent at finding patterns. But patterns aren't always meaningful. This exercise builds your critical thinking muscle.

```
I've noticed something in the Velocity Squad data:

OBSERVATION:
When David Kim (UX designer, shared across 3 teams) attends all standups in a sprint, our velocity is higher. When he misses standups, velocity drops.

DATA:
- Sprint 40: David attended 9/10 standups, Velocity 48
- Sprint 41: David attended 10/10, Velocity 52
- Sprint 42: David attended 8/10, Velocity 45
- Sprint 43: David attended 5/10, Velocity 38
- Sprint 44: David attended 3/10, Velocity 35
- Sprint 45: David attended 7/10, Velocity 42
- Sprint 46: David attended 9/10, Velocity 55
- Sprint 47: David attended 8/10, Velocity 48

This looks like strong correlation. But before I act on it:

1. **IS THIS CORRELATION OR CAUSATION?**
   - What's the correlation coefficient?
   - Does David's standup attendance CAUSE higher velocity?
   - Or is there a confounding variable?

2. **ALTERNATIVE EXPLANATIONS**
   - What else could explain both observations?
   - David's attendance might be a proxy for _______
   - The real causal factor might be _______

3. **THE DANGER OF ACTING ON CORRELATION**
   - If I pressure David to attend all standups, what happens?
   - What if his attendance isn't the cause?
   - How could this damage trust?

4. **THE RIGHT APPROACH**
   - How should I investigate this further?
   - What additional data would confirm or deny causation?
   - What questions should I ask (and who should I ask)?

5. **OTHER CORRELATION TRAPS IN AGILE**
   - Give me 3 more common correlation-not-causation traps that SMs fall into
   - For each: what it looks like, why it's wrong, what to do instead

Teach me to think critically about data patterns, not just react to them.
```

### What You Should See

Copilot will walk through the fallacy:

- **The confounding variable:** David's Daily Scrum (standup) attendance is likely a proxy for his availability to the team. When he's available, he attends Daily Scrums AND delivers design work. The cause of higher velocity isn't Daily Scrum attendance -- it's design capacity.
- **The danger:** If you pressure David to attend Daily Scrums while still splitting his time across 3 teams, you've solved nothing. He'll attend Daily Scrums but still not have time to do design work. Worse, you've added meeting overhead to an already overloaded person.
- **The right approach:** Ask David directly: "When you're less available, is it because of competing team demands?" Track design work completion separately from Daily Scrum attendance.

Common SM correlation traps:
1. "Longer sprint planning = higher velocity" (actually: well-refined backlogs produce both)
2. "Pair programming = slower velocity" (short-term: yes. But defect rate drops, so total cycle time improves)
3. "Remote work = lower collaboration" (Priya is remote and highly collaborative; the variable is inclusion practices, not location)

---

## Exercise 5: Intervention Playbook Design (Advanced)

**Time:** 7 minutes

An early warning system is useless without a playbook. For each signal, you need: what triggers it, what to do first, when to escalate, and how to know if it worked.

**Reference `sample-files/early-warning/intervention-playbook-template.md`:**

```
Help me design an Intervention Playbook for the Velocity Squad. For each early warning signal, I need a complete response protocol.

SIGNAL 1: BURNDOWN STALL (burndown flat for 2+ days)
- Trigger condition: [exact threshold]
- First response (within 4 hours): [specific SM action]
- If unresolved after 24 hours: [escalation step]
- If unresolved after 48 hours: [escalation step]
- Measurement: How do I know the intervention worked?
- Post-incident: What do I add to the retro?

SIGNAL 2: WIP EXPLOSION (WIP > team size)
- Trigger condition: [exact threshold]
- First response: [specific SM action]
- Escalation path: [who, when, how]
- Measurement: [success criteria]
- Post-incident: [retro input]

SIGNAL 3: BLOCKER AGING (any blocker > 48 hours)
- Trigger condition: [exact threshold]
- First response: [specific SM action]
- Escalation path: [who, when, how]
- Measurement: [success criteria]
- Post-incident: [retro input]

SIGNAL 4: TEAM ENERGY DROP (multiple people expressing frustration)
- Trigger condition: [exact threshold]
- First response: [specific SM action]
- Escalation path: [who, when, how]
- Measurement: [success criteria]
- Post-incident: [retro input]

SIGNAL 5: SCOPE CREEP (new work added after sprint commitment)
- Trigger condition: [exact threshold]
- First response: [specific SM action]
- Escalation path: [who, when, how]
- Measurement: [success criteria]
- Post-incident: [retro input]

For each signal, make the response actions SPECIFIC to the Velocity Squad:
- Name the actual people involved (Raj as PO, Jennifer Walsh as VP, Lisa as senior dev, etc.)
- Reference actual team dynamics (Priya's timezone, David's shared capacity, Marcus's junior status)
- Include the exact words I might say in each situation

Also create a ONE-PAGE CHEAT SHEET I can pin to my monitor with all 5 signals and first responses.
```

### What You Should See

A detailed playbook with entries like:

**SIGNAL 1: BURNDOWN STALL**
- **Trigger:** Burndown shows <5% reduction in remaining points over any 2-day window after Day 3
- **First response (4 hours):** Check board for stuck stories. Walk to each person with an in-progress item (or message Priya on Teams). Ask: "What's between you and moving this to done today?" Listen for implicit blockers they haven't raised.
- **24-hour escalation:** Bring data to Raj: "We have X points remaining with Y days left. Here are the 3 stories not moving. I recommend [scope adjustment]."
- **48-hour escalation:** Formal scope renegotiation. Inform Jennifer Walsh if sprint goal is at risk and it's related to a systemic issue (design capacity, environment, etc.).
- **Measurement:** Burndown resumes downward trend within 24 hours of intervention.

Plus a one-page cheat sheet formatted for quick reference:

| Signal | Check | Trigger | First Response |
|--------|-------|---------|----------------|
| Burndown Stall | Day 3, 5, 7 | Flat 2 days | Walk the board, ask each person |
| WIP Explosion | Daily | WIP > 7 | Stop starting, start finishing |
| ... | ... | ... | ... |

---

## Exercise 6: Prediction Audit (Advanced)

**Time:** 5 minutes

The ultimate test: apply your early warning system retroactively. Could you have detected Sprint 44's failure by Day 3?

```
Run a retroactive prediction audit on the Velocity Squad's Sprint 44.

SPRINT 44 OUTCOME: Velocity 35 (planned 48), goal achievement 50%, 3 stories carried over.

Apply the early warning system we built to Sprint 44's daily data:

DAY-BY-DAY SIGNALS:
- Day 1: Normal start. 48 points committed. All stories in "To Do." David confirmed availability.
- Day 2: 3 stories moved to "In Progress." Normal burndown. David's standup update was brief.
- Day 3: David mentioned competing deadline from Team B. 1 design-dependent story ready for review but David hasn't started. WIP = 5 (normal). Burndown: 42 points remaining (ideal: 38.4).
- Day 4: David did not attend standup. 1 story blocked waiting for design. Burndown: 40 points remaining (ideal: 28.8). Lisa started working on a non-design story instead.
- Day 5: 2 stories blocked. Burndown: 38 points remaining (ideal: 24). Marcus asked in standup if he should start a new story or help with blocked ones. No answer given.

AUDIT QUESTIONS:

1. **DAY 3 DETECTION**
   - Which signals from our system would have fired?
   - Signal strength at Day 3: GREEN / YELLOW / RED for each
   - Recommended intervention at Day 3
   - Estimated outcome if intervention happened at Day 3

2. **DAY 4 DETECTION**
   - Which additional signals fired?
   - Cumulative signal strength
   - Recommended intervention at Day 4
   - Estimated outcome if intervention happened at Day 4

3. **DAY 5 DETECTION**
   - Full signal assessment
   - By Day 5, was the sprint already lost?
   - What could still be saved at Day 5?

4. **SCORING THE SYSTEM**
   - Did the early warning system detect the problem?
   - How many days of warning did it provide?
   - Were there false negatives (missed signals)?
   - Were there signals we should add based on this audit?

5. **LESSONS FOR SPRINT 48**
   - What will I watch for differently?
   - What's my Day 3 checklist now?
   - What conversation will I have with David proactively before Sprint 48 starts?
```

### What You Should See

A detailed audit showing:

**Day 3 signals:**
- Burndown deviation: 42 vs. 38.4 ideal = 9.4% deviation. YELLOW (approaching threshold).
- Dependency risk: David's competing priority mentioned. YELLOW.
- Cumulative: 2 YELLOW signals = warrants investigation.
- **Intervention at Day 3:** Talk to David immediately. "I heard you mention competing priorities. Help me understand the situation. What's your availability this sprint for our design stories?" Then alert Raj: "We may need to adjust scope if David's availability is reduced."

**Day 5 signals:**
- Burndown deviation: 38 vs. 24 ideal = 58% deviation. RED.
- Blocker aging: 2 stories blocked > 24 hours. RED.
- WIP imbalance: Work flowing to non-blocked stories, but blocked stories accumulating. YELLOW.
- **By Day 5, sprint goal was already at high risk.** But 20-25 points could still be delivered with immediate scope renegotiation.

**System score:** The early warning system would have detected the problem at Day 3 (2 days earlier than the team actually acknowledged it at Day 7). That's 4 days of intervention time recovered.

> **Signals to Watch For**
>
> - Over-engineering the system (more signals isn't better -- 5 reliable ones beat 20 noisy ones)
> - Alert fatigue (if everything is YELLOW, nothing is YELLOW)
> - Confusing prediction with prevention (detecting a problem early doesn't fix it -- action does)
> - Using the system to assign blame ("the data showed you were behind on Day 3")
> - Forgetting that people are the best sensors (a concerned look in the Daily Scrum beats any metric)

---

## When This Doesn't Work

- **"I don't have daily data."** Start with what you can observe in the Daily Scrum. Tone, blockers mentioned, and burndown are available to every SM. You don't need a tool -- you need attention.
- **"The team thinks I'm micromanaging."** Frame it as protection, not surveillance. "I'm watching these signals so I can remove obstacles faster, not so I can track your progress." Share the playbook with the team -- transparency kills suspicion.
- **"Signals fired but I couldn't get anyone to act."** This is an escalation problem, not a detection problem. Go back to Module 2.2 (Impediment Management) and build your escalation muscle.
- **"Too many false positives."** Tune your thresholds. Start conservative (only RED triggers action), then tighten as you calibrate. Every team's normal variation is different.
- **"My manager wants me to predict velocity exactly."** Velocity is a range, not a number. Use the SPC from Module 4.1 to give confidence intervals. "I'm 68% confident we'll deliver 39-52 points" is more honest and more useful than "We'll do 48."

---

## Module Complete!

You now know how to:
- ✅ Identify leading indicators from existing team data
- ✅ Detect sprint problems 3-5 days before they surface
- ✅ Build automated signal detection prompts
- ✅ Avoid the correlation-causation trap
- ✅ Design intervention playbooks with clear escalation paths
- ✅ Audit your prediction system against real sprint data

---

## Next Steps

Continue to **Module 4.3: Measuring & Communicating SM Impact**

---

## Quick Reference

### Signal Inventory
```
List all data sources available. For each: what leading indicators can I extract?
Rate: signal strength, false positive risk, collection difficulty.
Top 5 early warning signals ranked by prediction strength + ease.
```

### Sprint Failure Post-Mortem
```
Work backwards from Sprint [X] failure. Day by day: what was visible?
What could have been detected at Day 3? Day 5?
Build mid-sprint health checklist: 10 yes/no questions.
```

### Automated Detection Prompt
```
Scan [data source] for early warning signals.
Threshold: [YELLOW at X, RED at Y].
Output: Signal level + root cause hypothesis + recommended action.
Include false positive guidance.
```

### Correlation Check
```
I see correlation between [A] and [B]. Before I act:
Is this causation? What's the confounding variable?
What's the danger of acting on this correlation?
What additional data would confirm or deny?
```

### Intervention Playbook
```
For signal [X]: trigger condition, first response (4 hours),
24-hour escalation, 48-hour escalation, measurement of success.
Make it specific to my team: [names, dynamics, context].
```

### Prediction Audit
```
Apply early warning system retroactively to Sprint [X].
Day by day: which signals fired? What was the signal strength?
Score the system: detection speed, false negatives, gaps.
```

---

**Ready to prove your impact? Continue to Module 4.3!**
