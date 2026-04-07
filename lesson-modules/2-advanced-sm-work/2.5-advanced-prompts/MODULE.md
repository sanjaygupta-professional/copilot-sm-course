# Module 2.5: Advanced Prompt Engineering for Scrum Masters

**Duration:** 30 minutes
**Prerequisites:** Module 2.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Apply chain-of-thought prompting to complex SM analysis tasks
2. Use structured output formats (tables, decision matrices, RACI — Responsible, Accountable, Consulted, Informed) consistently
3. Build reusable prompt chains that connect ceremony outputs to improvement tracking
4. Craft meta-prompts that generate other prompts
5. Debug prompts when Copilot gives generic or unhelpful responses

---

## Why Prompt Engineering Matters for SMs

You've been using Copilot prompts throughout this course. Some worked brilliantly. Others returned generic advice you could have found on any blog. The difference isn't luck - it's prompt structure.

This module teaches you to understand *why* certain prompts work, so you can:
- Consistently get team-specific, data-grounded outputs
- Build prompts that chain together across ceremonies
- Fix prompts that return shallow or generic results
- Create a reusable library your team (or organization) can share

We'll dissect prompts you've already used, break bad ones, build sophisticated chains, and learn to debug when things go wrong.

---

## Prompt Anatomy

### Exercise 1: Prompt Anatomy Dissection (5 min)

Take the impediment analysis prompt from Module 2.2 and label each structural component.

```
Look at this prompt and label every component by function.

PROMPT TO ANALYZE:
"""
Analyze this impediment log to identify patterns and root causes.

For each pattern you find:

1. PATTERN NAME - Clear, descriptive name
2. EVIDENCE - How many occurrences? Which sprints? Specific examples
3. IMPACT QUANTIFICATION - Story points blocked, days delayed, sprint goals affected, cost in team time/morale
4. ROOT CAUSE ANALYSIS - What's the underlying cause (not the symptom)? Is this within team control or organizational? Why does it keep happening?
5. RECOMMENDED ACTION - What should be done differently? Who needs to be involved? Does this need escalation?

Rank patterns by impact (highest first).
Show your analysis.
"""

For each sentence or section, label it as one of:
- CONTEXT: Background information that grounds the response
- CONSTRAINT: Limits on scope, length, or approach
- FORMAT: How the output should be structured
- PERSONA: Who Copilot should think/write as
- SPECIFICITY: Concrete details that prevent generic answers
- CHAIN TRIGGER: Elements that set up a follow-up prompt

Then answer:
1. Which components make this prompt effective?
2. What's missing that could make it better?
3. If you removed the FORMAT section, how would the output change?
4. What implicit persona is embedded here?
```

### What You Should See

A breakdown showing:
- **Context:** "Analyze this impediment log" (task framing)
- **Format:** The numbered structure with subpoints (forces organized output)
- **Specificity:** "Story points blocked, days delayed" (prevents vague impact statements)
- **Constraint:** "Rank by impact (highest first)" (forces prioritization, not just listing)
- **Chain trigger:** "Does this need escalation?" (sets up the escalation email prompt in Exercise 3 of Module 2.2)
- **Missing persona:** No explicit persona, but "root cause (not the symptom)" implies analytical thinking

Key insight: The FORMAT section does most of the heavy lifting. Without it, Copilot returns a wall of prose instead of structured analysis.

---

## The Bad Prompt Clinic

### Exercise 2: Diagnose and Fix Weak Prompts (5 min)

Three prompts that produce disappointing results. Diagnose why each fails, then rewrite it.

**Using `sample-files/prompt-engineering/bad-prompts-clinic.md`:**

```
I have 3 weak prompts that give generic results. For each one:
1. Diagnose WHY it fails (which components are missing or weak)
2. Predict what Copilot would return
3. Rewrite it to be effective
4. Explain what you changed and why

BAD PROMPT A:
"Give me tips for running better retrospectives."

BAD PROMPT B:
"Our team has problems. Help me fix them."

BAD PROMPT C:
"Write a Sprint 47 summary for stakeholders.
The sprint went okay, we finished most things.
Make it sound professional."

For each rewrite, label the components you added
(context, constraint, format, persona, specificity).
Show the before/after side by side.
```

### What You Should See

Diagnoses like:

**Prompt A** - Missing: context (which team?), constraint (how many tips?), specificity (what's wrong with current retros?), format (list? guide?). Copilot will return generic "top 10 retro tips" from any blog.

**Prompt B** - Missing: everything. No context, no specificity, no format. Copilot has nothing to work with. Will return a generic team improvement checklist.

**Prompt C** - Has weak context ("went okay"), no data, no audience specificity, and "make it sound professional" is a vague persona. Copilot will generate hollow corporate language.

Rewrites should add Velocity Squad context, Sprint 47 data, specific audience, and structured format requirements.

---

## Chain-of-Thought Prompting

### Exercise 3: Multi-Step Root Cause Chain (5 min)

Instead of one big prompt, build a chain where each step feeds the next.

**Using `sample-files/prompt-engineering/chain-of-thought-template.md`:**

```
I'm going to walk through a 4-step root cause analysis chain.
Answer each step fully before I give the next step.

STEP 1 — SYMPTOM ANALYSIS:
The Velocity Squad (Sprint 47) has these symptoms:
- Sprint goal achievement dropped from 90% to 70% over 4 sprints
- 3 stories carried over from Sprint 47
- Team energy in retros is low
- Marcus (senior dev) has gone quiet in ceremonies

Analyze ONLY the symptoms. Don't jump to solutions yet.
For each symptom:
- Is this a leading indicator or lagging indicator?
- What other symptoms might be connected to this one?
- What data would you want to confirm or rule out causes?

Present as a table:
| Symptom | Leading/Lagging | Connected To | Data Needed |
```

After Copilot responds to Step 1, continue with:

```
STEP 2 — HYPOTHESIS GENERATION:
Based on your symptom analysis, generate 4-5 hypotheses
about what's causing these symptoms.

For each hypothesis:
- State it clearly
- Which symptoms does it explain?
- Which symptoms does it NOT explain?
- Confidence level (high/medium/low) and why

Do NOT recommend solutions yet. We're still diagnosing.

Present as:
| # | Hypothesis | Explains | Doesn't Explain | Confidence |
```

Then:

```
STEP 3 — HYPOTHESIS TESTING:
Now test each hypothesis against available data.

AVAILABLE DATA:
- Impediment log shows 7 design-related blockers in 4 sprints
- David (UX) is shared across 3 teams
- Lisa raised "we need more focus time" in last 3 retros
- Marcus's PR review times increased from 1 day to 3 days
- Velocity trend: 48, 45, 42, 38 over last 4 sprints

For each hypothesis:
- Does the data support, contradict, or neither?
- What's the strongest evidence for/against?
- Updated confidence level

Eliminate hypotheses that don't hold up.
Rank remaining by strength of evidence.
```

Then:

```
STEP 4 — INTERVENTION DESIGN:
For the top 2 confirmed root causes, design interventions.

For each intervention:
1. What specifically to do
2. Who owns it
3. How to measure if it's working (leading indicator)
4. Timeline to see results
5. What to do if it doesn't work (fallback)

Format as an action plan table.
Keep to max 3 interventions total — fewer is better.
```

### What You Should See

The chain produces progressively deeper analysis:
- **Step 1:** Organized symptom map with data gaps identified
- **Step 2:** Multiple hypotheses (design bottleneck, burnout, unclear requirements, team morale)
- **Step 3:** Design capacity and focus time emerge as strongest; some hypotheses eliminated
- **Step 4:** Targeted interventions with measurable outcomes

Key insight: Breaking into steps prevents Copilot from jumping to "here are 5 tips" and forces genuine analysis. Each step constrains the next.

---

## Meta-Prompting

### Exercise 4: Prompts That Write Prompts (5 min)

Write a prompt that generates ceremony-specific prompts for any team context.

```
You are a prompt engineering expert for Scrum Masters who use AI assistants.

I need you to GENERATE a tailored facilitation prompt based on these inputs:

CEREMONY TYPE: Sprint Retrospective
TEAM CONTEXT: Velocity Squad — 7 members, 1 remote (Priya in Bangalore), Sprint 47, working on AKX internal knowledge platform at Accenture
CURRENT CHALLENGES:
- Retrospective fatigue (same format for 6 sprints)
- Action items rarely completed
- Marcus doesn't speak up
- Recurring issue: design capacity constraints

Generate a complete, copy-paste-ready prompt that a Scrum Master
could paste into Copilot to get a tailored retrospective facilitation plan.

The generated prompt MUST include:
1. All relevant team context (names, roles, dynamics)
2. Specific constraints (timebox, hybrid format, max actions)
3. Structured output format (numbered sections)
4. At least one instruction that prevents generic output
5. A follow-up question the SM should ask after the first response

Format your output as:
---
GENERATED PROMPT:
[the prompt, ready to copy-paste]
---
WHY IT WORKS:
[label each component and explain why it's there]
---
SUGGESTED FOLLOW-UP:
[what to ask next to deepen the output]
---
```

### What You Should See

A fully formed prompt that:
- Embeds Velocity Squad context (names, Sprint 47, Priya's timezone)
- Specifies "not Start/Stop/Continue" (prevents the default)
- Requires hybrid facilitation instructions
- Limits actions to 3 max
- Includes a specificity anchor like "address the pattern of incomplete action items"
- Ends with a follow-up prompt suggestion

Try the generated prompt yourself. Compare its output to what you'd get from "Help me run a retrospective."

---

## Building a Prompt Library

### Exercise 5: The Prompt Library Builder (5 min)

Design a systematic, reusable prompt library.

```
Help me design a prompt library structure for a Scrum Master team.

REQUIREMENTS:
- Multiple SMs across an organization will use this
- Prompts should be categorized by ceremony and SM activity
- Each prompt needs metadata for findability and quality tracking
- Must be easy to maintain and version over time

Design:

1. **CATEGORY STRUCTURE**
   - Top-level categories (ceremonies, impediments, coaching, etc.)
   - Subcategories within each
   - How to handle prompts that span categories

2. **PROMPT TEMPLATE FORMAT**
   Each prompt entry should include:
   - Unique ID and descriptive name
   - Category and tags
   - The prompt text with [PLACEHOLDERS] for team-specific data
   - Expected output description
   - Effectiveness rating (1-5) with criteria
   - Version history
   - Usage notes and gotchas

3. **NAMING CONVENTION**
   - Consistent ID format (e.g., RETRO-001, IMP-003)
   - How to handle versions

4. **QUALITY TRACKING**
   - How to rate prompt effectiveness
   - When to retire or update a prompt
   - How to capture what worked and what didn't

5. **STARTER LIBRARY**
   Create 5 example entries using prompts from this course:
   - 1 ceremony prompt
   - 1 impediment prompt
   - 1 coaching prompt
   - 1 reporting prompt
   - 1 meta-prompt

Use markdown table format for the starter entries.
```

### What You Should See

A structured library design with:
- Clear category taxonomy (Ceremonies > Retrospective > Format Design)
- Prompt template with placeholders: `[TEAM_NAME]`, `[SPRINT_NUMBER]`, `[CHALLENGE]`
- ID convention like `RETRO-001-v2`
- Rating criteria: 5 = team-specific output, data-grounded; 1 = generic advice
- Starter entries referencing prompts from Modules 2.1-2.4

---

## Debugging Copilot

### Exercise 6: When Copilot Goes Generic (5 min)

When Copilot returns shallow output, don't accept it. Push it deeper.

```
I'm going to show you a GENERIC response that Copilot gave me,
and I need you to help me understand why it went generic
and how to fix my prompt.

MY ORIGINAL PROMPT:
"How can I improve my team's retrospectives?"

COPILOT'S RESPONSE:
"Here are 5 tips for better retrospectives:
1. Try different formats
2. Create a safe space
3. Follow up on action items
4. Keep it timeboxed
5. Celebrate wins"

WHAT I ACTUALLY NEEDED:
A specific plan for the Velocity Squad's retrospective fatigue problem,
with a new format designed for our hybrid setup, addressing Marcus's
silence and the pattern of incomplete action items.

Help me:

1. **DIAGNOSE THE FAILURE**
   - What's wrong with my original prompt?
   - Why did Copilot default to generic advice?
   - Which missing components caused this?

2. **FIX WITH CONSTRAINTS**
   Rewrite the prompt adding constraints that force specificity.
   Show which constraint blocks which type of generic response.

3. **FIX WITH COUNTER-EXAMPLES**
   Add a "DO NOT" section that tells Copilot what to avoid.
   Example: "Do NOT give generic retrospective tips.
   Do NOT suggest 'create a safe space' without specific techniques."

4. **FIX WITH SELF-CRITIQUE**
   Add an instruction: "After generating your response, critique it.
   Would a Scrum Master with 5 years of experience find this useful,
   or is it advice they already know? If the latter, go deeper."

5. **THE NUCLEAR OPTION**
   When nothing works, show me how to use:
   - "Your previous response was too generic. Specifically..."
   - "Pretend I already know the basics. What would you tell
     an experienced SM who has tried the obvious approaches?"
   - Explicit rejection: "That's not specific enough. Try again with..."

Show the rewritten prompt using ALL these techniques combined.
```

### What You Should See

A layered debugging approach:
- **Diagnosis:** No context, no constraints, no format = Copilot defaults to "top 5 tips" pattern
- **Constraint fix:** Adding team context, specific problems, and format requirements
- **Counter-example fix:** "Do NOT list generic tips. Do NOT suggest techniques without explaining how to apply them to a 7-person hybrid team."
- **Self-critique fix:** Forces Copilot to evaluate its own output quality
- **Combined rewrite:** A prompt that's nearly impossible to answer generically

The final rewritten prompt should produce output that names team members, references Sprint 47 data, and addresses the specific pattern of incomplete action items.

---

## Signals to Watch For

> **Your prompts are working well when:**
> - Copilot uses your team members' names without being re-prompted
> - Outputs include specific data points you provided (not invented numbers)
> - Recommendations reference your actual constraints (David's shared capacity, Priya's timezone)
> - Follow-up prompts build on previous context without repeating it
> - You spend more time evaluating output than fixing prompts
>
> **Your prompts need work when:**
> - Copilot returns advice that could apply to any team
> - Outputs ignore constraints you specified
> - You get numbered lists of generic tips instead of structured analysis
> - Copilot invents data you didn't provide
> - Every response starts with "Great question!" followed by surface-level content

---

## When This Doesn't Work

Sometimes prompts fail despite good structure. Common causes:

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Copilot ignores your format | Prompt is too long; format buried in middle | Move format instructions to the END of the prompt |
| Output is generic despite context | Context is vague ("our team has challenges") | Replace with specifics: names, numbers, sprint data |
| Copilot invents data | You asked for analysis without providing data | Always attach or paste the source data |
| Chain breaks between steps | New prompt doesn't reference previous output | Start Step 2 with "Based on your analysis above..." |
| Meta-prompt output is shallow | Not enough constraints on the generated prompt | Specify what components the generated prompt must include |
| Same prompt works differently each time | Normal AI variability | Add more constraints to narrow the output range |

**If all else fails:** Start a new conversation. Copilot conversations accumulate context that can confuse later prompts. A fresh thread with a well-structured prompt often outperforms a long thread with corrections.

### Accuracy & Limitations

Even well-engineered prompts can produce incomplete or incorrect output. Copilot responses depend on:

- **Available organizational data** — Copilot can only analyze what it has access to through your M365 tenant
- **Your permissions** — outputs are scoped to data your account can see
- **Prompt clarity** — but note that an over-engineered prompt with excessive constraints can still produce partial or generic output

For example, a complex chain-of-thought prompt asking Copilot to "analyze all impediments across the last 6 sprints" may produce impressive-looking analysis — but if the underlying data is incomplete, the conclusions are unreliable. Always validate critical outputs against your actual team data.

> **Reference:** For comprehensive guidance on responsible use of Copilot outputs in your Scrum Master practice, see **Module 2.4: Responsible AI & Data Governance**. That module covers data classification, hallucination detection, and establishing team agreements for AI-assisted decisions.

---

## Module Complete!

You now know how to:
- ✅ Dissect prompts into structural components
- ✅ Diagnose and fix weak prompts
- ✅ Build multi-step chain-of-thought analysis
- ✅ Create meta-prompts that generate other prompts
- ✅ Design a reusable prompt library
- ✅ Debug generic responses and push Copilot deeper

---

## Next Steps

Continue to **Module 2.6: Conflict Resolution & Difficult Conversations**

---

## Quick Reference

### Prompt Anatomy Check
```
Review my prompt. Label each part as: context, constraint, format,
persona, specificity. What's missing? How would you strengthen it?
```

### Bad Prompt Fix
```
This prompt gave generic results: "[paste prompt]"
Diagnose why. Rewrite with: team context, constraints, structured format,
and a "DO NOT" section. Show before/after.
```

### Chain-of-Thought Analysis
```
Step 1: Analyze these symptoms (don't jump to solutions):
[list symptoms]
Present as table: Symptom | Leading/Lagging | Connected To | Data Needed

Step 2: Generate hypotheses. Which symptoms does each explain?

Step 3: Test hypotheses against this data: [paste data]

Step 4: Design max 3 interventions with owners and success metrics.
```

### Meta-Prompt Generator
```
Generate a copy-paste-ready prompt for: [ceremony/activity].
Team context: [team details]. Challenges: [specific issues].
The generated prompt must include: context, constraints, format,
specificity anchor, and a follow-up question.
```

### Debugging Generic Responses
```
Your previous response was too generic. Specifically:
- Use these team members by name: [names]
- Reference this data: [data points]
- Do NOT list generic tips
- Do NOT suggest anything an experienced SM already knows
- Critique your own response: would a 5-year SM find this useful?
```

### Prompt Library Entry Template
```
ID: [CAT-###-v#]
Name: [Descriptive name]
Category: [Ceremony | Impediment | Coaching | Reporting]
Prompt: [Text with [PLACEHOLDERS]]
Expected Output: [What good looks like]
Rating: [1-5]
Notes: [Gotchas and tips]
```

---

**Ready for conflict resolution? Let's continue!**
