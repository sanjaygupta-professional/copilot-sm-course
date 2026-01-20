# Module 2.3: Team Health & Continuous Improvement

**Duration:** 30 minutes
**Prerequisites:** Module 2.2 completed

---

## What You'll Learn

By the end of this module, you will:
1. Analyze team health survey results for patterns
2. Identify coaching opportunities with team members
3. Prepare for difficult coaching conversations
4. Track continuous improvement over time
5. Create a team health dashboard

---

## Beyond Velocity: Team Health

High-performing teams aren't just fast - they're healthy. Team health includes:

| Dimension | What It Means |
|-----------|---------------|
| **Psychological Safety** | Safe to take risks, ask questions, admit mistakes |
| **Sustainable Pace** | Not burning out, work-life balance |
| **Clarity** | Clear goals, roles, expectations |
| **Collaboration** | Working together effectively |
| **Growth** | Learning, developing, progressing |

As a Scrum Master, you're responsible for nurturing team health, not just facilitating ceremonies.

---

## Analyzing Team Health Data

### Exercise 1: Health Survey Analysis

Use the sample team health data to identify concerns.

**Using `sample-files/team-health/health-survey-results.csv`:**

```
Analyze these team health survey results:

Category,Sprint 43,Sprint 44,Sprint 45,Sprint 46,Sprint 47
Psychological Safety,4.2,3.9,3.8,3.5,3.2
Clarity of Goals,4.0,4.0,4.2,4.0,4.1
Sustainable Pace,3.5,3.2,3.0,2.8,2.5
Team Collaboration,4.5,4.4,4.5,4.3,4.4
Process Satisfaction,4.0,3.8,3.5,3.2,3.0
Manager Support,4.3,4.2,4.2,4.0,4.1
Growth Opportunities,3.8,3.7,3.6,3.5,3.5
Recognition,3.5,3.4,3.3,3.2,3.0
Work-Life Balance,3.2,3.0,2.8,2.6,2.4
Overall Team Health,3.9,3.7,3.6,3.4,3.2

Scale: 1-5 (5 = excellent, 3 = neutral, 1 = poor)

Provide:

1. **TREND ANALYSIS**
   - Which dimensions are improving?
   - Which are declining?
   - Rate of decline (how fast?)

2. **CONCERN AREAS**
   - What needs immediate attention? (Below 3.0 or rapid decline)
   - What's at risk of becoming critical?

3. **CORRELATION ANALYSIS**
   - Are any dimensions connected?
   - What might be causing the declines?
   - Hypotheses about root causes

4. **BRIGHT SPOTS**
   - What's stable or strong?
   - What can we learn from what's working?

5. **RECOMMENDED ACTIONS**
   - What should the SM do immediately?
   - What conversations need to happen?
   - What systemic issues need addressing?

Show the data visualization or summary that would help me present this to the team.
```

### What You Should See

Analysis revealing:
- **Critical:** Work-Life Balance (2.4, declining fast), Sustainable Pace (2.5)
- **Concerning:** Psychological Safety (3.2, steady decline), Process Satisfaction (3.0)
- **Stable:** Team Collaboration (4.4), Clarity (4.1)

Correlation hypothesis: Unsustainable pace → Lower psychological safety → Lower process satisfaction

---

## Individual Coaching Opportunities

### Exercise 2: Coaching Prep for Struggling Team Member

Based on team dynamics and health data, prepare coaching conversations.

```
Help me prepare a coaching conversation with Priya.

CONTEXT:
- Role: Developer (remote, Bangalore)
- Tenure: 4 years at company
- Working: IST timezone (10.5 hours ahead of team)

OBSERVATIONS:
- Mentioned feeling "excluded" in retro (almost cried)
- Sometimes works weekends to "stay ahead"
- Gets left out of real-time decisions
- High performer but seems isolated
- Other remote workers at Accenture seem more integrated

GOALS FOR THIS CONVERSATION:
- Understand her experience more deeply
- Explore what would help her feel more included
- Ensure she's not burning out (weekend work)
- Build trust and show I care

Generate:

1. **CONVERSATION OPENING**
   - How to start without making it awkward
   - Setting the right tone

2. **POWERFUL QUESTIONS**
   - Open-ended questions to explore her experience
   - Questions about inclusion
   - Questions about workload/burnout
   - Questions about what she needs

3. **LISTENING FOR**
   - Signs she's minimizing ("it's fine")
   - Signs of deeper issues
   - What might she not say directly?

4. **AVOID**
   - What not to say
   - Pitfalls that could damage trust
   - Assumptions to check

5. **POSSIBLE OUTCOMES**
   - What might she ask for?
   - What can I commit to?
   - Follow-up plan

6. **IF SHE SAYS "I'M FINE"**
   - How to gently probe deeper
   - How to leave the door open
```

### What You Should See

A coaching conversation guide with:
- Opening: "I wanted to check in with you directly after what you shared in the retro. How are you really doing?"
- Questions: "What does a good day look like for you on this team?" "When do you feel most included? Least?"
- Avoid: "You need to speak up more" (puts burden on her) or "We all feel excluded sometimes" (minimizing)
- If "I'm fine": "I hear you. And you know, if that ever changes, I'm here. What I shared in the retro really mattered to me."

---

## Addressing Systemic Issues

### Exercise 3: Work-Life Balance Intervention

The health data shows work-life balance declining. This is a systemic issue.

```
Help me address declining work-life balance on my team.

DATA:
- Work-Life Balance score: 3.2 → 2.4 over 5 sprints
- Sustainable Pace score: 3.5 → 2.5
- We know: Priya works weekends, Lisa takes on too much
- Team committed to 52 points last sprint (capacity was ~45)
- Sprint goal achievement: 70%

ROOT CAUSES (hypotheses):
- Overcommitment in planning
- Design dependency causes crunch at end of sprint
- "One more thing" scope additions
- High performers compensating for systemic issues

Questions:

1. **IS THIS AN SM PROBLEM OR LEADERSHIP PROBLEM?**
   - What's within my control?
   - What needs escalation?

2. **TEAM CONVERSATION**
   - Should I raise this in retro?
   - How to discuss without blame?
   - What data to share?

3. **INDIVIDUAL CONVERSATIONS**
   - Should I talk to Lisa about taking on too much?
   - How to approach without being patronizing?

4. **SYSTEMIC CHANGES**
   - What process changes might help?
   - How to protect the team better?
   - What to propose to leadership?

5. **MEASURING IMPROVEMENT**
   - What would success look like?
   - Timeline for improvement?
   - How to track?
```

### What You Should See

An intervention plan:
- SM control: Enforce realistic capacity, push back on scope creep, protect Focus Fridays
- Team conversation: Share the health trend data, ask what's causing it
- Lisa conversation: Appreciate her contributions, explore whether she wants to take on less
- Systemic proposal: Commit to 85% of calculated capacity, add buffer, track overtime

---

## Continuous Improvement Tracking

### Exercise 4: Improvement Metrics Dashboard

Create a way to track team improvements over time.

```
Help me create a team improvement dashboard.

I want to track:

1. **DELIVERY METRICS**
   - Velocity (and stability)
   - Sprint goal achievement %
   - Carryover rate
   - Cycle time

2. **HEALTH METRICS**
   - Team health survey (overall + key dimensions)
   - Work-life balance
   - Psychological safety

3. **PROCESS METRICS**
   - Standup duration
   - Retro action completion rate
   - Impediment resolution time
   - PR review time

4. **IMPROVEMENT TRACKING**
   - Actions we've committed to
   - Status of each
   - Impact measured

Design:
- What should this dashboard look like?
- What's the right cadence for updating each metric?
- How do I make this visible to the team without creating pressure?
- What targets should we set?

Generate a template I can use in Excel or a wiki.
```

### What You Should See

A dashboard design with:
- Traffic light indicators (Red/Yellow/Green)
- Trend arrows (improving/declining/stable)
- Specific metrics with targets
- Improvement action tracker

---

## Coaching for Speaking Up

### Exercise 5: Coaching Marcus

Let's prepare a coaching conversation for Marcus, who struggles to speak up.

```
Help me coach Marcus on speaking up in team meetings.

CONTEXT:
- Junior developer (2 years experience)
- Has great ideas in 1:1s
- Goes silent in group settings
- Said in retro: "I relate to feeling like my voice doesn't matter"
- Tends to defer to Lisa (senior dev)
- Not confrontational by nature

APPROACH:
I want to help him without:
- Putting him on the spot in meetings
- Making him feel broken or deficient
- Creating pressure that makes it worse

Generate:

1. **CONVERSATION APPROACH**
   - How to frame this conversation positively
   - Acknowledging his strengths first

2. **EXPLORATORY QUESTIONS**
   - Understanding his experience
   - What holds him back?
   - When has he spoken up successfully?

3. **REFRAMES**
   - How to reframe "speaking up" in ways that might help
   - Perspectives that might reduce anxiety

4. **PRACTICAL TECHNIQUES**
   - Low-risk ways to start participating more
   - How I can create space for him in meetings
   - Gradual confidence builders

5. **FACILITATION CHANGES**
   - What can I do as facilitator to help quieter voices?
   - Techniques for inclusive meetings

6. **FOLLOW-UP**
   - How to check in without hovering
   - How to celebrate small wins
   - Realistic timeline for change
```

### What You Should See

Coaching approach:
- Frame: "I've noticed you have really thoughtful perspectives in our 1:1s. I want to create more space for those in team settings."
- Questions: "What goes through your mind when you have an idea in a group meeting?" "Tell me about a time you did share an idea - what made that feel safe?"
- Techniques: Silent writing before discussion, chat-based voting, explicitly asking "Marcus, what's your take?"
- Timeline: 2-3 months for visible change, celebrate any participation

---

## Level 2 Complete!

You've completed all Advanced SM Workflow modules.

You now know how to:
- ✅ Facilitate all ceremonies effectively with Copilot support
- ✅ Track, analyze, and resolve impediments systematically
- ✅ Monitor and improve team health
- ✅ Coach individual team members
- ✅ Drive continuous improvement

---

## What's Next

**Level 3: Team Visuals** teaches you to:
- Generate images with DALL-E 3
- Create sprint review visuals
- Design retrospective facilitation aids
- Build team celebration graphics

---

## Quick Reference

### Health Survey Analysis
```
Analyze team health survey data.
Identify: trends, concerns, correlations, bright spots, actions.
```

### Coaching Prep
```
Prepare coaching conversation with [name].
Context: [situation]. Observations: [what I've noticed].
Goals: [what I want to achieve].
Generate: opening, questions, avoid, outcomes.
```

### Systemic Issue Analysis
```
Address [declining metric] on my team.
Data: [evidence]. Root causes: [hypotheses].
What's SM control vs. escalation? What process changes help?
```

### Improvement Dashboard
```
Create improvement dashboard tracking:
- Delivery metrics
- Health metrics
- Process metrics
- Improvement actions
Design template for [platform].
```

---

**Ready for visuals? Let's continue to Level 3!**
