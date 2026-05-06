import{d as s,c as n,a as e,F as b}from"./iframe-BKkc2IKm.js";import{N as o}from"./NeoSection-LAZRO83Q.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const F={title:"Molecules/NeoSection",component:o,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean",description:"Removes the global max-width cap, stretching the 12 columns across the full viewport (minus padding).",table:{category:"Appearance"}},columnGap:{control:"text",description:"Sets the column-gap between grid columns. Use a CSS variable or a pixel value.",table:{category:"Appearance"}},rowGap:{control:"text",description:"Sets the row-gap between wrapped rows. Defaults to 0.",table:{category:"Appearance"}}},args:{fullWidth:!1,columnGap:"var(--neo-gap-md)",rowGap:"0"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},S=()=>n(b,null,[n("div",{style:{background:"var(--neo-color-blue500)",color:"white",padding:"16px",textAlign:"center"}},[e("Default: Spans 12 Columns (Full Container)")]),n("div",{style:{background:"var(--neo-color-green500)",color:"white",padding:"16px",textAlign:"center",gridColumn:"content-start / span 6"}},[e("Manual: Span 6 (Left)")]),n("div",{style:{background:"var(--neo-color-orange500)",color:"white",padding:"16px",textAlign:"center",gridColumn:"span 6 / content-end"}},[e("Manual: Span 6 (Right)")])]),a={tags:["snapshot"],render:r=>s({name:"DefaultRender",setup(){return()=>n(o,r,{default:()=>[n(S,null,null)]})}})},t={tags:["snapshot"],args:{fullWidth:!0,padding:"var(--neo-spacing-layout-sm)"},render:r=>s({name:"FullWidthRender",setup(){return()=>n(o,r,{default:()=>[n("div",{style:{background:"var(--neo-color-purple500)",color:"white",padding:"16px",textAlign:"center"}},[e("Full Width Grid (Stretches to Viewport)")]),n(S,null,null)]})}})},l={tags:["snapshot"],args:{columnGap:"32px",rowGap:"16px"},render:r=>s({name:"CustomGapRender",setup(){return()=>n(o,r,{default:()=>[n("div",{style:{gridColumn:"span 4",background:"var(--neo-color-grey200)",padding:"10px"}},[e("Column 1")]),n("div",{style:{gridColumn:"span 4",background:"var(--neo-color-grey200)",padding:"10px"}},[e("Column 2")]),n("div",{style:{gridColumn:"span 4",background:"var(--neo-color-grey200)",padding:"10px"}},[e("Column 3")])]})}})},d={tags:["snapshot"],name:"Breaking the Container",render:r=>s({name:"FullBleedRender",setup(){return()=>n(o,r,{default:()=>[n("div",{style:{background:"var(--neo-color-grey800)",color:"white",padding:"16px"}},[e("Standard Container")]),n("div",{style:{gridColumn:"full-start / full-end",background:"var(--neo-color-red500)",color:"white",padding:"16px",textAlign:"center"}},[e("Full Bleed (Ignores Max-Width and Padding)")])]})}})};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,g,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,v,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,f,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const W=["Default","FullWidth","CustomGap","FullBleedChild"];export{l as CustomGap,a as Default,d as FullBleedChild,t as FullWidth,W as __namedExportsOrder,F as default};
