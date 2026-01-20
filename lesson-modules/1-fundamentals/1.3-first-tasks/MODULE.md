# Module 1.3: Your First Scrum Master Tasks

**Duration:** 30 minutes
**Prerequisites:** Module 1.2 completed, sample files available

---

## What You'll Learn

By the end of this module, you will:
1. Process standup notes into actionable summaries
2. Synthesize retrospective feedback into themes
3. Transform sprint updates for different audiences
4. Extract impediments from meeting discussions
5. Save significant time on routine SM tasks

---

## Introduction

Every week, Scrum Masters deal with volumes of meeting notes, status updates, and team communications. The traditional approach:

| Task | Traditional Time |
|------|-----------------|
| Process a week's standup notes | 20-30 minutes |
| Synthesize retrospective feedback | 45-60 minutes |
| Write sprint updates for 3 audiences | 45 minutes |

With Copilot, these become **5-minute tasks**. Let's learn how.

---

## Task 1: Processing Standup Notes

Standups generate valuable information - blockers, progress updates, and patterns. But that information is often scattered and hard to act on.

### The Problem

Raw standup notes look like this:

```
Lisa: "Yesterday I worked on the rate limiting code, it's more
complex than expected. Today continuing. Blocker: need
requirements clarity from Raj."

Marcus: "Yesterday fixed the CSS issue. Today working on
notification component. No blockers."

Priya: (async post) "Completed search optimization, 45% faster!
Starting caching work. Question: did we decide on TTL values?"
```

Across a week, this becomes pages of text with important signals buried inside.

### Exercise 1: Process Standup Notes

**Do this now:**

1. Upload `sample-files/ceremony-notes/daily-standups-week47.md` to Copilot
2. Use this prompt:

```
Analyze these daily standup notes from the past week.

Extract and organize:

1. **BLOCKERS SUMMARY**
   - What blockers were raised?
   - Who raised them?
   - How long has each been open?
   - Which are still unresolved?

2. **PROGRESS HIGHLIGHTS**
   - Key completions this week
   - Who delivered what

3. **PATTERNS & CONCERNS**
   - Anyone stuck on the same thing multiple days?
   - Standup running over time? Evidence?
   - Problem-solving happening in standup?
   - Anyone consistently quiet?

4. **ACTION ITEMS FOR SM**
   - What needs my immediate attention?
   - Who should I check in with?
   - What to raise in retro?

Be specific - cite examples from the notes.
```

3. Review the output

### What You Should See

Copilot should identify:
- The rate limit requirements blocker (4 days open)
- Lisa's frustration with scope changes
- Marcus's silence during debates
- Priya working weekends
- Standups averaging 22 minutes (target: 15)

**Time saved:** ~20 minutes

---

## Task 2: Synthesizing Retrospective Feedback

Retrospectives generate rich feedback, but themes can be hard to see in raw notes. Different team members raise related issues using different words.

### The Problem

Raw retro notes are unstructured:
- "Lisa: Still too many meetings, hard to get into flow"
- "Marcus: I still feel nervous speaking up"
- "Priya: I missed the API decision, felt left out"
- "James: Same tech debt keeps biting us"

What are the underlying themes? What should you actually act on?

### Exercise 2: Synthesize Retrospective

**Do this now:**

1. Upload `sample-files/ceremony-notes/sprint-46-retro-raw.md` to Copilot
2. Use this prompt:

```
Synthesize these raw retrospective notes into actionable insights.

Provide:

## THEMES

### What Went Well (Top 3)
For each:
- Theme name
- Supporting quotes
- Why this matters

### What Needs Improvement (Top 3)
For each:
- Theme name
- Supporting quotes (who said what)
- How many people mentioned it
- Root cause analysis

### Underlying Patterns
- What connects multiple issues?
- What's been raised before?
- Systemic vs. individual issues

## RECOMMENDED ACTIONS

Limit to 3 actions maximum. For each:
- Specific, actionable item
- Suggested owner
- How to measure success
- Why this will make a difference

## RED FLAGS

Things that signal deeper issues:
- Team morale concerns
- Interpersonal tensions
- Signs of burnout
```

3. Review the synthesis

### What You Should See

Copilot should identify themes like:
- **Flow Protection** (Lisa's meetings, Marcus's thinking time)
- **Inclusion** (Priya explicit, Marcus implicit)
- **Recurring Items** (Focus days, tech debt - raised multiple sprints)
- Red flag: Priya almost cried, Marcus identifying with feeling unheard

**Time saved:** ~40 minutes

---

## Task 3: Multi-Audience Communication

As a Scrum Master, you communicate the same information to different audiences:
- **Team:** Casual, celebrating wins, honest about challenges
- **Stakeholders:** Professional, outcome-focused
- **Leadership:** Metrics, risks, needs

### The Problem

Writing three versions of the same update takes time and mental energy.

### Exercise 3: Transform Sprint Update

**Do this now:**

1. In Copilot, use this prompt (no file upload needed):

```
Transform this sprint status into 3 different communications.

SPRINT 47 STATUS DATA:
- Committed: 52 points
- Completed: 42 points (as of day 10)
- Carryover likely: Push notifications (8 points)
- Completed this sprint:
  * Notification preferences (5 pts)
  * Email notifications (8 pts)
  * In-app notification UI (5 pts)
  * Search optimization - 45% faster (5 pts)
  * Caching layer (5 pts)
  * Rate limiting (5 pts)
  * Pagination bug fix (2 pts)
- Remaining: Push notifications (8 pts), Dashboard loading (3 pts)
- Key win: Search 45% faster
- Key challenge: Push notifications more complex than estimated

Create 3 versions:

1. **TEAM SLACK MESSAGE**
   - Casual, celebrating wins
   - Honest about what's carrying over
   - Motivating tone
   - Use appropriate emojis

2. **STAKEHOLDER EMAIL**
   - Professional, outcome-focused
   - What was delivered and business value
   - Brief mention of carryover
   - No internal process details

3. **LEADERSHIP SUMMARY**
   - Metrics-focused
   - Risks and dependencies
   - What support is needed
   - 5 bullet points max
```

2. Review the three versions

### What You Should See

Three distinct communications:
- **Team:** Celebratory but honest ("We crushed it on search... push notifs carrying over, we got this!")
- **Stakeholder:** Professional ("Sprint 47 delivered notification system phases 1-3 and a 45% search performance improvement...")
- **Leadership:** Concise ("Sprint 47: 42/52 points (81%). Delivered: notification MVP, search optimization. Risk: push notifications to Sprint 48...")

**Time saved:** ~30 minutes

---

## Task 4: Impediment Extraction

Meeting notes often contain blockers that aren't explicitly labeled as such. Copilot can find them.

### Exercise 4: Find Hidden Impediments

**Do this now:**

1. Upload `sample-files/ceremony-notes/sprint-planning-raw.md` to Copilot
2. Use this prompt:

```
Extract all blockers and potential impediments from these
sprint planning notes.

For each impediment found:
- What is it?
- Who mentioned it?
- What stories/work does it affect?
- Is it resolved or still open?
- What action is needed?

Include:
- Explicit blockers ("I'm blocked on...")
- Implicit risks ("This might be more complex than...")
- Dependencies ("We need X from Y before...")
- Resource constraints ("I only have X days for...")
- Unclear requirements ("What does Y mean?")

Format as a table.
```

3. Review the extracted impediments

### What You Should See

A table including:
- Rate limit requirements unclear (affected: rate limiting story)
- Email template design not done (affected: email notifications)
- David's capacity (4 days for full sprint of work)
- Priya's 18-point workload (risk of overcommitment)

**Time saved:** ~15 minutes

---

## Putting It All Together

You've now learned four core Copilot tasks:

| Task | Prompt Type | Time Saved |
|------|-------------|------------|
| Standup processing | Analysis + extraction | 20 min |
| Retro synthesis | Thematic analysis | 40 min |
| Multi-audience comms | Transformation | 30 min |
| Impediment extraction | Pattern finding | 15 min |

**Weekly time saved: 1.5-2 hours just on these four tasks!**

---

## Building Your Prompt Library

You'll use these prompts regularly. Save them!

### Option 1: Save in OneDrive

Create a file `Scrum Master/Prompt Library/daily-tasks.md` with your favorite prompts.

### Option 2: Copilot History

Copilot saves your chat history. You can revisit successful prompts.

### Option 3: Course Prompt Library

The course provides ready-to-use prompts in `prompt-library/templates/`.

---

## Module Complete!

You now know how to:
- ✅ Process standup notes into actionable summaries
- ✅ Synthesize retrospective feedback into themes
- ✅ Transform updates for different audiences
- ✅ Extract impediments from meeting discussions
- ✅ Save 1.5-2 hours per week on routine tasks

---

## Next Steps

Continue to **Module 1.4: Researcher & Analyst Agents**

In Module 1.4, you'll learn:
- Using Researcher agent for agile best practices
- Using Analyst agent for velocity and metrics
- Combining agents for complex SM workflows

---

## Quick Reference: First Tasks Prompts

### Standup Processing
```
Analyze these standup notes. Extract:
- Blockers (who, what, how long open)
- Patterns (stuck, quiet, running long)
- Actions for SM
```

### Retro Synthesis
```
Synthesize into themes:
- Top 3 went well (with quotes)
- Top 3 improvements (with frequency)
- Root causes
- 3 max actions with owners
```

### Multi-Audience Transform
```
Transform this status for:
1. Team Slack (casual, celebratory)
2. Stakeholder email (professional, outcomes)
3. Leadership (metrics, risks, asks)
```

### Impediment Extraction
```
Find all blockers and risks:
- Explicit blockers
- Implicit risks
- Dependencies
- Resource constraints
```

---

**Ready to explore agents? Let's continue!**
