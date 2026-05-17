import{u as o,j as e,M as c,T as l}from"./blocks-BNH4EnMd.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-C03QER6x.js";function r(n){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Contributing/Color System",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(l,{children:"Color System"}),`
`,e.jsxs(s.p,{children:["How colors are sourced, generated, and exposed to components — from the ",e.jsx(s.code,{children:"material-colors"})," package through to the CSS custom properties used in themed classes."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(s.p,{children:["The color system is fully code-generated. The source of truth is the ",e.jsx(s.code,{children:"material-colors"})," npm package (Google's Material Design palette). A generation script reads it, runs WCAG accessibility checks, and writes four output files. Contributors never edit the outputs directly."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`material-colors (npm)
        ↓
scripts/generate-colors.ts
        ↓
┌───────────────────────────────────────────┐
│  src/assets/typescript/colors.ts          │  TypeScript types + color arrays
│  src/assets/styles/colors.css             │  CSS variables + .Themed--* classes
│  src/components/00-foundations/colors.mdx │  Storybook color reference page
│  docs/colors.md                           │  Markdown color reference
└───────────────────────────────────────────┘
`})}),`
`,e.jsx(s.p,{children:"Run generation manually:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm run generate:files
`})}),`
`,e.jsxs(s.p,{children:["This runs automatically before ",e.jsx(s.code,{children:"npm run build"})," and ",e.jsx(s.code,{children:"npm run dev"})," via the pre-flight script."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"what-gets-generated",children:"What gets generated"}),`
`,e.jsx(s.h3,{id:"colorsts",children:e.jsx(s.code,{children:"colors.ts"})}),`
`,e.jsx(s.p,{children:"Exports three things used throughout the codebase:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`export const colorNames   // all shade keys: ['red-50', 'red-100', ..., 'blue-500', ...]
export const colors       // family names only: ['red', 'pink', 'purple', ..., 'white', 'black']
export type Color         // 'red' | 'pink' | 'purple' | ... (derived from colors array)
export const colorsFlat   // { 'red-500': '#f44336', ... } — internal, CSS generation only
`})}),`
`,e.jsx(s.h3,{id:"colorscss",children:e.jsx(s.code,{children:"colors.css"})}),`
`,e.jsx(s.p,{children:"Two sections:"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"1. Raw CSS variables"})," — one per shade, on ",e.jsx(s.code,{children:":root"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
    --neo-color-red50: #ffebee;
    --neo-color-red100: #ffcdd2;
    --neo-color-red500: #f44336;
    /* ... */
}
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"2. Themed classes"})," — one per color family, with six semantic variables:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.Themed--blue {
    --neo-theme-color:          var(--neo-color-blue500);
    --neo-theme-colorText:      var(--neo-color-white);
    --neo-theme-colorAccent:    var(--neo-color-blue200);
    --neo-theme-colorAccessible: var(--neo-color-blue700);
    --neo-theme-colorFilledBg:  var(--neo-color-blue100);
    --neo-theme-colorFilledBgDark: var(--neo-color-blue900);

    @mixin onDark {
        --neo-theme-color:          var(--neo-color-blue400);
        --neo-theme-colorText:      var(--neo-color-black);
        --neo-theme-colorAccessible: var(--neo-color-blue200);
        /* ... */
    }
}
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"shade-selection-algorithm",children:"Shade selection algorithm"}),`
`,e.jsx(s.p,{children:"The generator doesn't hardcode shades — it walks the palette to find the first shade that meets WCAG AA (4.5:1 contrast ratio)."}),`
`,e.jsxs(s.h3,{id:"light-mode---neo-theme-color-background-use",children:["Light mode ",e.jsx(s.code,{children:"--neo-theme-color"})," (background use)"]}),`
`,e.jsx(s.p,{children:"For most colors, white text must be readable on the background:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Tries shades ",e.jsx(s.code,{children:"500 → 600 → 700 → 800 → 900"})]}),`
`,e.jsxs(s.li,{children:["Uses the first shade where ",e.jsx(s.code,{children:"contrast(shade, white) ≥ 4.5"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["For ",e.jsx(s.strong,{children:"yellow, amber, orange"})," (",e.jsx(s.code,{children:"blackTextExceptions"}),"), black text is used instead:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Tries shades ",e.jsx(s.code,{children:"500 → 400 → 300 → 200 → 100"})]}),`
`,e.jsxs(s.li,{children:["Uses the first shade where ",e.jsx(s.code,{children:"contrast(shade, black) ≥ 4.5"})]}),`
`]}),`
`,e.jsxs(s.h3,{id:"dark-mode---neo-theme-color-background-use",children:["Dark mode ",e.jsx(s.code,{children:"--neo-theme-color"})," (background use)"]}),`
`,e.jsx(s.p,{children:"All colors use black text in dark mode (lighter shades on dark backgrounds):"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Tries shades ",e.jsx(s.code,{children:"500 → 400 → 300 → 200 → 100"})]}),`
`,e.jsxs(s.li,{children:["Uses the first shade where ",e.jsx(s.code,{children:"contrast(shade, black) ≥ 4.5"})]}),`
`]}),`
`,e.jsxs(s.h3,{id:"--neo-theme-coloraccessible-textborder-on-page-background",children:[e.jsx(s.code,{children:"--neo-theme-colorAccessible"})," (text/border on page background)"]}),`
`,e.jsx(s.p,{children:"Light mode — color used as text on white:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Regular colors: tries ",e.jsx(s.code,{children:"700 → 800 → 900 → 600 → 500"})]}),`
`,e.jsxs(s.li,{children:["Exception colors: tries ",e.jsx(s.code,{children:"900 → 800 → 700"})," (darkest available for black text on white)"]}),`
`]}),`
`,e.jsx(s.p,{children:"Dark mode — color used as text on black:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Tries ",e.jsx(s.code,{children:"200 → 100 → 300 → 400 → 500"})]}),`
`]}),`
`,e.jsx(s.h3,{id:"special-cases",children:"Special cases"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"black"})}),": flips to white in dark mode (",e.jsx(s.code,{children:"darkModeColorVar = 'white'"}),") so black-colored components gracefully invert inside dark surfaces"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"white"})}),": excluded from ",e.jsx(s.code,{children:"SurfaceColor"})," — invisible on the default white canvas; use ",e.jsx(s.code,{children:"black"})," + ",e.jsx(s.code,{children:"u-onDark"})," instead"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"surfacecolor-type",children:[e.jsx(s.code,{children:"SurfaceColor"})," type"]}),`
`,e.jsxs(s.p,{children:["Most component ",e.jsx(s.code,{children:"color"})," props use ",e.jsx(s.code,{children:"SurfaceColor"})," rather than ",e.jsx(s.code,{children:"Color"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`// src/assets/typescript/colorTypes.ts
export type SurfaceColor = Exclude<Color, 'white'>
`})}),`
`,e.jsxs(s.p,{children:["White is excluded because it is invisible against the white canvas, and interactive states (",e.jsx(s.code,{children:"hover"}),", ",e.jsx(s.code,{children:"active"}),") use ",e.jsx(s.code,{children:"--neo-theme-colorAccessible"})," which resolves to white-on-white inside a ",e.jsx(s.code,{children:"u-onDark"})," context. Components that legitimately accept white (badges, icons used as decorative overlays) keep the full ",e.jsx(s.code,{children:"Color"})," type."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"cache-system",children:"Cache system"}),`
`,e.jsx(s.p,{children:"The generator checks file hashes before running to avoid unnecessary rebuilds:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`// scripts/utils/cache-helper.ts
if (shouldSkipGeneration(SCRIPT_NAME, SOURCE_FILES, OUTPUT_FILES)) {
    process.exit(0)
}
`})}),`
`,e.jsxs(s.p,{children:["If neither ",e.jsx(s.code,{children:"scripts/generate-colors.ts"})," nor ",e.jsx(s.code,{children:"node_modules/material-colors/dist/colors.json"})," has changed since the last run, generation is skipped. The cache is stored alongside the scripts and committed to git."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"adding-a-new-color",children:"Adding a new color"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"material-colors"})," package is the sole color source. Colors cannot be added without either:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Updating the package"})," — if Material Design adds a new family in a future release, bumping ",e.jsx(s.code,{children:"material-colors"})," and re-running ",e.jsx(s.code,{children:"npm run generate:files"})," is sufficient. The generator picks up all families automatically."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Adding a custom color"})," — requires modifying ",e.jsx(s.code,{children:"generate-colors.ts"})," to inject additional entries into ",e.jsx(s.code,{children:"flatColors"})," before the CSS generation loop. The WCAG shade-selection algorithm will run automatically for any injected family."]}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:["There is no manual way to add a color — editing ",e.jsx(s.code,{children:"colors.ts"})," or ",e.jsx(s.code,{children:"colors.css"})," directly will be overwritten on the next ",e.jsx(s.code,{children:"generate:files"})," run."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"wcag-utility",children:"WCAG utility"}),`
`,e.jsxs(s.p,{children:["Contrast checking uses ",e.jsx(s.code,{children:"src/utils/wcag.ts"}),", which is also exported from ",e.jsx(s.code,{children:"src/index.ts"})," for library consumers:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { isAccessible, contrast, luminance } from 'neo-materia'

isAccessible('#1976d2', '#ffffff')  // true  (blue500 + white = 4.6:1)
contrast('#f44336', '#ffffff')      // 3.99  (red500 + white — below AA)
`})})]})}function a(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default};
