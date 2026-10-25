# Full Project Analysis: Triple Landing Showcase

## 0.1 What the Project Is

This repository contains three production-grade web landing architectures demonstrating distinct frontend paradigms:
1. **Stone Homes (Nexter)**: Master-level two-dimensional layout engineering using native **CSS Grid**, explicit column track naming, `minmax()` formulas, and overlapping gallery placement.
2. **VS Code Landing**: Developer tools UI demonstrating sleek dark mode aesthetics, monospace code formatting, and tabbed installation downloads.
3. **Zerodha Landing**: Minimalist financial technology platform showcasing accessible mobile navigation (`aria-expanded`), flat brokerage pricing comparisons, and multi-page navigation.

---

## 0.2 Master Feature Inventory & Traces

### F1: Two-Dimensional CSS Grid Master Layout (`stone-homes/sass/main.scss`)
- **Trace**: 8-column central track system with dynamic breakout columns:
```scss
grid-template-columns: 
  [sidebar-start] 8rem [sidebar-end full-start] 
  minmax(6rem, 1fr) [center-start] 
  repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] 
  minmax(6rem, 1fr) [full-end];
```

### F2: Dense Mosaic Image Gallery Grid (`stone-homes/sass/_gallery.scss`)
- **Trace**: 14 dynamic property photos arranged using CSS Grid span properties (`grid-row: 1 / span 2; grid-column: 1 / span 2;`) with `object-fit: cover`.

### F3: Luxury Real Estate Listing Cards (`stone-homes/sass/_homes.scss`)
- **Trace**: 6 luxury villa cards arranged in a 3-column subgrid featuring SVG iconography, square meterage, price badges, and contact realtor CTAs.

### F4: Accessible FinTech Navigation & ARIA State Machine (`zerodha/js/main.js`)
- **Trace**: Dual-state mobile navigation drawer synchronizing `aria-expanded` and `aria-hidden` attributes with active route highlighting.

### F5: FinTech Zero-Brokerage Pricing Tables (`zerodha/pricing.html`)
- **Trace**: Structured pricing matrix comparing equity delivery, intraday trades, and direct mutual fund fees.

### F6: Developer IDE Showcase & Download Matrix (`vs code landing page/`)
- **Trace**: Platform-aware download dropdowns (macOS, Windows, Linux) and dark theme code presentation.

---

## 0.3 Final Inventory Counts

| Metric | Count | Reference |
|---|---|---|
| **Landing Implementations** | 3 | `stone-homes/`, `vs code landing page /`, `zerodha/` |
| **Total HTML Files** | 8 | Real estate index, VS code landing, Zerodha multi-page |
| **SASS Source Partials** | 11 | `stone-homes/sass/` |
| **CSS Grid Tracks Defined** | 10 | 8 central content columns + 2 outer padding tracks |
