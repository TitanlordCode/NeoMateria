import{u as r,j as e,M as t,T as d}from"./blocks-B1ZYRO7-.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BF-isInV.js";function i(n){const s={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundation/Breakpoints",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(d,{children:"Breakpoints"}),`
`,e.jsxs(s.p,{children:["NeoMateria's responsive system is built on four mobile-first breakpoints. Use standard ",e.jsx(s.code,{children:"@media"})," queries in your own projects — the PostCSS mixins are for contributors building components inside the library."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"breakpoint-values",children:"Breakpoint values"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Mixin"}),e.jsx("th",{children:"Breakpoint"}),e.jsx("th",{children:"Min-width"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-sm"})}),e.jsx("td",{children:"Small"}),e.jsx("td",{children:"640px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-md"})}),e.jsx("td",{children:"Medium"}),e.jsx("td",{children:"768px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-lg"})}),e.jsx("td",{children:"Large"}),e.jsx("td",{children:"1024px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-xl"})}),e.jsx("td",{children:"Extra large"}),e.jsx("td",{children:"1280px"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"javascript--typescript",children:"JavaScript / TypeScript"}),`
`,e.jsxs(s.p,{children:["The breakpoint values and media query strings are exported from the library for use in ",e.jsx(s.code,{children:"matchMedia"}),", resize logic, or dynamic styles."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { breakpoints, mediaQueries } from 'neo-materia'

// Pixel values
breakpoints.md // 768

// Ready-to-use media query strings
const isDesktop = window.matchMedia(mediaQueries.lg).matches

// With a ResizeObserver or reactive ref
const mediaQueryList = window.matchMedia(mediaQueries.md)
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"snapshot-testing-viewports",children:"Snapshot testing viewports"}),`
`,e.jsx(s.p,{children:"Visual regression tests run against five fixed viewports. The set was chosen to cover every CSS breakpoint transition — no two adjacent viewports share the same active breakpoint set."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Width"}),e.jsx("th",{children:"Height"}),e.jsx("th",{children:"Active breakpoints"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sm"})}),e.jsx("td",{children:"375px"}),e.jsx("td",{children:"667px"}),e.jsx("td",{children:"none — below bp-sm (640px)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"md"})}),e.jsx("td",{children:"768px"}),e.jsx("td",{children:"1024px"}),e.jsx("td",{children:"bp-sm, bp-md"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lg"})}),e.jsx("td",{children:"1024px"}),e.jsx("td",{children:"768px"}),e.jsx("td",{children:"bp-sm, bp-md, bp-lg"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"xl"})}),e.jsx("td",{children:"1920px"}),e.jsx("td",{children:"1080px"}),e.jsx("td",{children:"all (bp-sm through bp-xl)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"2xl"})}),e.jsx("td",{children:"2592px"}),e.jsx("td",{children:"1440px"}),e.jsx("td",{children:"all — extra-wide overflow test"})]})]})]}),`
`,e.jsxs(s.p,{children:["By default, every snapshot story runs at all five viewports. Use ",e.jsx(s.code,{children:"parameters.snapshot.viewports"})," in a story's ",e.jsx(s.code,{children:"meta"})," or individual story object to restrict which viewports run for that story group:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`// In meta — applies to all stories in the file
parameters: {
  snapshot: { viewports: ['sm', 'xl'] },
}

// In a single story — overrides the meta default
export const AllColors: Story = {
  parameters: {
    snapshot: { viewports: ['sm', 'xl'] },
  },
}
`})}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"diffThreshold"})," to allow a small percentage of pixels to differ — useful for stories whose snapshots contain text rendered with system fonts, where sub-pixel hinting can vary slightly between Chromium instances. The value is a ratio (e.g. ",e.jsx(s.code,{children:"0.001"})," = 0.1% of total pixels). Omit it entirely for strict pixel-exact comparison, which is the default for all stories."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`parameters: {
  snapshot: { viewports: ['sm', 'xl'], diffThreshold: 0.001 },
}
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Default viewport sets by component tier:"})}),`
`,e.jsxs(s.p,{children:[`| Tier | Default viewports | Reason |
|---|---|---|
| Atoms | `,e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"}),` | Font and padding scale at bp-sm and bp-lg; no grid changes |
| Molecules | `,e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"md"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"}),` | Responsive layout changes; 2xl adds no new information |
| Organisms | all 5 | Genuine layout changes at every breakpoint + overflow check |
| AllColors / OnDark / RTL (atoms & molecules) | `,e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"xl"})," | Only color/theme or direction differs — no layout change |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"css-mixin--for-library-contributors-only",children:"CSS mixin — for library contributors only"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.MyComponent {
  flex-direction: column;

  @mixin bp-md {
    flex-direction: row;
  }

  @mixin bp-lg {
    gap: 48px;
  }
}
`})}),`
`,e.jsxs(s.p,{children:["Each mixin expands to a ",e.jsx(s.code,{children:"@media (width >= Npx)"})," rule. Mobile-first: styles outside a mixin apply to all viewport sizes, and each mixin overrides upward from its threshold."]}),`
`,e.jsxs(s.p,{children:["This requires PostCSS with ",e.jsx(s.code,{children:"postcss-mixins"})," configured to load NeoMateria's mixin files. It is ",e.jsx(s.strong,{children:"not"})," available to library consumers unless they replicate that PostCSS setup. Use standard ",e.jsx(s.code,{children:"@media"})," queries instead:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.MyElement {
  flex-direction: column;
}

@media (width >= 768px) {
  .MyElement {
    flex-direction: row;
  }
}
`})})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default};
