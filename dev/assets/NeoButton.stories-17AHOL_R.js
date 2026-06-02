import{d as D,c as t,r as $e,F as et,a as tt}from"./iframe-D9nyRK5o.js";import{N as r}from"./NeoButton-CODeixOj.js";import{N as qe}from"./NeoSpinner-B2yQBwmR.js";import{b as rt,a as at}from"./NeoButtonTypes-naNG8zvj.js";import{d as st,a as ot}from"./argTypes-VnJZhiy7.js";import{A as w,D as Je}from"./defaultIcons-DXzthn_L.js";import{c as Qe}from"./colorShowcase-CPaxLojg.js";import{c as Xe}from"./createA11yPlay-CpEQ4bEB.js";import"./preload-helper-Dp1pzeXC.js";import"./useButton-B-Bpk_ne.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-Cexy51PO.js";import"./iconStrings-DvlgHS7z.js";import"./axe-zbpV6D8O.js";const{expect:nt,fn:ct,userEvent:it,within:lt}=__STORYBOOK_MODULE_TEST__,Bt={title:"Atoms/Button/NeoButton",component:r,tags:["autodocs","grimeria"],argTypes:{...ot,...st,text:{control:"text",table:{category:"Content"},description:"Button label text. Falls back to the default slot if omitted."},color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:at,description:"Controls padding and font size. Defaults to `medium`.",table:{category:"Appearance"}},variant:{control:"select",options:rt,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners (`border-radius: 9999px`) for a pill shape.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"Stretches the button to fill its container's full inline size.",table:{category:"Appearance"}},pressed:{control:"boolean",description:'Marks the button as toggled on. Sets `aria-pressed="true"` and applies the `NeoButton--pressed` CSS modifier.',table:{category:"State"}},default:{control:!1,description:"Default slot content rendered inside the button. Falls back to the `text` prop if empty.",table:{category:"Slots"}},prefix:{control:!1,description:"Content rendered before the label and start icon (e.g. a loading spinner).",table:{category:"Slots"}},iconStart:{control:!1,description:"Icon rendered at the leading edge of the button. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}},iconEnd:{control:!1,description:"Icon rendered at the trailing edge of the button. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}}},args:{text:"Click me",size:"medium",color:"blue",variant:"primary",disabled:!1,rounded:!1,fullWidth:!1,onClick:ct()},render:e=>D({name:"NeoButtonRender",render:()=>t(r,e,{...e.iconStart?{iconStart:()=>e.iconStart}:{},...e.iconEnd?{iconEnd:()=>e.iconEnd}:{}})}),parameters:{snapshot:{viewports:["sm","lg","xl"]}}},o={tags:["snapshot"]},n={tags:["snapshot"],args:{size:"small"}},c={tags:["snapshot"],args:{size:"large"}},i={tags:["snapshot"],args:{text:"Disabled NeoButton",disabled:!0}},l={tags:["snapshot"],args:{text:"Rounded NeoButton",rounded:!0}},d={tags:["snapshot"],args:{variant:"secondary"}},p={tags:["snapshot"],args:{variant:"tertiary"}},u={tags:["snapshot"],args:{variant:"ghost",text:"Ghost Button"}},m={tags:["snapshot"],args:{variant:"ghost",text:"Expand",iconEnd:w}},g={tags:["snapshot"],args:{variant:"ghost",text:"Full Width Button",fullWidth:!0,iconEnd:w}},h={tags:["snapshot"],args:{text:"With Icon Start",iconStart:w}},b={tags:["snapshot"],args:{text:"With Icon End",iconEnd:Je}},y={tags:["snapshot"],args:{text:"With Both Icon",iconStart:w,iconEnd:Je}},f={tags:["snapshot"],args:{pressed:!0}},S={tags:["snapshot"],args:{pressed:!0,disabled:!0}},x={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Use the default slot for custom button content -->
<NeoButton color="blue" variant="primary">
  <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  <span>Processing...</span>
</NeoButton>`}}},render:e=>D({name:"SlotDefaultRender",setup(){return()=>t(r,{color:e.color,variant:e.variant},{default:()=>t(et,null,[t(qe,{size:"small",color:e.color,ariaHidden:!0},null),t("span",null,[tt("Processing...")])])})}})},v={tags:["snapshot"],args:{text:"Loading..."},parameters:{docs:{source:{code:`<!-- Use the prefix slot for a leading spinner -->
<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`}}},render:e=>D({name:"LoadingRender",setup(){return()=>t(r,e,{prefix:()=>t(qe,{size:"small",color:e.color,ariaHidden:!0},null)})}})},k={tags:["!dev"],render:()=>D({name:"InteractionRender",setup(){const e=$e(!1);return()=>t(r,{color:"blue",variant:"primary",onClick:()=>{e.value=!0}},{default:()=>[e.value?"Clicked!":"Click me"]})}}),play:async({canvasElement:e,step:Ze})=>{const E=lt(e);await Ze("Click fires and updates component state",async()=>{await it.click(E.getByRole("button",{name:"Click me"})),await nt(E.getByRole("button")).toHaveTextContent("Clicked!")})}},C={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},B={tags:["snapshot"],globals:{direction:"rtl"},args:{text:"انقر هنا"},parameters:{snapshot:{viewports:["sm","xl"]}}},a={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Qe(r,["primary","secondary","tertiary","ghost"])},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Qe(r,["primary","secondary","tertiary","ghost"],{dark:!0})},A={...a,tags:["!dev","test-only"],play:Xe()},N={...s,tags:["!dev","test-only"],play:Xe()};var I,W,R;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(R=(W=o.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var z,T,O;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var P,L,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(F=(L=c.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var G,V,_;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'Disabled NeoButton',
    disabled: true
  }
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,U,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'Rounded NeoButton',
    rounded: true
  }
}`,...(M=(U=l.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var K,Y,j;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(j=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,J,Q;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Ghost Button'
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Expand',
    iconEnd: AddIcon
  }
}`,...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Full Width Button',
    fullWidth: true,
    iconEnd: AddIcon
  }
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ce,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Icon Start',
    iconStart: AddIcon
  }
}`,...(ie=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,de,pe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Icon End',
    iconEnd: DeleteIcon
  }
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Both Icon',
    iconStart: AddIcon,
    iconEnd: DeleteIcon
  }
}`,...(ge=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,be,ye;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    pressed: true
  }
}`,...(ye=(be=f.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var fe,Se,xe;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    pressed: true,
    disabled: true
  }
}`,...(xe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var ve,ke,Ce;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Use the default slot for custom button content -->
<NeoButton color="blue" variant="primary">
  <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  <span>Processing...</span>
</NeoButton>\`
      }
    }
  },
  render: args => {
    return defineComponent({
      name: 'SlotDefaultRender',
      setup() {
        return () => <NeoButton color={args.color} variant={args.variant} v-slots={{
          default: () => <>
                                    <NeoSpinner size="small" color={args.color} ariaHidden={true} />
                                    <span>Processing...</span>
                                </>
        }} />;
      }
    });
  }
}`,...(Ce=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Be,Ae,Ne;v.parameters={...v.parameters,docs:{...(Be=v.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'Loading...'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Use the prefix slot for a leading spinner -->
<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>\`
      }
    }
  },
  render: args => {
    return defineComponent({
      name: 'LoadingRender',
      setup() {
        return () => <NeoButton {...args} v-slots={{
          prefix: () => <NeoSpinner size="small" color={args.color} ariaHidden={true} />
        }} />;
      }
    });
  }
}`,...(Ne=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var De,we,Ee;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => defineComponent({
    name: 'InteractionRender',
    setup() {
      const clicked = ref(false);
      return () => <NeoButton color="blue" variant="primary" onClick={() => {
        clicked.value = true;
      }}>
                        {clicked.value ? 'Clicked!' : 'Click me'}
                    </NeoButton>;
    }
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Click fires and updates component state', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Click me'
      }));
      await expect(canvas.getByRole('button')).toHaveTextContent('Clicked!');
    });
  }
}`,...(Ee=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Ie,We,Re;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Re=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Re.source}}};var ze,Te,Oe;B.parameters={...B.parameters,docs:{...(ze=B.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Oe=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};var Pe,Le,Fe;a.parameters={...a.parameters,docs:{...(Pe=a.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost'])
}`,...(Fe=(Le=a.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Ge,Ve,_e;s.parameters={...s.parameters,docs:{...(Ge=s.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
    dark: true
  })
}`,...(_e=(Ve=s.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var He,Ue,Me;A.parameters={...A.parameters,docs:{...(He=A.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Me=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Me.source}}};var Ke,Ye,je;N.parameters={...N.parameters,docs:{...(Ke=N.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(je=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:je.source}}};const At=["Default","Small","large","Disabled","Rounded","Secondary","Tertiary","Ghost","GhostWithIcon","FullWidth","WithIconStart","WithIconEnd","WithIconStartAndEnd","Pressed","PressedDisabled","SlotDefault","Loading","interaction","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,A as AllColorsA11y,s as AllColorsOnDark,N as AllColorsOnDarkA11y,o as Default,i as Disabled,g as FullWidth,u as Ghost,m as GhostWithIcon,v as Loading,C as OnDark,f as Pressed,S as PressedDisabled,B as RTL,l as Rounded,d as Secondary,x as SlotDefault,n as Small,p as Tertiary,b as WithIconEnd,h as WithIconStart,y as WithIconStartAndEnd,At as __namedExportsOrder,Bt as default,k as interaction,c as large};
