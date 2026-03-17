# One-Prompt Sprint Report Generator

## When to Use
Use at the end of every sprint to generate a stakeholder-ready sprint report in under 5 minutes.

## The Prompt

```
Generate a sprint report from the following data.

SPRINT: [Sprint number]
TEAM: [Team name, size]
SPRINT GOAL: [The goal]
GOAL STATUS: [Met / Partially met / Not met]

DATA:
- Planned: [X] story points across [Y] stories
- Completed: [X] points across [Y] stories
- Carryover: [X] points across [Y] stories (list story IDs)
- Velocity trend (last 5 sprints): [list]
- Impediments raised: [X] (resolved: [Y], open: [Z])
- Top impediment: [description]
- Key accomplishments: [list 2-3]
- Key risks for next sprint: [list 1-2]
- Team health: [score] (trend: up/down/stable)

GENERATE THREE VERSIONS:

1. TEAM VERSION (for retrospective)
   - Focus on learning and improvement
   - Celebrate wins, be honest about misses
   - Include data that helps the team self-assess
   - Tone: collaborative, forward-looking

2. MANAGEMENT VERSION (for Jennifer Walsh)
   - Focus on delivery reliability and predictability
   - Highlight risks and mitigation plans
   - Include velocity trend and sprint goal achievement rate
   - Tone: professional, data-driven, concise

3. EXECUTIVE VERSION (for Richard Thorne)
   - Focus on business outcomes, not process
   - Zero agile jargon (no "velocity," "sprint," "story points")
   - Frame in terms of: progress toward goals, team capacity, risks to timeline
   - Tone: brief (5 sentences max), outcome-oriented

Each version should be under 200 words.
```

## Example Usage (Sprint 47)

```
Generate a sprint report from the following data.

SPRINT: Sprint 47
TEAM: Velocity Squad, 7 members
SPRINT GOAL: "Complete search filter redesign and API integration"
GOAL STATUS: Partially met (search filter done, API integration carried over)

DATA:
- Planned: 52 points across 11 stories
- Completed: 48 points across 9 stories
- Carryover: 4 points across 2 stories (AKX-1198, AKX-1201)
- Velocity trend: 35, 42, 55, 48, 48
- Impediments raised: 4 (resolved: 3, open: 1)
- Top impediment: David Kim design reviews delayed 2 stories by 3 days
- Key accomplishments: Search filter shipped, new standup format reduced from 22 to 18 min
- Key risks: David's availability for Sprint 48, Priya showing burnout signals
- Team health: 3.38/5 (trend: slight decline from 3.66)

GENERATE THREE VERSIONS.
```
