# Step-by-Step Rebuild Guide: Stone Homes (CSS Grid)

```mermaid
flowchart TD
    S1[Step 1: Setup 7-1 SASS Tree & Dart Sass Toolchain] --> S2[Step 2: Define Master CSS Grid Container]
    S2 --> S3[Step 3: Fixed Left Sidebar & Navigation Button]
    S3 --> S4[Step 4: Header Slant & Realtor Profiles Grid]
    S4 --> S5[Step 5: Feature Highlights Subgrid]
    S5 --> S6[Step 6: Villa Card Catalog Grid]
    S6 --> S7[Step 7: 14-Photo Mosaic Gallery with Spans]
    S7 --> S8[Step 8: Responsive Breakpoint Re-Gridding]
```

### Master Grid Declaration (`stone-homes/sass/main.scss`)
```scss
.container {
    display: grid;
    grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
    grid-template-columns: 
        [sidebar-start] 8rem [sidebar-end full-start] 
        minmax(6rem, 1fr) [center-start] 
        repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] 
        minmax(6rem, 1fr) [full-end];
}
```
