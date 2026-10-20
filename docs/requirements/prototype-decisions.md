# Prototype decisions

| Decision | Reason / user need | Alternative | Limitation and validation question |
|---|---|---|---|
| Mobile-first responsive shell | Students may use phones and workshop participants need a clear small-screen flow | Desktop-only dashboard | Validate low-bandwidth and accessibility needs |
| Explicit evidence verification | Recommenders need confidence that a claim was reviewed | Student-controlled verified badge | Reviewer rules and appeals need stakeholder agreement |
| Synthetic role selector | Demonstrates different journeys without fake authentication | Separate login flows | It is not authorization; validate real roles and identity integration |
| Audience-specific privacy settings | Students should understand and control sharing | One global profile visibility | Backend enforcement and consent model are required |
| Recommendation Evidence Pack | Gives recommenders specific documented examples | Automatic letter generation | It must never impersonate a recommender; validate required pack contents |
| In-memory demo state | Keeps workshop prototype small and avoids sensitive persistence | Backend/database | Reload resets state; production retention and audit need architecture |
| Browser print for export | Reliable, understandable workshop output | PDF generation service | Production export and document signing need validation |
