# Horizon Program Cross-Team Dependency Map

**Last Updated:** Sprint 47, Week 2 (October 24, 2025)
**Maintained By:** Program-level (RTE/SM coordination)

---

## Team Overview

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  VELOCITY SQUAD  │  │  CATALYST CREW   │  │   NEXUS TEAM     │  │  INSIGHT ENGINE  │
│  Core Platform   │  │  Search          │  │   Mobile         │  │  Analytics       │
│  SM: You         │  │  SM: Ana Martinez│  │   SM: Chris Wong │  │  SM: (none)      │
│  Sprint 47       │  │  Sprint 47       │  │   Sprint 4       │  │  Sprint 47       │
│  Velocity: 48    │  │  Velocity: 31 ↓  │  │   Velocity: 28 ↑ │  │  Velocity: 22 ↕  │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## Shared Resource Dependencies

### David Kim (UX/UI Designer) — CRITICAL

```
                    ┌────────────────────┐
                    │     DAVID KIM      │
                    │   UX/UI Designer   │
                    │  Capacity: 1.0 FTE │
                    └────────┬───────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
     ┌────────────┐  ┌────────────┐  ┌────────────┐     ┌────────────┐
     │  Velocity   │  │  Catalyst  │  │   Nexus    │     │  Insight   │
     │  ~0.3 FTE   │  │  ~0.3 FTE  │  │  ~0.3 FTE  │     │  0.0 FTE   │
     │  Wait: 3d   │  │  Wait: 5d  │  │  Wait: 4d  │     │  (no alloc)│
     └────────────┘  └────────────┘  └────────────┘     └────────────┘
```

| Team | Allocation | Typical Wait Time | Impact |
|------|-----------|-------------------|--------|
| Velocity Squad | ~0.3 FTE (Mon, Wed mornings) | 3 days avg | Dashboard designs delayed |
| Catalyst Crew | ~0.3 FTE (Tue, Thu) | 5 days avg | Faceted filtering UI stalled |
| Nexus Team | ~0.3 FTE (Wed afternoon, Fri) | 4 days avg | Mobile navigation design waiting |
| Insight Engine | 0.0 FTE | N/A — no allocation | No design support at all |

**Context-switching cost:** ~30% of David's productive time is lost to switching between teams, codebases, and design contexts. Effective output is approximately 0.7 FTE despite being allocated 1.0 FTE.

### Tom Harrison (Infrastructure Lead) — HIGH RISK

```
                    ┌────────────────────┐
                    │   TOM HARRISON     │
                    │   Infra Lead       │
                    │  Capacity: 1.0 FTE │
                    │  Current backlog:  │
                    │  3-week wait       │
                    └────────┬───────────┘
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
           ▼                 ▼                 ▼
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │   Velocity   │  │   Catalyst   │  │    Nexus     │
  │ Staging env  │  │ Search index │  │ Mobile test  │
  │ Caching arch │  │ perf tuning  │  │ infra setup  │
  └──────────────┘  └──────────────┘  └──────────────┘
```

| Team | Current Request | Priority | Wait Time | Status |
|------|----------------|----------|-----------|--------|
| Velocity Squad | Caching infrastructure for Sprint 48 | Medium | Est. 2 weeks | Not started |
| Catalyst Crew | Search index performance investigation | High | 1 week | In queue |
| Nexus Team | Mobile testing infrastructure provisioning | High | 3 weeks | Blocked |
| Insight Engine | Data pipeline scaling | Low | Indefinite | Not requested formally |

---

## API Dependencies Between Teams

```
┌─────────────────┐         User Profile API          ┌─────────────────┐
│  VELOCITY SQUAD  │ ──────────────────────────────▶  │   NEXUS TEAM     │
│  (provider)      │   Status: Contract not finalized  │   (consumer)     │
│                  │   Needed: Sprint 5                │                  │
└─────────────────┘                                   └─────────────────┘

┌─────────────────┐           Search API              ┌─────────────────┐
│  CATALYST CREW   │ ──────────────────────────────▶  │  INSIGHT ENGINE  │
│  (provider)      │   Status: No interface agreement  │  (consumer)      │
│                  │   Needed: Sprint 49               │                  │
└─────────────────┘                                   └─────────────────┘

┌─────────────────┐       Authentication Service      ┌─────────────────┐
│   NEXUS TEAM     │ ──────────────────────────────▶  │  ALL TEAMS       │
│  (provider)      │   Status: In development          │  (consumers)     │
│                  │   Needed: Sprint 6                │                  │
└─────────────────┘                                   └─────────────────┘

┌─────────────────┐        Analytics Events API       ┌─────────────────┐
│  VELOCITY SQUAD  │ ──────────────────────────────▶  │  INSIGHT ENGINE  │
│  + CATALYST      │   Status: Informal, undocumented  │  (consumer)      │
│  (providers)     │   Needed: Ongoing                 │                  │
└─────────────────┘                                   └─────────────────┘
```

### API Dependency Details

| # | API | Provider | Consumer | Contract Status | Needed By | Risk |
|---|-----|----------|----------|----------------|-----------|------|
| D-1 | User Profile API | Velocity Squad | Nexus Team | Draft, not finalized | Sprint 5 (2 weeks) | MEDIUM — needs joint refinement this sprint |
| D-2 | Search API | Catalyst Crew | Insight Engine | No agreement exists | Sprint 49 (6 weeks) | LOW — time available but no one driving it |
| D-3 | Auth Service | Nexus Team | All teams | In development | Sprint 6 (4 weeks) | MEDIUM — new team building critical shared service |
| D-4 | Analytics Events | Velocity + Catalyst | Insight Engine | Informal, undocumented | Ongoing | HIGH — breaking changes happen without notice |
| D-5 | Platform Config API | Velocity Squad | Catalyst + Nexus | Stable, documented | Ongoing | LOW — mature API, rarely changes |

---

## Shared Test Environment Constraints

```
┌─────────────────────────────────────────────────┐
│            SHARED STAGING ENVIRONMENT            │
│                                                  │
│   Capacity: 1 deployment at a time              │
│   Current schedule: First-come-first-served      │
│   Conflict frequency: 2-3x per sprint           │
│                                                  │
│   ┌───────────┐ ┌───────────┐ ┌───────────┐    │
│   │ Velocity  │ │ Catalyst  │ │  Nexus    │    │
│   │ deploys   │ │ deploys   │ │ deploys   │    │
│   │ Mon, Wed  │ │ Tue, Thu  │ │ Fri       │    │
│   │ (usual)   │ │ (usual)   │ │ (usual)   │    │
│   └───────────┘ └───────────┘ └───────────┘    │
│                                                  │
│   Insight Engine: No staging deployments         │
│   (tests directly in dev environment)            │
└─────────────────────────────────────────────────┘
```

| Issue | Frequency | Impact | Proposed Solution |
|-------|-----------|--------|-------------------|
| Deployment conflicts | 2-3x/sprint | 2-4 hours lost per conflict | Shared deployment calendar |
| Environment instability after deploys | Weekly | Other teams can't test until rollback | Automated smoke tests post-deploy |
| No dedicated mobile testing env | Ongoing | Nexus tests on shared web staging | Tom Harrison to provision mobile staging |
| No environment for Insight Engine | Ongoing | Analytics tested in dev only | Include in infrastructure planning |

---

## Dependency Risk Summary

### Critical Path Dependencies (Next 3 Sprints)

| Sprint | Dependency | Risk | Action Required |
|--------|-----------|------|-----------------|
| 48 | David Kim for Catalyst UI work | HIGH | Resolve designer allocation |
| 48 | Tom Harrison for Velocity caching infra | MEDIUM | Confirm Tom's availability |
| 48 | Velocity API contract for Nexus | HIGH | Schedule joint refinement THIS SPRINT |
| 49 | All teams for coordinated release | HIGH | Program Increment planning needed |
| 49 | Search API contract for Insight Engine | MEDIUM | Catalyst + Insight Engine alignment |
| 49 | Auth service ready for integration | MEDIUM | Nexus to provide integration guide |

### Dependency Heat Map

```
                 DEPENDS ON →
                 Velocity  Catalyst  Nexus  Insight  David  Tom
  Velocity       —         LOW       LOW    LOW      HIGH   MED
  Catalyst       LOW       —         LOW    LOW      HIGH   HIGH
  Nexus          HIGH      LOW       —      LOW      MED    HIGH
  Insight        MED       MED       LOW    —        NONE*  LOW

  * Insight Engine has no design allocation — this is a gap, not low dependency
```

---

## Recommendations

1. **Immediate:** Schedule Velocity + Nexus joint refinement for User Profile API contract (this sprint)
2. **Sprint 48:** Establish shared staging deployment calendar managed by Tom Harrison
3. **Sprint 48:** Begin Catalyst + Insight Engine conversation about Search API contract
4. **Sprint 49:** Program Increment planning event — all teams align on next 3-sprint plan
5. **Ongoing:** Resolve David Kim shared allocation (see organizational impediment campaign)
6. **Ongoing:** Create infrastructure request prioritization framework with Tom Harrison
