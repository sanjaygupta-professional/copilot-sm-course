# Horizon Program Organizational Impediment Log

Impediments that cannot be resolved at the team level and require program or organizational action.

---

## How This Log Differs from Team Impediment Logs

Team impediment logs track blockers within a single team's control. This log tracks **organizational impediments** — systemic issues that affect multiple teams and require leadership action, budget approval, or structural change to resolve.

**Criteria for inclusion:**
- Affects 2+ teams
- Cannot be resolved by any single SM or PO
- Requires management decision, budget, or organizational change
- Has persisted for 2+ sprints without resolution

---

## OI-001: Shared UX Designer Across 3 Teams

| Field | Details |
|-------|---------|
| **ID** | OI-001 |
| **Title** | Single designer (David Kim) shared across 3 Horizon teams |
| **Date Raised** | Sprint 43 (September 5, 2025) |
| **Raised By** | You (Velocity Squad SM), Ana Martinez (Catalyst SM) |
| **Teams Affected** | Velocity Squad, Catalyst Crew, Nexus Team, Insight Engine (no allocation) |
| **Category** | Resource / Organizational Structure |
| **Description** | David Kim is the only UX/UI designer allocated to the Horizon Program. He is split across Velocity Squad, Catalyst Crew, and Nexus Team (~0.3 FTE each). Insight Engine receives no design support. Context-switching consumes ~30% of his productive time. Average design request wait time is 4.2 days across teams. |
| **Impact** | 6 sprint goals missed due to design delays (Sprints 43-47). Catalyst Crew velocity declined 26% over 6 sprints (partially attributed). David Kim reports unsustainable workload. |
| **Estimated Cost** | ~$180,000/year in lost velocity (12 blocked points/sprint x 26 sprints x blended cost) |
| **Escalation History** | Sprint 43: Raised at Scrum of Scrums. Sprint 44: Escalated to Jennifer Walsh. Sprint 45: Jennifer raised to Richard Thorne informally. Sprint 47: Formal business case submitted. |
| **Current Status** | **Escalated** — Business case with Richard Thorne. Decision expected Sprint 48. |
| **Owner** | You + Jennifer Walsh |
| **Proposed Resolution** | Hire 1 additional designer ($95K/yr). See: organizational-impediment-campaign.md |

---

## OI-002: Shared Infrastructure Lead — Single Point of Failure

| Field | Details |
|-------|---------|
| **ID** | OI-002 |
| **Title** | Tom Harrison is sole infrastructure resource for all Horizon teams |
| **Date Raised** | Sprint 44 (September 19, 2025) |
| **Raised By** | Chris Wong (Nexus SM) |
| **Teams Affected** | All 4 teams |
| **Category** | Resource / Organizational Structure |
| **Description** | Tom Harrison is the only infrastructure engineer supporting the Horizon Program. He also supports other programs. Current backlog: 3-week wait for infrastructure requests. No backup or knowledge transfer to team members. |
| **Impact** | Nexus Team mobile testing infrastructure delayed 3+ weeks. Catalyst search index performance investigation queued for 1+ week. Velocity caching infrastructure request not started. All teams experience deployment and environment issues with no timely support. |
| **Estimated Cost** | ~$80,000/year in team idle time waiting for infrastructure (estimated 4-6 hours/sprint across all teams blocked on Tom) |
| **Escalation History** | Sprint 44: Chris raised at Scrum of Scrums. Sprint 45: Discussed with Jennifer. Sprint 46: Jennifer asked Tom to prioritize Horizon, but Tom's other commitments unchanged. Sprint 47: Formal prioritization framework proposed. |
| **Current Status** | **In Progress** — Prioritization framework under development. Structural solution (additional infra support) not yet proposed. |
| **Owner** | Jennifer Walsh |
| **Proposed Resolution** | Short-term: Prioritization framework for Tom's time. Medium-term: Cross-train team members on basic infra tasks. Long-term: Dedicated infra support for Horizon. |

---

## OI-003: Inconsistent Definition of Done Across Teams

| Field | Details |
|-------|---------|
| **ID** | OI-003 |
| **Title** | No shared Definition of Done across Horizon Program teams |
| **Date Raised** | Sprint 45 (October 3, 2025) |
| **Raised By** | Ana Martinez (Catalyst SM) |
| **Teams Affected** | All 4 teams |
| **Category** | Process / Standards |
| **Description** | Each team has a different Definition of Done (or none — Insight Engine). Velocity Squad requires code review + unit tests + QA sign-off. Catalyst requires code review + integration tests. Nexus requires code review only (new team, still forming). Insight Engine has no formal DoD. When features cross team boundaries, there is no agreed quality standard. |
| **Impact** | Integration issues at program level: Velocity Squad receives API calls from Nexus that haven't been integration-tested. Defect leakage rate varies from 2% (Velocity) to unknown (Insight Engine). Program release quality is only as good as the weakest team's DoD. |
| **Estimated Cost** | ~$40,000/year in cross-team integration defects and rework (estimated 2-3 defects/sprint requiring cross-team debugging, 4-8 hours each) |
| **Escalation History** | Sprint 45: Ana raised at Scrum of Scrums. Sprint 46: Discussed among SMs, agreed alignment needed. Sprint 47: Workshop proposed but not yet scheduled. |
| **Current Status** | **Open** — Workshop planned for Sprint 48. All SMs and POs to participate. |
| **Owner** | You (facilitating the alignment workshop) |
| **Proposed Resolution** | Facilitated cross-team workshop to establish shared DoD baseline. Teams can add team-specific criteria on top of the shared baseline. |

---

## OI-004: No Shared Design System or Component Library

| Field | Details |
|-------|---------|
| **ID** | OI-004 |
| **Title** | No design system — each team builds UI components from scratch |
| **Date Raised** | Sprint 45 (October 3, 2025) |
| **Raised By** | David Kim (Designer) |
| **Teams Affected** | Velocity Squad, Catalyst Crew, Nexus Team |
| **Category** | Technical Debt / Tooling |
| **Description** | There is no shared design system, component library, or style guide. Each team builds UI components independently. David Kim redesigns similar components for each team. Developers implement similar patterns differently. User experience is inconsistent across platform, search, and mobile. |
| **Impact** | David spends ~25% of design time recreating patterns that already exist on another team. Developer time wasted on duplicate component development estimated at 3-5 points/sprint across the program. User experience is visually inconsistent (3 different button styles, 2 different navigation patterns, inconsistent spacing). |
| **Estimated Cost** | ~$60,000/year in duplicate effort (design + development) |
| **Escalation History** | Sprint 45: David raised informally. Sprint 46: Discussed at SM sync. Sprint 47: Included as Option C in the designer capacity business case. |
| **Current Status** | **Open** — Bundled with OI-001 resolution. If additional designer is hired, David can lead design system creation. |
| **Owner** | David Kim + You |
| **Proposed Resolution** | Phase 1: Audit existing components across teams (2 days). Phase 2: Create shared component library (4-6 weeks, requires dedicated David time). Phase 3: Teams adopt shared library. |

---

## OI-005: No Shared Test Environment — Deployment Conflicts

| Field | Details |
|-------|---------|
| **ID** | OI-005 |
| **Title** | Single staging environment shared by 3 teams with no coordination |
| **Date Raised** | Sprint 46 (October 10, 2025) |
| **Raised By** | Lisa (QA, Velocity Squad) |
| **Teams Affected** | Velocity Squad, Catalyst Crew, Nexus Team (Insight Engine has no staging access) |
| **Category** | Infrastructure / Process |
| **Description** | One staging environment is shared by 3 teams. Deployments are first-come-first-served with no calendar or reservation system. Conflicts occur 2-3 times per sprint when one team's deployment overwrites or destabilizes another team's test environment. Sprint 47: Velocity deployment overwrote Catalyst test data, requiring 4-hour manual restore. |
| **Impact** | 2-3 deployment conflicts per sprint, each costing 2-4 hours of team time. QA cycles disrupted, leading to rushed testing or delayed stories. Teams avoid deploying during "risky" times, reducing deployment frequency. |
| **Estimated Cost** | ~$25,000/year in lost time (avg 8 hours/sprint x team blended rate) |
| **Escalation History** | Sprint 46: Lisa raised at daily standup. You escalated to Scrum of Scrums. Sprint 47: Tom Harrison involved. Deployment calendar proposed. Ana escalated after data overwrite incident. |
| **Current Status** | **In Progress** — Deployment calendar being created by Tom Harrison. Target: Sprint 48 start. Long-term: separate staging environments per team (requires infrastructure budget). |
| **Owner** | Tom Harrison + You |
| **Proposed Resolution** | Short-term: Shared deployment calendar with reserved time slots per team. Medium-term: Automated deployment pipeline with environment isolation. Long-term: Dedicated staging per team ($15K/year infrastructure cost). |

---

## Summary Dashboard

| ID | Impediment | Sprints Open | Status | Est. Annual Cost | Priority |
|----|-----------|-------------|--------|-----------------|----------|
| OI-001 | Shared designer (David Kim) | 5 | Escalated | $180,000 | CRITICAL |
| OI-002 | Shared infra lead (Tom Harrison) | 4 | In Progress | $80,000 | HIGH |
| OI-003 | Inconsistent DoD across teams | 3 | Open | $40,000 | MEDIUM |
| OI-004 | No design system | 3 | Open | $60,000 | MEDIUM |
| OI-005 | No shared test environment | 2 | In Progress | $25,000 | HIGH |
| | | | **Total** | **$385,000/yr** | |

---

## Tracking Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Open organizational impediments | 5 | <3 |
| Average age (sprints) | 3.4 | <2 |
| Resolution rate (per quarter) | 0 | 2+ |
| Impediments with active campaigns | 2 | All open items |
| Leadership decisions pending | 2 | 0 |
