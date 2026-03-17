# Cross-Team Dependency Log — Horizon Program

## Active Dependencies

| ID | Dependency | From Team | To Team/Resource | Raised | Status | Impact | Priority |
|----|-----------|-----------|-----------------|--------|--------|--------|----------|
| DEP-001 | API v3 documentation | Nexus Team | Velocity Squad | Sprint 4 Day 2 | In Progress | 8 points blocked, 1 day delay | High |
| DEP-002 | Design review for search filters | Velocity Squad | David Kim (shared) | Sprint 47 Day 1 | Waiting | 13 points blocked | Critical |
| DEP-003 | Design review for mobile notifications | Nexus Team | David Kim (shared) | Sprint 4 Day 2 | Waiting | 5 points blocked | High |
| DEP-004 | Analytics API endpoint | Catalyst Crew | Insight Engine | Sprint 47 | Blocked | Search ranking depends on analytics data | High |
| DEP-005 | Shared test environment access | All Teams | Tom Harrison (Infra) | Sprint 46 | Scheduled | Integration testing blocked Thu-Fri | Medium |
| DEP-006 | Authentication service migration | All Teams | Velocity Squad | PI-12 | Planned | All teams must update by Sprint 50 | Critical |
| DEP-007 | Design system components | Catalyst Crew | David Kim (shared) | Sprint 46 | Waiting | UI consistency across teams | Medium |

## Resolved Dependencies (Last 2 Sprints)

| ID | Dependency | Resolution | Days to Resolve | Lesson Learned |
|----|-----------|------------|-----------------|----------------|
| DEP-R01 | Database migration timing | Velocity Squad ↔ Catalyst | Coordinated during SoS, migrated on shared maintenance window | 3 days | Schedule shared migrations at SoS, not ad hoc |
| DEP-R02 | Notification service capacity | Nexus → Tom Harrison | Tom added capacity during Sprint 3 | 5 days | Infrastructure requests need 1 sprint lead time |

## Dependency Heat Map

```
             Velocity   Catalyst   Nexus   Insight   Infra    Design
Velocity     ----       Low        Med     Low       Med      HIGH
Catalyst     Low        ----       Low     High      Med      HIGH
Nexus        Med        Low        ----    Low       Med      HIGH
Insight      Low        High       Low     ----      Low      Low
```

**Critical bottlenecks:** David Kim (Design) and Tom Harrison (Infra) appear in most dependency chains.

## Escalation History

### David Kim (Design) — Escalated 3 times in last 4 sprints
- Sprint 44: Escalated to Jennifer Walsh. Result: David prioritized Velocity Squad for 3 days. Temporary fix.
- Sprint 46: Raised at SoS. All 3 SMs agreed David is overloaded. Jennifer acknowledged but no structural change.
- Sprint 47: Re-escalated with quantified data (47 story points blocked across 3 teams in 4 sprints). Awaiting response.

### Tom Harrison (Infra) — Escalated once
- Sprint 46: Shared test environment only available Mon-Wed due to maintenance. Teams coordinated testing schedule. Not ideal but manageable.
