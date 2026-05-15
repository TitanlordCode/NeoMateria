import{u as t,j as o,M as r,T as c,C as i}from"./blocks-C5W-Uk0B.js";import{I as a,A as d}from"./icons.stories-BfgKZafY.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BV3hDJ4h.js";import"./NeoIcon-Df0NqOhA.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./defaultIcons-4aGioQkV.js";import"./iconStrings-DsK5_d8D.js";function s(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...t(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:a}),`
`,o.jsx(c,{children:"Default Icons"}),`
`,o.jsxs(n.p,{children:["NeoMateria ships a small set of ready-to-use icons. They are plain SVG VNodes — pass them directly into the default slot of ",o.jsx(n.code,{children:"NeoIcon"})," or any icon slot."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-ts",children:`import { InfoIcon, ChevronDownIcon, CloseIcon } from 'neomateria'
`})}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-vue",children:`<!-- Inside NeoIcon for sizing and color control -->
<NeoIcon color="blue">{{ InfoIcon }}</NeoIcon>

<!-- Directly into a component icon slot -->
<NeoCallout color="blue">
  <template #icon>{{ InfoIcon }}</template>
  Message text.
</NeoCallout>
`})}),`
`,o.jsx(n.hr,{}),`
`,o.jsx(i,{of:d,withToolbar:!1}),`
`,o.jsxs(n.p,{children:["All icons render with ",o.jsx(n.code,{children:"currentColor"}),", so they automatically adapt to their context — including dark mode and colored backgrounds."]}),`
`,o.jsx(n.hr,{}),`
`,o.jsx(n.h2,{id:"adding-icons-contributors",children:"Adding icons (contributors)"}),`
`,o.jsxs(n.p,{children:["The single source of truth for all icon SVG markup is ",o.jsx(n.code,{children:"src/components/01-atoms/Icon/iconStrings.ts"}),". Each icon is defined there as a plain string export, for example ",o.jsx(n.code,{children:"addIconSvg"}),"."]}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"defaultIcons.tsx"})," derives VNodes from those strings via Vue's ",o.jsx(n.code,{children:"createStaticVNode"})," — so adding an icon means adding the string once, and the VNode is created automatically."]}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"parameters.docs.source.code"})," in story files always requires a plain string. Import the string export from ",o.jsx(n.code,{children:".storybook/utils/iconSnippets"})," (which re-exports from ",o.jsx(n.code,{children:"iconStrings.ts"}),") and interpolate it into the template literal:"]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-ts",children:`import { addIconSvg } from '../../../../.storybook/utils/iconSnippets'

parameters: {
  docs: { source: { code: \`<NeoIconButton ariaLabel="Add">\\n  \${addIconSvg}\\n</NeoIconButton>\` } }
}
`})}),`
`,o.jsxs(n.p,{children:["For the VNode used in the render function, import from ",o.jsx(n.code,{children:"defaultIcons"}),":"]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-ts",children:`import { AddIcon } from '@/components/01-atoms/Icon/defaultIcons'

render: () => <NeoIconButton ariaLabel="Add">{AddIcon}</NeoIconButton>
`})})]})}function I(e={}){const{wrapper:n}={...t(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{I as default};
