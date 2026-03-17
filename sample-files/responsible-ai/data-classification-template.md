# Data Classification Template for Copilot Usage

Use this template to classify data before sharing with Microsoft Copilot.

---

## Classification Levels

| Level | Color | Definition | Examples | Action |
|-------|-------|------------|----------|--------|
| **Safe** | 🟢 Green | Anonymized, aggregated, or publicly available data | Sprint velocity (numbers only), generic process descriptions, industry benchmarks | Share freely |
| **Caution** | 🟡 Yellow | Contains team context but no PII or sensitive data | Team structure (roles, not names), sprint goals, impediment categories, anonymized health survey data | Anonymize names, remove client references before sharing |
| **Never Share** | 🔴 Red | Contains PII, HR data, client-confidential info, or compliance-sensitive data | Performance reviews, salary data, client contract details, medical/personal leave reasons, individual performance metrics used for HR decisions | Do NOT share with Copilot under any circumstances |

---

## Classification Exercise

Review these data items from a typical Scrum Master's week and classify each:

| # | Data Item | Your Classification | Reasoning |
|---|-----------|-------------------|-----------|
| 1 | "Sprint 47 velocity was 48 story points" | | |
| 2 | "Priya Sharma has been working weekends for the last 3 sprints" | | |
| 3 | "Our burndown shows 15 points remaining with 3 days left" | | |
| 4 | "Marcus received a below-expectations rating last quarter" | | |
| 5 | "The AKX platform serves 12,000 internal users at Accenture" | | |
| 6 | "David Kim is interviewing at another company" | | |
| 7 | "Team health survey: Collaboration rated 3.2/5, Morale 2.8/5" | | |
| 8 | "Lisa Chen disagrees with Raj's prioritization approach" | | |
| 9 | "Sprint 46 retrospective themes: too many meetings, unclear requirements" | | |
| 10 | "Client XYZ requested a compliance audit of our data handling" | | |
| 11 | "Emma is on medical leave next week" | | |
| 12 | "Our impediment log shows 7 design-related blockers in 4 sprints" | | |
| 13 | "Raj's wife is expecting and he may need paternity leave" | | |
| 14 | "Average cycle time dropped from 5.2 to 3.8 days" | | |
| 15 | "Jennifer Walsh approved budget for an additional QA hire" | | |

---

## Answer Key

| # | Classification | Reasoning |
|---|---------------|-----------|
| 1 | 🟢 Green | Aggregated metric, no PII |
| 2 | 🔴 Red | Names individual + implies overwork (HR-sensitive) |
| 3 | 🟢 Green | Aggregated sprint metric |
| 4 | 🔴 Red | Performance review data — never share |
| 5 | 🟡 Yellow | Contains client/org info but not sensitive |
| 6 | 🔴 Red | Confidential career information |
| 7 | 🟡 Yellow | Team-level (not individual) but could identify small team issues |
| 8 | 🟡 Yellow | Describes interpersonal dynamic but no PII. Anonymize: "Senior dev disagrees with PO's approach" |
| 9 | 🟢 Green | Aggregated retro themes, no individuals named |
| 10 | 🔴 Red | Client name + compliance context — never share |
| 11 | 🔴 Red | Medical information — protected data |
| 12 | 🟢 Green | Aggregated impediment data |
| 13 | 🔴 Red | Personal/family information |
| 14 | 🟢 Green | Aggregated process metric |
| 15 | 🟡 Yellow | Contains org info and hiring decisions — anonymize: "VP approved additional QA headcount" |

---

## Key Principles

1. **When in doubt, anonymize.** Replace names with roles. Replace "Lisa Chen" with "Senior Developer."
2. **Aggregated > Individual.** "Team velocity is 48" is safe. "Marcus completed only 5 points" is not.
3. **Context matters.** "Someone is frustrated" is Yellow. "Priya is frustrated because of timezone isolation" adds identifiable context that makes it Red.
4. **HR-adjacent = Red.** Anything that could influence hiring, firing, promotion, or compensation decisions should never be shared with AI.
5. **Client data = Red.** Client names, contract details, and confidential business information are always off-limits.
