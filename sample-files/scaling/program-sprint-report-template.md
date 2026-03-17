# Horizon Program Sprint Report

**Sprint:** 47 | **Date:** October 24, 2025 | **RTE:** Jennifer Walsh

---

## Program Health Overview

| Team | Sprint Goal | Velocity | Trend | Health | RAG |
|------|------------|----------|-------|--------|-----|
| Velocity Squad | Rate limiting API + push notifications | 48 | Stable | 3.8/5 | GREEN |
| Catalyst Crew | Search relevance + faceted filtering | 31 | Declining (6 sprints) | 3.0/5 | AMBER |
| Nexus Team | Auth flow + navigation shell | 28 | Growing (new team) | 3.5/5 | AMBER |
| Insight Engine | "Ship the dashboard" | 22 | Erratic | N/A | RED |

**Program RAG: AMBER** — 1 Green, 2 Amber, 1 Red

---

## Cross-Team Metrics

### Velocity Trends (Last 5 Sprints)

| Team | S43 | S44 | S45 | S46 | S47 | Trend |
|------|-----|-----|-----|-----|-----|-------|
| Velocity Squad | 45 | 50 | 47 | 49 | 48 | Stable within control limits |
| Catalyst Crew | 38 | 35 | 33 | 31 | 31 | Down 18% over 5 sprints |
| Nexus Team | — | 18 | 22 | 25 | 28 | Up 56% (forming team, expected) |
| Insight Engine | 35 | 15 | 22 | 30 | 22 | Erratic (std dev: 7.4) |
| **Program Total** | **118** | **118** | **124** | **135** | **129** | Flat (Nexus growth offset by Catalyst decline) |

### Quality Metrics

| Team | Escaped Defects (S47) | Defect Leakage Rate | Trend |
|------|----------------------|---------------------|-------|
| Velocity Squad | 1 | 2% | Stable |
| Catalyst Crew | 3 | 8% | Up (rushed work) |
| Nexus Team | 2 | 5% | Expected for new team |
| Insight Engine | Unknown | Not tracked | No QA process |

### Predictability (Sprint Goal Completion, Last 5 Sprints)

| Team | S43 | S44 | S45 | S46 | S47 | Rate |
|------|-----|-----|-----|-----|-----|------|
| Velocity Squad | Met | Met | Partial | Met | On Track | 80% |
| Catalyst Crew | Met | Partial | Missed | Partial | At Risk | 40% |
| Nexus Team | — | Missed | Partial | Met | On Track | 50% |
| Insight Engine | Partial | Missed | Missed | Partial | Off Track | 10% |

---

## Dependency Status

| # | Dependency | Teams | Status | Risk | Action |
|---|-----------|-------|--------|------|--------|
| D-1 | David Kim (Design) | Vel, Cat, Nex | Overloaded | HIGH | Business case for additional designer in review |
| D-2 | Tom Harrison (Infra) | All | 3-week backlog | HIGH | Prioritization framework needed |
| D-3 | User Profile API | Vel → Nex | Contract draft | MEDIUM | Joint refinement scheduled for S47 Week 2 |
| D-4 | Search API | Cat → Ins | No agreement | MEDIUM | To begin in S48 |
| D-5 | Staging environment | Vel, Cat, Nex | Conflict-prone | MEDIUM | Deployment calendar proposed |

### Dependency Resolution Rate

| Sprint | Dependencies Identified | Resolved in Sprint | Carried Over | Resolution Rate |
|--------|----------------------|-------------------|-------------|----------------|
| S44 | 4 | 2 | 2 | 50% |
| S45 | 5 | 2 | 3 | 40% |
| S46 | 6 | 3 | 3 | 50% |
| S47 | 7 | 2 (so far) | 5 | 29% (in progress) |

**Trend:** Dependencies are accumulating faster than they are being resolved.

---

## Risks & Escalations

### Active Risks

| # | Risk | Probability | Impact | Owner | Status | Mitigation |
|---|------|------------|--------|-------|--------|------------|
| R-1 | David Kim burnout/resignation | High | Very High | Jennifer | ESCALATED | Business case submitted to Richard Thorne |
| R-2 | Catalyst velocity decline threatens Q4 Search | High | High | Ana | OPEN | Root cause analysis in progress |
| R-3 | Insight Engine unpredictability | Very High | Medium | Jennifer | OPEN | SM coaching assignment pending |
| R-4 | Infra bottleneck delays program | Medium | High | Jennifer | OPEN | Prioritization framework proposed |
| R-5 | Coordinated Q1 release at risk | Medium | High | You/RTE | NEW | Release planning for S49 |
| R-6 | Nexus Auth service — new team building shared dependency | Medium | Medium | Chris | MONITORING | Weekly progress check |

### Escalations This Sprint

| # | Escalation | Raised By | Raised To | Date | Resolution |
|---|-----------|-----------|-----------|------|------------|
| E-1 | David Kim — 0 days available for Catalyst this sprint | Ana Martinez | Jennifer Walsh | Oct 20 | Temporary reallocation: David to Catalyst Thu-Fri this week |
| E-2 | Staging environment collision — Velocity deploy overwrote Catalyst test data | Ana Martinez | Tom Harrison | Oct 22 | Manual restore. Calendar solution proposed. |
| E-3 | Insight Engine team working weekends | Karen Lee | Jennifer Walsh | Oct 23 | Jennifer to meet with team. SM support to be assigned. |

---

## Decisions Needed

| # | Decision | Context | Needed By | Decision Maker | Recommendation |
|---|----------|---------|-----------|----------------|----------------|
| D-1 | Approve additional designer hire | Business case submitted. Cost: $95K/yr. Cost of inaction: $180K/yr. | S48 start | Richard Thorne | Approve |
| D-2 | Assign SM to Insight Engine | Team has no SM, health declining, working weekends | Immediately | Jennifer Walsh | Part-time coaching from experienced SM |
| D-3 | Establish infra prioritization | Tom Harrison backlogged 3 weeks, no priority framework | S48 | Jennifer + Tom | Weighted priority matrix across teams |
| D-4 | Confirm Q4 release scope | Current team states suggest not all features will be ready | S49 planning | Richard + Sarah | Scope reduction for Catalyst + Insight Engine |

---

## Sprint 48 Look-Ahead

### Key Events

| Date | Event | Participants |
|------|-------|-------------|
| Oct 28 | Sprint 48 Planning (all teams) | All teams |
| Oct 29 | Velocity + Nexus API refinement | Selected members |
| Oct 30 | Scrum of Scrums | All SMs + RTE |
| Nov 4 | Program Increment planning prep | RTE + POs |
| Nov 7 | Mid-sprint cross-team sync | All SMs + RTE |

### Critical Items for Sprint 48

1. Finalize User Profile API contract (Velocity + Nexus)
2. Resolve David Kim allocation (pending Richard's decision)
3. Begin Insight Engine SM coaching
4. Tom Harrison to prioritize: Catalyst search perf vs. Nexus mobile infra
5. Catalyst root cause analysis results expected

---

## Template Instructions

> **For RTE/SM completing this report:**
> 1. Update team data by end of sprint review day
> 2. Collect RAG status from each SM directly — do not guess
> 3. Update dependency status at Scrum of Scrums
> 4. Escalations should be raised in real-time, documented here for the record
> 5. Decisions Needed section should be reviewed with Jennifer before publishing
> 6. Distribute to: all SMs, all POs, Jennifer Walsh, Richard Thorne
