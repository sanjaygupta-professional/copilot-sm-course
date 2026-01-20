# Module 2.2: Impediment Management & Resolution

**Duration:** 30 minutes
**Prerequisites:** Module 2.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Track and categorize impediments systematically
2. Analyze impediment patterns over time
3. Identify root causes vs. symptoms
4. Draft effective escalation communications
5. Research resolution approaches

---

## The SM's Core Responsibility

Removing impediments is a core Scrum Master responsibility. But many SMs:
- Track impediments reactively (only when raised)
- Address symptoms instead of root causes
- Don't quantify impact
- Hesitate to escalate
- Don't look for patterns across sprints

Copilot helps you do all of these systematically.

---

## Systematic Impediment Tracking

### Exercise 1: Analyze Impediment Patterns

Upload your impediment log and analyze patterns.

**Using `sample-files/impediments/impediment-log-sprints-42-47.md`:**

```
Analyze this impediment log to identify patterns and root causes.

For each pattern you find:

1. **PATTERN NAME**
   - Clear, descriptive name

2. **EVIDENCE**
   - How many occurrences?
   - Which sprints?
   - Specific examples

3. **IMPACT QUANTIFICATION**
   - Story points blocked
   - Days delayed
   - Sprint goals affected
   - Cost in team time/morale

4. **ROOT CAUSE ANALYSIS**
   - What's the underlying cause (not the symptom)?
   - Is this within team control or organizational?
   - Why does it keep happening?

5. **RECOMMENDED ACTION**
   - What should be done differently?
   - Who needs to be involved?
   - Does this need escalation?

Rank patterns by impact (highest first).
Show your analysis.
```

### What You Should See

Copilot will identify patterns like:
1. **Design Capacity** (7 occurrences, ~47 points blocked) - Organizational
2. **Requirements Clarity** (3 occurrences, ~15 points) - Process/PO coaching
3. **Environment/Technical** (3 occurrences, ~5 days) - Technical
4. **Timezone/Communication** (2 occurrences) - Process

Plus root cause analysis:
- Design capacity isn't about David - it's about organizational structure (shared service model)
- Requirements issues point to refinement gaps and PO coaching needs

---

## Root Cause Analysis

### Exercise 2: Dig Into Root Causes

Let's go deeper on the design capacity issue.

```
Help me perform root cause analysis on our design capacity impediment.

SURFACE PROBLEM:
David (UX Designer) is shared across 3 teams, causing delays.

SYMPTOMS:
- 7 design-related blockers in 4 sprints
- Stories carry over waiting for designs
- David apologizes and seems stressed
- Stories enter sprint without designs ready

Use the "5 Whys" technique to find root causes:

1. Why is David's capacity causing delays?
2. [Continue based on first answer]
3. [Continue]
4. [Continue]
5. [Continue]

Then:
- What's the actual root cause?
- What's within the team's control to change?
- What requires organizational intervention?
- What short-term mitigations could help while awaiting systemic fix?
```

### What You Should See

A root cause chain like:
1. **Why delays?** → David doesn't have enough time for Velocity Squad
2. **Why not enough time?** → He's shared across 3 teams with competing priorities
3. **Why shared?** → Design is organized as a shared service, not embedded
4. **Why shared service?** → Organizational efficiency decision, not enough designers to embed
5. **Why not enough designers?** → Headcount decisions made without product team input

**Root cause:** Organizational structure that doesn't align design capacity with product team needs.

**Team control:** Plan design 1 sprint ahead, clearer requirements to reduce design iterations
**Organizational:** Need dedicated designer or priority framework from leadership

---

## Drafting Escalations

### Exercise 3: Write Effective Escalation

Many SMs hesitate to escalate. But escalation is part of the job when impediments are outside team control.

```
Help me draft an escalation email about the design capacity issue.

AUDIENCE: Jennifer Walsh (VP Internal Digital Products)

CONTEXT:
- This has been raised informally before
- Jennifer expressed concern in Sprint 46 Review
- She asked for data to take to Design leadership

DATA:
- 4 sprints affected (44-47)
- 7 design-related impediments
- Average resolution: 5.3 days
- 3 stories carried over
- ~47 story points blocked
- Sprint goal achievement down to 70%

WHAT WE'VE TRIED:
- Asked David to prioritize our work (temporary fix, not sustainable)
- Planning design needs 1 sprint ahead (helps but doesn't solve root cause)
- Reducing design-dependent stories (limits what we can deliver)

PROPOSED SOLUTIONS (for her to consider):
1. Dedicated designer for Internal Products teams
2. Priority framework when design conflicts occur
3. Contract/contractor augmentation for peak periods

TONE: Professional, data-driven, solution-oriented, appreciative of past support

Generate the email. Keep it under 300 words. Lead with impact.
```

### What You Should See

A professional escalation email:
- Opens with business impact (sprint goal achievement, stakeholder confidence)
- Provides data summary (not overwhelming detail)
- Acknowledges what's been tried
- Proposes solutions (not just problems)
- Asks for specific meeting/decision

---

## Researching Solutions

### Exercise 4: Research Industry Approaches

Before proposing solutions, research what others do.

```
Research: How do agile teams typically handle shared designer capacity constraints?

I need:

1. **COMMON APPROACHES**
   - Embedded designers vs. shared service
   - Design sprints / design ahead patterns
   - Designer-to-team ratios in industry
   - Pros and cons of each model

2. **MITIGATION STRATEGIES**
   - What teams do when they can't get dedicated designers
   - How to work more efficiently with limited design capacity
   - Self-service design systems

3. **MAKING THE CASE**
   - How to quantify the cost of design constraints
   - What data resonates with leadership
   - How other companies have successfully transitioned

4. **INTERIM SOLUTIONS**
   - What can we do while awaiting organizational change
   - Quick wins that don't require headcount changes

Include sources or references where possible.
```

### What You Should See

Research findings like:
- Industry standard: 1 designer per 5-7 developers
- Successful patterns: Design tokens, component libraries reduce design needs
- Case studies of companies embedding designers
- Interim approaches: Developer-designed prototypes, design system adoption

---

## Weekly Impediment Management

### Exercise 5: Create Weekly Report

Create a structured weekly impediment report.

```
Create a weekly impediment report from this data.

CURRENT OPEN IMPEDIMENTS:
1. Design capacity (ongoing, organizational)
2. Rate limit requirements unclear (resolved Monday)
3. PR review delays (process improvement needed)

RESOLVED THIS WEEK:
1. Staging environment access (1 day to resolve)
2. Rate limit requirements (4 days to resolve)

NEW THIS WEEK:
1. PR review taking too long (3 days for Marcus's PR)

METRICS:
- Open impediments: 2 (1 high, 1 low)
- Resolved this week: 2
- Average resolution time: 2.5 days
- Escalated: 1 (design capacity)

Format as:

## Impediment Report - Week of [Date]

### Executive Summary
[3 bullets max]

### Open Impediments
[Table with status]

### Resolved This Week
[Quick list]

### Escalation Status
[What's escalated, to whom, status]

### Actions for Next Week
[What I'm doing]
```

### What You Should See

A clean, scannable weekly report suitable for sharing with leadership or team.

---

## Impediment Prevention

The best impediment is one that never happens.

### Exercise 6: Prevention Analysis

```
Based on the impediment patterns we've analyzed, help me create
a prevention plan.

For each common impediment type:

1. **DESIGN CAPACITY ISSUES**
   - Early warning signs
   - Prevention measures
   - How to detect before it blocks work

2. **REQUIREMENTS CLARITY**
   - Early warning signs
   - Prevention measures
   - Refinement process improvements

3. **TECHNICAL/ENVIRONMENT**
   - Early warning signs
   - Prevention measures
   - Proactive maintenance

4. **COMMUNICATION GAPS**
   - Early warning signs
   - Prevention measures
   - Process improvements

Create a checklist I can use in sprint planning to prevent these issues.
```

### What You Should See

A prevention checklist like:
- [ ] Design: Are all stories design-ready before planning?
- [ ] Requirements: Do all stories have clear acceptance criteria?
- [ ] Dependencies: Are cross-team dependencies identified?
- [ ] Capacity: Does anyone have concerns about their workload?

---

## Module Complete!

You now know how to:
- ✅ Track impediments systematically
- ✅ Analyze patterns across sprints
- ✅ Perform root cause analysis
- ✅ Draft effective escalations
- ✅ Research industry solutions
- ✅ Create prevention strategies

---

## Next Steps

Continue to **Module 2.3: Team Health & Continuous Improvement**

---

## Quick Reference

### Pattern Analysis
```
Analyze this impediment log.
For each pattern: name, evidence, impact, root cause, recommendation.
Rank by impact.
```

### Root Cause (5 Whys)
```
Perform 5 Whys analysis on [impediment].
What's within team control? What needs escalation?
```

### Escalation Email
```
Draft escalation to [person] about [issue].
Data: [metrics]. Tried: [attempts]. Proposed: [solutions].
Tone: [professional, data-driven]. Under [X] words.
```

### Weekly Report
```
Create weekly impediment report.
Open: [list]. Resolved: [list]. New: [list].
Format as executive summary, tables, actions.
```

---

**Ready for team health? Let's continue!**
