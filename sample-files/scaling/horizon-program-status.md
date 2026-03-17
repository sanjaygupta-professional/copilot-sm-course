# Horizon Program Status Report

**Report Date:** Sprint 47, Week 2 (October 24, 2025)
**Program:** Horizon — AKX Platform
**RTE:** Jennifer Walsh (VP Engineering)
**Teams:** 4

---

## Program Health Summary

| Team | Sprint | Velocity | Sprint Goal | Health | Top Risk |
|------|--------|----------|-------------|--------|----------|
| Velocity Squad | 47 | 48 (stable) | On Track | GREEN | David Kim availability |
| Catalyst Crew | 47 | 31 (declining) | At Risk | AMBER | Velocity trend, team morale |
| Nexus Team | 4 | 28 (establishing) | On Track | AMBER | Distributed team coordination |
| Insight Engine | 47 | 22 (erratic) | Off Track | RED | No SM, no design support, chaotic |

**Program Overall: AMBER**

---

## Team Detail: Velocity Squad (Core Platform)

| Dimension | Status |
|-----------|--------|
| **Scrum Master** | You |
| **Product Owner** | Raj Patel |
| **Sprint** | 47 |
| **Sprint Goal** | Complete rate limiting API and push notification integration |
| **Sprint Goal Status** | On Track (85% confidence) |
| **Velocity (last 5)** | 45, 50, 47, 49, 48 — stable, within control limits |
| **Team Size** | 7 (James, Lisa, Marcus, Priya, Raj, David Kim partial, You) |

**Key Accomplishments This Sprint:**
- Rate limiting API implementation complete and in testing
- Push notification backend integration at 80%
- Successful spike on caching architecture for Sprint 48

**Blockers:**
1. David Kim pulled to Catalyst Crew for 2 days this sprint — dashboard design delayed
2. Staging environment access issue (resolved in 1 day via Tom Harrison)

**Risks:**
- David Kim may be unavailable for Sprint 48 planning if Catalyst Crew design emergency continues
- Caching architecture in Sprint 48 will need Tom Harrison's infrastructure support (not yet confirmed)

**Health Scores (Sprint 47 survey):**

| Dimension | Score | Trend |
|-----------|-------|-------|
| Mission | 4.2/5 | Stable |
| Ownership | 4.0/5 | Stable |
| Speed | 3.6/5 | Down 0.2 |
| Engagement | 3.8/5 | Stable |
| Fun | 3.5/5 | Down 0.3 |

---

## Team Detail: Catalyst Crew (Search)

| Dimension | Status |
|-----------|--------|
| **Scrum Master** | Ana Martinez |
| **Product Owner** | Emily Chen |
| **Sprint** | 47 |
| **Sprint Goal** | Deliver search relevance improvements and faceted filtering |
| **Sprint Goal Status** | At Risk (50% confidence) |
| **Velocity (last 6)** | 42, 40, 38, 35, 33, 31 — declining trend over 6 sprints |
| **Team Size** | 6 |

**Key Accomplishments This Sprint:**
- Search relevance algorithm v2 deployed to staging
- Faceted filtering backend complete

**Blockers:**
1. David Kim was scheduled for 3 days this sprint but only available for 1.5 — faceted filtering UI incomplete
2. Search index performance degradation requires infrastructure team (Tom Harrison) investigation
3. Emily (PO) out sick for 2 days — prioritization decisions stalled

**Risks:**
- Velocity decline is now 6 sprints. Root cause unclear — could be design bottleneck, could be deeper team health issue
- Ana reports team morale is low; two senior developers have mentioned looking at other projects
- Search relevance is a key Q4 deliverable for Sarah Mitchell's strategy — missing this is highly visible

**Health Scores (Sprint 47 survey):**

| Dimension | Score | Trend |
|-----------|-------|-------|
| Mission | 3.5/5 | Down 0.5 |
| Ownership | 3.2/5 | Down 0.3 |
| Speed | 2.8/5 | Down 0.4 |
| Engagement | 3.0/5 | Down 0.6 |
| Fun | 2.5/5 | Down 0.5 |

**Action Required:** Program-level attention needed. Ana is requesting support with root cause analysis and stakeholder management.

---

## Team Detail: Nexus Team (Mobile)

| Dimension | Status |
|-----------|--------|
| **Scrum Master** | Chris Wong |
| **Product Owner** | Mike Torres |
| **Sprint** | 4 (new team, formed 4 sprints ago) |
| **Sprint Goal** | Complete user authentication flow and basic navigation shell |
| **Sprint Goal Status** | On Track (75% confidence) |
| **Velocity (last 4)** | 18, 22, 25, 28 — growing as team forms |
| **Team Size** | 5 (distributed: 3 US, 1 UK, 1 India) |

**Key Accomplishments This Sprint:**
- Authentication flow working on both iOS and Android
- Navigation shell 70% complete
- Team working agreement v2 finalized (improved async collaboration)

**Blockers:**
1. Time zone challenges: only 3-hour overlap window between US and India team members
2. Need API contract from Velocity Squad for user profile endpoint — not yet finalized
3. Mobile testing infrastructure not yet provisioned (Tom Harrison backlogged)

**Risks:**
- Distributed team still forming — norms not yet solid, communication overhead high
- Chris Wong is a first-time SM — may need coaching support on facilitation for distributed teams
- API dependency on Velocity Squad for Sprint 5 could become a blocker if not resolved this sprint

**Health Scores (Sprint 4 survey):**

| Dimension | Score | Trend |
|-----------|-------|-------|
| Mission | 3.8/5 | Up 0.3 |
| Ownership | 3.5/5 | Stable |
| Speed | 3.2/5 | Up 0.2 |
| Engagement | 3.6/5 | Up 0.4 |
| Fun | 3.4/5 | Up 0.2 |

---

## Team Detail: Insight Engine (Analytics)

| Dimension | Status |
|-----------|--------|
| **Scrum Master** | None (team self-managing, poorly) |
| **Product Owner** | Karen Lee |
| **Sprint** | 47 (nominal — sprint boundaries not respected) |
| **Sprint Goal** | "Ship the dashboard" (vague, not measurable) |
| **Sprint Goal Status** | Off Track (20% confidence) |
| **Velocity (last 5)** | 30, 18, 35, 15, 22 — erratic, no predictability |
| **Team Size** | 4 |

**Key Accomplishments This Sprint:**
- Data pipeline refactoring 60% complete (unplanned work, not in sprint goal)
- Basic dashboard layout exists but no UX design review

**Blockers:**
1. No Scrum Master — nobody facilitating ceremonies or tracking impediments
2. No design support — David Kim has never been allocated to this team
3. Karen (PO) unclear on priorities — backlog is a flat unsorted list of 200+ items
4. Team pulls in unplanned work mid-sprint routinely (30-40% of capacity)

**Risks:**
- Team is the least mature in the program and dragging down program-level metrics
- Analytics dashboard is a dependency for Sarah Mitchell's Q1 executive reporting
- Burnout risk — team works long hours but delivers unpredictably
- No retrospectives happening — problems compound without reflection

**Health Scores:** Not collected. No health survey process exists for this team.

**Action Required:** This team needs immediate SM coaching support. Jennifer Walsh has flagged this as a program priority.

---

## Cross-Team Section

### Shared Dependencies

| Dependency | Teams Involved | Status | Risk Level |
|------------|---------------|--------|------------|
| **David Kim (Design)** | Velocity, Catalyst, Nexus | Overloaded — 3 teams, 0.5 FTE effective per team | HIGH |
| **Tom Harrison (Infrastructure)** | All 4 teams | Backlogged — 3-week wait for infrastructure requests | HIGH |
| **User Profile API** | Velocity (provider) → Nexus (consumer) | Contract not finalized, needed Sprint 5 | MEDIUM |
| **Search API** | Catalyst (provider) → Insight Engine (consumer) | No formal interface agreement | MEDIUM |
| **Shared Staging Environment** | Velocity, Catalyst, Nexus | Conflicts when multiple teams deploy simultaneously | MEDIUM |
| **Authentication Service** | Nexus (provider) → All teams (consumers) | In development, Sprint 4 | LOW (future) |

### Upcoming Coordination Needs

| Item | Teams | Timeline | Action Needed |
|------|-------|----------|---------------|
| API contract finalization | Velocity + Nexus | This sprint | Schedule joint refinement session |
| Coordinated staging deployment window | Velocity + Catalyst | Sprint 48, Week 1 | Tom Harrison to define schedule |
| Analytics data model review | Insight Engine + all | Sprint 48 | Karen Lee to present data model for cross-team input |
| Q4 release planning | All 4 teams | Sprint 49 | Jennifer to schedule Program Increment planning |

### Program-Level Risks

| # | Risk | Likelihood | Impact | Owner | Mitigation |
|---|------|-----------|--------|-------|------------|
| P-1 | David Kim burnout/resignation | High | Very High | Jennifer Walsh | Business case for additional designer (in progress) |
| P-2 | Catalyst velocity decline threatens Q4 Search deliverable | High | High | Ana Martinez + You | Root cause analysis, program support |
| P-3 | Insight Engine unpredictability affects program release | Very High | Medium | Jennifer Walsh | SM coaching assignment needed |
| P-4 | Tom Harrison bottleneck delays infrastructure across program | Medium | High | Jennifer Walsh | Infrastructure prioritization framework needed |
| P-5 | Coordinated release in 3 sprints with current dependency state | Medium | High | You (as RTE) | Dependency mapping and release planning |

---

## Decisions Needed from Leadership

| # | Decision | Needed By | Decision Maker | Recommendation |
|---|----------|-----------|----------------|----------------|
| D-1 | Approve hiring additional designer | Sprint 48 | Richard Thorne | Approve — cost of inaction exceeds hire cost |
| D-2 | Assign SM support to Insight Engine | Immediately | Jennifer Walsh | Assign part-time coaching from experienced SM |
| D-3 | Prioritize infrastructure requests across program | Sprint 48 | Jennifer + Tom | Create shared prioritization framework |
| D-4 | Confirm Q4 release scope given current team states | Sprint 49 planning | Richard + Sarah | Reduce scope for Catalyst and Insight Engine |
