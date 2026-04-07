# Module 5.3: Organizational Change & Executive Influence

**Duration:** 35 minutes
**Prerequisites:** Module 5.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Translate team-level insights into organizational improvement proposals
2. Build executive-ready business cases with financial framing
3. Navigate organizational politics without positional authority
4. Drive agile adoption beyond your own teams
5. Measure and communicate organizational agility

---

## From Team Problems to Organizational Patterns

Every impediment that persists across multiple teams and multiple sprints is an organizational problem wearing a team-sized disguise. The shared designer bottleneck isn't a David Chen problem — it's a staffing model problem. Insight Engine's lack of ceremonies isn't a Kelly Park problem — it's a "the organization doesn't invest in Scrum Masters" problem. Catalyst Crew's velocity decline isn't an Ana Martinez problem — it's a tech debt governance problem.

As a Scrum Master operating at program scale, you see patterns that no one else can see — because you're the only person with visibility into all 4 teams. That pattern recognition is your superpower. But seeing the pattern isn't enough. You need to translate it into language that executives understand, build coalitions that can act on it, and drive change without the positional authority to mandate anything.

This module teaches you to be a change agent at organizational scale.

---

## Exercise 1: Pattern Aggregation (5 min)

Surface organizational patterns from team-level data. The raw material is impediments, metrics, and team health — the output is insight that no individual team could produce.

```
Analyze impediment and health data from all 4 Horizon Program teams to surface organizational patterns.

TEAM IMPEDIMENT DATA (last 3 sprints):

VELOCITY SQUAD:
- Design capacity (David): 3 sprints running, ~8 pts blocked/sprint
- PR review delays: 2 sprints, avg 2.5 days for review
- Unclear deployment pipeline ownership: 1 sprint, caused 2-day delay
- Focus time fragmentation: reported in retro but not formally tracked

CATALYST CREW:
- Tech debt: 40% of sprint capacity going to bug fixes, 3 sprints running
- Design capacity (David): 2 of 3 sprints, ~5 pts blocked/sprint
- Unclear deployment pipeline ownership: 2 sprints, caused rollback
- Knowledge silos: Sofia only person who understands indexing service

NEXUS TEAM:
- Timezone coordination: every sprint since forming (Sprint 1-4)
- No cross-team test environment: blocked integration testing Sprint 3-4
- Unclear deployment pipeline ownership: raised Sprint 2, unresolved
- Onboarding gaps: 3 of 7 team members still learning codebase

INSIGHT ENGINE:
- No SM / no ceremonies: persistent, causing quality and morale issues
- No design support: persistent, building without UX input
- Unclear deployment pipeline ownership: 3 production incidents
- No QA process: 3-5 production bugs per sprint

TEAM HEALTH TRENDS (last 3 sprints, 1-5 scale):
                        VS      CC      NT      IE
Sustainable Pace:      2.8     2.2     3.5     2.0
Psychological Safety:  3.5     2.8     3.8     2.5
Process Satisfaction:  3.2     2.5     3.0     1.8
Growth Opportunities:  3.5     3.0     3.8     2.8

Analyze for ORGANIZATIONAL patterns (not team-specific):

1. **CROSS-CUTTING IMPEDIMENTS**
   - Which impediments appear in 2+ teams?
   - What's the aggregate impact across the program?
   - Are these team problems or organizational problems?

2. **SYSTEMIC ROOT CAUSES**
   - What organizational decisions or structures cause these patterns?
   - 5 Whys for each cross-cutting impediment
   - Who owns the root cause? (hint: it's not the teams)

3. **HEALTH PATTERN ANALYSIS**
   - What's the program-wide trend?
   - Which dimensions are declining everywhere?
   - What's the correlation between impediments and health scores?

4. **COST OF INACTION**
   - What happens if these patterns continue for 3 more sprints?
   - Quantify in story points, developer days, and attrition risk
   - What's the impact on the Sprint 50 release?

5. **ORGANIZATIONAL IMPROVEMENT BACKLOG**
   - Rank the top 5 organizational improvements by impact
   - For each: effort to fix, who needs to act, expected benefit
   - Quick wins vs. strategic investments
```

### What You Should See

Clear organizational patterns:
- **#1: Deployment pipeline ownership** — affects ALL 4 teams. No one owns it. Root cause: infrastructure is a shared service with no product team accountability. Cost: ~10 developer days/sprint across the program in delays and incidents.
- **#2: Design capacity model** — affects 3 of 4 teams. Root cause: shared service model doesn't scale with product team growth. Cost: ~15-20 blocked points/sprint, plus David's attrition risk.
- **#3: SM/process investment gap** — Insight Engine has no SM, Nexus Team SM is new with no support. Root cause: organization views SM as optional overhead, not strategic investment. Cost: Insight Engine quality issues (production bugs), potential attrition of 2 devs.
- **#4: Tech debt governance** — Catalyst Crew losing 40% to bugs, no program-level tech debt strategy. Root cause: no shared definition of acceptable tech debt levels, no investment framework.
- **Health correlation:** Sustainable Pace declining across ALL teams (avg 2.6). This predicts attrition within 2-3 months if unaddressed.

---

## Exercise 2: Organizational Impediment Log (5 min)

Team impediment logs track team issues. You need a separate log for organizational impediments — issues that no single team can resolve.

**Reference: `sample-files/scaling/organizational-impediment-log.md`**

```
Create an organizational impediment log for the Horizon Program.

This is different from team impediment logs. These are issues that:
- Affect multiple teams
- Cannot be resolved by any single team
- Require organizational/leadership action
- Have been identified through cross-team pattern analysis

ORGANIZATIONAL IMPEDIMENTS TO LOG:

1. SHARED DESIGNER MODEL
   - Reported by: Velocity Squad, Catalyst Crew, Nexus Team
   - First raised: Sprint 44 (Velocity Squad)
   - Current status: Escalated to Jennifer Walsh, pending Design leadership response
   - Impact: ~15-20 pts blocked/sprint across program
   - Owner: Maria Santos (Design Director) — not yet engaged
   - Escalation path: Jennifer → Sarah Mitchell (budget) → Maria Santos

2. DEPLOYMENT PIPELINE OWNERSHIP
   - Reported by: All 4 teams
   - First raised: Sprint 45 (Insight Engine production incident)
   - Current status: Raised at SoS, no owner assigned
   - Impact: ~10 developer days/sprint in delays, 3 production incidents
   - Owner: TBD — falls between Tom Harrison (Infra) and team leads
   - Escalation path: Tom Harrison → Jennifer Walsh

3. SM INVESTMENT GAP
   - Reported by: Insight Engine (implicit), Nexus Team (implicit)
   - First raised: Sprint 46 (you noticed during 20% coverage)
   - Current status: Not formally raised — you're covering the gap
   - Impact: Insight Engine quality crisis, Nexus Team SM development
   - Owner: Jennifer Walsh (headcount decisions)
   - Escalation path: You → Jennifer Walsh

4. TECH DEBT GOVERNANCE
   - Reported by: Catalyst Crew (critical), Velocity Squad (moderate)
   - First raised: Sprint 44 (Catalyst Crew velocity decline started)
   - Current status: Ana Martinez addressing within Catalyst Crew
   - Impact: Catalyst Crew velocity decline 42→31, release risk
   - Owner: No program-level owner
   - Escalation path: Ana Martinez → Jennifer Walsh

5. CROSS-TEAM TEST ENVIRONMENT
   - Reported by: Nexus Team, Insight Engine
   - First raised: Sprint 3 (Nexus Team)
   - Current status: Not addressed
   - Impact: No integration testing possible before Sprint 50 release
   - Owner: Tom Harrison (Infra) — aware but not resourced
   - Escalation path: Tom Harrison → Jennifer Walsh

Generate an ORGANIZATIONAL IMPEDIMENT LOG with:

1. **LOG FORMAT**
   - ID, title, status, severity, teams affected
   - Date raised, days open, escalation level
   - Owner, next action, target resolution date

2. **SEVERITY FRAMEWORK**
   - How to rate organizational impediments (not just "high/medium/low")
   - Based on: teams affected, points blocked, attrition risk, release impact

3. **ESCALATION PROTOCOL**
   - When does an organizational impediment get escalated?
   - To whom, in what format?
   - What data must accompany the escalation?

4. **REVIEW CADENCE**
   - How often to review the org impediment log
   - Who should be in the review?
   - How to prevent it from becoming a graveyard of unresolved issues

5. **CONNECTION TO TEAM LOGS**
   - How team-level impediments feed into the org log
   - When a team issue becomes an org issue
   - How resolution flows back to teams
```

### What You Should See

A structured log format with:
- **Severity tiers:** Critical (release-blocking, 3+ teams, attrition risk), High (2+ teams, significant velocity impact), Medium (2+ teams, moderate impact), Low (pattern emerging, not yet critical)
- **Current status:** Deployment pipeline (Critical, 45 days open, no owner), Design capacity (Critical, 60+ days open, escalated but stalled), SM investment (High, not yet formally raised), Tech debt (High, team-level response only), Test environment (Critical for release, 30 days open)
- **Escalation protocol:** Severity Critical + open >14 days = automatic escalation to Jennifer Walsh with one-page brief. Severity Critical + open >30 days = escalation to Richard Thorne.
- **Key insight:** You have 3 Critical organizational impediments with no clear owner or resolution timeline, and the program release is 6 sprints away. This is the data that drives your executive conversations.

---

## Exercise 3: Business Case Builder (8 min)

The shared designer bottleneck affects 3 teams. "We need more designers" won't get budget. A business case with financial framing will.

**Reference: `sample-files/scaling/business-case-template.md`**

```
Help me build a business case for additional design capacity in the Horizon Program.

THE PROBLEM:
David Chen (UX Designer) is shared across Velocity Squad, Catalyst Crew, and Nexus Team. Insight Engine has no design support at all.

QUANTIFIED IMPACT (I need help calculating):

Developer idle time:
- 15-20 story points blocked per sprint across 3 teams
- Average developer cost: $85/hour (fully loaded, Accenture internal rate)
- Average sprint: 10 working days
- When a developer is blocked on design, they can do OTHER work, but it's usually lower-priority work that wouldn't otherwise be done this sprint

Delivery delay:
- Sprint 50 release target: 3 features depend on David's design work
- If David can't complete all design work: minimum 1-sprint delay
- Cost of 1-sprint delay to Horizon Program release: [need to estimate]

Quality cost:
- Insight Engine building without design: 3-5 production bugs/sprint requiring rework
- Catalyst Crew: Sofia Reyes bypassing design = inconsistent UX, rework later
- Estimated rework cost when design is skipped: [need to estimate]

Attrition risk:
- David Chen: privately considering leaving. Replacement cost + ramp time?
- 2 Insight Engine devs exploring transfers. Replacement cost?

THE ASK:
Option A: One dedicated designer for Horizon Program (permanent headcount)
Option B: Contract designer for 6 months ($X) while permanent hire is approved
Option C: Part-time designer (0.5 FTE dedicated to Horizon, rest to other programs)

AUDIENCE: Jennifer Walsh (VP), who will take it to Sarah Mitchell (budget) and Maria Santos (Design Director)

Build a ONE-PAGE BUSINESS CASE with:

1. **EXECUTIVE SUMMARY** (3 sentences max)
   - Problem, cost, solution

2. **COST OF CURRENT STATE** (quantified)
   - Developer idle/misallocation cost per sprint
   - Delivery delay cost (in weeks to market and developer cost)
   - Quality/rework cost
   - Attrition risk cost (replacement + ramp)
   - TOTAL: annual cost of doing nothing

3. **PROPOSED SOLUTION** (3 options with cost)
   - Option A: cost, timeline, benefit
   - Option B: cost, timeline, benefit
   - Option C: cost, timeline, benefit
   - Recommended option and why

4. **ROI CALCULATION**
   - Investment cost vs. recovered capacity
   - Payback period
   - Beyond financial: team health, retention, velocity improvement

5. **RISK OF INACTION**
   - What happens in the next 3 sprints without action
   - Impact on Sprint 50 release
   - David Chen attrition scenario

6. **DECISION REQUESTED**
   - Specific ask
   - By when
   - From whom

Make the numbers realistic for an Accenture internal products team.
Use conservative estimates — credibility matters more than dramatic numbers.
```

### What You Should See

A business case with realistic numbers:
- **Cost of current state:** ~$25,000-35,000/sprint in blocked developer capacity (conservative: 15 pts blocked x ~2 developer days/pt x $85/hr x 8 hrs). Annual: $650K-900K.
- **Rework cost:** $15,000-20,000/sprint for design-skipped features requiring later redesign
- **Attrition risk:** David replacement = $30K-50K recruiting + 3-month ramp. Two Insight Engine devs = $60K-100K + ramp.
- **Option B recommended:** Contract designer at ~$120K for 6 months. Payback in <2 sprints from recovered blocked capacity alone.
- **ROI:** 3:1 to 5:1 depending on assumptions. Even conservative estimates show the contractor pays for itself within the first month.
- **Decision requested:** "Approve 6-month design contractor by [date]. Every sprint we wait costs ~$30K in blocked capacity and increases the risk of missing our Sprint 50 release."

---

## Exercise 4: Influence Without Authority (7 min)

You have no positional power. You can't hire designers, approve budgets, or reorganize teams. But you can influence every person who can. Map your influence strategy.

**Reference: `sample-files/scaling/influence-map-template.md`**

```
Help me build an influence map and strategy for driving organizational change in the Horizon Program.

I need to influence decisions on:
A) Design capacity (hire/contract a designer)
B) Deployment pipeline ownership (assign clear ownership)
C) Dedicated SM for Insight Engine (new headcount or reallocation)

STAKEHOLDER MAP:

Jennifer Walsh — VP Internal Digital Products
- My direct reporting line
- Sympathetic to all 3 issues
- Constrained by budget cycle and peer relationships
- Needs data to take to her peers
- INFLUENCE LEVEL: High (can approve B, can advocate for A and C)

Richard Thorne — CKO / Executive Sponsor
- Cares about delivery speed and innovation
- Doesn't understand agile deeply — speaks in business outcomes
- Has budget authority but delegates to VPs
- Attends sprint reviews occasionally
- INFLUENCE LEVEL: Very High (can approve A and C, can mandate B)

Sarah Mitchell — MD Strategy
- Controls budget conversations for internal products
- Thinks in ROI and cost avoidance
- Skeptical of "agile overhead" — wants to see measurable impact
- Doesn't attend team ceremonies
- INFLUENCE LEVEL: High (budget gatekeeper for A and C)

Maria Santos — Design Director
- Owns designer allocation across all programs
- Defensive about her team's capacity ("we're doing the best we can")
- Feels like teams blame design for their problems
- Not involved in Horizon Program directly
- INFLUENCE LEVEL: Medium (can reallocate David's time, can support headcount request)

Tom Harrison — Infrastructure Lead
- Shared across all internal products teams
- Pragmatic, understands the pipeline problem
- Willing to own it if given resources
- Currently spread too thin to take on more
- INFLUENCE LEVEL: Medium (can own B if resourced)

Ana Martinez — Catalyst Crew SM
- Ally, experiencing the same problems
- Can provide additional data and testimony
- Influential with Jennifer through her own reporting
- INFLUENCE LEVEL: Low (no org authority, but valuable ally)

Chris Wong — Nexus Team SM
- Junior SM but strong technical credibility
- Can speak to timezone and integration challenges
- Respected by Richard Thorne for technical insight
- INFLUENCE LEVEL: Low (no org authority, but credible technical voice)

For each change initiative (A, B, C), generate:

1. **INFLUENCE PATH**
   - Who do I talk to first, second, third?
   - What does each person need to hear?
   - Who influences whom?

2. **STAKEHOLDER-SPECIFIC MESSAGING**
   - For each stakeholder: their concern, my message, the frame that resonates
   - What language to use, what language to avoid
   - What question they'll ask, how I answer

3. **COALITION BUILDING**
   - Who are my natural allies?
   - Who needs to be neutralized (from opponent to neutral)?
   - Who needs to be activated (from neutral to supporter)?

4. **TIMING AND SEQUENCING**
   - What conversations happen before the formal ask?
   - What meetings or events are natural venues?
   - How do I create momentum?

5. **COMMON MISTAKES TO AVOID**
   - Influence tactics that backfire in corporate settings
   - How to avoid being seen as "political" or "going around people"
   - How to push without damaging relationships
```

### What You Should See

Distinct influence paths per initiative:

**Design capacity (A):**
- Path: Jennifer (data) → Maria Santos (collaborative framing) → Sarah Mitchell (ROI) → Richard Thorne (if needed)
- Maria Santos message: "Your designer is being set up to fail. Let's work together on a solution that protects David and serves the teams." NOT "we need more designers because your team isn't giving us enough."
- Sarah Mitchell message: "We're spending $30K/sprint in blocked developer time because of a $60K/6-month contractor gap. Here's the ROI."
- Coalition: Ana and Chris provide corroborating data. Jennifer presents to Sarah (more credible than you on budget).

**Deployment pipeline (B):**
- Path: Tom Harrison (get his buy-in) → Jennifer (get him resourced) → Done
- Simplest initiative. Tom wants to own it. He just needs 1 day/sprint protected for Horizon.

**Insight Engine SM (C):**
- Path: Jennifer (frame as risk) → Richard Thorne (delivery speed angle)
- Hardest sell — new headcount. Frame: "We're spending 20% of a senior SM's time (mine) on emergency coverage. A dedicated junior SM at $X would free me for program coordination AND stabilize Insight Engine."

---

## Exercise 5: Organizational Agility Assessment (5 min)

Before you can improve organizational agility, you need to know where you stand. Create a lightweight assessment.

```
Help me create a lightweight organizational agility assessment for the Horizon Program division.

I don't want a full SAFe assessment or multi-week engagement. I need something I can do in 2 hours that gives directional insight.

WHAT I CAN OBSERVE (without surveys or interviews):
- 4 teams with varying agile maturity
- Program-level ceremonies (SoS exists, no PI planning yet)
- Leadership engagement (Jennifer attends reviews, Richard occasionally)
- Cross-team collaboration patterns
- Decision-making speed
- How impediments flow through the organization
- How budgets and resources are allocated

DIMENSIONS TO ASSESS:

1. Team-Level Agility
   - Do teams have stable membership?
   - Do teams have the skills they need (or access to them)?
   - Are ceremonies happening and effective?
   - Can teams deliver independently?

2. Program-Level Coordination
   - Are cross-team dependencies managed?
   - Is there a shared cadence?
   - Can teams integrate their work?
   - Is there program-level visibility?

3. Organizational Support
   - Does leadership understand and support agile?
   - Are resources allocated to enable agility?
   - How fast do organizational impediments get resolved?
   - Is there investment in SM/agile coaching capacity?

4. Continuous Improvement
   - Do retrospective insights drive organizational change?
   - Is there a mechanism for bottom-up improvement?
   - How does the organization learn from failures?
   - Is experimentation encouraged or punished?

5. Technical Agility
   - Can teams deploy independently?
   - Is there automated testing?
   - How long from code complete to production?
   - Is technical debt managed strategically?

For each dimension, generate:

1. **ASSESSMENT CRITERIA** (3-5 questions scored 1-5)
2. **CURRENT STATE** (based on what I've described about Horizon Program)
3. **TARGET STATE** (where we should be in 6 months)
4. **GAP ANALYSIS** (biggest gaps between current and target)
5. **TOP IMPROVEMENT** (single highest-impact action per dimension)

Format as a one-page scorecard I can share with Jennifer Walsh.
```

### What You Should See

A scorecard revealing:
- **Team-Level Agility:** 3.0/5 (Velocity Squad pulls the average up; Insight Engine pulls it down)
- **Program-Level Coordination:** 2.0/5 (SoS exists but reactive; no PI planning; no integration testing)
- **Organizational Support:** 2.5/5 (Jennifer supportive but constrained; no SM investment; slow impediment resolution)
- **Continuous Improvement:** 2.0/5 (Team retros happen but org-level learning is absent; impediments persist for months)
- **Technical Agility:** 2.5/5 (No shared deployment pipeline; no cross-team test environment; tech debt unmanaged)

Overall: 2.4/5. The Horizon Program has pockets of agility (Velocity Squad) but the organization isn't set up to support agile at scale. The biggest gaps are in program coordination and organizational support — exactly the areas where your role as SM/program coordinator can have the most impact.

---

## Exercise 6: The Executive Pitch (5 min)

You have 5 minutes with Richard Thorne (CKO, executive sponsor). He's between meetings. Make the case for the organizational changes the Horizon Program needs.

**Reference: `sample-files/scaling/executive-pitch-template.md`**

```
Help me prepare a 5-minute executive pitch to Richard Thorne (CKO).

CONTEXT:
- Richard is the executive sponsor of the Horizon Program
- He cares about: delivery speed, innovation, talent retention, Accenture's competitive position
- He does NOT care about: agile terminology, process details, Scrum ceremonies
- He speaks in: business outcomes, risk, ROI, competitive advantage
- He has 5 minutes between meetings. I need to be crisp.
- Jennifer Walsh suggested I talk to him directly because she needs his backing

WHAT I WANT TO ACHIEVE:
1. Get his awareness of 3 organizational risks to the Horizon Program
2. Get his support for the design capacity investment (business case ready)
3. Plant the seed for a dedicated Insight Engine SM
4. Get a follow-up meeting (30 min) to go deeper

THE THREE ASKS (in priority order):

ASK 1: Design Capacity
- Problem: Single designer across 4 teams. $30K/sprint in blocked capacity.
- Solution: 6-month design contractor. $60K investment. 3:1 ROI.
- Risk if no action: Sprint 50 release at risk. David Chen attrition risk.

ASK 2: Deployment Pipeline Ownership
- Problem: No owner. All 4 teams affected. 3 production incidents.
- Solution: Assign Tom Harrison with 1 protected day/sprint for Horizon.
- Risk if no action: Integration failures before Sprint 50 release.

ASK 3: Insight Engine Stabilization
- Problem: No SM, no ceremonies, quality declining, 2 devs considering transfers.
- Solution: Dedicated junior SM (or redeploy from another program).
- Risk if no action: Team attrition, production quality continues to decline.

Generate:

1. **OPENING** (30 seconds)
   - Hook that grabs his attention
   - Frame: business risk, not process complaint
   - One sentence that makes him lean in

2. **THE THREE RISKS** (3 minutes)
   - 1 minute per risk
   - Problem → Cost → Solution → Ask
   - Business language, not agile language
   - Specific numbers

3. **THE CLOSE** (1 minute)
   - What I need from him specifically
   - What happens if he says yes
   - What happens if he says "not now"
   - Ask for the follow-up meeting

4. **ANTICIPATED PUSHBACK**
   - "We don't have budget for this" → response
   - "Can't the teams just work around it?" → response
   - "This sounds like a process problem, not a business problem" → response
   - "I'll talk to Jennifer about it" → response (this is a deflection)

5. **LEAVE-BEHIND**
   - One-page summary he can forward to Sarah Mitchell
   - Key numbers only, no jargon
   - Clear decision requested with deadline
```

### What You Should See

A pitch script like:

**Opening:** "Richard, we have a $120K annual leak in the Horizon Program that we can fix for $60K, and if we don't, we're going to miss our Sprint 50 release date and likely lose two engineers. Can I walk you through the three risks and what I'm asking for?"

**Risk 1 (Design):** "One designer serving four teams. Fifteen to twenty story points blocked every sprint — that's roughly $30,000 in developer capacity sitting idle waiting for designs. A six-month contractor at $60K pays for itself in two sprints. Jennifer has the business case ready if you'll greenlight the conversation with Sarah."

**Risk 2 (Pipeline):** "We've had three production incidents because nobody owns the deployment pipeline. Tom Harrison can fix this with one protected day per sprint — no budget needed, just your directive that Horizon gets priority on his time."

**Risk 3 (Insight Engine):** "The analytics team has no Scrum Master, no process, and two developers exploring transfers. I'm covering it at 20% but that's not sustainable. A junior SM hire would cost less than replacing one of those engineers. This one can wait for our follow-up — I want to go deeper on the data."

**Close:** "What I need: your support for the design contractor conversation with Sarah, a directive to Tom on pipeline ownership, and thirty minutes next week to walk through the Insight Engine situation. If we move on the first two this month, I'm confident we'll hit the Sprint 50 release."

**Pushback handling:**
- "No budget" → "The contractor costs less than what we're losing every two sprints in blocked capacity. This is cost avoidance, not new spending."
- "Work around it" → "We've been working around it for four months. The workarounds are why Catalyst Crew's velocity dropped 26% and our designer is considering leaving."
- "Talk to Jennifer" → "Jennifer is aligned and has the business case ready. What she needs is your backing when she takes it to Sarah. Can I tell her you're supportive?"

---

> **Signals to Watch For**
>
> As you drive organizational change, watch for:
> - Your business case gets "acknowledged" but not acted on → Follow up with specific deadlines and consequences of delay
> - Stakeholders agree in private but don't support in public → You need a stronger coalition; go back to ally building
> - You're asked to "just make it work" without resources → This is a common deflection. Quantify what "making it work" actually costs.
> - Quick wins are available but you're focused on big changes → Take the quick wins. They build credibility for the bigger asks.
> - You start feeling like a lobbyist instead of an SM → That's normal at this level. Organizational change IS the impediment removal. Embrace it.

---

## When This Doesn't Work

- **The business case is rejected:** Don't give up. Ask what data or framing would change the decision. Resubmit in the next budget cycle with additional evidence. In the meantime, maximize mitigations (design system, developer design skills, sprint-ahead planning).
- **Richard says "not now":** "Not now" means "convince me harder" or "the timing isn't right." Ask: "What would need to change for this to be the right time?" and "What can we do in the meantime to manage the risk?"
- **Maria Santos feels attacked:** You've failed at coalition building. Repair the relationship immediately. Schedule a 1:1, acknowledge that the situation is hard for her team too, and ask how you can work together. She needs to be part of the solution, not the target.
- **The organizational impediment log grows but nothing gets resolved:** Escalate the LOG ITSELF as a pattern. "We have 5 critical organizational impediments with an average age of 45 days. At this rate, 3 of them will still be open when we try to release in Sprint 50."
- **You burn out trying to change the organization:** Remember that organizational change is measured in months and quarters, not sprints. Pick your battles. Win one, then leverage that credibility for the next.

### When NOT to Use Copilot for Organizational Change

Not every organizational challenge benefits from AI assistance. Use your judgment:

- **Sensitive political conversations** — Copilot can help you prepare talking points, but never share confidential organizational politics or personnel decisions with AI
- **Relationship building** — Stakeholder trust is built through human interaction, not AI-generated emails
- **Reading the room** — No AI can replace your ability to sense when a meeting is going sideways or when an executive needs reassurance rather than data
- **Low-stakes decisions** — If the decision is simple and you have the context, just make it. Not everything needs an AI-generated analysis

---

## Module Complete!

You now know how to:
- Aggregate team impediments into organizational patterns that leadership can act on
- Maintain an organizational impediment log separate from team logs
- Build financial business cases that speak executive language
- Map stakeholders and design influence strategies without positional authority
- Assess organizational agility with a lightweight scorecard
- Deliver a crisp executive pitch that drives decisions

---

## What's Next

**Level 5 Complete!** You've built the skills to operate at program and organizational scale:
- Module 5.1: Role fluency across 7 SM modes, adapted to team maturity
- Module 5.2: Multi-team coordination, release planning, SM community of practice
- Module 5.3: Organizational change, business cases, executive influence

Continue to **Level 6** or revisit earlier modules to deepen specific skills.

---

## Quick Reference

### Pattern Aggregation
```
Analyze impediment data from [X] teams. Surface cross-cutting patterns.
Teams: [list with impediment data].
For each pattern: evidence, root cause, aggregate impact, cost of inaction.
Rank by program-level impact. Generate organizational improvement backlog.
```

### Organizational Impediment Log
```
Create organizational impediment log.
Issues: [list affecting multiple teams].
Format: ID, severity, teams affected, days open, owner, escalation level.
Include severity framework and escalation protocol.
```

### Business Case
```
Build one-page business case for [investment].
Problem: [quantified impact]. Solution: [options with cost].
Audience: [who decides].
Include: cost of current state, ROI, risk of inaction, specific ask.
Use conservative estimates. Financial framing, not agile jargon.
```

### Influence Map
```
Build influence strategy for [change initiative].
Stakeholders: [list with role, motivation, influence level].
Generate: influence path, stakeholder-specific messaging,
coalition building plan, timing, mistakes to avoid.
```

### Agility Assessment
```
Lightweight organizational agility assessment.
Dimensions: team agility, program coordination, org support,
continuous improvement, technical agility.
Score current state, define target, identify gaps, top action per dimension.
One-page scorecard format.
```

### Executive Pitch
```
5-minute executive pitch to [name, role].
They care about: [motivations]. They don't care about: [what to skip].
Three asks: [list with problem, cost, solution, risk].
Generate: opening hook, 1-min per risk, close with specific ask,
anticipated pushback with responses, one-page leave-behind.
```

---

**You've completed Level 5: Scaling & Organizational Impact. The Horizon Program is in better hands.**
