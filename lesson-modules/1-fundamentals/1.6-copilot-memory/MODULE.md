# Module 1.6: Building Context with Memory

**Duration:** 15 minutes
**Prerequisites:** Module 1.5 completed

---

## What You'll Learn

By the end of this module, you will:
1. Understand Copilot Memory and how it persists context
2. Teach Copilot about your team
3. Create effective context documents
4. Manage what Copilot remembers
5. Use memory to make every conversation more relevant

---

## The Context Problem

Every time you start a new Copilot chat, you lose context. You end up repeating:

- "I'm the Scrum Master for a 7-person team..."
- "We use 2-week sprints..."
- "Our main challenge is velocity inconsistency..."

This wastes time and makes responses less relevant.

**Memory solves this.** Copilot can remember your team, your challenges, and your preferences across sessions.

---

## What Is Copilot Memory?

Copilot Memory is a feature that stores information you want Copilot to remember about:

- **You:** Your role, preferences, communication style
- **Your team:** Members, dynamics, challenges
- **Your context:** Company, projects, tools
- **Your preferences:** Output formats, detail levels

When Memory is enabled, Copilot uses this stored context to make responses more relevant without you having to repeat yourself.

---

## Exercise 1: Check Your Memory Settings

**Do this now:**

1. Go to copilot.microsoft.com
2. Click on your profile or settings
3. Look for "Memory" or "Personalization" settings
4. Ensure Memory is enabled

**Note:** Memory features may vary based on your organization's M365 configuration.

---

## Teaching Copilot About Your Team

You can explicitly tell Copilot to remember things.

### Exercise 2: Create Team Memory

**Do this now:**

```
Remember the following about my team:

I am the Scrum Master for the VELOCITY SQUAD at Accenture.

TEAM BASICS:
- 7 members: 3 developers, 2 QA, 1 designer, 1 PO
- We build AKX (Accenture Knowledge Exchange)
- 2-week sprints, Wednesday start
- Average velocity: 45 points
- We use Jira for backlog, Teams for communication

TEAM MEMBERS:
- Raj (PO): New to role, needs coaching on stakeholder management
- Lisa (Tech Lead): High performer, takes on too much
- Marcus (Dev): Quiet, doesn't speak up in meetings
- Priya (Dev): Remote from Bangalore, feels excluded sometimes
- James (QA Lead): Quality advocate, raises tech debt concerns
- Emma (QA): New to agile, learning quickly
- David (UX): Shared across 3 teams, capacity bottleneck

CURRENT CHALLENGES:
- Velocity swings (35-55 points)
- Retrospective fatigue - same issues recurring
- Standups running 25 minutes (target: 15)
- Design dependency causing carryover
- Remote inclusion for Priya

Please remember this and reference it in future conversations.
```

### Verify It Worked

In a new chat (or the same one), ask:

```
What do you remember about my team?
```

Copilot should recall the Velocity Squad context.

---

## Creating Context Documents

For more detailed context, create a document that Copilot can reference.

### The Team Context Document

A good context document includes:

```markdown
# Velocity Squad Context

## Team Overview
- Organization: Accenture Internal Digital Products
- Product: AKX (Accenture Knowledge Exchange)
- Team size: 7 members
- Sprint length: 2 weeks (Wednesday to Tuesday)

## Team Members
| Name | Role | Key Notes |
|------|------|-----------|
| Raj Patel | Product Owner | 6 months in role, learning |
| Lisa Chen | Tech Lead | Strong, tends to overwork |
| Marcus Williams | Developer | Quiet, has good ideas |
| Priya Sharma | Developer | Remote (Bangalore), IST |
| James Rodriguez | QA Lead | Quality advocate |
| Emma Thompson | QA Engineer | New to agile |
| David Kim | UX Designer | Shared, capacity issues |

## Current Metrics
- Average velocity: 45 points
- Velocity range: 35-55 (high variance)
- Sprint goal achievement: 70%
- Carryover rate: 15%

## Active Challenges
1. Velocity inconsistency
2. Retrospective fatigue
3. Design capacity bottleneck
4. Remote inclusion (Priya)
5. PO coaching needs (Raj)

## Working Agreements
- Core hours: 10 AM - 3 PM ET
- Standups: 9:30 AM ET, 15 min target
- Focus Fridays: Proposed, not yet approved
```

### Exercise 3: Use Context Document

**Do this now:**

1. Save the context above (or use `team-context/TEAM.md`) to OneDrive
2. In Copilot, reference the file:
3. Ask:

```
Based on my team context, what should I focus on in tomorrow's
retrospective?
```

Copilot will give contextually relevant recommendations.

---

## Memory Best Practices

### What to Include in Memory

✅ **Include:**
- Team composition and roles
- Current challenges
- Working agreements
- Communication preferences
- Sprint cadence

### What NOT to Include

❌ **Avoid:**
- Sensitive personal information
- Confidential business data
- Information that changes frequently
- Negative characterizations of specific people

### Updating Memory

As your team evolves, update your context:

```
Update my team memory:

Marcus has been speaking up more in meetings since our coaching
conversations. He's no longer "quiet" - update to "growing in
confidence."

Also, we've started Focus Fridays as of Sprint 48.
```

### Clearing Memory

If you need to start fresh:

```
Forget everything you know about my team. Let's start over.
```

---

## Exercise 4: Context-Aware Coaching Prep

Let's use memory for a practical task.

**Do this now:**

Assuming Copilot remembers your team context:

```
Help me prepare for a 1:1 with Raj (our PO) tomorrow.

Based on what you know about our team:
- What challenges is Raj likely facing?
- What coaching topics should I raise?
- What questions should I ask?
- How can I support his growth?

Give me a 15-minute 1:1 agenda.
```

### What You Should See

Copilot will reference the stored context:
- Raj's newness to the PO role
- The stakeholder management challenge (Richard)
- Story quality concerns from Lisa
- Specific coaching suggestions

**This is the power of memory - relevant advice without re-explaining everything!**

---

## Layering Context

You can combine memory with uploaded files:

```
Based on my team context (which you remember) and this week's
standup notes (attached), what patterns should concern me?

[Upload standup notes]
```

Copilot uses both:
- Long-term memory (team context)
- Session context (uploaded file)

---

## Module Complete!

You now know how to:
- ✅ Use Copilot Memory for persistent context
- ✅ Teach Copilot about your team
- ✅ Create effective context documents
- ✅ Update and manage memory
- ✅ Layer context for better responses

---

## Next Steps

Continue to **Module 1.7: Copilot Across M365 Apps**

In Module 1.7, you'll learn:
- Using Copilot in Word for sprint documentation
- Using Copilot in Excel for metrics tracking
- Using Copilot in PowerPoint for sprint reviews

---

## Quick Reference

### Creating Memory
```
Remember the following about my team:
[Team details]
Please remember this for future conversations.
```

### Checking Memory
```
What do you remember about my team/role/context?
```

### Updating Memory
```
Update my team memory:
[Changes]
```

### Using Context Documents
```
Reference my team context document [file reference]
and help me with [task].
```

### Clearing Memory
```
Forget everything you know about [topic].
```

---

**Ready for M365 app integration? Let's continue!**
