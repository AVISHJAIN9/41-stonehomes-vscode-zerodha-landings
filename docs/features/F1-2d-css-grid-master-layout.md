# F1: Two-Dimensional CSS Grid Master Layout

## Overview & Architecture
An 8-column central layout engineered in `stone-homes/sass/main.scss` utilizing named grid tracks and dynamic `minmax()` boundaries.

```mermaid
flowchart LR
    Container[.container: display grid] --> SB["[sidebar-start] 8rem [sidebar-end]"]
    Container --> LeftBreak["[full-start] minmax(6rem, 1fr) [center-start]"]
    Container --> CentralTracks["repeat(8, [col-start] minmax(min-content, 14rem) [col-end])"]
    Container --> RightBreak["[center-end] minmax(6rem, 1fr) [full-end]"]
```

## Say It Out Loud
> "In `stone-homes/sass/main.scss`, I designed the master layout around native two-dimensional CSS Grid with named grid tracks. Instead of generic numbered lines, I named tracks like `sidebar-start`, `full-start`, and `center-start`. This allows any child section—whether it's the 80vh hero header, the 3-column features subgrid, or the full-bleed image gallery—to declare its coordinates intuitively. The 8 central columns use `minmax(min-content, 14rem)`, which prevents cards from collapsing on smaller screens while capping max widths gracefully on ultra-wide desktop monitors."
