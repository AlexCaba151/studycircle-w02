# StudyCircle GitHub Copilot Instructions

## Project Overview

StudyCircle is a web application for university students to create, discover, join, and manage study groups for their courses.

The application should prioritize simplicity, accessibility, responsive design, and maintainable code.

## Technology Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- PostgreSQL
- Prisma ORM

## Next.js Guidelines

- Use the Next.js App Router.
- Use Server Components by default.
- Use Client Components only when interactivity, browser APIs, or client-side state requires them.
- Follow Next.js file-based routing conventions.
- Keep API routes under `app/api`.
- Use descriptive route and component names.

## TypeScript Guidelines

- Use TypeScript strict mode.
- Do not use `any`.
- Define explicit types or interfaces for application data.
- Prefer type-safe functions and component props.
- Keep functions focused and easy to understand.

## Tailwind CSS Guidelines

- Use Tailwind CSS utility classes for styling.
- Follow a mobile-first approach.
- Avoid unnecessary custom CSS.
- Use consistent spacing utilities.
- Reuse established design patterns for buttons, cards, forms, and navigation.

## Component Architecture

Reusable components should be created when the same UI or behavior appears in multiple locations.

Important reusable components include:

- Header
- Footer
- Navigation
- GroupCard
- GroupList
- SearchBar
- GroupForm
- Button
- Input

Keep components focused on a single responsibility.

## Routes

The planned application routes are:

- `/` — Home page
- `/login` — Login
- `/register` — Registration
- `/groups` — Study group listing
- `/groups/[id]` — Study group details
- `/groups/create` — Create a study group
- `/dashboard` — User dashboard

## Data Model

The primary entities are:

- User
- StudyGroup
- Membership

Relationships:

- One User can create many StudyGroups.
- One User can have many Membership records.
- One StudyGroup can have many Membership records.
- Membership connects Users and StudyGroups.

## Database

The planned database is PostgreSQL.

Prisma ORM will be used to interact with the database.

Database access should be kept separate from presentation components whenever practical.

## Design System

Primary color:

`#2563EB`

Primary dark:

`#1D4ED8`

Background:

`#F8FAFC`

Primary text:

`#0F172A`

Secondary text:

`#475569`

Surface:

`#FFFFFF`

Borders:

`#E2E8F0`

Typography:

`Arial, Helvetica, sans-serif`

The application should use consistent spacing and responsive Tailwind CSS utilities.

## Accessibility

- Use semantic HTML.
- Provide accessible labels for form controls.
- Buttons and links must have clear accessible names.
- Interactive elements must be keyboard accessible.
- Maintain appropriate color contrast.
- Images must include meaningful alternative text when applicable.

## Naming Conventions

- React components: PascalCase
- Functions: camelCase
- Variables: camelCase
- Constants: descriptive names
- Feature branches: `feature/<short-name>`
- Fix branches: `fix/<short-name>`

## Git Workflow

- `main` is the primary branch.
- Do not directly push feature work to `main`.
- Use feature branches.
- Create pull requests for changes.
- Review changes before merging.
- Keep commits focused and descriptive.

## Code Quality

Before completing a feature:

1. Run ESLint.
2. Run Prettier.
3. Test the feature locally.
4. Verify responsive behavior.
5. Verify accessibility.
6. Check that existing functionality still works.

## MVP Priorities

The initial MVP should prioritize:

1. Authentication
2. Study group discovery
3. Search and filtering
4. Create study group
5. View group details
6. Join a study group

Features such as chat, calendar integration, notifications, and attendance tracking are lower priority and should not be implemented until the MVP is stable.