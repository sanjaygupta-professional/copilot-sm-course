# Velocity Squad Working Agreements

The team's established norms and agreements.

---

## Communication Agreements

### Response Time Expectations

| Urgency Level | Channel | Expected Response |
|---------------|---------|-------------------|
| **Emergency** | Phone call + Teams @mention | Within 30 minutes |
| **Urgent** | Teams DM with @mention | Within 2 hours |
| **Same Day** | Teams direct message | End of business day |
| **Async** | Email or Teams channel | Within 24 hours |
| **FYI** | Email (no action needed) | No response required |

### Channel Usage

| Channel | Purpose | Who Uses |
|---------|---------|----------|
| **#velocity-squad** | Team discussions, decisions, announcements | Whole team |
| **#velocity-squad-standups** | Async standup updates (for Priya) | Whole team |
| **#velocity-squad-social** | Non-work chat, celebrations | Optional |
| **#akx-general** | Cross-team AKX discussions | AKX community |
| **Email** | Formal communications, stakeholders | External communication |

### Decision Documentation

All significant decisions must be:
1. Discussed in #velocity-squad or a meeting
2. Documented in Confluence within 24 hours
3. Announced in #velocity-squad with link to doc
4. Posted in async format for Priya's review

**What counts as "significant":**
- Technical architecture choices
- Process changes
- Sprint scope changes
- Stakeholder commitments

---

## Meeting Agreements

### Core Hours

| Region | Overlap Time | Notes |
|--------|--------------|-------|
| **US (ET)** | 10:00 AM - 3:00 PM ET | Core collaboration hours |
| **India (IST)** | 8:30 PM - 1:30 AM IST | Priya joins from home |

All ceremonies and required meetings happen during overlap time.

### Meeting Norms

1. **Start on time** - Don't wait for latecomers
2. **Cameras on** for ceremonies (optional for other meetings)
3. **Mute when not speaking**
4. **One conversation at a time**
5. **Timeboxes respected** - Facilitator enforces
6. **Notes taken** and shared within 24 hours
7. **Decisions documented** in Confluence

### Focus Time

**Focus Fridays (Proposed - not yet implemented):**
- No scheduled meetings on Fridays
- Developers can focus on deep work
- Emergency meetings only with team approval

**Current State:** Not yet approved by leadership. This is a recurring retro action item.

---

## Ceremony Agreements

### Daily Standup

| Attribute | Agreement |
|-----------|-----------|
| **Time** | 9:30 AM ET (8:00 PM IST) |
| **Duration** | 15 minutes maximum |
| **Location** | Teams (hybrid - NY in room, others remote) |
| **Format** | Each person: What I did, what I'm doing, blockers |
| **Rule** | No problem-solving - take it offline |

**Async Option:**
- Priya can post async update in #velocity-squad-standups by 9:30 AM ET
- She still joins live when possible

### Sprint Planning

| Attribute | Agreement |
|-----------|-----------|
| **When** | Every other Wednesday, 10:00 AM ET |
| **Duration** | 2 hours maximum |
| **Pre-work** | Backlog refined, stories estimated |
| **Output** | Sprint goal, committed stories, capacity noted |

**Capacity Calculation:**
- 6 points/day per developer (Lisa, Marcus, Priya)
- 4 points/day for David (shared resource)
- Account for PTO, meetings, support rotation

### Sprint Review

| Attribute | Agreement |
|-----------|-----------|
| **When** | Every other Tuesday, 2:00 PM ET |
| **Duration** | 1 hour maximum |
| **Attendees** | Team + stakeholders |
| **Format** | Demo completed work, gather feedback |
| **Rule** | Only demo "Done" items (per DoD) |

### Sprint Retrospective

| Attribute | Agreement |
|-----------|-----------|
| **When** | Every other Tuesday, 3:30 PM ET (after Review) |
| **Duration** | 1.5 hours maximum |
| **Attendees** | Team only (no stakeholders) |
| **Format** | Varies (see below) |
| **Output** | 1-3 actionable improvements with owners |

**Retro Formats Used:**
- Start/Stop/Continue (default - getting stale)
- What Went Well / What Didn't / Ideas
- Sailboat (occasionally)

### Backlog Refinement

| Attribute | Agreement |
|-----------|-----------|
| **When** | Thursdays, 2:00 PM ET |
| **Duration** | 1 hour |
| **Goal** | Stories for next sprint are ready |
| **Ready Criteria** | Acceptance criteria, estimate, design ready |

---

## Definition of Done

A story is "Done" when:

- [ ] **Code complete** - All code written and committed
- [ ] **Peer reviewed** - At least one developer approved PR
- [ ] **Unit tests** - Written and passing (>80% coverage for new code)
- [ ] **Integration tests** - Passing in CI/CD pipeline
- [ ] **QA sign-off** - James or Emma has tested and approved
- [ ] **Documentation** - Updated if user-facing change
- [ ] **Staging deployed** - Working in staging environment
- [ ] **PO acceptance** - Raj has accepted the story

**What's NOT Done:**
- Code in PR but not merged
- "Works on my machine"
- Missing tests
- No QA sign-off
- Not deployed to staging

---

## Definition of Ready

A story is "Ready" for sprint when:

- [ ] **User story format** - As a [user], I want [goal], so that [benefit]
- [ ] **Acceptance criteria** - Clear, testable criteria (Given/When/Then)
- [ ] **Estimate** - Team has estimated in story points
- [ ] **Dependencies identified** - External dependencies noted
- [ ] **Design ready** - David has provided designs (if UI change)
- [ ] **Small enough** - Can complete in one sprint
- [ ] **Questions answered** - No open questions

**What's NOT Ready:**
- "We'll figure it out in sprint"
- Missing acceptance criteria
- No design when design is needed
- Larger than 13 points

---

## Code & Quality Agreements

### Code Review

- All code requires at least 1 approving review
- Lisa reviews all architectural changes
- Reviews should happen within 4 hours (business hours)
- Use conventional comments (e.g., "nit:", "question:", "blocker:")

### Testing

| Type | Responsibility | When |
|------|---------------|------|
| Unit tests | Developer who writes code | With PR |
| Integration tests | Developer | With PR |
| Regression tests | QA (James/Emma) | Before release |
| Exploratory testing | QA | During sprint |

### Technical Debt

**Current Agreement:** No dedicated allocation (this is a retro pain point)

**Proposed:** 10% of sprint capacity for tech debt (not yet approved)

---

## Escalation Path

### For Impediments

1. **Try to resolve yourself** (same day)
2. **Raise to Scrum Master** (you) (within 24 hours)
3. **SM escalates to Jennifer** (VP) if needed
4. **Steering Committee** for organizational issues

### For Interpersonal Issues

1. **Direct conversation** between parties
2. **SM facilitation** if needed
3. **Jennifer involvement** for serious issues
4. **HR** for policy violations

---

## Remote Work Agreements

### For Priya (and anyone working remote)

1. **Async-first documentation** - All decisions documented
2. **Recording ceremonies** - Sprint reviews recorded for later viewing
3. **Flexible standup** - Async option available
4. **Camera optional** - Understand video fatigue
5. **Explicit inclusion** - Facilitators call on remote participants

### For David (Cross-timezone)

1. **Office hours** - David available 10 AM - 12 PM ET for Velocity Squad
2. **Advance planning** - Design needs identified 1 sprint ahead
3. **Clear handoffs** - Design specs documented in Figma + Confluence

---

## Agreement Review

These agreements are reviewed:
- **Quarterly** - Full team review in retro
- **As needed** - When agreements aren't working
- **When onboarding** - New team members review and commit

**Last Updated:** Sprint 46 (October 2025)

---

## What's Working

Based on recent retros, these agreements work well:
- Definition of Done (clear, followed)
- Code review expectations
- Channel usage
- Meeting camera norms

## What Needs Improvement

These are pain points:
- Standup timebox (not enforced)
- Focus Fridays (not implemented)
- Tech debt allocation (not approved)
- Async decision documentation (inconsistent)

---

**These working agreements provide the foundation for course exercises on process improvement and team facilitation.**
