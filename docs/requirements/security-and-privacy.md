# Security and privacy

## Demonstrated

The prototype uses fictional data, avoids credential collection, does not upload or persist evidence files, labels the role selector as demo-only, keeps verification behind a simulated reviewer decision, validates required achievement fields, uses guarded state transitions, and provides audience-specific preview controls.

## Simulated or not implemented

React state is not durable security. Client-side visibility and the role selector do not enforce access. There is no login, logout, session management, server audit trail, real reviewer identity, secure file storage, email notification, public link, or AU integration. Browser print is a local convenience only.

## Production controls to validate

Use an approved identity provider and secure server sessions; enforce authorization on every server operation; prevent reviewer self-approval and conflicts of interest; validate and scan uploads; encrypt sensitive data in transit and at rest; apply least privilege; protect audit logs from client edits; define retention/deletion; rate-limit and monitor abuse; provide consent, revocation, correction, and incident response; and test against current OWASP guidance, including the OWASP Top 10 and authorization/session management guidance.

## Privacy assumptions

Collect only data needed for the portfolio purpose. Default to narrow audiences, make each sharing choice explicit, disclose what an audience will see, and ensure external access is time-bounded and revocable if stakeholders require it. Validate retention and post-graduation ownership with students, Alumni Office, and ICT/security.
