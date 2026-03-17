# The Horizon Program

The Horizon Program is the organizational umbrella for all AKX (Accenture Knowledge Exchange) development teams. This is the program-level context for cross-team exercises.

---

## Program Overview

| Attribute | Details |
|-----------|---------|
| **Program Name** | Horizon Program |
| **Organization** | Accenture - Internal Digital Products |
| **Product** | AKX (Accenture Knowledge Exchange) |
| **Number of Teams** | 4 |
| **Total Headcount** | ~25 across all teams |
| **Current PI** | PI-12 |
| **PI Theme** | "Unified Search & Analytics" |
| **PI Duration** | Quarterly (12 weeks) |

---

## Teams

| Team | Focus Area | SM | Team Size | Sprint |
|------|------------|-----|-----------|--------|
| Velocity Squad | Core Platform & Integrations | You | 7 | Sprint 47 |
| Catalyst Crew | Search & Discovery | Ana Martinez | 6 | Sprint 47 |
| Nexus Team | Mobile & Notifications | Chris Wong | 7 | Sprint 4 |
| Insight Engine | Analytics & Reporting | Vacant (you cover 20%) | 5 | No formal sprints |

### How the Teams Connect

The four teams build different parts of the AKX platform, but their work is deeply interdependent:

- **Velocity Squad** provides the core APIs and integrations that all other teams consume
- **Catalyst Crew** builds the search and discovery experience on top of core platform services
- **Nexus Team** delivers mobile access and the notification system, pulling from core and search APIs
- **Insight Engine** provides the analytics dashboards that all teams (and leadership) depend on for metrics and reporting

---

## Program Cadences

| Ceremony | Frequency | Day/Time | Duration | Attendees |
|----------|-----------|----------|----------|-----------|
| Scrum of Scrums (SoS) | Weekly | Monday 10:00 AM ET | 30 min | All SMs + Jennifer Walsh |
| Cross-Team Demo | Monthly | Last Friday of month, 2:00 PM ET | 1 hour | All teams + stakeholders |
| Program Increment Planning | Quarterly | 2-day event at PI boundaries | 2 days | All teams, POs, leadership |
| PI Retrospective | Quarterly | End of each PI | 2 hours | SMs, POs, Jennifer Walsh |
| Stakeholder Review | Monthly | Second Tuesday, 3:00 PM ET | 45 min | POs, Jennifer, Richard Thorne |

### Scrum of Scrums Format

The weekly SoS follows a structured format:

1. **Team updates** (2 min per SM): What did we deliver? What's next? What's blocked?
2. **Cross-team dependencies** (10 min): Review dependency board, flag risks
3. **Program-level impediments** (10 min): Escalations, shared resource conflicts
4. **Action items** (5 min): Assign owners, confirm follow-ups

Jennifer Walsh facilitates. You are expected to come prepared with blockers, dependency updates, and any metrics Jennifer has requested.

---

## Program Leadership

| Role | Name | Responsibility |
|------|------|----------------|
| VP Internal Digital Products / RTE-equivalent | Jennifer Walsh | Program coordination, delivery oversight, team performance |
| Chief Knowledge Officer / Executive Sponsor | Richard Thorne | Strategic direction, OKR alignment, quarterly business reviews |
| Managing Director, Strategy | Sarah Mitchell | Organizational adoption metrics, digital transformation KPIs |
| Infrastructure Lead | Tom Harrison | Shared infrastructure and DevOps across all 4 teams |

---

## Program-Level Metrics

### Current PI-12 OKRs

| Objective | Key Result | Status |
|-----------|------------|--------|
| Unify search experience across platforms | Reduce average search time from 8 min to 4 min | On Track |
| Deliver mobile-first experience | Launch mobile app beta to 5,000 users | At Risk |
| Establish data-driven decision making | All 4 teams using analytics dashboards for sprint reviews | Behind |
| Improve cross-team collaboration | Reduce cross-team dependency wait time by 30% | On Track |

### Adoption Metrics (Richard Thorne's Focus)

| Metric | Current | PI-12 Target | Annual Target |
|--------|---------|--------------|---------------|
| Weekly Active Users | 43% | 50% | 60% |
| Average Search Time | 8 min | 4 min | 2 min |
| Mobile Adoption | 0% (not launched) | 5% | 25% |
| Platform NPS | +12 | +16 | +20 |

Richard expects quarterly OKR alignment presentations. He has about 5 minutes of attention for each team, so your updates need to be sharp and data-driven.

---

## Shared Dependencies

### Tom Harrison's Infrastructure Team

Tom's team of 2 supports all 4 AKX teams. This is the most common bottleneck in the program.

| Team | Infrastructure Dependency | Frequency of Need |
|------|---------------------------|-------------------|
| Velocity Squad | API gateway, CI/CD pipeline | Ongoing |
| Catalyst Crew | Search indexing infrastructure, Elasticsearch clusters | High - weekly requests |
| Nexus Team | Mobile backend services, push notification infrastructure | High - new platform setup |
| Insight Engine | Data pipeline, analytics database | Moderate - batch processing |

**Current state:** Tom is overworked and understaffed. Average wait time for infrastructure requests is 5 business days. This is a program-level impediment that Jennifer is aware of but hasn't resolved.

### Cross-Team API Dependencies

| Consumer Team | Provider Team | API/Service | Status |
|---------------|---------------|-------------|--------|
| Catalyst Crew | Velocity Squad | Core Search API v2 | In Progress |
| Nexus Team | Velocity Squad | Notification API | MVP Complete |
| Nexus Team | Catalyst Crew | Search Results API | Blocked (legacy migration) |
| Insight Engine | All Teams | Metrics Collection Endpoints | Inconsistent |
| All Teams | Insight Engine | Analytics Dashboard API | Unreliable |

### Shared Designer Bottleneck

David Kim (UX Designer) is shared across 3 of the 4 teams. His allocation:

| Team | Allocation | Reality |
|------|------------|---------|
| Velocity Squad | 50% | ~35% (pulled into Nexus work) |
| Catalyst Crew | 25% | ~20% |
| Nexus Team | 25% | ~40% (new app needs heavy UX) |
| Insight Engine | 0% | ~5% (occasional dashboard reviews) |

This is a recurring pain point in SoS discussions. Jennifer has requested a business case for a second designer.

---

## Program-Level Challenges

These are the challenges you'll encounter in program-level exercises:

1. **Shared designer bottleneck** - David Kim is stretched across teams, causing story blocks and inconsistent UX
2. **Cross-team API dependencies** - Teams are often blocked waiting on other teams' API deliverables
3. **Inconsistent Definition of Done** - Each team has a different DoD, causing integration quality issues
4. **Infrastructure understaffing** - Tom Harrison's team of 2 can't keep up with 4 teams' needs
5. **Insight Engine instability** - The team without an SM produces unreliable dashboards everyone depends on
6. **PI planning alignment** - Teams set sprint goals independently without enough cross-team coordination
7. **Executive reporting burden** - Richard Thorne wants different metrics than Jennifer Walsh, creating duplicate reporting work

---

## Your Role in the Program

As the Velocity Squad SM, you participate in the Horizon Program in several ways:

- **SoS representative** for Velocity Squad every Monday
- **Interim SM** for Insight Engine (20% of your time)
- **Peer mentor** to Chris Wong (Nexus Team SM, less experienced)
- **Cross-team dependency coordinator** when your team's APIs are blocking others
- **PI Planning participant** helping your team plan and negotiate commitments

You're also the SM that Jennifer Walsh trusts most to pilot new practices. When she wants to try something across the program, she usually starts with your team.

---

**See also:**
- [TEAM.md](TEAM.md) - Your primary team, the Velocity Squad
- [CATALYST-CREW.md](CATALYST-CREW.md) - Ana Martinez's team
- [NEXUS-TEAM.md](NEXUS-TEAM.md) - Chris Wong's team
- [INSIGHT-ENGINE.md](INSIGHT-ENGINE.md) - The team you interim-cover
- [PROGRAM-PERSONAS.md](PROGRAM-PERSONAS.md) - Detailed profiles of program-level contacts
