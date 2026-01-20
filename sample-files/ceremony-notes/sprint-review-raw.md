# Sprint 46 Review - Raw Notes

**Date:** Tuesday, October 15, 2025
**Time:** 2:00 PM - 3:00 PM ET
**Attendees:**
- Team: Raj, Lisa, Marcus, Priya (remote), James, Emma, David, SM (You)
- Stakeholders: Jennifer Walsh (VP), Richard Thorne (CKO), Sarah Mitchell (MD Strategy)

---

## Pre-Meeting Context

**Sprint 46 Goal:** "Complete notification system MVP and begin dashboard redesign."

**Committed:** 50 points
**Completed:** 45 points
**Carryover:** 5 points (Dashboard redesign - blocked on design)

---

## Meeting Notes

### [2:00 PM] Opening

I welcomed everyone and shared the sprint stats:
- Sprint Goal: Partially met (notifications done, dashboard carried over)
- 45 of 50 points completed (90%)
- 1 story carried over due to design dependency

Richard nodded. Jennifer took notes.

### [2:05 PM] Demo 1: Notification System MVP

**Presenter:** Lisa and Marcus

Lisa walked through the notification system architecture on a slide, then Marcus showed the UI.

**Demo Flow:**
1. Marcus showed the notification bell icon in the header
2. Clicked to show notification dropdown
3. Scrolled through notifications (system alerts, mentions, task updates)
4. Clicked "View All" to go to full notification center
5. Lisa showed the backend - notification creation, delivery queue

**Stakeholder Feedback:**

Richard: "This looks great. Can users customize what notifications they receive? I get too many emails from our tools."

Lisa: "Not yet - that's the preferences feature, planned for Sprint 47."

Richard: "When can I see that?"

Raj: "Sprint 47 Review, two weeks from now."

Richard: "Good. Make it a priority."

Sarah: "Can we add notifications for document updates? My team would love that."

Lisa: "That's a new integration. We'd need to scope it."

Raj: "I'll add it to the backlog for Sprint 48 consideration."

Jennifer: "The UI looks clean. Good work Marcus."

Marcus (quietly): "Thanks."

**Demo notes:** Marcus was nervous but did well. Richard's feature request was expected.

### [2:20 PM] Demo 2: Search Performance Improvements

**Presenter:** Priya (remote)

Priya shared her screen showing before/after performance metrics.

**Demo Flow:**
1. Showed slow query example (8 seconds before)
2. Ran same query after optimization (2 seconds)
3. Showed the code changes at high level
4. Explained the indexing improvements

**Stakeholder Feedback:**

Richard: "75% faster - that's impressive. Will this scale when we have more content?"

Priya: "Yes, the indexing approach scales logarithmically. We tested with 10x data volume."

Richard: "Excellent. Knowledge search is critical for consultant productivity."

Sarah: "My team has been complaining about search speed. When does this go live?"

Priya: "It's in staging now. Production release planned for end of Sprint 47."

Sarah: "Can we accelerate that? It's a real pain point."

Lisa: "It needs more testing before production. We don't want to break search."

James: "We need at least 3 more days of QA."

Jennifer: "Quality first. End of Sprint 47 is fine."

**Demo notes:** Priya presented well despite timezone challenges (it's 11:50 PM for her). Richard seemed genuinely impressed.

### [2:35 PM] Demo 3: Bug Fixes and Minor Improvements

**Presenter:** James and Emma

James showed a summary slide of 8 bugs fixed this sprint.

**Highlighted Fixes:**
1. Login timeout issue (was affecting 5% of users)
2. Export feature crashing on large datasets
3. Mobile rendering issues on Android
4. Accessibility improvements (screen reader compatibility)

Emma demonstrated the accessibility improvements - her first sprint review presentation.

**Stakeholder Feedback:**

Jennifer: "Good to see accessibility work. It's important for compliance."

Emma: "Thanks. We improved screen reader support and keyboard navigation."

Richard: "What's our accessibility compliance percentage now?"

James: "We're at 85% WCAG 2.1 AA compliance. Targeting 95% by end of Q1."

Richard: "Good. Let's make sure that's tracked."

**Demo notes:** Emma did well for her first demo. She was nervous but prepared.

### [2:50 PM] What Didn't Get Done

I walked through the carryover item.

**Carryover: Dashboard Redesign (5 points)**

Reason: Design dependency. David's wireframes weren't finalized until end of sprint.

David: "I apologize. I was pulled to the Platform team for an emergency. I deprioritized this."

Jennifer: "David, how often does this happen?"

David: "Honestly? Every sprint. I'm shared across three teams and priorities keep shifting."

Jennifer: "That's a resource allocation issue. Let's discuss offline."

Lisa: "The code work wasn't wasted. Once designs are final, we can move quickly in Sprint 47."

Richard: "When will the dashboard be done?"

Raj: "Sprint 48 is more realistic. Sprint 47 is focused on notification phase 2."

Richard (frowning): "We've been waiting on the dashboard for a while."

Raj: "I know. It keeps getting bumped by higher priorities."

Jennifer: "Richard, can you and I align on priorities after this?"

Richard: "Yes, let's do that."

**Tension in the room.** Jennifer is aware of the resource issue now.

### [2:55 PM] Sprint 47 Preview

Raj shared the Sprint 47 plan (not yet committed, planning is tomorrow):

- Notification preferences (customize what you receive)
- Email notification delivery
- In-app notification center improvements
- Push notification support
- API rate limiting
- Search optimization (continued)
- Caching layer

Richard: "Good list. The preferences are most important to me."

Sarah: "What about the document update notifications I mentioned?"

Raj: "Sprint 48 consideration."

Sarah: "Okay. Don't forget."

### [3:00 PM] Closing

I thanked everyone for attending and noted next steps:
- Sprint Planning tomorrow (team only)
- Sprint 47 Review in two weeks
- Jennifer and Richard to align on dashboard priority

**Feedback forms:** I asked stakeholders to complete the feedback form (shared via email).

---

## Stakeholder Feedback Summary

From feedback forms received after the meeting:

**Richard Thorne (CKO):**
- Satisfaction: 4/5
- Comments: "Good progress on notifications. Search improvement is impressive. Disappointed about dashboard carryover but understand the resource constraint."
- Priorities for next sprint: "Notification preferences first, then any performance work."

**Sarah Mitchell (MD Strategy):**
- Satisfaction: 4/5
- Comments: "Team seems strong technically. Would like more engagement with Strategy practice on requirements."
- Priorities for next sprint: "Document update notifications when possible."

**Jennifer Walsh (VP):**
- Satisfaction: 3/5
- Comments: "Concerned about David's capacity issue. Team is working hard but being held back. Need to address resource allocation."
- Priorities for next sprint: "Deliver what's committed. No more carryover."

---

## My Observations (SM)

### What Went Well

1. **Demos were solid** - Lisa, Marcus, Priya, James, Emma all presented clearly
2. **Metrics shown** - Before/after performance data was compelling
3. **Honest about carryover** - Didn't hide the design dependency issue
4. **Jennifer noticed** - The resource constraint is now visible to leadership

### What Could Improve

1. **Dashboard keeps slipping** - This is the 3rd sprint. Stakeholder patience wearing thin.
2. **David apologizing again** - He's not the problem, the system is.
3. **Marcus spoke once** - Need to get him more comfortable presenting.
4. **Sarah's feature request** - Raj captured it but we need to manage expectations.

### Follow-up Actions

- [ ] Follow up with Jennifer on David capacity discussion
- [ ] Help Raj manage Sarah's expectations on document notifications
- [ ] Coach Marcus on presenting
- [ ] Thank Priya for presenting at midnight her time
- [ ] Review stakeholder feedback forms and share with team

---

## Post-Meeting Notes

After the review, Jennifer pulled me aside.

**Jennifer:** "The David situation - I knew it was an issue but didn't realize it was this chronic. I'm going to talk to the Design leadership about dedicated resources for Internal Products."

**Me:** "That would help a lot. The team feels bad when things slip and it's not their fault."

**Jennifer:** "I'll have an update by end of next week."

**Me:** "Thanks Jennifer. The team will appreciate it."

This could be a breakthrough. If we get dedicated design capacity, that removes a major impediment.

---

## Velocity Trend (For Reference)

| Sprint | Committed | Completed | Carryover |
|--------|-----------|-----------|-----------|
| Sprint 43 | 55 | 55 | 0 |
| Sprint 44 | 50 | 42 | 8 |
| Sprint 45 | 48 | 38 | 10 |
| Sprint 46 | 50 | 45 | 5 |

Trending upward from Sprint 45, but carryover is still happening.

---

**End of Sprint Review Notes**
