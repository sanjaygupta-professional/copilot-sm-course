# The Bad Prompt Clinic

## Instructions

Below are 3 intentionally weak prompts. For each one:
1. Identify what makes it ineffective
2. Diagnose the specific problems
3. Rewrite it as a strong prompt
4. Compare the before/after outputs

---

## Bad Prompt #1: The Vague Request

```
Help me with my retrospective.
```

**Diagnosis:**
- No context about the team, sprint, or specific challenges
- No desired output format
- No constraints or focus areas
- Copilot will give generic "5 tips for retrospectives" — useless

**Rewrite:**
```
I'm facilitating a retrospective for the Velocity Squad (7 people) after Sprint 47.

KEY CONTEXT:
- Sprint goal was partially met (38 of 48 planned points completed)
- David (UX designer, shared across 3 teams) was the primary blocker — 3 stories waited for design
- This is the 4th sprint in a row with design-related impediments
- Morale is mixed: Lisa (senior dev) is frustrated; Marcus (junior) had his best sprint

WHAT I NEED:
1. A facilitation guide with 3 targeted discussion questions (not generic "what went well")
2. An icebreaker that acknowledges frustration without dwelling on it
3. A structured way to discuss the design bottleneck without making David feel attacked

FORMAT: Numbered facilitation guide with timing for a 90-minute session.
```

---

## Bad Prompt #2: The Kitchen Sink

```
Analyze our team's velocity, burndown, health survey, impediment log, standup notes, sprint review feedback, retrospective actions, backlog health, cycle time, lead time, work in progress, defect rate, code review turnaround, deployment frequency, and team satisfaction for Sprint 47 and tell me everything that's going on with a full analysis of all trends, patterns, correlations, anomalies, risks, opportunities, and recommendations for improvement across all dimensions.
```

**Diagnosis:**
- Requests analysis of 15+ data sources simultaneously
- No prioritization — everything is equally important (meaning nothing is)
- Output will be superficial across all dimensions instead of deep on what matters
- No specific question being answered

**Rewrite:**
```
Analyze our Sprint 47 data to answer ONE question: "Is the Velocity Squad getting better or worse?"

DATA (attached):
- Velocity: last 8 sprints (velocity-history.csv)
- Health survey: current sprint (health-survey-results.csv)
- Impediment log: sprints 42-47

FOCUS ON:
1. Velocity trend — improving, declining, or volatile? (use last 8 sprints)
2. The ONE metric that concerns you most, and why
3. The ONE bright spot I should celebrate with the team

FORMAT:
- Executive summary (3 sentences)
- Supporting analysis (bullet points, max 1 page)
- Recommended action (1 thing to do this week)
```

---

## Bad Prompt #3: The Assumed Context

```
Write the email to Jennifer about the issue.
```

**Diagnosis:**
- Assumes Copilot knows who Jennifer is and why you're emailing her
- "The issue" could be anything — no specificity
- No tone guidance, audience awareness, or desired outcome
- Even with Copilot Memory, this is too ambiguous

**Rewrite:**
```
Draft an escalation email to Jennifer Walsh, VP of Internal Digital Products.

THE ISSUE:
David Kim (our UX designer) is shared across 3 teams. In the last 4 sprints, design capacity has been our #1 impediment — blocking 47 story points total. This sprint, 3 stories are again waiting for design review.

WHAT I'VE ALREADY TRIED:
- Discussed with David directly (he's overwhelmed, not the problem)
- Raised at Scrum of Scrums (other SMs have the same issue)
- Adjusted sprint planning to front-load design work (helped partially)

WHAT I'M ASKING FOR:
- A meeting with Jennifer to discuss dedicated design resources
- Ideally, 1 designer per 2 teams instead of 1 designer per 3 teams

TONE: Professional, data-driven, not complaining. Lead with impact on delivery, not frustration. Show I've tried to solve this myself first.

FORMAT: Email ready to send, under 200 words.
```

---

## Pattern Recognition

| Problem | Bad Prompt Pattern | Fix |
|---------|-------------------|-----|
| Too vague | "Help me with X" | Add context, constraints, format |
| Too broad | "Analyze everything" | Ask ONE question, prioritize |
| Assumed context | "Write the thing about the issue" | State who, what, why explicitly |
| No format | Missing output structure | Specify format, length, audience |
| No constraints | No boundaries on scope | Add "focus on," "max," "prioritize" |
