# Horizon Program Release Planning Scenario

A coordinated release planning exercise for the Horizon Program. The learner must navigate dependencies, resource conflicts, and timeline constraints to plan a successful release across 4 teams.

---

## Scenario Overview

**Release:** Horizon v2.0 — AKX Platform Major Update
**Target Date:** End of Sprint 50 (3 sprints from now, ~6 weeks)
**Sponsor:** Sarah Mitchell (MD Strategy)
**Coordination:** You (as RTE or program-level SM)

Sarah Mitchell has committed to the board that Horizon v2.0 will ship at the end of Sprint 50. The release includes features from all 4 teams. Your job is to create a viable release plan.

---

## Release Feature Requirements

### Must-Have Features (Release Blockers)

| # | Feature | Owner Team | Estimated Effort | Dependencies |
|---|---------|-----------|-----------------|--------------|
| F-1 | Rate-limited Public API | Velocity Squad | 15 pts (Sprint 48) | None — nearly complete |
| F-2 | Search Relevance v2 | Catalyst Crew | 20 pts (S48-49) | Tom Harrison: search index optimization |
| F-3 | Faceted Filtering UI | Catalyst Crew | 13 pts (S48-49) | David Kim: design (5 days needed) |
| F-4 | Mobile Auth + Navigation | Nexus Team | 18 pts (S48-49) | Velocity: User Profile API contract |
| F-5 | Basic Analytics Dashboard | Insight Engine | 25 pts (S48-50) | David Kim: design (8 days needed), Catalyst: Search API |
| F-6 | Push Notifications (mobile) | Nexus Team | 10 pts (S49) | Velocity: notification backend API |

### Should-Have Features (Deferrable)

| # | Feature | Owner Team | Estimated Effort | Dependencies |
|---|---------|-----------|-----------------|--------------|
| F-7 | Advanced Search Filters | Catalyst Crew | 8 pts (S49) | F-2 complete first |
| F-8 | User Profile Customization | Velocity Squad | 12 pts (S49-50) | F-4 API contract finalized |
| F-9 | Offline Mode (mobile) | Nexus Team | 15 pts (S50) | F-4 complete first |
| F-10 | Dashboard Export to PDF | Insight Engine | 8 pts (S50) | F-5 complete first |

---

## Dependency Matrix

### Feature-to-Feature Dependencies

```
F-1 (Rate-limited API)      →  No dependencies
F-2 (Search Relevance)      →  Tom Harrison infra work
F-3 (Faceted Filtering UI)  →  David Kim (5 days)
F-4 (Mobile Auth + Nav)     →  Velocity User Profile API (F-1 adjacent)
F-5 (Analytics Dashboard)   →  David Kim (8 days) + Catalyst Search API (F-2)
F-6 (Push Notifications)    →  Velocity notification backend
F-7 (Advanced Filters)      →  F-2 complete
F-8 (Profile Custom.)       →  F-4 API contract
F-9 (Offline Mode)          →  F-4 complete
F-10 (Dashboard Export)     →  F-5 complete
```

### Critical Path

```
Sprint 48                Sprint 49                Sprint 50
─────────────────────    ─────────────────────    ─────────────────────
F-1 ████████ (done)
                         F-6 ████████
F-2 ██████████████████   F-2 ████████ (done)
                         F-7 ████████
F-3 ████████████ (David) F-3 ████ (done)
F-4 ██████████████████   F-4 ████ (done)           F-9 ████████████████
                                                   F-8 ████████████████
                         F-5 ██████████████████    F-5 ████████ (done)
                                                   F-10 ████████

Critical path: F-2 → F-5 → F-10 (Search must finish before Analytics can consume API)
Critical path: David Kim → F-3, then David Kim → F-5 (sequential design dependency)
```

---

## Resource Conflicts

### David Kim — 13 Design Days Needed, 6 Weeks Available

| Sprint | Available Days | Requested | Conflict |
|--------|---------------|-----------|----------|
| Sprint 48 | 10 work days | F-3: 5 days (Catalyst) | 5 days remain |
| Sprint 49 | 10 work days | F-5: 8 days (Insight Engine) | 2 days remain |
| Sprint 50 | 10 work days | Buffer / revisions | OK if no slippage |

**Problem:** David must do F-3 (Catalyst) before F-5 (Insight Engine). If F-3 slips, F-5 is delayed, and the analytics dashboard — a must-have — misses the release. There is zero buffer.

**Additional problem:** Velocity Squad and Nexus Team also need David for should-have features (F-8, F-9). Those are impossible unless a feature is cut or another designer is available.

### Tom Harrison — Infrastructure Bottleneck

| Request | Team | Estimated Effort | Priority |
|---------|------|-----------------|----------|
| Search index optimization | Catalyst | 3 days | Must-have (F-2 depends on it) |
| Mobile test infrastructure | Nexus | 2 days | Must-have (F-4 testing) |
| Caching infrastructure | Velocity | 3 days | Should-have (Sprint 48 nice-to-have) |
| Data pipeline scaling | Insight Engine | 2 days | Must-have (F-5 performance) |

**Problem:** Tom has approximately 10 available days across 3 sprints (he supports other programs too). Total requests: 10 days of must-have work alone. No buffer for Velocity caching or unexpected issues.

### Shared Staging Environment

Only one team can deploy to staging at a time. With 4 teams needing to test and integrate, scheduling becomes critical in Sprint 50 when all features converge.

---

## Team Capacity Constraints

| Team | Velocity | S48 Capacity Notes | S49 Capacity Notes | S50 Capacity Notes |
|------|----------|-------------------|-------------------|-------------------|
| Velocity Squad | ~48 pts/sprint | Full capacity | Full capacity | Marcus on vacation (Week 2) |
| Catalyst Crew | ~31 pts/sprint | Emily (PO) partial availability | Full capacity | Holiday week — 4-day sprint |
| Nexus Team | ~28 pts/sprint | UK member on leave (Week 1) | Full capacity | India member holiday (Week 1) |
| Insight Engine | ~22 pts/sprint | No SM, expect 30-40% unplanned work | Hopefully SM coaching starts | Uncertain |

---

## The Planning Challenge

As the program coordinator, you must create a viable plan that addresses:

### Question 1: Feature Sequencing
Given the dependency matrix, in what order must features be developed? Which features can run in parallel? Create a sprint-by-sprint plan.

### Question 2: David Kim Allocation
David has 13 days of must-have design work and 30 available work days. That sounds fine — but the work is sequential (F-3 before F-5) and team context-switching costs ~30%. How do you allocate David's time to minimize risk?

### Question 3: Tom Harrison Prioritization
With 10 days of must-have infra work and ~10 days of availability, what's the priority order? What happens if Tom gets pulled to another program for a week?

### Question 4: Scope Decisions
If you could only deliver 4 of the 6 must-have features, which 2 would you defer? What data supports your recommendation to Sarah Mitchell?

### Question 5: Risk Mitigation
Identify the top 3 risks to this release and propose a mitigation strategy for each. Include trigger points for escalation.

### Question 6: Insight Engine Reality Check
Insight Engine has velocity of 22 (erratic), no SM, 30-40% unplanned work, and their feature (F-5) depends on both David Kim and Catalyst's Search API. What is the realistic probability of F-5 shipping in this release? What do you recommend?

---

## Constraints Summary

| Constraint | Detail |
|------------|--------|
| **Hard deadline** | End of Sprint 50 — Sarah committed to the board |
| **No additional headcount** | Richard Thorne has not yet approved the designer hire |
| **One staging environment** | Must schedule integration testing carefully |
| **Tom Harrison shared** | Also supports non-Horizon work; availability uncertain |
| **Insight Engine instability** | 30-40% unplanned work; no SM; erratic velocity |
| **Holiday impacts** | Sprint 50 has reduced capacity for multiple teams |

---

## Prompt for Copilot Analysis

> *"Here is a release planning scenario for 4 teams coordinating a release in 3 sprints. Given the dependency matrix, resource constraints (David Kim shared designer, Tom Harrison shared infra), and team capacity data, help me:*
> *1. Create an optimized sprint-by-sprint feature plan*
> *2. Identify the critical path and calculate schedule risk*
> *3. Recommend which should-have features to cut*
> *4. Propose a David Kim allocation schedule that minimizes context-switching*
> *5. Draft a risk register with trigger points for scope decisions*
> *Present the plan as a table I can share with all 4 teams."*
