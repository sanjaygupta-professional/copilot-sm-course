import { CourseStructure, ResourceSection } from '../types/course'

export const courseStructure: CourseStructure = {
  course: {
    title: "Microsoft Copilot for Scrum Masters",
    version: "1.0.0",
    description: "A comprehensive course teaching Scrum Masters to leverage Microsoft Copilot for team facilitation and agile workflows",
    targetAudience: "Scrum Masters",
    prerequisites: [
      "Microsoft 365 Copilot Enterprise license",
      "OneDrive access",
      "Basic familiarity with M365 apps",
      "Scrum fundamentals knowledge"
    ],
    estimatedDuration: "5.5 hours",
    lastUpdated: "2026-01-20"
  },
  levels: [
    {
      id: "1",
      title: "Foundation",
      description: "Core Copilot skills for Scrum Masters",
      modules: [
        {
          id: "1.1",
          title: "Welcome to Microsoft Copilot",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.1-welcome/MODULE.md",
          objectives: [
            "Understand what Microsoft Copilot is",
            "Access Copilot via browser and shortcuts",
            "Meet the Velocity Squad at Accenture"
          ]
        },
        {
          id: "1.2",
          title: "Setting Up Your Workspace",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.2-workspace-setup/MODULE.md",
          objectives: [
            "Set up optimal workspace for SM workflows",
            "Upload sprint artifacts to Copilot",
            "Use ContextIQ and OneDrive"
          ]
        },
        {
          id: "1.3",
          title: "Your First Scrum Master Tasks",
          duration: "30 min",
          path: "lesson-modules/1-fundamentals/1.3-first-tasks/MODULE.md",
          quizPath: "lesson-modules/1-fundamentals/1.3-first-tasks/quiz.json",
          objectives: [
            "Process standup notes into actionable summaries",
            "Synthesize retrospective feedback",
            "Transform sprint updates for different audiences"
          ]
        },
        {
          id: "1.4",
          title: "Researcher & Analyst Agents",
          duration: "25 min",
          path: "lesson-modules/1-fundamentals/1.4-researcher-analyst-agents/MODULE.md",
          objectives: [
            "Use Researcher for agile best practices",
            "Use Analyst for velocity and metrics analysis",
            "Combine agents for SM workflows"
          ]
        },
        {
          id: "1.5",
          title: "Persona Prompting",
          duration: "20 min",
          path: "lesson-modules/1-fundamentals/1.5-persona-prompting/MODULE.md",
          quizPath: "lesson-modules/1-fundamentals/1.5-persona-prompting/quiz.json",
          objectives: [
            "Create persona prompts (developer, PO, stakeholder)",
            "Get multi-perspective feedback on process changes",
            "Build a prompt library for coaching"
          ]
        },
        {
          id: "1.6",
          title: "Building Context with Memory",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.6-copilot-memory/MODULE.md",
          objectives: [
            "Use Copilot Memory for team context",
            "Create context documents for the Velocity Squad",
            "Manage persistent team knowledge"
          ]
        },
        {
          id: "1.7",
          title: "Copilot Across M365 Apps",
          duration: "15 min",
          path: "lesson-modules/1-fundamentals/1.7-m365-navigation/MODULE.md",
          objectives: [
            "Use Copilot in Word for sprint documentation",
            "Use Copilot in Excel for metrics tracking",
            "Use Copilot in PowerPoint for sprint reviews"
          ]
        },
        {
          id: "1.8",
          title: "Copilot in Microsoft Teams",
          duration: "25 min",
          path: "lesson-modules/1-fundamentals/1.8-teams-integration/MODULE.md",
          objectives: [
            "Get meeting summaries from ceremonies",
            "Catch up on missed standups",
            "Track action items from retrospectives"
          ]
        },
        {
          id: "1.9",
          title: "Copilot in Outlook",
          duration: "20 min",
          path: "lesson-modules/1-fundamentals/1.9-outlook-integration/MODULE.md",
          objectives: [
            "Draft stakeholder updates with appropriate tone",
            "Summarize impediment escalation threads",
            "Prepare for 1:1s and coaching sessions"
          ]
        },
        {
          id: "1.10",
          title: "SharePoint & Collaboration",
          duration: "20 min",
          path: "lesson-modules/1-fundamentals/1.10-sharepoint-collaboration/MODULE.md",
          objectives: [
            "Find team documentation using natural language",
            "Summarize agile playbook sites",
            "Track wiki updates and process documentation"
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Advanced SM Workflows",
      description: "Complex Scrum Master tasks with Copilot",
      modules: [
        {
          id: "2.1",
          title: "Facilitating Ceremonies with Copilot",
          duration: "35 min",
          path: "lesson-modules/2-advanced-sm-work/2.1-facilitating-ceremonies/MODULE.md",
          objectives: [
            "Use Copilot as thinking partner for ceremony facilitation",
            "Generate agendas and facilitation guides",
            "Process ceremony outcomes into actionable items"
          ]
        },
        {
          id: "2.2",
          title: "Impediment Management & Resolution",
          duration: "30 min",
          path: "lesson-modules/2-advanced-sm-work/2.2-impediment-management/MODULE.md",
          objectives: [
            "Track and categorize impediments systematically",
            "Analyze impediment patterns over time",
            "Draft escalation communications"
          ]
        },
        {
          id: "2.3",
          title: "Team Health & Continuous Improvement",
          duration: "30 min",
          path: "lesson-modules/2-advanced-sm-work/2.3-team-health/MODULE.md",
          objectives: [
            "Analyze team health survey results",
            "Prepare for coaching conversations",
            "Track improvement over time"
          ]
        }
      ]
    },
    {
      id: "3",
      title: "Team Visuals",
      description: "Creating visuals with DALL-E and Designer",
      modules: [
        {
          id: "3.1",
          title: "Image Generation Basics",
          duration: "20 min",
          path: "lesson-modules/3-team-visuals/3.1-image-basics/MODULE.md",
          objectives: [
            "Generate images with DALL-E 3",
            "Write effective image prompts",
            "Iterate and refine outputs"
          ]
        },
        {
          id: "3.2",
          title: "Scrum Master Visuals",
          duration: "25 min",
          path: "lesson-modules/3-team-visuals/3.2-sm-visuals/MODULE.md",
          objectives: [
            "Create sprint review visuals",
            "Generate retrospective facilitation aids",
            "Build team celebration graphics"
          ]
        }
      ]
    }
  ]
}

export const resourceStructure: ResourceSection[] = [
  {
    id: "team-context",
    title: "Team Context",
    categories: [
      {
        id: "velocity-squad",
        title: "Velocity Squad",
        files: [
          { id: "team", title: "Team Overview", path: "team-context/TEAM.md" },
          { id: "personas", title: "Team Members", path: "team-context/PERSONAS.md" },
          { id: "challenges", title: "Team Challenges", path: "team-context/CHALLENGES.md" },
          { id: "working-agreements", title: "Working Agreements", path: "team-context/WORKING-AGREEMENTS.md" }
        ]
      }
    ]
  },
  {
    id: "prompt-library",
    title: "Prompt Library",
    categories: [
      {
        id: "personas",
        title: "Persona Prompts",
        files: [
          { id: "developer", title: "Developer Persona", path: "prompt-library/personas/developer.md" },
          { id: "product-owner", title: "Product Owner Persona", path: "prompt-library/personas/product-owner.md" },
          { id: "stakeholder", title: "Stakeholder Persona", path: "prompt-library/personas/stakeholder.md" },
          { id: "agile-coach", title: "Agile Coach Persona", path: "prompt-library/personas/agile-coach.md" }
        ]
      },
      {
        id: "templates",
        title: "Templates",
        files: [
          { id: "ceremony-standup", title: "Standup Processing", path: "prompt-library/templates/ceremony-standup.md" },
          { id: "ceremony-retro", title: "Retrospective Synthesis", path: "prompt-library/templates/ceremony-retro.md" },
          { id: "impediment-analysis", title: "Impediment Analysis", path: "prompt-library/templates/impediment-analysis.md" },
          { id: "coaching-conversation", title: "Coaching Conversation", path: "prompt-library/templates/coaching-conversation.md" }
        ]
      }
    ]
  },
  {
    id: "sample-files",
    title: "Sample Files",
    categories: [
      {
        id: "ceremony-notes",
        title: "Ceremony Notes",
        files: [
          { id: "sprint-planning", title: "Sprint Planning Notes", path: "sample-files/ceremony-notes/sprint-planning-raw.md" },
          { id: "daily-standups", title: "Daily Standups Week 47", path: "sample-files/ceremony-notes/daily-standups-week47.md" },
          { id: "sprint-review", title: "Sprint Review Notes", path: "sample-files/ceremony-notes/sprint-review-raw.md" },
          { id: "sprint-retro", title: "Sprint 46 Retrospective", path: "sample-files/ceremony-notes/sprint-46-retro-raw.md" }
        ]
      },
      {
        id: "impediments",
        title: "Impediment Tracking",
        files: [
          { id: "impediment-log", title: "Impediment Log (Sprints 42-47)", path: "sample-files/impediments/impediment-log-sprints-42-47.md" }
        ]
      },
      {
        id: "metrics",
        title: "Team Metrics",
        files: [
          { id: "velocity-history", title: "Velocity History", path: "sample-files/metrics/velocity-history.csv" },
          { id: "burndown", title: "Sprint 47 Burndown", path: "sample-files/metrics/burndown-sprint-47.csv" }
        ]
      },
      {
        id: "team-health",
        title: "Team Health",
        files: [
          { id: "health-survey", title: "Health Survey Results", path: "sample-files/team-health/health-survey-results.csv" }
        ]
      }
    ]
  }
]

// Helper function to get all modules in order
export function getAllModules() {
  return courseStructure.levels.flatMap(level => level.modules)
}

// Helper function to get a module by ID
export function getModuleById(id: string) {
  return getAllModules().find(m => m.id === id)
}

// Helper function to get level by module ID
export function getLevelByModuleId(moduleId: string) {
  return courseStructure.levels.find(level =>
    level.modules.some(m => m.id === moduleId)
  )
}

// Helper function to get prev/next module
export function getAdjacentModules(currentId: string) {
  const modules = getAllModules()
  const currentIndex = modules.findIndex(m => m.id === currentId)

  return {
    prev: currentIndex > 0 ? modules[currentIndex - 1] : null,
    next: currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null
  }
}

// Helper function to get resource by path
export function getResourceByPath(path: string) {
  for (const section of resourceStructure) {
    for (const category of section.categories) {
      const file = category.files.find(f => f.path === path)
      if (file) {
        return { section, category, file }
      }
    }
  }
  return null
}
