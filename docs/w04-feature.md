# W04 Feature: Study Group Creation

## Feature
Added the first version of the Study Group creation flow for StudyCircle.

## What it includes
- New `/groups/create` route.
- Form fields for group name, course, description, and meeting preference.
- Required field validation through the browser.
- Submission feedback for the user.
- Links between the home page, study groups directory, and create-group page.
- Responsive layout using the existing Tailwind design system.

## GitHub Issue
Closes #10 — Create Study Group Form

## Known limitation
The form currently handles the user interaction locally. Database persistence and authentication integration will be added in a later development phase.
