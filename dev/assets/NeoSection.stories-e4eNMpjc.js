import{d as s,c as e,a as n,F as b}from"./iframe-D9nyRK5o.js";import{N as o}from"./NeoSection-YNQBYy8I.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const F={title:"Molecules/NeoSection",component:o,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean",description:"Removes the global max-width cap, stretching the 12 columns across the full viewport (minus padding).",table:{category:"Appearance"}},columnGap:{control:"text",description:"Sets the column-gap between grid columns. Use a CSS variable or a pixel value.",table:{category:"Appearance"}},rowGap:{control:"text",description:"Sets the row-gap between wrapped rows. Defaults to 0.",table:{category:"Appearance"}},padding:{control:"text",description:"Overrides the inline padding (gutter) of the section. Accepts a CSS length or variable.",table:{category:"Appearance"}}},args:{fullWidth:!1,columnGap:"var(--neo-gap-md)",rowGap:"0"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},y=()=>e(b,null,[e("div",{style:{background:"var(--neo-color-blue500)",color:"white",padding:"16px",textAlign:"center"}},[n("Default: Spans 12 Columns (Full Container)")]),e("div",{style:{background:"var(--neo-color-green500)",color:"white",padding:"16px",textAlign:"center",gridColumn:"content-start / span 6"}},[n("Manual: Span 6 (Left)")]),e("div",{style:{background:"var(--neo-color-orange500)",color:"white",padding:"16px",textAlign:"center",gridColumn:"span 6 / content-end"}},[n("Manual: Span 6 (Right)")])]),t={tags:["snapshot"],render:r=>s({name:"DefaultRender",setup(){return()=>e(o,r,{default:()=>[e(y,null,null)]})}})},a={tags:["snapshot"],args:{fullWidth:!0,padding:"var(--neo-spacing-layout-sm)"},render:r=>s({name:"FullWidthRender",setup(){return()=>e(o,r,{default:()=>[e("div",{style:{background:"var(--neo-color-purple500)",color:"white",padding:"16px",textAlign:"center"}},[n("Full Width Grid (Stretches to Viewport)")]),e(y,null,null)]})}})},d={tags:["snapshot"],args:{columnGap:"32px",rowGap:"16px"},render:r=>s({name:"CustomGapRender",setup(){return()=>e(o,r,{default:()=>[e("div",{style:{gridColumn:"span 4",background:"var(--neo-color-grey200)",padding:"10px"}},[n("Column 1")]),e("div",{style:{gridColumn:"span 4",background:"var(--neo-color-grey200)",padding:"10px"}},[n("Column 2")]),e("div",{style:{gridColumn:"span 4",background:"var(--neo-color-grey200)",padding:"10px"}},[n("Column 3")])]})}})},l={tags:["snapshot"],name:"Breaking the Container",render:r=>s({name:"FullBleedRender",setup(){return()=>e(o,r,{default:()=>[e("div",{style:{background:"var(--neo-color-grey800)",color:"white",padding:"16px"}},[n("Standard Container")]),e("div",{style:{gridColumn:"full-start / full-end",background:"var(--neo-color-red500)",color:"white",padding:"16px",textAlign:"center"}},[n("Full Bleed (Ignores Max-Width and Padding)")])]})}})};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoSectionProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoSection {...args}>
                        <GridVisualizer />
                    </NeoSection>;
      }
    });
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,g,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    fullWidth: true,
    padding: 'var(--neo-spacing-layout-sm)'
  },
  render: (args: NeoSectionProps) => {
    return defineComponent({
      name: 'FullWidthRender',
      setup() {
        return () => <NeoSection {...args}>
                        <div style={{
            background: 'var(--neo-color-purple500)',
            color: 'white',
            padding: '16px',
            textAlign: 'center'
          }}>
                            Full Width Grid (Stretches to Viewport)
                        </div>
                        <GridVisualizer />
                    </NeoSection>;
      }
    });
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,v,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columnGap: '32px',
    rowGap: '16px'
  },
  render: (args: NeoSectionProps) => {
    return defineComponent({
      name: 'CustomGapRender',
      setup() {
        return () => <NeoSection {...args}>
                        <div style={{
            gridColumn: 'span 4',
            background: 'var(--neo-color-grey200)',
            padding: '10px'
          }}>
                            Column 1
                        </div>
                        <div style={{
            gridColumn: 'span 4',
            background: 'var(--neo-color-grey200)',
            padding: '10px'
          }}>
                            Column 2
                        </div>
                        <div style={{
            gridColumn: 'span 4',
            background: 'var(--neo-color-grey200)',
            padding: '10px'
          }}>
                            Column 3
                        </div>
                    </NeoSection>;
      }
    });
  }
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,S,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  name: 'Breaking the Container',
  render: (args: NeoSectionProps) => {
    return defineComponent({
      name: 'FullBleedRender',
      setup() {
        return () => <NeoSection {...args}>
                        <div style={{
            background: 'var(--neo-color-grey800)',
            color: 'white',
            padding: '16px'
          }}>
                            Standard Container
                        </div>
                        <div style={{
            gridColumn: 'full-start / full-end',
            background: 'var(--neo-color-red500)',
            color: 'white',
            padding: '16px',
            textAlign: 'center'
          }}>
                            Full Bleed (Ignores Max-Width and Padding)
                        </div>
                    </NeoSection>;
      }
    });
  }
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const A=["Default","FullWidth","CustomGap","FullBleedChild"];export{d as CustomGap,t as Default,l as FullBleedChild,a as FullWidth,A as __namedExportsOrder,F as default};
