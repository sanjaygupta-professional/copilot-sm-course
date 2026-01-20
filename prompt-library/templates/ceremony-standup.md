# Standup Processing Templates

Prompts for processing daily standup notes with Microsoft Copilot.

---

## Basic Standup Summary

Use this to quickly summarize a day's standup notes.

```
Summarize this daily standup update in a clear, actionable format.

For each team member, extract:
- What they completed
- What they're working on
- Any blockers mentioned

Then provide:
- BLOCKERS SUMMARY: List any blockers that need SM attention
- PATTERNS: Note any patterns (same person blocked multiple days, etc.)

Keep it concise - this is for quick reference.

[Paste standup notes here]
```

---

## Week Standup Analysis

Use this to analyze a full week of standups for patterns.

```
Analyze these daily standup notes from the past week.

I need to understand:

1. **BLOCKERS ANALYSIS**
   - What blockers were raised?
   - How long did each stay open?
   - Were any raised multiple days?
   - Which are still unresolved?

2. **INDIVIDUAL PATTERNS**
   - Who consistently reports blockers?
   - Who never reports blockers (might be hiding them)?
   - Who gives detailed updates vs. brief?
   - Any signs of struggling (stuck on same thing, vague updates)?

3. **TEAM PATTERNS**
   - Are standups running over time? Evidence?
   - Is problem-solving happening in standup?
   - Are dependencies between team members being surfaced?

4. **ACTION ITEMS FOR SM**
   - What needs my immediate attention?
   - Who should I check in with 1:1?
   - What should I bring up in retro?

Be specific and cite examples from the notes.

[Paste week's standup notes here]
```

---

## Standup Efficiency Analysis

Use this to diagnose why standups are running long.

```
Analyze these standup notes to identify why our standups are exceeding 15 minutes.

Look for evidence of:

1. **STATUS REPORTING vs. BLOCKER FOCUS**
   - Are people giving play-by-play of their day?
   - Or are they focused on what blocks progress?

2. **PROBLEM-SOLVING IN STANDUP**
   - Are technical discussions happening?
   - Are people trying to solve problems in real-time?

3. **SCOPE/PRIORITY DISCUSSIONS**
   - Is the PO adding "one quick thing"?
   - Are priorities being debated?

4. **SIDE CONVERSATIONS**
   - Do people go off-topic?
   - Are there social tangents?

5. **INDIVIDUAL BEHAVIORS**
   - Who takes the most time?
   - Who gets drawn into discussions?

For each issue found, suggest:
- Root cause
- How I might address it as SM
- Specific intervention to try

[Paste standup notes here]
```

---

## Remote Team Inclusion Check

Use this to assess whether remote team members are being included.

```
Analyze these standups for remote team member inclusion.

[Remote team member name]: Priya (works from Bangalore, IST timezone)

Check for:

1. **PARTICIPATION QUALITY**
   - Does Priya contribute equally to in-person members?
   - Are her updates acknowledged or passed over quickly?
   - Does she get time to ask questions?

2. **DECISION INVOLVEMENT**
   - Are decisions being made that affect her work?
   - Is she included in those discussions?
   - Or do things happen "before she responds"?

3. **TECHNICAL ISSUES**
   - Any mentions of video/audio problems?
   - Does latency affect her participation?

4. **FOLLOW-UP GAPS**
   - Are there discussions that should have included her?
   - Does she reference missing information later?

Provide specific recommendations for better inclusion.

[Paste standup notes here]
```

---

## Blocker Escalation Prep

Use this to prepare for escalating unresolved blockers.

```
I need to escalate blockers that have been open too long.

From these standup notes, identify all blockers and for each one:

1. **BLOCKER DETAILS**
   - What is it?
   - Who raised it?
   - When was it first mentioned?
   - What stories/work does it affect?

2. **CURRENT STATUS**
   - Is it resolved?
   - If not, how long has it been open?
   - What's been tried?

3. **IMPACT ASSESSMENT**
   - Story points blocked
   - People affected
   - Sprint goal at risk?

4. **ESCALATION RECOMMENDATION**
   - Does this need escalation?
   - To whom?
   - What's the ask?

Format as a table I can include in an escalation email.

[Paste standup notes here]
```

---

## Async Standup Summary for Remote Team

Use this to create a summary for team members in other timezones.

```
Create an async-friendly summary of today's standup for team members who couldn't attend.

Structure it as:

## Standup Summary - [Date]

### Key Decisions Made
[Any decisions that were made or confirmed]

### Blockers & Dependencies
[What's blocking progress, who needs help]

### Heads Up
[Things people should know about]

### Action Items
[Who committed to doing what]

### Questions That Need Input
[Questions raised that remote team should weigh in on]

Make it scannable in 2 minutes. Use bullet points.

[Paste today's standup notes here]
```

---

## Tips for Best Results

1. **Include raw, unedited notes** - Copilot works better with authentic meeting notes
2. **Provide context** - Team size, sprint status, known issues
3. **Be specific about your goal** - Summary vs. analysis vs. action items
4. **Follow up with questions** - "What else should I watch for?" or "Expand on pattern #2"
5. **Compare over time** - Run the same analysis weekly to spot trends
