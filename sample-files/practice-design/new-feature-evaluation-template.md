# AI Feature Evaluation Template for Scrum Masters

**Purpose:** Structured approach to evaluating new AI features as they're announced — decide quickly whether to adopt, defer, or skip.
**Cadence:** Review new features monthly; evaluate within 1 week of announcement.
**Owner:** You (Scrum Master)

---

## Evaluation Framework

For each new feature, complete this assessment:

```
## Feature Evaluation: [Feature Name]

**Date Announced:** [date]
**Source:** [blog post, release notes, event, etc.]
**Availability:** [GA / Preview / Coming Soon]
**License Required:** [included in M365 Copilot / requires add-on / etc.]

### What It Does
[2-3 sentence description of the feature's capability]

### Relevance to SM Work (1-5)
- 1 = No relevance to SM tasks
- 2 = Marginal — might help in edge cases
- 3 = Moderate — would improve one SM workflow
- 4 = High — would improve multiple workflows or save significant time
- 5 = Critical — transforms a core SM activity

**Score:** [1-5]
**Rationale:** [Why this score?]

### Test Plan
1. [Specific SM scenario to test]
2. [Second scenario]
3. [Success criteria — what would "useful" look like?]

### Test Results
- **Date tested:** [date]
- **Scenario 1 result:** [what happened]
- **Scenario 2 result:** [what happened]
- **Time investment to test:** [hours]
- **Quality of output:** [1-5]
- **Reliability:** [consistent results or hit-or-miss?]

### Decision
- [ ] **Adopt** — Add to my workflow immediately
- [ ] **Defer** — Promising but not ready; revisit in [timeframe]
- [ ] **Skip** — Not useful for SM work at this time

### If Adopting
- **Which workflow does it replace/enhance?** [workflow name]
- **Updated prompts:** [new or modified prompts for prompt library]
- **Time savings estimate:** [minutes/week]
- **Shared with team/CoP?** Yes / No
```

---

## Example Evaluation 1: Copilot Pages for Collaborative Sprint Reporting

### Feature Evaluation: Copilot Pages

**Date Announced:** September 2024
**Source:** Microsoft 365 Copilot Wave 2 announcement
**Availability:** GA (rolling out to M365 Copilot users)
**License Required:** Included in M365 Copilot license

### What It Does
Copilot Pages creates a persistent, editable, shareable canvas from any Copilot response. Instead of AI output disappearing after a chat session, Pages turns it into a collaborative document that multiple people can view, edit, and build on together. Content stays synced with the original Copilot conversation.

### Relevance to SM Work (1-5)

**Score:** 4
**Rationale:** Sprint reports are currently generated in Copilot chat, then manually copied to Word/Teams. Pages would let me generate the report AND share it directly — eliminating the copy-paste step. The collaborative aspect means the PO and stakeholders can add comments directly on the AI-generated content. This improves sprint reviews, status reports, and retrospective summaries.

### Test Plan
1. **Sprint report generation:** Create a sprint report in Copilot, convert to Page, share with Jennifer Walsh and Raj Patel. Can they edit and comment?
2. **Retrospective summary:** Generate retro themes and action items as a Page. Share with the team. Does it replace the current retro follow-up email?
3. **Success criteria:** Saves 15+ min/sprint on report distribution; stakeholders actually engage with the shared Page within 24 hours.

### Test Results
- **Date tested:** October 15, 2025
- **Scenario 1 result:** Sprint report Page created in 3 minutes. Shared via Teams link. Jennifer added comments directly. Raj corrected a velocity number. Eliminated the Word document step entirely.
- **Scenario 2 result:** Retro summary Page worked well. Team preferred it to email — they could add "+1" reactions to action items. Two team members added items they'd forgotten during the retro.
- **Time investment to test:** 1 hour across both scenarios
- **Quality of output:** 4/5 — formatting is clean; tables render well; lacks some custom formatting options
- **Reliability:** Consistent results across 3 tests

### Decision
- [x] **Adopt** — Add to my workflow immediately
- [ ] **Defer**
- [ ] **Skip**

### If Adopting
- **Which workflow does it replace/enhance?** Sprint report distribution (previously: Copilot → Word → Teams post)
- **Updated prompts:**
  - "Generate a sprint report for Sprint [X] from this data. Format with headers, a metrics table, and bullet points for highlights and concerns. I'll convert this to a Page for stakeholder review."
- **Time savings estimate:** 20 min/sprint (10 min formatting + 10 min distribution)
- **Shared with team/CoP?** Yes — shared with Ana and Chris in SM community meeting

---

## Example Evaluation 2: Copilot in Planner for Backlog Management

### Feature Evaluation: Copilot in Microsoft Planner

**Date Announced:** November 2024
**Source:** Microsoft Ignite 2024
**Availability:** Preview (enterprise preview ring)
**License Required:** M365 Copilot + Planner Premium

### What It Does
Copilot integration in Microsoft Planner enables natural language task creation, automated task breakdown (epics → tasks → subtasks), smart assignments based on team member skills and capacity, and goal tracking with AI-generated progress summaries. Can create full project plans from a text description.

### Relevance to SM Work (1-5)

**Score:** 3
**Rationale:** Useful for SMs who manage program-level coordination in Planner (not Jira/Azure DevOps). The task breakdown feature could help during sprint planning — "Break this epic into sprint-sized stories." However, most mature Scrum teams use Jira or ADO, not Planner, so the direct applicability is limited. Most valuable for SMs managing their own task lists or coordinating non-sprint work (e.g., organizational impediment campaigns, hiring processes).

### Test Plan
1. **Program coordination:** Create a "Designer Hiring Campaign" plan from the influence-map-template. Does Copilot generate reasonable tasks and timelines?
2. **Sprint planning support:** Paste a sprint goal and ask Copilot to suggest task breakdown. Compare to what the team actually committed to.
3. **Success criteria:** Task breakdown is 70%+ accurate compared to human planning; saves 10+ min in planning prep.

### Test Results
- **Date tested:** December 5, 2025
- **Scenario 1 result:** Generated a 14-task hiring campaign plan with reasonable sequencing. Missed some stakeholder-specific tasks but provided a solid starting point. Saved ~20 min of manual plan creation.
- **Scenario 2 result:** Sprint planning task breakdown was too generic. It suggested tasks like "Design UI" and "Write tests" without enough context about our actual architecture. Not useful for technical sprint planning.
- **Time investment to test:** 1.5 hours
- **Quality of output:** 3/5 — good for project management; weak for agile sprint planning
- **Reliability:** Inconsistent — quality varied significantly based on input detail

### Decision
- [ ] **Adopt**
- [x] **Defer** — Promising but not ready; revisit when team migrates coordination work to Planner or when the feature reaches GA with improved context awareness
- [ ] **Skip**

### If Adopting
- N/A (deferred)
- **Revisit date:** March 2026 (check GA status and updated capabilities)

---

## Example Evaluation 3: Copilot Studio Agents for Automated Standups

### Feature Evaluation: Copilot Studio Custom Agents

**Date Announced:** May 2024 (Build), expanded November 2024 (Ignite)
**Source:** Microsoft Build 2024, Microsoft Ignite 2024
**Availability:** GA (requires Copilot Studio license)
**License Required:** Copilot Studio ($200/month per agent or pay-per-use)

### What It Does
Copilot Studio allows building custom AI agents that can be deployed in Teams channels. For standups, an agent could: (1) prompt each team member with standup questions at a scheduled time, (2) collect async responses, (3) aggregate into a summary with blockers highlighted, (4) post the summary to the team channel, (5) flag items that need SM attention. Essentially, an automated async standup bot with AI-powered analysis.

### Relevance to SM Work (1-5)

**Score:** 4 (with significant caveats)
**Rationale:** Async standups could save 15 min/day of synchronous meeting time for the team and 10 min/day of note processing for the SM. The AI aggregation is the key value — not just collecting responses (Slack bots do that) but analyzing them for patterns and risks. However, there are serious facilitation concerns: standups aren't just status reports, they're team connection points. Removing the synchronous element risks losing early signals that come from tone, body language, and spontaneous conversation.

### Test Plan
1. **Async collection test:** Deploy a standup agent for 1 week alongside the regular standup. Compare the quality of information captured async vs. live.
2. **Analysis quality:** Feed the agent real standup data from Sprint 47. Does its blocker detection match what we actually identified?
3. **Team reaction:** Present the concept to the team. Would they want this? Under what conditions?
4. **Success criteria:** Information quality is 80%+ of live standups; team majority (4+ of 7) sees value; blockers are correctly identified 90%+ of the time.

### Test Results
- **Date tested:** January 20-24, 2026
- **Scenario 1 result:** Async responses were shorter and less detailed than live standup contributions. Marcus and Priya gave thorough responses; Li Wei and Elena gave one-liners. Information quality was ~60% of live standups.
- **Scenario 2 result:** Blocker detection was strong — correctly identified 4 of 5 blockers from Sprint 47 data. Missed one implicit blocker ("waiting on API docs" wasn't flagged because it wasn't explicitly called a blocker).
- **Scenario 3 result:** Team vote: 3 wanted it, 2 were neutral, 2 were against. Elena said "I need to see faces in the morning." Marcus said "This would save me 15 min I'd rather spend coding."
- **Time investment to test:** 4 hours (setup) + 5 days (running)
- **Quality of output:** 3/5 — good aggregation, but lost nuance from live conversations
- **Reliability:** Consistent technically; inconsistent in response quality from team members

### Decision
- [ ] **Adopt**
- [ ] **Defer**
- [x] **Skip** — Not useful for SM work at this time

### Rationale for Skipping
The async standup agent solves a problem the team doesn't feel strongly about. The live standup is only 15 minutes, and the team connection value outweighs the time savings. The SM note-processing time (5 min/day) is already handled by Copilot in Teams. The $200/month cost isn't justified for the marginal value.

**Would reconsider if:**
- Team grows beyond 9 people (standup gets too long)
- Team moves to multiple time zones (async becomes necessary)
- Copilot in Teams adds native standup aggregation (no Copilot Studio cost)
- The agent can participate IN the live standup as a real-time facilitator rather than replacing it

---

## Feature Tracking Log

Track all features you've evaluated in one place:

| # | Feature | Date Evaluated | Relevance (1-5) | Decision | Revisit Date |
|---|---------|---------------|-----------------|----------|--------------|
| 1 | Copilot Pages | Oct 2025 | 4 | Adopt | — |
| 2 | Copilot in Planner | Dec 2025 | 3 | Defer | Mar 2026 |
| 3 | Copilot Studio Agents (Standups) | Jan 2026 | 4 | Skip | When team >9 |
| 4 | ___ | ___ | ___ | ___ | ___ |
| 5 | ___ | ___ | ___ | ___ | ___ |

---

## Feature Sources to Monitor

| Source | Frequency | URL / Location |
|--------|-----------|----------------|
| Microsoft 365 Roadmap | Monthly | roadmap.microsoft.com |
| Microsoft 365 Blog | Weekly | techcommunity.microsoft.com |
| Microsoft Ignite / Build | Annually | ignite.microsoft.com |
| Copilot Lab | Monthly | copilot.cloud.microsoft.com/copilotlab |
| SM Community of Practice | Biweekly | Internal Teams channel |
| LinkedIn AI + Agile groups | Weekly | linkedin.com |

---

*This template pairs with 90-day-adoption-plan.md (Month 3 continuous learning) and competency-model.md (Competency 1: Tool Proficiency).*
