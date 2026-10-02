# StudyCircle Team Constitution

## 1. Technology
StudyCircle will use Next.js App Router, TypeScript, and Tailwind CSS.

## 2. TypeScript
- Strict mode is required.
- Avoid `any`.
- Prefer explicit interfaces/types for application data.
- Keep components and functions focused.

## 3. Next.js
- Use Server Components by default.
- Use Client Components only when state, event handlers, browser APIs, or other interactivity requires them.
- Use App Router conventions and file-based routing.
- Keep API routes organized under `app/api`.

## 4. Tailwind
- Prefer utility classes.
- Avoid custom CSS unless a requirement cannot reasonably be implemented with Tailwind.
- Use responsive utility classes for mobile-first layouts.

## 5. Accessibility
- Use semantic HTML.
- Every form control needs an accessible label.
- Interactive controls must be keyboard accessible.
- Images must have appropriate alternative text.

## 6. Testing and Quality
- Run linting before creating a pull request.
- Run formatting checks before merging.
- Test important user workflows.
- Verify responsive behavior before completing UI issues.

## 7. Naming
- React components use PascalCase.
- Variables and functions use camelCase.
- Constants use descriptive names.
- Feature branches use `feature/<short-name>`.
- Fix branches use `fix/<short-name>`.

## 8. Collaboration
- `main` is protected.
- All changes use pull requests.
- At least one teammate must review each PR.
- Review comments should identify the problem, impact, and suggested solution.
- Team members communicate blockers early.
