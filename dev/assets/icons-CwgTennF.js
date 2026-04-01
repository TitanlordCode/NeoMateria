import{u as s,j as o,M as r,T as c,C as a}from"./blocks-CKx--D8A.js";import{I as l,A as i}from"./icons.stories-D63SXAnF.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BNVHVJhn.js";import"./defaultIcons-C1WNt4aX.js";function t(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:l}),`
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
`,o.jsx(a,{of:i,withToolbar:!1}),`
`,o.jsxs(n.p,{children:["All icons render with ",o.jsx(n.code,{children:"currentColor"}),", so they automatically adapt to their context — including dark mode and colored backgrounds."]})]})}function x(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{x as default};
