# Module 1.4: Researcher & Analyst Agents

**Duration:** 25 minutes
**Prerequisites:** Module 1.3 completed

---

## What You'll Learn

By the end of this module, you will:
1. Understand what Copilot agents are
2. Use Researcher agent for agile best practices research
3. Use Analyst agent for velocity and metrics analysis
4. Combine agents for complex SM workflows
5. Know when to use which agent

---

## What Are Copilot Agents?

Copilot has specialized "agents" that are optimized for specific types of tasks:

| Agent | Purpose | Best For |
|-------|---------|----------|
| **Researcher** | Deep research, web search, synthesizing sources | Agile practices, industry benchmarks, facilitation techniques |
| **Analyst** | Data analysis, reasoning, calculations | Velocity trends, metrics, capacity planning |
| **Designer** | Visual creation | Diagrams, presentations (covered in Level 3) |

When you ask Copilot a question, it routes to the appropriate agent automatically. But you can also explicitly request a specific agent's help.

---

## The Researcher Agent

Researcher performs deep research by searching the web and your work data, then synthesizing findings.

### When to Use Researcher

- Finding facilitation techniques for specific situations
- Researching agile best practices
- Looking up industry benchmarks
- Exploring solutions to team challenges
- Finding articles and resources to share with the team

### Exercise 1: Research Retrospective Techniques

The Velocity Squad has "retrospective fatigue." Let's research fresh approaches.

**Do this now:**

```
Research: "Retrospective facilitation techniques for teams with
retrospective fatigue"

I need:
1. 5 different retrospective formats beyond Start/Stop/Continue
   - Name of each format
   - How it works (brief description)
   - When it's most effective
   - Time required

2. Signs of retrospective fatigue to watch for

3. How to re-energize a team's retrospectives

4. Specific facilitation techniques for:
   - Including quiet team members
   - Addressing recurring issues that never improve
   - Hybrid/remote teams

5. 3 articles or resources I could share with my team

Provide actionable recommendations I can use in my next retro.
```

### What You Should See

Researcher will provide:
- Specific formats (Sailboat, 4Ls, Starfish, Lean Coffee, etc.)
- Warning signs (same issues, low energy, cynicism)
- Techniques for inclusion and action follow-through
- Links to reputable agile resources

---

## The Analyst Agent

Analyst is optimized for data reasoning, calculations, and pattern analysis.

### When to Use Analyst

- Analyzing velocity trends
- Calculating capacity for sprint planning
- Identifying patterns in metrics
- Interpreting burndown charts
- Forecasting based on historical data

### Exercise 2: Analyze Velocity Data

Let's analyze the Velocity Squad's velocity patterns.

**Do this now:**

1. First, provide the data:

```
Analyze this velocity data from the Velocity Squad's last 8 sprints:

| Sprint | Committed | Completed | Carryover | Notes |
|--------|-----------|-----------|-----------|-------|
| Sprint 40 | 50 | 48 | 2 | Baseline |
| Sprint 41 | 52 | 52 | 0 | Good sprint |
| Sprint 42 | 40 | 35 | 5 | Holiday sprint |
| Sprint 43 | 55 | 55 | 0 | Best sprint |
| Sprint 44 | 50 | 42 | 8 | Design dependency |
| Sprint 45 | 48 | 38 | 10 | Lisa PTO |
| Sprint 46 | 50 | 45 | 5 | Dashboard carryover |
| Sprint 47 | 52 | 42 | 10 | Current (in progress) |

Provide:

1. **VELOCITY STATISTICS**
   - Average velocity (exclude outliers like Sprint 42)
   - Velocity range and standard deviation
   - Trend direction

2. **PATTERN ANALYSIS**
   - What causes high-velocity sprints?
   - What causes low-velocity sprints?
   - Is there a pattern in carryover?

3. **RELIABILITY ASSESSMENT**
   - How predictable is this team?
   - What's a realistic planning velocity?
   - Confidence interval for next sprint

4. **RECOMMENDATIONS**
   - What should change to stabilize velocity?
   - What capacity should we commit to for Sprint 48?
   - What conversations should the SM have with the team?

Show your calculations.
```

### What You Should See

Analyst will calculate:
- Average ~45 points (excluding Sprint 42)
- High variance (35-55 range is concerning)
- Pattern: PTO and design dependencies cause drops
- Recommendation: Plan for 42-45 points with buffer

---

## Exercise 3: Capacity Planning

Let's use Analyst for Sprint 48 capacity planning.

**Do this now:**

```
Help me calculate capacity for Sprint 48.

TEAM CAPACITY DATA:
- Sprint length: 10 working days
- Lisa: 9 days (1 day training)
- Marcus: 10 days (full capacity)
- Priya: 8 days (2 days public holiday)
- David: 4 days (shared with 2 other teams)

INDIVIDUAL VELOCITIES (points per day when available):
- Lisa: 1.5 points/day (tech lead, also reviews others)
- Marcus: 1.0 points/day (mid-level)
- Priya: 1.2 points/day (strong performer)
- David: 0.8 points/day (design work is harder to estimate)

FACTORS TO CONSIDER:
- Sprint 47 is carrying over 10 points
- Team's average velocity is 45 points
- We want 10% buffer for unknowns

Calculate:
1. Raw capacity by person
2. Team total raw capacity
3. Recommended commitment (with buffer)
4. How does this compare to historical velocity?
5. Risk assessment for Sprint 48

Show your math.
```

### What You Should See

Analyst will show:
- Lisa: 9 × 1.5 = 13.5 points
- Marcus: 10 × 1.0 = 10 points
- Priya: 8 × 1.2 = 9.6 points
- David: 4 × 0.8 = 3.2 points
- **Raw total: ~36 points**
- With 10% buffer: ~32-33 points commitment
- Plus 10 points carryover = careful planning needed

---

## Combining Agents: Research + Analysis

The real power comes from combining agents for complex questions.

### Exercise 4: Benchmark Analysis

Let's compare Velocity Squad to industry benchmarks.

**Do this now:**

```
I want to assess my team's performance against industry benchmarks.

VELOCITY SQUAD DATA:
- Team size: 7 (3 devs, 2 QA, 1 designer, 1 PO)
- Sprint length: 2 weeks
- Average velocity: 45 story points
- Velocity range: 35-55 points (20-point swing)
- Sprint goal achievement: 70%
- Carryover rate: 15%
- Standup duration: 25 minutes (target 15)

Research and analyze:

1. **INDUSTRY BENCHMARKS**
   - What's typical velocity variance for a team this size?
   - What's a healthy carryover rate?
   - What's normal sprint goal achievement %?
   - How long should standups actually take?

2. **GAP ANALYSIS**
   - Where are we vs. benchmarks?
   - Which gaps matter most?
   - Which are within normal range?

3. **PRIORITIZED IMPROVEMENTS**
   - What should we focus on first?
   - Expected impact of each improvement
   - How to measure progress

4. **CONVERSATION STARTERS**
   - How do I share this with the team constructively?
   - How do I present to stakeholders?
```

### What You Should See

A combination of research (benchmarks, industry data) and analysis (gap assessment, prioritization).

---

## When to Use Which Agent

| Situation | Agent | Why |
|-----------|-------|-----|
| "What retro formats exist?" | Researcher | Exploring options, finding resources |
| "Analyze our velocity trend" | Analyst | Data, calculations, patterns |
| "Is our velocity normal?" | Both | Research benchmarks + analyze our data |
| "How to facilitate difficult convos" | Researcher | Techniques, best practices |
| "Calculate sprint capacity" | Analyst | Math, forecasting |
| "Why is our team struggling?" | Both | Research causes + analyze our specifics |

---

## Pro Tips for Agent Usage

### Be Specific with Researcher

❌ "Research agile"
✅ "Research specific facilitation techniques for retrospectives when the same issues keep recurring and action items don't get completed"

### Give Analyst Context

❌ "Analyze this data"
✅ "Analyze this velocity data. The team is 7 people, 2-week sprints, and we want to understand why velocity swings so much between sprints."

### Ask for Calculations

When using Analyst, explicitly ask:
- "Show your calculations"
- "What's the formula you used?"
- "What assumptions are you making?"

### Verify Important Numbers

For critical calculations (capacity planning, forecasts), double-check the math yourself or ask Copilot to verify.

---

## Module Complete!

You now know how to:
- ✅ Use Researcher for agile best practices and techniques
- ✅ Use Analyst for velocity analysis and capacity planning
- ✅ Combine agents for complex questions
- ✅ Know when to use which agent
- ✅ Get better results with specific prompts

---

## Next Steps

Continue to **Module 1.5: Persona Prompting**

In Module 1.5, you'll learn:
- Creating personas for different perspectives
- Getting multi-perspective feedback on process changes
- Building a prompt library for coaching

---

## Quick Reference

### Researcher Prompt Pattern
```
Research: "[specific topic]"

I need:
- [Specific questions]
- [Context about my situation]
- [Desired output format]
```

### Analyst Prompt Pattern
```
Analyze this [type of data]:
[Paste or describe data]

Calculate/Identify:
- [Specific metrics]
- [Patterns to look for]
- [Comparisons to make]

Show your calculations.
```

### Combined Pattern
```
Research and analyze:
[Topic]

My data:
[Team data]

Compare against:
- Industry benchmarks
- Best practices
- Historical performance

Provide recommendations.
```

---

**Ready for persona prompting? Let's continue!**
