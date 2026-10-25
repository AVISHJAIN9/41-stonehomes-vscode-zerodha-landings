# API & Document State Reference: Triple Landing

## Client-Side Script Interface Matrix (`zerodha/js/main.js`)

| DOM Event Target | Trigger Action | State Mutation | ARIA Attribute Update |
|---|---|---|---|
| `.nav-toggle` | Click | Toggles mobile navigation visibility | `aria-expanded: true/false`, `aria-hidden: false/true` |
| `.form` | Submit | Simulates account creation with temporary button disable | Button text changes to "Creating…" then "Created" |
| `.site-nav a` | Page Load | Matches `location.pathname` | Adds `.active` and sets `aria-current="page"` |
