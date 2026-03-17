# Level 2 Cheat Sheet: Advanced SM Workflows

All prompts from Level 2 modules, organized by use case.

---

## Ceremony Facilitation (Module 2.1)

### Generate Facilitation Guide
```
Create a facilitation guide for [ceremony type] for [team name] (Sprint [X]).
Context: [2-3 key issues]. Include: agenda with timing, discussion questions specific to our situation, interventions for likely difficult moments.
```

### Distributed Ceremony Adaptation
```
Adapt this [ceremony type] for a distributed team across [timezones].
Include: async pre-work, live session agenda (shorter), async follow-up, timezone-fair scheduling rotation.
```

## Impediment Management (Module 2.2)

### Pattern Analysis
```
Analyze this impediment log for patterns and root causes.
For each pattern: name, evidence, impact quantification, root cause (team vs. organizational), recommended action. Rank by impact.
[Attach impediment log]
```

### Escalation Email
```
Draft escalation email to [person, title] about [impediment].
Include: impact data, what I've tried, specific ask, professional tone.
Lead with impact, not frustration. Under 200 words.
```

### Predictive Impediment Scan
```
Scan these standup notes for early warning signs of emerging impediments:
[Paste notes]
Flag: repeated mentions of same issue, scope questions increasing, "waiting on" phrases appearing more often.
```

## Team Health (Module 2.3)

### Health Survey Analysis
```
Analyze this health survey data: [attach CSV]
Identify: trends (improving/declining dimensions), correlations between health and velocity, specific concerns requiring 1:1 follow-up, bright spots to celebrate.
```

### Coaching Conversation Prep
```
Prepare me for a coaching conversation with [name, role].
Context: [situation]. My goal: [outcome].
Generate: opening, key questions, listening-for signals, what to avoid, de-escalation if needed, follow-up plan.
```

## Responsible AI (Module 2.4)

### Data Classification Check
```
Before I share this with Copilot, classify each data element:
[Paste the data]
Green (safe), Yellow (anonymize first), Red (never share). Explain reasoning.
```

### Bias Detection
```
Review this AI-generated assessment of my team for potential biases:
[Paste Copilot output]
Check for: recency bias, visibility bias (against remote workers), seniority bias, gender bias, confirmation bias. Flag specific examples.
```

## Prompt Engineering (Module 2.5)

### Chain-of-Thought Analysis
```
Step 1: Analyze symptoms: [list symptoms with data]
Step 2: Generate 3-5 hypotheses for root cause
Step 3: Test hypotheses against this data: [attach data]
Step 4: Design intervention for the most likely root cause
```

### Meta-Prompt Generator
```
Generate a Copilot facilitation prompt for: [ceremony type], [team], [sprint], challenges: [list]. Output: copy-paste ready facilitation prompt.
```

## Conflict Resolution (Module 2.6)

### Conflict Preparation
```
Help me prepare for a conversation between [Person A] and [Person B] about [topic]. Map: each person's underlying need, likely defensive reactions, de-escalation language, resolution options that address both needs.
```

### Roleplay Setup
```
Play [person name/description] at [easy/medium/hard] difficulty.
Context: [situation]. I'll practice [coaching/mediating/facilitating].
After I say "break character," rate my approach on: empathy, questioning, patience, non-judgment, action-orientation.
```
