# Engineering Quality & Operations: Triple Landing

## SASS Compilation & Optimization Pipeline

Configured in `stone-homes/package.json`:
- `compile-sass`: Converts modular SCSS into raw CSS.
- `prefix-css`: Applies vendor prefixes targeting the last 10 browser versions.
- `compress-css`: Minifies production stylesheet down to under 25 kilobytes.
