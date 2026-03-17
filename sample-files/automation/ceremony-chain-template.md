# Ceremony Automation Chain Template

**Team:** Velocity Squad
**Example Ceremony:** Sprint Planning
**Chain Length:** 4 steps (Pre → During → Post → Follow-up)

---

## Purpose

A ceremony chain connects multiple Copilot prompts into a repeatable workflow where the output of each step feeds the next. This eliminates the manual work of reformatting, summarizing, and distributing ceremony artifacts.

---

## Sprint Planning — 4-Step Chain

### Step 1: Pre-Ceremony Preparation

**Timing:** Day before Sprint Planning (Tuesday afternoon)
**Duration:** 5 minutes (review Copilot output) vs. 60 minutes manual

**Data Inputs:**
- Sprint backlog (top 15-20 prioritized items from Raj)
- Last retro action items (from Sprint 46 retro notes)
- Team capacity data (PTO, shared resource availability)
- Carryover items from previous sprint
- Sprint 46 velocity (45 points)

**Prompt:**

```
You are helping me prepare Sprint Planning for the Velocity Squad.

TEAM CAPACITY for Sprint 47:
- Lisa Chen (Senior Dev): 10 days, full capacity
- Marcus Williams (Dev): 10 days, full capacity
- Priya Sharma (Dev, remote Bangalore): 9 days (1 public holiday)
- James Rodriguez (QA Lead): 10 days, full capacity
- Emma Thompson (QA): 10 days, full capacity
- David Kim (UX): ~4 days (shared across 3 teams)

PREVIOUS SPRINT:
- Velocity: 45 points (committed 50, 5 points carryover)
- Carryover item: Dashboard redesign (5 pts) — blocked on David's availability

RETRO ACTION ITEMS still open:
[Paste retro action items here]

TOP BACKLOG ITEMS:
[Paste prioritized backlog here]

Generate:
1. A Sprint Planning agenda with time blocks for a 2-hour session
2. Suggested sprint goal based on backlog priorities
3. Capacity-based recommendation for how many points to commit
4. Risk flags (dependencies, capacity gaps, carryover patterns)
5. Discussion questions for the team about each major item
```

**Expected Output:**
- Structured agenda with time allocations
- Draft sprint goal for Raj to refine
- Capacity analysis with commitment recommendation
- Risk summary for team discussion

---

### Step 2: During Ceremony — Structured Note-Taking

**Timing:** During Sprint Planning (Wednesday 10:00 AM - 12:00 PM)
**Duration:** Real-time capture during the 2-hour session

**Data Inputs:**
- Live discussion notes (you type as the meeting progresses)

**Note-Taking Template:**

```markdown
# Sprint [XX] Planning — Raw Notes
Date: [Date]
Attendees: [List]

## Sprint Goal Discussion
- Proposed goal:
- Team reactions:
- Final agreed goal:

## Capacity Confirmation
- Any changes from planned capacity:
- Adjusted capacity:

## Story-by-Story Discussion

### [Story ID]: [Title] — [Points]
- Questions raised:
- Concerns:
- Dependencies identified:
- Accepted into sprint? Y/N
- Assignee(s):

### [Story ID]: [Title] — [Points]
[Repeat for each story]

## Parking Lot
- Items deferred for later discussion:

## Team Concerns / Risks Raised
-

## Total Committed
- Points:
- Stories:
```

**Tip:** Don't try to process notes during the meeting. Focus on capturing accurately. Step 3 handles the processing.

---

### Step 3: Post-Ceremony Processing

**Timing:** Within 1 hour after Sprint Planning ends
**Duration:** 5 minutes (review output) vs. 45 minutes manual

**Data Inputs:**
- Raw notes from Step 2
- Sprint Planning agenda from Step 1

**Prompt:**

```
Here are the raw notes from our Sprint Planning session:

[Paste raw notes from Step 2]

Process these into:

1. SPRINT COMMITMENT SUMMARY
   - Sprint goal (final version)
   - Total points committed
   - Story list with owners and point values (as a table)

2. ACTION ITEMS
   - Format: [Owner] — [Action] — [Due Date]
   - Include any pre-work needed before stories can start

3. DEPENDENCIES & RISKS
   - Cross-team dependencies with status
   - Identified risks with mitigation approach

4. PARKING LOT ITEMS
   - Items deferred with suggested follow-up timing

5. KEY DECISIONS MADE
   - What was decided and why (for the sprint record)

Format everything for posting in our Teams channel. Keep it scannable.
```

**Expected Output:**
- Clean sprint commitment document
- Action item list with owners
- Risk register updates
- Teams-ready summary post

---

### Step 4: Follow-Up Distribution

**Timing:** Same day, within 2 hours of planning
**Duration:** 3 minutes (review and send) vs. 30 minutes manual

**Data Inputs:**
- Processed output from Step 3

**Prompt:**

```
Based on this Sprint Planning summary:

[Paste Step 3 output]

Generate:

1. A Teams channel post announcing the Sprint [XX] goal and commitment
   - Keep it concise and energizing
   - Tag each team member with their key stories

2. Individual reminder messages for each person with action items:
   - Lisa Chen: [her specific items]
   - Marcus Williams: [his specific items]
   - Priya Sharma: [her specific items]
   - James Rodriguez: [his specific items]
   - Emma Thompson: [her specific items]
   - David Kim: [his specific items]
   - Raj Patel: [his specific items]

3. A calendar invite description for the Sprint [XX] Review
   (include what will be demoed based on committed stories)

4. A reminder for me to follow up on:
   - [List any unresolved dependencies or risks]
   - Suggested follow-up dates for each
```

**Expected Output:**
- Teams announcement post (copy-paste ready)
- 7 individual reminder messages
- Sprint Review calendar invite text
- Personal follow-up checklist with dates

---

## Chain Summary

| Step | When | Manual Time | With Copilot | Savings |
|------|------|------------|-------------|---------|
| Pre-ceremony prep | Day before | 60 min | 10 min | 50 min |
| Note-taking | During | Same | Same | 0 min |
| Post-ceremony processing | Within 1 hour | 45 min | 10 min | 35 min |
| Follow-up distribution | Within 2 hours | 30 min | 5 min | 25 min |
| **Total** | | **2h 15m** (excluding ceremony) | **25m** | **1h 50m** |

---

## Adapting This Chain for Other Ceremonies

| Ceremony | Step 1 (Pre) | Step 2 (During) | Step 3 (Post) | Step 4 (Follow-up) |
|----------|-------------|-----------------|---------------|-------------------|
| **Daily Standup** | Generate focus areas from yesterday's updates | Capture blockers, progress, plans | Extract action items and blocker updates | Send blocker escalation emails |
| **Sprint Review** | Generate demo script from completed stories | Capture stakeholder feedback | Process feedback into backlog items | Send stakeholder thank-you + next sprint preview |
| **Retrospective** | Generate data-driven discussion topics | Capture observations and votes | Process into action items with owners | Send action item reminders + tracking setup |
| **Backlog Refinement** | Pre-analyze stories for readiness | Capture estimation discussions | Update stories with acceptance criteria and estimates | Notify Raj of refinement outcomes |

---

## Tips for Effective Chains

1. **Save your prompts** — Once a chain works, save each step as a reusable template
2. **Include context every time** — Copilot doesn't remember previous sessions; paste relevant context
3. **Review before sending** — Always read Copilot's output before distributing to the team
4. **Iterate the prompts** — Refine wording based on output quality; small changes have big effects
5. **Time yourself** — Track actual time savings to validate the investment
