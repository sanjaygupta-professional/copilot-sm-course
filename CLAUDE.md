# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Microsoft Copilot for Scrum Masters** training course repository with two main components:

1. **Course Content** - Markdown-based lesson modules, team context, sample files, and prompt library
2. **Course Viewer** - React/TypeScript web application for browsing course content (deployed to GitHub Pages)

The repository uses the **Velocity Squad at Accenture** as a fictional team context throughout all exercises.

## Development Commands

All commands should be run from the `viewer/` directory:

```bash
cd viewer

# Install dependencies
npm ci

# Copy course content to public/content/ directory
npm run copy-content

# Start development server (runs copy-content automatically)
npm run dev

# Build for production (runs copy-content and TypeScript compilation)
npm run build

# Preview production build
npm run preview
```

## Testing Content Changes

When modifying course content (markdown files in `lesson-modules/`, `team-context/`, etc.):

1. Changes require re-running `npm run copy-content` in the `viewer/` directory
2. The dev server (`npm run dev`) automatically runs copy-content on startup
3. Hot reload will NOT pick up content changes - refresh the browser after copy-content completes

## Architecture

### Content Structure

Course content is organized in four top-level directories:

- **`lesson-modules/`** - 14 modules across 3 levels (Foundation, Advanced SM Workflows, Team Visuals)
- **`team-context/`** - Team overview, personas, challenges, working agreements for the Velocity Squad
- **`prompt-library/`** - Reusable persona prompts and templates
- **`sample-files/`** - Exercise materials (ceremony notes, impediments, metrics, team health data)

Course structure is defined **twice** (keep in sync):
- `course-structure.json` - Root metadata file
- `viewer/src/data/courseStructure.ts` - TypeScript data used by the viewer app

### Viewer Application Architecture

**Build-time content copying**: The `scripts/copy-content.js` script copies all course content directories into `viewer/public/content/` before the Vite build. This makes content available via HTTP fetch at runtime.

**Component structure**:
- `App.tsx` - React Router setup with module and resource routes
- `components/Course/` - ModuleContent and ResourceContent components that fetch and display content
- `components/Markdown/` - MarkdownRenderer with custom components for tables, code blocks
- `components/Layout/` - Header, Sidebar, MobileNav for navigation
- `components/UI/` - Reusable UI components (Badge, ProgressIndicator)

**Key patterns**:
- **`useContent` hook** (src/hooks/useContent.ts) - Fetches markdown content from `/content/` directory with loading/error states
- **`useProgress` hook** (src/hooks/useProgress.ts) - Manages module completion state in localStorage
- **Course navigation** - Helper functions in `courseStructure.ts` provide prev/next module logic, level lookup by module ID

**URL patterns**:
- `/module/:moduleId` - Displays a course module (e.g., `/module/1.3`)
- `/resource/*` - Displays team context, prompts, or sample files (e.g., `/resource/team-context/TEAM.md`)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Installs dependencies in `viewer/` directory
2. Runs `npm run copy-content` to populate content directory
3. Runs `npm run build` to create production build
4. Deploys `viewer/dist` to GitHub Pages

Changes to `main` branch automatically trigger deployment.

## Content Development Guidelines

When creating or modifying course modules:

1. **Module files** must be named `MODULE.md` and placed in the correct level directory
2. **Update both** `course-structure.json` and `viewer/src/data/courseStructure.ts` when adding/removing modules
3. **File references** in markdown should use relative paths from the content root (e.g., `sample-files/ceremony-notes/sprint-planning-raw.md`)
4. **Team context** should reference the Velocity Squad (7-person team, Sprint 47, AKX project at Accenture)

## Common Tasks

**Add a new module**:
1. Create module directory: `lesson-modules/{level}/{id}-{slug}/MODULE.md`
2. Add module entry to `course-structure.json`
3. Add module entry to `viewer/src/data/courseStructure.ts`
4. Rebuild viewer: `cd viewer && npm run build`

**Add a sample file**:
1. Place file in appropriate `sample-files/` subdirectory
2. If it should be navigable via UI, add to `resourceStructure` in `viewer/src/data/courseStructure.ts`
3. Content will be automatically copied during build

**Modify viewer styling**:
- Tailwind CSS classes are used throughout
- Configuration: `viewer/tailwind.config.js`
- Global styles: Check component files for inline Tailwind usage
