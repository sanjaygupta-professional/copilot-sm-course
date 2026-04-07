# Module 4.1: Sprint Analytics & KPI Dashboards

**Duration:** 35 minutes
**Prerequisites:** Level 2 completed

---

## What You'll Learn

By the end of this module, you will:
1. Define and track the 10 metrics that matter (not just velocity)
2. Build live dashboards in Copilot + Excel
3. Distinguish vanity metrics from actionable metrics
4. Create audience-specific views (team, management, executive)
5. Apply statistical process control to sprint metrics

---

## Introduction: Beyond "How Fast Are We Going?"

Most Scrum Masters track velocity and call it metrics. But velocity alone is like measuring a car's speed without checking fuel, engine temperature, or tire pressure. You might be going fast, but you could be heading for a breakdown.

The Velocity Squad has 8 sprints of data (Sprints 40-47). That's enough to tell a story -- if you know what to look for. Velocity went from 48 to 52 to 45 to 38 to 35 to 42 to 55 to 48. What does that tell you? On its own, not much. Combined with the right companion metrics, it tells you everything.

This module teaches you to build a metrics practice that drives decisions, not just reports.

---

## Exercise 1: SM Metrics Inventory (Basic)

**Time:** 5 minutes

Before building dashboards, you need to know what you're measuring and why. Let's catalog the metrics available from Velocity Squad data and categorize them.

> **Tip:** To use the sample files referenced in exercises, click the file link to open it in the course viewer, then copy the content. You can paste it directly into Copilot chat, or save it as a local file and upload it using the **+ (Add content)** button.

**Using `sample-files/metrics/velocity-history.csv` and `sample-files/metrics/quarterly-metrics-sprints-40-47.csv`:**

```
I'm a Scrum Master for the Velocity Squad (7-person team, Sprint 47, AKX project at Accenture).

Here is our velocity history across Sprints 40-47:
Sprint 40=48, 41=52, 42=45, 43=38, 44=35, 45=42, 46=55, 47=48

I also have quarterly metrics data from sample-files/metrics/quarterly-metrics-sprints-40-47.csv.

Help me build a comprehensive SM metrics inventory:

1. **LIST ALL AVAILABLE METRICS** from this data
   - Velocity, sprint goal achievement, carryover rate, cycle time, etc.
   - What can be derived or calculated from existing data?

2. **CATEGORIZE EACH METRIC**
   - Leading indicator vs. lagging indicator
   - Team-facing vs. stakeholder-facing
   - Health metric vs. delivery metric vs. process metric

3. **THE TOP 10 THAT MATTER**
   - Which 10 metrics should I track weekly?
   - Why each one matters
   - What decision does each metric inform?

4. **WHAT'S MISSING?**
   - What important metrics can't I get from current data?
   - What should I start collecting?

Present as a table with columns: Metric | Type | Category | Decision It Informs | Collection Frequency
```

### What You Should See

Copilot will produce a categorized inventory including:
- **Leading indicators:** WIP (Work In Progress) count, blocker age, daily burndown slope, standup duration trend
- **Lagging indicators:** Velocity, sprint goal achievement, carryover rate, defect escape rate
- **The critical insight:** Leading indicators predict problems; lagging indicators confirm them. Most SMs only track lagging indicators and wonder why they're always reacting.

A top-10 list that goes well beyond velocity: sprint goal achievement %, carryover rate, average cycle time, blocker count and age, team health index, standup duration, retro action completion rate, PR review time, and predictability (velocity standard deviation).

---

## Exercise 2: Dashboard Design (Basic)

**Time:** 8 minutes

Now let's build an actual dashboard. One page, four quadrants, everything a SM needs at a glance.

**Using `sample-files/metrics/velocity-history.csv` and `sample-files/metrics/quarterly-metrics-sprints-40-47.csv`:**

```
Help me build a single-page sprint dashboard for the Velocity Squad using our data from Sprints 40-47.

VELOCITY DATA:
Sprint 40=48, 41=52, 42=45, 43=38, 44=35, 45=42, 46=55, 47=48

DESIGN REQUIREMENTS:
Build 4 quadrants on one page:

**QUADRANT 1: Velocity Trend with Control Limits**
- Plot velocity for Sprints 40-47
- Calculate and show upper/lower control limits (mean +/- 2 standard deviations)
- Mark any points outside control limits
- Show the mean line
- Add trend direction indicator

**QUADRANT 2: Sprint Burndown Pattern**
- Typical burndown shape for Sprint 47
- Show ideal line vs. actual pattern
- Flag: late-sprint crunch vs. steady burn

**QUADRANT 3: Team Health Radar**
- 6 dimensions: Psychological Safety, Sustainable Pace, Clarity, Collaboration, Growth, Process Satisfaction
- Current sprint vs. 3-sprint average
- Highlight any dimension below 3.0

**QUADRANT 4: Impediment & Flow Metrics**
- Open impediment count and age
- Average cycle time trend
- Carryover rate by sprint

OUTPUT:
- Generate this as an Excel-ready format (tables with formulas)
- Include conditional formatting rules (red/yellow/green)
- Add sparkline descriptions for each metric
- Make it copy-paste ready for Excel or Google Sheets
```

### What You Should See

Copilot will generate:
- Velocity chart data with calculated mean (44.6) and control limits (~30.4 and ~58.8)
- Sprint 44 (35) flagged as approaching lower control limit
- Sprint 46 (55) flagged as approaching upper control limit
- Excel formulas for AVERAGE, STDEV, conditional formatting rules
- A radar chart data layout for team health dimensions
- Color-coding thresholds: Green (on track), Yellow (watch), Red (action needed)

---

## Exercise 3: Vanity Metric Detector (Intermediate)

**Time:** 5 minutes

Not every number that goes up is a win. The single test for a useful metric: "What decision does this change?"

```
I need to audit our metrics for vanity metrics. Here are 15 common agile metrics.

For each one, apply this test: "What specific decision does this metric inform?"
If there's no clear decision, it's a vanity metric.

THE 15 METRICS:
1. Velocity (story points per sprint)
2. Number of stories completed
3. Sprint burndown chart
4. Cumulative flow diagram
5. Sprint goal achievement %
6. Team happiness score
7. Lines of code per sprint
8. Number of meetings per week
9. Cycle time (idea to done)
10. Defect escape rate
11. Code coverage %
12. Number of Jira tickets created
13. Standup duration
14. Retro action completion rate
15. Story point accuracy (estimated vs. actual)

For each metric, provide:

| Metric | Decision It Informs | Vanity? | Why |
|--------|---------------------|---------|-----|

Then:
- Which metrics do teams commonly over-value?
- Which under-valued metrics should SMs pay more attention to?
- What's the danger of tracking vanity metrics? (Hint: Goodhart's Law)

Apply this to the Velocity Squad: which of these 15 should I actually track, and which should I drop?
```

### What You Should See

Copilot will flag metrics like:
- **Vanity:** Lines of code (incentivizes bloat), number of Jira tickets (activity, not outcomes), stories completed without context (5 small stories vs. 2 large ones)
- **Undervalued:** Retro action completion rate (measures whether you actually improve), cycle time (measures flow health), defect escape rate (measures quality)
- **Goodhart's Law warning:** "When a measure becomes a target, it ceases to be a good measure." If you celebrate velocity, teams will inflate story points. If you track lines of code, developers will write verbose code.

---

## Exercise 4: Audience-Specific Views (Intermediate)

**Time:** 5 minutes

The same data tells different stories to different audiences. Your team needs learning signals. Management needs delivery reliability. Executives need business impact.

```
I have the Velocity Squad's data from Sprints 40-47. Help me create 3 different views of the SAME data for different audiences.

VELOCITY DATA:
Sprint 40=48, 41=52, 42=45, 43=38, 44=35, 45=42, 46=55, 47=48

TEAM CONTEXT:
- 7-person team, AKX project at Accenture
- Sprint 44 had the David (UX) availability issue
- Sprint 46 had reduced scope but high focus
- Sprint goal achievement: 90%, 85%, 80%, 60%, 50%, 75%, 95%, 80%

---

**VIEW 1: Team Retro View (Learning Focus)**
- What does the data tell us about our patterns?
- Where did we improve and why?
- What experiments should we try?
- Tone: Curious, non-judgmental, growth-oriented
- Format: Discussion prompts, not reports

**VIEW 2: Management View (Delivery Reliability)**
- Are we hitting commitments?
- Is the trend improving or declining?
- What's the risk to upcoming milestones?
- Tone: Factual, concise, risk-aware
- Format: One-page summary with RAG status

**VIEW 3: Executive View (Business Impact)**
- Are we delivering value?
- What's the ROI of this team?
- Are there organizational impediments to address?
- Tone: Business language, zero agile jargon
- Format: 3 bullets + 1 ask

For each view, show me the actual content I would present. Not a template -- the actual words using our data.
```

### What You Should See

Three distinctly different presentations:

**Team view** focuses on learning: "Our velocity swings (35-55 range) suggest we're sensitive to external dependencies. When we controlled scope in Sprint 46, we hit 95% of our goal. What does that tell us about planning?"

**Management view** focuses on reliability: "Delivery predictability: YELLOW. Sprint goal achievement averaged 77% over 8 sprints. Trend: Improving after Sprint 44 dip. Risk: UX dependency remains unresolved."

**Executive view** focuses on impact: "The AKX team delivered 363 story points across 8 sprints. A design resource constraint reduced output by an estimated 15% in Sprints 43-45. Recommendation: Dedicated UX allocation would recover ~20 points per quarter."

---

## Exercise 5: Statistical Process Control (Advanced)

**Time:** 7 minutes

> **Tip:** This exercise covers Statistical Process Control (SPC), which involves control charts and statistical analysis. If you're new to SPC concepts, you can skip this exercise and return to it later — the remaining modules don't depend on it. For those interested, SPC is a powerful technique for data-driven Scrum Masters to separate genuine trends from normal sprint-to-sprint variation.

SPC separates signal from noise. Without it, you'll react to normal variation as if something is wrong -- or miss real problems because you've normalized them.

**Reference `sample-files/metrics/metric-definitions.md` for metric definitions.**

```
Apply Statistical Process Control (SPC) to the Velocity Squad's sprint data.

VELOCITY DATA (Sprints 40-47):
48, 52, 45, 38, 35, 42, 55, 48

STEP 1: CALCULATE CONTROL CHART
- Mean (X-bar)
- Standard deviation
- Upper Control Limit (UCL = mean + 2*SD)
- Lower Control Limit (LCL = mean - 2*SD)
- Upper/Lower warning limits (+/- 1*SD)

STEP 2: IDENTIFY VARIATION TYPE
For each sprint, classify:
- **Common cause variation** (normal, inherent to the process)
- **Special cause variation** (something specific happened)

Apply the Nelson rules:
- Any point beyond 2 SD?
- 7+ consecutive points trending in one direction?
- 2 of 3 consecutive points beyond 1 SD on same side?

STEP 3: INTERPRET FOR SM ACTION
- Which sprints show special cause variation?
- What happened in those sprints? (Sprint 44: David unavailable, Sprint 46: reduced scope)
- When should an SM investigate vs. accept normal variation?

STEP 4: PREDICT
- Based on this control chart, what's a reasonable velocity range to plan for Sprint 48?
- What confidence level can I give management?

STEP 5: COMMON SM MISTAKES
- Reacting to common cause variation ("Why did velocity drop from 52 to 45?")
- Not reacting to special cause variation
- Using velocity as a target instead of a planning tool

Show the control chart data and explain what I should tell my team about "good sprints" vs. "bad sprints."
```

### What You Should See

Copilot will calculate:
- **Mean:** ~45.4
- **Standard deviation:** ~6.7
- **UCL (2 SD):** ~58.8
- **LCL (2 SD):** ~32.0
- **Warning limits (1 SD):** ~52.1 and ~38.7

Key findings:
- No single point beyond 2 SD (no extreme outlier), but Sprints 43-44 (38, 35) show a run below the mean worth investigating
- Sprint 44 (35) is below the 1 SD warning limit -- special cause variation (David's unavailability is the known cause)
- Sprint 46 (55) is above the 1 SD warning limit -- special cause (reduced scope, high focus)
- The 48 -> 52 -> 45 -> 38 -> 35 sequence shows 4 consecutive declining points -- a signal, not just noise

**SM takeaway:** Plan Sprint 48 at 39-52 (1 SD range) for 68% confidence, or 32-59 (2 SD range) for 95% confidence. Tell the team: "There are no bad sprints -- there's information."

> **Signals to Watch For**
>
> - Treating velocity drops as failures instead of data points
> - Management pressure to "get velocity back up" (misunderstanding variation)
> - Team gaming story points to show "improvement"
> - Reacting to every sprint-over-sprint change (common cause noise)
> - Ignoring genuine trends (3+ sprints in one direction)

---

## Exercise 6: The Metrics Narrative (Advanced)

**Time:** 5 minutes

Numbers don't persuade people. Stories do. But stories backed by numbers are irresistible. Let's write the story of the Velocity Squad's last 4 sprints.

```
Write "The Story of Sprints 44-47" for the Velocity Squad using data-driven storytelling.

THE DATA:
- Sprint 44: Velocity 35, Goal Achievement 50%, David (UX) availability dropped
- Sprint 45: Velocity 42, Goal Achievement 75%, team adapted, started planning design 1 sprint ahead
- Sprint 46: Velocity 55, Goal Achievement 95%, reduced scope, high focus, best sprint in months
- Sprint 47: Velocity 48, Goal Achievement 80%, back to normal scope, some old patterns returning

TEAM: 7 members, AKX project, Accenture. Raj Patel (PO), Lisa Chen (Senior Dev), Marcus Williams (Junior), Priya Sharma (Remote, Bangalore), James Rodriguez (QA Lead), Emma Thompson (QA), David Kim (UX, shared across 3 teams).

WRITE THREE VERSIONS:

**VERSION 1: The Retro Story (for the team)**
- 200 words max
- Celebrate the learning arc
- Pose the question: "How do we keep Sprint 46's focus without reducing scope?"
- Tone: We did this together

**VERSION 2: The Stakeholder Update (for Jennifer Walsh, VP)**
- 150 words max
- Lead with delivery trajectory
- Acknowledge the dip and recovery
- Make one specific ask (design capacity)
- Tone: Confident, data-backed

**VERSION 3: The SM Reflection (for yourself)**
- What did I learn about this team?
- What should I do differently next sprint?
- What patterns am I seeing that the team can't see?
- Tone: Honest self-assessment

Each version uses the same data but tells a completely different story. Show me all three.
```

### What You Should See

Three distinct narratives:

**Team version:** A story of resilience. "Sprint 44 hit us hard. But look what happened next -- we adapted. We started planning design needs earlier. We had honest conversations about capacity. Sprint 46 proved what this team can do when we're focused. The question isn't whether we can perform at that level -- we proved we can. The question is: what conditions made Sprint 46 possible, and how do we create those conditions every sprint?"

**Stakeholder version:** "The AKX team has recovered from the Sprint 44 dip and stabilized delivery. Sprint goal achievement improved from 50% to 80% over three sprints. The team self-organized around the design constraint, but the underlying capacity issue remains. Request: 30 minutes to discuss dedicated UX allocation for Q2."

**SM reflection:** Honest assessment of what the SM missed, what they'd do differently, and emerging patterns (is Sprint 47's slight regression the start of a new trend, or normal variation?).

---

## When This Doesn't Work

- **"My team doesn't have 8 sprints of data."** Start with what you have. Even 3 sprints show patterns. The important thing is to start collecting now.
- **"Management just wants velocity."** Use the audience-specific views from Exercise 4. Give them velocity AND the context that makes it meaningful. Over time, introduce additional metrics.
- **"The team feels surveilled."** Metrics are for learning, not surveillance. Share the dashboard WITH the team first. Let them help design it. If they feel ownership, they won't feel watched.
- **"I don't know statistics."** You don't need a statistics degree. Mean, standard deviation, and control limits are enough. Copilot does the math -- you interpret the story.
- **"Executives don't care about sprint metrics."** Correct. That's why Exercise 4 exists. Translate sprint metrics into business outcomes: time-to-market, delivery reliability, risk reduction.

> **Warning:** Some exercises in this module use long prompts with embedded data. If you encounter a "Something went wrong" error, try these fixes: (1) Start a new chat — long conversations accumulate context that can cause failures; (2) Upload data as a file instead of embedding it in the prompt; (3) Break a complex prompt into two simpler ones. Copilot has per-message limits that can be reached with very long prompts combined with file uploads.

---

## Module Complete!

You now know how to:
- ✅ Build a comprehensive metrics inventory beyond velocity
- ✅ Design single-page dashboards with control limits
- ✅ Detect and eliminate vanity metrics
- ✅ Tailor the same data for team, management, and executive audiences
- ✅ Apply statistical process control to sprint data
- ✅ Tell data-driven stories that drive action

---

## Next Steps

Continue to **Module 4.2: Predictive Intelligence & Early Warning Systems**

---

## Quick Reference

### Metrics Inventory
```
List all available metrics from [data sources].
Categorize: leading vs. lagging, team vs. stakeholder, health vs. delivery.
Top 10 that matter. What decision does each inform?
```

### Dashboard Design
```
Build single-page sprint dashboard with 4 quadrants:
velocity trend with control limits, burndown, health radar, flow metrics.
Excel-ready with conditional formatting.
```

### Vanity Metric Test
```
For each metric: "What specific decision does this inform?"
No clear decision = vanity metric. Apply Goodhart's Law check.
```

### Audience-Specific Views
```
Same data, 3 views:
- Team retro (learning focus, discussion prompts)
- Management (delivery reliability, RAG status)
- Executive (business impact, 3 bullets + 1 ask, zero jargon)
```

### Statistical Process Control
```
Calculate control chart: mean, SD, UCL/LCL, warning limits.
Classify each point: common cause vs. special cause variation.
Apply Nelson rules. What's the planning range for next sprint?
```

### Metrics Narrative
```
Write data-driven story of Sprints [X-Y].
Version 1: Team (celebrate learning). Version 2: Stakeholder (delivery trajectory).
Version 3: SM reflection (honest self-assessment).
```

---

**Ready to predict problems before they happen? Continue to Module 4.2!**
