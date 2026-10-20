# Initial requirements backlog

This is a candidate backlog and set of initial assumptions, not a validated SRS.

## Must have

**FR-001 — Portfolio summary.** Given synthetic student data, when a student opens Dashboard, then totals, pending actions, recent activity, and profile completeness are derived from the demo records.

**FR-002 — Achievement lifecycle.** Given a draft, when the student submits it, then it becomes PENDING REVIEW and cannot appear verified without a reviewer decision.

**FR-003 — Reviewer decision.** Given a pending record, when an authorized reviewer confirms a decision, then it becomes VERIFIED, CHANGES REQUESTED, or REJECTED and an activity event is recorded.

**FR-004 — Feedback and resubmission.** Given changes requested, when a student edits and submits again, then the status returns to PENDING REVIEW with feedback visible.

**FR-005 — Evidence pack.** Given verified achievements, when a student creates a recommendation request, then selected evidence can be reviewed and printed without generating a recommendation letter.

**FR-006 — Privacy preview.** Given visibility choices, when a student changes an audience, then the external-recipient preview reflects the simulated choice.

**FR-007 — Synthetic reset.** Given a confirmation, when Reset demo data is selected, then the original demonstration state returns.

## Should have

**FR-008 — Search and filters.** Students can search, filter by category/status, and inspect a chronological achievement timeline.

**FR-009 — Editable profile.** Students can edit profile sections with required-field feedback.

**FR-010 — Recommendation progress.** A request shows a defined state such as Draft, Requested, Accepted, In Progress, Completed, or Declined.

**NFR-001 — Responsive usability.** The primary workflows remain usable at 375px without unintended horizontal scrolling.

**NFR-002 — Accessibility.** Controls have labels, visible focus behavior, adequate contrast, and understandable status text.

**NFR-003 — Security honesty.** The interface must identify demo role switching, synthetic data, and missing server enforcement.

**NFR-004 — Maintainability.** Core entities and state transitions are typed and isolated from seed data.

## Could / Won't in v1

Could: offline support, richer exports, notifications, institutional dashboards, evidence file previews. Won't in v1: real authentication, public share endpoints, official recommendation letters, AU portal integration, or production evidence storage.

## Validation questions

Stakeholders must validate who may verify each category, what counts as acceptable evidence, what happens on disagreement or appeal, how long records persist, and what employers or alumni may access.
