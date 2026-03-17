import { CourseStructure, ResourceSection } from '../types/course'

export const courseStructure: CourseStructure = {
  course: {
    title: "Microsoft Copilot for AI-Enabled Scrum Masters",
    version: "2.0.0",
    description: "A world-class course transforming Scrum Masters into AI-native practitioners who leverage Microsoft Copilot for predictive intelligence, organizational impact, and continuous improvement",
    targetAudience: "Experienced Scrum Masters and Agile Coaches",
    prerequisites: [
      "Microsoft 365 Copilot Enterprise license",
      "OneDrive access",
      "Basic familiarity with M365 apps",
      "Scrum fundamentals knowledge",
      "2+ years Scrum Master experience recommended"
    ],
    estimatedDuration: "~13 hours",
    lastUpdated: "2026-03-17"
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
      description: "Complex Scrum Master tasks with Copilot — facilitation, impediments, coaching, responsible AI, prompt engineering, and conflict resolution",
      modules: [
        {
          id: "2.1",
          title: "Facilitating Ceremonies with Copilot",
          duration: "40 min",
          path: "lesson-modules/2-advanced-sm-work/2.1-facilitating-ceremonies/MODULE.md",
          objectives: [
            "Use Copilot as thinking partner for ceremony facilitation",
            "Generate agendas and facilitation guides",
            "Process ceremony outcomes into actionable items",
            "Adapt ceremonies for distributed teams"
          ]
        },
        {
          id: "2.2",
          title: "Impediment Management & Resolution",
          duration: "35 min",
          path: "lesson-modules/2-advanced-sm-work/2.2-impediment-management/MODULE.md",
          objectives: [
            "Track and categorize impediments systematically",
            "Analyze impediment patterns over time",
            "Draft escalation communications",
            "Detect impediments predictively from team signals"
          ]
        },
        {
          id: "2.3",
          title: "Team Health & Continuous Improvement",
          duration: "35 min",
          path: "lesson-modules/2-advanced-sm-work/2.3-team-health/MODULE.md",
          objectives: [
            "Analyze team health survey results",
            "Prepare for coaching conversations",
            "Track improvement over time",
            "Predict burnout from leading indicators"
          ]
        },
        {
          id: "2.4",
          title: "Responsible AI & Data Governance",
          duration: "30 min",
          path: "lesson-modules/2-advanced-sm-work/2.4-responsible-ai/MODULE.md",
          objectives: [
            "Classify team data as safe/caution/never-share for Copilot",
            "Recognize AI bias in team assessments",
            "Apply responsible AI framework to SM workflows",
            "Lead responsible AI conversations with your team"
          ]
        },
        {
          id: "2.5",
          title: "Advanced Prompt Engineering for SMs",
          duration: "30 min",
          path: "lesson-modules/2-advanced-sm-work/2.5-advanced-prompts/MODULE.md",
          objectives: [
            "Apply chain-of-thought prompting to complex SM analysis",
            "Build reusable prompt chains across ceremonies",
            "Craft meta-prompts that generate other prompts",
            "Debug prompts when Copilot gives generic responses"
          ]
        },
        {
          id: "2.6",
          title: "Conflict Resolution & Difficult Conversations",
          duration: "35 min",
          path: "lesson-modules/2-advanced-sm-work/2.6-conflict-resolution/MODULE.md",
          objectives: [
            "Prepare for difficult conversations with psychological depth",
            "Practice conflict scenarios using persona roleplay",
            "Identify root psychological dynamics in team conflicts",
            "Document resolution outcomes and track recovery"
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
    },
    {
      id: "4",
      title: "Data-Driven Scrum Mastery",
      description: "Sprint analytics, predictive intelligence, and measuring SM impact with data",
      modules: [
        {
          id: "4.1",
          title: "Sprint Analytics & KPI Dashboards",
          duration: "35 min",
          path: "lesson-modules/4-data-driven/4.1-sprint-analytics/MODULE.md",
          objectives: [
            "Define and track the 10 metrics that matter for SMs",
            "Build live dashboards in Copilot + Excel",
            "Distinguish vanity metrics from actionable metrics",
            "Apply statistical process control to sprint metrics"
          ]
        },
        {
          id: "4.2",
          title: "Predictive Intelligence & Early Warning Systems",
          duration: "35 min",
          path: "lesson-modules/4-data-driven/4.2-predictive-intelligence/MODULE.md",
          objectives: [
            "Build early warning systems from existing team data",
            "Identify leading indicators that predict sprint failure",
            "Create automated signal detection prompts",
            "Distinguish correlation from causation in team data"
          ]
        },
        {
          id: "4.3",
          title: "Measuring & Communicating SM Impact",
          duration: "30 min",
          path: "lesson-modules/4-data-driven/4.3-measuring-impact/MODULE.md",
          objectives: [
            "Quantify SM contribution to team and org outcomes",
            "Build a personal impact portfolio with evidence",
            "Communicate SM value to non-agile executives",
            "Design quarterly SM effectiveness reviews"
          ]
        }
      ]
    },
    {
      id: "5",
      title: "Scaling & Organizational Impact",
      description: "Multi-team coordination, role fluency at scale, and organizational change",
      modules: [
        {
          id: "5.1",
          title: "The Many Hats — Role Fluency at Scale",
          duration: "35 min",
          path: "lesson-modules/5-scaling/5.1-many-hats/MODULE.md",
          objectives: [
            "Map 7 SM role modes with different Copilot strategies",
            "Diagnose which hat a situation requires",
            "Navigate team maturity phases with appropriate emphasis",
            "Plan the SM-to-RTE transition pathway"
          ]
        },
        {
          id: "5.2",
          title: "Multi-Team Coordination & Program Support",
          duration: "40 min",
          path: "lesson-modules/5-scaling/5.2-multi-team/MODULE.md",
          objectives: [
            "Facilitate SoS and cross-team synchronization",
            "Manage cross-team dependencies with Copilot",
            "Handle inter-team resource conflicts",
            "Create program-level transparency without overhead"
          ]
        },
        {
          id: "5.3",
          title: "Organizational Change & Executive Influence",
          duration: "35 min",
          path: "lesson-modules/5-scaling/5.3-organizational-change/MODULE.md",
          objectives: [
            "Translate team insights into organizational proposals",
            "Build executive-ready business cases",
            "Navigate organizational politics without authority",
            "Measure and communicate organizational agility"
          ]
        }
      ]
    },
    {
      id: "6",
      title: "AI-Native SM Mastery",
      description: "AI agents, coaching simulation, and building your AI-augmented practice",
      modules: [
        {
          id: "6.1",
          title: "AI Agents & Workflow Automation",
          duration: "35 min",
          path: "lesson-modules/6-ai-native/6.1-agents-automation/MODULE.md",
          objectives: [
            "Design Copilot agent workflows for repetitive SM tasks",
            "Build multi-step agent chains for ceremonies",
            "Automate the weekly SM rhythm",
            "Know when automation helps vs. harms"
          ]
        },
        {
          id: "6.2",
          title: "AI as Coaching Partner & Practice Simulator",
          duration: "35 min",
          path: "lesson-modules/6-ai-native/6.2-coaching-simulator/MODULE.md",
          objectives: [
            "Use Copilot as deliberate practice partner for SM skills",
            "Run difficulty-escalating simulation scenarios",
            "Get AI feedback on facilitation and coaching approaches",
            "Develop reflective practice using AI-assisted journaling"
          ]
        },
        {
          id: "6.3",
          title: "Building Your AI-Augmented SM Practice",
          duration: "30 min",
          path: "lesson-modules/6-ai-native/6.3-building-practice/MODULE.md",
          objectives: [
            "Design your personal AI-augmented SM operating system",
            "Create a 90-day adoption plan for AI integration",
            "Build accountability structures for continuous improvement",
            "Contribute to the SM community's AI knowledge base"
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
      },
      {
        id: "horizon-program",
        title: "Horizon Program",
        files: [
          { id: "horizon-overview", title: "Program Overview", path: "team-context/HORIZON-PROGRAM.md" },
          { id: "catalyst-crew", title: "Catalyst Crew", path: "team-context/CATALYST-CREW.md" },
          { id: "nexus-team", title: "Nexus Team", path: "team-context/NEXUS-TEAM.md" },
          { id: "insight-engine", title: "Insight Engine", path: "team-context/INSIGHT-ENGINE.md" },
          { id: "program-personas", title: "Program Personas", path: "team-context/PROGRAM-PERSONAS.md" }
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
          { id: "agile-coach", title: "Agile Coach Persona", path: "prompt-library/personas/agile-coach.md" },
          { id: "mediator", title: "Mediator Persona", path: "prompt-library/personas/mediator.md" },
          { id: "coaching-gym", title: "Coaching Gym Partner", path: "prompt-library/personas/coaching-gym-partner.md" }
        ]
      },
      {
        id: "templates",
        title: "Templates",
        files: [
          { id: "ceremony-standup", title: "Standup Processing", path: "prompt-library/templates/ceremony-standup.md" },
          { id: "ceremony-retro", title: "Retrospective Synthesis", path: "prompt-library/templates/ceremony-retro.md" },
          { id: "impediment-analysis", title: "Impediment Analysis", path: "prompt-library/templates/impediment-analysis.md" },
          { id: "coaching-conversation", title: "Coaching Conversation", path: "prompt-library/templates/coaching-conversation.md" },
          { id: "meta-prompt-ceremony", title: "Meta-Prompt: Ceremony Generator", path: "prompt-library/templates/meta-prompt-ceremony.md" },
          { id: "prompt-debugger", title: "Prompt Debugger", path: "prompt-library/templates/prompt-debugger.md" },
          { id: "difficult-conversation", title: "Difficult Conversation Prep", path: "prompt-library/templates/difficult-conversation-prep.md" },
          { id: "sprint-report", title: "One-Prompt Sprint Report", path: "prompt-library/templates/one-prompt-sprint-report.md" },
          { id: "ceremony-chain", title: "Ceremony Automation Chain", path: "prompt-library/templates/ceremony-automation-chain.md" },
          { id: "facilitation-replay", title: "Facilitation Replay", path: "prompt-library/templates/facilitation-replay.md" },
          { id: "reflective-journal", title: "Reflective Journal", path: "prompt-library/templates/reflective-journal.md" }
        ]
      },
      {
        id: "cheat-sheets",
        title: "Cheat Sheets",
        files: [
          { id: "daily-toolkit", title: "SM Daily Toolkit", path: "prompt-library/cheat-sheets/daily-toolkit.md" },
          { id: "level-2-cheatsheet", title: "Level 2: Advanced Workflows", path: "prompt-library/cheat-sheets/level-2-advanced-workflows.md" },
          { id: "level-4-cheatsheet", title: "Level 4: Data-Driven", path: "prompt-library/cheat-sheets/level-4-data-driven.md" },
          { id: "level-5-cheatsheet", title: "Level 5: Scaling", path: "prompt-library/cheat-sheets/level-5-scaling.md" },
          { id: "level-6-cheatsheet", title: "Level 6: AI-Native", path: "prompt-library/cheat-sheets/level-6-ai-native.md" }
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
          { id: "sprint-retro", title: "Sprint 46 Retrospective", path: "sample-files/ceremony-notes/sprint-46-retro-raw.md" },
          { id: "distributed-standup", title: "Distributed Standup (Nexus)", path: "sample-files/ceremony-notes/distributed-standup-nexus.md" }
        ]
      },
      {
        id: "impediments",
        title: "Impediment Tracking",
        files: [
          { id: "impediment-log", title: "Impediment Log (Sprints 42-47)", path: "sample-files/impediments/impediment-log-sprints-42-47.md" },
          { id: "cross-team-deps", title: "Cross-Team Dependency Log", path: "sample-files/impediments/cross-team-dependency-log.md" }
        ]
      },
      {
        id: "metrics",
        title: "Team Metrics",
        files: [
          { id: "velocity-history", title: "Velocity History", path: "sample-files/metrics/velocity-history.csv" },
          { id: "burndown", title: "Sprint 47 Burndown", path: "sample-files/metrics/burndown-sprint-47.csv" },
          { id: "quarterly-metrics", title: "Quarterly Metrics (Sprints 40-47)", path: "sample-files/metrics/quarterly-metrics-sprints-40-47.csv" },
          { id: "metric-definitions", title: "Metric Definitions", path: "sample-files/metrics/metric-definitions.md" }
        ]
      },
      {
        id: "team-health",
        title: "Team Health",
        files: [
          { id: "health-survey", title: "Health Survey Results", path: "sample-files/team-health/health-survey-results.csv" },
          { id: "health-quarterly", title: "Quarterly Health Trends", path: "sample-files/team-health/health-survey-quarterly-trend.csv" }
        ]
      },
      {
        id: "responsible-ai",
        title: "Responsible AI",
        files: [
          { id: "data-classification", title: "Data Classification Template", path: "sample-files/responsible-ai/data-classification-template.md" },
          { id: "ai-agreement", title: "Team AI Agreement Template", path: "sample-files/responsible-ai/team-ai-agreement-template.md" }
        ]
      },
      {
        id: "prompt-engineering",
        title: "Prompt Engineering",
        files: [
          { id: "bad-prompts", title: "Bad Prompts Clinic", path: "sample-files/prompt-engineering/bad-prompts-clinic.md" },
          { id: "chain-of-thought", title: "Chain-of-Thought Template", path: "sample-files/prompt-engineering/chain-of-thought-template.md" }
        ]
      },
      {
        id: "conflict-scenarios",
        title: "Conflict Scenarios",
        files: [
          { id: "lisa-raj", title: "Lisa vs. Raj: Story Quality", path: "sample-files/conflict-scenarios/lisa-raj-story-quality.md" },
          { id: "james-lisa", title: "James vs. Lisa: Definition of Done", path: "sample-files/conflict-scenarios/james-lisa-definition-of-done.md" },
          { id: "conflict-patterns", title: "Team Conflict Patterns", path: "sample-files/conflict-scenarios/team-conflict-patterns.md" }
        ]
      },
      {
        id: "early-warning",
        title: "Early Warning",
        files: [
          { id: "sprint-44-signals", title: "Sprint 44 Daily Signals", path: "sample-files/early-warning/sprint-44-daily-signals.md" },
          { id: "intervention-playbook", title: "Intervention Playbook Template", path: "sample-files/early-warning/intervention-playbook-template.md" },
          { id: "mid-sprint-check", title: "Mid-Sprint Health Check", path: "sample-files/early-warning/mid-sprint-health-check.md" }
        ]
      },
      {
        id: "sm-impact",
        title: "SM Impact",
        files: [
          { id: "impact-portfolio", title: "Impact Portfolio Template", path: "sample-files/sm-impact/impact-portfolio-template.md" },
          { id: "roi-calculator", title: "ROI Calculator Template", path: "sample-files/sm-impact/roi-calculator-template.md" },
          { id: "executive-update", title: "Executive Update Template", path: "sample-files/sm-impact/executive-update-template.md" }
        ]
      },
      {
        id: "scaling",
        title: "Scaling & Program",
        files: [
          { id: "role-mode-inventory", title: "Role Mode Inventory", path: "sample-files/scaling/role-mode-inventory-template.md" },
          { id: "sm-rte-transition", title: "SM-to-RTE Transition Plan", path: "sample-files/scaling/sm-to-rte-transition-plan.md" },
          { id: "org-impediment-campaign", title: "Org Impediment Campaign", path: "sample-files/scaling/organizational-impediment-campaign.md" },
          { id: "horizon-status", title: "Horizon Program Status", path: "sample-files/scaling/horizon-program-status.md" },
          { id: "cross-team-deps-map", title: "Cross-Team Dependency Map", path: "sample-files/scaling/cross-team-dependency-map.md" },
          { id: "program-report", title: "Program Sprint Report Template", path: "sample-files/scaling/program-sprint-report-template.md" },
          { id: "release-planning", title: "Release Planning Scenario", path: "sample-files/scaling/release-planning-scenario.md" },
          { id: "org-impediment-log", title: "Organizational Impediment Log", path: "sample-files/scaling/organizational-impediment-log.md" },
          { id: "business-case", title: "Business Case Template", path: "sample-files/scaling/business-case-template.md" },
          { id: "influence-map", title: "Influence Map Template", path: "sample-files/scaling/influence-map-template.md" },
          { id: "executive-pitch", title: "Executive Pitch Template", path: "sample-files/scaling/executive-pitch-template.md" }
        ]
      },
      {
        id: "automation",
        title: "Automation & Agents",
        files: [
          { id: "time-sink-audit", title: "Time-Sink Audit Template", path: "sample-files/automation/time-sink-audit-template.md" },
          { id: "ceremony-chain", title: "Ceremony Chain Template", path: "sample-files/automation/ceremony-chain-template.md" },
          { id: "agent-design-spec", title: "Agent Design Spec", path: "sample-files/automation/agent-design-spec-template.md" }
        ]
      },
      {
        id: "coaching-practice",
        title: "Coaching Practice",
        files: [
          { id: "difficulty-ladder", title: "Difficulty Ladder Scenarios", path: "sample-files/coaching-practice/difficulty-ladder-scenarios.md" },
          { id: "multi-party-sim", title: "Multi-Party Simulation Setup", path: "sample-files/coaching-practice/multi-party-simulation-setup.md" },
          { id: "reflective-journal", title: "Reflective Journal Template", path: "sample-files/coaching-practice/reflective-journal-template.md" }
        ]
      },
      {
        id: "practice-design",
        title: "Practice Design",
        files: [
          { id: "ai-sm-os", title: "AI-SM Operating System", path: "sample-files/practice-design/ai-sm-operating-system-template.md" },
          { id: "90-day-plan", title: "90-Day Adoption Plan", path: "sample-files/practice-design/90-day-adoption-plan.md" },
          { id: "competency-model", title: "AI-SM Competency Model", path: "sample-files/practice-design/competency-model.md" },
          { id: "feature-eval", title: "New Feature Evaluation", path: "sample-files/practice-design/new-feature-evaluation-template.md" }
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
