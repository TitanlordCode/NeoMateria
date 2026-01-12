# Color Accessibility Strategy

## Overview

NeoMateria uses an intelligent color system that automatically selects the optimal color shade and text color combination to ensure WCAG AA accessibility compliance (4.5:1 contrast ratio) for all components.

## How It Works

When you apply a color to a component (e.g., `color="blue"`), the theme system provides four CSS variables:

- **`--neo-theme-color`**: Main background color (automatically selected shade)
- **`--neo-theme-colorText`**: Text color for use ON the main color (white or black based on accessibility)
- **`--neo-theme-colorAccent`**: Subtle accent color (shade 200) for focus states
- **`--neo-theme-colorAccessible`**: Accessible color for text/borders ON page backgrounds (darker/lighter shades)

## Light Mode Strategy

**Most Colors (White Text):**
- The system starts with shade 500 and goes darker (600, 700, 800, 900) until white text achieves WCAG AA contrast
- Examples:
  - `blue` → uses blue700 with white text
  - `purple` → uses purple500 with white text
  - `cyan` → uses cyan800 with white text
  - `lime` → uses lime900 with white text

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

- **Yellow, Amber, Orange on light backgrounds** - These work perfectly with black text
- **All other colors on any background** - Automatically optimized for accessibility
- **Switching between light and dark modes** - All colors adapt automatically

### ⚠️ Be Aware

- **Yellow, Amber, Orange** are optimized for light backgrounds
- In dark mode, they use lighter shades which may look different from their traditional appearance
- For brand-critical yellow/amber/orange in dark mode, consider using custom shades

## Technical Details

The color selection is automated in `scripts/generate-colors.ts`:

1. For each color family, the script tests shades against WCAG AA requirements
2. Light mode: Finds the optimal shade for white text (or black for exceptions)
3. Dark mode: Finds the optimal shade for black text
4. Accessible variants: Selects shades that work as text ON page backgrounds

All color combinations are validated at build time to ensure accessibility compliance.
