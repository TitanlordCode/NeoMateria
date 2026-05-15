import{c as o,d as w,r as Pe,i as We}from"./iframe-BV3hDJ4h.js";import{_ as t}from"./NeoIconButton-DJHuLPQ0.js";import{N as Ge}from"./NeoTooltip-B4jTR1Yu.js";import{d as Me}from"./argTypes-VnJZhiy7.js";import{D as $e,b as Ke,H as ze,A as a}from"./defaultIcons-4aGioQkV.js";import{c as Ee}from"./colorShowcase-U42ojhwc.js";import{c as Fe}from"./createA11yPlay-Bvl82ub5.js";import{a as Ue}from"./iconStrings-DsK5_d8D.js";import"./preload-helper-Dp1pzeXC.js";import"./NeoButton-B8P_WXah.js";import"./useButton-B_Hx652h.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-Df0NqOhA.js";import"./axe-DnZIQ4CH.js";const Ye=["small","medium","large"],x=["primary","secondary","tertiary","ghost"],{expect:Ve,fn:qe,userEvent:He,within:je}=__STORYBOOK_MODULE_TEST__;function C(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!We(e)}const pa={title:"Atoms/Button/NeoIconButton",component:t,tags:["autodocs"],argTypes:{...Me,color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:Ye,description:"Controls the button's overall size (padding and icon area).",table:{category:"Appearance"}},variant:{control:"select",options:x,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a circular shape.",table:{category:"Appearance"}},pressed:{control:"boolean",description:'Marks the button as toggled on. Sets `aria-pressed="true"`.',table:{category:"State"}},ariaLabel:{control:"text",table:{category:"Accessibility"}},default:{control:!1,table:{category:"Slots"}}},args:{color:"blue",size:"medium",variant:"primary",disabled:!1,rounded:!1,ariaLabel:"Add item",onClick:qe(),default:a},render:e=>w({name:"NeoIconButtonRender",render:()=>o(t,e,{default:()=>[e.default]})}),parameters:{snapshot:{viewports:["sm","lg","xl"]}}},c={tags:["snapshot"]},i={tags:["snapshot"],args:{size:"small"}},l={tags:["snapshot"],args:{size:"large"}},p={tags:["snapshot"],args:{rounded:!0}},d={tags:["snapshot"],args:{disabled:!0}},m={tags:["snapshot"],args:{variant:"secondary"}},u={tags:["snapshot"],args:{variant:"tertiary"}},g={tags:["snapshot"],args:{variant:"ghost"}},v={tags:["snapshot"],args:{ariaLabel:"Delete item",default:$e}},b={tags:["snapshot"],args:{color:"pink",ariaLabel:"Add to favourites",default:Ke}},y={tags:["snapshot"],args:{color:"pink",ariaLabel:"Remove from favourites",default:ze}},h={tags:["snapshot"],args:{pressed:!0,ariaLabel:"Favourite (active)",default:ze,color:"pink"}},f={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoTooltip text="Add item" placement="bottom">
  <template #activator>
    <NeoIconButton color="blue" variant="primary" ariaLabel="Add item">
      ${Ue}
    </NeoIconButton>
  </template>
</NeoTooltip>`}}},render:()=>w({name:"WithTooltipRender",render:()=>o("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minBlockSize:"120px",padding:"40px 80px"}},[o(Ge,{text:"Add item",placement:"bottom"},{activator:()=>o(t,{color:"blue",variant:"primary",ariaLabel:"Add item"},C(a)?a:{default:()=>[a]})})])}),play:async({canvasElement:e})=>{const r=je(e);await He.hover(r.getByRole("button",{name:"Add item"})),await Ve(r.getByRole("tooltip")).toBeVisible()}},A={tags:["!dev"],render:()=>w({name:"InteractionRender",setup(){const e=Pe(!1);return()=>o(t,{color:"blue",variant:"primary",ariaLabel:e.value?"Clicked!":"Click me",onClick:()=>{e.value=!0}},C(a)?a:{default:()=>[a]})}}),play:async({canvasElement:e,step:r})=>{const N=je(e);await r("Click fires and updates aria-label",async()=>{await He.click(N.getByRole("button",{name:"Click me"})),await Ve(N.getByRole("button",{name:"Clicked!"})).toBeInTheDocument()})}},k={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},S={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}}},n={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ee(t,x.map(e=>({variant:e,render:r=>o(t,{color:r,variant:e,ariaLabel:"Action"},C(a)?a:{default:()=>[a]})})))},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ee(t,x.map(e=>({variant:e,render:r=>o(t,{color:r,variant:e,ariaLabel:"Action"},C(a)?a:{default:()=>[a]})})),{dark:!0})},B={...n,tags:["!dev","test-only"],play:Fe()},I={...s,tags:["!dev","test-only"],play:Fe()};var L,D,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var R,O,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var z,E,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,H,j;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(j=(H=p.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var P,W,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var M,$,K;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(K=($=m.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var U,Y,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost'
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    ariaLabel: 'Delete item',
    default: DeleteIcon
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'pink',
    ariaLabel: 'Add to favourites',
    default: HeartIcon
  }
}`,...(oe=(te=b.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,se,ce;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'pink',
    ariaLabel: 'Remove from favourites',
    default: HeartFilledIcon
  }
}`,...(ce=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,le,pe;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    pressed: true,
    ariaLabel: 'Favourite (active)',
    default: HeartFilledIcon,
    color: 'pink'
  }
}`,...(pe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,me,ue;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoTooltip text="Add item" placement="bottom">
  <template #activator>
    <NeoIconButton color="blue" variant="primary" ariaLabel="Add item">
      \${addIconSvg}
    </NeoIconButton>
  </template>
</NeoTooltip>\`
      }
    }
  },
  render: () => defineComponent({
    name: 'WithTooltipRender',
    render: () => <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minBlockSize: '120px',
      padding: '40px 80px'
    }}>
                    <NeoTooltip text="Add item" placement="bottom">
                        {{
          activator: () => <NeoIconButton color="blue" variant="primary" ariaLabel="Add item">
                                    {AddIcon}
                                </NeoIconButton>
        }}
                    </NeoTooltip>
                </div>
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button', {
      name: 'Add item'
    }));
    await expect(canvas.getByRole('tooltip')).toBeVisible();
  }
}`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,ve,be;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ye,he,fe;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(fe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Ae,ke,Se;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Se=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Be,Ie,Ce;n.parameters={...n.parameters,docs:{...(Be=n.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoIconButton, iconButtonVariants.map(variant => ({
    variant,
    render: color => <NeoIconButton color={color} variant={variant} ariaLabel="Action">
                    {AddIcon}
                </NeoIconButton>
  })))
}`,...(Ce=(Ie=n.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var we,xe,Ne;s.parameters={...s.parameters,docs:{...(we=s.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoIconButton, iconButtonVariants.map(variant => ({
    variant,
    render: color => <NeoIconButton color={color} variant={variant} ariaLabel="Action">
                    {AddIcon}
                </NeoIconButton>
  })), {
    dark: true
  })
}`,...(Ne=(xe=s.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var Le,De,Te;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Te=(De=B.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Re,Oe,_e;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(_e=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};const da=["Default","Small","Large","Rounded","Disabled","Secondary","Tertiary","Ghost","Delete","Favourite","FavouriteActive","Pressed","WithTooltip","interaction","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{n as AllColors,B as AllColorsA11y,s as AllColorsOnDark,I as AllColorsOnDarkA11y,c as Default,v as Delete,d as Disabled,b as Favourite,y as FavouriteActive,g as Ghost,l as Large,k as OnDark,h as Pressed,S as RTL,p as Rounded,m as Secondary,i as Small,u as Tertiary,f as WithTooltip,da as __namedExportsOrder,pa as default,A as interaction};
