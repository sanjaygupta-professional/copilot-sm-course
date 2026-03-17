# Custom SM Agent — Design Specification Template

**Platform:** Microsoft Copilot Studio
**Version:** 1.0 (Initial Design)
**Author:** You (Scrum Master, Velocity Squad)
**Date:** [Date]

---

## 1. Agent Name & Purpose

| Field | Value |
|-------|-------|
| **Agent Name** | Velocity Squad SM Agent |
| **Purpose** | Automate routine SM information gathering, reporting, and early warning detection so the SM can focus on coaching, facilitation, and impediment resolution |
| **Primary Users** | You (SM), Raj Patel (PO), Jennifer Walsh (VP) |
| **Scope** | Velocity Squad only — not cross-team |

### Problem Statement

As SM for the Velocity Squad, you spend approximately 5 hours per week on information gathering, report writing, and status communication that follows predictable patterns. This agent handles those patterns so you can redirect time to high-value coaching and facilitation work.

### What This Agent Is NOT

- Not a replacement for human facilitation
- Not a decision-maker — it surfaces information and recommendations
- Not a direct communication channel to the team (all messages go through you first in v1)

---

## 2. Persistent Knowledge Base

The agent maintains awareness of these data sources, updated at the specified frequencies:

| Knowledge Area | Source | Update Frequency | Format |
|---------------|--------|-----------------|--------|
| Team roster & roles | Team context document | Monthly or on change | Markdown |
| Sprint backlog & status | Azure DevOps / Jira | Real-time (API) | JSON |
| Sprint velocity history | Metrics spreadsheet | End of each sprint | CSV |
| Impediment log | Impediment tracker | Daily | Structured table |
| Retro action items | Retro notes | Each retrospective | Markdown |
| Team working agreements | Working agreements doc | Quarterly | Markdown |
| Ceremony schedule | Team calendar | Sprint boundary | Calendar events |
| Stakeholder list & preferences | Stakeholder register | Monthly | Structured table |
| David Kim's availability | Shared resource calendar | Weekly | Calendar events |
| Priya's timezone & holidays | Team context + India holiday calendar | Annually | Reference data |

### Static Context (Loaded Once, Updated Rarely)

```
Team: Velocity Squad at Accenture — Internal Digital Products
Product: AKX (Accenture Knowledge Exchange)
Sprint Length: 2 weeks (Wednesday to Tuesday)
Team Size: 7 (Lisa, Marcus, Priya, James, Emma, David, Raj)
SM Manager: Jennifer Walsh (VP Internal Digital Products)
SoS Peers: Ana Martinez, Chris Wong
Key Constraint: David Kim shared across 3 teams (~4 days/sprint)
Key Constraint: Priya Sharma in IST timezone (10.5 hours ahead of ET)
```

---

## 3. Triggers

### Scheduled Triggers

| Trigger | Schedule | Action |
|---------|----------|--------|
| Daily standup prep | Weekdays, 8:30 AM ET (1 hour before standup) | Generate standup briefing from yesterday's updates and open blockers |
| Sprint report draft | Sprint Day 9 (Monday before sprint end) | Draft sprint progress report from current burndown and completion data |
| Ceremony prep | 24 hours before each ceremony | Generate ceremony-specific preparation package |
| Weekly metrics digest | Friday 4:00 PM ET | Compile weekly metrics summary with trend indicators |
| SoS prep | Monday 8:00 AM ET | Generate cross-team dependency update for Scrum of Scrums |
| Impediment aging alert | Daily, 9:00 AM ET | Flag any impediment open > 3 days without status update |

### Event-Based Triggers

| Trigger | Event | Action |
|---------|-------|--------|
| Blocker detected | Story status changed to "Blocked" in backlog tool | Alert SM with blocker details and suggested resolution steps |
| Scope change | Story added to or removed from active sprint | Notify SM with sprint commitment impact analysis |
| Velocity anomaly | Sprint burndown deviates > 20% from ideal line | Generate risk assessment with historical comparison |
| Carryover pattern | Same story appears in carryover 2+ sprints | Flag pattern with root cause analysis prompts |
| Capacity change | Team member PTO or absence logged | Recalculate sprint capacity and flag at-risk stories |

---

## 4. Actions

### Information Gathering Actions

| Action | Description | Output |
|--------|-------------|--------|
| Compile standup briefing | Summarize yesterday's progress, today's plans, and open blockers per team member | Formatted briefing in Teams chat |
| Generate sprint report | Create sprint progress report with burndown, velocity, and completion metrics | Draft report for SM review |
| Analyze sprint health | Compare current sprint metrics against team baselines and flag anomalies | Health dashboard update |
| Summarize impediments | Create current impediment status with aging, owners, and suggested next steps | Impediment digest |

### Communication Drafting Actions

| Action | Description | Output |
|--------|-------------|--------|
| Draft stakeholder update | Generate status email for Jennifer or other stakeholders | Email draft for SM review |
| Draft follow-up messages | Create action item reminders for specific team members | Message drafts for SM to send |
| Draft escalation request | Generate escalation message with context when impediment ages out | Escalation draft for SM review |
| Generate ceremony invite updates | Update calendar invite descriptions with relevant context | Calendar update drafts |

### Analysis Actions

| Action | Description | Output |
|--------|-------------|--------|
| Trend analysis | Compare current sprint metrics to 8-sprint history and identify trends | Trend report with visualizations |
| Dependency mapping | Map cross-team dependencies and flag those at risk | Dependency status table |
| Capacity forecasting | Project next sprint capacity based on known PTO and resource availability | Capacity forecast |
| Retro action tracking | Track completion status of retro action items across sprints | Action item status report |

---

## 5. Guardrails — What the Agent Never Does

| Guardrail | Rationale |
|-----------|-----------|
| Never sends messages to team members directly | SM reviews all communication before it reaches the team |
| Never moves or reassigns stories in the backlog | Only the PO and team members make backlog changes |
| Never changes sprint scope or commitment | Sprint changes require team discussion |
| Never provides performance evaluations of individuals | Not the agent's role; could damage trust |
| Never shares team data outside the defined stakeholder list | Data privacy and team trust |
| Never makes promises or commitments on behalf of the SM | SM retains all decision authority |
| Never overrides human judgment on impediment priority | Suggests priority; SM decides |
| Never accesses personal calendars or private channels | Respects individual privacy |

---

## 6. Data Sources & Integrations

| System | Data Accessed | Integration Method | Permissions |
|--------|--------------|-------------------|-------------|
| Azure DevOps / Jira | Sprint backlog, burndown, velocity | API (read-only) | Project-level read access |
| Microsoft Teams | Channel messages, meeting notes | Teams API (read-only) | Team channel access only |
| Outlook Calendar | Ceremony schedule, PTO | Graph API (read-only) | Team calendar only |
| SharePoint | Team documents, working agreements | SharePoint API (read-only) | Team site only |
| Excel Online | Metrics spreadsheets | Graph API (read-only) | Specific files only |

---

## 7. Output Channels

| Channel | Use Case | Format |
|---------|----------|--------|
| Teams DM to SM | Daily briefings, alerts, drafts for review | Adaptive cards + markdown |
| Teams Channel (draft) | Sprint announcements, ceremony summaries (posted by SM after review) | Formatted messages |
| Email (draft) | Stakeholder updates, escalation messages (sent by SM after review) | Email drafts in Outlook |
| Dashboard | Metrics, sprint health, impediment status | Power BI or Teams tab |

---

## 8. Human Escalation Criteria

The agent escalates to the SM immediately (priority alert) when:

| Condition | Escalation Action |
|-----------|-------------------|
| Impediment open > 5 business days with no resolution path | Priority alert with escalation recommendation |
| Sprint burndown shows < 70% completion probability | Risk alert with suggested team discussion topics |
| 2+ team members blocked on the same dependency | Systemic blocker alert with coordination suggestion |
| David Kim's availability drops below 3 days in a sprint | Capacity risk alert with story impact analysis |
| New work added to sprint without corresponding removal | Scope creep alert with commitment impact |
| Team member goes silent (no updates for 2+ days) | Wellness/blocker check-in suggestion |

---

## 9. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| SM time saved per week | > 4 hours | Time audit comparison (before/after) |
| Alert accuracy (true positives) | > 80% | SM rates each alert as useful or not |
| Draft acceptance rate | > 70% sent with minor edits only | Track edits before sending |
| Team satisfaction | No decrease | Quarterly team survey |
| Impediment resolution time | 20% faster | Compare to pre-agent baseline |

---

## 10. Rollout Plan

| Phase | Duration | Scope |
|-------|----------|-------|
| **Phase 1: Shadow Mode** | 2 weeks | Agent runs but only sends output to SM privately. SM compares agent output to manual work. |
| **Phase 2: Assisted Mode** | 2 sprints | Agent generates drafts; SM reviews and sends all communication. Team knows agent exists. |
| **Phase 3: Semi-Autonomous** | Ongoing | Agent sends routine items (standup briefings, metric digests) automatically. Complex items still require SM review. |

---

## 11. Review & Iteration

- **Weekly:** SM reviews agent accuracy and adjusts prompts/triggers
- **Sprint boundary:** Evaluate metrics and update knowledge base
- **Monthly:** Review guardrails and escalation criteria with team feedback
- **Quarterly:** Full specification review and v2 planning
