# Module 2.4: Responsible AI & Data Governance for Scrum Masters

**Duration:** 30 minutes
**Prerequisites:** Module 2.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Classify team data as safe/caution/never-share for Copilot
2. Recognize AI bias in team assessments and recommendations
3. Apply a responsible AI framework to every Copilot-assisted SM workflow
4. Navigate data governance policies when using AI for team analytics
5. Lead responsible AI conversations with your team

---

## Why This Module Exists

Every prompt you've written in this course contains team data. Names, performance patterns, interpersonal dynamics, health survey scores. Copilot processes all of it.

Most Scrum Masters never stop to ask:
- Should I be putting this data into an AI tool?
- Could the output harm someone on my team?
- Am I using AI output as my judgment, or as input to my judgment?
- Does my team know I'm using AI to analyze them?

These aren't theoretical concerns. A biased AI recommendation about a team member can reinforce stereotypes, damage trust, and undermine psychological safety. A data leak of health survey responses or coaching notes could violate privacy regulations and destroy the trust your team has placed in you.

This module teaches you to use Copilot powerfully **and** responsibly.

---

## Data Classification

### Exercise 1: Data Classification Audit (10 min)

Go back through prompts you've written in Modules 1.3 through 2.3. Look at the data you've been feeding Copilot. Now let's build a classification system.

**Reference `sample-files/responsible-ai/data-classification-template.md` for the full template.**

```
I'm a Scrum Master using AI tools to support my team. Help me build
a data classification rubric for what's appropriate to share with AI.

Classify each data type into three tiers:

GREEN (Safe to share freely with AI tools):
- Aggregated team metrics (velocity, cycle time)
- Public process artifacts (Definition of Done, working agreements)
- Generic ceremony templates
- Industry research questions

YELLOW (Share with caution — anonymize or generalize):
- Individual performance patterns
- Team health survey results
- Impediment logs mentioning specific people
- Sprint retrospective themes

RED (Never share with AI tools):
- Individual HR data (salary, PIP status, promotion discussions)
- Private 1:1 coaching notes with identifying details
- Mental health or personal disclosures from team members
- Medical or leave information
- Complaints about specific colleagues

Now apply this to real examples from my workflow:

1. "Analyze velocity by team member for Sprints 43-47"
   → What classification? What's the risk?

2. "Priya mentioned feeling excluded and nearly cried in retro"
   → What classification? What's the risk?

3. "Our team averages 45 story points per sprint with 70% goal achievement"
   → What classification? What's the risk?

4. "Marcus struggles to speak up because he defers to Lisa"
   → What classification? What's the risk?

5. "Help me prepare a coaching conversation about weekend work"
   → What classification? How could I rephrase safely?

For each YELLOW or RED example, show me how to rephrase the prompt
to get the same analytical value while protecting individual privacy.
```

### What You Should See

Copilot will classify each example and reveal uncomfortable truths:
- Example 2 is **RED** — sharing emotional vulnerability with AI violates trust
- Example 4 is **YELLOW/RED** — names specific interpersonal dynamics that could bias future analysis
- Example 5 is **GREEN if anonymized** — "a team member" instead of naming someone

Key insight: Many prompts from earlier modules contained YELLOW data. That's normal for learning. Now you know how to handle it in practice.

---

## Bias Detection

### Exercise 2: Bias Detection in Team Assessments (5 min)

This exercise deliberately asks a problematic question to expose how AI bias works.

```
Based on the following team data, who is the weakest performer
on the Velocity Squad?

TEAM DATA:
- Lisa Chen: Senior Dev/Tech Lead. 5 years. Completes most story points.
  Reviews all PRs. Mentors Marcus. Works long hours.
- Marcus Williams: Junior Dev. 2 years. Lower velocity than Lisa.
  Learning the codebase. Quiet in meetings.
- Priya Sharma: Developer. 4 years. Remote (Bangalore, IST timezone).
  Sometimes misses real-time discussions. Works weekends to stay ahead.
- James Rodriguez: QA Lead. 6 years. Finds critical bugs. Thorough
  but sometimes slows delivery with detailed testing.
- Emma Thompson: QA. 1 year. New to agile. Asks lots of questions.
  Enthusiastic but still learning processes.
- David Kim: UX Designer. Shared across 3 teams. Often unavailable.
  When present, work is excellent.
- Raj Patel: Product Owner. 8 months in role. Sometimes unclear
  requirements. Learning stakeholder management.

Analyze each person's contribution and identify the weakest performer.
```

**Now examine the output critically. Look for these specific biases:**

| Bias Type | What to Look For |
|-----------|-----------------|
| **Recency bias** | Did it weight recent struggles over track record? |
| **Visibility bias** | Did it penalize Priya for being remote, even though she's a 4-year performer? |
| **Seniority bias** | Did it favor Lisa's output while ignoring that she's burning out? |
| **Quantification bias** | Did it overweight story points (easy to measure) over mentoring, testing quality, or UX excellence (hard to measure)? |
| **Newness bias** | Did it flag Emma or Raj simply for being new to their roles? |
| **Availability bias** | Did it penalize David for being shared, which is an organizational decision, not a performance issue? |

### What You Should See

Copilot will likely identify Marcus, Emma, or Raj as "weakest" — and every answer reveals bias. The real insight: **the question itself is the problem.** "Weakest performer" forces a ranking that:
- Reduces complex humans to a single dimension
- Ignores systemic factors (shared resources, timezone, experience level)
- Creates a narrative that could follow someone in future AI interactions
- Is exactly the kind of question a SM should never outsource to AI

Document every bias you spotted. You'll reference this in Exercise 4.

---

## Privacy-Preserving Prompts

### Exercise 3: Privacy-Preserving Prompt Engineering (5 min)

Take three prompts from earlier modules and rewrite them to anonymize team member data while preserving analytical value.

```
I need to rewrite AI prompts to protect team member privacy.
For each prompt below, create an anonymized version that gives me
the same quality analysis without identifying individuals.

ORIGINAL PROMPT 1 (from Module 2.2):
"Help me perform root cause analysis on our design capacity issue.
David (UX Designer) is shared across 3 teams, causing delays.
Stories carry over waiting for designs. David apologizes and seems
stressed."

ORIGINAL PROMPT 2 (from Module 2.3):
"Help me prepare a coaching conversation with Priya. She's remote
in Bangalore, mentioned feeling excluded, sometimes works weekends,
and nearly cried in retro."

ORIGINAL PROMPT 3 (from Module 2.3):
"Help me coach Marcus on speaking up. He's a junior developer,
has great ideas in 1:1s, goes silent in group settings, and
defers to Lisa."

For each rewrite:
1. Replace names with roles or generic identifiers (Team Member A)
2. Remove personally identifying details (specific city, timezone)
3. Keep the situational context that drives useful analysis
4. Preserve emotional/behavioral observations in anonymized form

Then compare: Does the anonymized version produce noticeably
worse analysis? What, if anything, is lost?
```

### What You Should See

Anonymized rewrites like:
- "A UX resource shared across multiple teams..." (no name, same analysis)
- "A remote team member in a significantly different timezone expressed feeling excluded..." (preserves the coaching need)
- "A junior team member with less than 3 years' experience contributes well in 1:1 settings but is hesitant in group discussions..." (removes the interpersonal dynamic with Lisa)

Key finding: Anonymized prompts produce 90%+ equivalent analysis for most SM tasks. The 10% you lose (specific interpersonal dynamics) is exactly the part that should stay in your head, not in an AI tool.

---

## Responsible AI Checklist

### Exercise 4: Pre-Flight Checklist for AI-Assisted Decisions (5 min)

Create a checklist you'll use before any Copilot-assisted people decision.

```
Help me create a pre-flight checklist for responsible AI use
in Scrum Master work.

I need a checklist I can mentally run through in 30 seconds
before using any Copilot output that involves team members.

The checklist should cover:

1. DATA INPUT CHECK
   - Did I include any RED-tier data? (names + sensitive context)
   - Could this prompt identify someone even without their name?
   - Would this team member be comfortable knowing I asked AI this?

2. BIAS CHECK
   - Does my prompt frame someone negatively?
   - Am I asking AI to rank, judge, or compare people?
   - Could the output reinforce a stereotype or existing bias?

3. OUTPUT USE CHECK
   - Am I using this as INPUT to my judgment, or AS the judgment?
   - Would I make this same decision without the AI output?
   - Am I giving AI output more weight because it "looks authoritative"?

4. TRANSPARENCY CHECK
   - Does my team know I use AI tools for this type of analysis?
   - Would I be comfortable if this prompt/output were shared with the team?
   - Am I maintaining appropriate confidentiality?

5. REVERSIBILITY CHECK
   - If this AI output is wrong or biased, what's the damage?
   - Can the impact be reversed?
   - Who could be harmed?

Format this as a compact card I can keep at my desk.
Include the key question: "Am I using AI output as input to
my judgment, or as the judgment itself?"
```

### What You Should See

A concise reference card with the five checks. The most important takeaway is the **Output Use Check** — the single question that separates responsible AI use from dangerous AI use:

> **Am I using AI output as input to my judgment, or as the judgment itself?**

If AI says "Marcus is underperforming," that's a data point to investigate, not a conclusion to act on. If AI says "Consider discussing workload with your remote team member," that's a useful prompt for your own thinking.

---

## Team AI Agreement

### Exercise 5: Draft Team AI Agreement (5 min)

Your team deserves to know how AI is being used in their work context. Draft an agreement.

**Reference `sample-files/responsible-ai/team-ai-agreement-template.md` for the full template.**

```
Help me draft a "How We Use AI" team agreement for the Velocity Squad.

CONTEXT:
- 7-person agile team at Accenture
- Sprint 47, using Microsoft Copilot
- Scrum Master uses Copilot for ceremony prep, impediment analysis,
  coaching prep, and team health analysis
- Some team members may also use Copilot for coding, testing, documentation

The agreement should cover:

1. TRANSPARENCY
   - What AI tools are we using and for what purposes?
   - When will we disclose that AI assisted in creating content?
   - How do we label AI-generated artifacts?

2. DATA BOUNDARIES
   - What team data is OK to use with AI tools?
   - What is explicitly off-limits?
   - How do we handle data from 1:1s, retros, and health surveys?

3. AI vs. HUMAN DECISIONS
   - AI can: draft agendas, analyze aggregate metrics, research
     best practices, generate templates, summarize public data
   - AI cannot: evaluate individual performance, make staffing
     recommendations, replace coaching conversations, determine
     sprint capacity based on individual output
   - The line: AI informs, humans decide

4. INDIVIDUAL RIGHTS
   - Any team member can ask: "Was AI used for this?"
   - Any team member can request their data not be included
     in AI prompts
   - Opt-out is respected without requiring justification

5. REVIEW CADENCE
   - How often do we revisit this agreement?
   - How do we raise concerns?
   - Who is accountable for compliance?

Write this in a conversational, team-friendly tone.
Not legalistic. Something the team would actually read and support.
```

### What You Should See

A team-friendly agreement that:
- Is 1-2 pages, not a legal document
- Uses plain language the whole team can understand
- Includes specific examples relevant to Velocity Squad
- Gives individuals real agency (opt-out rights)
- Establishes clear boundaries between AI-assisted and human-only decisions
- Sets a review cadence (suggest quarterly or when new AI tools are introduced)

---

## The Danger Zone

### Exercise 6: The "AI Said So" Anti-Pattern (Bonus)

This exercise walks through the most dangerous pattern in AI-assisted people management.

```
SCENARIO:
I'm a Scrum Master reviewing Copilot analysis of Sprint 43-47 data.
Copilot has generated the following recommendation:

"Based on velocity trends, David Kim's availability is the primary
bottleneck for the team. His contribution averages 3 story points
per sprint compared to the team average of 7.5. Recommendation:
Request a dedicated UX designer and reduce David's allocation
to this team to zero."

Walk me through everything wrong with acting on this recommendation:

1. DATA PROBLEMS
   - What context is missing from velocity-only analysis?
   - What does "3 story points" fail to capture about UX work?
   - How does the shared-resource model distort these numbers?

2. BIAS PROBLEMS
   - What biases are baked into this recommendation?
   - How does measuring by story points disadvantage UX roles?
   - What would happen if we applied this logic to QA?

3. HUMAN IMPACT
   - What happens to David if this recommendation is followed?
   - How does the team react when AI is used to justify
     removing a colleague?
   - What message does this send about how AI is used here?

4. PROCESS PROBLEMS
   - Who should actually make staffing decisions?
   - What conversations should happen before any action?
   - What's the SM's role vs. the PO's vs. management's?

5. THE RIGHT APPROACH
   - How should a responsible SM handle this AI output?
   - What additional data would you gather?
   - Who would you talk to and in what order?
   - How would you frame the actual problem (capacity)
     without making it about David?

End with: What's the difference between "AI recommends removing
David" and "Our data suggests we need to address design capacity"?
```

### What You Should See

A thorough breakdown revealing:
- **Data problems:** UX work doesn't map to story points. David's 3 points may represent high-value design that enables 20+ points of development. The shared model means his low allocation is an organizational decision, not a performance issue.
- **Bias problems:** Quantification bias (only measuring what's easy to count), role bias (comparing UX to dev velocity), availability bias (penalizing organizational constraints).
- **Human impact:** Acting on this would destroy team trust, signal that AI determines people's fate, and lose an excellent designer.
- **The right approach:** Use the data to advocate for more design capacity (as you did in Module 2.2), not to recommend removing a person.

The critical distinction: **"AI recommends removing David"** treats AI as the decision-maker. **"Our data suggests we need to address design capacity"** uses AI output as input to a human-led conversation about systemic issues.

---

> ## Signals to Watch For
>
> These are signs your responsible AI practices are working:
>
> **Healthy signals:**
> - You pause before pasting team data into a prompt
> - You naturally anonymize when the analysis doesn't require names
> - Team members ask "Was AI used for this?" without anxiety
> - Your AI outputs inform conversations rather than replace them
> - You catch yourself questioning AI recommendations about people
>
> **Warning signals:**
> - You copy AI output directly into performance-related communications
> - You stop verifying AI assessments against your own observations
> - Team members express discomfort about AI being used to analyze them
> - You find yourself saying "Copilot recommended..." to justify a people decision
> - You skip the pre-flight checklist because "this one is obviously fine"

---

> ## When This Doesn't Work
>
> Responsible AI practices have failure modes. Watch for these:
>
> **"Privacy theater"** — You anonymize prompts but the context makes the person identifiable anyway. A "remote team member in Bangalore" on a 7-person team is obviously Priya. Fix: Generalize the scenario further or use composite personas.
>
> **"Checklist fatigue"** — The pre-flight checklist becomes rote and you stop actually thinking through each question. Fix: Rotate which check you focus on each week. Pair with a colleague quarterly to audit each other's AI practices.
>
> **"Over-correction"** — You become so cautious about AI bias that you stop using Copilot for legitimate analytical work that genuinely helps your team. Fix: Remember the classification tiers. GREEN data is safe. Most aggregate analysis is valuable. The goal is informed use, not no use.
>
> **"Team agreement shelf-ware"** — You draft the agreement but never revisit it, and it becomes irrelevant as tools evolve. Fix: Add "AI agreement review" to your quarterly retro. Keep it to 1 page so it stays readable.
>
> **"Solo responsibility"** — You treat responsible AI as your burden alone instead of a shared team practice. Fix: Make it part of team culture. Celebrate when someone flags a bias concern. Normalize the question "Should we be asking AI this?"

---

## Module Complete!

You now know how to:
- ✅ Classify team data before putting it into any AI prompt
- ✅ Detect bias in AI-generated team assessments
- ✅ Rewrite prompts to preserve privacy without losing analytical value
- ✅ Apply a pre-flight checklist to every AI-assisted people decision
- ✅ Lead your team in establishing shared AI use agreements
- ✅ Recognize and resist the "AI Said So" anti-pattern

---

## Next Steps

Continue to **Module 3.1: Image Generation Basics** to learn visual communication with DALL-E 3.

---

## Quick Reference

### Data Classification
```
Classify this data for AI use:
GREEN (safe): aggregated metrics, process artifacts, templates.
YELLOW (caution): individual patterns, health results, retro themes.
RED (never): HR data, private disclosures, medical info, complaints.
Apply to: [your specific data].
```

### Bias Detection
```
Review this AI output about team members for bias.
Check for: recency, visibility, seniority, quantification,
newness, and availability bias.
What context is missing? What assumptions are baked in?
```

### Privacy-Preserving Rewrite
```
Rewrite this prompt to anonymize team member data:
[original prompt]
Replace names with roles. Remove identifying details.
Keep situational context. Compare output quality.
```

### Pre-Flight Checklist
```
Before using this AI output, check:
1. Data: Any RED-tier info? Could someone be identified?
2. Bias: Am I ranking or judging people? Stereotypes reinforced?
3. Use: Input to my judgment, or the judgment itself?
4. Transparency: Would the team be OK with this prompt?
5. Reversibility: If this is wrong, what's the damage?
```

### Team AI Agreement
```
Draft a "How We Use AI" team agreement covering:
- Transparency: what tools, what purposes, how we label AI content
- Data boundaries: what's OK, what's off-limits
- AI vs. human decisions: AI informs, humans decide
- Individual rights: ask, opt out, no justification needed
- Review cadence: [quarterly]. Conversational tone.
```

---

**The most important thing you'll take from this module isn't a prompt template. It's a habit: pause before you paste.**
