# Module 1.5: Persona Prompting

**Duration:** 20 minutes
**Prerequisites:** Module 1.4 completed

---

## What You'll Learn

By the end of this module, you will:
1. Understand what persona prompting is and why it's powerful
2. Create personas for different perspectives (developer, PO, stakeholder)
3. Get multi-perspective feedback on process changes
4. Use personas for coaching conversation practice
5. Build your own persona prompt library

---

## What Is Persona Prompting?

Persona prompting is asking Copilot to respond **as if it were** a specific type of person. Instead of Copilot's neutral perspective, you get feedback from the viewpoint of:

- A developer who values focus time
- A Product Owner learning the role
- A skeptical stakeholder
- An experienced agile coach

This is powerful because:
- It surfaces concerns you might not anticipate
- It helps you prepare for pushback
- It lets you practice difficult conversations
- It provides diverse perspectives on your ideas

---

## Core SM Personas

As a Scrum Master, you interact with several key roles. Here are the core personas:

### 1. Developer Persona

```
You are a Senior Developer on an agile team with 8 years of experience.
You're pragmatic, care about code quality, and value protected focus time
above almost everything else.

When reviewing Scrum processes, you focus on:
- Does this protect or interrupt developer flow?
- Is this ceremony efficient or just process theater?
- Will this actually help us ship better software?
- What's the real time cost for developers?

Be direct and honest. You respect good Scrum but have no patience for
process for process's sake.
```

### 2. Product Owner Persona

```
You are a Product Owner with 6 months in the role. You came from Business
Analysis and are still learning product ownership. You care deeply about
delivering value and maintaining good stakeholder relationships.

Your challenges:
- Saying "no" to stakeholders is hard
- Writing clear acceptance criteria (you're learning)
- Balancing stakeholder demands with team capacity

When reviewing processes, you focus on:
- Does this help me manage expectations?
- Will this improve predictability?
- How will stakeholders perceive this?
```

### 3. Stakeholder Persona

```
You are a VP-level stakeholder who sponsors product development. You've
been at the company 15 years and seen many tech initiatives. You're
supportive of agile but skeptical of process overhead.

Your priorities:
- Predictable delivery on commitments
- Clear communication about status and risks
- Business outcomes, not technical details
- Efficient use of your limited time

You appreciate good work but have been burned by projects that went
sideways. You ask tough questions.
```

---

## Exercise 1: Get Developer Feedback

Let's test a process change idea with the developer persona.

**Do this now:**

```
You are a Senior Developer on an agile team with 8 years of experience.
You're pragmatic, care about code quality, and value protected focus time
above almost everything else.

When reviewing Scrum processes, you focus on:
- Does this protect or interrupt developer flow?
- Is this ceremony efficient or just process theater?
- Will this actually help us ship better software?

Be direct and honest.

---

Review this proposed change to our daily standup:

CURRENT: 15-minute verbal standup where everyone shares what they did,
what they're doing, and blockers. Currently running 25 minutes.

PROPOSED: "Walk the board" format where we go through each Jira card
in progress, discussing status and blockers for each ticket. Estimated
30 minutes.

Provide your honest developer reaction:
1. What would you like about this change?
2. What would frustrate you?
3. Would this help or hurt your productivity?
4. What alternative would you suggest?
```

### What You Should See

The developer persona will likely:
- Push back on the longer time (30 vs 25 vs 15)
- Question whether "walk the board" adds value
- Suggest keeping it brief and taking discussions offline
- Express concern about flow interruption

---

## Exercise 2: Multi-Perspective Review

Now let's get feedback from multiple personas on the same proposal.

**Do this now:**

```
I'm proposing "Focus Fridays" - no meetings on Fridays to protect
developer focus time.

Get feedback from three different perspectives:

---

DEVELOPER PERSPECTIVE:
[Respond as a developer who values focus time and hates meetings]

1. Your reaction
2. Concerns or questions
3. Would you support this?

---

PRODUCT OWNER PERSPECTIVE:
[Respond as a PO who needs to respond to stakeholders and coordinate
with the team]

1. Your reaction
2. Concerns or questions
3. Would you support this?

---

STAKEHOLDER PERSPECTIVE:
[Respond as a VP who sometimes needs urgent answers on Fridays]

1. Your reaction
2. Concerns or questions
3. Would you support this?

---

SYNTHESIS:
What common concerns emerge? How should I address them in my proposal?
```

### What You Should See

Three different reactions:
- **Developer:** Enthusiastic support, finally!
- **PO:** Concerned about stakeholder access, what about urgent requests?
- **Stakeholder:** Worried about Friday escalations, need exceptions

Plus a synthesis identifying the core tension: flexibility vs. protection.

---

## Exercise 3: Coaching Conversation Practice

Personas are powerful for practicing difficult conversations. Let's practice coaching Marcus (the quiet developer).

**Do this now:**

```
Help me practice a coaching conversation.

You will play MARCUS, a developer with 2 years of experience who has
good ideas in 1:1s but stays silent in group meetings. In a recent
retrospective, he said "I relate to feeling like my voice doesn't
matter."

Marcus is:
- Intelligent but not confident
- Afraid of being wrong in front of others
- Deferential to senior team members
- More comfortable in writing than speaking
- Not confrontational

I am the SCRUM MASTER trying to help him speak up more.

Start the conversation. I'll say something, you respond as Marcus would.
Be realistic - don't make it too easy. Marcus might deflect, minimize,
or say "it's fine" when it's not.

---

ME: "Hey Marcus, thanks for meeting with me. I wanted to check in -
how are things going for you on the team?"
```

### Continue the Conversation

After Marcus responds, continue practicing:
- How do you dig deeper when he says "everything's fine"?
- How do you create safety?
- How do you not put him on the spot?

This kind of practice is invaluable for real coaching conversations.

---

## Exercise 4: Test Your Escalation

Before sending an important escalation, test it with the stakeholder persona.

**Do this now:**

```
You are Jennifer Walsh, VP of Internal Digital Products at Accenture.
You're pragmatic, data-driven, and supportive but busy. You receive
many requests and have limited time.

Review this escalation email from your Scrum Master:

---
Subject: Resource Constraint Affecting AKX Delivery

Jennifer,

I'm raising a concern about design capacity affecting the Velocity Squad.

Over the last 4 sprints:
- 7 design-related blockers
- Average 5.3 days to resolve
- 3 stories carried over due to design dependencies
- ~47 story points blocked

David (UX Designer) is shared across 3 teams with competing priorities.

Impact: Consistent carryover affecting stakeholder confidence.

Proposed solutions:
1. Dedicated design resource
2. Design work planned 1 sprint ahead
3. Clearer priority framework for conflicts

Can we discuss this week?
---

As Jennifer:
1. What's your reaction to this email?
2. Is the problem clear? The impact?
3. Is the ask specific enough?
4. What would you do after reading this?
5. What's missing that would help you act faster?
```

### What You Should See

Jennifer will likely:
- Appreciate the data-driven approach
- Want to understand the business impact more
- Ask what's been tried already
- Consider whether this needs her attention or can be handled lower

---

## Building Your Persona Library

The course provides ready-made personas in `prompt-library/personas/`:

- `developer.md` - Developer perspective
- `product-owner.md` - PO perspective
- `stakeholder.md` - VP/Sponsor perspective
- `agile-coach.md` - Coaching and reflection

### Customizing Personas

Make personas more specific to your team:

```
You are LISA CHEN, the tech lead on Velocity Squad. You:
- Have 8 years experience and high standards
- Take on too much work yourself
- Get frustrated by unclear requirements
- Value efficiency and directness
- Are protective of developer time

When reviewing proposals, you're thinking about:
- Time cost to developers
- Whether this actually solves the problem
- If the SM is adding value or creating overhead
```

Team-specific personas give more accurate feedback!

---

## Module Complete!

You now know how to:
- ✅ Create personas for different perspectives
- ✅ Get multi-perspective feedback on proposals
- ✅ Practice coaching conversations safely
- ✅ Test communications before sending
- ✅ Build a persona prompt library

---

## Next Steps

Continue to **Module 1.6: Building Context with Memory**

In Module 1.6, you'll learn:
- Using Copilot Memory for persistent team context
- Creating context documents
- Managing what Copilot remembers

---

## Quick Reference

### Basic Persona Structure
```
You are [role] with [experience level].

Your characteristics:
- [Personality trait]
- [Value/priority]
- [Challenge/frustration]

When reviewing [topic], you focus on:
- [Concern 1]
- [Concern 2]
- [Concern 3]

Be [tone - direct/supportive/skeptical].
```

### Multi-Perspective Pattern
```
Get feedback from three perspectives:

PERSPECTIVE 1: [Role]
[Brief persona description]
React to: [The proposal]

PERSPECTIVE 2: [Role]
[Brief persona description]
React to: [The proposal]

PERSPECTIVE 3: [Role]
[Brief persona description]
React to: [The proposal]

SYNTHESIS:
What common themes emerge?
```

### Roleplay Practice Pattern
```
You will play [NAME], who is [description].

[Name] is:
- [Trait 1]
- [Trait 2]
- [Trait 3]

I am [my role]. We're having a conversation about [topic].

Be realistic - don't make it too easy.

Start: [Opening line]
```

---

**Ready for Copilot Memory? Let's continue!**
