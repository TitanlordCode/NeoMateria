import{d as l,c as e,m as g,b as H}from"./iframe-CiKriRT1.js";import{g as _}from"./colorShowcase-C8uURTUW.js";import{c as q}from"./createA11yPlay-CfdnV7f3.js";import{N as a}from"./NeoProgressBar-DKMfIJbb.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-6MnRr2qa.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const E=H.filter(r=>r!=="white"),U={title:"Atoms/NeoProgressBar",component:a,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Values outside this range are clamped automatically.",table:{category:"Content"}},ariaLabel:{control:"text",description:"Accessible label applied to `aria-label`. Required — there is no visible label on this component.",table:{category:"Accessibility"}},color:{description:"Theme color applied to the fill bar.",table:{category:"Appearance"}},size:{control:"select",description:"Height of the track. `xs` = 2 px, `small` = 4 px, `medium` = 8 px.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded caps to the track and fill.",table:{category:"Appearance"}}},args:{value:68,ariaLabel:"68% complete",color:"blue",size:"small",rounded:!1},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},p={tags:["snapshot"],render:r=>l({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,r,null)])}}),parameters:{docs:{source:{code:`<NeoProgressBar
  :value="68"
  aria-label="68% complete"
  color="blue"
  size="small"
/>`}}}},i={tags:["snapshot"],render:r=>l({name:"SizesRender",setup(){const s=["xs","small","medium"];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",inlineSize:"320px",padding:"16px"}},[s.map(t=>e("div",{key:t,style:{display:"flex",flexDirection:"column",gap:"6px"}},[e("span",{style:{fontSize:"0.75rem",color:"var(--neo-color-grey600)"}},[t]),e(a,g(r,{size:t,ariaLabel:`${t} size example`}),null)]))])}}),parameters:{docs:{source:{code:`<NeoProgressBar :value="68" aria-label="xs example" size="xs" color="blue" />
<NeoProgressBar :value="68" aria-label="small example" size="small" color="blue" />
<NeoProgressBar :value="68" aria-label="medium example" size="medium" color="blue" />`}}}},c={tags:["snapshot"],args:{rounded:!0,size:"medium"},render:r=>l({name:"RoundedRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,r,null)])}}),parameters:{docs:{source:{code:'<NeoProgressBar :value="68" aria-label="68% complete" color="blue" size="medium" rounded />'}}}},d={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}}},o={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:r=>l({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[E.map(s=>_("NeoProgressBar",s,e(a,g({key:s},r,{color:s,ariaLabel:`${s} progress bar`}),null),"default",!1))])}})},n={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:r=>l({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[E.map(s=>_("NeoProgressBar",s,e(a,g({key:s},r,{color:s,ariaLabel:`${s} progress bar`}),null),"default",!0))])}})},m={...o,tags:["!dev","test-only"],play:q()},u={...n,tags:["!dev","test-only"],play:q()};var x,y,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,v,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var P,C,h;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var A,N,B;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var S,D,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
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
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var R,L,w;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var O,$,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(I=($=m.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var T,W,V;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(V=(W=u.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const X=["Default","Sizes","Rounded","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{o as AllColors,m as AllColorsA11y,n as AllColorsOnDark,u as AllColorsOnDarkA11y,p as Default,d as RTL,c as Rounded,i as Sizes,X as __namedExportsOrder,U as default};
