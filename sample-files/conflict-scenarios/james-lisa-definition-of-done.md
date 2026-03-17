# Conflict Scenario: James vs. Lisa — Definition of Done

## Background

**Sprint Review, Sprint 47.** The team is reviewing story AKX-1198 (Search Filter Enhancement).

Lisa presents: "This is done. The feature works, I've tested it locally, and the PR is merged."

James interjects: "It's not done. We only have 60% test coverage on the new filter logic. Our DoD says 80% minimum."

Lisa: "That's a guideline, not a hard rule. The feature works perfectly. Adding tests for edge cases that will never happen is a waste of time."

James: "That's what they said about the pagination bug in Sprint 43. Remember how long that took to fix?"

Lisa: "That was completely different."

The tension is palpable. Raj (PO) looks to you for help.

---

## What's Really Happening

### James's Perspective
- Quality is his professional identity — he's been QA for 5 years
- He's seen teams ship buggy code and pay for it later
- The Sprint 43 pagination bug took 2 days to fix and embarrassed the team at sprint review
- He feels his standards are being undermined
- He worries that if he backs down, quality will keep slipping

### Lisa's Perspective
- She's the most productive developer (consistently delivers 15+ story points)
- She believes in pragmatic quality — test what matters, skip what doesn't
- She feels test coverage percentages are a vanity metric
- She's frustrated that James "blocks" stories she considers complete
- She values velocity and delivery predictability

### The Real Issue
- The team has never explicitly agreed on what "Done" means for different story types
- The existing DoD was written 6 months ago and hasn't been reviewed
- Lisa and James are both right: quality matters AND over-testing wastes time
- This isn't a conflict to resolve — it's a tension to balance

---

## Mediation Setup

### Before the Mediation
Understand each person's underlying need:
- **James:** Safety and predictability. "If we ship quality code, we don't get surprised."
- **Lisa:** Efficiency and autonomy. "If I know the code works, I shouldn't need permission to ship it."

### The Mediation Conversation

**Opening (SM):** "I want to facilitate a conversation between you two about Definition of Done. Not to decide who's right — because I think you both are — but to find an approach the whole team can commit to. Ground rules: listen first, no interrupting, focus on the team's needs rather than winning the argument."

**Key Questions:**
1. "James, what does a 'well-tested' story look like to you? Be specific."
2. "Lisa, what does 'pragmatic quality' mean in practice? Give me an example."
3. "Can you both describe a scenario where the other person's approach would be the right one?"
4. "What's the COST of James's approach? What's the COST of Lisa's approach?"
5. "What DoD would you both commit to for the next 2 sprints?"

### Possible Outcomes
1. **Tiered DoD:** Critical paths require 80%+ coverage. UI/minor features require 60%+ with manual test documentation.
2. **Risk-Based Testing:** Stories tagged "high-risk" get full coverage. Others get pragmatic coverage. James decides the tag.
3. **Sprint Review Checkpoint:** If a bug escapes to production, the team revisits DoD. If not, the current approach is working.

---

## Success Criteria

- [ ] Team has a written, agreed-upon DoD that both Lisa and James can live with
- [ ] Neither person feels they "lost" the negotiation
- [ ] Sprint review discussions about "done" decrease (clarity reduces friction)
- [ ] No increase in production bugs (James's concern addressed)
- [ ] No decrease in velocity (Lisa's concern addressed)
- [ ] Both Lisa and James feel heard and respected

## Warning Signs of Failed Mediation
- Lisa starts bypassing QA review (passive resistance)
- James starts adding excessive test requirements (passive aggression)
- Other team members avoid the topic entirely
- Stories stay "in review" longer than before
