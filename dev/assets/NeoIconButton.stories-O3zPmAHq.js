import{c as o,d as w,r as je,i as We}from"./iframe-Bg0OttVg.js";import{_ as t}from"./NeoIconButton-BNdIByej.js";import{N as Ge}from"./NeoTooltip-Dt2mo3wf.js";import{d as Me}from"./argTypes-VnJZhiy7.js";import{D as $e,b as qe,H as ze,A as a}from"./defaultIcons-Cc4HODhN.js";import{c as Ee}from"./colorShowcase-BQraTlZf.js";import{c as Ve}from"./createA11yPlay-DxivIEqv.js";import{a as Ke}from"./iconStrings-DvlgHS7z.js";import"./preload-helper-Dp1pzeXC.js";import"./NeoButton-GRseUT4r.js";import"./useButton-BSwY0W_p.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-X07-7rWn.js";import"./axe-CjNTfdGc.js";const Ue=["small","medium","large"],x=["primary","secondary","tertiary","ghost"],{expect:Fe,fn:Ye,userEvent:He,within:Pe}=__STORYBOOK_MODULE_TEST__;function C(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!We(e)}const pa={title:"Atoms/Button/NeoIconButton",component:t,tags:["autodocs"],argTypes:{...Me,color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:Ue,description:"Controls the button's overall size (padding and icon area).",table:{category:"Appearance"}},variant:{control:"select",options:x,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a circular shape.",table:{category:"Appearance"}},pressed:{control:"boolean",description:'Marks the button as toggled on. Sets `aria-pressed="true"`.',table:{category:"State"}},ariaLabel:{control:"text",table:{category:"Accessibility"},description:"Accessible name for the icon-only button. Required for screen readers."},default:{control:!1,table:{category:"Slots"},description:"The icon content. Pass a raw SVG element or a Vue component."}},args:{color:"blue",size:"medium",variant:"primary",disabled:!1,rounded:!1,ariaLabel:"Add item",onClick:Ye(),default:a},render:e=>w({name:"NeoIconButtonRender",render:()=>o(t,e,{default:()=>[e.default]})}),parameters:{snapshot:{viewports:["sm","lg","xl"]}}},c={tags:["snapshot"]},i={tags:["snapshot"],args:{size:"small"}},l={tags:["snapshot"],args:{size:"large"}},p={tags:["snapshot"],args:{rounded:!0}},d={tags:["snapshot"],args:{disabled:!0}},m={tags:["snapshot"],args:{variant:"secondary"}},u={tags:["snapshot"],args:{variant:"tertiary"}},g={tags:["snapshot"],args:{variant:"ghost"}},b={tags:["snapshot"],args:{ariaLabel:"Delete item",default:$e}},v={tags:["snapshot"],args:{color:"pink",ariaLabel:"Add to favourites",default:qe}},y={tags:["snapshot"],args:{color:"pink",ariaLabel:"Remove from favourites",default:ze}},h={tags:["snapshot"],args:{pressed:!0,ariaLabel:"Favourite (active)",default:ze,color:"pink"}},f={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoTooltip text="Add item" placement="bottom">
  <template #activator>
    <NeoIconButton color="blue" variant="primary" ariaLabel="Add item">
      ${Ke}
    </NeoIconButton>
  </template>
</NeoTooltip>`}}},render:()=>w({name:"WithTooltipRender",render:()=>o("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minBlockSize:"120px",padding:"40px 80px"}},[o(Ge,{text:"Add item",placement:"bottom"},{activator:()=>o(t,{color:"blue",variant:"primary",ariaLabel:"Add item"},C(a)?a:{default:()=>[a]})})])}),play:async({canvasElement:e})=>{const r=Pe(e);await He.hover(r.getByRole("button",{name:"Add item"})),await Fe(r.getByRole("tooltip")).toBeVisible()}},A={tags:["!dev"],render:()=>w({name:"InteractionRender",setup(){const e=je(!1);return()=>o(t,{color:"blue",variant:"primary",ariaLabel:e.value?"Clicked!":"Click me",onClick:()=>{e.value=!0}},C(a)?a:{default:()=>[a]})}}),play:async({canvasElement:e,step:r})=>{const N=Pe(e);await r("Click fires and updates aria-label",async()=>{await He.click(N.getByRole("button",{name:"Click me"})),await Fe(N.getByRole("button",{name:"Clicked!"})).toBeInTheDocument()})}},k={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},S={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}}},n={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ee(t,x.map(e=>({variant:e,render:r=>o(t,{color:r,variant:e,ariaLabel:"Action"},C(a)?a:{default:()=>[a]})})))},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ee(t,x.map(e=>({variant:e,render:r=>o(t,{color:r,variant:e,ariaLabel:"Action"},C(a)?a:{default:()=>[a]})})),{dark:!0})},B={...n,tags:["!dev","test-only"],play:Ve()},I={...s,tags:["!dev","test-only"],play:Ve()};var L,D,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var R,O,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var z,E,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var F,H,P;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var j,W,G;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var M,$,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var K,U,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost'
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    ariaLabel: 'Delete item',
    default: DeleteIcon
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'pink',
    ariaLabel: 'Add to favourites',
    default: HeartIcon
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,se,ce;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,be,ve;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ye,he,fe;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(_e=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};const da=["Default","Small","Large","Rounded","Disabled","Secondary","Tertiary","Ghost","Delete","Favourite","FavouriteActive","Pressed","WithTooltip","interaction","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{n as AllColors,B as AllColorsA11y,s as AllColorsOnDark,I as AllColorsOnDarkA11y,c as Default,b as Delete,d as Disabled,v as Favourite,y as FavouriteActive,g as Ghost,l as Large,k as OnDark,h as Pressed,S as RTL,p as Rounded,m as Secondary,i as Small,u as Tertiary,f as WithTooltip,da as __namedExportsOrder,pa as default,A as interaction};
