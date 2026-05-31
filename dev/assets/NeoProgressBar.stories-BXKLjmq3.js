import{d as l,c as e,m as g,b as F}from"./iframe-Bg0OttVg.js";import{g as _}from"./colorShowcase-BQraTlZf.js";import{c as q}from"./createA11yPlay-DxivIEqv.js";import{N as s}from"./NeoProgressBar-yO2Ts9wK.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-CjNTfdGc.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const E=F.filter(r=>r!=="white"),U={title:"Atoms/NeoProgressBar",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Values outside this range are clamped automatically.",table:{category:"Content"}},ariaLabel:{control:"text",description:"Accessible label applied to `aria-label`. Required — there is no visible label on this component.",table:{category:"Accessibility"}},color:{description:"Theme color applied to the fill bar.",table:{category:"Appearance"}},size:{control:"select",description:"Height of the track. `xs` = 2 px, `small` = 4 px, `medium` = 8 px.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded caps to the track and fill.",table:{category:"Appearance"}},decimals:{control:"number",description:"Max fraction digits when announcing the value via `aria-valuetext`. Defaults to 2.",table:{category:"Accessibility"}},locale:{control:"text",description:"BCP 47 locale for `aria-valuetext` formatting. Falls back to `<html lang>`.",table:{category:"Accessibility"}}},args:{value:68,ariaLabel:"68% complete",color:"blue",size:"small",rounded:!1},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},i={tags:["snapshot"],render:r=>l({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(s,r,null)])}}),parameters:{docs:{source:{code:`<NeoProgressBar
  :value="68"
  aria-label="68% complete"
  color="blue"
  size="small"
/>`}}}},p={tags:["snapshot"],render:r=>l({name:"SizesRender",setup(){const a=["xs","small","medium"];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",inlineSize:"320px",padding:"16px"}},[a.map(t=>e("div",{key:t,style:{display:"flex",flexDirection:"column",gap:"6px"}},[e("span",{style:{fontSize:"0.75rem",color:"var(--neo-color-grey600)"}},[t]),e(s,g(r,{size:t,ariaLabel:`${t} size example`}),null)]))])}}),parameters:{docs:{source:{code:`<NeoProgressBar :value="68" aria-label="xs example" size="xs" color="blue" />
<NeoProgressBar :value="68" aria-label="small example" size="small" color="blue" />
<NeoProgressBar :value="68" aria-label="medium example" size="medium" color="blue" />`}}}},c={tags:["snapshot"],args:{rounded:!0,size:"medium"},render:r=>l({name:"RoundedRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(s,r,null)])}}),parameters:{docs:{source:{code:'<NeoProgressBar :value="68" aria-label="68% complete" color="blue" size="medium" rounded />'}}}},d={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}}},o={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:r=>l({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[E.map(a=>_("NeoProgressBar",a,e(s,g({key:a},r,{color:a,ariaLabel:`${a} progress bar`}),null),"default",!1))])}})},n={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:r=>l({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[E.map(a=>_("NeoProgressBar",a,e(s,g({key:a},r,{color:a,ariaLabel:`${a} progress bar`}),null),"default",!0))])}})},m={...o,tags:["!dev","test-only"],play:q()},u={...n,tags:["!dev","test-only"],play:q()};var x,y,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,v,z;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var P,h,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(h=c.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var C,N,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(W=u.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const X=["Default","Sizes","Rounded","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{o as AllColors,m as AllColorsA11y,n as AllColorsOnDark,u as AllColorsOnDarkA11y,i as Default,d as RTL,c as Rounded,p as Sizes,X as __namedExportsOrder,U as default};
