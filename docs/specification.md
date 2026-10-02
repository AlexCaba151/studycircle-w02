# StudyCircle Project Specification

## Project Title & Description

StudyCircle is a web application that helps university students create, discover, join, and manage study groups for their courses.

The MVP focuses on account creation, study-group discovery, group creation, joining groups, and basic group management.

## Purpose & Target Audience

- **Audience:** University students.
- **Purpose:** Make it easier for students to organize academic collaboration without relying on scattered messages or spreadsheets.
- **Problem:** Students often have difficulty finding classmates who want to study the same subject at compatible times.

## User Stories

1. As a student, I want to create an account so that I can use StudyCircle.
2. As a student, I want to browse study groups so that I can find a group for my course.
3. As a student, I want to search or filter groups so that I can find relevant groups quickly.
4. As a student, I want to create a study group so that classmates can join.
5. As a student, I want to view group details so that I can decide whether to join.
6. As a student, I want to join a group so that I can participate in study sessions.
7. As a group creator, I want to edit my group so that information stays current.
8. As a group creator, I want to delete my group so that obsolete groups can be removed.

## Acceptance Criteria

### Story 1: Create an account
- Given a new user, when valid required information is submitted, then an account is created.
- Given invalid or missing information, then validation messages are displayed.
- Password fields must not be displayed as plain text.

### Story 2: Browse groups
- Given a user opens the groups page, then available groups are displayed.
- Each group shows a name, course, description, and member count.
- If there are no groups, an empty-state message is displayed.

### Story 3: Search/filter groups
- Given a user enters a course or group name, matching groups are displayed.
- Search results update without requiring the user to manually inspect unrelated groups.

### Story 4: Create a group
- A signed-in user can submit a group name, course, description, and meeting preference.
- Required fields are validated.
- A successfully created group appears in the group list.

### Story 5: View group details
- Selecting a group opens a detail page.
- The page shows the group name, course, description, creator, members, and meeting information.

### Story 6: Join a group
- A signed-in user can select Join.
- The user is added once and cannot be duplicated as a member.
- The member count updates after joining.

### Story 7: Edit a group
- The creator can update editable group information.
- Updated information is displayed after saving.
- Unauthorized users cannot edit the group.

### Story 8: Delete a group
- The creator can delete their group.
- The application asks for confirmation before deletion.
- Deleted groups no longer appear in normal group listings.

## Technical Requirements

- Framework: Next.js with App Router.
- Language: TypeScript in strict mode.
- Styling: Tailwind CSS.
- Linting: ESLint.
- Formatting: Prettier with eslint-config-prettier.
- Data layer: PostgreSQL with Prisma ORM when database implementation begins.
- Authentication: A secure authentication solution selected by the team before implementation.
- Server components are the default; client components are used only when interactivity requires them.
- No use of TypeScript `any`.
- Accessible labels and semantic HTML should be used.
- Responsive layouts must support mobile, tablet, and desktop screens.

## Core API Endpoints

- `GET /api/groups`
- `GET /api/groups/:id`
- `POST /api/groups`
- `PUT /api/groups/:id`
- `DELETE /api/groups/:id`
- `POST /api/groups/:id/join`
- `GET /api/courses`
- `GET /api/hello`

## Suggested Data Model

### User
- id
- name
- email
- password/auth provider identifier
- createdAt

### StudyGroup
- id
- name
- course
- description
- meetingPreference
- creatorId
- createdAt
- updatedAt

### Membership
- id
- userId
- groupId
- joinedAt

## Implementation Priority

### P0 — MVP
- Project setup
- Authentication
- Browse groups
- Search/filter groups
- Create group
- View group
- Join group

### P1
- Edit group
- Delete group
- Member management
- Improved validation
- Empty/error states

### P2
- Group chat
- Calendar integration
- Notifications
- Attendance tracking

## Non-Functional Requirements

- Pages should be usable on common mobile and desktop screen sizes.
- Forms should provide clear validation and error messages.
- The application should use semantic HTML and accessible controls.
- API errors should return useful HTTP status codes and messages.
- Code should pass linting and formatting checks before merge.

## Team Collaboration Rules

- `main` is protected.
- No direct pushes to `main`.
- Work is completed on feature branches.
- Pull requests require at least one teammate review.
- PRs should describe the change and testing performed.
- Issues should reference acceptance criteria.
- Commit messages should be concise and descriptive.
