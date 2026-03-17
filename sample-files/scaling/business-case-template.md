# Business Case: Dedicated UX Design Capacity for the Horizon Program

**Prepared By:** You (Scrum Master / Program Coordinator)
**Submitted To:** Richard Thorne, Chief Knowledge Officer
**Date:** October 24, 2025 (Sprint 47)
**Decision Requested By:** Sprint 48 start (October 28, 2025)

---

## Executive Summary

The Horizon Program has one UX designer (David Kim) serving 3 of 4 teams. This bottleneck costs an estimated **$180,000/year** in lost velocity and creates significant delivery risk. We propose hiring one additional mid-level UX designer at **$95,000/year**, yielding a net benefit of **$85,000+ in Year 1** plus reduced risk, improved morale, and faster time-to-market. The break-even point is **6 months** after the new hire reaches full productivity.

**Recommendation:** Approve the hire immediately. Every sprint of delay costs approximately $7,000 in lost team productivity.

---

## Problem Statement

### The Situation

David Kim is the only UX/UI designer allocated to the Horizon Program. When the program began with a single team, one designer was sufficient. The program has since grown to 4 teams (Velocity Squad, Catalyst Crew, Nexus Team, Insight Engine) without a corresponding increase in design capacity.

### Quantified Impact

| Metric | Value | Source |
|--------|-------|--------|
| Teams competing for David's time | 3 (4th has zero allocation) | Program records |
| Average wait time for design work | 4.2 days per request | Jira data, Sprints 43-47 |
| Sprint goals missed due to design delays | 6 in last 5 sprints | SM sprint reports |
| Stories blocked on David per sprint | 3-5 (avg 12 story points) | Impediment logs |
| Context-switching productivity loss | ~30% of David's time | Industry research + observation |
| Catalyst Crew velocity decline | 42 → 31 (-26%) over 6 sprints | Velocity tracking |
| Unplanned design rework | ~15% of output | PO feedback |
| David Kim's self-reported sustainability | "Unsustainable" | 1:1 conversations, retros |

### Visual: Wait Time Trend

```
Design Request Wait Time (days)
Sprint 43:  ██░░░░░░░░  2.1 days
Sprint 44:  ███░░░░░░░  2.8 days
Sprint 45:  ████░░░░░░  3.5 days
Sprint 46:  █████░░░░░  4.0 days
Sprint 47:  ██████░░░░  5.3 days (Catalyst peak)
                                   ↑ Trending up
```

### Teams Affected

| Team | Design Allocation | Impact |
|------|------------------|--------|
| **Velocity Squad** | ~0.3 FTE | Dashboard designs consistently delayed 2-3 days |
| **Catalyst Crew** | ~0.3 FTE | UI features stalled, velocity declining, morale dropping |
| **Nexus Team** | ~0.3 FTE | Mobile navigation design backlogged, launch at risk |
| **Insight Engine** | 0.0 FTE | Zero design support — analytics dashboard has no UX review |

---

## Proposed Solution

**Hire one mid-level UX/UI designer** to join the Horizon Program, creating a 2-designer team.

### Allocation Model

| Designer | Teams | Focus |
|----------|-------|-------|
| David Kim (Senior) | Velocity Squad + Nexus Team | Core platform + mobile design, design system leadership |
| New Hire (Mid-level) | Catalyst Crew + Insight Engine | Search UX + analytics dashboard, component library execution |

### Why This Allocation

- David stays with Velocity (continuity) and picks up Nexus (mobile needs senior UX thinking)
- New hire takes Catalyst (urgent velocity recovery) and Insight Engine (currently zero support)
- Reduces David from 3 teams to 2, with a focus on higher-complexity work
- Each designer covers 2 teams maximum — industry standard for embedded design

---

## Cost-Benefit Analysis

### Costs

| Item | Year 1 | Year 2 | Notes |
|------|--------|--------|-------|
| Salary + benefits | $95,000 | $98,000 | Mid-level UX designer, market rate |
| Recruiting costs | $12,000 | $0 | Agency fee or internal recruiting time |
| Onboarding (reduced productivity, first 2 months) | $8,000 | $0 | ~50% productivity during onboarding |
| Equipment + tooling | $3,000 | $500 | Laptop, Figma license, etc. |
| **Total Cost** | **$118,000** | **$98,500** | |

### Benefits

| Benefit | Year 1 Value | Year 2 Value | Calculation Basis |
|---------|-------------|-------------|-------------------|
| Recovered velocity (reduced blocking) | $120,000 | $180,000 | 12 pts/sprint recovered x blended cost; partial year 1 |
| Reduced design rework | $15,000 | $20,000 | 15% rework rate eliminated with focused designer |
| Catalyst velocity recovery | $30,000 | $45,000 | Partial attribution of velocity decline recovery |
| Insight Engine design support | $25,000 | $40,000 | Analytics dashboard UX improvement → better adoption |
| David Kim retention risk avoided | $50,000 | $0 | Estimated replacement cost if David leaves |
| Faster time-to-market | Unquantified | Unquantified | Strategic value of shipping features sooner |
| **Total Benefit** | **$240,000** | **$285,000** | |

### Net Benefit

| | Year 1 | Year 2 | Cumulative |
|--|--------|--------|------------|
| Total Cost | $118,000 | $98,500 | $216,500 |
| Total Benefit | $240,000 | $285,000 | $525,000 |
| **Net Benefit** | **$122,000** | **$186,500** | **$308,500** |

### Break-Even Analysis

```
Month 1-2:   Recruiting and hiring              Net: -$20,000
Month 3-4:   Onboarding (50% productivity)      Net: -$10,000
Month 5-6:   Ramping (75% productivity)          Net: +$5,000/month
Month 7+:    Full productivity                   Net: +$12,000/month
                                                        ↑
Break-even: ~Month 6 after start date (Month 8 from approval)
```

---

## Implementation Timeline

| Week | Milestone |
|------|-----------|
| 0 | Approval received |
| 1-2 | Job description finalized, posted to channels |
| 3-6 | Interview candidates (target 3-4 interviews) |
| 7-8 | Offer extended and accepted |
| 9-10 | New hire starts; onboarding begins |
| 11-14 | Paired work with David Kim; learn Horizon codebase and design patterns |
| 15-16 | Independent work on Catalyst and Insight Engine |
| 17+ | Full productivity; design system work begins |

**Estimated time to full productivity: 4 months from approval.**

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Cannot find qualified candidate quickly | Medium | Medium | Start with contract designer while searching for FTE |
| New hire doesn't work out | Low | Medium | 90-day probation period; David provides mentorship |
| David Kim leaves before new hire is productive | Low | Very High | Expedite hiring; improve David's workload immediately with interim measures |
| Budget pressure leads to delayed approval | Medium | High | Present cost-of-inaction data; every sprint costs $7,000 |
| New hire increases coordination overhead | Low | Low | Clear team allocation reduces coordination; weekly design sync |
| Scope of design work grows to fill new capacity | Medium | Low | POs prioritize; design capacity serves must-have features first |

---

## Alternatives Considered

| Alternative | Why Not Recommended |
|-------------|-------------------|
| **Do nothing** | Cost: $180K/yr. David burnout risk. Catalyst velocity continues declining. |
| **Contract/freelance designer** | Good interim measure but doesn't solve long-term need. Contractors lack context. |
| **Reduce scope to fit 1 designer** | Not viable — 4 teams each have board-committed deliverables. |
| **Design system only (no hire)** | Helps long-term but requires David to have free time he doesn't have. |
| **Redistribute David differently** | Rearranging the deck chairs. 0.25 FTE per team is still insufficient. |

---

## Recommendation

**Approve the hire of one mid-level UX designer for the Horizon Program.**

- **Net benefit Year 1:** $122,000
- **Net benefit over 2 years:** $308,500
- **Break-even:** 6 months after new hire starts
- **Risk of inaction:** $180,000/year in lost velocity + David Kim flight risk + Catalyst velocity decline + Insight Engine stagnation

The data is clear: **we are paying more for the absence of this role than the role would cost.**

---

## Appendix: Supporting Data

### A. Velocity Impact Detail

| Sprint | Blocked Points (David) | Blocked Points (Tom) | Total Blocked |
|--------|----------------------|---------------------|---------------|
| S43 | 8 | 3 | 11 |
| S44 | 10 | 5 | 15 |
| S45 | 13 | 4 | 17 |
| S46 | 11 | 6 | 17 |
| S47 | 14 | 5 | 19 |
| **Average** | **11.2** | **4.6** | **15.8** |

### B. Industry Benchmarks

| Metric | Industry Standard | Horizon Program |
|--------|------------------|-----------------|
| Designer-to-developer ratio | 1:5 to 1:8 | 1:22 |
| Teams per designer | 1-2 | 3 (4th unserved) |
| Design request wait time | <1 day | 4.2 days |

### C. Stakeholder Support

| Stakeholder | Position |
|-------------|----------|
| Jennifer Walsh (VP/RTE) | Champion — has been escalating this for 3 sprints |
| Ana Martinez (Catalyst SM) | Champion — team most affected |
| Chris Wong (Nexus SM) | Supporter |
| Raj Patel (Velocity PO) | Supporter |
| David Kim (Designer) | Champion — personal sustainability at stake |
