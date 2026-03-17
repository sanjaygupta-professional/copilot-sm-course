# Catalyst Crew

The Catalyst Crew is the Search & Discovery team within the Horizon Program. Their SM is Ana Martinez, your closest peer and weekly coffee companion.

---

## Team Overview

| Attribute | Details |
|-----------|---------|
| **Team Name** | Catalyst Crew |
| **Organization** | Accenture - Internal Digital Products |
| **Product** | AKX (Accenture Knowledge Exchange) |
| **Focus Area** | Search & Discovery |
| **Team Size** | 6 members |
| **Sprint Length** | 2 weeks (Wednesday to Tuesday) |
| **Current Sprint** | Sprint 47 |
| **Scrum Master** | Ana Martinez |

---

## Team Structure

| Role | Name | Location | Notes |
|------|------|----------|-------|
| Scrum Master | Ana Martinez | New York | 7 years SM experience, PSM-II certified |
| Product Owner | Derek Foster | New York | Veteran PO, 10+ years, sometimes micromanages |
| Senior Developer | Sofia Rodriguez | New York | Strongest engineer on the team, considering leaving |
| Developer | Kevin Park | Chicago | Solid, reliable performer |
| Developer | Aisha Johnson | New York | 3 years experience, growing well |
| QA Engineer | Rachel Green | New York | Thorough, detail-oriented |

---

## Team Dynamics

### Strengths

- **Strong team culture** - The team genuinely likes working together
- **Good facilitation** - Ana runs effective ceremonies when morale is up
- **Quality mindset** - Rachel and Sofia hold high standards
- **Collaborative** - Kevin and Aisha pair program regularly

### Challenges

- **Tech debt crisis** - 40% of the codebase is legacy code that causes constant production issues
- **Senior dev retention risk** - Sofia Rodriguez is actively frustrated and considering leaving
- **PO resistance to refactoring** - Derek Foster resists putting refactoring stories in the sprint, viewing them as "not delivering value"
- **Morale erosion** - Constant firefighting is wearing the team down
- **Velocity decline** - Trend is clearly downward over the past 4 sprints

---

## Velocity History (Last 8 Sprints)

| Sprint | Points Completed | Notes |
|--------|-----------------|-------|
| Sprint 40 | 45 | Baseline |
| Sprint 41 | 44 | Stable |
| Sprint 42 | 32 | Holiday sprint, reduced capacity |
| Sprint 43 | 42 | Good sprint, but started seeing more production issues |
| Sprint 44 | 38 | Production incident consumed 2 days |
| Sprint 45 | 35 | Sofia escalated tech debt concerns |
| Sprint 46 | 31 | Two unplanned production fixes, morale low |
| Sprint 47 | TBD | Current sprint, already dealing with a search index outage |

**Average Velocity:** 38 points (excluding Sprint 42)
**Velocity Trend:** Down 26% over 4 sprints (42 → 38 → 35 → 31)

### Other Key Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Sprint Goal Achievement | 55% | 85% |
| Carryover Rate | 25% | <10% |
| Bug Escape Rate | 12% | <5% |
| Unplanned Work Ratio | 35% | <15% |
| Team NPS | +8 | +25 |

---

## The Tech Debt Situation

This is the defining challenge for the Catalyst Crew and a frequent topic in your coffee chats with Ana.

### The Problem

The search indexing codebase was written 4 years ago as a prototype. It was never refactored for production scale. Now it:

- Causes 2-3 production incidents per month
- Requires manual intervention for search index rebuilds
- Has no automated tests for 60% of the legacy modules
- Takes 3x longer to add new features compared to clean code areas

### The People Dynamics

**Sofia Rodriguez** has been raising tech debt concerns for 6 months. She's the only developer who fully understands the legacy codebase, which makes her indispensable but also exhausted. She told Ana privately that she's updating her resume.

**Derek Foster** is a veteran PO who measures success by feature delivery. He views refactoring as "gold plating" and pushes back on any story that doesn't have a direct user-facing outcome. His stance: "We can't afford to slow down."

**Ana Martinez** is caught in the middle. She knows Sofia is right about the tech debt, but she also knows Derek controls the backlog. Ana has tried facilitating conversations between them but Derek defaults to "we'll address it next quarter."

### Why This Matters to You

- Ana regularly asks for your advice during your weekly coffee meetings
- The tech debt causes search API issues that sometimes block Velocity Squad stories
- This scenario is used in several course exercises about cross-team coaching and impediment management
- It represents a common SM challenge: when the PO and senior dev fundamentally disagree

---

## Dependencies

### Incoming Dependencies

| From | What | Impact |
|------|------|--------|
| Velocity Squad | Core Search API v2 | Catalyst Crew's new search features depend on this API |
| Tom Harrison (Infra) | Elasticsearch cluster upgrades | Needed for search performance improvements |

### Outgoing Dependencies

| To | What | Impact |
|----|------|--------|
| Nexus Team | Search Results API | Nexus is blocked until legacy migration unblocks this |
| Insight Engine | Search metrics endpoints | Analytics team needs consistent data from search |

### Shared Resources

| Resource | Allocation | Notes |
|----------|------------|-------|
| David Kim (UX) | 25% (~20% actual) | Limited availability for search UX improvements |
| Maya Chen (QA) | Part-time shared | Also covers Insight Engine |
| Tom Harrison (Infra) | As needed | Search indexing infrastructure is a frequent need |

---

## Ana's Coaching Opportunities

These are areas where Ana has asked for (or would benefit from) your peer support:

1. **Executive communication** - Ana avoids escalating to Jennifer Walsh. She handles everything at team level even when program-level support is needed.
2. **Navigating PO conflict** - Ana has the facilitation skills to mediate the Derek/Sofia tension but hasn't found the right approach yet.
3. **Data-driven arguments** - Ana knows the tech debt is a problem but hasn't built the metrics case to convince Derek and leadership.
4. **Retention risk escalation** - Sofia's potential departure is a program-level risk that Jennifer should know about, but Ana hasn't raised it.

---

**See also:**
- [PROGRAM-PERSONAS.md](PROGRAM-PERSONAS.md) - Detailed profiles of Ana, Derek, Sofia, and others
- [HORIZON-PROGRAM.md](HORIZON-PROGRAM.md) - Program-level context
- [TEAM.md](TEAM.md) - Your primary team, the Velocity Squad
