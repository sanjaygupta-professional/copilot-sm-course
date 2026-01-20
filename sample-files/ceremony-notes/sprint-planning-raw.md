# Sprint 47 Planning - Raw Notes

**Date:** Wednesday, October 16, 2025
**Time:** 10:00 AM - 12:45 PM ET (over by 45 min!)
**Attendees:** Raj (PO), Lisa, Marcus, Priya (remote), James, Emma, David, You (SM)

---

## Pre-Planning Context

**Sprint 46 Results:**
- Committed: 50 points
- Completed: 45 points
- Carryover: 5 points (Dashboard redesign - design dependency)
- Velocity: 45 points

**Team Capacity for Sprint 47:**
- Lisa: 10 days, no PTO (full capacity)
- Marcus: 10 days, no PTO (full capacity)
- Priya: 9 days (1 day public holiday in India)
- James: 10 days, no PTO
- Emma: 10 days, no PTO
- David: ~4 days available for Velocity Squad (shared resource)

**Estimated Capacity:** ~48-52 points

---

## Meeting Notes

### [10:00 AM] Opening

Started late - David had a conflict, joined at 10:08. Priya's video was choppy at first but stabilized.

I reminded the team of capacity (48-52 points) and that we had 5 points of carryover.

Raj shared the Sprint Goal proposal: "Deliver notification system phase 2 and improve API performance."

Lisa asked: "What's the priority between notifications and API performance?"
Raj: "Notifications first, but both are important to Richard."

### [10:15 AM] Backlog Review

Raj walked through the prioritized backlog:

**P1: Notification System Phase 2**
1. User notification preferences (5 points) - Carryover, design done
2. Email notification delivery (8 points) - New
3. In-app notification center UI (5 points) - New
4. Push notification backend (8 points) - New

**P2: API Performance**
5. Rate limiting implementation (5 points) - New
6. Search optimization (5 points) - New
7. Caching layer (5 points) - New

**P3: Bug Fixes and Maintenance**
8. Search results pagination fix (2 points) - Bug
9. Dashboard loading improvement (3 points) - Performance

Total in backlog: 46 points

### [10:30 AM] Discussion - Notification Stories

**Story: User notification preferences (5 points) - Carryover**

Lisa: "This was blocked last sprint on design. David, is the design finalized now?"

David: "Yes, it's in Figma. I updated it based on the feedback from Sprint 46 review."

James: "What about test scenarios? The acceptance criteria says 'users can set preferences' but what preferences exactly?"

Raj: "Email on/off, push on/off, daily digest option, and per-category settings."

James: "That's more complex than 5 points. Per-category means we need to list all categories."

Lisa: "Categories are already defined in the system - it's a lookup."

James: "Still need to test each combination."

*Discussion went on for 10 minutes about testing complexity*

I suggested: "Can we agree it's 5 points for dev work, and James, you flag if QA needs more time?"

James agreed but noted: "Fine, but if QA gets squeezed at the end because we underestimated, I'm going to raise it."

**Story: Email notification delivery (8 points)**

Lisa: "8 points feels right. We need to integrate with SendGrid, handle templates, manage delivery status."

Marcus: "I can help with the frontend notification templates."

Lisa: "Actually, email templates are backend. But you could work on the in-app UI story instead."

Raj: "The acceptance criteria says 'professional email templates' - what does that mean?"

David: "I haven't designed email templates yet. Was that in scope?"

Raj: "Um... I assumed we'd use our standard template."

Lisa: "We don't have a standard template. Our current emails look terrible."

*Side discussion about email design - 8 minutes*

David: "I can do a quick email template design, but it adds to my workload."

I asked: "David, what's your capacity realistically?"

David: "Maybe 4 days for Velocity Squad this sprint. Platform team has a big release."

Lisa: "4 days isn't enough for email templates AND the search redesign wireframes."

Raj: "The search wireframes can wait if needed."

David: "Okay, I'll prioritize email template and notification UI. Search wireframes in Sprint 48."

Marcus was quiet during all of this.

### [11:00 AM] - We're An Hour In, Only Through 2 Stories

I flagged: "Team, we're an hour in and only through 2 stories. Let's try to move faster."

Raj: "I know, but these are complex stories."

Lisa: "Maybe the stories aren't refined enough."

*Tension in the room*

I suggested we timebox: "5 minutes per story max. If we can't resolve, we note it and move on."

**Story: In-app notification center UI (5 points)**

Marcus: "I can take this one. Design is done, right David?"

David: "Yes, it's in Figma from last sprint."

Marcus: "Cool, 5 points seems right. Should be done in 3-4 days."

James: "What about browser compatibility testing?"

Emma: "I can help with that."

Lisa: "Looks good. Let's commit."

*3 minutes - good!*

**Story: Push notification backend (8 points)**

Priya: "I'll take this one. I've worked with push notifications before."

Lisa: "Firebase or APNs?"

Priya: "Firebase - we're using it for the mobile app already."

James: "We need test coverage for notification failures. What happens when push fails?"

Priya: "Good point. We should retry 3 times then mark as failed."

Raj: "That's not in the acceptance criteria..."

James: "It should be."

*Discussion about error handling - 6 minutes*

I had Raj add error handling to acceptance criteria.

### [11:20 AM] API Performance Stories

**Story: Rate limiting implementation (5 points)**

Lisa: "I'll take this. 5 points for basic rate limiting. We've discussed this in refinement."

James: "What's the rate limit? 100 per minute? 1000?"

Raj: "Good question. Let me check with the business..."

Lisa: "We can't wait. Can we default to 500/minute as industry standard?"

Raj: "I need to confirm with Richard. This affects enterprise customers."

*5 minutes discussing rate limits*

I proposed: "Raj, can you get confirmation by EOD? Lisa starts with 500 as default, we adjust if needed."

Raj: "Okay, but if Richard wants something different..."

Lisa: "Then we'll adjust. Let's not block on this."

**Story: Search optimization (5 points)**

Priya: "I analyzed the slow queries last sprint. I know exactly what to fix. 5 points is accurate."

James: "Performance testing requirements?"

Priya: "I'll include before/after benchmarks in the PR."

*2 minutes - nice!*

**Story: Caching layer (5 points)**

Priya: "Related to search optimization. I can do both."

Lisa: "Can you handle 10 points of work?"

Priya: "Yes, I have full capacity minus 1 day."

James: "Wait, you said 9 days earlier because of the holiday."

Priya: "Yes, 9 days. Search optimization and caching together is maybe 8 days of work."

Lisa: "That's tight."

Priya: "I can do it. I've been studying the codebase."

*Priya's confidence is good but is she overcommitting?*

### [11:40 AM] Bug Fixes

**Story: Search results pagination fix (2 points)**

Marcus: "I can do this after the notification UI."

James: "It's a bug - should we prioritize it higher?"

Raj: "It's minor - only affects searches with 100+ results."

James: "Those are our power users. They're complaining."

Raj: "Fine, Marcus can do it first."

*3 minutes*

**Story: Dashboard loading improvement (3 points)**

Lisa: "I can squeeze this in if we have capacity. It's been on the backlog for 3 sprints."

James: "If Lisa has time, great. If not, don't force it."

Raj: "Stakeholders have mentioned it..."

Lisa: "I'll try, but it's lower priority than rate limiting."

### [11:50 AM] Capacity Check

**Committed so far: 46 points**

| Story | Points | Owner |
|-------|--------|-------|
| User notification preferences | 5 | Lisa |
| Email notification delivery | 8 | Lisa |
| In-app notification UI | 5 | Marcus |
| Push notification backend | 8 | Priya |
| Rate limiting | 5 | Lisa |
| Search optimization | 5 | Priya |
| Caching layer | 5 | Priya |
| Pagination fix | 2 | Marcus |
| Dashboard loading | 3 | Lisa |

**Lisa:** 21 points
**Priya:** 18 points
**Marcus:** 7 points

Wait - that's not balanced.

I flagged: "Lisa has 21 points, Marcus has 7. That's not sustainable."

Lisa: "It's fine. I can handle it."

Priya: "I could take the pagination fix from Marcus to balance?"

Marcus: "I can do more. I just don't want to overcommit."

*Discussion about balance - 5 minutes*

Final rebalancing:
- Move Email notification to Marcus with Lisa mentoring
- Marcus: 15 points (notification UI 5 + email 8 + pagination 2)
- Lisa: 13 points (notification preferences 5 + rate limiting 5 + dashboard 3)
- Priya: 18 points (push backend 8 + search 5 + caching 5)

That's still 46 points - within capacity but at the high end.

### [12:00 PM] Raj's "One More Thing"

Raj: "So, one thing I wanted to mention... Richard asked about adding a quick analytics dashboard to show notification engagement. It's small, maybe 3-5 points?"

Lisa (immediately): "No. We just balanced to 46 points. We're not adding 5 more."

Raj: "But Richard really wants visibility into notification effectiveness..."

James: "Every sprint it's 'one more thing.' This is how we end up with carryover."

Raj: "I know, I know. It's just... he's the CKO."

I stepped in: "Raj, is this a Sprint 47 must-have or a Sprint 48 nice-to-have?"

Raj: "He didn't say it's urgent..."

Lisa: "Then it's Sprint 48."

Raj: "Okay. I'll tell Richard it's planned for next sprint."

Emma (quietly): "Can I ask a question? How do we decide what's in scope and what's not? It feels like things keep getting added."

Good question, Emma.

I explained: "Once we commit in sprint planning, scope is locked. Any additions mean removing something else. That's why we push back."

Emma: "Got it. Thanks."

### [12:15 PM] Sprint Goal Confirmation

**Sprint 47 Goal:** "Deliver notification system phase 2 (preferences, email, in-app, push) and improve API performance (rate limiting, search optimization, caching)."

**Total Commitment:** 46 points

| Story | Points | Owner | Notes |
|-------|--------|-------|-------|
| User notification preferences | 5 | Lisa | Carryover |
| Email notification delivery | 8 | Marcus | Lisa mentoring |
| In-app notification UI | 5 | Marcus | |
| Push notification backend | 8 | Priya | |
| Rate limiting | 5 | Lisa | Confirm limits with Richard |
| Search optimization | 5 | Priya | |
| Caching layer | 5 | Priya | |
| Pagination fix | 2 | Marcus | Bug - priority |
| Dashboard loading | 3 | Lisa | Stretch goal |

### [12:25 PM] Risk Review

I asked: "What could prevent us from hitting this sprint goal?"

**Identified Risks:**

1. **David's capacity** - Email templates not designed yet
   - Mitigation: David prioritizes this first

2. **Rate limit requirements** - Raj needs to confirm with Richard
   - Mitigation: Start with 500/min, adjust if needed

3. **Priya's workload** - 18 points is heavy
   - Mitigation: Lisa available to support if needed

4. **Marcus on email delivery** - New territory for him
   - Mitigation: Lisa mentoring, pair programming

5. **Push notification complexity** - Might uncover issues
   - Mitigation: Priya has experience, start early

### [12:35 PM] QA Planning

James: "For QA, here's what I need:
- Notification preferences: Testable by Wed Oct 23
- Email delivery: Testable by Thu Oct 24
- In-app UI: Testable by Fri Oct 25
- Rate limiting: Testable by Mon Oct 28
- Push backend: Testable by Mon Oct 28
- Search/caching: Testable by Tue Oct 29

That gives us 1-2 days QA time per story. Tight but doable."

Emma: "I'll focus on the UI testing while James handles the backend tests."

I confirmed: "Team, are these dates realistic?"

Lisa: "It's tight but we can try."

Priya: "I'll aim for earlier to give buffer."

### [12:45 PM] Wrap Up (15 min over!)

Sprint 47 is planned. We went 45 minutes over our 2-hour timebox. Again.

**Observations:**
- Stories not refined enough (email template design not done)
- Raj adding scope at the end (analytics dashboard)
- Discussion took too long on early stories
- Good energy once we got momentum
- Emma asking good clarifying questions
- Marcus quiet until assigned work

**Next Planning:** I need to enforce timebox more strictly.

---

## My SM Notes

### What Went Well
- Team pushed back on scope creep
- Rebalanced workload when I flagged it
- Identified risks proactively
- Emma engaging more

### What Needs Improvement
- Meeting went 45 min over (target: 2 hours)
- Stories not refined enough (email template gap)
- Raj still adding "one more thing"
- Marcus barely spoke until directly assigned
- Priya might be overcommitting

### Action Items
- [ ] Raj - confirm rate limits by EOD
- [ ] David - email template design by EOD Thursday
- [ ] Me - enforce 2-hour timebox next planning
- [ ] Me - check in with Marcus about participation
- [ ] Me - check in with Priya about 18-point workload

---

**End of Sprint Planning Notes**
