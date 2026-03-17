# Chain-of-Thought Prompt Template

## The Pattern

Instead of asking Copilot to jump from problem to solution, break reasoning into explicit steps. Each step feeds the next.

---

## Template: Root Cause Analysis Chain

### Step 1: Symptom Analysis
```
Analyze these symptoms from our team data:

SYMPTOMS:
- [List observable symptoms]
- [Include data points, frequencies, timing]

For each symptom, identify:
1. When it first appeared
2. How frequently it occurs
3. Who/what is affected
4. What triggers it

Do NOT suggest solutions yet. Only analyze symptoms.
```

### Step 2: Hypothesis Generation
```
Based on the symptom analysis above, generate 3-5 hypotheses for the root cause.

For each hypothesis:
1. State the hypothesis clearly
2. What evidence supports it?
3. What evidence contradicts it?
4. How could we test this hypothesis?

Rank hypotheses by likelihood. Show your reasoning.
```

### Step 3: Test Against Data
```
Now test the top 3 hypotheses against our actual data:

[Paste relevant data — velocity, impediments, health surveys, etc.]

For each hypothesis:
1. Does the data support or refute it?
2. What additional data would strengthen/weaken it?
3. Confidence level (high/medium/low) with reasoning

Identify the most likely root cause based on evidence.
```

### Step 4: Intervention Design
```
For the identified root cause: [state it]

Design an intervention plan:
1. IMMEDIATE action (this week)
2. SHORT-TERM action (this sprint)
3. SYSTEMIC change (this quarter)

For each action:
- What specifically to do
- Who needs to be involved
- How to measure if it's working
- What could go wrong (failure modes)
- Fallback if it doesn't work
```

---

## Example: Velocity Squad Design Bottleneck

### Step 1 Output:
- Symptom: Design-related blockers appearing in 4 of last 6 sprints
- Frequency: 7 total occurrences, accelerating (1 in Sprint 42, 3 in Sprint 47)
- Affected: Frontend stories primarily (Lisa, Marcus, Priya's work)
- Trigger: Stories requiring UX review entering sprint without completed designs

### Step 2 Output:
- H1: David is overloaded (shared across 3 teams) — STRUCTURAL
- H2: Stories enter sprint without design readiness criteria — PROCESS
- H3: Team doesn't plan design work early enough — PLANNING
- H4: Design complexity has increased with new features — SCOPE

### Step 3 Output:
- H1 supported: David's calendar analysis shows 120% allocation
- H2 supported: No "design ready" definition in DoR
- H3 partially supported: Design work not front-loaded in planning
- H4 refuted: Feature complexity is similar to previous sprints

### Step 4 Output:
- IMMEDIATE: Add "design approved" to Definition of Ready
- SHORT-TERM: Front-load design review in sprint planning
- SYSTEMIC: Make business case for dedicated designer (see Module 5.3)

---

## When to Use This Pattern

| Situation | Use Chain-of-Thought? | Why |
|-----------|----------------------|-----|
| Simple factual question | No | Direct answer is fine |
| Pattern analysis across sprints | Yes | Prevents jumping to conclusions |
| Coaching conversation prep | Yes | Builds layered understanding |
| Root cause analysis | Absolutely | Prevents treating symptoms |
| Sprint report generation | No | Template-based, not analytical |
| Organizational change proposal | Yes | Needs evidence-based reasoning |
