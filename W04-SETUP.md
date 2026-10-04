# StudyCircle W04 – Feature PR

## Feature implemented
Study Group Creation (`/groups/create`)

### Files changed/added
- `app/page.tsx` – updated home page with links to the study groups directory.
- `app/groups/page.tsx` – new Study Groups directory page.
- `app/groups/create/page.tsx` – new Study Group creation form.
- `app/components/GroupCard.tsx` – reusable study group card component.
- `docs/w04-feature.md` – feature summary for the PR.

## Put this into your existing local repository
Copy these files into your existing `C:\StudyCircle-W02-Team-Project` project, replacing the files with the same names and adding the new files.

## Git commands
Run these commands from your existing project folder:

```powershell
git checkout main
git pull origin main
git checkout -b feature/study-groups-page
npm install
npm run lint
npm run build
git add app/page.tsx app/groups/page.tsx app/components/GroupCard.tsx app/groups/create/page.tsx docs/w04-feature.md
git commit -m "Week 04 feature work: add study groups directory"
git push -u origin feature/study-groups-page
```

Then create a Pull Request on GitHub:
- Base: `main`
- Compare: `feature/study-groups-page`
- Title: `Add study groups directory`
- Leave the PR **OPEN**. Do not merge it.

## Suggested PR description

### What this PR does
Adds the Study Group creation flow for StudyCircle, including a new `/groups/create` route with fields for group name, course, description, and meeting preference. The home page and groups directory link users to the new form.

### GitHub issue
Closes #10

### Known limitations
Search and group actions are currently presentation-only. Database and authentication integration will be added in later work.
