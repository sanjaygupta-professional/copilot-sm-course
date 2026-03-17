# Sprint 44 — Daily Signal Data

Sprint 44 ended with velocity of 35 (planned 48) — the lowest in 8 sprints. This file provides day-by-day data so you can practice retroactive signal detection.

**Question to answer:** Could you have predicted this sprint would fail by Day 5?

---

## Day 1 (Wednesday — Sprint Start)

**Planning Notes:**
- 48 points planned (same as Sprint 40 baseline)
- 3 stories depend on David's design review (AKX-1150, AKX-1152, AKX-1155)
- David confirmed "I'll have designs ready by Friday"
- Lisa raised concern: "We're front-loading design-dependent work again"
- Raj committed to sprint goal: "Complete search filter redesign"

**Signal Assessment:**
- 🟡 3 stories (18 points) depend on one shared resource
- 🟡 Lisa's concern was noted but not acted on
- 🟢 Sprint goal is clear and achievable based on capacity

---

## Day 2 (Thursday)

**Standup Notes:**
- Lisa: "Working on AKX-1148 (non-design story). On track."
- Marcus: "Started AKX-1150 but waiting for David's mockups before I can proceed."
- Priya: "Picked up AKX-1153 (backend, no design dependency). Good progress."
- James: "Setting up test framework for the new filter component."
- David: (not at standup — in another team's sprint planning)

**Signal Assessment:**
- 🟡 Marcus blocked on Day 2 (early blocker)
- 🔴 David absent from standup (shared resource unavailable)
- 🟢 3 of 5 developers productive on non-dependent stories

---

## Day 3 (Friday)

**Standup Notes:**
- Lisa: "Finished AKX-1148. Ready for review. Looking at AKX-1152 next — but I need David's designs too."
- Marcus: "Still waiting on David. Started reading documentation instead."
- Priya: "AKX-1153 almost done. Will move to AKX-1154 tomorrow."
- James: "Test framework ready. Waiting for code to test."
- David: (on Slack) "Sorry team, Catalyst Crew has urgent design emergency. Will get to your mockups Monday."

**Signal Assessment:**
- 🔴 2 developers now blocked (Marcus since Day 2, Lisa starting)
- 🔴 David won't deliver designs until Monday (Day 6) — 3-day delay
- 🔴 18 story points (37% of sprint) are now at risk
- 🟡 James has nothing to test yet — idle QA capacity
- 🟢 Priya is productive (independent stories)

**THIS IS THE SIGNAL POINT.** By Day 3, an early warning system should have flagged:
1. Two developers blocked on same resource for 24+ hours
2. Shared resource (David) explicitly unavailable until Day 6
3. 37% of sprint capacity at risk

---

## Day 4-5 (Weekend)

- Priya worked Saturday to finish AKX-1154 (burnout risk signal)
- No other activity

---

## Day 6 (Monday)

**Standup Notes:**
- Lisa: "I re-prioritized to AKX-1156 (non-design story) but it needs PO clarification."
- Marcus: "David sent mockups last night. Starting AKX-1150 now — 3 days behind."
- Raj: "I can clarify AKX-1156 after standup."
- David: "Mockups done for AKX-1150 and AKX-1152. Still working on AKX-1155."

**Signal Assessment:**
- 🔴 Sprint is now 3 days behind on 18 points of work
- 🔴 AKX-1155 designs still not ready (another story at risk)
- 🟡 Lisa pivoted but needs PO help — secondary dependency chain
- 🟡 Marcus starting 3 days late on a story estimated at 5 points

---

## Day 7-10 (Tuesday-Friday)

- Marcus completed AKX-1150 (5 points) but it took until Day 9
- Lisa completed AKX-1152 (5 points) on Day 10, barely
- AKX-1155 (8 points) never started — David's designs arrived Day 9, too late
- James found 2 bugs in rushed code — extra day of rework

**Sprint Outcome:** 35 points completed (of 48 planned). Sprint goal NOT met.

---

## Retrospective Analysis

### Signals That Were Visible by Day 3

| Signal | Visible On | Impact | Action That Should Have Been Taken |
|--------|-----------|--------|----------------------------------|
| 2 devs blocked on David | Day 2-3 | 18 points at risk | Escalate David's availability immediately |
| David absent from standup | Day 2 | Information gap | Direct outreach, not passive waiting |
| David committed to Monday delivery, then delayed | Day 3 | 3-day cascade delay | Re-plan sprint: swap design-dependent stories out |
| 37% of sprint at risk | Day 3 | Sprint goal failure likely | Alert PO, negotiate scope, communicate to stakeholders |

### What an Early Warning System Would Have Done

**Day 2 alert:** "Two team members blocked on same resource (David Kim). Design-dependent stories account for 37% of sprint capacity."

**Day 3 alert:** "CRITICAL: Shared resource unavailable until Day 6. Recommend: (1) Re-plan sprint to pull in non-design stories, (2) Escalate David's allocation to Jennifer Walsh, (3) Adjust sprint goal with Raj."
