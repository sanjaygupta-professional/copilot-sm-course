# Microsoft Copilot Research Summary for Course Fixes

**Date:** 2026-04-07
**Purpose:** Ground all P1/P2 course fixes in authentic Microsoft documentation before making any edits.

---

## Topic A: Windows Copilot Keyboard Shortcuts

### Finding: Alt+Spacebar is INVALID. Use Windows key + C (or dedicated Copilot key).

**Current course text:** "Alt+Spacebar" to launch Copilot on Windows
**Correct shortcut:** **Windows key + C** (or press the dedicated Copilot key on newer keyboards)

**Details:**
- Microsoft's official documentation says: "You can launch the Copilot app at any time in one of the following ways: Press the Copilot key on your keyboard. Using the Windows key + C keyboard shortcut."
- Alt+Spacebar is NOT mentioned in any current Microsoft documentation
- The shortcut can launch the full Copilot app or a "quick view" depending on user settings (Account > Settings > Copilot Keyboard Shortcuts)
- Voice activation: "Hey Copilot" is also available
- **Note:** Some reports indicate Win+C may have been deprecated in certain Windows 11 builds. The safest approach is to present multiple access methods (Copilot key, Win+C, taskbar icon, Start menu) and note that availability varies by Windows version.

**Mac equivalent:** Not confirmed in official docs. The course should provide manual navigation instructions rather than relying on a shortcut.

**Source:** [Getting started with Copilot on Windows - Microsoft Support](https://support.microsoft.com/en-us/topic/getting-started-with-copilot-on-windows-1159c61f-86c3-4755-bf83-7fbff7e0982d)

### Finding: Alt+I for in-app Copilot is INVALID. Use Home tab > Copilot button or Alt+H, F, X.

**Current course text:** "Press Alt + I to open Copilot" in Excel/PowerPoint
**Correct method:**
- **UI method:** Home tab > Copilot button (on the ribbon)
- **Keyboard shortcut in Excel/PowerPoint:** Alt+H, F, X (Home tab keyboard accelerator path)
- **No single-key shortcut** exists for opening the Copilot pane

**Important:** Copilot in Excel requires AutoSave enabled (file saved to OneDrive/SharePoint). If the file is local-only, the Copilot button may be grayed out.

**Troubleshooting if Copilot button is missing:**
1. Verify license (M365 Copilot license required)
2. Update to latest build
3. Refresh license (File > Account > Update License)
4. Check update channel (Semi-Annual Enterprise Channel doesn't support Copilot)
5. Enable privacy settings ("Experiences that analyze your content" + "All connected experiences" must be ON)

**Source:** [How to find and enable missing Copilot button - Microsoft Support](https://support.microsoft.com/en-us/office/how-to-find-and-enable-missing-copilot-button-in-microsoft-365-apps-c8482b93-4b96-4bb8-8ec9-5148f4d42441)

---

## Topic B: Copilot Chat File Attachment UI

### Finding: Paperclip icon is GONE. Use the + (Add content) button.

**Current course text:** "Click the paperclip icon (📎) in the chat input"
**Correct UI:** Select the **+ (Add content)** button in the compose box

**Three options appear after clicking +:**
1. **Add work content** — Uses Context IQ to locate workplace files
2. **Upload images and files** — Opens device file manager for local file upload
3. **Attach cloud files** — Opens OneDrive picker for cloud files (including shared files and Teams meeting documents)

**Details:**
- Multiple images and files can be uploaded simultaneously
- File size limit: up to 512MB per file, up to 20 files per conversation
- The old paperclip/📎 icon has been replaced with the + icon across all Copilot chat interfaces

**Source:** [Add content to Microsoft 365 Copilot Chat prompts - Microsoft Support](https://support.microsoft.com/en-us/topic/add-content-to-microsoft-365-copilot-chat-prompts-438173cf-2a2b-47e0-a1e0-82d830922fe5)

---

## Topic C: Enterprise Copilot URL

### Finding: Enterprise URL is m365.cloud.microsoft. copilot.microsoft.com is the consumer/AI companion app.

**Current course text:** "Go to copilot.microsoft.com"
**Correct enterprise URL:** **https://m365.cloud.microsoft**

**URL landscape (as of Jan 2025 transition):**
| URL | Product | Audience |
|-----|---------|----------|
| **m365.cloud.microsoft** | Microsoft 365 Copilot (full enterprise) | Enterprise M365 Copilot license holders |
| **m365copilot.com** | Copilot Chat (redirects to m365.cloud.microsoft/chat) | Enterprise and Copilot Chat users |
| **copilot.microsoft.com** | Microsoft Copilot (AI companion) | Consumer/personal use |
| office.com, microsoft365.com | Legacy URLs | Redirect to m365.cloud.microsoft |

**Important distinction:** The course targets enterprise-licensed Scrum Masters. The correct URL is **m365.cloud.microsoft**, NOT copilot.microsoft.com (which is the consumer AI companion, a separate product).

**Transition date:** App icon and name "Microsoft 365 Copilot" began rollout January 15, 2025.

**Source:** [The Microsoft 365 app transition to the Microsoft 365 Copilot app - Microsoft Support](https://support.microsoft.com/en-us/office/the-microsoft-365-app-transition-to-the-microsoft-365-copilot-app-22eac811-08d6-4df3-92dd-77f193e354a5)

---

## Topic D: Enterprise Feature Availability

### Finding: Memory is in PREVIEW (Frontier program). Admin-controlled. Enabled by default but can be turned off.

**Copilot Memory/Personalization:**
- Status: **Preview** (Frontier program) — subject to change
- Admin control: "Enhanced personalization" setting in Microsoft Graph — **ON by default**
- If admin turns it OFF: users see Personalization settings (Custom instructions, Saved memories, Chat history) as grayed out / disabled; they cannot re-enable
- User location: **Settings > Personalization** in the Copilot interface
- No additional license needed beyond Copilot Chat access
- Memories stored in user's Exchange mailbox (hidden folder)

**Recommended course callout:**
> **Note:** Copilot Memory/Personalization is a preview feature (Frontier program). If you don't see Memory or Personalization options in Settings, your organization may not have this feature enabled, or it may be turned off by your administrator. You can continue the course using context documents instead.

**Source:** [Microsoft 365 Copilot personalization and memory | Microsoft Learn](https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-personalization-memory)

### Finding: Copilot in Teams channels requires opening the immersive thread view.

**How to access:**
1. Go to Teams > select a channel
2. Click a channel post to expand it into the immersive view
3. Select **Open Copilot** in the upper-right corner
4. Thread must have at least 1,000 characters for summary

**Limitations:**
- Can't summarize images, Loop components, or shared files
- 30-day history default
- Requires the full immersive channel post view (not available from the channel feed directly)

**Recommended course callout:**
> **Note:** Copilot in Teams channels is accessed through the immersive thread view, not from the main channel feed. Open a channel post, then look for "Open Copilot" in the upper-right corner. If you don't see it, check with your IT administrator.

**Source:** [Use Copilot in Microsoft Teams chat and channels - Microsoft Support](https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-chat-and-channels-cccccca2-9dc8-49a9-ab76-b1a8ee21486c)

### Finding: Copilot in Outlook requires specific license and privacy settings.

**Requirements:**
- Microsoft 365 Copilot add-on license assigned by admin
- Privacy settings: "Experiences that analyze your content" = ON, "All connected experiences" = ON
- Only supported on primary mailboxes hosted on Exchange Online (NOT archive, group, or shared mailboxes)
- Works with both classic Outlook and new Outlook

**For meetings specifically:**
- Copilot can help prepare for meetings (summarize pre-reads, identify action items)
- "Schedule with Copilot" creates meeting invitations from email threads
- Meeting transcription/recording must be enabled for post-meeting Copilot features in Teams

**Recommended course callout:**
> **Note:** Copilot features in Outlook depend on your license and privacy settings. If you don't see the Copilot button, ensure your admin has assigned the M365 Copilot license and that connected experiences are enabled in your privacy settings (File > Account > Account Privacy).

**Sources:**
- [Chat with Copilot in Outlook - Microsoft Support](https://support.microsoft.com/en-us/topic/chat-with-copilot-in-outlook-8090e7b3-5b1d-4c6d-9b06-02edac062f58)
- [App and network requirements | Microsoft Learn](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-requirements)

---

## Topic E: Scrum Guide Terminology

### Finding: Official terms are "Daily Scrum" (not standup) and "Scrum events" (not ceremonies).

**The 2020 Scrum Guide (current, by Ken Schwaber & Jeff Sutherland) uses:**
- **"Daily Scrum"** — never "standup" or "daily standup"
- **"Sprint Planning"**, **"Sprint Review"**, **"Sprint Retrospective"** — these are "Scrum events"
- The word **"ceremony"** does NOT appear in the 2020 Scrum Guide
- The 2020 revision specifically simplified language and removed prescriptive elements

**Key definition:** "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team."

**Course fix approach:**
- In **formal instructional text, headings, and tables**: use "Daily Scrum" and "Scrum events"
- In **team dialogue/scenarios**: "standup" is acceptable as colloquial language real teams use
- On **first mention per module**: consider "Daily Scrum (often called 'standup')" for clarity
- **Do NOT rename files** like `daily-standups-week47.md` (would break links)

**Source:** [The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html)

---

## Summary: Recommended Fix Actions

| Topic | Current (Wrong) | Correct | Confidence | Risk |
|-------|----------------|---------|------------|------|
| A1: Windows shortcut | Alt+Spacebar | Windows key + C / Copilot key / taskbar | HIGH | LOW — present multiple methods |
| A2: In-app shortcut | Alt + I | Home tab > Copilot button (or Alt+H, F, X) | HIGH | LOW |
| B: Attachment icon | Paperclip (📎) | + (Add content) button | HIGH | LOW |
| C: Enterprise URL | copilot.microsoft.com | m365.cloud.microsoft | HIGH | LOW |
| D1: Memory settings | Assumed available | Preview (Frontier); add enterprise caveat | HIGH | LOW |
| D2: Teams channels | Assumed easy to find | Requires immersive view; add guidance | HIGH | LOW |
| D3: Outlook meetings | Assumed available | Requires license + privacy settings | HIGH | LOW |
| E: Scrum terminology | "standup", "ceremony" | "Daily Scrum", "Scrum event" | HIGH | LOW — judgment needed on context |

All fixes are well-grounded in official documentation with high confidence.
