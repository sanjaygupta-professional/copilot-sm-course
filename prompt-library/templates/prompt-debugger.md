# Prompt Debugger

## When to Use
Use this when Copilot gives you generic, surface-level, or unhelpful responses. This template helps diagnose and fix the prompt.

## The Debugging Prompt

```
I gave you this prompt:
---
[paste the original prompt that gave bad results]
---

Your response was generic/unhelpful. Here's what I got:
---
[paste or summarize the generic response]
---

Here's what I actually needed:
---
[describe what a great response would look like]
---

Diagnose what went wrong with my prompt and rewrite it so you give me
what I actually need. Explain what you changed and why.
```

## Common Diagnoses

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| "Here are 5 tips for..." | Prompt was too vague | Add specific context, constraints, and format |
| Generic advice not tailored to team | No team context provided | Add team size, sprint data, specific challenges |
| Surface-level analysis | No data attached | Attach actual data files or paste key metrics |
| Overly positive/optimistic | No constraints on honesty | Add "Be direct. Flag concerns. Don't sugarcoat." |
| Too long/rambling | No format constraints | Add "Max 200 words" or "Bullet points only" |
| Repeats what you said back | Question was closed/leading | Rephrase as open question: "What do you notice?" |

## Escalation Techniques

When debugging isn't enough, try these:

### 1. Add Constraints
```
You must identify at least 2 concerns or risks. Do not give only positive feedback.
```

### 2. Request Self-Critique
```
After providing your analysis, critique your own response. What might you be wrong about? What are you not seeing?
```

### 3. Provide Counter-Examples
```
A generic response would say "improve communication." I don't want that. I want specific communication behaviors that need to change, with examples from the data I provided.
```

### 4. Role Reversal
```
If you were the Scrum Master looking at this data for the first time, what would worry you? What would you investigate first? Don't give me the "right" answer — give me the honest one.
```
