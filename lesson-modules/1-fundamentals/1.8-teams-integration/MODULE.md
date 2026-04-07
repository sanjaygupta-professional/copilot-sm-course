# Module 1.8: Copilot in Microsoft Teams

**Duration:** 25 minutes
**Prerequisites:** Module 1.7 completed, Microsoft Teams access

---

## What You'll Learn

By the end of this module, you will:
1. Get meeting summaries from Scrum ceremonies
2. Catch up on missed Daily Scrums
3. Track action items from retrospectives
4. Use Copilot in team channels
5. Leverage meeting intelligence for SM work

---

## Why Teams Copilot Matters for SMs

As a Scrum Master, you spend significant time in Teams:
- Facilitating ceremonies (planning, Daily Scrums, reviews, retros)
- Communicating in team channels
- Following up on action items
- Catching up on discussions you missed

Teams Copilot transforms all of this by:
- Automatically summarizing meetings
- Extracting action items
- Answering questions about past discussions
- Catching you up when you were absent

---

## Meeting Intelligence

When Copilot is enabled for Teams meetings, it can:

| Capability | What It Does |
|------------|--------------|
| **Meeting Recap** | Summary of what was discussed |
| **Action Items** | Who committed to what |
| **Key Decisions** | Decisions that were made |
| **Follow-ups** | Things mentioned needing follow-up |
| **Participant Insights** | Who spoke, sentiment |

### Enabling Meeting Intelligence

For meeting transcription and Copilot summaries:

1. Start or join a Teams meeting
2. Click "More" (...) in the meeting controls
3. Select "Record and transcribe"
4. Copilot will process the transcript

**Note:** Recording and transcription must be enabled by your admin and disclosed to participants. Copilot features in Teams depend on your organization's settings — if you don't see Copilot options in a meeting, ensure transcription is enabled and check with your IT administrator.

> **Warning:** Copilot in Teams meetings works best when transcription is active. Without it, Copilot can only reference the meeting chat, not spoken content. Always verify that critical action items captured by Copilot match what was actually discussed — Copilot may miss nuance or misattribute statements in multi-speaker conversations.

---

## Exercise 1: Sprint Planning Summary

After a sprint planning meeting with Copilot recording enabled:

**Try this prompt in the meeting chat or Copilot:**

```
Summarize this sprint planning meeting:

1. What was the sprint goal agreed upon?
2. What stories were committed to?
3. What was the total point commitment?
4. Were there any concerns raised by the team?
5. What dependencies were identified?
6. What risks were flagged?

Format as a summary I can share with the team.
```

### What You Should Get

A structured summary including:
- Sprint 48 Goal: [from discussion]
- Stories committed: [list with points]
- Total commitment: [X points]
- Team concerns: [any hesitations mentioned]
- Key dependencies: [cross-team needs]

---

## Exercise 2: Catch Up on Missed Daily Scrum

When you miss a Daily Scrum (standup) or any meeting, Copilot can catch you up.

**Open the meeting recap and ask:**

```
I missed today's standup. Catch me up:

1. Were there any blockers mentioned?
2. Did anyone need help with anything?
3. Were there any surprises or concerns?
4. What should I follow up on as the SM?

Be concise - just the highlights.
```

### What You Should Get

A quick summary of:
- Blockers that need attention
- Anyone who seemed stuck
- Any discussions that went off-track
- SM action items

---

## Exercise 3: Retrospective Action Items

After a retrospective, extracting clear action items is critical.

**Ask Copilot about the retro meeting:**

```
Extract all action items from this retrospective:

For each action item:
- What was committed to?
- Who is responsible?
- By when (if mentioned)?
- Which improvement theme does it address?

Also note:
- Which issues got the most votes/discussion?
- Were there emotional moments to follow up on?
- Any items that have come up in previous retros?

Format as a checklist I can track.
```

### What You Should Get

A structured action list:
```
☐ Focus Fridays proposal - SM - Submit to Jennifer by Friday
☐ Tech debt tracking - James - Create tracking method by next sprint
☐ Async decision log - Priya - Template by end of sprint
☐ Planning timebox - SM - Enforce 2-hour limit next planning
```

---

## Copilot in Team Channels

Beyond meetings, Copilot can help with channel conversations.

### Use Cases

- Catch up on discussions that happened while you were in meetings
- Find decisions that were made in the channel
- Search for past conversations on specific topics
- Understand the context of ongoing discussions

### Exercise 4: Channel Intelligence

> **Tip:** To use Copilot in a Teams channel, open a channel post and expand it into the full conversation view. Then look for **Open Copilot** in the upper-right corner. Copilot requires at least 1,000 characters of text in the thread to generate a summary. If you don't see the Copilot option, your organization may need to enable this feature — check with your IT administrator.

In your team's channel, try these prompts:

**Catch-Up:**
```
What important discussions happened in this channel in the past week?
Highlight any decisions made, action items assigned, or issues raised.
```

**Decision Search:**
```
Were there any decisions made in this channel about
[sprint scope / technical approach / meeting times]?
```

**Topic Search:**
```
What has the team discussed about [design dependencies / velocity / testing]?
Summarize the key points and any conclusions.
```

---

## Pro Tips for Teams Copilot

### For Better Meeting Summaries

1. **Use clear agenda items** - Structure helps Copilot understand what was discussed
2. **Speak clearly** - Transcription quality affects summary quality
3. **Name action items explicitly** - "I'll do X by Y" gets captured better
4. **Recap decisions** - "So we've decided to..." helps Copilot identify decisions

### For Better Channel Intelligence

1. **Use clear thread subjects** - Makes searching easier
2. **Mark important messages** - Helps Copilot identify priorities
3. **Close loops** - "This is resolved" or "Decision: X" helps tracking

### SM-Specific Prompts

**After any ceremony:**
```
What were the key outcomes of this meeting for the team?
```

**For action tracking:**
```
What did [team member name] commit to in this meeting?
```

**For retrospective follow-up:**
```
Were there any emotional moments or concerns expressed
that I should follow up on privately?
```

---

## Async Daily Scrum Support

If your team does async Daily Scrums (like posting in a channel), Copilot can help:

**Daily synthesis:**
```
Summarize today's async standup updates from the team.
Who has blockers? Who might need help?
```

**Weekly pattern analysis:**
```
Looking at this week's standup posts, what patterns do you see?
Anyone stuck on the same thing multiple days?
```

---

## Module Complete!

You now know how to:
- ✅ Get meeting summaries from Scrum ceremonies
- ✅ Catch up on missed Daily Scrums and meetings
- ✅ Extract action items from retrospectives
- ✅ Use Copilot in team channels
- ✅ Leverage meeting intelligence for SM work

> **Reference:** The Teams skills you've built here are foundational for advanced ceremony work. In **Module 2.1 (Facilitating Ceremonies)**, you'll use meeting summaries to prepare for and debrief Sprint events. In **Module 2.3 (Team Health)**, you'll analyze Teams chat patterns to identify team dynamics. And in **Module 4.1 (Sprint Analytics)**, you'll combine Teams data with other metrics for data-driven facilitation.

---

## Next Steps

Continue to **Module 1.9: Copilot in Outlook**

In Module 1.9, you'll learn:
- Drafting stakeholder updates
- Summarizing long email threads
- Preparing for 1:1s and coaching sessions

---

## Quick Reference

### Meeting Recap Prompts
```
Summarize this [ceremony type]:
- [Specific element 1]
- [Specific element 2]
Format for [audience].
```

### Catch-Up Prompts
```
I missed [meeting]. Catch me up on:
- Blockers
- Decisions
- Action items
- Anything I should follow up on
```

### Channel Intelligence
```
What has been discussed about [topic] in this channel?
Were any decisions made?
```

### Action Extraction
```
Extract all action items:
- What
- Who
- When
Format as checklist.
```

---

**Ready for Outlook integration? Let's continue!**
