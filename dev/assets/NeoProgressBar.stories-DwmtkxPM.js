import{d as o,c as e,m as c,b as R}from"./iframe-Da9xFhCi.js";import{g as k}from"./colorShowcase-kwizdZpn.js";import{N as n}from"./NeoProgressBar-D_KOoqBu.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const A=R.filter(r=>r!=="white"),W={title:"Atoms/NeoProgressBar",component:n,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Values outside this range are clamped automatically.",table:{category:"Content"}},ariaLabel:{control:"text",description:"Accessible label applied to `aria-label`. Required — there is no visible label on this component.",table:{category:"Accessibility"}},color:{description:"Theme color applied to the fill bar.",table:{category:"Appearance"}},size:{control:"select",description:"Height of the track. `xs` = 2 px, `small` = 4 px, `medium` = 8 px.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded caps to the track and fill.",table:{category:"Appearance"}}},args:{value:68,ariaLabel:"68% complete",color:"blue",size:"small",rounded:!1}},l={render:r=>o({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(n,r,null)])}}),parameters:{docs:{source:{code:`<NeoProgressBar
  :value="68"
  aria-label="68% complete"
  color="blue"
  size="small"
/>`}}}},i={render:r=>o({name:"SizesRender",setup(){const a=["xs","small","medium"];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",inlineSize:"320px",padding:"16px"}},[a.map(s=>e("div",{key:s,style:{display:"flex",flexDirection:"column",gap:"6px"}},[e("span",{style:{fontSize:"0.75rem",color:"var(--neo-color-grey600)"}},[s]),e(n,c(r,{size:s,ariaLabel:`${s} size example`}),null)]))])}}),parameters:{docs:{source:{code:`<NeoProgressBar :value="68" aria-label="xs example" size="xs" color="blue" />
<NeoProgressBar :value="68" aria-label="small example" size="small" color="blue" />
<NeoProgressBar :value="68" aria-label="medium example" size="medium" color="blue" />`}}}},t={args:{rounded:!0,size:"medium"},render:r=>o({name:"RoundedRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(n,r,null)])}}),parameters:{docs:{source:{code:'<NeoProgressBar :value="68" aria-label="68% complete" color="blue" size="medium" rounded />'}}}},p={render:r=>o({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[A.map(a=>k("NeoProgressBar",a,e(n,c({key:a},r,{color:a,ariaLabel:`${a} progress bar`}),null),"default",!1))])}})},d={globals:{backgrounds:"#000"},render:r=>o({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[A.map(a=>k("NeoProgressBar",a,e(n,c({key:a},r,{color:a,ariaLabel:`${a} progress bar`}),null),"default",!0))])}})};var u,m,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: NeoProgressBarProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressBar {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressBar
  :value="68"
  aria-label="68% complete"
  color="blue"
  size="small"
/>\`
      }
    }
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,b,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: NeoProgressBarProps) => {
    return defineComponent({
      name: 'SizesRender',
      setup() {
        const sizes = ['xs', 'small', 'medium'] as const;
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          inlineSize: '320px',
          padding: '16px'
        }}>
                        {sizes.map(size => <div key={size} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
                                <span style={{
              fontSize: '0.75rem',
              color: 'var(--neo-color-grey600)'
            }}>
                                    {size}
                                </span>
                                <NeoProgressBar {...args} size={size} ariaLabel={\`\${size} size example\`} />
                            </div>)}
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressBar :value="68" aria-label="xs example" size="xs" color="blue" />
<NeoProgressBar :value="68" aria-label="small example" size="small" color="blue" />
<NeoProgressBar :value="68" aria-label="medium example" size="medium" color="blue" />\`
      }
    }
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,z,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    rounded: true,
    size: 'medium'
  },
  render: (args: NeoProgressBarProps) => {
    return defineComponent({
      name: 'RoundedRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressBar {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressBar :value="68" aria-label="68% complete" color="blue" size="medium" rounded />\`
      }
    }
  }
}`,...(v=(z=t.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var P,N,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: NeoProgressBarProps) => {
    return defineComponent({
      name: 'AllColorsRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxInlineSize: '360px',
          padding: '16px'
        }}>
                        {surfaceColors.map((color: SurfaceColor) => getColorWrapper('NeoProgressBar', color, <NeoProgressBar key={color} {...args} color={color} ariaLabel={\`\${color} progress bar\`} />, 'default', false))}
                    </div>;
      }
    });
  }
}`,...(B=(N=p.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var C,S,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: (args: NeoProgressBarProps) => {
    return defineComponent({
      name: 'AllColorsOnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxInlineSize: '360px',
          padding: '16px'
        }}>
                        {surfaceColors.map((color: SurfaceColor) => getColorWrapper('NeoProgressBar', color, <NeoProgressBar key={color} {...args} color={color} ariaLabel={\`\${color} progress bar\`} />, 'default', true))}
                    </div>;
      }
    });
  }
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const T=["Default","Sizes","Rounded","AllColors","AllColorsOnDark"];export{p as AllColors,d as AllColorsOnDark,l as Default,t as Rounded,i as Sizes,T as __namedExportsOrder,W as default};
