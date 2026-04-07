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
  '1': { accent: '#2D6B5E', light: '#D0E8E0', dark: '#1A4A3F', name: 'Industrial Teal' },
  '2': { accent: '#1E3A6E', light: '#C8D6EC', dark: '#0F2346', name: 'Navy' },
  '3': { accent: '#B8860B', light: '#F0DEB0', dark: '#8B6508', name: 'Industrial Amber' },
  '4': { accent: '#2E4A1E', light: '#C4D4B8', dark: '#1A3010', name: 'Military Green' },
  '5': { accent: '#4B0082', light: '#D0B8E8', dark: '#2E0050', name: 'Deep Violet' },
  '6': { accent: '#007C8A', light: '#B0E8F0', dark: '#005060', name: 'Cyan' },
};

// ─── CSS ────────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+3:wght@400;600;700;900&display=swap');

:root {
  --white: #ffffff;
  --cream: #F0F0F0;
  --cream-dark: #E5E5E5;
  --cream-darker: #D0D0D0;
  --warm-gray: #999999;
  --warm-gray-dark: #666666;
  --border: #000000;
  --text-primary: #000000;
  --text-secondary: #333333;
  --text-muted: #555555;
  --accent-lime: #CCFF00;
  --primary-olive: #4A554A;
  --header-h: 60px;
  --level-accent: #4A554A;
  --level-accent-light: #E0E5E0;
  --level-accent-dark: #2A352A;
  --bg-primary: #ffffff;
  --bg-secondary: #F0F0F0;
  --bg-code: #0A0A0A;
  --text-code: #CCFF00;
  --border-color: #000000;
  --grid-color: rgba(0,0,0,0.06);
}

[data-theme="dark"] {
  --white: #0A0A0A;
  --cream: #141414;
  --cream-dark: #1E1E1E;
  --cream-darker: #0F0F0F;
  --warm-gray: #3A3A3A;
  --warm-gray-dark: #888888;
  --border: #CCFF00;
  --text-primary: #F0F0F0;
  --text-secondary: #CCCCCC;
  --text-muted: #888888;
  --bg-primary: #0A0A0A;
  --bg-secondary: #141414;
  --bg-code: #000000;
  --text-code: #CCFF00;
  --border-color: #CCFF00;
  --grid-color: rgba(204,255,0,0.04);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Source Sans 3', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-primary);
  background: var(--white);
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 40px 40px;
}

h1, h2, h3 { font-family: 'Bebas Neue', 'Impact', sans-serif; font-weight: 400; letter-spacing: 0.04em; text-transform: uppercase; }

/* ─── Reading Progress Bar ─── */
.reading-progress {
  position: fixed; top: 0; left: 0; height: 6px; z-index: 200;
  background: var(--accent-lime);
  width: 0%;
}

/* ─── Header ─── */
.site-header {
  position: sticky; top: 6px; z-index: 100;
  height: var(--header-h); background: var(--white);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 4px solid var(--border);
}
.header-inner {
  width: 100%; max-width: 1100px; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.header-brand {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.4rem;
  font-weight: 400; color: var(--text-primary); text-decoration: none;
  letter-spacing: 0.08em; text-transform: uppercase;
}
.header-right { display: flex; align-items: center; gap: 8px; }
.header-home {
  font-size: 0.8rem; color: var(--text-primary); text-decoration: none;
  padding: 6px 14px; border: 2px solid var(--border);
  text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;
}
.header-home:hover { background: var(--text-primary); color: var(--white); }

/* Dark Mode Toggle */
.dark-toggle {
  background: none; border: 2px solid var(--border);
  padding: 5px 10px; cursor: pointer; font-size: 1rem;
  color: var(--text-primary);
}
.dark-toggle:hover { background: var(--text-primary); color: var(--white); }

/* Mobile Menu Toggle */
.mobile-menu-btn {
  display: none; background: none; border: 2px solid var(--border);
  padding: 6px 10px; cursor: pointer;
  font-size: 1.2rem; color: var(--text-primary);
}

/* ─── Mobile Nav Drawer ─── */
.mobile-drawer-overlay {
  display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7); z-index: 300;
}
.mobile-drawer-overlay.open { display: block; }
.mobile-drawer {
  position: fixed; top: 0; right: 0; bottom: 0; width: 300px;
  background: var(--white); z-index: 301; overflow-y: auto;
  transform: translateX(100%); transition: transform 0.2s ease;
  padding: 20px; border-left: 4px solid var(--border);
}
.mobile-drawer.open { transform: translateX(0); }
.mobile-drawer-close {
  background: none; border: 2px solid var(--border); font-size: 0.85rem; cursor: pointer;
  color: var(--text-primary); float: right; padding: 4px 10px;
  font-family: 'Source Sans 3', sans-serif; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.mobile-drawer-close:hover { background: var(--text-primary); color: var(--white); }
.mobile-drawer h4 {
  font-family: 'Bebas Neue', sans-serif; font-size: 0.9rem; font-weight: 400;
  text-transform: uppercase; letter-spacing: 0.1em; margin: 16px 0 6px;
  color: var(--text-muted);
}
.mobile-drawer a {
  display: block; padding: 6px 8px; text-decoration: none;
  color: var(--text-primary); font-size: 0.9rem; font-weight: 600;
}
.mobile-drawer a:hover { background: var(--text-primary); color: var(--white); }
.mobile-drawer .level-color-dot {
  display: inline-block; width: 8px; height: 8px;
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
  font-family: 'Bebas Neue', sans-serif; font-size: 0.85rem; font-weight: 400;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted);
  margin-bottom: 8px;
}
.toc-sidebar a {
  display: block; padding: 3px 0 3px 10px; text-decoration: none;
  font-size: 0.8rem; color: var(--text-muted);
  border-left: 3px solid transparent;
  line-height: 1.4; font-weight: 600;
}
.toc-sidebar a:hover { color: var(--text-primary); background: var(--accent-lime); }
.toc-sidebar a.active {
  color: var(--text-primary); border-left-color: var(--accent-lime);
  font-weight: 700; background: var(--cream);
}
.toc-sidebar a.toc-h3 { padding-left: 20px; font-size: 0.75rem; }

/* Mobile TOC */
.toc-mobile {
  display: none; margin-bottom: 20px; background: var(--cream);
  border: 2px solid var(--border); padding: 12px 16px;
}
.toc-mobile summary {
  font-family: 'Source Sans 3', sans-serif; font-size: 0.85rem; font-weight: 700;
  cursor: pointer; color: var(--text-primary); text-transform: uppercase;
  letter-spacing: 0.04em;
}
.toc-mobile a {
  display: block; padding: 4px 0; text-decoration: none;
  font-size: 0.82rem; color: var(--text-muted); font-weight: 600;
}
.toc-mobile a:hover { color: var(--text-primary); }

/* ─── Index Page ─── */
.hero {
  text-align: left; padding-bottom: 40px;
  border-bottom: 4px solid var(--border); margin-bottom: 40px;
}
.hero h1 {
  font-size: 4rem; letter-spacing: 0.02em; line-height: 0.95; margin-bottom: 16px;
}
.hero .subtitle {
  font-size: 1.1rem; color: var(--text-secondary);
  max-width: none; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.04em;
  border-left: 4px solid var(--primary-olive); padding-left: 16px;
}
.hero .meta {
  font-size: 0.85rem; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;
  margin-top: 16px;
}
.hero .meta span { margin: 0 6px; }

.stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 12px; margin-bottom: 40px;
}
.stat-card {
  background: var(--white); border: 4px solid var(--border);
  padding: 18px 14px; text-align: center;
}
.stat-card .number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.4rem; font-weight: 400;
  color: var(--text-primary); line-height: 1;
}
.stat-card .label {
  font-size: 0.7rem; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;
  font-weight: 700;
}
.stat-card.progress-card .number { font-size: 1.8rem; }

.level-section { margin-bottom: 32px; }
.level-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 12px; padding-bottom: 8px;
  border-bottom: 3px solid var(--border);
}
.level-badge {
  color: var(--white); font-size: 0.7rem; font-weight: 900;
  padding: 4px 10px;
  text-transform: uppercase; letter-spacing: 0.1em;
  font-family: 'Source Sans 3', sans-serif;
}
.level-header h3 {
  font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0;
  letter-spacing: 0.04em;
}
.level-header .level-desc {
  color: var(--text-muted); font-size: 0.88rem; font-weight: 600;
}

.module-list { list-style: none; display: grid; gap: 6px; }
.module-card {
  display: flex; align-items: center;
  background: var(--white); border: 2px solid var(--border);
  padding: 12px 18px;
  text-decoration: none; color: inherit;
}
.module-card:hover {
  background: var(--text-primary); color: var(--white);
}
.module-card:hover .module-id { color: var(--accent-lime); }
.module-card:hover .module-info .duration { color: var(--accent-lime); }
.module-card:active { transform: translateY(1px); }
.module-id {
  font-weight: 700; color: var(--level-accent);
  min-width: 2.8rem; font-size: 0.95rem;
}
.module-info { flex: 1; }
.module-info .title { font-weight: 700; font-size: 0.95rem; }
.module-info .duration { font-size: 0.78rem; color: var(--text-muted); }
.module-arrow { color: var(--warm-gray); font-size: 1.2rem; margin-left: 8px; }
.module-card:hover .module-arrow { color: var(--accent-lime); }
.module-complete-badge {
  color: #16a34a; font-size: 1.1rem; margin-left: 8px;
}

/* ─── Resource Section on Index ─── */
.resources-section {
  margin-top: 40px; padding-top: 32px;
  border-top: 4px solid var(--border);
}
.resources-section > h3 {
  font-size: 1.6rem; color: var(--text-primary); margin-bottom: 16px;
}
.resource-section-group { margin-bottom: 28px; }
.resource-section-group > h4 {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem;
  font-weight: 400; color: var(--text-primary); margin-bottom: 12px;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.resource-category { margin-bottom: 16px; }
.resource-category h5 {
  font-family: 'Source Sans 3', sans-serif; font-size: 0.8rem;
  font-weight: 700; color: var(--text-muted);
  margin-bottom: 6px; padding-left: 2px;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 6px;
}
.resource-link {
  display: block; background: var(--white);
  border: 2px solid var(--border);
  padding: 8px 14px; text-decoration: none;
  color: var(--text-primary); font-size: 0.88rem; font-weight: 600;
}
.resource-link:hover {
  background: var(--text-primary); color: var(--white);
}

/* ─── Module Pages ─── */
.module-header {
  margin-bottom: 28px; padding-bottom: 20px;
  border-bottom: 4px solid var(--border);
}
.module-header .breadcrumb {
  font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;
  text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;
}
.module-header .breadcrumb a {
  color: var(--text-primary); text-decoration: none;
  border-bottom: 2px solid var(--accent-lime);
}
.module-header .breadcrumb a:hover { background: var(--accent-lime); }

.module-meta {
  display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;
}
.meta-tag {
  font-size: 0.75rem; padding: 3px 10px;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
  font-family: 'Source Sans 3', sans-serif;
}
.meta-tag.duration { background: var(--level-accent-light); color: var(--level-accent-dark); border: 2px solid var(--level-accent); }
.meta-tag.level { background: var(--cream); color: var(--text-muted); border: 2px solid var(--border); }

.objectives-list {
  margin-top: 12px; padding: 12px 16px;
  background: var(--cream); border: 2px solid var(--border);
  border-left: 5px solid var(--level-accent);
}
.objectives-list h4 {
  font-family: 'Bebas Neue', sans-serif; font-size: 0.9rem; font-weight: 400;
  text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);
  margin-bottom: 6px;
}
.objectives-list ul { padding-left: 1.2rem; margin: 0; }
.objectives-list li {
  font-size: 0.88rem; color: var(--text-secondary);
  margin: 2px 0; font-weight: 600;
}

/* ─── Markdown Content ─── */
.content { background: var(--white); padding: 0; }

.content h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem; font-weight: 400;
  color: var(--text-primary); margin: 2rem 0 1rem;
  letter-spacing: 0.04em; text-transform: uppercase;
}
.content h1:first-child { margin-top: 0; }

.content h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; font-weight: 400;
  color: var(--text-primary); margin: 2.5rem 0 0.75rem;
  padding-bottom: 6px; border-bottom: 3px solid var(--border);
  text-transform: uppercase; letter-spacing: 0.04em;
}

.content h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem; font-weight: 400;
  color: var(--text-primary); margin: 1.5rem 0 0.5rem;
  text-transform: uppercase; letter-spacing: 0.04em;
}

.content h4 {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  color: var(--text-primary); margin: 1.2rem 0 0.4rem;
  text-transform: uppercase; letter-spacing: 0.04em;
}

.content p { margin: 0.75rem 0; color: var(--text-secondary); }

.content ul, .content ol { margin: 0.75rem 0; padding-left: 1.5rem; }
.content li { margin: 0.3rem 0; color: var(--text-secondary); }
.content li p { margin: 0.25rem 0; }

.content strong { color: var(--text-primary); }

.content a {
  color: var(--text-primary); text-decoration: none;
  border-bottom: 2px solid var(--accent-lime);
}
.content a:hover { background: var(--accent-lime); }

/* Blockquote / Callout base */
.content blockquote {
  border-left: 5px solid var(--level-accent);
  background: var(--cream); padding: 12px 18px;
  margin: 1rem 0;
}
.content blockquote p { color: var(--text-secondary); margin: 0.25rem 0; }

/* Callout variants */
.callout { padding: 14px 18px; margin: 1rem 0; border-left: 5px solid; }
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

/* Dark mode exercise card readability fix (ISS-017) */
[data-theme="dark"] .exercise-card { background: #1a1a1a; }
[data-theme="dark"] .exercise-card .exercise-badge { background: #CCFF00; color: #000; }

/* Code blocks with copy button */
.content code {
  background: var(--cream-dark); color: var(--text-primary);
  padding: 2px 6px; border: 1px solid var(--border);
  font-size: 0.87em; font-family: 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
}

.code-block-wrapper {
  position: relative; margin: 1rem 0;
}
.copy-btn {
  position: absolute; top: 8px; right: 8px;
  background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3);
  color: #94a3b8; padding: 4px 10px;
  font-size: 0.75rem; cursor: pointer; opacity: 0;
  font-family: 'Source Sans 3', sans-serif; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.code-block-wrapper:hover .copy-btn { opacity: 1; }
.copy-btn:hover { background: var(--accent-lime); color: #000; border-color: var(--accent-lime); }
.copy-btn.copied { color: var(--accent-lime); border-color: var(--accent-lime); }

.content pre {
  background: var(--bg-code); color: var(--text-code);
  padding: 18px 20px; border: 2px solid var(--border);
  overflow-x: auto; margin: 0;
  font-size: 0.87rem; line-height: 1.55;
}
.content pre code {
  background: none; color: inherit; padding: 0; font-size: inherit; border: none;
}

/* Tables */
.content table {
  width: 100%; border-collapse: collapse;
  margin: 1rem 0; font-size: 0.9rem;
}
.content th {
  background: var(--cream); color: var(--text-primary);
  font-family: 'Bebas Neue', sans-serif; font-weight: 400;
  text-align: left;
  padding: 8px 12px; border-bottom: 3px solid var(--border);
  font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.06em;
}
.content td {
  padding: 8px 12px; border-bottom: 2px solid var(--cream-darker);
  color: var(--text-secondary);
}
.content tr:hover td { background: var(--accent-lime); color: var(--text-primary); }

.content hr { border: none; border-top: 3px solid var(--border); margin: 2rem 0; }
.content img { max-width: 100%; border: 2px solid var(--border); margin: 1rem 0; }

/* Exercise Cards */
.exercise-card {
  background: var(--cream); border: 4px solid var(--border);
  border-left: 5px solid var(--level-accent);
  padding: 20px 24px; margin: 1.5rem 0;
}
.exercise-card .exercise-badge {
  display: inline-block; background: var(--text-primary); color: var(--accent-lime);
  font-size: 0.7rem; font-weight: 900; padding: 3px 10px;
  text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;
  font-family: 'Source Sans 3', sans-serif;
}

/* Collapsible sections */
.content details {
  margin: 0.75rem 0; border: 2px solid var(--border);
}
.content details summary {
  padding: 10px 16px; cursor: pointer; font-weight: 700;
  background: var(--cream); color: var(--text-primary);
  font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.02em;
}
.content details summary:hover { background: var(--text-primary); color: var(--white); }
.content details[open] summary { border-bottom: 2px solid var(--border); }
.content details > :not(summary) { padding: 0 16px; }
.content details > p { padding: 8px 16px; }

/* ─── Mark Complete Button ─── */
.mark-complete-section {
  text-align: center; margin: 32px 0 16px;
  padding: 20px; background: var(--cream); border: 2px solid var(--border);
}
.mark-complete-btn {
  background: var(--text-primary); color: var(--white);
  border: 2px solid var(--text-primary); padding: 12px 28px;
  font-size: 0.85rem; font-weight: 900; cursor: pointer;
  font-family: 'Source Sans 3', sans-serif;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.mark-complete-btn:hover { background: var(--accent-lime); color: var(--text-primary); border-color: var(--text-primary); }
.mark-complete-btn:active { transform: translateY(1px); }
.mark-complete-btn.completed {
  background: #16a34a; border-color: #16a34a; color: white; cursor: default;
}

/* ─── Navigation Footer ─── */
.nav-footer {
  display: flex; justify-content: space-between;
  align-items: center; margin-top: 32px;
  padding-top: 20px; border-top: 4px solid var(--border);
  gap: 12px;
}
.nav-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 20px;
  text-decoration: none; font-size: 0.82rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.04em;
  font-family: 'Source Sans 3', sans-serif;
}
.nav-btn.prev {
  color: var(--text-primary); background: var(--white);
  border: 2px solid var(--border);
}
.nav-btn.prev:hover { background: var(--text-primary); color: var(--white); }
.nav-btn.next {
  color: var(--text-primary); background: var(--accent-lime);
  border: 2px solid var(--text-primary); margin-left: auto;
}
.nav-btn.next:hover { background: var(--text-primary); color: var(--accent-lime); }
.nav-btn.home {
  color: var(--text-primary); background: var(--white);
  border: 2px solid var(--border);
}
.nav-btn.home:hover { background: var(--text-primary); color: var(--white); }
.nav-btn:active { transform: translateY(1px); }

.keyboard-hint {
  text-align: center; margin-top: 12px;
  font-size: 0.75rem; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.04em; font-weight: 700;
}

/* ─── Footer ─── */
.site-footer {
  text-align: center; padding: 28px 24px;
  color: var(--warm-gray); font-size: 0.78rem;
  border-top: 4px solid var(--level-accent); margin-top: 48px;
  background: var(--text-primary);
  text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;
  font-family: 'Source Sans 3', sans-serif;
}

/* ─── Landing Page ─── */
.landing-hero {
  padding: 60px 0 40px;
  border-bottom: 4px solid var(--border);
  margin-bottom: 0;
}
.landing-hero .system-tag {
  display: inline-block; background: var(--accent-lime); color: #000;
  padding: 4px 14px; font-family: 'Source Sans 3', sans-serif;
  font-size: 0.75rem; font-weight: 900; letter-spacing: 0.2em;
  text-transform: uppercase; margin-bottom: 20px;
}
.landing-hero h1 {
  font-size: 5rem; line-height: 0.9; margin-bottom: 24px;
  letter-spacing: 0.02em;
}
.landing-hero .tagline {
  font-size: 1.15rem; color: var(--text-secondary);
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
  border-left: 4px solid var(--primary-olive); padding-left: 16px;
  max-width: 600px; line-height: 1.5;
}

.landing-status-bar {
  background: var(--text-primary); color: var(--white);
  padding: 24px; margin-bottom: 0;
  display: flex; flex-wrap: wrap; align-items: center;
  justify-content: space-between; gap: 20px;
  border-bottom: 4px solid var(--primary-olive);
}
.landing-status-bar .status-group {
  display: flex; align-items: center; gap: 24px;
}
.landing-status-bar .status-item {
  display: flex; flex-direction: column;
}
.landing-status-bar .status-label {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.2em;
  color: var(--accent-lime); font-weight: 900;
  text-transform: uppercase;
}
.landing-status-bar .status-value {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; letter-spacing: 0.04em;
}
.landing-status-bar .divider {
  width: 1px; height: 40px; background: #333;
}
.landing-cta-btn {
  display: inline-block; padding: 14px 32px;
  background: var(--accent-lime); color: #000;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.85rem; font-weight: 900;
  letter-spacing: 0.15em; text-transform: uppercase;
  text-decoration: none; border: 2px solid var(--accent-lime);
}
.landing-cta-btn:hover {
  background: #fff; color: #000; border-color: #fff;
}
.landing-cta-btn:active { transform: translateY(1px); }

.landing-section {
  padding: 48px 0; border-bottom: 4px solid var(--border);
}
.landing-section-header {
  display: flex; align-items: baseline; justify-content: space-between;
  border-bottom: 3px solid var(--border); padding-bottom: 12px;
  margin-bottom: 32px;
}
.landing-section-header h2 {
  font-size: 2.4rem; border: none; padding: 0; margin: 0;
}
.landing-section-header .version-tag {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.75rem; font-weight: 700; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.08em;
}

.landing-outcomes {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.landing-outcome {
  background: var(--white); border: 2px solid var(--border);
  padding: 24px;
}
.landing-outcome .outcome-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem; color: var(--cream-darker);
  line-height: 1; margin-bottom: 8px;
  opacity: 0.4;
}
.landing-outcome h3 {
  font-size: 1.1rem; margin-bottom: 8px;
  border: none; letter-spacing: 0.04em;
}
.landing-outcome p {
  font-size: 0.88rem; color: var(--text-secondary);
  line-height: 1.5;
}

.landing-levels {
  display: grid; gap: 12px;
}
.landing-level {
  display: flex; align-items: stretch;
  border: 2px solid var(--border); background: var(--white);
  overflow: hidden;
}
.landing-level .level-num {
  display: flex; align-items: center; justify-content: center;
  min-width: 80px; padding: 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem; color: #fff; letter-spacing: 0.04em;
}
.landing-level .level-body {
  flex: 1; padding: 20px 24px;
  border-left: 4px solid var(--border);
}
.landing-level .level-body h3 {
  font-size: 1.1rem; margin: 0 0 4px; border: none;
}
.landing-level .level-body p {
  font-size: 0.85rem; color: var(--text-secondary);
  margin: 0 0 6px;
}
.landing-level .level-body .module-count {
  font-size: 0.72rem; color: var(--text-muted);
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em;
}

.landing-audience {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.landing-audience-card {
  border: 2px solid var(--border); padding: 24px;
  background: var(--white);
}
.landing-audience-card h3 {
  font-size: 1rem; margin-bottom: 12px; border: none;
}
.landing-audience-card ul {
  list-style: none; padding: 0;
}
.landing-audience-card li {
  padding: 4px 0; font-size: 0.88rem;
  color: var(--text-secondary); font-weight: 600;
  border-bottom: 1px solid var(--cream-darker);
}
.landing-audience-card li:last-child { border-bottom: none; }
.landing-audience-card li::before {
  content: '//'; margin-right: 8px;
  color: var(--accent-lime); font-weight: 900;
}

.landing-bottom-cta {
  padding: 48px 0; text-align: center;
  border-bottom: 4px solid var(--border);
}
.landing-bottom-cta h2 {
  font-size: 3rem; margin-bottom: 16px;
  border: none; padding: 0;
}
.landing-bottom-cta p {
  color: var(--text-secondary); font-size: 1rem;
  font-weight: 600; margin-bottom: 28px;
  text-transform: uppercase; letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .landing-hero h1 { font-size: 2.8rem; }
  .landing-status-bar { flex-direction: column; align-items: flex-start; }
  .landing-status-bar .divider { width: 100%; height: 1px; }
  .landing-audience { grid-template-columns: 1fr; }
  .landing-section-header h2 { font-size: 1.8rem; }
  .landing-outcomes { grid-template-columns: 1fr; }
  .landing-level .level-num { min-width: 60px; font-size: 1.5rem; }
}

/* ─── Print ─── */
@media print {
  .site-header, .nav-footer, .site-footer, .toc-sidebar, .toc-mobile,
  .copy-btn, .reading-progress, .mark-complete-section, .keyboard-hint,
  .dark-toggle, .mobile-menu-btn, .mobile-drawer-overlay { display: none !important; }
  .content { padding: 0; }
  .page-container { max-width: 100%; padding: 0; }
  .page-wrapper { display: block; }
  body { font-size: 12pt; background-image: none; }
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .toc-sidebar { display: none; }
  .toc-mobile { display: block; }
}

@media (max-width: 768px) {
  .page-container { padding: calc(var(--header-h) + 20px) 16px 60px; }
  .hero h1 { font-size: 2.4rem; }
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
        btn.textContent = 'Copied! Use Ctrl+V to paste';
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
// Note: marked v15 passes raw Markdown text, not pre-parsed HTML.
// We parse the inner text ourselves and match against both raw and parsed forms.
renderer.blockquote = function({ text }) {
  const raw = text;
  const inner = marked.parse(raw);
  let calloutClass = '';
  let icon = '';

  // Match against raw Markdown (** patterns) and parsed HTML (<strong> patterns)
  if (/\*\*Tip:?\*\*/i.test(raw) || /<strong>Tip:?<\/strong>/i.test(inner) ||
      /Your prompts are working well when/i.test(raw) ||
      /\*\*Pro tip/i.test(raw) || /\*\*Best practice/i.test(raw)) {
    calloutClass = 'callout callout-tip';
    icon = '<span class="callout-icon">\u2728</span>';
  } else if (/\*\*Reference:?\*\*/i.test(raw) || /<strong>Reference:?<\/strong>/i.test(inner) ||
             /Using.*sample-files/i.test(raw) ||
             /\*\*File:?\*\*/i.test(raw) || /\*\*Resource/i.test(raw)) {
    calloutClass = 'callout callout-reference';
    icon = '<span class="callout-icon">\uD83D\uDCC1</span>';
  } else if (/\*\*Warning:?\*\*/i.test(raw) || /<strong>Warning:?<\/strong>/i.test(inner) ||
             /When this doesn.t work/i.test(raw) ||
             /\*\*Caution/i.test(raw) || /\*\*Important/i.test(raw) ||
             /\*\*Note:?\*\*/i.test(raw)) {
    calloutClass = 'callout callout-warning';
    icon = '<span class="callout-icon">\u26A0\uFE0F</span>';
  } else if (/\*\*Try this/i.test(raw) || /\*\*Experiment/i.test(raw) ||
             /\*\*Challenge/i.test(raw)) {
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
  let html = '<button class="mobile-drawer-close">[CLOSE]</button>\n';
  html += '<h4 style="margin-top:0">Course Modules</h4>';
  for (const level of levels) {
    const color = levelColors[level.id];
    html += `<h4><span class="level-color-dot" style="background:${color.accent}"></span>Level ${level.id}: ${escapeHtml(level.title)}</h4>`;
    for (const mod of level.modules) {
      html += `<a href="${moduleFilename(mod)}">${mod.id} ${escapeHtml(mod.title)}</a>`;
    }
  }
  html += '<h4>Resources</h4>';
  html += '<a href="course.html#resources">View All Resources</a>';
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
      <a href="index.html" class="header-brand">COPILOT_SM_COURSE</a>
      <div class="header-right">
        ${isIndex ? '' : '<a href="course.html" class="header-home">COURSE_HOME</a>'}
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
    COPILOT_FOR_AI-ENABLED_SCRUM_MASTERS &middot; V2.0 &middot; INTERNAL_TRAINING_MATERIAL
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

// ─── Build Landing Page ─────────────────────────────────────────────────────

function buildLandingPage() {
  const totalModules = allModules.length;

  // Build levels overview
  let levelsHtml = '';
  for (const level of levels) {
    const color = levelColors[level.id];
    const moduleCount = level.modules.length;
    const totalDuration = level.modules.reduce((sum, m) => {
      const mins = parseInt(m.duration) || 0;
      return sum + mins;
    }, 0);
    const hours = Math.floor(totalDuration / 60);
    const mins = totalDuration % 60;
    const durationStr = hours > 0 ? `${hours}H ${mins}MIN` : `${mins} MIN`;

    levelsHtml += `
    <div class="landing-level">
      <div class="level-num" style="background:${color.accent}">L${level.id}</div>
      <div class="level-body">
        <h3>${escapeHtml(level.title)}</h3>
        <p>${escapeHtml(level.description)}</p>
        <span class="module-count">${moduleCount} MODULES &middot; ${durationStr}</span>
      </div>
    </div>`;
  }

  const body = `
    <div class="landing-hero">
      <div class="system-tag">TRAINING_PROGRAM // V2.0</div>
      <h1>MICROSOFT COPILOT FOR<br>SCRUM MASTERS</h1>
      <p class="tagline">
        Transform from a traditional Scrum Master into an AI-native leader.
        27 modules across 6 levels &mdash; from first prompt to fully automated practice.
      </p>
    </div>

    <div class="landing-status-bar">
      <div class="status-group">
        <div class="status-item">
          <span class="status-label">FORMAT</span>
          <span class="status-value">SELF_PACED</span>
        </div>
        <div class="divider"></div>
        <div class="status-item">
          <span class="status-label">MODULES</span>
          <span class="status-value">${totalModules}</span>
        </div>
        <div class="divider"></div>
        <div class="status-item">
          <span class="status-label">DURATION</span>
          <span class="status-value">~13 HOURS</span>
        </div>
        <div class="divider"></div>
        <div class="status-item">
          <span class="status-label">LEVELS</span>
          <span class="status-value">6</span>
        </div>
      </div>
      <a href="course.html" class="landing-cta-btn">ENTER_COURSE</a>
    </div>

    <div class="landing-section">
      <div class="landing-section-header">
        <h2>WHAT_YOU_WILL_LEARN</h2>
        <span class="version-tag">CORE_OUTCOMES</span>
      </div>
      <div class="landing-outcomes">
        <div class="landing-outcome">
          <div class="outcome-number">01</div>
          <h3>AI-POWERED CEREMONIES</h3>
          <p>Prepare, facilitate, and process sprint ceremonies with Copilot as your thinking partner. Generate agendas, handle difficult situations, and extract insights automatically.</p>
        </div>
        <div class="landing-outcome">
          <div class="outcome-number">02</div>
          <h3>PREDICTIVE INTELLIGENCE</h3>
          <p>Build early warning systems from team data. Detect sprint risks before they materialize. Move from reactive firefighting to proactive intervention.</p>
        </div>
        <div class="landing-outcome">
          <div class="outcome-number">03</div>
          <h3>MULTI-PERSONA PROMPTING</h3>
          <p>Create developer, PO, and stakeholder personas to get multi-perspective feedback. Build a reusable prompt library for coaching conversations and conflict resolution.</p>
        </div>
        <div class="landing-outcome">
          <div class="outcome-number">04</div>
          <h3>DATA-DRIVEN DECISIONS</h3>
          <p>Track the 10 metrics that actually matter. Build live KPI dashboards. Quantify and communicate your impact to executives in their language.</p>
        </div>
        <div class="landing-outcome">
          <div class="outcome-number">05</div>
          <h3>SCALING & INFLUENCE</h3>
          <p>Coordinate across multiple teams. Navigate organizational politics. Build executive-ready business cases for agile transformation without authority.</p>
        </div>
        <div class="landing-outcome">
          <div class="outcome-number">06</div>
          <h3>AI AGENTS & AUTOMATION</h3>
          <p>Design agent workflows for repetitive tasks. Automate the weekly SM rhythm. Build your personal AI-augmented operating system for sustainable practice.</p>
        </div>
      </div>
    </div>

    <div class="landing-section">
      <div class="landing-section-header">
        <h2>COURSE_ARCHITECTURE</h2>
        <span class="version-tag">6_LEVELS</span>
      </div>
      <div class="landing-levels">
        ${levelsHtml}
      </div>
    </div>

    <div class="landing-section">
      <div class="landing-section-header">
        <h2>WHO_THIS_IS_FOR</h2>
        <span class="version-tag">TARGET_AUDIENCE</span>
      </div>
      <div class="landing-audience">
        <div class="landing-audience-card">
          <h3>IDEAL_PARTICIPANT</h3>
          <ul>
            <li>Scrum Masters seeking AI augmentation</li>
            <li>Agile Coaches exploring Copilot</li>
            <li>RTEs managing multiple teams</li>
            <li>Team leads in Scrum environments</li>
            <li>SM aspirants building modern skills</li>
          </ul>
        </div>
        <div class="landing-audience-card">
          <h3>PREREQUISITES</h3>
          <ul>
            <li>Basic Scrum framework understanding</li>
            <li>Microsoft 365 with Copilot license</li>
            <li>No prior AI/ML knowledge needed</li>
            <li>Access to Microsoft Teams & Outlook</li>
            <li>Willingness to experiment with AI</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="landing-section">
      <div class="landing-section-header">
        <h2>HANDS-ON_PRACTICE</h2>
        <span class="version-tag">METHODOLOGY</span>
      </div>
      <div class="landing-audience">
        <div class="landing-audience-card">
          <h3>FICTIONAL_TEAM_CONTEXT</h3>
          <ul>
            <li>Velocity Squad &mdash; 7-person team at Accenture</li>
            <li>Sprint 47 of the AKX project</li>
            <li>Real sprint data, metrics, and artifacts</li>
            <li>Authentic team dynamics and challenges</li>
            <li>Horizon Program for multi-team exercises</li>
          </ul>
        </div>
        <div class="landing-audience-card">
          <h3>WHAT_YOU_GET</h3>
          <ul>
            <li>78+ ready-to-use prompt templates</li>
            <li>Copy-paste exercises for every module</li>
            <li>Team personas for roleplay scenarios</li>
            <li>Sample files: metrics, ceremonies, health data</li>
            <li>Cheat sheets for daily SM workflows</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="landing-bottom-cta">
      <h2>READY_TO_BEGIN?</h2>
      <p>27 modules &middot; 6 levels &middot; ~13 hours &middot; self-paced</p>
      <a href="course.html" class="landing-cta-btn">ENTER_COURSE</a>
    </div>
  `;

  return htmlPage({ title: 'AI-Enabled Scrum Masters', bodyContent: body, isIndex: true });
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
      <p class="subtitle">FROM_PREDICTIVE_INTELLIGENCE // TO_ORGANIZATIONAL_IMPACT</p>
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
  navFooter += `<a href="course.html" class="nav-btn home">Home</a>`;
  if (next) {
    navFooter += `<a href="${moduleFilename(next)}" class="nav-btn next">${next.id} ${escapeHtml(next.title)} &rarr;</a>`;
  }
  navFooter += '</div>';
  navFooter += '<div class="keyboard-hint">&larr; &rarr; to navigate &middot; Esc for home</div>';

  const body = `
    <div class="module-header">
      <div class="breadcrumb">
        <a href="course.html">COURSE_HOME</a> // LEVEL_${level.id}: ${escapeHtml(level.title)} // MODULE_${mod.id}
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
        <a href="course.html">COURSE_HOME</a> // ${escapeHtml(sectionTitle)} // ${escapeHtml(categoryTitle)} // ${escapeHtml(file.title)}
      </div>
    </div>
    <div class="content">
      ${contentHtml}
    </div>
    <div class="nav-footer">
      <a href="course.html" class="nav-btn home">BACK_TO_COURSE</a>
    </div>
  `;

  return htmlPage({ title: file.title, bodyContent: body });
}

// ─── Experimental SPA Viewer ────────────────────────────────────────────────

function buildExperimentalViewer() {
  // Build modules data with embedded HTML content
  const modulesData = {};
  for (const level of levels) {
    for (const mod of level.modules) {
      const contentHtml = readMarkdown(mod.path);
      modulesData[mod.id] = {
        title: mod.title,
        duration: mod.duration,
        objectives: mod.objectives || [],
        levelId: level.id,
        levelTitle: level.title,
        content: contentHtml
      };
    }
  }

  // Build levels data (without content, just structure)
  const levelsData = levels.map(l => ({
    id: l.id,
    title: l.title,
    description: l.description,
    modules: l.modules.map(m => ({ id: m.id, title: m.title, duration: m.duration }))
  }));

  // Level colors for the UI
  const levelColorsData = {
    '1': { accent: '#0d9488', name: 'Teal' },
    '2': { accent: '#006495', name: 'Blue' },
    '3': { accent: '#d97706', name: 'Amber' },
    '4': { accent: '#16a34a', name: 'Green' },
    '5': { accent: '#732ee4', name: 'Purple' },
    '6': { accent: '#0891b2', name: 'Cyan' },
  };

  // Embed as JSON in the HTML
  const dataScript = `
    const COURSE_DATA = {
      modules: ${JSON.stringify(modulesData)},
      levels: ${JSON.stringify(levelsData)},
      levelColors: ${JSON.stringify(levelColorsData)},
      totalModules: ${allModules.length}
    };
  `;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Microsoft Copilot for Scrum Masters — Course Viewer</title>
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            "primary": "#006495",
            "primary-container": "#49a3e1",
            "primary-fixed": "#cbe6ff",
            "on-primary": "#ffffff",
            "secondary": "#944a00",
            "secondary-container": "#fd8a26",
            "secondary-fixed": "#ffdcc6",
            "tertiary": "#732ee4",
            "tertiary-container": "#ad85ff",
            "surface": "#f7f9ff",
            "surface-container": "#eaeef5",
            "surface-container-low": "#f0f4fb",
            "surface-container-highest": "#dee3e9",
            "on-surface": "#171c21",
            "on-surface-variant": "#3f4850",
            "outline": "#707881",
            "outline-variant": "#bfc7d1",
            "background": "#f7f9ff",
          },
          fontFamily: {
            "headline": ["Plus Jakarta Sans", "sans-serif"],
            "body": ["Inter", "sans-serif"],
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; background: #f7f9ff; }

    /* Content typography */
    .module-content h1 { font-family: 'Plus Jakarta Sans'; font-size: 1.75rem; font-weight: 800; color: #171c21; margin: 2rem 0 1rem; }
    .module-content h2 { font-family: 'Plus Jakarta Sans'; font-size: 1.4rem; font-weight: 700; color: #006495; margin: 2rem 0 0.75rem; padding-bottom: 8px; border-bottom: 2px solid #dee3e9; }
    .module-content h3 { font-family: 'Plus Jakarta Sans'; font-size: 1.15rem; font-weight: 700; color: #171c21; margin: 1.5rem 0 0.5rem; }
    .module-content h4 { font-size: 0.95rem; font-weight: 600; color: #171c21; margin: 1.2rem 0 0.4rem; }
    .module-content p { margin: 0.75rem 0; color: #3f4850; line-height: 1.7; }
    .module-content a { color: #006495; text-decoration: underline; text-decoration-color: #cbe6ff; text-underline-offset: 2px; }
    .module-content a:hover { text-decoration-color: #006495; }
    .module-content strong { color: #171c21; }
    .module-content ul, .module-content ol { margin: 0.75rem 0; padding-left: 1.5rem; }
    .module-content li { margin: 0.3rem 0; color: #3f4850; }
    .module-content table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
    .module-content th { background: #f0f4fb; color: #171c21; font-weight: 600; text-align: left; padding: 10px 14px; border-bottom: 2px solid #dee3e9; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.03em; }
    .module-content td { padding: 10px 14px; border-bottom: 1px solid #eaeef5; color: #3f4850; }
    .module-content tr:hover td { background: #f7f9ff; }
    .module-content hr { border: none; border-top: 2px solid #eaeef5; margin: 2rem 0; }
    .module-content img { max-width: 100%; border-radius: 12px; margin: 1rem 0; }
    .module-content code { background: #f0f4fb; color: #006495; padding: 2px 6px; border-radius: 4px; font-size: 0.87em; }
    .module-content pre { background: #171c21; color: #90cdff; padding: 18px 20px; border-radius: 12px; overflow-x: auto; font-size: 0.87rem; line-height: 1.55; }
    .module-content pre code { background: none; color: inherit; padding: 0; }
    .module-content blockquote { border-left: 3px solid #006495; background: #f0f4fb; padding: 12px 18px; margin: 1rem 0; border-radius: 0 8px 8px 0; }

    /* Callouts */
    .module-content .callout { padding: 14px 18px; margin: 1rem 0; border-radius: 12px; border-left: 4px solid; }
    .module-content .callout-tip { background: #f0fdf4; border-left-color: #16a34a; }
    .module-content .callout-tip p { color: #15803d; }
    .module-content .callout-warning { background: #fefce8; border-left-color: #ca8a04; }
    .module-content .callout-warning p { color: #854d0e; }
    .module-content .callout-reference { background: #eff6ff; border-left-color: #2563eb; }
    .module-content .callout-reference p { color: #1e40af; }
    .module-content .callout-try { background: #faf5ff; border-left-color: #9333ea; }
    .module-content .callout-try p { color: #6b21a8; }

    /* Exercise cards */
    .module-content .exercise-card { background: #f0f4fb; border: 1px solid #dee3e9; border-left: 4px solid #006495; border-radius: 12px; padding: 20px 24px; margin: 1.5rem 0; }
    .module-content .exercise-badge { display: inline-block; background: #006495; color: white; font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }

    /* Code block wrapper */
    .module-content .code-block-wrapper { position: relative; margin: 1rem 0; }
    .module-content .copy-btn { position: absolute; top: 8px; right: 8px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #90cdff; border-radius: 8px; padding: 4px 12px; font-size: 0.75rem; cursor: pointer; opacity: 0; transition: opacity 0.2s; font-family: 'Inter', sans-serif; }
    .module-content .code-block-wrapper:hover .copy-btn { opacity: 1; }
    .module-content .copy-btn:hover { background: rgba(255,255,255,0.2); }
    .module-content .copy-btn.copied { color: #4ade80; border-color: #4ade80; }

    /* Smooth transitions */
    .level-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .level-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
    .module-list-item { transition: background 0.15s ease; }
    .module-list-item:hover { background: #f0f4fb; }

    /* Progress ring animation */
    .progress-ring-circle { transition: stroke-dashoffset 0.6s ease; }

    /* Material symbols sizing */
    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400; vertical-align: middle; }
  </style>
</head>
<body class="bg-background text-on-surface min-h-screen">

  <!-- Navigation bar -->
  <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg flex justify-between items-center px-4 sm:px-8 h-16 shadow-sm">
    <div class="flex items-center gap-4 sm:gap-8">
      <span class="text-lg sm:text-xl font-bold bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent font-headline tracking-tight cursor-pointer" onclick="showDashboard()">
        Copilot SM Course
      </span>
      <a href="course.html" class="hidden sm:inline text-sm text-on-surface-variant hover:text-primary transition-colors font-body">
        Static Version
      </a>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full" id="nav-progress">0/27</span>
    </div>
  </nav>

  <!-- Dashboard View -->
  <main id="dashboard-view" class="pt-20 pb-12 px-4 sm:px-8 max-w-7xl mx-auto">
    <header class="mb-10">
      <h1 class="text-3xl sm:text-4xl font-extrabold font-headline text-on-surface tracking-tight mb-2">
        Microsoft Copilot for Scrum Masters
      </h1>
      <p class="text-on-surface-variant text-lg">27 modules across 6 levels &mdash; your AI-enabled SM journey</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Continue Learning Hero Card -->
      <div id="hero-card" class="md:col-span-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 p-6 sm:p-8"></div>

      <!-- Stats Card -->
      <div id="stats-card" class="md:col-span-4 bg-white rounded-2xl shadow-sm border border-outline-variant/30 p-6 flex flex-col items-center justify-center"></div>

      <!-- Level Cards Section -->
      <div id="level-cards" class="md:col-span-12"></div>

      <!-- Recent Completions -->
      <div id="recent-completions" class="md:col-span-12"></div>
    </div>
  </main>

  <!-- Module View -->
  <main id="module-view" class="hidden pt-20 pb-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-8">
      <div id="module-breadcrumb" class="mb-4"></div>
      <div id="module-header" class="mb-8"></div>
      <div id="module-content" class="module-content"></div>
      <div id="module-complete-btn" class="my-8"></div>
      <div id="module-nav" class="flex justify-between items-center py-6 border-t border-outline-variant/30"></div>
    </div>
  </main>

  <script>
    ${dataScript}
  </script>
  <script>
    // ─── State ──────────────────────────────────────────────────────────────
    let currentView = 'dashboard';
    let currentModuleId = null;
    let expandedLevels = new Set();

    // ─── Progress (localStorage) ────────────────────────────────────────────
    const STORAGE_KEY = 'copilot-sm-progress';

    function getProgress() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
      catch { return {}; }
    }

    function setProgress(moduleId, completed) {
      const prog = getProgress();
      if (completed) {
        prog[moduleId] = { completed: true, timestamp: Date.now() };
      } else {
        delete prog[moduleId];
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
    }

    function isCompleted(moduleId) {
      const prog = getProgress();
      return !!(prog[moduleId] && prog[moduleId].completed);
    }

    function getCompletedCount() {
      return Object.values(getProgress()).filter(v => v && v.completed).length;
    }

    function getCompletionTimestamp(moduleId) {
      const prog = getProgress();
      return prog[moduleId] ? prog[moduleId].timestamp : null;
    }

    // ─── Ordered module list ────────────────────────────────────────────────
    const orderedModuleIds = COURSE_DATA.levels.flatMap(l => l.modules.map(m => m.id));

    function getModuleIndex(moduleId) {
      return orderedModuleIds.indexOf(moduleId);
    }

    function getNextModule() {
      for (const id of orderedModuleIds) {
        if (!isCompleted(id)) return id;
      }
      return null;
    }

    function getPrevModuleId(moduleId) {
      const idx = getModuleIndex(moduleId);
      return idx > 0 ? orderedModuleIds[idx - 1] : null;
    }

    function getNextModuleId(moduleId) {
      const idx = getModuleIndex(moduleId);
      return idx < orderedModuleIds.length - 1 ? orderedModuleIds[idx + 1] : null;
    }

    // ─── View Switching ─────────────────────────────────────────────────────
    function showDashboard() {
      currentView = 'dashboard';
      currentModuleId = null;
      document.getElementById('dashboard-view').classList.remove('hidden');
      document.getElementById('module-view').classList.add('hidden');
      renderDashboard();
      window.scrollTo(0, 0);
      history.pushState({ view: 'dashboard' }, '', '#');
    }

    function showModule(moduleId) {
      if (!COURSE_DATA.modules[moduleId]) return;
      currentView = 'module';
      currentModuleId = moduleId;
      document.getElementById('dashboard-view').classList.add('hidden');
      document.getElementById('module-view').classList.remove('hidden');
      renderModule(moduleId);
      window.scrollTo(0, 0);
      history.pushState({ view: 'module', moduleId }, '', '#module-' + moduleId);
    }

    // ─── Dashboard Rendering ────────────────────────────────────────────────
    function renderDashboard() {
      updateNavProgress();
      renderHeroCard();
      renderStatsCard();
      renderLevelCards();
      renderRecentCompletions();
    }

    function updateNavProgress() {
      document.getElementById('nav-progress').textContent = getCompletedCount() + '/' + COURSE_DATA.totalModules;
    }

    function renderHeroCard() {
      const el = document.getElementById('hero-card');
      const nextId = getNextModule();
      const completed = getCompletedCount();

      if (!nextId || completed === COURSE_DATA.totalModules) {
        el.innerHTML = '<div class="flex items-center gap-4">' +
          '<span class="material-symbols-outlined text-4xl text-green-600">emoji_events</span>' +
          '<div>' +
            '<h2 class="text-2xl font-bold font-headline text-on-surface">Course Complete!</h2>' +
            '<p class="text-on-surface-variant mt-1">Congratulations! You have completed all 27 modules.</p>' +
          '</div>' +
        '</div>';
        return;
      }

      const mod = COURSE_DATA.modules[nextId];
      const levelColor = COURSE_DATA.levelColors[mod.levelId].accent;
      const pct = Math.round((completed / COURSE_DATA.totalModules) * 100);

      el.innerHTML =
        '<p class="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Continue Learning</p>' +
        '<h2 class="text-xl sm:text-2xl font-bold font-headline text-on-surface mb-2">' +
          'Module ' + nextId + ': ' + mod.title +
        '</h2>' +
        '<div class="flex flex-wrap items-center gap-2 mb-4">' +
          '<span class="text-xs font-bold px-3 py-1 rounded-full text-white" style="background:' + levelColor + '">Level ' + mod.levelId + ': ' + mod.levelTitle + '</span>' +
          '<span class="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>' + mod.duration + '</span>' +
        '</div>' +
        '<div class="w-full bg-surface-container rounded-full h-2 mb-4">' +
          '<div class="h-2 rounded-full bg-gradient-to-r from-primary to-primary-container" style="width:' + pct + '%"></div>' +
        '</div>' +
        '<div class="flex items-center justify-between">' +
          '<span class="text-sm text-on-surface-variant">' + pct + '% complete (' + completed + '/' + COURSE_DATA.totalModules + ' modules)</span>' +
          '<button onclick="showModule(\\'' + nextId + '\\')" class="px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2">' +
            '<span class="material-symbols-outlined text-lg">play_arrow</span>Resume' +
          '</button>' +
        '</div>';
    }

    function renderStatsCard() {
      const el = document.getElementById('stats-card');
      const completed = getCompletedCount();
      const total = COURSE_DATA.totalModules;
      const pct = total > 0 ? completed / total : 0;
      const circumference = 2 * Math.PI * 40;
      const offset = circumference * (1 - pct);

      // Estimate remaining time
      let remainingMinutes = 0;
      for (const id of orderedModuleIds) {
        if (!isCompleted(id)) {
          const dur = COURSE_DATA.modules[id].duration;
          const m = dur.match(/(\\d+)/);
          if (m) remainingMinutes += parseInt(m[1]);
        }
      }
      const hours = Math.floor(remainingMinutes / 60);
      const mins = remainingMinutes % 60;
      const timeStr = hours > 0 ? hours + 'h ' + mins + 'm' : mins + 'm';

      el.innerHTML =
        '<svg width="96" height="96" class="mb-3">' +
          '<circle cx="48" cy="48" r="40" fill="none" stroke="#eaeef5" stroke-width="8"/>' +
          '<circle class="progress-ring-circle" cx="48" cy="48" r="40" fill="none" stroke="#006495" stroke-width="8" stroke-linecap="round" ' +
            'stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '" transform="rotate(-90 48 48)"/>' +
          '<text x="48" y="44" text-anchor="middle" font-size="18" font-weight="700" fill="#171c21" font-family="Plus Jakarta Sans">' + Math.round(pct * 100) + '%</text>' +
          '<text x="48" y="58" text-anchor="middle" font-size="10" fill="#707881" font-family="Inter">done</text>' +
        '</svg>' +
        '<p class="text-sm font-semibold text-on-surface">' + completed + ' of ' + total + ' modules</p>' +
        '<p class="text-xs text-on-surface-variant mt-1">' + (remainingMinutes > 0 ? timeStr + ' remaining' : 'All done!') + '</p>';
    }

    function renderLevelCards() {
      const el = document.getElementById('level-cards');
      let html = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">';

      for (const level of COURSE_DATA.levels) {
        const color = COURSE_DATA.levelColors[level.id].accent;
        const levelCompleted = level.modules.filter(m => isCompleted(m.id)).length;
        const levelTotal = level.modules.length;
        const levelPct = levelTotal > 0 ? Math.round((levelCompleted / levelTotal) * 100) : 0;
        const isExpanded = expandedLevels.has(level.id);

        // Compute total duration for level
        let totalMins = 0;
        for (const m of level.modules) {
          const dur = COURSE_DATA.modules[m.id].duration;
          const match = dur.match(/(\\d+)/);
          if (match) totalMins += parseInt(match[1]);
        }

        html += '<div class="level-card bg-white rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden cursor-pointer" onclick="toggleLevel(\\'' + level.id + '\\')">' +
          '<div class="p-5">' +
            '<div class="flex items-center gap-3 mb-2">' +
              '<span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" style="background:' + color + '">Level ' + level.id + '</span>' +
              '<span class="material-symbols-outlined text-on-surface-variant text-lg" style="transition:transform 0.2s;transform:rotate(' + (isExpanded ? '180' : '0') + 'deg)">expand_more</span>' +
            '</div>' +
            '<h3 class="text-lg font-bold font-headline text-on-surface mb-1">' + level.title + '</h3>' +
            '<p class="text-sm text-on-surface-variant mb-3">' + level.description + '</p>' +
            '<div class="flex items-center gap-3 text-xs text-on-surface-variant mb-3">' +
              '<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">menu_book</span>' + levelTotal + ' modules</span>' +
              '<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>' + totalMins + ' min</span>' +
            '</div>' +
            '<div class="w-full bg-surface-container rounded-full h-1.5">' +
              '<div class="h-1.5 rounded-full" style="width:' + levelPct + '%;background:' + color + '"></div>' +
            '</div>' +
            '<p class="text-xs text-on-surface-variant mt-1.5">' + levelCompleted + '/' + levelTotal + ' complete</p>' +
          '</div>';

        if (isExpanded) {
          html += '<div class="border-t border-outline-variant/30 bg-surface-container-low/50">';
          for (const mod of level.modules) {
            const done = isCompleted(mod.id);
            html += '<div class="module-list-item flex items-center gap-3 px-5 py-3 cursor-pointer border-b border-outline-variant/20 last:border-b-0" onclick="event.stopPropagation();showModule(\\'' + mod.id + '\\')">' +
              '<span class="material-symbols-outlined text-lg" style="color:' + (done ? color : '#bfc7d1') + ';font-variation-settings:\\'' + (done ? 'FILL\\' 1' : 'FILL\\' 0') + '">' + (done ? 'check_circle' : 'radio_button_unchecked') + '</span>' +
              '<div class="flex-1 min-w-0">' +
                '<p class="text-sm font-medium text-on-surface truncate">' + mod.id + ': ' + mod.title + '</p>' +
              '</div>' +
              '<span class="text-xs text-on-surface-variant whitespace-nowrap">' + mod.duration + '</span>' +
            '</div>';
          }
          html += '</div>';
        }

        html += '</div>';
      }

      html += '</div>';
      el.innerHTML = html;
    }

    function toggleLevel(levelId) {
      if (expandedLevels.has(levelId)) {
        expandedLevels.delete(levelId);
      } else {
        expandedLevels.add(levelId);
      }
      renderLevelCards();
    }

    function renderRecentCompletions() {
      const el = document.getElementById('recent-completions');
      const prog = getProgress();
      const completed = Object.entries(prog)
        .filter(([, v]) => v && v.completed && v.timestamp)
        .sort((a, b) => b[1].timestamp - a[1].timestamp)
        .slice(0, 3);

      if (completed.length === 0) {
        el.innerHTML = '';
        return;
      }

      let html = '<div class="bg-white rounded-2xl shadow-sm border border-outline-variant/30 p-6">' +
        '<h3 class="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-4">Recent Completions</h3>' +
        '<div class="space-y-3">';

      for (const [id, data] of completed) {
        const mod = COURSE_DATA.modules[id];
        if (!mod) continue;
        const color = COURSE_DATA.levelColors[mod.levelId].accent;
        const date = new Date(data.timestamp);
        const timeAgo = formatTimeAgo(date);

        html += '<div class="flex items-center gap-3 cursor-pointer module-list-item rounded-lg px-3 py-2 -mx-3" onclick="showModule(\\'' + id + '\\')">' +
          '<span class="material-symbols-outlined text-lg" style="color:' + color + ';font-variation-settings:\\'FILL\\' 1">check_circle</span>' +
          '<div class="flex-1 min-w-0">' +
            '<p class="text-sm font-medium text-on-surface truncate">' + id + ': ' + mod.title + '</p>' +
          '</div>' +
          '<span class="text-xs text-on-surface-variant whitespace-nowrap">' + timeAgo + '</span>' +
        '</div>';
      }

      html += '</div></div>';
      el.innerHTML = html;
    }

    function formatTimeAgo(date) {
      const now = Date.now();
      const diff = now - date.getTime();
      const mins = Math.floor(diff / 60000);
      if (mins < 1) return 'just now';
      if (mins < 60) return mins + 'm ago';
      const hours = Math.floor(mins / 60);
      if (hours < 24) return hours + 'h ago';
      const days = Math.floor(hours / 24);
      if (days < 7) return days + 'd ago';
      return date.toLocaleDateString();
    }

    // ─── Module Viewer ──────────────────────────────────────────────────────
    function renderModule(moduleId) {
      const mod = COURSE_DATA.modules[moduleId];
      if (!mod) return;
      const color = COURSE_DATA.levelColors[mod.levelId].accent;
      updateNavProgress();

      // Breadcrumb
      document.getElementById('module-breadcrumb').innerHTML =
        '<nav class="flex items-center gap-2 text-sm text-on-surface-variant font-body">' +
          '<span class="cursor-pointer hover:text-primary transition-colors" onclick="showDashboard()">Dashboard</span>' +
          '<span class="material-symbols-outlined text-xs">chevron_right</span>' +
          '<span>Level ' + mod.levelId + ': ' + mod.levelTitle + '</span>' +
          '<span class="material-symbols-outlined text-xs">chevron_right</span>' +
          '<span class="text-on-surface font-medium">Module ' + moduleId + '</span>' +
        '</nav>';

      // Header
      let objHtml = '';
      if (mod.objectives && mod.objectives.length > 0) {
        objHtml = '<div class="mt-4 bg-surface-container-low rounded-xl p-4">' +
          '<p class="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Learning Objectives</p>' +
          '<ul class="space-y-1">';
        for (const obj of mod.objectives) {
          objHtml += '<li class="flex items-start gap-2 text-sm text-on-surface-variant">' +
            '<span class="material-symbols-outlined text-sm text-primary mt-0.5">check</span>' + obj + '</li>';
        }
        objHtml += '</ul></div>';
      }

      document.getElementById('module-header').innerHTML =
        '<h1 class="text-2xl sm:text-3xl font-extrabold font-headline text-on-surface tracking-tight mb-3">' + mod.title + '</h1>' +
        '<div class="flex flex-wrap items-center gap-2 mb-2">' +
          '<span class="text-xs font-bold px-3 py-1 rounded-full text-white" style="background:' + color + '">Level ' + mod.levelId + '</span>' +
          '<span class="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>' + mod.duration + '</span>' +
        '</div>' +
        objHtml;

      // Content
      document.getElementById('module-content').innerHTML = mod.content;

      // Mark Complete button
      const done = isCompleted(moduleId);
      document.getElementById('module-complete-btn').innerHTML =
        '<button onclick="markComplete(\\'' + moduleId + '\\')" class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ' +
        (done
          ? 'bg-green-50 text-green-700 border-2 border-green-200 hover:bg-white'
          : 'bg-primary text-white hover:bg-primary/90') + '">' +
        '<span class="material-symbols-outlined text-lg">' + (done ? 'check_circle' : 'radio_button_unchecked') + '</span>' +
        (done ? 'Completed — Click to Undo' : 'Mark as Complete') +
        '</button>';

      // Prev/Next navigation
      const prevId = getPrevModuleId(moduleId);
      const nextId = getNextModuleId(moduleId);
      let navHtml = '';
      if (prevId) {
        navHtml += '<button onclick="showModule(\\'' + prevId + '\\')" class="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">' +
          '<span class="material-symbols-outlined text-lg">arrow_back</span>' +
          '<span class="hidden sm:inline">' + prevId + ': ' + COURSE_DATA.modules[prevId].title + '</span>' +
          '<span class="sm:hidden">Previous</span>' +
        '</button>';
      } else {
        navHtml += '<div></div>';
      }
      if (nextId) {
        navHtml += '<button onclick="showModule(\\'' + nextId + '\\')" class="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">' +
          '<span class="hidden sm:inline">' + nextId + ': ' + COURSE_DATA.modules[nextId].title + '</span>' +
          '<span class="sm:hidden">Next</span>' +
          '<span class="material-symbols-outlined text-lg">arrow_forward</span>' +
        '</button>';
      } else {
        navHtml += '<div></div>';
      }
      document.getElementById('module-nav').innerHTML = navHtml;

      // Init copy buttons after content is rendered
      initCopyButtons();
    }

    function markComplete(moduleId) {
      const done = isCompleted(moduleId);
      setProgress(moduleId, !done);
      renderModule(moduleId);
      updateNavProgress();
    }

    function initCopyButtons() {
      document.querySelectorAll('#module-content .copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const wrapper = this.closest('.code-block-wrapper');
          const code = wrapper ? wrapper.querySelector('code') : null;
          if (code) {
            navigator.clipboard.writeText(code.textContent).then(() => {
              this.textContent = 'Copied!';
              this.classList.add('copied');
              setTimeout(() => {
                this.textContent = 'Copy';
                this.classList.remove('copied');
              }, 2000);
            });
          }
        });
      });
    }

    // ─── History / Routing ──────────────────────────────────────────────────
    window.addEventListener('popstate', function(e) {
      if (e.state && e.state.view === 'module' && e.state.moduleId) {
        showModule(e.state.moduleId);
      } else {
        showDashboard();
      }
    });

    // ─── Init ───────────────────────────────────────────────────────────────
    (function init() {
      // Check hash for deep linking
      const hash = location.hash;
      if (hash && hash.startsWith('#module-')) {
        const moduleId = hash.replace('#module-', '');
        if (COURSE_DATA.modules[moduleId]) {
          showModule(moduleId);
          return;
        }
      }
      showDashboard();
    })();
  </script>
</body>
</html>`;

  return html;
}

// ─── Main Build ─────────────────────────────────────────────────────────────

function build() {
  console.log('Building static site for Copilot SM Course...\n');

  // Create output directory
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Build landing page
  const landingHtml = buildLandingPage();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), landingHtml);
  console.log('  index.html (landing)');

  // Build course listing
  const courseHtml = buildIndexPage();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'course.html'), courseHtml);
  console.log('  course.html');

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

  // Build experimental viewer
  const experimentalHtml = buildExperimentalViewer();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'experimental.html'), experimentalHtml);
  console.log('  experimental.html (dynamic SPA)');

  const totalFiles = 3 + moduleCount + resourceCount + testingCount;
  console.log(`\nDone! Generated ${totalFiles} HTML files in final-version-static-site/`);
  console.log(`  - 1 landing page`);
  console.log(`  - 1 course listing page`);
  console.log(`  - 1 experimental SPA viewer`);
  console.log(`  - ${moduleCount} module pages`);
  console.log(`  - ${resourceCount} resource pages`);
  console.log(`  - ${testingCount} testing strategy pages`);
  console.log(`\nOpen final-version-static-site/index.html in your browser to view the course.`);
}

build();
