# AU Student Profile

**Your Achievements. Your Evidence. Your Future.**

AU Student Profile is a front-end prototype for an SOE2103 Web Technologies and Requirements Engineering stakeholder workshop. It explores how students can organize achievements, attach evidence descriptions, receive simulated verification feedback, prepare recommendation evidence packs, and control sharing preferences.

## Run locally

```bash
npm install
npm run dev
```

Checks: `npm run lint` and `npm run build`.

## GitHub Pages

The Vite base path is configured for the repository project site, and [deploy.yml](./.github/workflows/deploy.yml) deploys `dist/` automatically on pushes to `main` or through manual `workflow_dispatch`.

Expected site URL: `https://xa-nxan.github.io/Student-portfolio-/`

The repository must have GitHub Pages configured with **Source: GitHub Actions**. If the workflow has not previously deployed, enable Pages in the repository settings and wait for the first Actions run to complete.

## Login and demonstration journeys

The initial screen is a login page. The current prototype uses a replaceable mock authentication service in [src/lib/mockAuth.ts](./src/lib/mockAuth.ts), with fictional accounts only. A six-digit numeric ID is accepted as a working `YYNNNN` assumption; the ID is not used to infer authorization. The account record resolves the role.

Demo accounts can be filled from the login page:

- Student / Alumni — `260482` / `StudentDemo!`
- Lecturer / Supervisor — `250731` / `LecturerDemo!`
- Career Services / Administrator — `240618` / `CareerDemo!`
- External Recipient — `990204` / `RecipientDemo!`

- Start as **Student / Alumni** on the dashboard.
- Add an achievement, save it as a draft, and submit it for review.
- Switch to **Lecturer / Supervisor**, open the review queue, and verify, reject, or request changes.
- Return to the student role to see the resulting status and feedback.
- Use Recommendations to select verified achievements and print the evidence pack.
- Use Privacy & Sharing to inspect audience-specific preview behavior.

These credentials are synthetic and are not AU or Acacia credentials. Sign out returns to the login page. No password is stored in localStorage/sessionStorage, and no session is persisted across refresh. The role is resolved by the mock account; there is no logged-in role selector. The external-recipient flow represents a fictional invitation/shared-portfolio scope and does not require an AU staff ID. No AU credentials, real records, files, or public share links are used. All state is in memory and can be restored with **Reset demo data**.

## Structure

- `src/App.tsx` — application shell, views, and prototype interactions.
- `src/types.ts` — core domain types.
- `src/data.ts` — synthetic seed data.
- `src/lib/workflow.ts` — guarded achievement state transitions.
- `docs/requirements/` — workshop-ready requirements and security notes.

Production implementation would require a trusted backend, approved identity integration, server-side authorization, secure sessions, protected evidence storage, audit controls, notifications, and stakeholder validation.
