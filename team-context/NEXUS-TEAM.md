# Nexus Team

The Nexus Team is the Mobile & Notifications team within the Horizon Program. Their SM is Chris Wong, a former developer in his first distributed team leadership role. You serve as an informal mentor to Chris.

---

## Team Overview

| Attribute | Details |
|-----------|---------|
| **Team Name** | Nexus Team |
| **Organization** | Accenture - Internal Digital Products |
| **Product** | AKX (Accenture Knowledge Exchange) |
| **Focus Area** | Mobile & Notifications |
| **Team Size** | 7 members |
| **Sprint Length** | 2 weeks |
| **Current Sprint** | Sprint 4 |
| **Team Age** | 6 weeks (formed from 3 different projects) |
| **Stage** | Forming (Tuckman model) |
| **Scrum Master** | Chris Wong |

---

## Team Structure

| Role | Name | Location | Timezone | Notes |
|------|------|----------|----------|-------|
| Scrum Master | Chris Wong | San Francisco | PST (UTC-8) | 4 years SM experience, first distributed team |
| Product Owner | Maria Santos | São Paulo | BRT (UTC-3) | Very experienced PO, used to co-located teams |
| Senior Developer | Hiroshi Tanaka | Tokyo | JST (UTC+9) | 12 years experience, quiet but technically excellent |
| Developer | Wei Chen | San Francisco | PST (UTC-8) | 5 years experience, strong in mobile dev |
| Developer | Fatima Al-Hassan | Dubai | GST (UTC+4) | 4 years experience, came from a waterfall environment |
| Developer | Ben Cooper | San Francisco | PST (UTC-8) | 3 years experience, energetic, sometimes dominates discussions |
| QA Engineer | Yuki Nakamura | Tokyo | JST (UTC+9) | 6 years experience, meticulous |

### Timezone Map

| Timezone | Members | UTC Offset |
|----------|---------|------------|
| PST (San Francisco) | Chris, Wei, Ben | UTC-8 |
| BRT (São Paulo) | Maria | UTC-3 |
| GST (Dubai) | Fatima | UTC+4 |
| JST (Tokyo) | Hiroshi, Yuki | UTC+9 |

**Maximum timezone spread:** 17 hours (PST to JST)
**Overlap window (all members):** Approximately 30 minutes per day, depending on schedule flexibility

---

## Team Dynamics

### Strengths

- **Diverse skill set** - Team brings mobile, backend, and quality perspectives from different project backgrounds
- **Strong technical talent** - Hiroshi and Wei are highly capable mobile developers
- **Experienced PO** - Maria has a clear product vision and strong stakeholder management skills
- **Eagerness to succeed** - Everyone wants this team to work

### Challenges

- **No established norms** - The team has no working agreements, no shared rituals, no common language yet
- **Timezone coordination** - With a 17-hour spread, synchronous meetings are painful for someone every time
- **Cultural communication differences** - Hiroshi rarely speaks in meetings (cultural norm to listen first). Ben fills silence with his own ideas. Fatima prefers written communication. Maria is direct and fast-paced.
- **Forming stage friction** - Team members default to habits from their previous teams, which sometimes conflict
- **SM learning curve** - Chris has strong technical instincts but sometimes jumps in to solve problems rather than coaching the team to solve them

---

## Velocity History

| Sprint | Points Completed | Notes |
|--------|-----------------|-------|
| Sprint 1 | 28 | First sprint, conservative planning |
| Sprint 2 | 22 | Timezone confusion caused missed handoffs |
| Sprint 3 | 35 | Over-committed, some items not truly done |
| Sprint 4 | 18 (projected) | Current sprint, major scope change mid-sprint |

**Average Velocity:** Not yet stable (too few sprints)
**Pattern:** Erratic, typical for a forming team

### Other Key Metrics

| Metric | Current | Notes |
|--------|---------|-------|
| Sprint Goal Achievement | 25% (1 of 4) | Only Sprint 1 goal was met |
| Carryover Rate | 40% | High, but expected for a new team |
| Standup Attendance | 85% | Rotating schedule helps but isn't perfect |
| Definition of Done | Not established | Each member applies their own standard |

---

## Timezone Strategy

### Rotating Standup Schedule

The team rotates standup times weekly to share the timezone burden:

| Week | Standup Time (UTC) | Comfortable For | Uncomfortable For |
|------|-------------------|-----------------|-------------------|
| Week A | 00:00 UTC (4 PM PST) | PST, BRT | JST (9 AM), GST (4 AM) |
| Week B | 08:00 UTC (5 PM JST) | JST, GST (noon) | PST (midnight), BRT (5 AM) |
| Week C | 13:00 UTC (10 AM BRT) | BRT, GST (5 PM) | PST (5 AM), JST (10 PM) |
| Week D | 17:00 UTC (9 AM PST) | PST, BRT (2 PM) | GST (9 PM), JST (2 AM) |

**Reality:** Members in the uncomfortable slot often skip or send async updates. Chris is struggling to make this sustainable.

### Async Practices (Aspirational)

Chris is trying to establish async-first practices, but adoption is inconsistent:

- **Async standups in Slack** - Some team members post, others don't
- **Recorded demos** - Hiroshi records walkthroughs, but others prefer live demos
- **Decision documentation** - Not happening consistently; decisions get lost in Slack threads

---

## The Forming Stage

This team is a textbook example of Tuckman's forming stage, which makes it valuable for course exercises about team development.

### What's Working

- Maria's product vision is clear and well-communicated
- The San Francisco cluster (Chris, Wei, Ben) collaborates well in person
- Hiroshi and Yuki have an established working relationship from their previous team

### What's Not Working

- **Ben dominates discussions** - His energy fills the silence that Hiroshi and Fatima leave, creating an imbalance
- **Fatima feels isolated** - She's the only person in her timezone and comes from a waterfall background; agile ceremonies feel foreign
- **Maria is frustrated** - She's used to co-located teams where she can walk to a developer's desk. The async rhythm is slower than she likes
- **Hiroshi's contributions are undervalued** - He sends detailed written proposals that Ben sometimes talks over in live meetings
- **No psychological safety yet** - Team members haven't had a conflict or recovered from one; trust is shallow

---

## Dependencies

### Incoming Dependencies

| From | What | Impact |
|------|------|--------|
| Velocity Squad | Notification API | MVP complete, but enhancements needed |
| Catalyst Crew | Search Results API | Blocked due to legacy migration |
| Tom Harrison (Infra) | Mobile backend setup, push notification infrastructure | New platform, significant setup needed |

### Outgoing Dependencies

| To | What | Impact |
|----|------|--------|
| Insight Engine | Mobile usage metrics | Analytics team needs data from mobile app |

### Shared Resources

| Resource | Allocation | Notes |
|----------|------------|-------|
| David Kim (UX) | 25% (~40% actual) | New mobile app needs heavy UX investment |
| Tom Harrison (Infra) | As needed | Mobile backend is a new platform requiring significant infra work |

---

## Chris Wong's Growth Areas

As Chris's informal mentor, you've observed these patterns:

1. **Solving vs. coaching** - When a technical problem arises, Chris jumps to the whiteboard instead of asking the team what they think. Former-dev instincts.
2. **Timezone guilt** - Chris feels guilty about meetings being inconvenient for someone, so he tries to attend every async thread personally instead of empowering the team to self-organize.
3. **Avoiding difficult conversations** - Chris hasn't addressed Ben's tendency to dominate meetings or checked in with Fatima about her isolation.
4. **Underestimating forming stage needs** - Chris is focused on velocity and delivery when the team actually needs norms, trust, and psychological safety first.

---

**See also:**
- [PROGRAM-PERSONAS.md](PROGRAM-PERSONAS.md) - Detailed profiles of Chris, Maria, Hiroshi, and others
- [HORIZON-PROGRAM.md](HORIZON-PROGRAM.md) - Program-level context
- [TEAM.md](TEAM.md) - Your primary team, the Velocity Squad
