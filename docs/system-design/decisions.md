# Architectural Decision Records (ADRs): Triple Landing

| ADR ID | Decision Title | Chosen Option | Alternatives Considered | Deciding Factors | Trade-Off Accepted | Revisit Trigger |
|---|---|---|---|---|---|---|
| **ADR-01** | Master Layout Engine | CSS Grid | Flexbox, Floats | Native 2D grid coordinates, track naming | Requires modern browser engine | Need to support IE11 |
| **ADR-02** | Gallery Placement | CSS Grid Spans | Masonry.js, Absolute Positioning | Pure CSS zero runtime layout calculation | Fixed mosaic ordering | Dynamic user-uploaded masonry feed |
| **ADR-03** | Navigation Accessibility | ARIA attributes in JS | Checkbox hack | Accessible screen-reader support on FinTech portal | Minimal JS event listener required | Zero-JS policy mandated |
