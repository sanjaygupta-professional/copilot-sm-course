# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Microsoft Copilot for Scrum Masters** training course repository with two rendering paths:

1. **Course Content** - Markdown-based lesson modules, team context, sample files, and prompt library
2. **Static Site** (`build-static.js`) - Primary. Generates standalone HTML files in `final-version-static-site/` for GitHub Pages and offline use
3. **Course Viewer** (`viewer/`) - Secondary. React/TypeScript SPA for development and preview

The repository uses the **Velocity Squad at Accenture** as a fictional team context throughout all exercises.

## Development Commands

### Static Site (Primary — deployed to GitHub Pages)

```bash
# Install dependencies (root — only `marked`)
npm ci

# Build static site — generates ~106 HTML files in final-version-static-site/
node build-static.js

# Open directly in browser (works with file:// protocol)
open final-version-static-site/index.html
```

### React SPA (Secondary — for development/preview)

```bash
cd viewer

npm ci
npm run dev          # Start dev server (copies content automatically)
npm run build        # Production build → viewer/dist/
npm run preview      # Preview production build
npm run copy-content # Copy course content only
```

## Testing Content Changes

When modifying course content (markdown files in `lesson-modules/`, `team-context/`, etc.):

1. Run `node build-static.js` to regenerate the static site
2. For the React SPA, re-run `npm run copy-content` in the `viewer/` directory
3. Hot reload will NOT pick up content changes in either path — refresh the browser

## Architecture

### Two Rendering Paths

1. **Static site** (`build-static.js`) — Node.js script using `marked` to generate self-contained HTML files. All CSS and JS are inline (no external dependencies beyond Google Fonts). Features: copy-to-clipboard on code blocks, auto-generated TOC sidebar, reading progress bar, localStorage progress tracking, dark mode, level-specific accent colors, exercise cards, styled callouts, keyboard navigation, mobile drawer nav, print-optimized styles. Output: `final-version-static-site/`

2. **React SPA** (`viewer/`) — Vite + React 18 + TypeScript + Tailwind CSS. Content is fetched at runtime from `public/content/`. Uses HashRouter for GitHub Pages compatibility.

### Content Structure

Course content is organized in four top-level directories:

- **`lesson-modules/`** - 27 modules across 6 levels
- **`team-context/`** - Team overview, personas, challenges, working agreements for the Velocity Squad + Horizon Program
- **`prompt-library/`** - Persona prompts, templates, and cheat sheets
- **`sample-files/`** - Exercise materials (ceremony notes, impediments, metrics, team health, conflict scenarios, etc.)

Course structure is defined in three places (keep in sync):
- `course-structure.json` - Root metadata file
- `viewer/src/data/courseStructure.ts` - TypeScript data used by the React SPA
- `build-static.js` - Course data embedded in the static site generator (levels, modules, resources arrays)

### Static Site Generator (`build-static.js`)

The build script reads markdown files and generates HTML with embedded CSS (~800 lines) and JS (~200 lines).

**Level color system**: Each of the 6 levels has a distinct accent color applied via CSS custom properties:
- Level 1 (Foundation): Teal `#487265`
- Level 2 (Advanced SM): Deep Blue `#3B5998`
- Level 3 (Team Visuals): Warm Copper `#BC976A`
- Level 4 (Data-Driven): Forest Green `#2D6A4F`
- Level 5 (Scaling): Royal Purple `#6B4C9A`
- Level 6 (AI-Native): Electric Teal `#0891B2`

**Custom marked renderer** handles:
- Code blocks → wrapped with copy-to-clipboard buttons
- Blockquotes → detected as callouts (tip, warning, reference, try) by bold text patterns
- Headings → auto-ID for TOC anchors; `### Exercise N:` → exercise card styling
- File path references → auto-linked to resource pages (e.g., `sample-files/...` → `resource-*.html`)
- CSV files → rendered as HTML tables

### Viewer Application Architecture

**Component structure**:
- `App.tsx` - React Router setup with module and resource routes
- `components/Course/` - ModuleContent and ResourceContent components
- `components/Markdown/` - MarkdownRenderer with custom components
- `components/Layout/` - Header, Sidebar, MobileNav
- `components/UI/` - Badge, ProgressIndicator

**Key patterns**:
- **`useContent` hook** - Fetches markdown from `/content/` directory
- **`useProgress` hook** - localStorage-based module completion
- **Course navigation** - Helper functions in `courseStructure.ts`

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Installs root dependencies (`npm ci`)
2. Runs `node build-static.js` to generate static HTML files
3. Uploads `final-version-static-site/` as Pages artifact
4. Deploys to GitHub Pages

Changes to `main` branch automatically trigger deployment.

## Content Development Guidelines

When creating or modifying course modules:

1. **Module files** must be named `MODULE.md` and placed in the correct level directory
2. **Update all three** `course-structure.json`, `viewer/src/data/courseStructure.ts`, and `build-static.js` when adding/removing modules
3. **File references** in markdown should use relative paths from the content root (e.g., `sample-files/ceremony-notes/sprint-planning-raw.md`)
4. **Team context** should reference the Velocity Squad (7-person team, Sprint 47, AKX project at Accenture)

## Common Tasks

**Add a new module**:
1. Create module directory: `lesson-modules/{level}/{id}-{slug}/MODULE.md`
2. Add module entry to `course-structure.json`
3. Add module entry to `viewer/src/data/courseStructure.ts`
4. Add module entry to `build-static.js` (levels array)
5. Rebuild: `node build-static.js`

**Add a sample/resource file**:
1. Place file in appropriate subdirectory
2. Add to `resourceStructure` in `viewer/src/data/courseStructure.ts`
3. Add to `resources` array in `build-static.js`
4. Rebuild: `node build-static.js`
