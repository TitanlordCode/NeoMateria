import{d as je,c as P,m as Ge}from"./iframe-Bg0OttVg.js";import{N as i}from"./NeoCard-B6bjEYGS.js";import{a as Ve}from"./NeoHeadlineTypes-CVOcXnNm.js";import{c as _e}from"./colorShowcase-BQraTlZf.js";import{c as ze}from"./createA11yPlay-DxivIEqv.js";import{p as e}from"./placeholder-CgeahcyT.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-BWdMNRQ5.js";import"./NeoBadge-Ds2h9ARX.js";import"./NeoButton-GRseUT4r.js";import"./useButton-BSwY0W_p.js";import"./NeoIcon-X07-7rWn.js";import"./NeoLink-DgV7QRv2.js";import"./NeoHeadlineTertiary-D2VZDy6n.js";import"./useHeadline-DfckPeyI.js";import"./axe-CjNTfdGc.js";const Ie=["small","medium","large"],Ue=["default","compact","featured"],{expect:Ke,fn:O,userEvent:Ye,waitFor:qe,within:Je}=__STORYBOOK_MODULE_TEST__,mt={title:"Molecules/NeoCard",component:i,tags:["autodocs"],argTypes:{color:{description:"Theme color applied to action buttons and link accents inside the card.",table:{category:"Appearance"}},size:{control:"select",options:Ie,description:"Controls overall card padding and spacing.",table:{category:"Appearance"}},variant:{control:"select",options:Ue,description:"`default`: standard card layout. `compact`: reduced padding for dense lists. `featured`: larger image area for hero content.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies rounded corners to the card.",table:{category:"Appearance"}},imageSrc:{control:"text",table:{category:"Content"},description:"Source URL of the card image."},imageAlt:{control:"text",table:{category:"Content"},description:"Alt text for the card image."},imageObjectFit:{control:"select",options:["contain","cover","fill","none","scale-down"],description:"CSS `object-fit` value for the card image. `cover` fills the image area by cropping; `contain` shows the full image with letterboxing.",table:{category:"Appearance"}},title:{control:"text",table:{category:"Content"},description:"Card title text."},description:{control:"text",table:{category:"Content"},description:"Body copy shown beneath the title."},tags:{control:"object",description:"Array of tag objects `{ text, color? }` rendered as NeoBadge pills below the description.",table:{category:"Content"}},actionText:{control:"text",description:"Primary call-to-action button. Only available when `href` is not set.",table:{category:"Content"}},actionHref:{control:"text",description:"URL for the primary action button. Only available when `href` is not set.",table:{category:"Content"}},secondaryActionText:{control:"text",description:"Secondary call-to-action. Only available when `href` is not set.",table:{category:"Content"}},secondaryActionHref:{control:"text",description:"URL for the secondary action button. Only available when `href` is not set.",table:{category:"Content"}},href:{control:"text",description:"Makes the entire card a clickable link. When set, `actionText`/`actionHref`/`secondaryActionText`/`secondaryActionHref` are not available (discriminated union).",table:{category:"Behavior"}},external:{control:"boolean",table:{category:"Behavior"},description:"Opens the card link in a new tab with a safe `rel`. Only applies when `href` is set."},headingTag:{control:"select",options:Ve,table:{category:"Appearance"},description:"HTML element used for the card title."}},args:{title:"Featured Content Title",description:"This is a versatile content card that can display games, products, articles, or any other type of content with an image, title, description, tags, and actions.",imageSrc:e(400,300),imageAlt:"Content card image",color:"blue",size:"medium",variant:"default",rounded:!1,actionText:"View More",secondaryActionText:"Learn More",secondaryActionHref:"#",tags:[{text:"Featured",color:"purple"},{text:"Popular",color:"green"}],"onAction-click":O(),"onSecondary-action-click":O()},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},o={tags:["snapshot"],args:{imageSrc:"https://picsum.photos/seed/content1/400/300"}},l={tags:["snapshot"],args:{size:"small"}},d={tags:["snapshot"],args:{size:"large"}},p={tags:["snapshot"],args:{variant:"compact"}},u={tags:["snapshot"],args:{variant:"featured",title:"Featured Content",description:"This is featured content with a larger image and more prominent styling, perfect for highlighting important items."}},m={tags:["snapshot"],args:{rounded:!0}},g={tags:["snapshot"],args:{description:void 0}},h={tags:["snapshot"],args:{tags:[]}},f={tags:["snapshot"],args:{actionText:void 0,secondaryActionText:void 0}},x={tags:["snapshot"],args:{description:void 0,tags:[],actionText:void 0,secondaryActionText:void 0}},y={tags:["snapshot"],args:{href:"/products/featured-item",actionText:void 0,secondaryActionText:void 0}},b={tags:["snapshot"],args:{href:"https://example.com",external:!0,actionText:void 0,secondaryActionText:void 0}},v={tags:["no-test"],parameters:{docs:{source:{code:`<!-- Provide href instead of action props to make the entire card clickable -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
  <NeoCard
    title="Product One"
    color="blue"
    image-src="/images/product-1.jpg"
    image-alt="Product One"
    href="/products/1"
    :tags="[{ text: 'New', color: 'green' }]"
  />
  <NeoCard
    title="Product Two"
    color="blue"
    image-src="/images/product-2.jpg"
    image-alt="Product Two"
    href="/products/2"
    :tags="[{ text: 'Sale', color: 'red' }]"
  />
</div>`}}},render:t=>je({name:"ClickableGridRender",setup(){const n={...t,actionText:void 0,actionHref:void 0,secondaryActionText:void 0,secondaryActionHref:void 0},a=[{...n,title:"Product One",imageSrc:e(400,300),href:"/products/1",tags:[{text:"New",color:"green"}]},{...n,title:"Product Two",imageSrc:e(400,300),href:"/products/2",tags:[{text:"Sale",color:"red"}]},{...n,title:"Product Three",imageSrc:e(400,300),href:"/products/3",tags:[{text:"Popular",color:"purple"}]}];return()=>P("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px",padding:"24px"}},[a.map((r,N)=>P(i,Ge({key:N},r,{description:void 0,actionText:void 0,secondaryActionText:void 0}),null))])}})},A={tags:["snapshot"],parameters:{docs:{source:{code:`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
  <NeoCard
    title="Mountain Adventure"
    color="blue"
    image-src="/images/mountain.jpg"
    image-alt="Mountain Adventure"
    description="Explore scenic mountain trails."
    action-text="View More"
    :tags="[{ text: 'Travel', color: 'blue' }, { text: 'Nature', color: 'green' }]"
    @action-click="handleAction"
  />
  <!-- repeat for more cards -->
</div>`}}},render:t=>je({name:"GridLayoutRender",setup(){const n=[{...t,title:"Mountain Adventure",imageSrc:e(400,300),tags:[{text:"Travel",color:"blue"},{text:"Nature",color:"green"}]},{...t,title:"Creative Workshop",imageSrc:e(400,300),tags:[{text:"Design",color:"purple"},{text:"Art",color:"pink"}]},{...t,title:"Tech Innovation",imageSrc:e(400,300),tags:[{text:"Technology",color:"cyan"},{text:"Innovation",color:"indigo"}]},{...t,title:"Wellness Guide",imageSrc:e(400,300),tags:[{text:"Health",color:"green"},{text:"Lifestyle",color:"lime"}]}];return()=>P("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px",padding:"24px"}},[n.map((a,r)=>P(i,Ge({key:r},a),null))])}})},T={...o,tags:["!dev"],play:async({args:t,canvasElement:n,step:a})=>{const r=Je(n);await a("Check action button click",async()=>{const N=r.getByText("View More");await Ye.click(N)}),await qe(()=>Ke(t["onAction-click"]).toHaveBeenCalled())}},C={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},S={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{title:"عنوان المحتوى المميز",description:"هذا وصف قصير للبطاقة يوضح المحتوى المعروض.",actionText:"عرض المزيد",secondaryActionText:"تعرف على المزيد"}},s={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:_e(i,["default","compact","featured"],{defaultProps:{imageSrc:e(400,300)}})},c={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:_e(i,["default","compact","featured"],{dark:!0,defaultProps:{imageSrc:e(400,300)}})},k={...s,tags:["!dev","test-only"],play:ze()},w={...c,tags:["!dev","test-only"],play:ze()};var D,M,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    imageSrc: 'https://picsum.photos/seed/content1/400/300'
  }
}`,...(B=(M=o.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var L,H,R;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(R=(H=l.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var E,F,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var j,G,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'compact'
  }
}`,...(_=(G=p.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var z,V,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'featured',
    title: 'Featured Content',
    description: 'This is featured content with a larger image and more prominent styling, perfect for highlighting important items.'
  }
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var U,K,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(Y=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var q,J,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    description: undefined
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    tags: []
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,oe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    description: undefined,
    tags: [],
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ce,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    href: '/products/featured-item',
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(ie=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,de,pe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    href: 'https://example.com',
    external: true,
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Provide href instead of action props to make the entire card clickable -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
  <NeoCard
    title="Product One"
    color="blue"
    image-src="/images/product-1.jpg"
    image-alt="Product One"
    href="/products/1"
    :tags="[{ text: 'New', color: 'green' }]"
  />
  <NeoCard
    title="Product Two"
    color="blue"
    image-src="/images/product-2.jpg"
    image-alt="Product Two"
    href="/products/2"
    :tags="[{ text: 'Sale', color: 'red' }]"
  />
</div>\`
      }
    }
  },
  render: (args: NeoCardProps) => {
    return defineComponent({
      name: 'ClickableGridRender',
      setup() {
        const clickableBase = {
          ...args,
          actionText: undefined,
          actionHref: undefined,
          secondaryActionText: undefined,
          secondaryActionHref: undefined
        };
        const items = [{
          ...clickableBase,
          title: 'Product One',
          imageSrc: placeholder(400, 300),
          href: '/products/1',
          tags: [{
            text: 'New',
            color: 'green' as const
          }]
        }, {
          ...clickableBase,
          title: 'Product Two',
          imageSrc: placeholder(400, 300),
          href: '/products/2',
          tags: [{
            text: 'Sale',
            color: 'red' as const
          }]
        }, {
          ...clickableBase,
          title: 'Product Three',
          imageSrc: placeholder(400, 300),
          href: '/products/3',
          tags: [{
            text: 'Popular',
            color: 'purple' as const
          }]
        }];
        return () => <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          padding: '24px'
        }}>
                        {items.map((item, index) => <NeoCard key={index} {...item} description={undefined} actionText={undefined} secondaryActionText={undefined} />)}
                    </div>;
      }
    });
  }
}`,...(ge=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,fe,xe;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
  <NeoCard
    title="Mountain Adventure"
    color="blue"
    image-src="/images/mountain.jpg"
    image-alt="Mountain Adventure"
    description="Explore scenic mountain trails."
    action-text="View More"
    :tags="[{ text: 'Travel', color: 'blue' }, { text: 'Nature', color: 'green' }]"
    @action-click="handleAction"
  />
  <!-- repeat for more cards -->
</div>\`
      }
    }
  },
  render: (args: NeoCardProps) => {
    return defineComponent({
      name: 'GridLayoutRender',
      setup() {
        const items = [{
          ...args,
          title: 'Mountain Adventure',
          imageSrc: placeholder(400, 300),
          tags: [{
            text: 'Travel',
            color: 'blue' as const
          }, {
            text: 'Nature',
            color: 'green' as const
          }]
        }, {
          ...args,
          title: 'Creative Workshop',
          imageSrc: placeholder(400, 300),
          tags: [{
            text: 'Design',
            color: 'purple' as const
          }, {
            text: 'Art',
            color: 'pink' as const
          }]
        }, {
          ...args,
          title: 'Tech Innovation',
          imageSrc: placeholder(400, 300),
          tags: [{
            text: 'Technology',
            color: 'cyan' as const
          }, {
            text: 'Innovation',
            color: 'indigo' as const
          }]
        }, {
          ...args,
          title: 'Wellness Guide',
          imageSrc: placeholder(400, 300),
          tags: [{
            text: 'Health',
            color: 'green' as const
          }, {
            text: 'Lifestyle',
            color: 'lime' as const
          }]
        }];
        return () => <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          padding: '24px'
        }}>
                        {items.map((item, index) => <NeoCard key={index} {...item} />)}
                    </div>;
      }
    });
  }
}`,...(xe=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ye,be,ve;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...Default,
  tags: ['!dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Check action button click', async () => {
      const actionButton = canvas.getByText('View More');
      await userEvent.click(actionButton);
    });
    await waitFor(() => expect(args['onAction-click']).toHaveBeenCalled());
  }
}`,...(ve=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Ae,Te,Ce;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Ce=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Se,ke,we;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  args: {
    title: 'عنوان المحتوى المميز',
    description: 'هذا وصف قصير للبطاقة يوضح المحتوى المعروض.',
    actionText: 'عرض المزيد',
    secondaryActionText: 'تعرف على المزيد'
  }
}`,...(we=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Pe,Ne,Oe;s.parameters={...s.parameters,docs:{...(Pe=s.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoCard, ['default', 'compact', 'featured'], {
    defaultProps: {
      imageSrc: placeholder(400, 300)
    }
  })
}`,...(Oe=(Ne=s.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var De,Me,Be;c.parameters={...c.parameters,docs:{...(De=c.parameters)==null?void 0:De.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoCard, ['default', 'compact', 'featured'], {
    dark: true,
    defaultProps: {
      imageSrc: placeholder(400, 300)
    }
  })
}`,...(Be=(Me=c.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Le,He,Re;k.parameters={...k.parameters,docs:{...(Le=k.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Re=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Ee,Fe,We;w.parameters={...w.parameters,docs:{...(Ee=w.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(We=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};const gt=["Default","Small","Large","Compact","Featured","Rounded","WithoutDescription","WithoutTags","WithoutActions","Minimal","Clickable","ClickableExternal","ClickableGrid","GridLayout","Interaction","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{s as AllColors,k as AllColorsA11y,c as AllColorsOnDark,w as AllColorsOnDarkA11y,y as Clickable,b as ClickableExternal,v as ClickableGrid,p as Compact,o as Default,u as Featured,A as GridLayout,T as Interaction,d as Large,x as Minimal,C as OnDark,S as RTL,m as Rounded,l as Small,f as WithoutActions,g as WithoutDescription,h as WithoutTags,gt as __namedExportsOrder,mt as default};
