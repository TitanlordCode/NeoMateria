import{u as a,j as e,M as s,b as r}from"./blocks-DxOHQd2_.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-aH-Nj2u6.js";const l=`# Color Accessibility Strategy

## Overview

NeoMateria uses an intelligent color system that automatically selects the optimal color shade and text color combination to ensure WCAG AA accessibility compliance (4.5:1 contrast ratio) for all components.

## How It Works

When you apply a color to a component (e.g., \`color="blue"\`), the theme system provides four CSS variables:

- **\`--neo-theme-color\`**: Main background color (automatically selected shade)
- **\`--neo-theme-colorText\`**: Text color for use ON the main color (white or black based on accessibility)
- **\`--neo-theme-colorAccent\`**: Subtle accent color (shade 200) for focus states
- **\`--neo-theme-colorAccessible\`**: Accessible color for text/borders ON page backgrounds (darker/lighter shades)

## Light Mode Strategy

**Most Colors (White Text):**
- The system starts with shade 500 and goes darker (600, 700, 800, 900) until white text achieves WCAG AA contrast
- Examples:
  - \`blue\` → uses blue700 with white text
  - \`purple\` → uses purple500 with white text
  - \`cyan\` → uses cyan800 with white text
  - \`lime\` → uses lime900 with white text

**Exception Colors (Black Text):**
- **Yellow, Amber, and Orange** use black text in light mode because they are too bright for white text
- These colors use shade 500 with black text
- Contrast ratios:
  - yellow500 + black: 17.20 ✓
  - amber500 + black: 12.88 ✓
  - orange500 + black: 9.74 ✓

## Dark Mode Strategy

**All Colors (Black Text):**
- In dark mode, ALL colors (including yellow, amber, orange) use black text
- The system starts with shade 500 and goes lighter (400, 300, 200, 100) until black text achieves WCAG AA contrast
- This ensures consistency across all colors in dark mode

## Usage Recommendations

### ✅ Good Usage

- **Yellow, Amber, Orange as component backgrounds** — buttons, badges, and other filled surfaces use black text on the colored background and meet WCAG AA
- **All other colors on any background** — automatically optimized for accessibility
- **Switching between light and dark modes** — all colors adapt automatically

### ⚠️ Not Recommended

- **Yellow, Amber, Orange as text or link colors on light page backgrounds** — \`--neo-theme-colorAccessible\` for these colors does not meet WCAG AA contrast against white. Avoid using them for \`NeoLink\`, \`NeoNavItem\`, or any component where the color resolves to text on a white background
- In dark mode, yellow/amber/orange use lighter shades which may look different from their traditional appearance
- For brand-critical yellow/amber/orange in dark mode, consider using custom shades

## Technical Details

The color selection is automated in \`scripts/generate-colors.ts\`:

1. For each color family, the script tests shades against WCAG AA requirements
2. Light mode: Finds the optimal shade for white text (or black for exceptions)
3. Dark mode: Finds the optimal shade for black text
4. Accessible variants: Selects shades that work as text ON page backgrounds

All color combinations are validated at build time to ensure accessibility compliance.
`;function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Color Accessibility"}),`
`,`
`,e.jsx(r,{children:l})]})}function d(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n()}export{d as default};
