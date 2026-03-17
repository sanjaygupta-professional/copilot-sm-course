# Mid-Sprint Health Check Template

Run this check on Day 5 of every 10-day sprint. Takes 10 minutes with Copilot.

---

## The Check

### 1. Burndown Trajectory (2 min)

```
Based on our burndown data, we are currently at [X] points remaining on Day 5 of a 10-day sprint.

Sprint started with [Y] points planned.

Questions:
1. Are we on track to complete the sprint goal?
2. At current burn rate, how many points will we complete?
3. What's the gap between projected and planned?
4. Should we alert the PO about scope risk?
```

### 2. Blocker Scan (3 min)

Review standup notes from Days 1-5:

```
Analyze these standup notes from Days 1-5 of Sprint [X].

Identify:
1. Any team member blocked for 2+ consecutive days
2. Any recurring theme or complaint
3. Any blocker that was "being worked on" for 3+ days without resolution
4. Anyone who said "no blockers" every day but has no stories in progress

Flag concerns and suggest immediate actions.
```

### 3. Health Pulse (3 min)

Quick assessment without a formal survey:

| Signal | Check | Source |
|--------|-------|--------|
| Energy | Are people engaged in standups or going through the motions? | Observation |
| Focus | Is WIP (work in progress) per person ≤ 2? | Board |
| Communication | Are people talking to each other or working in silos? | Slack/Teams activity |
| Morale | Has anyone's tone changed? Shorter messages? Less responsive? | Observation |
| Surprises | Any unplanned work that entered the sprint? | Board |

### 4. Decision Point (2 min)

Based on the above:

| Status | Action |
|--------|--------|
| 🟢 On track, no blockers, team engaged | Continue. Share positive signal at next standup. |
| 🟡 Minor risk: 1-2 blockers, slight burndown gap | Address blockers today. Monitor tomorrow. Alert PO if gap > 20%. |
| 🔴 Major risk: multiple blockers, significant burndown gap, low energy | Emergency re-plan. Meet with PO to negotiate scope. Communicate to stakeholders. |

---

## Sprint 47 Example

**Day 5 Check:**
- Burndown: 28 points remaining (of 52 planned). Burn rate: 4.8/day. Projected completion: 24 points remaining = 28 completed. Gap: 24 points short.
- Wait — that math is wrong. Let me recalculate: 52 - 28 = 24 completed in 5 days = 4.8/day. Remaining 5 days × 4.8 = 24 more. Total = 48. Gap = 4 points.
- Blockers: David has 2 pending design reviews (Day 3). Marcus waiting on API documentation.
- Health: Standup averaged 20 min (up from 18 last sprint). Priya quiet in last 2 standups.
- Decision: 🟡 Minor risk. Address David's reviews and check in with Priya 1:1.
