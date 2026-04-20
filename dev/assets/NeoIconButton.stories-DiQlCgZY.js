import{c as C,d as Re,r as xe,i as Fe}from"./iframe-Dknl-Izy.js";import{_ as r}from"./NeoIconButton-DWP2aY_J.js";import{d as ze}from"./argTypes-VnJZhiy7.js";import{D as Ee,b as He,H as Ne,A as a}from"./defaultIcons-DqG6mseC.js";import{c as Te}from"./colorShowcase-ukgIxckm.js";import{c as _e}from"./createA11yPlay-C_PKokKa.js";import"./preload-helper-Dp1pzeXC.js";import"./NeoButton-Bcsfi_8-.js";import"./useButton-D17qNuey.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-OOi-7FOf.js";import"./axe-Dc5bORdo.js";const Ve=["small","medium","large"],I=["primary","secondary","tertiary","ghost"],{expect:Pe,fn:je,userEvent:Ge,within:Me}=__STORYBOOK_MODULE_TEST__;function D(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Fe(e)}const ra={title:"Atoms/Button/NeoIconButton",component:r,tags:["autodocs"],argTypes:{...ze,color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:Ve,description:"Controls the button's overall size (padding and icon area).",table:{category:"Appearance"}},variant:{control:"select",options:I,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a circular shape.",table:{category:"Appearance"}},pressed:{control:"boolean",description:'Marks the button as toggled on. Sets `aria-pressed="true"`.',table:{category:"State"}},ariaLabel:{control:"text",table:{category:"Accessibility"}},default:{control:!1,table:{category:"Slots"}}},args:{color:"blue",size:"medium",variant:"primary",disabled:!1,rounded:!1,ariaLabel:"Add item",onClick:je(),default:a},render:e=>Re({name:"NeoIconButtonRender",render:()=>C(r,e,{default:()=>[e.default]})})},n={tags:["snapshot"]},c={tags:["snapshot"],args:{size:"small"}},l={tags:["snapshot"],args:{size:"large"}},i={tags:["snapshot"],args:{rounded:!0}},d={tags:["snapshot"],args:{disabled:!0}},p={tags:["snapshot"],args:{variant:"secondary"}},u={tags:["snapshot"],args:{variant:"tertiary"}},m={tags:["snapshot"],args:{variant:"ghost"}},g={tags:["snapshot"],args:{ariaLabel:"Delete item",default:Ee}},b={tags:["snapshot"],args:{color:"pink",ariaLabel:"Add to favourites",default:He}},y={tags:["snapshot"],args:{color:"pink",ariaLabel:"Remove from favourites",default:Ne}},h={tags:["snapshot"],args:{pressed:!0,ariaLabel:"Favourite (active)",default:Ne,color:"pink"}},v={tags:["!dev"],render:()=>Re({name:"InteractionRender",setup(){const e=xe(!1);return()=>C(r,{color:"blue",variant:"primary",ariaLabel:e.value?"Clicked!":"Click me",onClick:()=>{e.value=!0}},D(a)?a:{default:()=>[a]})}}),play:async({canvasElement:e,step:o})=>{const B=Me(e);await o("Click fires and updates aria-label",async()=>{await Ge.click(B.getByRole("button",{name:"Click me"})),await Pe(B.getByRole("button",{name:"Clicked!"})).toBeInTheDocument()})}},f={tags:["snapshot"],globals:{backgrounds:"#000"}},k={tags:["snapshot"],globals:{direction:"rtl"}},s={tags:["snapshot"],render:Te(r,I.map(e=>({variant:e,render:o=>C(r,{color:o,variant:e,ariaLabel:"Action"},D(a)?a:{default:()=>[a]})})))},t={tags:["snapshot"],globals:{backgrounds:"#000"},render:Te(r,I.map(e=>({variant:e,render:o=>C(r,{color:o,variant:e,ariaLabel:"Action"},D(a)?a:{default:()=>[a]})})),{dark:!0})},A={...s,tags:["!dev","test-only"],play:_e()},S={...t,tags:["!dev","test-only"],play:_e()};var L,w,O;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(O=(w=n.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var R,N,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var _,x,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(F=(x=l.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var z,E,H;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var V,P,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var G,M,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(K=(M=p.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var U,Y,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,Q,W;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost'
  }
}`,...(W=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    ariaLabel: 'Delete item',
    default: DeleteIcon
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'pink',
    ariaLabel: 'Add to favourites',
    default: HeartIcon
  }
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,se,te;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'pink',
    ariaLabel: 'Remove from favourites',
    default: HeartFilledIcon
  }
}`,...(te=(se=y.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,ce,le;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    pressed: true,
    ariaLabel: 'Favourite (active)',
    default: HeartFilledIcon,
    color: 'pink'
  }
}`,...(le=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ie,de,pe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(ge=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var be,ye,he;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  }
}`,...(he=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,fe,ke;s.parameters={...s.parameters,docs:{...(ve=s.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createSimpleColorShowcase(NeoIconButton, iconButtonVariants.map(variant => ({
    variant,
    render: color => <NeoIconButton color={color} variant={variant} ariaLabel="Action">
                    {AddIcon}
                </NeoIconButton>
  })))
}`,...(ke=(fe=s.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Ae,Se,Ce;t.parameters={...t.parameters,docs:{...(Ae=t.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(Ce=(Se=t.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Ie,De,Be;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Be=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var Le,we,Oe;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Oe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};const oa=["Default","Small","Large","Rounded","Disabled","Secondary","Tertiary","Ghost","Delete","Favourite","FavouriteActive","Pressed","interaction","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{s as AllColors,A as AllColorsA11y,t as AllColorsOnDark,S as AllColorsOnDarkA11y,n as Default,g as Delete,d as Disabled,b as Favourite,y as FavouriteActive,m as Ghost,l as Large,f as OnDark,h as Pressed,k as RTL,i as Rounded,p as Secondary,c as Small,u as Tertiary,oa as __namedExportsOrder,ra as default,v as interaction};
