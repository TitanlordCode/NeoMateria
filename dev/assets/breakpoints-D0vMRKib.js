import{u as r,j as e,M as t,T as d}from"./blocks-CKx--D8A.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BNVHVJhn.js";function s(i){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundation/Breakpoints",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(d,{children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["NeoMateria's responsive system is built on four mobile-first breakpoints. Use standard ",e.jsx(n.code,{children:"@media"})," queries in your own projects — the PostCSS mixins are for contributors building components inside the library."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoint-values",children:"Breakpoint values"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Mixin"}),e.jsx("th",{children:"Breakpoint"}),e.jsx("th",{children:"Min-width"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-sm"})}),e.jsx("td",{children:"Small"}),e.jsx("td",{children:"640px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-md"})}),e.jsx("td",{children:"Medium"}),e.jsx("td",{children:"768px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-lg"})}),e.jsx("td",{children:"Large"}),e.jsx("td",{children:"1024px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@mixin bp-xl"})}),e.jsx("td",{children:"Extra large"}),e.jsx("td",{children:"1280px"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"javascript--typescript",children:"JavaScript / TypeScript"}),`
`,e.jsxs(n.p,{children:["The breakpoint values and media query strings are exported from the library for use in ",e.jsx(n.code,{children:"matchMedia"}),", resize logic, or dynamic styles."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { breakpoints, mediaQueries } from 'neo-materia'

// Pixel values
breakpoints.md // 768

// Ready-to-use media query strings
const isDesktop = window.matchMedia(mediaQueries.lg).matches

// With a ResizeObserver or reactive ref
const mediaQueryList = window.matchMedia(mediaQueries.md)
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"css-mixin--for-library-contributors-only",children:"CSS mixin — for library contributors only"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.MyComponent {
  flex-direction: column;

  @mixin bp-md {
    flex-direction: row;
  }

  @mixin bp-lg {
    gap: 48px;
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Each mixin expands to a ",e.jsx(n.code,{children:"@media (width >= Npx)"})," rule. Mobile-first: styles outside a mixin apply to all viewport sizes, and each mixin overrides upward from its threshold."]}),`
`,e.jsxs(n.p,{children:["This requires PostCSS with ",e.jsx(n.code,{children:"postcss-mixins"})," configured to load NeoMateria's mixin files. It is ",e.jsx(n.strong,{children:"not"})," available to library consumers unless they replicate that PostCSS setup. Use standard ",e.jsx(n.code,{children:"@media"})," queries instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.MyElement {
  flex-direction: column;
}

@media (width >= 768px) {
  .MyElement {
    flex-direction: row;
  }
}
`})})]})}function l(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default};
