# Meta-Prompt: Ceremony Facilitation Generator

## When to Use
Use this meta-prompt to generate a customized facilitation prompt for ANY ceremony, tailored to your specific team context and challenges. This is a "prompt that writes prompts."

## The Meta-Prompt

```
Generate a detailed Copilot facilitation prompt for an upcoming ceremony.

INPUTS:
- Ceremony type: [sprint planning / standup / sprint review / retrospective / backlog refinement]
- Team name: [name]
- Team size: [number]
- Sprint number: [number]
- Known challenges for this ceremony:
  1. [challenge 1]
  2. [challenge 2]
  3. [challenge 3]
- Last ceremony's outcome: [what happened last time]
- Specific team dynamics to navigate: [any interpersonal or process issues]

GENERATE a facilitation prompt that includes:
1. A pre-ceremony preparation checklist (data to gather, questions to prepare)
2. An opening statement that sets the right tone
3. 3-5 targeted discussion questions (not generic — specific to this team's situation)
4. Facilitation interventions for likely difficult moments
5. A closing structure that ensures clear outcomes
6. Post-ceremony follow-up actions

The generated prompt should be copy-paste ready for Copilot.
```

## Example: Generating a Sprint 48 Planning Prompt

```
Generate a detailed Copilot facilitation prompt for an upcoming ceremony.

INPUTS:
- Ceremony type: Sprint Planning
- Team name: Velocity Squad
- Team size: 7
- Sprint number: 48
- Known challenges for this ceremony:
  1. David (UX designer) is only available Monday and Tuesday this sprint
  2. Lisa and Raj had tension about story quality last planning
  3. Priya won't be available for the live planning (timezone)
- Last ceremony's outcome: Sprint 47 planned 52 points, completed 48. Design stories were the gap.
- Specific team dynamics: Need to get Raj to present stories confidently without Lisa overriding. Marcus should be encouraged to ask questions.
```

## Why This Is Powerful

Instead of maintaining dozens of ceremony-specific prompts, you maintain ONE meta-prompt that generates the right prompt for any ceremony in any context. When your team changes, the generated prompts change automatically.
