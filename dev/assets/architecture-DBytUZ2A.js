import{u as r,j as e,M as t,T as i}from"./blocks-CdQ_A15A.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-B-ucO65v.js";function o(s){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Contributing/Architecture",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(i,{children:"Architecture"}),`
`,e.jsx(n.p,{children:"An overview of how NeoMateria is structured — folder layout, component anatomy, CSS conventions, and TypeScript patterns."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"atomic-design-structure",children:"Atomic Design structure"}),`
`,e.jsx(n.p,{children:"Components are organised by complexity level. Each folder prefix is a stable sort key in the Storybook sidebar."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`src/components/
├── 00-foundations/   Color palette, typography, theming, breakpoints, icons, scrollbar
├── 01-atoms/         Single-purpose building blocks — Button, Input, Badge, Icon, Headline
├── 02-molecules/     Combinations of atoms — Card, Callout, Select, Accordion, Sheet
├── 03-organisms/     Complex compositions — Navigation, Footer, Hero, CoverPanelGrid
├── 04-templates/     Page-level layout shells (reserved)
├── 05-pages/         Full page examples — not exported from src/index.ts
├── 06-contributing/  Contributor documentation (this section)
└── 99-drafts/        Work in progress — not exported
`})}),`
`,e.jsxs(n.p,{children:["Components in ",e.jsx(n.code,{children:"05-pages/"})," and ",e.jsx(n.code,{children:"99-drafts/"})," are never exported from ",e.jsx(n.code,{children:"src/index.ts"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-file-anatomy",children:"Component file anatomy"}),`
`,e.jsx(n.p,{children:"Every component lives in its own folder with five files:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`NeoButton/
├── NeoButton.vue               Main component template + script
├── NeoButtonTypes.ts           TypeScript types, prop constants
├── NeoButton.stories.tsx       Storybook stories
├── NeoButton-layout.css        Sizing, spacing, structural layout
└── NeoButton-themed.css        Colors, theme variable overrides
`})}),`
`,e.jsx(n.p,{children:"Splitting layout from themed CSS keeps the two concerns separate: layout rules never depend on color tokens, and theme overrides never define dimensions."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typescript-pattern",children:"TypeScript pattern"}),`
`,e.jsxs(n.p,{children:["Types are derived from ",e.jsx(n.code,{children:"const"})," arrays so the array and the type are always in sync:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// NeoButtonTypes.ts
export const buttonSizes = ['small', 'medium', 'large'] as const
export const buttonVariants = ['primary', 'secondary', 'tertiary', 'ghost'] as const

export type NeoButtonSize = (typeof buttonSizes)[number]
export type NeoButtonVariant = (typeof buttonVariants)[number]

export interface NeoButtonProps {
    color: SurfaceColor
    size?: NeoButtonSize
    variant?: NeoButtonVariant
    disabled?: boolean
    class?: string
}
`})}),`
`,e.jsxs(n.p,{children:["Slot types are defined with ",e.jsx(n.code,{children:"defineSlots<T>()"})," and exported as ",e.jsx(n.code,{children:"NeoButtonSlots"})," for library consumers."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"script-setup-pattern",children:"Script setup pattern"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
import { computed } from 'vue'
import type { NeoButtonProps } from './NeoButtonTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoButtonProps>()

const classes = computed(() => {
    const componentClasses = getClassNames({
        component: 'NeoButton',
        modifiers: [props.size ?? 'medium', props.variant ?? 'primary'],
        additional: props.class,
    })
    const themedClasses = getClassNames({
        component: 'Themed',
        modifiers: [props.color],
    })
    return \`\${componentClasses} \${themedClasses}\`
})
<\/script>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getClassNames"})," produces BEM-style class strings: ",e.jsx(n.code,{children:"NeoButton NeoButton--medium NeoButton--primary Themed Themed--blue"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"css-conventions",children:"CSS conventions"}),`
`,e.jsx(n.h3,{id:"logical-properties-required",children:"Logical properties (required)"}),`
`,e.jsxs(n.p,{children:["Stylelint enforces logical properties throughout. Physical properties (",e.jsx(n.code,{children:"width"}),", ",e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"margin-left"}),") are not allowed."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✗ physical */
width: 100px;
margin-left: 8px;
padding-top: 12px;

/* ✓ logical */
inline-size: 100px;
margin-inline-start: 8px;
padding-block-start: 12px;
`})}),`
`,e.jsx(n.p,{children:"This ensures RTL support works automatically without extra overrides."}),`
`,e.jsx(n.h3,{id:"css-variable-naming",children:"CSS variable naming"}),`
`,e.jsxs(n.p,{children:["Pattern: ",e.jsx(n.code,{children:"--ComponentName-category-property"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--NeoButton-color-background
--NeoButton-color-text
--NeoButton-sizing-padding
--NeoCard-color-border
--NeoCard-sizing-radius
`})}),`
`,e.jsxs(n.p,{children:["Stylelint enforces the pattern ",e.jsx(n.code,{children:"^(neo|[A-Z][a-zA-Z0-9]*)-(color|sizing|fontSize|fontWeight|lineHeight|border|theme|spacing|gap|radius)(-[a-zA-Z0-9]+)+$"}),". Custom categories like ",e.jsx(n.code,{children:"zIndex"})," or ",e.jsx(n.code,{children:"shadow"})," must nest under ",e.jsx(n.code,{children:"sizing"})," or ",e.jsx(n.code,{children:"color"}),"."]}),`
`,e.jsx(n.h3,{id:"bem-class-naming",children:"BEM class naming"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Block: ",e.jsx(n.code,{children:".NeoButton"})]}),`
`,e.jsxs(n.li,{children:["Element: ",e.jsx(n.code,{children:".NeoButton-label"}),", ",e.jsx(n.code,{children:".NeoButton-icon"})]}),`
`,e.jsxs(n.li,{children:["Modifier: ",e.jsx(n.code,{children:".NeoButton--primary"}),", ",e.jsx(n.code,{children:".NeoButton--large"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"property-ordering",children:"Property ordering"}),`
`,e.jsx(n.p,{children:"Stylelint enforces alphabetical ordering within declaration blocks."}),`
`,e.jsx(n.h3,{id:"dark-mode",children:"Dark mode"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"@mixin onDark"})," — never ",e.jsx(n.code,{children:"@media (prefers-color-scheme: dark)"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.NeoCard {
    --NeoCard-color-background: var(--neo-color-white);

    @mixin onDark {
        --NeoCard-color-background: var(--neo-color-grey900);
    }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@mixin onDark"})," compiles to ",e.jsx(n.code,{children:"@container on-dark style(--neo-is-dark: 1)"}),", which fires when any ancestor has ",e.jsx(n.code,{children:"u-onDark"})," applied — including the Storybook toolbar toggle and the ",e.jsx(n.code,{children:"AllColorsOnDark"})," story wrappers. See ",e.jsx(n.strong,{children:"Foundation/Theming"})," for the full dark mode system."]}),`
`,e.jsx(n.h3,{id:"responsive-breakpoints",children:"Responsive breakpoints"}),`
`,e.jsx(n.p,{children:"Mobile-first. Apply the base style outside any mixin, override upward:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.NeoCard {
    flex-direction: column;

    @mixin bp-md {
        flex-direction: row;
    }
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"theming-system",children:"Theming system"}),`
`,e.jsxs(n.p,{children:["Each component adds both a component class and a ",e.jsx(n.code,{children:"Themed--{color}"})," class:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button class="NeoButton NeoButton--primary NeoButton--medium Themed Themed--blue">
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Themed--blue"})," class injects six CSS custom properties scoped to that element:"]}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|---|---|
| `,e.jsx(n.code,{children:"--neo-theme-color"}),` | Main background/accent color |
| `,e.jsx(n.code,{children:"--neo-theme-colorText"}),` | Text ON the main color (WCAG-safe white or black) |
| `,e.jsx(n.code,{children:"--neo-theme-colorAccent"}),` | Subtle accent for focus rings (shade 200) |
| `,e.jsx(n.code,{children:"--neo-theme-colorAccessible"}),` | Text/border ON page background (shade 700 light / 200 dark) |
| `,e.jsx(n.code,{children:"--neo-theme-colorFilledBg"}),` | Subtle filled background (shade 100) |
| `,e.jsx(n.code,{children:"--neo-theme-colorFilledBgDark"})," | Dark filled background (shade 900) |"]}),`
`,e.jsx(n.p,{children:"Components only read these variables — they never reference a specific shade directly."}),`
`,e.jsxs(n.h3,{id:"setondark--establishing-a-dark-child-context",children:[e.jsx(n.code,{children:"setOnDark"})," — establishing a dark child context"]}),`
`,e.jsxs(n.p,{children:["Components that use their ",e.jsx(n.strong,{children:"own"})," color as a background (solid/primary variants) establish a dark context for their children using ",e.jsx(n.code,{children:"@mixin setOnDark"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* NeoButton--primary uses color as background → children need dark context */
.NeoButton--primary:not(.Themed--yellow, .Themed--amber, .Themed--orange, .Themed--white) {
    @mixin setOnDark;
}
`})}),`
`,e.jsxs(n.p,{children:["Yellow, amber, orange, and white are excluded because ",e.jsx(n.code,{children:"--neo-theme-colorText"})," is black for those colors (light surfaces), so children should remain in a light context."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"event-handling",children:"Event handling"}),`
`,e.jsxs(n.p,{children:["Event handlers use the ",e.jsx(n.code,{children:"handle"})," prefix. Emit names use kebab-case:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const handleClick = (event: MouseEvent) => { ... }

emit('action-click', event)
emit('toggle-mobile-menu', isOpen)
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"auto-generated-files",children:"Auto-generated files"}),`
`,e.jsxs(n.p,{children:["These files are regenerated by ",e.jsx(n.code,{children:"npm run generate:files"})," (runs automatically before every build). ",e.jsx(n.strong,{children:"Do not edit them manually"})," — changes will be overwritten:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/assets/typescript/colors.ts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/assets/styles/colors.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/components/00-foundations/colors.mdx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"docs/colors.md"})}),`
`,e.jsxs(n.li,{children:["Files in ",e.jsx(n.code,{children:"src/components/docs/"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The generation scripts live in ",e.jsx(n.code,{children:"scripts/"})," and use a file-hash cache (",e.jsx(n.code,{children:"scripts/utils/cache-helper.ts"}),") to skip regeneration when inputs haven't changed."]})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{a as default};
