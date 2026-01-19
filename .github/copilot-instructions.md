# Copilot Instructions for Portfolio Website

## Architecture Overview

This is a Next.js 16 portfolio website using the App Router, built for an iOS engineer. Key structure:

- **App Router**: Pages in `app/` directory with layout.tsx as root
- **Components**: Feature-based organization (`home/`, `projects/`, `shared/`) with shadcn/ui in `ui/`
- **Data Layer**: Static data in `lib/data/` with TypeScript interfaces (see `projects.ts` for example)
- **Styling**: Tailwind CSS v4 with custom utilities in `lib/utils.ts` (cn() function for class merging)

## Key Patterns

- **Data Flow**: Components import data directly from `lib/data/` files (e.g., `import { projects } from "@/lib/data/projects"`)
- **Dynamic Routes**: Use `generateStaticParams()` for static generation (see `app/projects/[slug]/page.tsx`)
- **Client Components**: Mark with `"use client"` directive when using hooks/state (e.g., `hero.tsx`)
- **Animations**: Framer Motion for complex animations, CSS for simple transitions
- **Icons**: Lucide React icons throughout (configured in `components.json`)

## Development Workflow

- **Package Manager**: Use `pnpm` (not npm/yarn)
- **Scripts**: `pnpm dev` for development, `pnpm build` for production build, `pnpm lint` for ESLint
- **TypeScript**: Strict mode enabled, paths configured with `@/*` aliases
- **Styling**: Tailwind with CSS variables for theming (see `app/globals.css`)

## Component Conventions

- **Props**: Use TypeScript interfaces for component props
- **Imports**: Group imports: React, external libs, internal components, then utils/data
- **Naming**: PascalCase for components, camelCase for props/functions
- **Structure**: Export default function, then types/interfaces if needed

## Data Management

- **Static Data**: All content in `lib/data/` as TypeScript objects/arrays
- **Project Details**: Use slug-based routing with `getProjectBySlug()` helper
- **Personalization**: Update `lib/data/personal.ts` for contact info, `home.ts` for skills

## Deployment

- **Platform**: Vercel (Analytics integrated)
- **Build Config**: `next.config.mjs` has TypeScript errors ignored and images unoptimized
- **Theme**: Dark mode default, toggle via `ThemeToggle` component

## Common Tasks

- **Add Project**: Update `lib/data/projects.ts`, add images to `public/`, create route if needed
- **Update Skills**: Modify `techStackCategories` in `lib/data/home.ts`
- **Add Section**: Create component in `components/home/`, import in `app/page.tsx`
- **Styling**: Use Tailwind classes with `cn()` for conditional styling

Reference: `components/home/hero.tsx` for animation patterns, `lib/data/projects.ts` for data structure.</content>
<parameter name="filePath">/Users/sachin/Documents/SachinP/portfolio/.github/copilot-instructions.md
