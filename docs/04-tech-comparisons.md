# Technology Choice Comparisons & Trade-Off Analysis

## CSS Grid vs Flexbox vs Float Layouts

| Metric | CSS Grid (Chosen in Stone Homes) | CSS Flexbox | Floats with Clearfix |
|---|---|---|---|
| **Layout Dimension** | **2-Dimensional (Rows AND Columns)** | 1-Dimensional (Row OR Column) | 1-Dimensional horizontal flow |
| **Track Naming** | Supported (`[col-start]`, `[full-start]`) | Not supported | Not supported |
| **Overlapping Elements** | Native placement via grid coordinates | Requires `position: absolute` | Requires negative margins |
| **Gutter Management** | Native `grid-gap` / `gap` | `gap` (modern browsers) | Manual margin subtractions |
| **Fit with Stone Homes** | **Optimal** (Complex multi-section layout) | Sub-optimal for whole page | Obsolete |
