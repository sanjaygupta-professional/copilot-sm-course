# Distributed Standup Notes — Nexus Team

## Team Context
- **Team:** Nexus Team (Mobile & Notifications)
- **SM:** Chris Wong (San Francisco, PST)
- **Sprint:** Sprint 4 (team is 6 weeks old)
- **Timezone spread:** PST / BRT / JST / GST

## Standup Format
Standups rotate times weekly to share the timezone burden:
- Week A: 9:00 AM PST (midnight JST — async for Tokyo)
- Week B: 6:00 PM PST (10:00 AM JST next day — async for São Paulo)
- Week C: 1:00 PM PST (5:00 AM JST — async for Tokyo, 5:00 PM BRT)

**This week: Week A schedule (9:00 AM PST)**
Tokyo members (Hiroshi, Yuki) submit async updates by 5 PM JST.

---

## Monday

**Async (Tokyo, submitted 4:30 PM JST):**
- **Hiroshi Tanaka:** "Completed push notification framework setup. Starting integration with AKX API today. Note: API documentation is outdated — contacted Velocity Squad for current specs."
- **Yuki Nakamura:** "Test environment for mobile builds is working. Found 2 issues with notification rendering on Android. Logging bugs."

**Live (9:00 AM PST):**
- **Chris Wong (SM):** "Welcome to Week 3 standup rotation. Hiroshi and Yuki posted async — I'll summarize. Hiroshi is integrating with AKX API but hit outdated docs. Yuki found Android rendering bugs."
- **Maria Santos (PO):** "I can prioritize the API documentation issue — it affects our whole sprint goal. I'll sync with Raj from Velocity Squad."
- **Wei Chen:** "Working on the iOS notification handler. On track. Quick question for Hiroshi about the framework design — I'll post in Slack."
- **Fatima Al-Hassan:** "Started the user preferences module. Need clarity on data persistence requirements — Maria, can we discuss after standup?"
- **Ben Cooper:** "Reviewing Hiroshi's PR from yesterday. Will pair with Wei on iOS testing after lunch."

**Blockers:**
- Outdated API documentation (cross-team dependency)
- Data persistence requirements unclear (PO needed)

---

## Tuesday

**Async (Tokyo):**
- **Hiroshi:** "API integration blocked. Documentation says v2 but current API is v3. Different authentication flow. Need someone from Velocity Squad to walk me through changes. This is blocking AKX-N-042 (8 points)."
- **Yuki:** "Android bugs are more serious than expected. Notification icons don't render correctly on Samsung devices (60% of our test user base). Need design input."

**Live (9:00 AM PST):**
- **Chris:** "Two escalation items from Tokyo: Hiroshi is blocked on API version mismatch — I'll raise this at SoS on Monday. Yuki needs design support for Samsung rendering."
- **Maria:** "This API issue could derail our sprint goal. Chris, can you get Lisa Chen from Velocity Squad on a call today?"
- **Wei:** "I saw Hiroshi's issue. I had the same problem last sprint. I can share the workaround I used — let me post in #nexus-engineering."
- **Fatima:** "Preferences module progressing. Met with Maria yesterday — requirements are clear now."
- **Ben:** "PR review done. Found a thread safety issue in notification queue. Posted comments for Hiroshi."

**Blockers:**
- API v2/v3 mismatch (cross-team, 8 points at risk)
- Samsung rendering (design needed)
- Thread safety issue (code review finding)

---

## Wednesday

**Async (Tokyo):**
- **Hiroshi:** "Wei's workaround helped! Partially unblocked. Still need official API docs updated for long-term maintainability. Estimate: 1 day delay on AKX-N-042."
- **Yuki:** "Worked with David Kim (shared UX) on Samsung issue. He suggested using system default icons instead of custom. Testing now."

**Live (9:00 AM PST):**
- **Chris:** "Good news: Hiroshi is partially unblocked thanks to Wei. The power of async collaboration across timezones! Yuki is testing a design fix."
- **Maria:** "Sprint goal still achievable if we recover the 1-day delay. Let's see where we are Friday."
- **Wei:** "Glad the workaround helped. I'm ahead on iOS — offering to pick up AKX-N-045 if it's ready."
- **Fatima:** "User preferences module done. Moving to push notification settings integration."
- **Ben:** "Pairing with Fatima on the integration. Good momentum."

**Blockers:**
- API docs still outdated (systemic, not blocking anymore but tech debt)
- Samsung fix pending test results

---

## Observations for SM (Chris Wong)

### What's Working
- Async/sync hybrid is functioning — Tokyo members submit on time
- Wei proactively helped Hiroshi across timezone (team forming well)
- Maria is engaged and responsive to blockers

### Concerns
- Cross-team API dependency surfaced early — need to raise at SoS
- David Kim involvement (shared designer) — risk of same bottleneck as Velocity Squad
- Hiroshi working late to compensate for timezone gap (burnout risk in forming team)
- No contribution from Hiroshi/Yuki in live standup discussions (they only post async)

### Action Items for Chris
1. Raise API documentation issue at Monday SoS
2. Check in with Hiroshi on work-life balance (is late-night work a pattern?)
3. Experiment: Invite Tokyo members to live standup once per sprint for team bonding
4. Track: Is the async format capturing enough context? Are things getting lost?
