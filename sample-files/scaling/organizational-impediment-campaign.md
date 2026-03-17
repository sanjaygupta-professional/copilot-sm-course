# Organizational Impediment Campaign: Shared Designer Capacity

A structured campaign to resolve the systemic issue of David Kim being shared across 3 teams in the Horizon Program.

---

## Problem Statement

**David Kim**, the only UX/UI designer in the Horizon Program, is currently allocated across **3 of 4 teams**: Velocity Squad (Core Platform), Catalyst Crew (Search), and Nexus Team (Mobile). The fourth team, Insight Engine (Analytics), has no design support at all.

### Quantified Impact

| Metric | Data |
|--------|------|
| **Teams affected** | 3 directly, 1 indirectly (Insight Engine) |
| **Average wait time for design** | 4.2 days per request (tracked over Sprints 43-47) |
| **Sprint goals missed due to design delays** | 6 across all teams in last 5 sprints |
| **Stories blocked on David per sprint** | 3-5 stories (average 12 story points) |
| **David's context-switching overhead** | ~30% of productive time lost to task switching |
| **Velocity impact on Catalyst Crew** | Decline from 42 to 31 over 6 sprints (26% drop), partially attributed to design bottleneck |
| **Unplanned work from design rework** | ~15% of design output requires rework due to rushed context switching |
| **David's reported stress level** | "Unsustainable" — raised in 1:1s and retros repeatedly |

### Root Cause Analysis

```
WHY is design a bottleneck?
  → David is the only designer for 3 teams
    WHY is there only one designer?
      → Headcount was set when there was 1 team; program grew to 4 teams
        WHY wasn't headcount adjusted?
          → No one made a formal business case; it "just happened" incrementally
            WHY no business case?
              → SM/RTE focus was on team-level problems; this is organizational
```

---

## Stakeholder Map

| Stakeholder | Role | Interest Level | Influence Level | Current Position | Desired Position |
|-------------|------|---------------|-----------------|------------------|------------------|
| **Richard Thorne** | CKO | High | High | Neutral (cost-conscious) | Champion |
| **Jennifer Walsh** | VP/RTE | High | High | Supporter (sees the pain) | Champion |
| **Sarah Mitchell** | MD Strategy | Medium | Very High | Unknown | Supporter |
| **Tom Harrison** | Infra Lead | Low | Low | Neutral | Neutral |
| **Ana Martinez** | SM, Catalyst | High | Low | Champion (team suffering most) | Champion |
| **Chris Wong** | SM, Nexus | High | Low | Supporter | Supporter |
| **David Kim** | Designer | Very High | Low | Champion (burned out) | Champion |
| **Raj Patel** | PO, Velocity | High | Medium | Supporter | Supporter |
| **HR/Finance** | Budget approvers | Low | High | Unknown | Supporter |

### Power/Interest Grid

```
HIGH INFLUENCE
    │
    │  Sarah Mitchell          Richard Thorne
    │  (engage closely)        (manage closely — key decision maker)
    │
    │  HR/Finance              Jennifer Walsh
    │  (keep satisfied)        (manage closely — strongest ally)
    │
    │─────────────────────────────────────────────
    │
    │  Tom Harrison            Ana Martinez, Chris Wong
    │  (monitor)               (keep informed — provide data)
    │
    │                          David Kim, Raj Patel
    │                          (keep informed — voices of impact)
    │
LOW INFLUENCE
    LOW INTEREST ──────────────────────── HIGH INTEREST
```

---

## Coalition Building Plan

### Phase 1: Build the Evidence Base (Week 1-2)

| Action | Owner | Status |
|--------|-------|--------|
| Gather wait-time data from Jira across all 3 teams | You | [ ] |
| Document sprint goals missed due to design delays | You + Ana + Chris | [ ] |
| Conduct 1:1 with David Kim — document workload and stress | You | [ ] |
| Gather industry benchmarks: designer-to-developer ratios | You | [ ] |
| Calculate velocity impact across the program | You | [ ] |
| Document rework costs from rushed design work | You + POs | [ ] |

### Phase 2: Align SM Coalition (Week 2-3)

| Action | Owner | Status |
|--------|-------|--------|
| Present data to Ana Martinez — get her input and buy-in | You | [ ] |
| Present data to Chris Wong — get his input and buy-in | You | [ ] |
| Agree on unified message and ask | You + Ana + Chris | [ ] |
| Prepare joint statement from all SMs for leadership | All SMs | [ ] |

### Phase 3: Engage Champions (Week 3-4)

| Action | Owner | Status |
|--------|-------|--------|
| Present data and proposal to Jennifer Walsh — get coaching on approach | You | [ ] |
| Ask Jennifer to pre-brief Richard Thorne | Jennifer | [ ] |
| Engage Raj and other POs to quantify feature delay impact | You | [ ] |

### Phase 4: Formal Proposal (Week 4-5)

| Action | Owner | Status |
|--------|-------|--------|
| Submit business case to Richard Thorne | You + Jennifer | [ ] |
| Present at program leadership meeting | You | [ ] |
| Follow up with HR/Finance on budget implications | Jennifer | [ ] |

---

## Proposal Options

### Option A: Dedicated Designer per 2 Teams (Recommended)

**Hire 1 additional designer. David covers 2 teams, new hire covers 2 teams.**

| Dimension | Details |
|-----------|---------|
| **Cost** | ~$95,000/year (mid-level UX designer) |
| **Timeline** | 8-12 weeks to hire and onboard |
| **Impact** | Wait time drops from 4.2 days to ~1 day. Each designer embedded in 2 teams. |
| **Risk** | Hiring timeline; new hire needs onboarding; still 2 teams per designer |
| **Best for** | Balanced cost and impact. Sustainable long-term. |

### Option B: Design Team Model

**Hire 1 designer + 1 design lead. Create a small design team that serves all 4 Horizon teams.**

| Dimension | Details |
|-----------|---------|
| **Cost** | ~$210,000/year (lead + mid-level) |
| **Timeline** | 12-16 weeks for both hires |
| **Impact** | Design consistency across program. Career path for David. Covers Insight Engine. |
| **Risk** | Higher cost; design team may become a bottleneck if not well-managed |
| **Best for** | Long-term design quality and scalability |

### Option C: Design System Investment

**Keep David as sole designer but invest in a design system and component library to reduce per-feature design work by 40-60%.**

| Dimension | Details |
|-----------|---------|
| **Cost** | ~$30,000 (David's time for 6 weeks + tooling) |
| **Timeline** | 6-8 weeks to build initial system; ongoing maintenance |
| **Impact** | Reduces design bottleneck without adding headcount. Developers can self-serve for standard patterns. |
| **Risk** | Doesn't solve David's workload during the 6-week build. Doesn't cover complex UX work. |
| **Best for** | Budget-constrained situation. Good complement to Option A. |

### Options Comparison Matrix

| Criteria | Weight | Option A | Option B | Option C |
|----------|--------|----------|----------|----------|
| Cost | 20% | 7/10 | 4/10 | 9/10 |
| Speed to impact | 25% | 6/10 | 4/10 | 5/10 |
| Long-term sustainability | 25% | 7/10 | 9/10 | 5/10 |
| Risk level | 15% | 7/10 | 5/10 | 6/10 |
| Design quality improvement | 15% | 7/10 | 9/10 | 6/10 |
| **Weighted Score** | | **6.7** | **5.9** | **6.0** |

**Recommendation:** Option A (hire 1 designer) combined with Option C (invest in design system) as a phased approach. Start with the hire immediately; begin design system work once the new designer is onboarded and David has capacity.

---

## Business Case Summary

| Item | Value |
|------|-------|
| **Annual cost of inaction** | ~$180,000 in lost velocity (12 points/sprint x 26 sprints x blended cost) |
| **Annual cost of proposal (Option A)** | ~$95,000 |
| **Net benefit Year 1** | ~$85,000 + improved morale, retention risk reduction, faster time-to-market |
| **Break-even** | ~6 months after hire starts |
| **Retention risk** | David Kim flight risk if workload doesn't change (replacement cost: ~$50,000+) |

---

## Timeline

| Week | Milestone |
|------|-----------|
| 1-2 | Evidence gathering complete |
| 2-3 | SM coalition aligned |
| 3-4 | Jennifer briefed, pre-brief to Richard |
| 4-5 | Formal proposal submitted |
| 5-6 | Decision expected |
| 6-8 | Job posting and recruiting (if approved) |
| 10-14 | New designer starts |
| 14-18 | Onboarding complete, full productivity |

---

## Risk of Inaction

| Risk | Likelihood | Impact |
|------|-----------|--------|
| **David Kim burnout and resignation** | High (6-12 months) | Very High — all design work stops |
| **Catalyst Crew velocity continues declining** | Very High | High — missed commitments, stakeholder trust eroded |
| **Insight Engine never gets design support** | Certain | Medium — analytics UX remains poor, adoption suffers |
| **Program release dates slip** | High | High — coordinated releases require all teams delivering |
| **Other designers avoid Horizon Program** | Medium | Medium — reputation as unsustainable workload |

**Bottom line:** The cost of doing nothing exceeds the cost of every proposed option within 12 months.
