# Module 1.2: Setting Up Your Scrum Master Workspace

**Duration:** 15 minutes
**Prerequisites:** Module 1.1 completed, Microsoft 365 Copilot access

---

## What You'll Learn

By the end of this module, you will:
1. Set up an optimal workspace for SM workflows
2. Upload sprint artifacts to Copilot
3. Use OneDrive for persistent file access
4. Understand ContextIQ for M365 search
5. Know the difference between chat and in-app Copilot

---

## The SM Workspace

As a Scrum Master, you work with many types of files:
- Ceremony notes (planning, standups, reviews, retros)
- Impediment logs and tracking documents
- Team health surveys and metrics
- Sprint data (velocity, burndowns)
- Stakeholder communications

Copilot can analyze all of these - but you need to know how to get files into Copilot effectively.

---

## Method 1: Direct File Upload

The simplest way to analyze a file is to upload it directly to Copilot chat.

### How to Upload

1. Open Copilot at copilot.microsoft.com
2. Click the **paperclip icon** (📎) in the chat input
3. Select a file from your computer
4. Add your prompt and send

### What Copilot Can Read

| File Type | Support |
|-----------|---------|
| Word (.docx) | ✅ Full support |
| Excel (.xlsx) | ✅ Full support |
| PowerPoint (.pptx) | ✅ Full support |
| PDF (.pdf) | ✅ Full support |
| Text/Markdown (.txt, .md) | ✅ Full support |
| Images (.png, .jpg) | ✅ Can describe/analyze |
| CSV (.csv) | ✅ Full support |

### Exercise 1: Upload a File

Let's practice uploading a sample file.

**Do this now:**

1. Download the sample retrospective notes from `sample-files/ceremony-notes/sprint-46-retro-raw.md`
2. Open Copilot chat
3. Click the paperclip icon
4. Upload the file
5. Add this prompt:

```
Summarize this retrospective in 5 bullet points:
- Top 3 things that went well
- Top 2 improvements needed
- Key action items
```

6. Review Copilot's response

**Tip:** You can also drag and drop files directly into the chat!

---

## Method 2: OneDrive Integration

For files you use repeatedly (like your team context documents), store them in OneDrive. Copilot can access OneDrive files directly.

### How It Works

1. Save files to your OneDrive
2. In Copilot, type `/` or click "Add content"
3. Select "OneDrive" or "Files"
4. Choose the file you want to reference
5. Copilot reads it and includes it in your chat context

### Exercise 2: Reference a OneDrive File

**Do this now:**

1. Save the `team-context/TEAM.md` file to your OneDrive
2. In Copilot chat, type: `/`
3. Look for options to add files
4. Select your uploaded TEAM.md file
5. Ask:

```
Based on this team context, what are the three biggest risks
to our Sprint 48 planning?
```

### Benefits of OneDrive

- **Persistent:** Files stay accessible across sessions
- **Shared:** Team members can reference the same files
- **Updated:** Changes to files are reflected automatically
- **Organized:** You can create a folder structure for SM work

### Recommended Folder Structure

```
OneDrive/
└── Scrum Master/
    ├── Team Context/
    │   ├── team-overview.md
    │   ├── personas.md
    │   └── working-agreements.md
    ├── Sprint Data/
    │   ├── velocity-history.xlsx
    │   └── current-sprint/
    ├── Ceremony Notes/
    │   ├── retros/
    │   ├── planning/
    │   └── reviews/
    └── Prompt Library/
        ├── personas/
        └── templates/
```

---

## Method 3: ContextIQ (M365 Search)

ContextIQ is Copilot's ability to search across your entire Microsoft 365 environment - including SharePoint, Teams, Outlook, and OneDrive.

### How to Use ContextIQ

In Copilot, ask questions that reference your work data:

```
Find the sprint retrospective notes from last month
```

```
What decisions were made in the Velocity Squad Teams channel this week?
```

```
Summarize the emails about the AKX project from the past 2 weeks
```

### What ContextIQ Can Search

| Source | What's Searchable |
|--------|------------------|
| **OneDrive** | Your files |
| **SharePoint** | Sites you have access to |
| **Outlook** | Your emails and calendar |
| **Teams** | Chats and channel messages |
| **OneNote** | Your notebooks |

### Exercise 3: Try ContextIQ

**Do this now:**

If you have existing M365 data, try asking:

```
What meetings do I have scheduled this week related to
sprint planning or retrospectives?
```

Or:

```
Find any documents in SharePoint related to our team's
definition of done.
```

**Note:** ContextIQ results depend on what data exists in your M365 environment.

---

## Chat vs. In-App Copilot

There are two ways to use Copilot, and they serve different purposes.

### Copilot Chat (copilot.microsoft.com)

**Best for:**
- Open-ended analysis and brainstorming
- Working with multiple files
- Research and planning
- Conversations that span multiple topics

**How to access:** Browser, Alt+Spacebar, Teams Copilot

### In-App Copilot (within Word, Excel, PowerPoint)

**Best for:**
- Working within a specific document
- Generating content in the document
- Analyzing the current file
- Creating presentations or spreadsheets

**How to access:** Alt+I within the app

### When to Use Which

| Task | Use |
|------|-----|
| Synthesize retro notes | Chat (upload file) |
| Write sprint review slides | PowerPoint Copilot |
| Analyze velocity data | Excel Copilot |
| Research agile practices | Chat (Researcher agent) |
| Draft stakeholder email | Outlook Copilot |
| Summarize a Teams meeting | Teams Copilot |

---

## Setting Up Your SM Workspace

Let's set up a workspace that makes your SM work efficient.

### Step 1: Create Your Folder Structure

In OneDrive, create:
- `Scrum Master/Team Context/`
- `Scrum Master/Sprint Data/`
- `Scrum Master/Ceremony Notes/`
- `Scrum Master/Prompt Library/`

### Step 2: Upload Core Context Files

Upload these files from the course materials:
- `team-context/TEAM.md` → Team Context folder
- `team-context/PERSONAS.md` → Team Context folder
- `team-context/WORKING-AGREEMENTS.md` → Team Context folder
- `prompt-library/personas/*` → Prompt Library folder
- `prompt-library/templates/*` → Prompt Library folder

### Step 3: Pin Important Files

In OneDrive, you can "pin" frequently used files so they appear at the top of your recent files list.

### Step 4: Create a Copilot Bookmark

Bookmark copilot.microsoft.com for quick access.

---

## Exercise 4: Complete Your Setup

**Do this now:**

1. Create the folder structure in OneDrive
2. Upload at least the TEAM.md file
3. Verify you can reference it in Copilot
4. Test a simple prompt:

```
Reference: [Your uploaded TEAM.md file]

List the team members and their roles.
```

---

## Module Complete!

You now know:
- ✅ How to upload files directly to Copilot
- ✅ How to use OneDrive for persistent file access
- ✅ What ContextIQ is and how it searches M365
- ✅ The difference between chat and in-app Copilot
- ✅ How to set up an organized SM workspace

---

## Next Steps

Continue to **Module 1.3: Your First Scrum Master Tasks**

In Module 1.3, you'll learn:
- Processing standup notes into actionable summaries
- Synthesizing retrospective feedback
- Transforming sprint updates for different audiences

---

## Quick Reference

### File Upload Methods

| Method | Best For | Persistence |
|--------|----------|-------------|
| Direct upload | One-time analysis | Session only |
| OneDrive reference | Repeated use | Permanent |
| ContextIQ search | Finding existing files | N/A |

### Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Copilot (Windows) | Alt + Spacebar |
| Open Copilot (Mac) | Option + Spacebar |
| In-app Copilot | Alt + I / Option + I |

---

**Ready for your first SM tasks? Let's continue!**
