#!/usr/bin/env node
/**
 * Static Site Generator for Copilot SM Course
 * Generates standalone HTML pages from markdown that work with file:// protocol
 * Features: copy-to-clipboard, TOC sidebar, reading progress, dark mode,
 * progress tracking, level colors, exercise cards, callouts, keyboard nav
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const PROJECT_ROOT = __dirname;
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'final-version-static-site');

// ─── Course Structure ───────────────────────────────────────────────────────

const levels = [
  {
    id: '1', title: 'Foundation', description: 'Core Copilot skills for Scrum Masters',
    modules: [
      { id: '1.1', title: 'Welcome to Microsoft Copilot', duration: '15 min', path: 'lesson-modules/1-fundamentals/1.1-welcome/MODULE.md', objectives: ['Understand what Microsoft Copilot is', 'Access Copilot via browser and shortcuts', 'Meet the Velocity Squad at Accenture'] },
      { id: '1.2', title: 'Setting Up Your Workspace', duration: '15 min', path: 'lesson-modules/1-fundamentals/1.2-workspace-setup/MODULE.md', objectives: ['Set up optimal workspace for SM workflows', 'Upload sprint artifacts to Copilot', 'Use ContextIQ and OneDrive'] },
      { id: '1.3', title: 'Your First Scrum Master Tasks', duration: '30 min', path: 'lesson-modules/1-fundamentals/1.3-first-tasks/MODULE.md', objectives: ['Process standup notes into actionable summaries', 'Synthesize retrospective feedback', 'Transform sprint updates for different audiences'] },
      { id: '1.4', title: 'Researcher & Analyst Agents', duration: '25 min', path: 'lesson-modules/1-fundamentals/1.4-researcher-analyst-agents/MODULE.md', objectives: ['Use Researcher for agile best practices', 'Use Analyst for velocity and metrics analysis', 'Combine agents for SM workflows'] },
      { id: '1.5', title: 'Persona Prompting', duration: '20 min', path: 'lesson-modules/1-fundamentals/1.5-persona-prompting/MODULE.md', objectives: ['Create persona prompts (developer, PO, stakeholder)', 'Get multi-perspective feedback on process changes', 'Build a prompt library for coaching'] },
      { id: '1.6', title: 'Building Context with Memory', duration: '15 min', path: 'lesson-modules/1-fundamentals/1.6-copilot-memory/MODULE.md', objectives: ['Use Copilot Memory for team context', 'Create context documents for the Velocity Squad', 'Manage persistent team knowledge'] },
      { id: '1.7', title: 'Copilot Across M365 Apps', duration: '15 min', path: 'lesson-modules/1-fundamentals/1.7-m365-navigation/MODULE.md', objectives: ['Use Copilot in Word for sprint documentation', 'Use Copilot in Excel for metrics tracking', 'Use Copilot in PowerPoint for sprint reviews'] },
      { id: '1.8', title: 'Copilot in Microsoft Teams', duration: '25 min', path: 'lesson-modules/1-fundamentals/1.8-teams-integration/MODULE.md', objectives: ['Get meeting summaries from ceremonies', 'Catch up on missed standups', 'Track action items from retrospectives'] },
      { id: '1.9', title: 'Copilot in Outlook', duration: '20 min', path: 'lesson-modules/1-fundamentals/1.9-outlook-integration/MODULE.md', objectives: ['Draft stakeholder updates with appropriate tone', 'Summarize impediment escalation threads', 'Prepare for 1:1s and coaching sessions'] },
      { id: '1.10', title: 'SharePoint & Collaboration', duration: '20 min', path: 'lesson-modules/1-fundamentals/1.10-sharepoint-collaboration/MODULE.md', objectives: ['Find team documentation using natural language', 'Summarize agile playbook sites', 'Track wiki updates and process documentation'] },
    ]
  },
  {
    id: '2', title: 'Advanced SM Workflows', description: 'Complex Scrum Master tasks with Copilot',
    modules: [
      { id: '2.1', title: 'Facilitating Ceremonies with Copilot', duration: '40 min', path: 'lesson-modules/2-advanced-sm-work/2.1-facilitating-ceremonies/MODULE.md', objectives: ['Use Copilot as thinking partner for ceremony facilitation', 'Generate agendas and facilitation guides', 'Process ceremony outcomes into actionable items', 'Adapt ceremonies for distributed teams'] },
      { id: '2.2', title: 'Impediment Management & Resolution', duration: '35 min', path: 'lesson-modules/2-advanced-sm-work/2.2-impediment-management/MODULE.md', objectives: ['Track and categorize impediments systematically', 'Analyze impediment patterns over time', 'Draft escalation communications', 'Detect impediments predictively from team signals'] },
      { id: '2.3', title: 'Team Health & Continuous Improvement', duration: '35 min', path: 'lesson-modules/2-advanced-sm-work/2.3-team-health/MODULE.md', objectives: ['Analyze team health survey results', 'Prepare for coaching conversations', 'Track improvement over time', 'Predict burnout from leading indicators'] },
      { id: '2.4', title: 'Responsible AI & Data Governance', duration: '30 min', path: 'lesson-modules/2-advanced-sm-work/2.4-responsible-ai/MODULE.md', objectives: ['Classify team data as safe/caution/never-share for Copilot', 'Recognize AI bias in team assessments', 'Apply responsible AI framework to SM workflows', 'Lead responsible AI conversations with your team'] },
      { id: '2.5', title: 'Advanced Prompt Engineering for SMs', duration: '30 min', path: 'lesson-modules/2-advanced-sm-work/2.5-advanced-prompts/MODULE.md', objectives: ['Apply chain-of-thought prompting to complex SM analysis', 'Build reusable prompt chains across ceremonies', 'Craft meta-prompts that generate other prompts', 'Debug prompts when Copilot gives generic responses'] },
      { id: '2.6', title: 'Conflict Resolution & Difficult Conversations', duration: '35 min', path: 'lesson-modules/2-advanced-sm-work/2.6-conflict-resolution/MODULE.md', objectives: ['Prepare for difficult conversations with psychological depth', 'Practice conflict scenarios using persona roleplay', 'Identify root psychological dynamics in team conflicts', 'Document resolution outcomes and track recovery'] },
    ]
  },
  {
    id: '3', title: 'Team Visuals', description: 'Creating visuals with DALL-E and Designer',
    modules: [
      { id: '3.1', title: 'Image Generation Basics', duration: '20 min', path: 'lesson-modules/3-team-visuals/3.1-image-basics/MODULE.md', objectives: ['Generate images with DALL-E 3', 'Write effective image prompts', 'Iterate and refine outputs'] },
      { id: '3.2', title: 'Scrum Master Visuals', duration: '25 min', path: 'lesson-modules/3-team-visuals/3.2-sm-visuals/MODULE.md', objectives: ['Create sprint review visuals', 'Generate retrospective facilitation aids', 'Build team celebration graphics'] },
    ]
  },
  {
    id: '4', title: 'Data-Driven Scrum Mastery', description: 'Sprint analytics, predictive intelligence, and measuring SM impact',
    modules: [
      { id: '4.1', title: 'Sprint Analytics & KPI Dashboards', duration: '35 min', path: 'lesson-modules/4-data-driven/4.1-sprint-analytics/MODULE.md', objectives: ['Define and track the 10 metrics that matter for SMs', 'Build live dashboards in Copilot + Excel', 'Distinguish vanity metrics from actionable metrics', 'Apply statistical process control to sprint metrics'] },
      { id: '4.2', title: 'Predictive Intelligence & Early Warning Systems', duration: '35 min', path: 'lesson-modules/4-data-driven/4.2-predictive-intelligence/MODULE.md', objectives: ['Build early warning systems from existing team data', 'Identify leading indicators that predict sprint failure', 'Create automated signal detection prompts', 'Distinguish correlation from causation in team data'] },
      { id: '4.3', title: 'Measuring & Communicating SM Impact', duration: '30 min', path: 'lesson-modules/4-data-driven/4.3-measuring-impact/MODULE.md', objectives: ['Quantify SM contribution to team and org outcomes', 'Build a personal impact portfolio with evidence', 'Communicate SM value to non-agile executives', 'Design quarterly SM effectiveness reviews'] },
    ]
  },
  {
    id: '5', title: 'Scaling & Organizational Impact', description: 'Multi-team coordination, role fluency at scale, and organizational change',
    modules: [
      { id: '5.1', title: 'The Many Hats \u2014 Role Fluency at Scale', duration: '35 min', path: 'lesson-modules/5-scaling/5.1-many-hats/MODULE.md', objectives: ['Map 7 SM role modes with different Copilot strategies', 'Diagnose which hat a situation requires', 'Navigate team maturity phases with appropriate emphasis', 'Plan the SM-to-RTE transition pathway'] },
      { id: '5.2', title: 'Multi-Team Coordination & Program Support', duration: '40 min', path: 'lesson-modules/5-scaling/5.2-multi-team/MODULE.md', objectives: ['Facilitate SoS and cross-team synchronization', 'Manage cross-team dependencies with Copilot', 'Handle inter-team resource conflicts', 'Create program-level transparency without overhead'] },
      { id: '5.3', title: 'Organizational Change & Executive Influence', duration: '35 min', path: 'lesson-modules/5-scaling/5.3-organizational-change/MODULE.md', objectives: ['Translate team insights into organizational proposals', 'Build executive-ready business cases', 'Navigate organizational politics without authority', 'Measure and communicate organizational agility'] },
    ]
  },
  {
    id: '6', title: 'AI-Native SM Mastery', description: 'AI agents, coaching simulation, and building your AI-augmented practice',
    modules: [
      { id: '6.1', title: 'AI Agents & Workflow Automation', duration: '35 min', path: 'lesson-modules/6-ai-native/6.1-agents-automation/MODULE.md', objectives: ['Design Copilot agent workflows for repetitive SM tasks', 'Build multi-step agent chains for ceremonies', 'Automate the weekly SM rhythm', 'Know when automation helps vs. harms'] },
      { id: '6.2', title: 'AI as Coaching Partner & Practice Simulator', duration: '35 min', path: 'lesson-modules/6-ai-native/6.2-coaching-simulator/MODULE.md', objectives: ['Use Copilot as deliberate practice partner for SM skills', 'Run difficulty-escalating simulation scenarios', 'Get AI feedback on facilitation and coaching approaches', 'Develop reflective practice using AI-assisted journaling'] },
      { id: '6.3', title: 'Building Your AI-Augmented SM Practice', duration: '30 min', path: 'lesson-modules/6-ai-native/6.3-building-practice/MODULE.md', objectives: ['Design your personal AI-augmented SM operating system', 'Create a 90-day adoption plan for AI integration', 'Build accountability structures for continuous improvement', 'Contribute to the SM community\'s AI knowledge base'] },
    ]
  }
];

// ─── Resources (flattened from courseStructure.ts) ──────────────────────────

const resources = [
  {
    id: 'team-context', title: 'Team Context',
    categories: [
      {
        id: 'velocity-squad', title: 'Velocity Squad',
        files: [
          { id: 'team', title: 'Team Overview', path: 'team-context/TEAM.md' },
          { id: 'personas', title: 'Team Members', path: 'team-context/PERSONAS.md' },
          { id: 'challenges', title: 'Team Challenges', path: 'team-context/CHALLENGES.md' },
          { id: 'working-agreements', title: 'Working Agreements', path: 'team-context/WORKING-AGREEMENTS.md' },
        ]
      },
      {
        id: 'horizon-program', title: 'Horizon Program',
        files: [
          { id: 'horizon-overview', title: 'Program Overview', path: 'team-context/HORIZON-PROGRAM.md' },
          { id: 'catalyst-crew', title: 'Catalyst Crew', path: 'team-context/CATALYST-CREW.md' },
          { id: 'nexus-team', title: 'Nexus Team', path: 'team-context/NEXUS-TEAM.md' },
          { id: 'insight-engine', title: 'Insight Engine', path: 'team-context/INSIGHT-ENGINE.md' },
          { id: 'program-personas', title: 'Program Personas', path: 'team-context/PROGRAM-PERSONAS.md' },
        ]
      }
    ]
  },
  {
    id: 'prompt-library', title: 'Prompt Library',
    categories: [
      {
        id: 'personas', title: 'Persona Prompts',
        files: [
          { id: 'developer', title: 'Developer Persona', path: 'prompt-library/personas/developer.md' },
          { id: 'product-owner', title: 'Product Owner Persona', path: 'prompt-library/personas/product-owner.md' },
          { id: 'stakeholder', title: 'Stakeholder Persona', path: 'prompt-library/personas/stakeholder.md' },
          { id: 'agile-coach', title: 'Agile Coach Persona', path: 'prompt-library/personas/agile-coach.md' },
          { id: 'mediator', title: 'Mediator Persona', path: 'prompt-library/personas/mediator.md' },
          { id: 'coaching-gym', title: 'Coaching Gym Partner', path: 'prompt-library/personas/coaching-gym-partner.md' },
        ]
      },
      {
        id: 'templates', title: 'Templates',
        files: [
          { id: 'ceremony-standup', title: 'Standup Processing', path: 'prompt-library/templates/ceremony-standup.md' },
          { id: 'ceremony-retro', title: 'Retrospective Synthesis', path: 'prompt-library/templates/ceremony-retro.md' },
          { id: 'impediment-analysis', title: 'Impediment Analysis', path: 'prompt-library/templates/impediment-analysis.md' },
          { id: 'coaching-conversation', title: 'Coaching Conversation', path: 'prompt-library/templates/coaching-conversation.md' },
          { id: 'meta-prompt-ceremony', title: 'Meta-Prompt: Ceremony Generator', path: 'prompt-library/templates/meta-prompt-ceremony.md' },
          { id: 'prompt-debugger', title: 'Prompt Debugger', path: 'prompt-library/templates/prompt-debugger.md' },
          { id: 'difficult-conversation', title: 'Difficult Conversation Prep', path: 'prompt-library/templates/difficult-conversation-prep.md' },
          { id: 'sprint-report', title: 'One-Prompt Sprint Report', path: 'prompt-library/templates/one-prompt-sprint-report.md' },
          { id: 'ceremony-chain', title: 'Ceremony Automation Chain', path: 'prompt-library/templates/ceremony-automation-chain.md' },
          { id: 'facilitation-replay', title: 'Facilitation Replay', path: 'prompt-library/templates/facilitation-replay.md' },
          { id: 'reflective-journal', title: 'Reflective Journal', path: 'prompt-library/templates/reflective-journal.md' },
        ]
      },
      {
        id: 'cheat-sheets', title: 'Cheat Sheets',
        files: [
          { id: 'daily-toolkit', title: 'SM Daily Toolkit', path: 'prompt-library/cheat-sheets/daily-toolkit.md' },
          { id: 'level-2-cheatsheet', title: 'Level 2: Advanced Workflows', path: 'prompt-library/cheat-sheets/level-2-advanced-workflows.md' },
          { id: 'level-4-cheatsheet', title: 'Level 4: Data-Driven', path: 'prompt-library/cheat-sheets/level-4-data-driven.md' },
          { id: 'level-5-cheatsheet', title: 'Level 5: Scaling', path: 'prompt-library/cheat-sheets/level-5-scaling.md' },
          { id: 'level-6-cheatsheet', title: 'Level 6: AI-Native', path: 'prompt-library/cheat-sheets/level-6-ai-native.md' },
        ]
      }
    ]
  },
  {
    id: 'sample-files', title: 'Sample Files',
    categories: [
      {
        id: 'ceremony-notes', title: 'Ceremony Notes',
        files: [
          { id: 'sprint-planning', title: 'Sprint Planning Notes', path: 'sample-files/ceremony-notes/sprint-planning-raw.md' },
          { id: 'daily-standups', title: 'Daily Standups Week 47', path: 'sample-files/ceremony-notes/daily-standups-week47.md' },
          { id: 'sprint-review', title: 'Sprint Review Notes', path: 'sample-files/ceremony-notes/sprint-review-raw.md' },
          { id: 'sprint-retro', title: 'Sprint 46 Retrospective', path: 'sample-files/ceremony-notes/sprint-46-retro-raw.md' },
          { id: 'distributed-standup', title: 'Distributed Standup (Nexus)', path: 'sample-files/ceremony-notes/distributed-standup-nexus.md' },
        ]
      },
      {
        id: 'impediments', title: 'Impediment Tracking',
        files: [
          { id: 'impediment-log', title: 'Impediment Log (Sprints 42-47)', path: 'sample-files/impediments/impediment-log-sprints-42-47.md' },
          { id: 'cross-team-deps', title: 'Cross-Team Dependency Log', path: 'sample-files/impediments/cross-team-dependency-log.md' },
        ]
      },
      {
        id: 'metrics', title: 'Team Metrics',
        files: [
          { id: 'velocity-history', title: 'Velocity History', path: 'sample-files/metrics/velocity-history.csv' },
          { id: 'burndown', title: 'Sprint 47 Burndown', path: 'sample-files/metrics/burndown-sprint-47.csv' },
          { id: 'quarterly-metrics', title: 'Quarterly Metrics (Sprints 40-47)', path: 'sample-files/metrics/quarterly-metrics-sprints-40-47.csv' },
          { id: 'metric-definitions', title: 'Metric Definitions', path: 'sample-files/metrics/metric-definitions.md' },
        ]
      },
      {
        id: 'team-health', title: 'Team Health',
        files: [
          { id: 'health-survey', title: 'Health Survey Results', path: 'sample-files/team-health/health-survey-results.csv' },
          { id: 'health-quarterly', title: 'Quarterly Health Trends', path: 'sample-files/team-health/health-survey-quarterly-trend.csv' },
        ]
      },
      {
        id: 'responsible-ai', title: 'Responsible AI',
        files: [
          { id: 'data-classification', title: 'Data Classification Template', path: 'sample-files/responsible-ai/data-classification-template.md' },
          { id: 'ai-agreement', title: 'Team AI Agreement Template', path: 'sample-files/responsible-ai/team-ai-agreement-template.md' },
        ]
      },
      {
        id: 'prompt-engineering', title: 'Prompt Engineering',
        files: [
          { id: 'bad-prompts', title: 'Bad Prompts Clinic', path: 'sample-files/prompt-engineering/bad-prompts-clinic.md' },
          { id: 'chain-of-thought', title: 'Chain-of-Thought Template', path: 'sample-files/prompt-engineering/chain-of-thought-template.md' },
        ]
      },
      {
        id: 'conflict-scenarios', title: 'Conflict Scenarios',
        files: [
          { id: 'lisa-raj', title: 'Lisa vs. Raj: Story Quality', path: 'sample-files/conflict-scenarios/lisa-raj-story-quality.md' },
          { id: 'james-lisa', title: 'James vs. Lisa: Definition of Done', path: 'sample-files/conflict-scenarios/james-lisa-definition-of-done.md' },
          { id: 'conflict-patterns', title: 'Team Conflict Patterns', path: 'sample-files/conflict-scenarios/team-conflict-patterns.md' },
        ]
      },
      {
        id: 'early-warning', title: 'Early Warning',
        files: [
          { id: 'sprint-44-signals', title: 'Sprint 44 Daily Signals', path: 'sample-files/early-warning/sprint-44-daily-signals.md' },
          { id: 'intervention-playbook', title: 'Intervention Playbook Template', path: 'sample-files/early-warning/intervention-playbook-template.md' },
          { id: 'mid-sprint-check', title: 'Mid-Sprint Health Check', path: 'sample-files/early-warning/mid-sprint-health-check.md' },
        ]
      },
      {
        id: 'sm-impact', title: 'SM Impact',
        files: [
          { id: 'impact-portfolio', title: 'Impact Portfolio Template', path: 'sample-files/sm-impact/impact-portfolio-template.md' },
          { id: 'roi-calculator', title: 'ROI Calculator Template', path: 'sample-files/sm-impact/roi-calculator-template.md' },
          { id: 'executive-update', title: 'Executive Update Template', path: 'sample-files/sm-impact/executive-update-template.md' },
        ]
      },
      {
        id: 'scaling', title: 'Scaling & Program',
        files: [
          { id: 'role-mode-inventory', title: 'Role Mode Inventory', path: 'sample-files/scaling/role-mode-inventory-template.md' },
          { id: 'sm-rte-transition', title: 'SM-to-RTE Transition Plan', path: 'sample-files/scaling/sm-to-rte-transition-plan.md' },
          { id: 'org-impediment-campaign', title: 'Org Impediment Campaign', path: 'sample-files/scaling/organizational-impediment-campaign.md' },
          { id: 'horizon-status', title: 'Horizon Program Status', path: 'sample-files/scaling/horizon-program-status.md' },
          { id: 'cross-team-deps-map', title: 'Cross-Team Dependency Map', path: 'sample-files/scaling/cross-team-dependency-map.md' },
          { id: 'program-report', title: 'Program Sprint Report Template', path: 'sample-files/scaling/program-sprint-report-template.md' },
          { id: 'release-planning', title: 'Release Planning Scenario', path: 'sample-files/scaling/release-planning-scenario.md' },
          { id: 'org-impediment-log', title: 'Organizational Impediment Log', path: 'sample-files/scaling/organizational-impediment-log.md' },
          { id: 'business-case', title: 'Business Case Template', path: 'sample-files/scaling/business-case-template.md' },
          { id: 'influence-map', title: 'Influence Map Template', path: 'sample-files/scaling/influence-map-template.md' },
          { id: 'executive-pitch', title: 'Executive Pitch Template', path: 'sample-files/scaling/executive-pitch-template.md' },
        ]
      },
      {
        id: 'automation', title: 'Automation & Agents',
        files: [
          { id: 'time-sink-audit', title: 'Time-Sink Audit Template', path: 'sample-files/automation/time-sink-audit-template.md' },
          { id: 'ceremony-chain-sample', title: 'Ceremony Chain Template', path: 'sample-files/automation/ceremony-chain-template.md' },
          { id: 'agent-design-spec', title: 'Agent Design Spec', path: 'sample-files/automation/agent-design-spec-template.md' },
        ]
      },
      {
        id: 'coaching-practice', title: 'Coaching Practice',
        files: [
          { id: 'difficulty-ladder', title: 'Difficulty Ladder Scenarios', path: 'sample-files/coaching-practice/difficulty-ladder-scenarios.md' },
          { id: 'multi-party-sim', title: 'Multi-Party Simulation Setup', path: 'sample-files/coaching-practice/multi-party-simulation-setup.md' },
          { id: 'reflective-journal-sample', title: 'Reflective Journal Template', path: 'sample-files/coaching-practice/reflective-journal-template.md' },
        ]
      },
      {
        id: 'practice-design', title: 'Practice Design',
        files: [
          { id: 'ai-sm-os', title: 'AI-SM Operating System', path: 'sample-files/practice-design/ai-sm-operating-system-template.md' },
          { id: '90-day-plan', title: '90-Day Adoption Plan', path: 'sample-files/practice-design/90-day-adoption-plan.md' },
          { id: 'competency-model', title: 'AI-SM Competency Model', path: 'sample-files/practice-design/competency-model.md' },
          { id: 'feature-eval', title: 'New Feature Evaluation', path: 'sample-files/practice-design/new-feature-evaluation-template.md' },
        ]
      }
    ]
  }
];

// ─── Derived data ───────────────────────────────────────────────────────────

const allModules = levels.flatMap(l => l.modules);
const allResourceFiles = resources.flatMap(s => s.categories.flatMap(c => c.files));

// Build a path→filename map for smart file reference linking
const resourcePathMap = {};
allResourceFiles.forEach(f => {
  resourcePathMap[f.path] = `resource-${f.id}.html`;
});

// ─── Level Color System ─────────────────────────────────────────────────────

const levelColors = {
  '1': { accent: '#487265', light: '#DDEFEF', dark: '#3a5f54', name: 'Teal' },
  '2': { accent: '#3B5998', light: '#D6E4F7', dark: '#2d4573', name: 'Deep Blue' },
  '3': { accent: '#BC976A', light: '#F5E8D6', dark: '#9a7a53', name: 'Warm Copper' },
  '4': { accent: '#2D6A4F', light: '#D4EDDA', dark: '#1e4d38', name: 'Forest Green' },
  '5': { accent: '#6B4C9A', light: '#E4D9F2', dark: '#553c7a', name: 'Royal Purple' },
  '6': { accent: '#0891B2', light: '#CCFBF1', dark: '#066d8a', name: 'Electric Teal' },
};

// ─── CSS ────────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

:root {
  --white: #ffffff;
  --cream: #F7F6F5;
  --cream-dark: #F3F1EF;
  --cream-darker: #EEEDEA;
  --warm-gray: #D9D9D9;
  --warm-gray-dark: #898584;
  --border: #D9D9D9;
  --text-primary: #292C33;
  --text-secondary: #6B7280;
  --text-muted: #6A6A6A;
  --teal: #487265;
  --teal-light: #DDEFEF;
  --teal-border: #568788;
  --teal-dark: #407967;
  --sage: #A0C3C4;
  --olive: #AAB788;
  --gold: #D4C68B;
  --copper: #BC976A;
  --bronze: #CAAB84;
  --header-h: 55px;
  --level-accent: #487265;
  --level-accent-light: #DDEFEF;
  --level-accent-dark: #3a5f54;
  --bg-primary: #ffffff;
  --bg-secondary: #F7F6F5;
  --bg-code: #1a1a2e;
  --text-code: #4ade80;
  --border-color: #D9D9D9;
}

[data-theme="dark"] {
  --white: #1a1a2e;
  --cream: #232340;
  --cream-dark: #2a2a4a;
  --cream-darker: #1e1e36;
  --warm-gray: #3a3a5a;
  --warm-gray-dark: #9090a8;
  --border: #3a3a5a;
  --text-primary: #e8e8f0;
  --text-secondary: #b0b0c8;
  --text-muted: #8888a0;
  --teal-light: #1a3030;
  --bg-primary: #1a1a2e;
  --bg-secondary: #232340;
  --bg-code: #0f0f1e;
  --text-code: #4ade80;
  --border-color: #3a3a5a;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-primary);
  background: var(--white);
}

h1, h2, h3 { font-family: 'Playfair Display', serif; font-weight: 500; letter-spacing: -0.02em; }

/* ─── Reading Progress Bar ─── */
.reading-progress {
  position: fixed; top: 0; left: 0; height: 3px; z-index: 200;
  background: var(--level-accent);
  transition: width 0.1s linear;
  width: 0%;
}

/* ─── Header ─── */
.site-header {
  position: sticky; top: 3px; z-index: 100;
  height: var(--header-h); background: var(--white);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 1px solid var(--border);
}
.header-inner {
  width: 100%; max-width: 860px; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.header-brand {
  font-family: 'Playfair Display', serif; font-size: 1.1rem;
  font-weight: 600; color: var(--text-primary); text-decoration: none;
  letter-spacing: -0.02em;
}
.header-right { display: flex; align-items: center; gap: 8px; }
.header-home {
  font-size: 0.85rem; color: var(--level-accent-dark, var(--teal-dark)); text-decoration: none;
  padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border);
  transition: background 0.2s;
}
.header-home:hover { background: var(--cream); }

/* Dark Mode Toggle */
.dark-toggle {
  background: none; border: 1px solid var(--border); border-radius: 20px;
  padding: 5px 10px; cursor: pointer; font-size: 1rem;
  color: var(--text-primary); transition: background 0.2s;
}
.dark-toggle:hover { background: var(--cream); }

/* Mobile Menu Toggle */
.mobile-menu-btn {
  display: none; background: none; border: 1px solid var(--border);
  border-radius: 8px; padding: 6px 10px; cursor: pointer;
  font-size: 1.2rem; color: var(--text-primary);
}

/* ─── Mobile Nav Drawer ─── */
.mobile-drawer-overlay {
  display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5); z-index: 300;
}
.mobile-drawer-overlay.open { display: block; }
.mobile-drawer {
  position: fixed; top: 0; right: 0; bottom: 0; width: 300px;
  background: var(--white); z-index: 301; overflow-y: auto;
  transform: translateX(100%); transition: transform 0.3s ease;
  padding: 20px; box-shadow: -4px 0 20px rgba(0,0,0,0.1);
}
.mobile-drawer.open { transform: translateX(0); }
.mobile-drawer-close {
  background: none; border: none; font-size: 1.5rem; cursor: pointer;
  color: var(--text-primary); float: right;
}
.mobile-drawer h4 {
  font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em; margin: 16px 0 6px;
  color: var(--text-muted);
}
.mobile-drawer a {
  display: block; padding: 6px 0; text-decoration: none;
  color: var(--text-primary); font-size: 0.9rem;
}
.mobile-drawer a:hover { color: var(--level-accent); }
.mobile-drawer .level-color-dot {
  display: inline-block; width: 8px; height: 8px; border-radius: 50%;
  margin-right: 6px; vertical-align: middle;
}

/* ─── Layout ─── */
.page-wrapper { display: flex; max-width: 1100px; margin: 0 auto; }
.page-container {
  max-width: 860px; flex: 1; min-width: 0;
  margin: 0 auto;
  padding: calc(var(--header-h) + 35px) 24px 80px;
}

/* ─── TOC Sidebar ─── */
.toc-sidebar {
  position: sticky; top: calc(var(--header-h) + 35px);
  width: 220px; max-height: calc(100vh - var(--header-h) - 60px);
  overflow-y: auto; padding: 0 16px 0 0; flex-shrink: 0;
  align-self: flex-start; margin-top: calc(var(--header-h) + 35px);
}
.toc-sidebar h4 {
  font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted);
  margin-bottom: 8px;
}
.toc-sidebar a {
  display: block; padding: 3px 0 3px 10px; text-decoration: none;
  font-size: 0.8rem; color: var(--text-muted);
  border-left: 2px solid transparent; transition: all 0.2s;
  line-height: 1.4;
}
.toc-sidebar a:hover { color: var(--level-accent); }
.toc-sidebar a.active {
  color: var(--level-accent); border-left-color: var(--level-accent);
  font-weight: 500;
}
.toc-sidebar a.toc-h3 { padding-left: 20px; font-size: 0.75rem; }

/* Mobile TOC */
.toc-mobile {
  display: none; margin-bottom: 20px; background: var(--cream);
  border-radius: 8px; padding: 12px 16px;
}
.toc-mobile summary {
  font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600;
  cursor: pointer; color: var(--text-primary);
}
.toc-mobile a {
  display: block; padding: 4px 0; text-decoration: none;
  font-size: 0.82rem; color: var(--text-muted);
}
.toc-mobile a:hover { color: var(--level-accent); }

/* ─── Index Page ─── */
.hero {
  text-align: center; padding-bottom: 40px;
  border-bottom: 1px solid var(--border); margin-bottom: 40px;
}
.hero h1 {
  font-size: 2.6rem; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 14px;
}
.hero .subtitle {
  font-size: 1.05rem; color: var(--text-secondary);
  max-width: 580px; margin: 0 auto 20px;
}
.hero .meta {
  font-size: 0.85rem; color: var(--text-muted);
}
.hero .meta span { margin: 0 6px; }

.stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 12px; margin-bottom: 40px;
}
.stat-card {
  background: var(--cream); border-radius: 8px;
  padding: 18px 14px; text-align: center;
}
.stat-card .number {
  font-size: 1.8rem; font-weight: 700;
  color: var(--level-accent-dark, var(--teal-dark)); line-height: 1.2;
}
.stat-card .label {
  font-size: 0.72rem; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px;
}
.stat-card.progress-card .number { font-size: 1.4rem; }

.level-section { margin-bottom: 32px; }
.level-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 12px; padding-bottom: 8px;
  border-bottom: 1px solid var(--cream-darker);
}
.level-badge {
  color: var(--white); font-size: 0.65rem; font-weight: 700;
  padding: 3px 8px; border-radius: 4px;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.level-header h3 {
  font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0;
}
.level-header .level-desc {
  color: var(--text-muted); font-size: 0.88rem;
}

.module-list { list-style: none; display: grid; gap: 6px; }
.module-card {
  display: flex; align-items: center;
  background: var(--white); border: 1px solid var(--border);
  border-radius: 8px; padding: 12px 18px;
  text-decoration: none; color: inherit;
  transition: border-color 0.2s, box-shadow 0.15s, transform 0.1s;
}
.module-card:hover {
  border-color: var(--level-accent, var(--teal-border));
  box-shadow: 0 2px 8px rgba(72,114,101,0.08);
  transform: translateY(-1px);
}
.module-id {
  font-weight: 700; color: var(--level-accent, var(--teal-dark));
  min-width: 2.8rem; font-size: 0.95rem;
}
.module-info { flex: 1; }
.module-info .title { font-weight: 500; font-size: 0.95rem; }
.module-info .duration { font-size: 0.78rem; color: var(--text-muted); }
.module-arrow { color: var(--warm-gray); font-size: 1.2rem; margin-left: 8px; }
.module-complete-badge {
  color: #16a34a; font-size: 1.1rem; margin-left: 8px;
}

/* ─── Resource Section on Index ─── */
.resources-section {
  margin-top: 40px; padding-top: 32px;
  border-top: 1px solid var(--border);
}
.resources-section > h3 {
  font-size: 1.3rem; color: var(--text-primary); margin-bottom: 16px;
}
.resource-section-group { margin-bottom: 28px; }
.resource-section-group > h4 {
  font-family: 'Playfair Display', serif; font-size: 1.1rem;
  font-weight: 500; color: var(--text-primary); margin-bottom: 12px;
}
.resource-category { margin-bottom: 16px; }
.resource-category h5 {
  font-family: 'Inter', sans-serif; font-size: 0.8rem;
  font-weight: 600; color: var(--text-muted);
  margin-bottom: 6px; padding-left: 2px;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 6px;
}
.resource-link {
  display: block; background: var(--white);
  border: 1px solid var(--border); border-radius: 6px;
  padding: 8px 14px; text-decoration: none;
  color: var(--text-primary); font-size: 0.88rem;
  transition: border-color 0.2s, box-shadow 0.15s;
}
.resource-link:hover {
  border-color: var(--level-accent, var(--teal-border)); color: var(--level-accent, var(--teal-dark));
  box-shadow: 0 1px 4px rgba(72,114,101,0.08);
}

/* ─── Module Pages ─── */
.module-header {
  margin-bottom: 28px; padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}
.module-header .breadcrumb {
  font-size: 0.82rem; color: var(--text-muted); margin-bottom: 6px;
}
.module-header .breadcrumb a {
  color: var(--level-accent, var(--teal-dark)); text-decoration: none;
}
.module-header .breadcrumb a:hover { text-decoration: underline; }

.module-meta {
  display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;
}
.meta-tag {
  font-size: 0.75rem; padding: 3px 10px;
  border-radius: 20px; font-weight: 500;
}
.meta-tag.duration { background: var(--level-accent-light, var(--teal-light)); color: var(--level-accent-dark, var(--teal-dark)); }
.meta-tag.level { background: var(--cream); color: var(--text-muted); }

.objectives-list {
  margin-top: 12px; padding: 12px 16px;
  background: var(--cream); border-radius: 8px;
}
.objectives-list h4 {
  font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted);
  margin-bottom: 6px;
}
.objectives-list ul { padding-left: 1.2rem; margin: 0; }
.objectives-list li {
  font-size: 0.88rem; color: var(--text-secondary);
  margin: 2px 0;
}

/* ─── Markdown Content ─── */
.content { background: var(--white); padding: 0; }

.content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem; font-weight: 500;
  color: var(--text-primary); margin: 2rem 0 1rem;
  letter-spacing: -0.03em;
}
.content h1:first-child { margin-top: 0; }

.content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem; font-weight: 500;
  color: var(--level-accent-dark, var(--teal-dark)); margin: 2.5rem 0 0.75rem;
  padding-bottom: 6px; border-bottom: 1px solid var(--cream-darker);
}

.content h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.12rem; font-weight: 500;
  color: var(--text-primary); margin: 1.5rem 0 0.5rem;
}

.content h4 {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem; font-weight: 600;
  color: var(--text-primary); margin: 1.2rem 0 0.4rem;
}

.content p { margin: 0.75rem 0; color: var(--text-secondary); }

.content ul, .content ol { margin: 0.75rem 0; padding-left: 1.5rem; }
.content li { margin: 0.3rem 0; color: var(--text-secondary); }
.content li p { margin: 0.25rem 0; }

.content strong { color: var(--text-primary); }

.content a {
  color: var(--level-accent-dark, var(--teal-dark)); text-decoration: none;
  border-bottom: 1px solid var(--sage);
}
.content a:hover { color: var(--level-accent, var(--teal)); border-bottom-color: var(--level-accent, var(--teal)); }

/* Blockquote / Callout base */
.content blockquote {
  border-left: 3px solid var(--level-accent, var(--teal));
  background: var(--cream); padding: 12px 18px;
  margin: 1rem 0; border-radius: 0 6px 6px 0;
}
.content blockquote p { color: var(--text-secondary); margin: 0.25rem 0; }

/* Callout variants */
.callout { padding: 14px 18px; margin: 1rem 0; border-radius: 0 8px 8px 0; border-left: 4px solid; }
.callout p { margin: 0.25rem 0; }
.callout-icon { font-size: 1.1rem; margin-right: 6px; }

.callout-tip { background: #f0fdf4; border-left-color: #16a34a; }
.callout-tip p { color: #15803d; }
[data-theme="dark"] .callout-tip { background: #0f2918; }

.callout-warning { background: #fefce8; border-left-color: #ca8a04; }
.callout-warning p { color: #854d0e; }
[data-theme="dark"] .callout-warning { background: #2a2008; }

.callout-reference { background: #eff6ff; border-left-color: #2563eb; }
.callout-reference p { color: #1e40af; }
[data-theme="dark"] .callout-reference { background: #0a1628; }

.callout-try { background: #faf5ff; border-left-color: #9333ea; }
.callout-try p { color: #6b21a8; }
[data-theme="dark"] .callout-try { background: #1a0a28; }

/* Code blocks with copy button */
.content code {
  background: var(--cream-dark); color: var(--level-accent-dark, var(--teal-dark));
  padding: 2px 6px; border-radius: 3px;
  font-size: 0.87em; font-family: 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
}

.code-block-wrapper {
  position: relative; margin: 1rem 0;
}
.copy-btn {
  position: absolute; top: 8px; right: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: #94a3b8; border-radius: 4px; padding: 4px 10px;
  font-size: 0.75rem; cursor: pointer; opacity: 0;
  transition: opacity 0.2s, background 0.2s;
  font-family: 'Inter', sans-serif;
}
.code-block-wrapper:hover .copy-btn { opacity: 1; }
.copy-btn:hover { background: rgba(255,255,255,0.2); color: #e2e8f0; }
.copy-btn.copied { color: #4ade80; border-color: #4ade80; }

.content pre {
  background: var(--bg-code); color: var(--text-code);
  padding: 18px 20px; border-radius: 8px;
  overflow-x: auto; margin: 0;
  font-size: 0.87rem; line-height: 1.55;
}
.content pre code {
  background: none; color: inherit; padding: 0; font-size: inherit;
}

/* Tables */
.content table {
  width: 100%; border-collapse: collapse;
  margin: 1rem 0; font-size: 0.9rem;
}
.content th {
  background: var(--cream); color: var(--text-primary);
  font-weight: 600; text-align: left;
  padding: 8px 12px; border-bottom: 2px solid var(--border);
  font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.03em;
}
.content td {
  padding: 8px 12px; border-bottom: 1px solid var(--cream-darker);
  color: var(--text-secondary);
}
.content tr:hover td { background: var(--cream); }

.content hr { border: none; border-top: 1px solid var(--cream-darker); margin: 2rem 0; }
.content img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }

/* Exercise Cards */
.exercise-card {
  background: var(--cream); border-left: 4px solid var(--level-accent, var(--teal));
  border-radius: 0 8px 8px 0; padding: 20px 24px; margin: 1.5rem 0;
}
.exercise-card .exercise-badge {
  display: inline-block; background: var(--level-accent, var(--teal)); color: white;
  font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;
  text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px;
}

/* Collapsible sections */
.content details {
  margin: 0.75rem 0; border: 1px solid var(--border); border-radius: 8px;
  overflow: hidden;
}
.content details summary {
  padding: 10px 16px; cursor: pointer; font-weight: 500;
  background: var(--cream); color: var(--text-primary);
  font-size: 0.92rem;
}
.content details summary:hover { background: var(--cream-dark); }
.content details[open] summary { border-bottom: 1px solid var(--border); }
.content details > :not(summary) { padding: 0 16px; }
.content details > p { padding: 8px 16px; }

/* ─── Mark Complete Button ─── */
.mark-complete-section {
  text-align: center; margin: 32px 0 16px;
  padding: 20px; background: var(--cream); border-radius: 8px;
}
.mark-complete-btn {
  background: var(--level-accent, var(--teal)); color: white;
  border: none; padding: 10px 24px; border-radius: 20px;
  font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  font-family: 'Inter', sans-serif;
}
.mark-complete-btn:hover { filter: brightness(0.9); transform: translateY(-1px); }
.mark-complete-btn.completed {
  background: #16a34a; cursor: default;
}

/* ─── Navigation Footer ─── */
.nav-footer {
  display: flex; justify-content: space-between;
  align-items: center; margin-top: 32px;
  padding-top: 20px; border-top: 1px solid var(--border);
  gap: 12px;
}
.nav-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 18px; border-radius: 20px;
  text-decoration: none; font-size: 0.85rem; font-weight: 500;
  transition: background 0.2s, box-shadow 0.15s;
}
.nav-btn.prev {
  color: var(--text-secondary); background: var(--cream);
  border: 1px solid var(--border);
}
.nav-btn.prev:hover { background: var(--cream-dark); }
.nav-btn.next {
  color: var(--white); background: var(--level-accent, var(--teal));
  border: 1px solid var(--level-accent, var(--teal)); margin-left: auto;
}
.nav-btn.next:hover { filter: brightness(0.9); }
.nav-btn.home {
  color: var(--level-accent-dark, var(--teal-dark)); background: var(--white);
  border: 1px solid var(--border);
}
.nav-btn.home:hover { background: var(--cream); }

.keyboard-hint {
  text-align: center; margin-top: 12px;
  font-size: 0.75rem; color: var(--text-muted);
}

/* ─── Footer ─── */
.site-footer {
  text-align: center; padding: 28px 24px;
  color: var(--text-muted); font-size: 0.78rem;
  border-top: 1px solid var(--border); margin-top: 48px;
}

/* ─── Print ─── */
@media print {
  .site-header, .nav-footer, .site-footer, .toc-sidebar, .toc-mobile,
  .copy-btn, .reading-progress, .mark-complete-section, .keyboard-hint,
  .dark-toggle, .mobile-menu-btn, .mobile-drawer-overlay { display: none !important; }
  .content { padding: 0; }
  .page-container { max-width: 100%; padding: 0; }
  .page-wrapper { display: block; }
  body { font-size: 12pt; }
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .toc-sidebar { display: none; }
  .toc-mobile { display: block; }
}

@media (max-width: 768px) {
  .page-container { padding: calc(var(--header-h) + 20px) 16px 60px; }
  .hero h1 { font-size: 1.8rem; }
  .stats-row { grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .resource-grid { grid-template-columns: 1fr; }
  .header-inner { padding: 0 16px; }
  .nav-footer { flex-wrap: wrap; }
  .mobile-menu-btn { display: block; }
}
`;

// ─── JavaScript ─────────────────────────────────────────────────────────────

const JS = `
(function() {
  // ─── Copy to Clipboard ───
  document.querySelectorAll('.code-block-wrapper').forEach(function(wrapper) {
    var btn = wrapper.querySelector('.copy-btn');
    var pre = wrapper.querySelector('pre');
    if (!btn || !pre) return;
    btn.addEventListener('click', function() {
      var text = pre.textContent;
      navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(function() {
        // Fallback for file:// protocol
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // ─── TOC Scroll Spy ───
  var tocLinks = document.querySelectorAll('.toc-sidebar a');
  if (tocLinks.length > 0) {
    var headings = [];
    tocLinks.forEach(function(link) {
      var id = link.getAttribute('href');
      if (id && id.startsWith('#')) {
        var el = document.getElementById(id.slice(1));
        if (el) headings.push({ el: el, link: link });
      }
    });
    if (headings.length > 0) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            tocLinks.forEach(function(l) { l.classList.remove('active'); });
            var match = headings.find(function(h) { return h.el === entry.target; });
            if (match) match.link.classList.add('active');
          }
        });
      }, { rootMargin: '-80px 0px -70% 0px' });
      headings.forEach(function(h) { observer.observe(h.el); });
    }
  }

  // ─── Reading Progress Bar ───
  var progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    });
  }

  // ─── Progress Tracking (localStorage) ───
  var STORAGE_KEY = 'sm-course-progress';
  function getProgress() {
    try {
      var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return data.completedModules || [];
    } catch(e) { return []; }
  }
  function saveProgress(modules) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ completedModules: modules }));
    } catch(e) {}
  }

  // Mark Complete button
  var markBtn = document.querySelector('.mark-complete-btn');
  if (markBtn) {
    var moduleId = markBtn.getAttribute('data-module');
    var completed = getProgress();
    if (completed.indexOf(moduleId) !== -1) {
      markBtn.textContent = '\\u2713 Completed';
      markBtn.classList.add('completed');
    }
    markBtn.addEventListener('click', function() {
      var list = getProgress();
      if (list.indexOf(moduleId) === -1) {
        list.push(moduleId);
        saveProgress(list);
        markBtn.textContent = '\\u2713 Completed';
        markBtn.classList.add('completed');
      }
    });
  }

  // Index page: show completion badges
  document.querySelectorAll('.module-card').forEach(function(card) {
    var mid = card.getAttribute('data-module');
    if (mid && getProgress().indexOf(mid) !== -1) {
      var badge = card.querySelector('.module-complete-badge');
      if (badge) badge.style.display = 'inline';
    }
  });

  // Index page: update progress stat
  var progressStat = document.getElementById('progress-stat');
  if (progressStat) {
    var total = parseInt(progressStat.getAttribute('data-total') || '27');
    var done = getProgress().length;
    var pct = total > 0 ? Math.round((done / total) * 100) : 0;
    progressStat.textContent = pct + '%';
  }

  // ─── Dark Mode ───
  var darkBtn = document.querySelector('.dark-toggle');
  if (darkBtn) {
    var saved = localStorage.getItem('sm-course-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkBtn.textContent = '\\u2600';
    }
    darkBtn.addEventListener('click', function() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('sm-course-theme', 'light');
        darkBtn.textContent = '\\u263E';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('sm-course-theme', 'dark');
        darkBtn.textContent = '\\u2600';
      }
    });
  }

  // ─── Keyboard Navigation ───
  var prevLink = document.querySelector('.nav-btn.prev');
  var nextLink = document.querySelector('.nav-btn.next');
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft' && prevLink) { prevLink.click(); }
    else if (e.key === 'ArrowRight' && nextLink) { nextLink.click(); }
    else if (e.key === 'Escape') {
      var homeLink = document.querySelector('.header-brand');
      if (homeLink) homeLink.click();
    }
  });

  // ─── Mobile Drawer ───
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var overlay = document.querySelector('.mobile-drawer-overlay');
  var drawer = document.querySelector('.mobile-drawer');
  var closeBtn = document.querySelector('.mobile-drawer-close');
  if (menuBtn && overlay && drawer) {
    menuBtn.addEventListener('click', function() {
      overlay.classList.add('open');
      drawer.classList.add('open');
    });
    function closeDrawer() {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
    }
    overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  }
})();
`;

// ─── Configure marked ───────────────────────────────────────────────────────

// Custom renderer for enhanced markdown
const renderer = new marked.Renderer();

// Headings: add id for TOC anchors, detect exercise patterns
renderer.heading = function({ text, depth }) {
  const rawText = text.replace(/<[^>]*>/g, '');
  const id = rawText.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');

  // Detect exercise headings
  const exerciseMatch = rawText.match(/^Exercise\s+(\d+)/i);
  if (exerciseMatch && depth === 3) {
    return `<div class="exercise-card"><span class="exercise-badge">Exercise ${exerciseMatch[1]}</span>\n<h${depth} id="${id}">${text}</h${depth}>\n`;
  }

  return `<h${depth} id="${id}">${text}</h${depth}>\n`;
};

// Code blocks: wrap with copy button
renderer.code = function({ text, lang }) {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<div class="code-block-wrapper"><button class="copy-btn">Copy</button><pre><code class="language-${lang || ''}">${escaped}</code></pre></div>\n`;
};

// Blockquotes: detect callout patterns
renderer.blockquote = function({ text }) {
  // Check the inner text for callout patterns
  const inner = text;
  let calloutClass = '';
  let icon = '';

  if (/<strong>Tip:?<\/strong>/i.test(inner) ||
      /Your prompts are working well when/i.test(inner) ||
      /<strong>Pro tip/i.test(inner) ||
      /<strong>Best practice/i.test(inner)) {
    calloutClass = 'callout callout-tip';
    icon = '<span class="callout-icon">\u2728</span>';
  } else if (/<strong>Reference:?<\/strong>/i.test(inner) ||
             /Using.*sample-files/i.test(inner) ||
             /<strong>File:?<\/strong>/i.test(inner) ||
             /<strong>Resource/i.test(inner)) {
    calloutClass = 'callout callout-reference';
    icon = '<span class="callout-icon">\uD83D\uDCC1</span>';
  } else if (/<strong>Warning:?<\/strong>/i.test(inner) ||
             /When this doesn.t work/i.test(inner) ||
             /<strong>Caution/i.test(inner) ||
             /<strong>Important/i.test(inner) ||
             /<strong>Note/i.test(inner)) {
    calloutClass = 'callout callout-warning';
    icon = '<span class="callout-icon">\u26A0\uFE0F</span>';
  } else if (/<strong>Try this/i.test(inner) ||
             /<strong>Experiment/i.test(inner) ||
             /<strong>Challenge/i.test(inner)) {
    calloutClass = 'callout callout-try';
    icon = '<span class="callout-icon">\uD83D\uDE80</span>';
  }

  if (calloutClass) {
    return `<div class="${calloutClass}">${icon}${inner}</div>\n`;
  }
  return `<blockquote>${inner}</blockquote>\n`;
};

marked.setOptions({
  gfm: true,
  breaks: false,
  renderer: renderer,
});

// ─── Utilities ──────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function moduleFilename(mod) {
  return `module-${mod.id}.html`;
}

function resourceFilename(res) {
  return `resource-${res.id}.html`;
}

// ─── Read and convert content ───────────────────────────────────────────────

function readMarkdown(relativePath) {
  const fullPath = path.join(PROJECT_ROOT, relativePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  WARNING: File not found: ${relativePath}`);
    return '<p><em>Content not available.</em></p>';
  }
  const raw = fs.readFileSync(fullPath, 'utf-8');

  // CSV files → HTML tables
  if (relativePath.endsWith('.csv')) {
    return csvToHtml(raw);
  }

  // Auto-link file references in markdown before parsing
  let md = raw;
  md = md.replace(/`((?:sample-files|team-context|prompt-library)\/[^`]+)`/g, (match, filepath) => {
    const htmlFile = resourcePathMap[filepath];
    if (htmlFile) {
      return `[\`${filepath}\`](${htmlFile})`;
    }
    return match;
  });

  let html = marked.parse(md);

  // Close any unclosed exercise cards (simple heuristic: close before next h2 or end)
  // We track open exercise cards and close them before the next exercise card or h2
  html = closeExerciseCards(html);

  return html;
}

function closeExerciseCards(html) {
  // Insert closing </div> for exercise-card divs before the next exercise-card or h2
  const parts = html.split(/(<div class="exercise-card">)/);
  if (parts.length <= 1) return html;

  let result = parts[0];
  let inExercise = false;
  for (let i = 1; i < parts.length; i++) {
    if (parts[i] === '<div class="exercise-card">') {
      if (inExercise) result += '</div>';
      result += parts[i];
      inExercise = true;
    } else {
      result += parts[i];
    }
  }
  if (inExercise) result += '</div>';
  return result;
}

function csvToHtml(csvContent) {
  const lines = csvContent.trim().split('\n');
  if (lines.length === 0) return '<p><em>Empty file.</em></p>';

  let html = '<div style="overflow-x:auto"><table>\n<thead><tr>';
  const headers = parseCsvLine(lines[0]);
  headers.forEach(h => { html += `<th>${escapeHtml(h)}</th>`; });
  html += '</tr></thead>\n<tbody>';

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = parseCsvLine(lines[i]);
    html += '<tr>';
    cols.forEach(c => { html += `<td>${escapeHtml(c)}</td>`; });
    html += '</tr>\n';
  }
  html += '</tbody></table></div>';
  return html;
}

function parseCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

// ─── Mobile drawer content ──────────────────────────────────────────────────

function buildMobileDrawerHtml() {
  let html = '<button class="mobile-drawer-close">&times;</button>\n';
  html += '<h4 style="margin-top:0">Course Modules</h4>';
  for (const level of levels) {
    const color = levelColors[level.id];
    html += `<h4><span class="level-color-dot" style="background:${color.accent}"></span>Level ${level.id}: ${escapeHtml(level.title)}</h4>`;
    for (const mod of level.modules) {
      html += `<a href="${moduleFilename(mod)}">${mod.id} ${escapeHtml(mod.title)}</a>`;
    }
  }
  html += '<h4>Resources</h4>';
  html += '<a href="index.html#resources">View All Resources</a>';
  return html;
}

// ─── HTML Template ──────────────────────────────────────────────────────────

function htmlPage({ title, bodyContent, isIndex = false, levelId = null, hasProgress = false, hasToc = false, tocHtml = '' }) {
  const lc = levelId ? levelColors[levelId] : levelColors['1'];
  const levelCssVars = `--level-accent:${lc.accent};--level-accent-light:${lc.light};--level-accent-dark:${lc.dark};`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} - Copilot SM Course</title>
  <style>${CSS}</style>
  <style>:root{${levelCssVars}}</style>
</head>
<body>
  ${hasProgress ? '<div class="reading-progress"></div>' : ''}
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="header-brand">Copilot for Scrum Masters</a>
      <div class="header-right">
        ${isIndex ? '' : '<a href="index.html" class="header-home">&larr; Course Home</a>'}
        <button class="dark-toggle" aria-label="Toggle dark mode">&#9790;</button>
        <button class="mobile-menu-btn" aria-label="Open menu">&#9776;</button>
      </div>
    </div>
  </header>
  <div class="mobile-drawer-overlay"></div>
  <div class="mobile-drawer">${buildMobileDrawerHtml()}</div>
  <div class="page-wrapper">
    ${hasToc && tocHtml ? `<nav class="toc-sidebar">${tocHtml}</nav>` : ''}
    <div class="page-container">
      ${bodyContent}
    </div>
  </div>
  <footer class="site-footer">
    Copilot for AI-Enabled Scrum Masters &middot; v2.0 &middot; Internal Training Material
  </footer>
  <script>${JS}</script>
</body>
</html>`;
}

// ─── Generate TOC from content HTML ─────────────────────────────────────────

function generateTocHtml(contentHtml) {
  const headingRegex = /<h([23])\s+id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
  let match;
  let tocItems = [];
  while ((match = headingRegex.exec(contentHtml)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    const text = match[3].replace(/<[^>]*>/g, '');
    tocItems.push({ level, id, text });
  }

  if (tocItems.length === 0) return { sidebar: '', mobile: '' };

  let sidebar = '<h4>On This Page</h4>\n';
  let mobile = '<details class="toc-mobile"><summary>On This Page</summary>\n';
  for (const item of tocItems) {
    const cls = item.level === 3 ? ' class="toc-h3"' : '';
    sidebar += `<a href="#${item.id}"${cls}>${escapeHtml(item.text)}</a>\n`;
    mobile += `<a href="#${item.id}">${escapeHtml(item.text)}</a>\n`;
  }
  mobile += '</details>';

  return { sidebar, mobile };
}

// ─── Build Index Page ───────────────────────────────────────────────────────

function buildIndexPage() {
  const totalModules = allModules.length;

  let moduleSections = '';
  for (const level of levels) {
    const color = levelColors[level.id];
    const moduleItems = level.modules.map(mod => `
      <a href="${moduleFilename(mod)}" class="module-card" data-module="${mod.id}">
        <span class="module-id">${mod.id}</span>
        <span class="module-info">
          <span class="title">${escapeHtml(mod.title)}</span>
          <span class="duration">${mod.duration}</span>
        </span>
        <span class="module-complete-badge" style="display:none">&#10003;</span>
        <span class="module-arrow">&rsaquo;</span>
      </a>`).join('\n');

    moduleSections += `
    <div class="level-section">
      <div class="level-header">
        <span class="level-badge" style="background:${color.accent}">Level ${level.id}</span>
        <h3>${escapeHtml(level.title)}</h3>
        <span class="level-desc">&mdash; ${escapeHtml(level.description)}</span>
      </div>
      <div class="module-list">
        ${moduleItems}
      </div>
    </div>`;
  }

  let resourceSections = '';
  for (const section of resources) {
    let categoriesHtml = '';
    for (const cat of section.categories) {
      const links = cat.files.map(f =>
        `<a href="${resourceFilename(f)}" class="resource-link">${escapeHtml(f.title)}</a>`
      ).join('\n');
      categoriesHtml += `
      <div class="resource-category">
        <h5>${escapeHtml(cat.title)}</h5>
        <div class="resource-grid">${links}</div>
      </div>`;
    }
    resourceSections += `
    <div class="resource-section-group">
      <h4>${escapeHtml(section.title)}</h4>
      ${categoriesHtml}
    </div>`;
  }

  const body = `
    <div class="hero">
      <h1>Microsoft Copilot for AI-Enabled Scrum Masters</h1>
      <p class="subtitle">Transform into an AI-native Scrum Master &mdash; from predictive intelligence to organizational impact</p>
      <p class="meta">
        <span>Self-Paced</span> &middot;
        <span>${totalModules} Modules</span> &middot;
        <span>~13h</span> &middot;
        <span>v2.0</span>
      </p>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="number">27</div>
        <div class="label">Modules</div>
      </div>
      <div class="stat-card">
        <div class="number">~13h</div>
        <div class="label">Duration</div>
      </div>
      <div class="stat-card">
        <div class="number">6</div>
        <div class="label">Levels</div>
      </div>
      <div class="stat-card progress-card">
        <div class="number" id="progress-stat" data-total="${totalModules}">0%</div>
        <div class="label">Complete</div>
      </div>
    </div>

    ${moduleSections}

    <div class="resources-section" id="resources">
      <h3>Resources &amp; Reference Material</h3>
      ${resourceSections}
    </div>
  `;

  return htmlPage({ title: 'Course Home', bodyContent: body, isIndex: true });
}

// ─── Build Module Page ──────────────────────────────────────────────────────

function buildModulePage(mod, index) {
  const level = levels.find(l => l.modules.some(m => m.id === mod.id));
  const contentHtml = readMarkdown(mod.path);

  const prev = index > 0 ? allModules[index - 1] : null;
  const next = index < allModules.length - 1 ? allModules[index + 1] : null;

  // Generate TOC
  const toc = generateTocHtml(contentHtml);

  // Objectives
  let objectivesHtml = '';
  if (mod.objectives && mod.objectives.length > 0) {
    objectivesHtml = `
    <div class="objectives-list">
      <h4>Learning Objectives</h4>
      <ul>${mod.objectives.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
    </div>`;
  }

  let navFooter = '<div class="nav-footer">';
  if (prev) {
    navFooter += `<a href="${moduleFilename(prev)}" class="nav-btn prev">&larr; ${prev.id} ${escapeHtml(prev.title)}</a>`;
  } else {
    navFooter += '<span></span>';
  }
  navFooter += `<a href="index.html" class="nav-btn home">Home</a>`;
  if (next) {
    navFooter += `<a href="${moduleFilename(next)}" class="nav-btn next">${next.id} ${escapeHtml(next.title)} &rarr;</a>`;
  }
  navFooter += '</div>';
  navFooter += '<div class="keyboard-hint">&larr; &rarr; to navigate &middot; Esc for home</div>';

  const body = `
    <div class="module-header">
      <div class="breadcrumb">
        <a href="index.html">Course Home</a> &rsaquo; Level ${level.id}: ${escapeHtml(level.title)} &rsaquo; Module ${mod.id}
      </div>
      <div class="module-meta">
        <span class="meta-tag duration">${mod.duration}</span>
        <span class="meta-tag level" style="border:1px solid ${levelColors[level.id].accent}; color:${levelColors[level.id].accent}">Level ${level.id}: ${escapeHtml(level.title)}</span>
      </div>
      ${objectivesHtml}
    </div>
    ${toc.mobile}
    <div class="content">
      ${contentHtml}
    </div>
    <div class="mark-complete-section">
      <button class="mark-complete-btn" data-module="${mod.id}">Mark as Complete</button>
    </div>
    ${navFooter}
  `;

  return htmlPage({
    title: `Module ${mod.id}: ${mod.title}`,
    bodyContent: body,
    levelId: level.id,
    hasProgress: true,
    hasToc: true,
    tocHtml: toc.sidebar,
  });
}

// ─── Build Resource Page ────────────────────────────────────────────────────

function buildResourcePage(file, sectionTitle, categoryTitle) {
  const contentHtml = readMarkdown(file.path);

  const body = `
    <div class="module-header">
      <div class="breadcrumb">
        <a href="index.html">Course Home</a> &rsaquo; ${escapeHtml(sectionTitle)} &rsaquo; ${escapeHtml(categoryTitle)} &rsaquo; ${escapeHtml(file.title)}
      </div>
    </div>
    <div class="content">
      ${contentHtml}
    </div>
    <div class="nav-footer">
      <a href="index.html" class="nav-btn home">&larr; Back to Course Home</a>
    </div>
  `;

  return htmlPage({ title: file.title, bodyContent: body });
}

// ─── Main Build ─────────────────────────────────────────────────────────────

function build() {
  console.log('Building static site for Copilot SM Course...\n');

  // Create output directory
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Build index
  const indexHtml = buildIndexPage();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
  console.log('  index.html');

  // Build module pages
  let moduleCount = 0;
  allModules.forEach((mod, index) => {
    const html = buildModulePage(mod, index);
    const filename = moduleFilename(mod);
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), html);
    console.log(`  ${filename}`);
    moduleCount++;
  });

  // Build resource pages
  let resourceCount = 0;
  for (const section of resources) {
    for (const cat of section.categories) {
      for (const file of cat.files) {
        const html = buildResourcePage(file, section.title, cat.title);
        const filename = resourceFilename(file);
        fs.writeFileSync(path.join(OUTPUT_DIR, filename), html);
        console.log(`  ${filename}`);
        resourceCount++;
      }
    }
  }

  // Copy testing strategy pages
  let testingCount = 0;
  const testingDir = path.join(PROJECT_ROOT, 'testing');
  if (fs.existsSync(testingDir)) {
    const testingFiles = fs.readdirSync(testingDir).filter(f => f.endsWith('.html'));
    for (const file of testingFiles) {
      fs.copyFileSync(path.join(testingDir, file), path.join(OUTPUT_DIR, file));
      console.log(`  ${file} (testing)`);
      testingCount++;
    }
  }

  const totalFiles = 1 + moduleCount + resourceCount + testingCount;
  console.log(`\nDone! Generated ${totalFiles} HTML files in final-version-static-site/`);
  console.log(`  - 1 index page`);
  console.log(`  - ${moduleCount} module pages`);
  console.log(`  - ${resourceCount} resource pages`);
  console.log(`  - ${testingCount} testing strategy pages`);
  console.log(`\nOpen final-version-static-site/index.html in your browser to view the course.`);
}

build();
