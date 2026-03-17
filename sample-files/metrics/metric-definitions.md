# Scrum Master Metrics Reference

## The 10 Metrics That Matter

### Delivery Metrics (What the team produces)

| # | Metric | Definition | Leading/Lagging | Audience | Why It Matters |
|---|--------|-----------|-----------------|----------|---------------|
| 1 | **Velocity** | Story points completed per sprint | Lagging | Team, Management | Capacity planning baseline. NOT a productivity measure. |
| 2 | **Sprint Goal Achievement** | Yes/No/Partial per sprint | Lagging | Team, Stakeholders | Measures focus and commitment, not just output. |
| 3 | **Carryover Points** | Story points not completed, carried to next sprint | Leading | Team | Early warning for planning accuracy or scope creep. |
| 4 | **Cycle Time** | Days from "In Progress" to "Done" per story | Leading | Team | Predicts delivery speed. Rising cycle time = emerging bottleneck. |

### Quality Metrics (How well the team produces)

| # | Metric | Definition | Leading/Lagging | Audience | Why It Matters |
|---|--------|-----------|-----------------|----------|---------------|
| 5 | **Defect Escape Rate** | Bugs found in production vs. found in testing | Lagging | Team, QA | Measures quality gate effectiveness. |
| 6 | **Impediment Resolution Velocity** | Average days to resolve impediments | Leading | SM, Management | Predicts future blockers. Slow resolution = compounding problems. |

### Health Metrics (How the team feels)

| # | Metric | Definition | Leading/Lagging | Audience | Why It Matters |
|---|--------|-----------|-----------------|----------|---------------|
| 7 | **Team Health Score** | Average across 5 dimensions (collaboration, morale, clarity, pace, trust) | Leading | Team, SM | Predicts performance 2-3 sprints ahead. Declining health precedes declining velocity. |
| 8 | **Retro Action Completion Rate** | % of retrospective actions completed before next retro | Leading | Team | Measures continuous improvement effectiveness. Low rate = retro fatigue. |

### Process Metrics (How efficiently the team works)

| # | Metric | Definition | Leading/Lagging | Audience | Why It Matters |
|---|--------|-----------|-----------------|----------|---------------|
| 9 | **Standup Duration** | Average minutes per daily standup | Leading | SM | Creeping standup time indicates unclear focus or unresolved blockers. |
| 10 | **Design Blocker Frequency** | Design-related impediments per sprint | Leading | SM, Management | Structural bottleneck indicator for the Velocity Squad specifically. |

---

## Vanity Metrics to Avoid

| Metric | Why It's a Vanity Metric | What to Track Instead |
|--------|-------------------------|----------------------|
| Lines of code | Measures volume, not value | Story points or features delivered |
| Story points per developer | Weaponizes velocity, destroys trust | Team velocity (aggregate only) |
| Number of meetings | More meetings ≠ better coordination | Meeting effectiveness ratings |
| Burndown "accuracy" | Penalizes re-estimation | Sprint goal achievement |
| Individual task completion % | Micromanagement metric | Team-level delivery |
| Number of stories completed | Ignores complexity and value | Story points + sprint goal |

---

## Statistical Process Control Basics

### Control Limits for Velocity
- **Mean (μ):** Average velocity over last 8+ sprints
- **Upper Control Limit (UCL):** μ + 2σ (standard deviations)
- **Lower Control Limit (LCL):** μ - 2σ

### Interpreting Variation
| Pattern | Type | Action |
|---------|------|--------|
| Point within control limits | Common cause | Normal. No investigation needed. |
| Point outside control limits | Special cause | Investigate. Something specific happened. |
| 7+ points on same side of mean | Trend | Investigate. System is shifting. |
| 2 of 3 consecutive points near UCL/LCL | Warning | Watch closely. Potential shift emerging. |

### Velocity Squad Example
- Sprints 40-47 velocity: 48, 52, 45, 38, 35, 42, 55, 48
- Mean: 45.4
- Standard deviation: 6.8
- UCL: 59.0
- LCL: 31.8
- Sprint 44 (35): Within limits but part of downward trend (3 consecutive below mean)
- Sprint 46 (55): Within limits, recovery signal
