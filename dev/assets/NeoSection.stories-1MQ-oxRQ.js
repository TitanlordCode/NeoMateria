import{d as s,c as n,a as e,F as y}from"./iframe-B0Dukz3x.js";import{N as t}from"./NeoSection-C1A2UMcz.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const W={title:"Molecules/NeoSection",component:t,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean",description:"If true, ignores the 1280px max-width but maintains the 12-column grid and outer padding.",table:{category:"Appearance"}},gap:{control:"text",description:'Sets the column-gap. Use CSS variables like `var(--neo-gap-lg)` or a string like "8px"',table:{category:"Appearance"}}},args:{fullWidth:!1,gap:"var(--neo-gap-md)"}},b=()=>n(y,null,[n("div",{style:{background:"var(--neo-color-blue-500, #3b82f6)",color:"white",padding:"16px",textAlign:"center"}},[e("Default: Spans 12 Columns (Full Container)")]),n("div",{style:{background:"var(--neo-color-green-500, #10b981)",color:"white",padding:"16px",textAlign:"center",gridColumn:"content-start / span 6"}},[e("Manual: Span 6 (Left)")]),n("div",{style:{background:"var(--neo-color-orange-500, #f59e0b)",color:"white",padding:"16px",textAlign:"center",gridColumn:"span 6 / content-end"}},[e("Manual: Span 6 (Right)")])]),a={tags:["snapshot"],render:r=>s({name:"DefaultRender",setup(){return()=>n(t,r,{default:()=>[n(b,null,null)]})}})},o={tags:["snapshot"],args:{fullWidth:!0,padding:"var(--neo-spacing-layout-sm)"},render:r=>s({name:"FullWidthRender",setup(){return()=>n(t,r,{default:()=>[n("div",{style:{background:"var(--neo-color-purple-500, #8b5cf6)",color:"white",padding:"16px",textAlign:"center"}},[e("Full Width Grid (Stretches to Viewport)")]),n(b,null,null)]})}})},d={tags:["snapshot"],args:{gap:"var(--neo-gap-xl)"},render:r=>s({name:"CustomGapRender",setup(){return()=>n(t,r,{default:()=>[n("div",{style:{gridColumn:"span 4",background:"#eee",padding:"10px"}},[e("Column 1")]),n("div",{style:{gridColumn:"span 4",background:"#eee",padding:"10px"}},[e("Column 2")]),n("div",{style:{gridColumn:"span 4",background:"#eee",padding:"10px"}},[e("Column 3")])]})}})},l={tags:["snapshot"],name:"Breaking the Container",render:r=>s({name:"FullBleedRender",setup(){return()=>n(t,r,{default:()=>[n("div",{style:{background:"#333",color:"white",padding:"16px"}},[e("Standard Container")]),n("div",{style:{gridColumn:"full-start / full-end",background:"var(--neo-color-red-500, #ef4444)",color:"white",padding:"16px",textAlign:"center"}},[e("Full Bleed (Ignores 1280px and Padding)")])]})}})};var i,u,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,g,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            background: 'var(--neo-color-purple-500, #8b5cf6)',
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
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,v,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    gap: 'var(--neo-gap-xl)'
  },
  render: (args: NeoSectionProps) => {
    return defineComponent({
      name: 'CustomGapRender',
      setup() {
        return () => <NeoSection {...args}>
                        <div style={{
            gridColumn: 'span 4',
            background: '#eee',
            padding: '10px'
          }}>
                            Column 1
                        </div>
                        <div style={{
            gridColumn: 'span 4',
            background: '#eee',
            padding: '10px'
          }}>
                            Column 2
                        </div>
                        <div style={{
            gridColumn: 'span 4',
            background: '#eee',
            padding: '10px'
          }}>
                            Column 3
                        </div>
                    </NeoSection>;
      }
    });
  }
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,x,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  name: 'Breaking the Container',
  render: (args: NeoSectionProps) => {
    return defineComponent({
      name: 'FullBleedRender',
      setup() {
        return () => <NeoSection {...args}>
                        <div style={{
            background: '#333',
            color: 'white',
            padding: '16px'
          }}>
                            Standard Container
                        </div>
                        <div style={{
            gridColumn: 'full-start / full-end',
            background: 'var(--neo-color-red-500, #ef4444)',
            color: 'white',
            padding: '16px',
            textAlign: 'center'
          }}>
                            Full Bleed (Ignores 1280px and Padding)
                        </div>
                    </NeoSection>;
      }
    });
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const A=["Default","FullWidth","CustomGap","FullBleedChild"];export{d as CustomGap,a as Default,l as FullBleedChild,o as FullWidth,A as __namedExportsOrder,W as default};
