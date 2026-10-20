# Security and privacy

## Demonstrated

The prototype uses fictional data, avoids real credential collection, does not upload or persist evidence files, uses a visible mock authentication service, resolves roles from fictional account records, keeps verification behind a simulated reviewer decision, validates required achievement fields, uses guarded state transitions, and provides audience-specific preview controls. The supplied `AU_logo.png` is used in the login and role views.

## Simulated or not implemented

React state is not durable security. The login, logout, role checks, and route-like view guards are demonstration controls only. There is no server audit trail, real reviewer identity, secure file storage, email notification, public link, or AU integration. Browser print is a local convenience only. Passwords are not stored in browser storage and the demo session resets on refresh.

## Identifier and mock-authentication assumptions

The prototype accepts a six-digit numeric identifier using the working `YYNNNN` assumption. For example, `260482` is a fictional student account and the first two digits are not used to grant a role. Staff identifiers may or may not follow the same pattern; AU ICT must confirm this. The mock service looks up the complete fictional identifier/password pair and returns the assigned account role. It never infers student, lecturer, administrator, or external-recipient access from the identifier prefix.

External recipients are represented by a fictional account tied to a specific shared-portfolio preview. They are not required to have an AU staff ID and should only see explicitly shared, verified information in a production design.

## Production controls to validate

Use an approved identity provider or SSO integration confirmed by AU ICT and secure server sessions; enforce authorization on every server operation; map roles from a trusted identity source; prevent reviewer self-approval and conflicts of interest; validate and scan uploads; encrypt sensitive data in transit and at rest; apply least privilege; protect audit logs from client edits; define retention/deletion; rate-limit and monitor abuse; provide consent, revocation, correction, and incident response; and test against current OWASP guidance, including the OWASP Top 10 and authorization/session management guidance. Do not scrape Acacia, invent an endpoint, or forward real university passwords to this frontend.

## Privacy assumptions

Collect only data needed for the portfolio purpose. Default to narrow audiences, make each sharing choice explicit, disclose what an audience will see, and ensure external access is time-bounded and revocable if stakeholders require it. Validate retention and post-graduation ownership with students, Alumni Office, and ICT/security.
