# GitHub Project Board Issues

Create these as GitHub Issues and add them to the project board.

## Issue 1 — Project Setup
**Priority:** P0

Set up the Next.js App Router project with TypeScript and Tailwind CSS.

**Acceptance Criteria**
- Project runs locally.
- TypeScript is enabled.
- Tailwind CSS is working.
- ESLint is configured.
- `.gitignore` exists.

## Issue 2 — Formatting Standards
**Priority:** P0

Install and configure Prettier and eslint-config-prettier.

**Acceptance Criteria**
- `.prettierrc` exists.
- `npm run format` works.
- `npm run format:check` works.
- Team members can use the same formatting rules.

## Issue 3 — Home Page
**Priority:** P0

Create the responsive StudyCircle landing/groups page.

**Acceptance Criteria**
- Page has StudyCircle branding.
- Available groups are displayed.
- Layout works on mobile and desktop.
- Semantic HTML is used.

## Issue 4 — Study Group API
**Priority:** P0

Create CRUD API endpoints for study groups.

**Acceptance Criteria**
- GET groups works.
- GET one group works.
- POST creates a group.
- PUT updates a group.
- DELETE removes a group.
- Invalid requests return appropriate errors.

## Issue 5 — Create Study Group Form
**Priority:** P0

Build the UI for creating a study group.

**Acceptance Criteria**
- Required fields are validated.
- Form submits valid data.
- Success feedback is shown.
- Errors are understandable.

## Issue 6 — Group Details
**Priority:** P0

Create a group details page.

**Acceptance Criteria**
- Group name, course, description, creator, members, and meeting information are shown.
- A missing group produces a useful not-found state.
- Layout is responsive.

## Issue 7 — Join Group
**Priority:** P0

Allow authenticated users to join a study group.

**Acceptance Criteria**
- Join action is available to eligible users.
- A user cannot be added twice.
- Member count updates.
- API returns useful errors.

## Issue 8 — Authentication
**Priority:** P0

Implement sign-up/sign-in using the team's selected authentication solution.

**Acceptance Criteria**
- New users can register.
- Users can sign in.
- Protected actions require authentication.
- Validation messages are shown.

## Issue 9 — Edit Group
**Priority:** P1

Allow group creators to update their group information.

**Acceptance Criteria**
- Only the creator can edit.
- Changes persist.
- Validation is applied.

## Issue 10 — Delete Group
**Priority:** P1

Allow group creators to delete their group.

**Acceptance Criteria**
- Only the creator can delete.
- Confirmation is requested.
- Deleted groups are removed from listings.
