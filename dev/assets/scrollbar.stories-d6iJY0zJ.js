import{d as x,c as a}from"./iframe-CDp9AjhM.js";import"./preload-helper-Dp1pzeXC.js";const S={tags:["!dev"],title:"Foundation/Scrollbar",parameters:{docs:{description:{component:`
NeoMateria provides a custom scrollbar system. Use the compiled utility classes in your own projects — the PostCSS mixin is for contributors building components inside the library.

---

### Utility classes — for library consumers ✓

These are compiled into the library's CSS output and available in any project that imports NeoMateria.

| Class | Effect |
|---|---|
| \`u-scrollbar\` | Applies \`overflow: auto\` and custom scrollbar styles |
| \`u-scrollbar--rounded\` | Rounds the track and thumb corners — must be combined with \`u-scrollbar\` |

---

### CSS mixin — for library contributors only

\`\`\`css
.MyScrollableArea {
  @mixin addScrollbar;
}
\`\`\`

This requires PostCSS with \`postcss-mixins\` configured to load NeoMateria's mixin files. It is **not** available to library consumers unless they replicate that PostCSS setup. Use the \`u-scrollbar\` utility class instead.

The mixin respects dark mode via \`@mixin onDark\` and provides a \`scrollbar-width: thin\` fallback for Firefox. Rounded corners are driven by the CSS variable \`--neo-scrollbar-radius\` (default \`0px\`).
                `}}},argTypes:{color:{table:{disable:!0}}}},m=Array.from({length:20},(r,v)=>`Item ${v+1}`),y=x({name:"ScrollItems",setup(){return()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"320px"}},[m.map(r=>a("div",{key:r,style:{padding:"8px 12px",background:"var(--neo-color-grey100)",borderRadius:"4px",fontSize:"14px"}},[r]))])}}),g=x({name:"DarkScrollItems",setup(){return()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"320px"}},[m.map(r=>a("div",{key:r,style:{padding:"8px 12px",background:"var(--neo-color-grey800)",borderRadius:"4px",color:"var(--neo-color-grey100)",fontSize:"14px"}},[r]))])}}),e={render:()=>y,decorators:[()=>({template:'<div class="u-scrollbar" tabindex="0" style="block-size: 240px; border: 1px solid var(--neo-color-grey200); border-radius: 8px; padding: 16px;"><story /></div>'})],parameters:{docs:{source:{code:`<div class="u-scrollbar" tabindex="0" style="block-size: 240px;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey100); border-radius: 4px; font-size: 14px;">
    {{ item }}
  </div>
</div>`}}}},o={render:()=>y,decorators:[()=>({template:'<div class="u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px; border: 1px solid var(--neo-color-grey200); border-radius: 8px; padding: 16px;"><story /></div>'})],parameters:{docs:{source:{code:`<div class="u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey100); border-radius: 4px; font-size: 14px;">
    {{ item }}
  </div>
</div>`}}}},s={globals:{backgrounds:"#000"},render:()=>g,decorators:[()=>({template:'<div class="u-onDark u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px; background: #111; border: 1px solid var(--neo-color-grey700); border-radius: 8px; padding: 16px;"><story /></div>'})],parameters:{docs:{source:{code:`<div class="u-onDark u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px; background: #111;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey800); border-radius: 4px; color: var(--neo-color-grey100); font-size: 14px;">
    {{ item }}
  </div>
</div>`}}}};var d,i,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => scrollItems,
  decorators: [() => ({
    template: \`<div class="u-scrollbar" tabindex="0" style="block-size: 240px; border: 1px solid var(--neo-color-grey200); border-radius: 8px; padding: 16px;"><story /></div>\`
  })],
  parameters: {
    docs: {
      source: {
        code: \`<div class="u-scrollbar" tabindex="0" style="block-size: 240px;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey100); border-radius: 4px; font-size: 14px;">
    {{ item }}
  </div>
</div>\`
      }
    }
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,t,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => scrollItems,
  decorators: [() => ({
    template: \`<div class="u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px; border: 1px solid var(--neo-color-grey200); border-radius: 8px; padding: 16px;"><story /></div>\`
  })],
  parameters: {
    docs: {
      source: {
        code: \`<div class="u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey100); border-radius: 4px; font-size: 14px;">
    {{ item }}
  </div>
</div>\`
      }
    }
  }
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var p,u,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: () => darkScrollItems,
  decorators: [() => ({
    template: \`<div class="u-onDark u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px; background: #111; border: 1px solid var(--neo-color-grey700); border-radius: 8px; padding: 16px;"><story /></div>\`
  })],
  parameters: {
    docs: {
      source: {
        code: \`<div class="u-onDark u-scrollbar u-scrollbar--rounded" tabindex="0" style="block-size: 240px; background: #111;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey800); border-radius: 4px; color: var(--neo-color-grey100); font-size: 14px;">
    {{ item }}
  </div>
</div>\`
      }
    }
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const z=["Default","Rounded","OnDark"];export{e as Default,s as OnDark,o as Rounded,z as __namedExportsOrder,S as default};
