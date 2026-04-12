import{d as D,c as r,r as Me,F as Ke,a as Ye}from"./iframe-BBbPLObx.js";import{N as t}from"./NeoButton-CsxJoi-B.js";import{N as Ge}from"./NeoSpinner-Cp89AKKr.js";import{b as je,a as qe}from"./NeoButtonTypes-naNG8zvj.js";import{d as Je,a as Qe}from"./argTypes-VnJZhiy7.js";import{A as C,D as He}from"./defaultIcons-BWHDugR3.js";import{c as Ue}from"./colorShowcase-CVTHfhfV.js";import"./preload-helper-Dp1pzeXC.js";import"./useButton-otF8SIdU.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-DXYOa7dd.js";const{expect:Xe,fn:Ze,userEvent:$e,within:er}=__STORYBOOK_MODULE_TEST__,pr={title:"Atoms/Button/NeoButton",component:t,tags:["autodocs"],argTypes:{...Qe,...Je,text:{control:"text",table:{category:"Content"}},color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:qe,description:"Controls padding and font size. Defaults to `medium`.",table:{category:"Appearance"}},variant:{control:"select",options:je,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners (`border-radius: 9999px`) for a pill shape.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"Stretches the button to fill its container's full inline size.",table:{category:"Appearance"}},pressed:{control:"boolean",description:'Marks the button as toggled on. Sets `aria-pressed="true"` and applies the `NeoButton--pressed` CSS modifier.',table:{category:"State"}}},args:{text:"Click me",size:"medium",color:"blue",variant:"primary",disabled:!1,rounded:!1,fullWidth:!1,onClick:Ze()}},a={},o={args:{size:"small"}},n={args:{size:"large"}},s={args:{text:"Disabled NeoButton",disabled:!0}},c={args:{text:"Rounded NeoButton",rounded:!0}},i={args:{variant:"secondary"}},d={args:{variant:"tertiary"}},l={args:{variant:"ghost",text:"Ghost Button"}},u={args:{variant:"ghost",text:"Expand",iconEnd:()=>C}},p={args:{variant:"ghost",text:"Full Width Button",fullWidth:!0,iconEnd:()=>C}},m={args:{text:"With Icon Start",iconStart:()=>C}},g={args:{text:"With Icon End",iconEnd:()=>He}},h={args:{text:"With Both Icon",iconStart:()=>C,iconEnd:()=>He}},b={args:{pressed:!0}},S={args:{pressed:!0,disabled:!0}},f={parameters:{docs:{source:{code:`<!-- Use the default slot for custom button content -->
<NeoButton color="blue" variant="primary">
  <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  <span>Processing...</span>
</NeoButton>`}}},render:e=>D({name:"SlotDefaultRender",setup(){return()=>r(t,{color:e.color,variant:e.variant},{default:()=>r(Ke,null,[r(Ge,{size:"small",color:e.color,ariaHidden:!0},null),r("span",null,[Ye("Processing...")])])})}})},y={args:{text:"Loading..."},parameters:{docs:{source:{code:`<!-- Use the prefix slot for a leading spinner -->
<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`}}},render:e=>D({name:"LoadingRender",setup(){return()=>r(t,e,{prefix:()=>r(Ge,{size:"small",color:e.color,ariaHidden:!0},null)})}})},x={tags:["!dev"],render:()=>D({name:"InteractionRender",setup(){const e=Me(!1);return()=>r(t,{color:"blue",variant:"primary",onClick:()=>{e.value=!0}},{default:()=>[e.value?"Clicked!":"Click me"]})}}),play:async({canvasElement:e,step:Ve})=>{const I=er(e);await Ve("Click fires and updates component state",async()=>{await $e.click(I.getByRole("button",{name:"Click me"})),await Xe(I.getByRole("button")).toHaveTextContent("Clicked!")})}},v={globals:{backgrounds:"#000"}},k={globals:{direction:"rtl"},args:{text:"انقر هنا"}},B={render:Ue(t,["primary","secondary","tertiary","ghost"])},N={globals:{backgrounds:"#000"},render:Ue(t,["primary","secondary","tertiary","ghost"],{dark:!0})};var E,W,A;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(A=(W=a.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var w,z,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(R=(z=o.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var T,L,O;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(O=(L=n.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,_,F;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Disabled NeoButton',
    disabled: true
  }
}`,...(F=(_=s.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var G,H,U;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: 'Rounded NeoButton',
    rounded: true
  }
}`,...(U=(H=c.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var V,M,K;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(K=(M=i.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var Y,j,q;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,Q,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    text: 'Ghost Button'
  }
}`,...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    text: 'Expand',
    iconEnd: () => AddIcon
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,te,ae;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    text: 'Full Width Button',
    fullWidth: true,
    iconEnd: () => AddIcon
  }
}`,...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,se;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    text: 'With Icon Start',
    iconStart: () => AddIcon
  }
}`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ce,ie,de;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    text: 'With Icon End',
    iconEnd: () => DeleteIcon
  }
}`,...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ue,pe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    text: 'With Both Icon',
    iconStart: () => AddIcon,
    iconEnd: () => DeleteIcon
  }
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,he;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    pressed: true
  }
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,Se,fe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    pressed: true,
    disabled: true
  }
}`,...(fe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ye,xe,ve;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ke,Be,Ne;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var Ce,De,Ie;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ee,We,Ae;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(Ae=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var we,ze,Re;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  }
}`,...(Re=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var Te,Le,Oe;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost'])
}`,...(Oe=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Pe,_e,Fe;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
    dark: true
  })
}`,...(Fe=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};const mr=["Default","Small","large","Disabled","Rounded","Secondary","Tertiary","Ghost","GhostWithIcon","FullWidth","WithIconStart","WithIconEnd","WithIconStartAndEnd","Pressed","PressedDisabled","SlotDefault","Loading","interaction","OnDark","RTL","AllColors","AllColorsOnDark"];export{B as AllColors,N as AllColorsOnDark,a as Default,s as Disabled,p as FullWidth,l as Ghost,u as GhostWithIcon,y as Loading,v as OnDark,b as Pressed,S as PressedDisabled,k as RTL,c as Rounded,i as Secondary,f as SlotDefault,o as Small,d as Tertiary,g as WithIconEnd,m as WithIconStart,h as WithIconStartAndEnd,mr as __namedExportsOrder,pr as default,x as interaction,n as large};
