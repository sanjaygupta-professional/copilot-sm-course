# Impediment Analysis Templates

Prompts for tracking, analyzing, and escalating impediments.

---

## Impediment Pattern Analysis

Use this to identify patterns in impediments over time.

```
Analyze this impediment log to identify patterns and root causes.

For each pattern you find:

1. **PATTERN NAME**
   - Clear, descriptive name

2. **EVIDENCE**
   - How many times has this occurred?
   - Which sprints?
   - Specific examples from the log

3. **IMPACT QUANTIFICATION**
   - Story points blocked
   - Days delayed
   - Sprint goals affected

4. **ROOT CAUSE ANALYSIS**
   - What's the underlying cause?
   - Is this within team control or organizational?
   - Why does it keep happening?

5. **RECOMMENDED ACTION**
   - What should we do differently?
   - Who needs to be involved?
   - Does this need escalation?

Rank patterns by impact (highest first).

[Paste impediment log here]
```

---

## Escalation Draft Generator

Use this to draft an escalation email for leadership.

```
Help me draft an escalation email about a recurring impediment.

CONTEXT:
- Impediment: [Describe the impediment]
- Frequency: [How often it occurs]
- Impact: [Story points, sprints, goals affected]
- What we've tried: [Previous attempts to resolve]
- Escalating to: [Name and role]

Generate an escalation email that:

1. **OPENS WITH IMPACT**
   - Lead with business impact, not technical details
   - Quantify the cost

2. **PROVIDES EVIDENCE**
   - Specific instances
   - Data and metrics
   - Timeline

3. **PROPOSES SOLUTIONS**
   - 2-3 concrete options
   - Pros/cons of each
   - Your recommendation

4. **MAKES A CLEAR ASK**
   - What do you need from them?
   - By when?
   - What happens if no action?

5. **TONE**
   - Professional, not complaining
   - Solution-oriented
   - Respectful of their time

Keep it under 300 words. Busy executives scan, they don't read.
```

---

## Sprint Impact Assessment

Use this to assess how impediments affected a specific sprint.

```
Analyze how impediments affected Sprint [X] delivery.

From this impediment log and sprint data:

1. **IMPEDIMENT INVENTORY**
   | Impediment | Days Open | Stories Blocked | Points Blocked |
   |------------|-----------|-----------------|----------------|

2. **VELOCITY IMPACT**
   - Target velocity: [X]
   - Actual velocity: [Y]
   - Gap attributable to impediments: [Z]

3. **SPRINT GOAL IMPACT**
   - Was the sprint goal achieved?
   - If not, what role did impediments play?

4. **CARRYOVER ANALYSIS**
   - What carried over to next sprint?
   - Why?

5. **AVOIDABILITY ASSESSMENT**
   - Which impediments could we have prevented?
   - Which were outside our control?
   - What early warning signs did we miss?

6. **LESSONS FOR NEXT SPRINT**
   - What should we do differently?
   - What risks should we mitigate proactively?

[Paste impediment log and sprint data here]
```

---

## Cross-Team Dependency Analysis

Use this when dependencies on other teams are causing delays.

```
Analyze dependencies on other teams that are causing impediments.

From this impediment log, map out:

1. **DEPENDENCY MAP**
   | Our Team Needs | From Team | Type | Frequency | Avg Wait Time |
   |----------------|-----------|------|-----------|---------------|

2. **PAIN POINTS**
   - Which dependencies cause the most delays?
   - Which teams are we waiting on most?
   - Are there patterns in timing?

3. **COMMUNICATION GAPS**
   - Are we requesting early enough?
   - Are expectations clear?
   - Is there a formal process or ad-hoc?

4. **RELATIONSHIP ASSESSMENT**
   - How is the working relationship?
   - Are there tensions?
   - Who are the key contacts?

5. **RECOMMENDATIONS**
   - How can we reduce dependency risk?
   - Should we formalize any processes?
   - Do we need organizational intervention?

[Paste impediment log here]
```

---

## Weekly Impediment Report

Use this to create a weekly impediment summary for the team and stakeholders.

```
Create a weekly impediment report from this log.

Structure:

## Impediment Report - Week of [Date]

### Executive Summary
- Total impediments: [X]
- Resolved this week: [Y]
- Still open: [Z]
- Sprint goal at risk: [Yes/No]

### New Impediments
| ID | Description | Impact | Owner | Status |
|----|-------------|--------|-------|--------|

### Resolved This Week
| ID | Description | Days Open | Resolution |
|----|-------------|-----------|------------|

### Ongoing Impediments
| ID | Description | Days Open | Escalated? | Next Step |
|----|-------------|-----------|------------|-----------|

### Escalation Summary
- What's been escalated and to whom
- Status of previous escalations

### Actions for Next Week
- What we're doing to address open items

Keep it to one page. Use color coding if possible (Red/Yellow/Green).

[Paste impediment log here]
```

---

## Impediment Resolution Retrospective

Use this after resolving a significant impediment to capture learnings.

```
Help me document learnings from resolving this impediment.

IMPEDIMENT: [Description]
DATE RAISED: [When]
DATE RESOLVED: [When]
DAYS OPEN: [X]

Document:

1. **WHAT HAPPENED**
   - Timeline of the impediment
   - Who was affected
   - What was the impact

2. **RESOLUTION PATH**
   - What did we try?
   - What worked?
   - Who helped?

3. **ROOT CAUSE**
   - Why did this happen?
   - Could we have prevented it?
   - What warning signs did we miss?

4. **PROCESS GAPS**
   - Where did our process fail?
   - What escalation worked/didn't work?
   - How did communication flow?

5. **PREVENTION**
   - How do we prevent recurrence?
   - What should we monitor?
   - Any process changes needed?

6. **RECOGNITION**
   - Who should be recognized for resolution?
   - Any above-and-beyond efforts?

Format for sharing with the team and adding to knowledge base.
```

---

## Tips for Best Results

1. **Be data-driven** - Include specific dates, points, days
2. **Quantify impact** - Numbers speak louder than descriptions
3. **Separate symptoms from causes** - Dig into root causes
4. **Propose solutions** - Don't just identify problems
5. **Track over time** - Single sprints don't show patterns
