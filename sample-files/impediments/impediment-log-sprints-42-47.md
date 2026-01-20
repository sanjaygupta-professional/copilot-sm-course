# Impediment Log - Sprints 42-47

A running log of impediments affecting the Velocity Squad.

---

## How to Use This Log

Each impediment is categorized by:
- **Category:** Technical, Resource, Process, External, Organizational
- **Status:** Open, In Progress, Resolved, Escalated
- **Impact:** High (blocks sprint goal), Medium (affects velocity), Low (minor annoyance)

---

## Sprint 47 (Current)

### IMP-47-001: Rate Limit Requirements Unclear
| Field | Value |
|-------|-------|
| **Raised By** | James |
| **Date Raised** | Oct 17, 2025 |
| **Category** | Process |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | Acceptance criteria for rate limiting didn't specify actual limits. Dev started with assumption, but business needs were different. |
| **Affected Stories** | Rate limiting implementation (5 pts) |
| **Resolution** | Raj confirmed with Richard: 500/min this sprint, tiered limits in Sprint 48 |
| **Date Resolved** | Oct 21, 2025 |
| **Days Open** | 4 |
| **Root Cause** | Story not refined enough, requirements not confirmed before sprint |

### IMP-47-002: Staging Environment Access
| Field | Value |
|-------|-------|
| **Raised By** | James |
| **Date Raised** | Oct 17, 2025 |
| **Category** | Technical |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | QA couldn't access staging environment logs needed for testing |
| **Affected Stories** | Rate limiting implementation, Push notifications |
| **Resolution** | Tom (Infrastructure) granted access |
| **Date Resolved** | Oct 18, 2025 |
| **Days Open** | 1 |
| **Root Cause** | Access not requested during refinement |

### IMP-47-003: David Pulled to Growth Team
| Field | Value |
|-------|-------|
| **Raised By** | David |
| **Date Raised** | Oct 21, 2025 |
| **Category** | Resource |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | David unavailable for 1 day due to Growth team emergency |
| **Affected Stories** | Email template design, Wireframe feedback |
| **Resolution** | Emergency resolved, David returned next day |
| **Date Resolved** | Oct 22, 2025 |
| **Days Open** | 1 |
| **Root Cause** | Shared resource structure, competing priorities |

### IMP-47-004: PR Review Delays
| Field | Value |
|-------|-------|
| **Raised By** | SM (observed) |
| **Date Raised** | Oct 21, 2025 |
| **Category** | Process |
| **Impact** | Low |
| **Status** | Resolved |
| **Description** | Marcus's PR sat for 3 days without review |
| **Affected Stories** | Notification UI |
| **Resolution** | Lisa reviewed and approved |
| **Date Resolved** | Oct 21, 2025 |
| **Days Open** | 3 |
| **Root Cause** | No SLA on PR reviews, Lisa overloaded |

---

## Sprint 46

### IMP-46-001: Design Dependency - Dashboard
| Field | Value |
|-------|-------|
| **Raised By** | Lisa |
| **Date Raised** | Oct 8, 2025 |
| **Category** | Resource |
| **Impact** | High |
| **Status** | Resolved (Carryover) |
| **Description** | Dashboard redesign story blocked because David's wireframes weren't complete |
| **Affected Stories** | Dashboard redesign (5 pts) |
| **Resolution** | Story carried to Sprint 47, David prioritized for Sprint 47 |
| **Date Resolved** | Oct 15, 2025 |
| **Days Open** | 7 |
| **Root Cause** | Shared resource, David pulled to Platform team |

### IMP-46-002: Test Environment Instability
| Field | Value |
|-------|-------|
| **Raised By** | James |
| **Date Raised** | Oct 3, 2025 |
| **Category** | Technical |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | Test environment crashing intermittently, affecting QA testing |
| **Affected Stories** | All stories requiring QA |
| **Resolution** | Infrastructure team identified memory leak, patched |
| **Date Resolved** | Oct 7, 2025 |
| **Days Open** | 4 |
| **Root Cause** | Memory leak in test environment database |

### IMP-46-003: Priya Missing Key Decision
| Field | Value |
|-------|-------|
| **Raised By** | Priya |
| **Date Raised** | Oct 10, 2025 |
| **Category** | Process |
| **Impact** | Low |
| **Status** | Open |
| **Description** | API design decision made during Priya's night, she wasn't included |
| **Affected Stories** | Search optimization |
| **Resolution** | Pending - need async decision log process |
| **Date Resolved** | - |
| **Days Open** | 5+ |
| **Root Cause** | Timezone gap, decisions not documented |

---

## Sprint 45

### IMP-45-001: Lisa PTO Impact
| Field | Value |
|-------|-------|
| **Raised By** | SM |
| **Date Raised** | Sep 25, 2025 |
| **Category** | Resource |
| **Impact** | High |
| **Status** | Resolved |
| **Description** | Lisa on PTO for 4 days, reduced capacity and mentorship availability |
| **Affected Stories** | Multiple stories delayed |
| **Resolution** | Sprint capacity adjusted, some stories deferred |
| **Date Resolved** | Oct 1, 2025 |
| **Days Open** | 6 |
| **Root Cause** | Single point of dependency on Lisa |

### IMP-45-002: External API Rate Limited
| Field | Value |
|-------|-------|
| **Raised By** | Priya |
| **Date Raised** | Sep 26, 2025 |
| **Category** | External |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | Third-party search API started rate limiting our requests |
| **Affected Stories** | Search integration |
| **Resolution** | Implemented request queuing and backoff |
| **Date Resolved** | Sep 29, 2025 |
| **Days Open** | 3 |
| **Root Cause** | Usage exceeded free tier, vendor policy change |

### IMP-45-003: David Design Review Delay
| Field | Value |
|-------|-------|
| **Raised By** | Marcus |
| **Date Raised** | Sep 27, 2025 |
| **Category** | Resource |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | Needed design review from David, waited 3 days |
| **Affected Stories** | Notification UI initial design |
| **Resolution** | David completed review |
| **Date Resolved** | Sep 30, 2025 |
| **Days Open** | 3 |
| **Root Cause** | Shared resource, competing priorities |

---

## Sprint 44

### IMP-44-001: Design Capacity - 4 Stories Blocked
| Field | Value |
|-------|-------|
| **Raised By** | Lisa |
| **Date Raised** | Sep 11, 2025 |
| **Category** | Resource |
| **Impact** | High |
| **Status** | Resolved (Carryover) |
| **Description** | 4 stories requiring design input were blocked due to David's capacity |
| **Affected Stories** | Notification UI, Dashboard v1, Settings page, Profile redesign |
| **Resolution** | 2 stories completed, 2 carried over |
| **Date Resolved** | Sep 24, 2025 |
| **Days Open** | 13 |
| **Root Cause** | Shared resource, no dedicated designer |

### IMP-44-002: Unclear Requirements
| Field | Value |
|-------|-------|
| **Raised By** | Lisa |
| **Date Raised** | Sep 13, 2025 |
| **Category** | Process |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | 2 stories had unclear acceptance criteria, developers had to make assumptions |
| **Affected Stories** | User preferences, Export feature |
| **Resolution** | Raj clarified requirements mid-sprint |
| **Date Resolved** | Sep 18, 2025 |
| **Days Open** | 5 |
| **Root Cause** | Insufficient refinement, PO learning curve |

### IMP-44-003: Stakeholder Availability
| Field | Value |
|-------|-------|
| **Raised By** | Raj |
| **Date Raised** | Sep 16, 2025 |
| **Category** | External |
| **Impact** | Low |
| **Status** | Resolved |
| **Description** | Needed confirmation from Richard on feature behavior, he was traveling |
| **Affected Stories** | Priority feature |
| **Resolution** | Richard responded via email 2 days later |
| **Date Resolved** | Sep 18, 2025 |
| **Days Open** | 2 |
| **Root Cause** | Stakeholder travel, async communication |

---

## Sprint 43

### IMP-43-001: External API Outage
| Field | Value |
|-------|-------|
| **Raised By** | Priya |
| **Date Raised** | Aug 30, 2025 |
| **Category** | External |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | Third-party authentication service had 4-hour outage |
| **Affected Stories** | SSO integration |
| **Resolution** | Service restored, testing resumed |
| **Date Resolved** | Aug 30, 2025 |
| **Days Open** | <1 |
| **Root Cause** | Vendor outage, outside our control |

### IMP-43-002: Design Review Delay
| Field | Value |
|-------|-------|
| **Raised By** | Marcus |
| **Date Raised** | Aug 31, 2025 |
| **Category** | Resource |
| **Impact** | Low |
| **Status** | Resolved |
| **Description** | Needed quick design feedback, David unavailable |
| **Affected Stories** | Minor UI update |
| **Resolution** | Marcus proceeded with best judgment, David approved retroactively |
| **Date Resolved** | Sep 2, 2025 |
| **Days Open** | 2 |
| **Root Cause** | Shared resource |

---

## Sprint 42 (Holiday Sprint)

### IMP-42-001: Reduced Capacity
| Field | Value |
|-------|-------|
| **Raised By** | SM |
| **Date Raised** | Aug 16, 2025 |
| **Category** | Resource |
| **Impact** | High |
| **Status** | Resolved |
| **Description** | US Labor Day + India Independence Day = reduced team capacity |
| **Affected Stories** | All - sprint scope reduced |
| **Resolution** | Committed to fewer points (planned) |
| **Date Resolved** | Aug 27, 2025 |
| **Days Open** | 11 (sprint duration) |
| **Root Cause** | Planned holidays, not truly an impediment |

### IMP-42-002: Environment Outage
| Field | Value |
|-------|-------|
| **Raised By** | James |
| **Date Raised** | Aug 18, 2025 |
| **Category** | Technical |
| **Impact** | Medium |
| **Status** | Resolved |
| **Description** | Staging environment down for 1 day |
| **Affected Stories** | All stories requiring QA |
| **Resolution** | Infrastructure restored service |
| **Date Resolved** | Aug 19, 2025 |
| **Days Open** | 1 |
| **Root Cause** | Database failover issue |

---

## Impediment Analysis Summary

### By Category (Last 6 Sprints)

| Category | Count | Avg Days Open |
|----------|-------|---------------|
| Resource | 7 | 5.3 days |
| Process | 4 | 3.8 days |
| Technical | 3 | 2.0 days |
| External | 3 | 1.7 days |
| Organizational | 0 | - |

**Key Finding:** Resource impediments (mostly David's capacity) are the most frequent and longest-lasting.

### By Impact (Last 6 Sprints)

| Impact | Count | Resulted in Carryover |
|--------|-------|----------------------|
| High | 5 | 3 (60%) |
| Medium | 9 | 1 (11%) |
| Low | 3 | 0 (0%) |

### Recurring Patterns

1. **Design capacity (7 occurrences)**
   - David's shared resource status causes regular delays
   - Stories frequently blocked or carried over
   - Escalated to Jennifer in Sprint 46 Review

2. **Requirements clarity (3 occurrences)**
   - Stories enter sprint without clear acceptance criteria
   - Developers make assumptions, sometimes incorrect
   - PO coaching needed

3. **Timezone communication gaps (2 occurrences)**
   - Decisions made when Priya is offline
   - Async documentation inconsistent
   - Need better process

4. **PR review delays (2 occurrences)**
   - No SLA on reviews
   - Lisa often bottleneck
   - Team could distribute reviewing

### Escalation Status

| Impediment Pattern | Escalated To | Date | Status |
|-------------------|--------------|------|--------|
| Design capacity | Jennifer Walsh | Oct 15, 2025 | In discussion |
| Focus Fridays | Jennifer Walsh | Pending | Not yet submitted |
| Tech debt allocation | Jennifer Walsh | Pending | Not yet submitted |

---

## Action Items

Based on this analysis:

1. **Design Capacity**
   - [x] Raised to Jennifer in Sprint 46 Review
   - [ ] Follow up on Jennifer's conversation with Design leadership
   - [ ] Propose interim solution (plan design 1 sprint ahead)

2. **Requirements Clarity**
   - [ ] Strengthen Definition of Ready
   - [ ] Coach Raj on acceptance criteria
   - [ ] Add refinement checkpoint

3. **Async Communication**
   - [ ] Implement async decision log (Priya to propose)
   - [ ] Document key decisions in Confluence within 24 hours
   - [ ] Tag Priya on decision discussions

4. **PR Review Process**
   - [ ] Establish 4-hour review SLA during business hours
   - [ ] Distribute reviews across team (not just Lisa)

---

**Last Updated:** October 22, 2025 (Sprint 47)
