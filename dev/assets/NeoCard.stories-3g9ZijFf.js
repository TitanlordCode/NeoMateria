import{d as Pe,c as k,m as Ne}from"./iframe-BBbPLObx.js";import{N as c}from"./NeoCard-CKm9fQT3.js";import{c as Oe}from"./colorShowcase-CVTHfhfV.js";import{p as e}from"./placeholder-J2GqGUFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-DB5DIDKj.js";import"./NeoBadge-BM8e5zkb.js";import"./NeoButton-CsxJoi-B.js";import"./useButton-otF8SIdU.js";import"./NeoIcon-DXYOa7dd.js";import"./NeoLink-Crcw9R3O.js";import"./NeoHeadlineTertiary-D8CWt5r_.js";import"./useHeadline-pIEPZDoK.js";const Me=["small","medium","large"],Be=["default","compact","featured"],{expect:He,fn:w,userEvent:De,waitFor:Le,within:Ee}=__STORYBOOK_MODULE_TEST__,Qe={title:"Molecules/NeoCard",component:c,tags:["autodocs"],argTypes:{color:{description:"Theme color applied to action buttons and link accents inside the card.",table:{category:"Appearance"}},size:{control:"select",options:Me,description:"Controls overall card padding and spacing.",table:{category:"Appearance"}},variant:{control:"select",options:Be,description:"`default`: standard card layout. `compact`: reduced padding for dense lists. `featured`: larger image area for hero content.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies rounded corners to the card.",table:{category:"Appearance"}},imageSrc:{control:"text",table:{category:"Content"}},imageAlt:{control:"text",table:{category:"Content"}},imageObjectFit:{control:"select",options:["contain","cover","fill","none","scale-down"],description:"CSS `object-fit` value for the card image. `cover` fills the image area by cropping; `contain` shows the full image with letterboxing.",table:{category:"Appearance"}},title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},tags:{control:"object",description:"Array of tag objects `{ text, color? }` rendered as NeoBadge pills below the description.",table:{category:"Content"}},actionText:{control:"text",description:"Primary call-to-action button. Only available when `href` is not set.",table:{category:"Content"}},actionHref:{control:"text",description:"URL for the primary action button. Only available when `href` is not set.",table:{category:"Content"}},secondaryActionText:{control:"text",description:"Secondary call-to-action. Only available when `href` is not set.",table:{category:"Content"}},secondaryActionHref:{control:"text",description:"URL for the secondary action button. Only available when `href` is not set.",table:{category:"Content"}},href:{control:"text",description:"Makes the entire card a clickable link. When set, `actionText`/`actionHref`/`secondaryActionText`/`secondaryActionHref` are not available (discriminated union).",table:{category:"Behavior"}},external:{control:"boolean",table:{category:"Behavior"}}},args:{title:"Featured Content Title",description:"This is a versatile content card that can display games, products, articles, or any other type of content with an image, title, description, tags, and actions.",imageSrc:e(400,300),imageAlt:"Content card image",color:"blue",size:"medium",variant:"default",rounded:!1,actionText:"View More",secondaryActionText:"Learn More",secondaryActionHref:"#",tags:[{text:"Featured",color:"purple"},{text:"Popular",color:"green"}],"onAction-click":w(),"onSecondary-action-click":w()}},o={args:{imageSrc:"https://picsum.photos/seed/content1/400/300"}},i={args:{size:"small"}},s={args:{size:"large"}},d={args:{variant:"compact"}},l={args:{variant:"featured",title:"Featured Content",description:"This is featured content with a larger image and more prominent styling, perfect for highlighting important items."}},p={args:{rounded:!0}},u={args:{description:void 0}},m={args:{tags:[]}},g={args:{actionText:void 0,secondaryActionText:void 0}},f={args:{description:void 0,tags:[],actionText:void 0,secondaryActionText:void 0}},x={args:{href:"/products/featured-item",actionText:void 0,secondaryActionText:void 0}},h={args:{href:"https://example.com",external:!0,actionText:void 0,secondaryActionText:void 0}},y={parameters:{docs:{source:{code:`<!-- Provide href instead of action props to make the entire card clickable -->
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
</div>`}}},render:t=>Pe({name:"ClickableGridRender",setup(){const n={...t,actionText:void 0,actionHref:void 0,secondaryActionText:void 0,secondaryActionHref:void 0},r=[{...n,title:"Product One",imageSrc:e(400,300),href:"/products/1",tags:[{text:"New",color:"green"}]},{...n,title:"Product Two",imageSrc:e(400,300),href:"/products/2",tags:[{text:"Sale",color:"red"}]},{...n,title:"Product Three",imageSrc:e(400,300),href:"/products/3",tags:[{text:"Popular",color:"purple"}]}];return()=>k("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px",padding:"24px"}},[r.map((a,A)=>k(c,Ne({key:A},a,{description:void 0,actionText:void 0,secondaryActionText:void 0}),null))])}})},b={parameters:{docs:{source:{code:`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
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
</div>`}}},render:t=>Pe({name:"GridLayoutRender",setup(){const n=[{...t,title:"Mountain Adventure",imageSrc:e(400,300),tags:[{text:"Travel",color:"blue"},{text:"Nature",color:"green"}]},{...t,title:"Creative Workshop",imageSrc:e(400,300),tags:[{text:"Design",color:"purple"},{text:"Art",color:"pink"}]},{...t,title:"Tech Innovation",imageSrc:e(400,300),tags:[{text:"Technology",color:"cyan"},{text:"Innovation",color:"indigo"}]},{...t,title:"Wellness Guide",imageSrc:e(400,300),tags:[{text:"Health",color:"green"},{text:"Lifestyle",color:"lime"}]}];return()=>k("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px",padding:"24px"}},[n.map((r,a)=>k(c,Ne({key:a},r),null))])}})},T={...o,tags:["!dev"],play:async({args:t,canvasElement:n,step:r})=>{const a=Ee(n);await r("Check action button click",async()=>{const A=a.getByText("View More");await De.click(A)}),await Le(()=>He(t["onAction-click"]).toHaveBeenCalled())}},v={globals:{backgrounds:"#000"}},C={render:Oe(c,["default","compact","featured"],{defaultProps:{imageSrc:e(400,300)}})},S={globals:{backgrounds:"#000"},render:Oe(c,["default","compact","featured"],{dark:!0,defaultProps:{imageSrc:e(400,300)}})};var P,N,O;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/seed/content1/400/300'
  }
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,B,H;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var D,L,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(E=(L=s.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,j,G;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'compact'
  }
}`,...(G=(j=d.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var F,R,_;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'featured',
    title: 'Featured Content',
    description: 'This is featured content with a larger image and more prominent styling, perfect for highlighting important items.'
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var z,V,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var U,K,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...(Y=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var q,J,Q;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    tags: []
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    description: undefined,
    tags: [],
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    href: '/products/featured-item',
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ce,ie,se;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    external: true,
    actionText: undefined,
    secondaryActionText: undefined
  }
}`,...(se=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,le,pe;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ue,me,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,xe,he;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ye,be,Te;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(Te=(be=v.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var ve,Ce,Se;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoCard, ['default', 'compact', 'featured'], {
    defaultProps: {
      imageSrc: placeholder(400, 300)
    }
  })
}`,...(Se=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ke,Ae,we;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoCard, ['default', 'compact', 'featured'], {
    dark: true,
    defaultProps: {
      imageSrc: placeholder(400, 300)
    }
  })
}`,...(we=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};const Xe=["Default","Small","Large","Compact","Featured","Rounded","WithoutDescription","WithoutTags","WithoutActions","Minimal","Clickable","ClickableExternal","ClickableGrid","GridLayout","Interaction","OnDark","AllColors","AllColorsOnDark"];export{C as AllColors,S as AllColorsOnDark,x as Clickable,h as ClickableExternal,y as ClickableGrid,d as Compact,o as Default,l as Featured,b as GridLayout,T as Interaction,s as Large,f as Minimal,v as OnDark,p as Rounded,i as Small,g as WithoutActions,u as WithoutDescription,m as WithoutTags,Xe as __namedExportsOrder,Qe as default};
