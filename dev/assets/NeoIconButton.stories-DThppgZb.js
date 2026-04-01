import{c as h,d as Ie,r as Be,i as De}from"./iframe-BNVHVJhn.js";import{_ as a}from"./NeoIconButton-DTPVzKGD.js";import{d as Le}from"./argTypes-VnJZhiy7.js";import{D as we,b as Re,H as Ae,A as r}from"./defaultIcons-C1WNt4aX.js";import{c as Ce}from"./colorShowcase-BzxvNubM.js";import"./preload-helper-Dp1pzeXC.js";import"./NeoButton-364jGlWI.js";import"./useButton-DryRKbhE.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-CGZgoonz.js";const Oe=["small","medium","large"],A=["primary","secondary","tertiary","ghost"],{expect:Te,fn:_e,userEvent:Ne,within:xe}=__STORYBOOK_MODULE_TEST__;function C(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!De(e)}const Ue={title:"Atoms/Button/NeoIconButton",component:a,tags:["autodocs"],argTypes:{...Le,color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:Oe,description:"Controls the button's overall size (padding and icon area).",table:{category:"Appearance"}},variant:{control:"select",options:A,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a circular shape.",table:{category:"Appearance"}},pressed:{control:"boolean",description:'Marks the button as toggled on. Sets `aria-pressed="true"`.',table:{category:"State"}},ariaLabel:{control:"text",table:{category:"Accessibility"}},default:{control:!1,table:{category:"Slots"}}},args:{color:"blue",size:"medium",variant:"primary",disabled:!1,rounded:!1,ariaLabel:"Add item",onClick:_e(),default:()=>r}},t={},n={args:{size:"small"}},s={args:{size:"large"}},c={args:{rounded:!0}},i={args:{disabled:!0}},l={args:{variant:"secondary"}},d={args:{variant:"tertiary"}},u={args:{variant:"ghost"}},p={args:{ariaLabel:"Delete item",default:()=>we}},m={args:{color:"pink",ariaLabel:"Add to favourites",default:()=>Re}},g={args:{color:"pink",ariaLabel:"Remove from favourites",default:()=>Ae}},b={args:{pressed:!0,ariaLabel:"Favourite (active)",default:()=>Ae,color:"pink"}},f={tags:["!dev"],render:()=>Ie({name:"InteractionRender",setup(){const e=Be(!1);return()=>h(a,{color:"blue",variant:"primary",ariaLabel:e.value?"Clicked!":"Click me",onClick:()=>{e.value=!0}},C(r)?r:{default:()=>[r]})}}),play:async({canvasElement:e,step:o})=>{const I=xe(e);await o("Click fires and updates aria-label",async()=>{await Ne.click(I.getByRole("button",{name:"Click me"})),await Te(I.getByRole("button",{name:"Clicked!"})).toBeInTheDocument()})}},v={globals:{backgrounds:"#000"}},k={globals:{direction:"rtl"}},y={render:Ce(a,A.map(e=>({variant:e,render:o=>h(a,{color:o,variant:e,ariaLabel:"Action"},C(r)?r:{default:()=>[r]})})))},S={globals:{backgrounds:"#000"},render:Ce(a,A.map(e=>({variant:e,render:o=>h(a,{color:o,variant:e,ariaLabel:"Action"},C(r)?r:{default:()=>[r]})})),{dark:!0})};var B,D,L;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(L=(D=t.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,R,O;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(O=(R=n.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var T,_,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(N=(_=s.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var x,F,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(z=(F=c.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var E,H,V;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(V=(H=i.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var j,G,M;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(M=(G=l.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var P,K,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(U=(K=d.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,q,J;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,W,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Delete item',
    default: () => DeleteIcon
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    color: 'pink',
    ariaLabel: 'Add to favourites',
    default: () => HeartIcon
  }
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    color: 'pink',
    ariaLabel: 'Remove from favourites',
    default: () => HeartFilledIcon
  }
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ne,se;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    pressed: true,
    ariaLabel: 'Favourite (active)',
    default: () => HeartFilledIcon,
    color: 'pink'
  }
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ce,ie,le;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => defineComponent({
    name: 'InteractionRender',
    setup() {
      const clicked = ref(false);
      return () => <NeoIconButton color="blue" variant="primary" ariaLabel={clicked.value ? 'Clicked!' : 'Click me'} onClick={() => {
        clicked.value = true;
      }}>
                        {AddIcon}
                    </NeoIconButton>;
    }
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Click fires and updates aria-label', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Click me'
      }));
      await expect(canvas.getByRole('button', {
        name: 'Clicked!'
      })).toBeInTheDocument();
    });
  }
}`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ue,pe;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,be;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  }
}`,...(be=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ve,ke;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoIconButton, iconButtonVariants.map(variant => ({
    variant,
    render: color => <NeoIconButton color={color} variant={variant} ariaLabel="Action">
                    {AddIcon}
                </NeoIconButton>
  })))
}`,...(ke=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var ye,Se,he;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoIconButton, iconButtonVariants.map(variant => ({
    variant,
    render: color => <NeoIconButton color={color} variant={variant} ariaLabel="Action">
                    {AddIcon}
                </NeoIconButton>
  })), {
    dark: true
  })
}`,...(he=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};const Ye=["Default","Small","Large","Rounded","Disabled","Secondary","Tertiary","Ghost","Delete","Favourite","FavouriteActive","Pressed","interaction","OnDark","RTL","AllColors","AllColorsOnDark"];export{y as AllColors,S as AllColorsOnDark,t as Default,p as Delete,i as Disabled,m as Favourite,g as FavouriteActive,u as Ghost,s as Large,v as OnDark,b as Pressed,k as RTL,c as Rounded,l as Secondary,n as Small,d as Tertiary,Ye as __namedExportsOrder,Ue as default,f as interaction};
