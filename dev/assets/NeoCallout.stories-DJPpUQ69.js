import{d as t,c as r,a as l,b as _,h as E}from"./iframe-B0Dukz3x.js";import{a as j}from"./colorShowcase-DrQqXaLn.js";import{c as V}from"./createA11yPlay-BQ9rYRTW.js";import{N as o}from"./NeoCallout-C42_36vr.js";import{I as m}from"./defaultIcons-Dm9DC7tC.js";import{i as z}from"./iconSnippets-DKkOH1Iz.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-C0a-FzRY.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const q=["bordered","filled"],M=_.filter(e=>e!=="white"),oe={title:"Molecules/NeoCallout",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:M,description:"Theme color. Sets border/background and text color.",table:{category:"Appearance"}},variant:{control:"select",options:q,description:"`bordered` — outline box. `filled` — solid background.",table:{category:"Appearance"}},icon:{control:!1,description:"Optional icon displayed at the start of the callout.",table:{category:"Slots"}},default:{control:!1,description:"Main callout content.",table:{category:"Slots"}}},args:{color:"blue",variant:"bordered"}},s={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>r(o,e,{default:()=>[l("This feature is currently in beta. Behaviour may change in future releases.")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>`}}}},u={tags:["snapshot"],args:{color:"blue",variant:"bordered"},render:e=>t({name:"WithIconRender",setup(){return()=>r(o,e,{default:()=>[l("This feature is currently in beta. Behaviour may change in future releases.")],icon:()=>m})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${z}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>`}}}},i={tags:["snapshot"],args:{color:"blue",variant:"filled"},render:e=>t({name:"FilledRender",setup(){return()=>r(o,e,{default:()=>[l("Your session will expire in 5 minutes. Save your work to avoid losing progress.")],icon:()=>m})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="filled">
  <template #icon>${z}</template>
  Your session will expire in 5 minutes.
</NeoCallout>`}}}},c={tags:["snapshot"],globals:{direction:"rtl"},render:e=>t({name:"RTLRender",setup(){return()=>r(o,e,{default:()=>[l("هذا إشعار مهم يحتاج إلى انتباهك.")]})}})},n={tags:["snapshot"],render:j(o,[{name:"Bordered",variant:"bordered",renderComponent:(e,O)=>E(O,{color:e,variant:"bordered"},{default:()=>`${e} — bordered callout`,icon:()=>m})}])},a={tags:["snapshot"],render:()=>t({name:"AllColorsFilledRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"480px"}},[M.map(e=>r(o,{key:e,color:e,variant:"filled"},{default:()=>[e,l(" — filled callout")],icon:()=>m}))])}})},d={...n,tags:["!dev","test-only"],play:V()},p={...a,tags:["!dev","test-only"],play:V()};var f,g,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoCallout {...args}>
                        This feature is currently in beta. Behaviour may change in future releases.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>\`
      }
    }
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,b,h;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'bordered'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'WithIconRender',
      setup() {
        return () => <NeoCallout {...args} v-slots={{
          icon: () => InfoIcon
        }}>
                        This feature is currently in beta. Behaviour may change in future releases.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="bordered">
  <template #icon>\${infoIconSvg}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>\`
      }
    }
  }
}`,...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,N,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'filled'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'FilledRender',
      setup() {
        return () => <NeoCallout {...args} v-slots={{
          icon: () => InfoIcon
        }}>
                        Your session will expire in 5 minutes. Save your work to avoid losing progress.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="filled">
  <template #icon>\${infoIconSvg}</template>
  Your session will expire in 5 minutes.
</NeoCallout>\`
      }
    }
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var I,x,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoCallout {...args}>هذا إشعار مهم يحتاج إلى انتباهك.</NeoCallout>;
      }
    });
  }
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var R,T,F;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createAllColorsRender<typeof NeoCallout>(NeoCallout, [{
    name: 'Bordered',
    variant: 'bordered',
    renderComponent: (color, Component) => h(Component, {
      color,
      variant: 'bordered'
    }, {
      default: () => \`\${color} — bordered callout\`,
      icon: () => InfoIcon
    })
  }])
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var B,D,w;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: () => {
    return defineComponent({
      name: 'AllColorsFilledRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxInlineSize: '480px'
        }}>
                        {surfaceColors.map(color => <NeoCallout key={color} color={color} variant="filled" v-slots={{
            icon: () => InfoIcon
          }}>
                                {color} — filled callout
                            </NeoCallout>)}
                    </div>;
      }
    });
  }
}`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var P,k,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...($=(k=d.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var L,W,Y;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...AllColorsFilled,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Y=(W=p.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const re=["Default","WithIcon","Filled","RTL","AllColors","AllColorsFilled","AllColorsA11y","AllColorsFilledA11y"];export{n as AllColors,d as AllColorsA11y,a as AllColorsFilled,p as AllColorsFilledA11y,s as Default,i as Filled,c as RTL,u as WithIcon,re as __namedExportsOrder,oe as default};
