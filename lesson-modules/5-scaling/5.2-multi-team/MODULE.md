# Module 5.2: Multi-Team Coordination & Program Support

**Duration:** 40 minutes
**Prerequisites:** Module 5.1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Facilitate Scrum of Scrums and cross-team synchronization ceremonies
2. Manage cross-team dependencies and surface risks early
3. Coordinate release planning across 4 teams
4. Handle inter-team resource conflicts without damaging relationships
5. Create program-level transparency without adding overhead

---

## The Coordination Tax

The Horizon Program has 4 teams building interconnected products. Velocity Squad's API changes affect Nexus Team's mobile notifications. Catalyst Crew's search indexing depends on Insight Engine's analytics pipeline. Every team thinks they're independent — until a dependency bites them mid-sprint.

Your job isn't to manage all of this directly. It's to create systems that make dependencies visible, conflicts resolvable, and information flowing — without turning yourself into a bottleneck or burying teams in meetings.

| Coordination Challenge | Root Cause | SM Approach |
|----------------------|------------|-------------|
| **Surprise dependencies** | No visibility across backlogs | Dependency mapping, SoS |
| **Resource conflicts** | Shared people (David, Tom) | Priority frameworks, negotiation |
| **Integration failures** | No cross-team testing | Release planning, integration sprints |
| **Information silos** | Teams don't talk to each other | Lightweight sync mechanisms |
| **Conflicting priorities** | No program-level roadmap | Program increment planning |

---

## Exercise 1: SoS Preparation Brief (5 min)

The Scrum of Scrums is only as good as the preparation. Synthesize all 4 teams into a single-page brief.

**Reference: `sample-files/scaling/horizon-program-status.md`**

```
Help me prepare a Scrum of Scrums brief for the Horizon Program.

I need to synthesize data from 4 teams into a single page Jennifer Walsh can scan in 2 minutes.

TEAM DATA:

VELOCITY SQUAD (you, SM) — Core Platform
- Sprint 47, Day 8 of 10
- Velocity: 42 pts committed, 34 completed so far
- Sprint goal: "Complete notification system MVP" — ON TRACK
- Blockers: David (designer) availability for dashboard mockups
- Risk: Push notification story (8 pts) may carry over again
- Dependency OUT: API v2 endpoints needed by Nexus Team (Sprint 48)

CATALYST CREW (Ana Martinez, SM) — Search & Discovery
- Sprint 23, Day 6 of 10
- Velocity: 35 pts committed, 18 completed so far
- Sprint goal: "Stabilize search indexing pipeline" — AT RISK
- Blockers: Tech debt in indexing service causing 40% of sprint on bug fixes
- Risk: Sofia Reyes (senior dev) openly frustrated, team morale low
- Dependency OUT: Search API consumed by Insight Engine
- Velocity trend: 42 → 38 → 35 → 31 (4-sprint decline)

NEXUS TEAM (Chris Wong, SM) — Mobile & Notifications
- Sprint 4, Day 3 of 10
- Velocity: 28 pts committed (still calibrating)
- Sprint goal: "Push notification prototype on iOS" — ON TRACK
- Blockers: Waiting on Velocity Squad API v2 (not available until Sprint 48)
- Risk: Timezone coordination (PST/BRT/JST/GST) causing standup gaps
- Dependency IN: Needs Velocity Squad API v2 endpoints

INSIGHT ENGINE (no SM, you cover 20%) — Analytics & Reporting
- No formal sprints — Kelly Park (PO) assigns work ad hoc
- Currently building: Real-time dashboard, report builder
- Blockers: No design support (David doesn't cover this team), no QA process
- Risk: 3 production bugs last month, 2 devs asking about transfers
- Dependency IN: Needs Catalyst Crew search API for analytics

Generate a ONE-PAGE SoS BRIEF with:

1. **PROGRAM HEALTH DASHBOARD** (traffic light per team)
   - Delivery status
   - Team health
   - Key risk

2. **CROSS-TEAM DEPENDENCIES** (what blocks whom)
   - Active dependencies this sprint
   - Upcoming dependencies next sprint
   - Unresolved dependency risks

3. **SHARED RESOURCE STATUS**
   - David Chen (UX): allocation and conflicts this sprint
   - Tom Harrison (Infra): allocation and conflicts this sprint

4. **DISCUSSION ITEMS FOR SoS** (max 3)
   - The most important cross-team issues to resolve TODAY
   - Who needs to be in the conversation
   - Proposed resolution or decision needed

5. **ACTIONS FROM LAST SoS**
   - Status of each (done/in-progress/blocked)
```

### What You Should See

A scannable brief with:
- **Traffic lights:** Velocity Squad (Green), Catalyst Crew (Red), Nexus Team (Yellow), Insight Engine (Red)
- **Critical dependency chain:** Velocity Squad API v2 → Nexus Team mobile → end users. If API v2 slips, Nexus Team's Sprint 5 goal is at risk.
- **Discussion items:** (1) Catalyst Crew needs intervention — velocity decline is accelerating, (2) Insight Engine stabilization — production bugs and attrition risk, (3) API v2 timeline confirmation for Nexus Team planning
- **Shared resource conflicts:** David is overcommitted — Velocity Squad dashboard mockups and Catalyst Crew search UI redesign both due this sprint

---

## Exercise 2: Cross-Team Dependency Map (5 min)

Dependencies kill programs. Make them visible before they bite.

**Reference: `sample-files/scaling/cross-team-dependency-map.md`**

```
Build a cross-team dependency map for the Horizon Program.

I need to see ALL dependencies between our 4 teams — active, upcoming, and potential.

KNOWN DEPENDENCIES:

ACTIVE (this sprint):
- Nexus Team WAITING ON Velocity Squad: API v2 push notification endpoints
  Status: Velocity Squad finishing Sprint 47, endpoints planned for Sprint 48
  Impact if late: Nexus Team Sprint 5 goal blocked

- Insight Engine WAITING ON Catalyst Crew: Search API for analytics dashboard
  Status: Catalyst Crew search indexing pipeline unstable
  Impact if late: Insight Engine dashboard shows stale/incorrect data

UPCOMING (next 2 sprints):
- Catalyst Crew NEEDS Velocity Squad: Authentication token refresh for search
  When: Sprint 49
  Risk: Not yet in Velocity Squad backlog

- Nexus Team NEEDS Insight Engine: Analytics events SDK for mobile
  When: Sprint 6
  Risk: Insight Engine has no formal sprint planning to commit

- All teams NEED Tom Harrison (Infra): Production environment scaling
  When: Before program release (Sprint 50)
  Risk: Tom is shared across all of Accenture Internal Products

POTENTIAL (not yet confirmed):
- Velocity Squad may need Catalyst Crew: Shared component library
  When: Uncertain
  Risk: No discussion started

Generate:

1. **DEPENDENCY MATRIX**
   - Table showing team-to-team dependencies
   - Direction (who depends on whom)
   - Status (green/yellow/red)
   - Date needed vs. date expected

2. **CRITICAL PATH**
   - Which dependency chain is the longest/riskiest?
   - What's the program-level impact if it breaks?
   - What's the earliest we'd know it's broken?

3. **RISK HEAT MAP**
   - Rank dependencies by (probability of delay × impact of delay)
   - Top 3 risks with mitigation options

4. **DEPENDENCY MANAGEMENT ACTIONS**
   - What should be discussed at next SoS?
   - What needs Jennifer Walsh's attention?
   - What can SMs resolve directly?

5. **EARLY WARNING SYSTEM**
   - For each critical dependency, what signal tells us it's slipping?
   - Who should be watching?
   - At what point do we escalate?
```

### What You Should See

A clear dependency map revealing:
- **Critical path:** Velocity Squad API v2 → Nexus Team mobile → program release. This is the longest chain and the one with least slack.
- **Highest risk:** Insight Engine's lack of formal sprints means they can't reliably commit to the analytics events SDK that Nexus Team needs in Sprint 6
- **Hidden risk:** The authentication token refresh dependency hasn't been discussed — Catalyst Crew is already struggling with velocity. Adding this dependency to their backlog will make things worse.
- **Tom Harrison:** Single point of failure for infrastructure across all 4 teams. His availability for Sprint 50 scaling work needs to be locked down NOW.

---

## Exercise 3: Resource Competition Negotiation (8 min)

Velocity Squad and Catalyst Crew both need David Chen (UX designer) urgently this sprint. You need to negotiate with Ana Martinez.

```
Simulate a negotiation between me and Ana Martinez (Catalyst Crew SM) about David Chen's time.

SITUATION:
David has approximately 3 design days available this sprint (he's shared across teams). Both teams claim they need him urgently.

MY POSITION (Velocity Squad):
- Need David for dashboard mockups (notification system MVP)
- This is our Sprint 47 goal — committed to stakeholders
- Jennifer Walsh specifically asked about this in last review
- Estimate: 2 design days needed
- If we don't get David: Sprint goal at risk, feature demo postponed

ANA'S POSITION (Catalyst Crew):
- Need David for search results UI redesign
- Their search indexing is unstable — UI changes could reduce user-facing impact
- Sofia Reyes (senior dev) is frustrated and threatening to "just build it without design"
- Estimate: 2.5 design days needed
- If they don't get David: Sofia might bypass design entirely, quality drops further

CONSTRAINTS:
- David has 3 days total this sprint
- He can't effectively split across both teams (context switching kills him)
- Neither team can easily delay to next sprint without consequences
- Jennifer Walsh doesn't want to make this call — she wants the SMs to work it out

Play Ana Martinez in this negotiation. Be realistic — she's experienced, cares about her team, and is under pressure. Don't make her a pushover.

After 3-4 exchanges, break character and analyze:

1. What negotiation approach works here?
2. What's the optimal split (if any)?
3. What creative solutions exist beyond splitting David's time?
4. How do I maintain my relationship with Ana through this conflict?
5. What systemic fix prevents this from recurring?
```

### What You Should See

A realistic negotiation simulation where Ana pushes back hard. She might argue:
- "Your team has been getting David 60% of the time for months. It's our turn."
- "Sofia is about to go rogue on design — that's a bigger risk than your demo being delayed."
- "Jennifer cares about Catalyst Crew's velocity decline too."

Creative solutions beyond splitting:
- **Velocity Squad:** Can Lisa (senior dev) create wireframe sketches that David reviews in 30 min instead of designing from scratch? (Reduce 2 days to 0.5 days)
- **Catalyst Crew:** Can Sofia pair with David for 1 day to create a design system component she can reuse? (Invest 1 day, save future design time)
- **Both:** Propose a design sprint where David works with both teams simultaneously on shared components
- **Systemic:** This is the evidence for the influence campaign from Module 5.1 Exercise 6

---

## Exercise 4: Program Sprint Report (7 min)

Jennifer Walsh wants a consolidated program report. Make it useful, not bureaucratic.

**Reference: `sample-files/scaling/program-sprint-report-template.md`**

```
Create a consolidated Horizon Program sprint report for Jennifer Walsh.

AUDIENCE: Jennifer Walsh (VP), cc: Richard Thorne (CKO), Sarah Mitchell (MD Strategy)

PURPOSE: Give leadership a clear picture of program health without requiring them to attend every team's ceremonies.

DATA (end of current sprint cycle):

VELOCITY SQUAD — Sprint 47 Complete
- Committed: 42 pts | Completed: 38 pts | Carryover: 4 pts (push notification edge cases)
- Sprint goal: "Complete notification system MVP" — ACHIEVED (95%)
- Highlights: Search optimization shipped (45% faster), API rate limiting complete
- Risks: David availability continues to constrain dashboard work
- Next sprint focus: API v2 endpoints (cross-team dependency for Nexus)

CATALYST CREW — Sprint 23 Complete
- Committed: 35 pts | Completed: 27 pts | Carryover: 8 pts
- Sprint goal: "Stabilize search indexing pipeline" — PARTIALLY MET
- Highlights: Core indexing bugs fixed, 60% reduction in error rate
- Risks: Velocity decline continuing (31 → 27 actual). Sofia Reyes disengagement.
- Next sprint focus: Search results reliability, tech debt paydown

NEXUS TEAM — Sprint 4 Complete
- Committed: 28 pts | Completed: 24 pts | Carryover: 4 pts
- Sprint goal: "Push notification prototype on iOS" — ACHIEVED
- Highlights: First successful end-to-end notification on device
- Risks: API v2 dependency on Velocity Squad. Timezone gaps causing rework.
- Next sprint focus: Android prototype, API integration (pending Velocity Squad)

INSIGHT ENGINE — Period Review (no sprints)
- Delivered: Real-time dashboard v1, 2 custom reports
- Quality: 3 production bugs (down from 5 last period)
- Risks: No QA process, no retrospectives, 2 devs exploring transfers
- Stabilization: Introduced weekly 15-min retro (attendance: 4 of 6)
- Next focus: Report builder, analytics events SDK (Nexus dependency)

PROGRAM-LEVEL:
- Cross-team dependencies: 2 active, 3 upcoming
- Shared resource conflicts: David (design) — critical. Tom (infra) — upcoming.
- Program release target: Sprint 50 (6 sprints away)

Generate a PROGRAM SPRINT REPORT with:

1. **EXECUTIVE SUMMARY** (5 bullets max)
   - Overall program health
   - Key wins
   - Key risks
   - Decisions needed

2. **TEAM HEALTH GRID**
   - Table: Team | Delivery | Health | Trend | Top Risk
   - Traffic light status per dimension

3. **CROSS-TEAM DEPENDENCY STATUS**
   - What's on track, what's at risk
   - Impact on program release timeline

4. **DECISIONS NEEDED FROM LEADERSHIP**
   - Specific asks, framed as decisions not complaints
   - What happens if we don't decide

5. **LOOK-AHEAD (next 2 sprints)**
   - What's coming that leadership should know about
   - Early warnings

Keep it under 1 page. Use tables for density.
Tone: Confident, transparent, solution-oriented.
```

### What You Should See

A crisp one-page report with:
- **Executive summary:** "Program is delivering but under strain. Velocity Squad and Nexus Team on track. Catalyst Crew needs intervention. Insight Engine stabilizing slowly."
- **Health grid:** Clear red/yellow/green per team
- **Decision needed:** "Design capacity: 3 of 4 teams blocked by single designer. Request approval for 6-month design contractor ($X). Without this, Sprint 50 release is at risk."
- **Look-ahead:** "Sprint 49: Catalyst Crew authentication dependency on Velocity Squad not yet planned. Sprint 50: Tom Harrison infrastructure work is single point of failure for release."

---

## Exercise 5: Release Train Planning (10 min)

The Horizon Program has a coordinated release in 3 sprints. All 4 teams need to deliver interlocking features. Plan the train.

**Reference: `sample-files/scaling/release-planning-scenario.md`**

```
Help me plan a coordinated release across the Horizon Program.

RELEASE: Horizon Platform v1.0
TARGET: End of Sprint 50 (6 weeks from now)
STAKEHOLDER EXPECTATION: All 4 products integrated and demonstrable to Accenture leadership

WHAT MUST SHIP:

VELOCITY SQUAD (Core Platform):
- API v2 with push notification support ← Nexus Team depends on this
- Authentication token refresh ← Catalyst Crew depends on this
- Dashboard with real-time metrics ← Needs David (design)
- Performance: <200ms API response time

CATALYST CREW (Search & Discovery):
- Stable search indexing (current error rate: 2%, target: 0.1%)
- Search results UI redesign ← Needs David (design)
- Search API v3 ← Insight Engine depends on this
- Full-text search across all content types

NEXUS TEAM (Mobile & Notifications):
- iOS push notifications (end-to-end)
- Android push notifications (end-to-end)
- Mobile search integration ← Depends on Catalyst Crew search API
- Offline mode for core features

INSIGHT ENGINE (Analytics & Reporting):
- Real-time analytics dashboard
- Custom report builder
- Analytics events SDK ← Nexus Team depends on this
- Search analytics ← Depends on Catalyst Crew search API

SHARED DEPENDENCIES:
- David Chen: Design work needed by Velocity Squad, Catalyst Crew, Nexus Team
- Tom Harrison: Infrastructure scaling needed by all teams before release
- Integration testing: No cross-team test environment exists yet

CONSTRAINTS:
- Catalyst Crew velocity declining — can they deliver?
- Insight Engine has no sprint cadence — can they commit?
- David has ~3 design days per sprint across ALL teams
- Tom Harrison has 2 days/sprint for Horizon (shared with other programs)
- No dedicated QA — each team tests their own code

Help me create:

1. **RELEASE PLAN TIMELINE**
   - Sprint 48, 49, 50: What each team delivers when
   - Dependency sequencing: What must finish before what can start
   - Critical path through all 4 teams

2. **DEPENDENCY RESOLUTION SCHEDULE**
   - When each cross-team dependency must be delivered
   - Buffer time between delivery and consumption
   - What happens if a dependency slips

3. **SHARED RESOURCE ALLOCATION**
   - David Chen: Sprint-by-sprint allocation across teams
   - Tom Harrison: When he's needed and for what
   - Conflict resolution protocol

4. **RISK REGISTER**
   - Top 5 risks to the release
   - Probability and impact for each
   - Mitigation plan
   - Risk owner

5. **INTEGRATION PLAN**
   - When do teams first integrate?
   - What does cross-team testing look like?
   - Who owns the integration environment?
   - Sprint 50: Hardening/stabilization plan

6. **CONTINGENCY PLAN**
   - What's the minimum viable release if something slips?
   - Which features can be descoped?
   - At what point do we delay the release?
   - Communication plan if we need to adjust scope

7. **PROGRAM INCREMENT PLANNING SESSION**
   - Agenda for a 2-hour planning session with all 4 teams
   - What each team should prepare
   - How to facilitate dependency negotiation
   - Output: Committed plan with confidence vote
```

### What You Should See

A detailed release plan revealing:
- **Critical path:** Velocity Squad API v2 (Sprint 48) → Nexus Team iOS integration (Sprint 49) → Cross-team integration testing (Sprint 50). Zero slack.
- **Biggest risk:** Catalyst Crew may not stabilize search indexing in time. Their velocity decline means they're likely to deliver 25-28 pts/sprint, not the ~35 needed. Mitigation: Descope full-text search, focus on stability.
- **David allocation:** Sprint 48: Velocity Squad (dashboard), Sprint 49: Catalyst Crew (search UI), Sprint 50: Bug fixes only. This means Nexus Team gets zero design time — they need to work from existing patterns.
- **Tom Harrison:** Must start infrastructure work in Sprint 48. If he's pulled to other programs, release is at risk. Jennifer needs to protect his allocation.
- **Minimum viable release:** Ship without Insight Engine analytics events SDK (Nexus Team uses mock data) and without Catalyst Crew full-text search. This buys 1 sprint of buffer.
- **PI planning session:** Each team presents their sprint plans, dependencies are negotiated live, confidence vote (fist of five) determines if the plan is realistic.

---

## Exercise 6: SM Community of Practice (5 min)

Three SMs in the Horizon Program (you, Ana Martinez, Chris Wong). Insight Engine has no SM. Design a community of practice that makes all of you better.

```
Design a Scrum Master Community of Practice for the Horizon Program.

MEMBERS:
- Me (Velocity Squad SM, most experienced, informal mentor to others)
- Ana Martinez (Catalyst Crew SM, experienced but struggling with team in crisis)
- Chris Wong (Nexus Team SM, new to SM role, strong technical background)
- Gap: No SM for Insight Engine (I cover 20%)

GOALS:
- Share learnings across teams without creating bureaucracy
- Support each other through tough situations
- Develop consistent practices where consistency helps
- Allow different practices where teams need different approaches
- Build Ana's confidence and Chris's SM skills
- Eventually advocate for a dedicated Insight Engine SM

CONSTRAINTS:
- We're all busy — this can't feel like another meeting
- Must provide immediate value or people will stop coming
- Can't become a complaint session
- Jennifer Walsh should see value (she'll fund our time)

Design:

1. **CoP CHARTER**
   - Purpose statement (1 sentence)
   - What we do and don't do
   - How we measure value
   - Cadence and format

2. **MEETING FORMAT**
   - Duration, frequency
   - Standing agenda
   - Rotating facilitation
   - How to handle when someone can't attend

3. **FIRST 3 SESSIONS**
   - Session 1: What topic, what format, what outcome
   - Session 2: What topic, what format, what outcome
   - Session 3: What topic, what format, what outcome

4. **KNOWLEDGE SHARING MECHANISMS**
   - Beyond meetings — how do we share day-to-day?
   - Shared resources (templates, prompts, techniques)
   - How to capture and reuse learnings

5. **PEER COACHING STRUCTURE**
   - How do we help each other with specific challenges?
   - Ana's Catalyst Crew crisis — how does the CoP support her?
   - Chris's SM learning — structured mentoring or organic?

6. **MAKING THE CASE TO JENNIFER**
   - How to show ROI on SM CoP
   - What metrics demonstrate value
   - How this connects to the "dedicated Insight Engine SM" ask
```

### What You Should See

A practical CoP design:
- **Charter:** "We share what works, solve what doesn't, and grow as a Scrum Master team — so our 4 teams don't have to make the same mistakes twice."
- **Format:** Bi-weekly, 45 minutes. Rotating facilitator. Standing agenda: (1) Wins — 5 min each, (2) Challenge of the sprint — one SM presents a real problem, others help, (3) Shared learning — technique, template, or insight to try.
- **Session 1:** "Cross-team impediment patterns" — each SM brings top 3 impediments, find overlaps (design capacity will surface immediately)
- **Session 2:** "Ceremony tune-ups" — Chris presents Nexus Team ceremony struggles, group designs solutions for distributed team
- **Session 3:** "The Insight Engine problem" — collectively design stabilization plan, make the case for dedicated SM
- **Peer coaching:** Pair Ana with you for weekly 15-min check-ins on Catalyst Crew crisis. Pair Chris with Ana for SM fundamentals (gives Ana a confidence boost as mentor).
- **Jennifer pitch:** "The CoP identified the design bottleneck 3 sprints before it hit the release timeline. That early warning saved us [X] weeks of rework."

---

> **Signals to Watch For**
>
> As you build multi-team coordination muscles, watch for:
> - You become the information bottleneck → Push information to flow team-to-team directly
> - SoS becomes a status meeting → Refocus on decisions and dependency resolution
> - Teams resist "program overhead" → Make every coordination activity visibly useful or kill it
> - Resource conflicts damage SM relationships → Separate the people from the problem; you and Ana are allies, not competitors
> - Program reports take hours to create → Automate data collection, focus your time on analysis and action

---

## When This Doesn't Work

- **SoS feels like a waste of time:** It probably IS a waste if it's just status updates. Restructure: no status (that's in the brief), only decisions, dependencies, and blockers. If there are none, cancel the meeting. Teams will respect your time.
- **Release planning feels premature:** It is premature if you don't have reliable team velocity data. For Catalyst Crew (declining) and Insight Engine (no sprints), use conservative estimates and build in explicit buffer. Over-promising at program level is worse than under-promising.
- **Ana gets defensive about Catalyst Crew:** She's under pressure and may feel judged. Frame everything as "how can WE help" not "your team is struggling." The CoP is a support structure, not a performance review.
- **Tom Harrison can't commit time:** Escalate to Jennifer with data: "Tom's infrastructure work is on the critical path for Sprint 50 release. Without 2 dedicated days per sprint, we have a [X]% chance of missing the release date." Make it a business decision, not a resource request.

---

## Module Complete!

You now know how to:
- Prepare and facilitate Scrum of Scrums with a single-page program brief
- Map and manage cross-team dependencies before they become blockers
- Negotiate resource conflicts while preserving SM relationships
- Create program-level transparency that leadership actually reads
- Plan coordinated releases across multiple teams with different maturity levels
- Build an SM Community of Practice that provides real value

---

## Next Steps

Continue to **Module 5.3: Organizational Change & Executive Influence**

---

## Quick Reference

### SoS Brief
```
Synthesize data from [X] teams into 1-page SoS brief.
Teams: [list with sprint, velocity, goal status, blockers, dependencies].
Generate: health dashboard, dependency status, discussion items, actions.
```

### Dependency Map
```
Build cross-team dependency map.
Active dependencies: [list]. Upcoming: [list]. Potential: [list].
Generate: matrix, critical path, risk heat map, early warning system.
```

### Resource Negotiation
```
Simulate negotiation with [SM name] about [shared resource].
My position: [need, impact]. Their position: [need, impact].
Constraints: [availability]. Play [their name] realistically.
Then analyze: optimal solution, creative alternatives, relationship preservation.
```

### Program Report
```
Create consolidated program sprint report for [audience].
Teams: [list with delivery data, health, risks].
Format: executive summary, health grid, dependencies, decisions needed.
Under 1 page.
```

### Release Planning
```
Plan coordinated release across [X] teams.
Target: [date]. Must ship: [features per team].
Dependencies: [list]. Constraints: [shared resources, risks].
Generate: timeline, dependency schedule, resource allocation, risk register,
integration plan, contingency plan.
```

### SM CoP Design
```
Design Scrum Master Community of Practice.
Members: [list with experience levels].
Goals: [what we want to achieve].
Generate: charter, meeting format, first 3 sessions, knowledge sharing,
peer coaching structure.
```

---

**Ready to drive organizational change? Let's continue to Module 5.3!**
