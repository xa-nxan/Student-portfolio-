# AU Student Profile

**Your Achievements. Your Evidence. Your Future.**

AU Student Profile is a front-end prototype for an SOE2103 Web Technologies and Requirements Engineering stakeholder workshop. It explores how students can organize achievements, attach evidence descriptions, receive simulated verification feedback, prepare recommendation evidence packs, and control sharing preferences.

## Run locally

```bash
npm install
npm run dev
```

Checks: `npm run lint` and `npm run build`.

## Demonstration journeys

- Start as **Student / Alumni** on the dashboard.
- Add an achievement, save it as a draft, and submit it for review.
- Switch to **Lecturer / Supervisor**, open the review queue, and verify, reject, or request changes.
- Return to the student role to see the resulting status and feedback.
- Use Recommendations to select verified achievements and print the evidence pack.
- Use Privacy & Sharing to inspect audience-specific preview behavior.

The role selector is a journey switch for synthetic data, not authentication or authorization. No AU credentials, real records, files, or public share links are used. All state is in memory and can be restored with **Reset demo data**.

## Structure

- `src/App.tsx` — application shell, views, and prototype interactions.
- `src/types.ts` — core domain types.
- `src/data.ts` — synthetic seed data.
- `src/lib/workflow.ts` — guarded achievement state transitions.
- `docs/requirements/` — workshop-ready requirements and security notes.

Production implementation would require a trusted backend, approved identity integration, server-side authorization, secure sessions, protected evidence storage, audit controls, notifications, and stakeholder validation.
