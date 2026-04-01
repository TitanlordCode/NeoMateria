import{d as i,c as o,a as u,b as F,h as w}from"./iframe-Da9xFhCi.js";import{a as k}from"./colorShowcase-kwizdZpn.js";import{N as r}from"./NeoCallout-ExkAge61.js";import{I as c}from"./defaultIcons-DqdwkU5d.js";import{i as A}from"./iconSnippets-DKkOH1Iz.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const D=["bordered","filled"],R=F.filter(e=>e!=="white"),E={title:"Molecules/NeoCallout",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:R,description:"Theme color. Sets border/background and text color.",table:{category:"Appearance"}},variant:{control:"select",options:D,description:"`bordered` — outline box. `filled` — solid background.",table:{category:"Appearance"}}},args:{color:"blue",variant:"bordered"}},n={render:e=>i({name:"DefaultRender",setup(){return()=>o(r,e,{default:()=>[u("This feature is currently in beta. Behaviour may change in future releases.")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>`}}}},a={args:{color:"blue",variant:"bordered"},render:e=>i({name:"WithIconRender",setup(){return()=>o(r,e,{default:()=>[u("This feature is currently in beta. Behaviour may change in future releases.")],icon:()=>c})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${A}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>`}}}},l={args:{color:"blue",variant:"filled"},render:e=>i({name:"FilledRender",setup(){return()=>o(r,e,{default:()=>[u("Your session will expire in 5 minutes. Save your work to avoid losing progress.")],icon:()=>c})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="filled">
  <template #icon>${A}</template>
  Your session will expire in 5 minutes.
</NeoCallout>`}}}},t={render:k(r,[{name:"Bordered",variant:"bordered",renderComponent:(e,B)=>w(B,{color:e,variant:"bordered"},{default:()=>`${e} — bordered callout`,icon:()=>c})}])},s={render:()=>i({name:"AllColorsFilledRender",setup(){return()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"480px"}},[R.map(e=>o(r,{key:e,color:e,variant:"filled"},{default:()=>[e,u(" — filled callout")],icon:()=>c}))])}})};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,C,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,v,N;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(N=(v=l.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,y,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var x,S,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const M=["Default","WithIcon","Filled","AllColors","AllColorsFilled"];export{t as AllColors,s as AllColorsFilled,n as Default,l as Filled,a as WithIcon,M as __namedExportsOrder,E as default};
