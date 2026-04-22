import{d as l,c as e,m as g,b as H}from"./iframe-B0Dukz3x.js";import{g as q}from"./colorShowcase-DrQqXaLn.js";import{c as w}from"./createA11yPlay-BQ9rYRTW.js";import{N as s}from"./NeoProgressBar-CVtrzYos.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-C0a-FzRY.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const E=H.filter(r=>r!=="white"),U={title:"Atoms/NeoProgressBar",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Values outside this range are clamped automatically.",table:{category:"Content"}},ariaLabel:{control:"text",description:"Accessible label applied to `aria-label`. Required — there is no visible label on this component.",table:{category:"Accessibility"}},color:{description:"Theme color applied to the fill bar.",table:{category:"Appearance"}},size:{control:"select",description:"Height of the track. `xs` = 2 px, `small` = 4 px, `medium` = 8 px.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded caps to the track and fill.",table:{category:"Appearance"}}},args:{value:68,ariaLabel:"68% complete",color:"blue",size:"small",rounded:!1}},i={tags:["snapshot"],render:r=>l({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(s,r,null)])}}),parameters:{docs:{source:{code:`<NeoProgressBar
  :value="68"
  aria-label="68% complete"
  color="blue"
  size="small"
/>`}}}},p={tags:["snapshot"],render:r=>l({name:"SizesRender",setup(){const a=["xs","small","medium"];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",inlineSize:"320px",padding:"16px"}},[a.map(t=>e("div",{key:t,style:{display:"flex",flexDirection:"column",gap:"6px"}},[e("span",{style:{fontSize:"0.75rem",color:"var(--neo-color-grey600)"}},[t]),e(s,g(r,{size:t,ariaLabel:`${t} size example`}),null)]))])}}),parameters:{docs:{source:{code:`<NeoProgressBar :value="68" aria-label="xs example" size="xs" color="blue" />
<NeoProgressBar :value="68" aria-label="small example" size="small" color="blue" />
<NeoProgressBar :value="68" aria-label="medium example" size="medium" color="blue" />`}}}},c={tags:["snapshot"],args:{rounded:!0,size:"medium"},render:r=>l({name:"RoundedRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(s,r,null)])}}),parameters:{docs:{source:{code:'<NeoProgressBar :value="68" aria-label="68% complete" color="blue" size="medium" rounded />'}}}},d={tags:["snapshot"],globals:{direction:"rtl"}},o={tags:["snapshot"],render:r=>l({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[E.map(a=>q("NeoProgressBar",a,e(s,g({key:a},r,{color:a,ariaLabel:`${a} progress bar`}),null),"default",!1))])}})},n={tags:["snapshot"],globals:{backgrounds:"#000"},render:r=>l({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[E.map(a=>q("NeoProgressBar",a,e(s,g({key:a},r,{color:a,ariaLabel:`${a} progress bar`}),null),"default",!0))])}})},u={...o,tags:["!dev","test-only"],play:w()},m={...n,tags:["!dev","test-only"],play:w()};var x,y,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,z,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(z=p.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var P,C,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var N,B,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  }
}`,...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var h,D,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var R,L,O;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(O=(L=n.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,I,T;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var W,V,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const X=["Default","Sizes","Rounded","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{o as AllColors,u as AllColorsA11y,n as AllColorsOnDark,m as AllColorsOnDarkA11y,i as Default,d as RTL,c as Rounded,p as Sizes,X as __namedExportsOrder,U as default};
