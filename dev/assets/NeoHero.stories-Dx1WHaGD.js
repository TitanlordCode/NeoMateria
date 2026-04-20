import{d as u,c as r,F as d,b as T,h as O}from"./iframe-Dknl-Izy.js";import{p as j}from"./placeholder-CgeahcyT.js";import{a as E}from"./colorShowcase-ukgIxckm.js";import{c as F}from"./createA11yPlay-C_PKokKa.js";import{N as t}from"./NeoHero-BXIctglS.js";import{a as I}from"./NeoHeadlineTypes-CVOcXnNm.js";import{N as p}from"./NeoButton-Bcsfi_8-.js";import{N as m}from"./NeoLinkButton-CyV9BOG2.js";import{N as M}from"./NeoImage-BszgdnEf.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-Dc5bORdo.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadlinePrimary-8Q_eNYdd.js";import"./useHeadline-1j-ccmJX.js";import"./useButton-D17qNuey.js";import"./NeoIcon-OOi-7FOf.js";const _=["centered","split"],$=["sm","md","lg"],q=T.filter(e=>e!=="white"),ce={title:"Organisms/NeoHero",component:t,tags:["autodocs"],argTypes:{title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},variant:{control:"select",options:_,description:"`centered` — stacked, text centered. `split` — text left, media right.",table:{category:"Appearance"}},size:{control:"select",options:$,description:"Controls vertical padding.",table:{category:"Appearance"}},headingTag:{control:"select",options:I,description:"HTML element for the heading. Defaults to `h1` — change only for non-page-level heroes.",table:{category:"Appearance"}},color:{control:"select",options:q,description:"Accent color applied to the title.",table:{category:"Appearance"}},actions:{control:!1,description:"CTA buttons or interactive elements rendered below the headline and body copy.",table:{category:"Slots"}},media:{control:!1,description:"Media content (image, video) displayed beside the text in `split` variant.",table:{category:"Slots"}}},args:{title:"Build beautiful interfaces",subtitle:"A complete Vue 3 design system — accessible, themed, and ready for production.",variant:"centered",size:"md",color:"blue"}},n={tags:["snapshot"],render:e=>u({name:"CenteredRender",setup(){return()=>r(t,e,{actions:()=>r(d,null,[r(p,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(m,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})}}),parameters:{docs:{source:{code:`<NeoHero
  title="Build beautiful interfaces"
  subtitle="A complete Vue 3 design system."
  color="blue"
>
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
    <NeoLinkButton href="#" text="View docs" color="blue" variant="secondary" />
  </template>
</NeoHero>`}}}},a={tags:["snapshot"],args:{variant:"split"},render:e=>u({name:"SplitRender",setup(){return()=>r(t,e,{actions:()=>r(d,null,[r(p,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(m,{href:"#",text:"Learn more",color:e.color??"blue",variant:"secondary"},null)]),media:()=>r(M,{src:j(560,420),alt:"Hero image","object-fit":"cover",style:{borderRadius:"12px",blockSize:"100%",inlineSize:"100%"}},null)})}}),parameters:{docs:{source:{code:`<NeoHero title="Build beautiful interfaces" variant="split" color="blue">
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
  </template>
  <template #media>
    <img src="..." alt="Hero image" />
  </template>
</NeoHero>`}}}},s={tags:["snapshot"],args:{size:"sm",variant:"centered"},render:e=>u({name:"SmallRender",setup(){return()=>r(t,e,null)}}),parameters:{docs:{source:{code:'<NeoHero title="Page Banner" size="sm" variant="centered" color="blue" />'}}}},l={tags:["snapshot"],globals:{backgrounds:"#000"},args:{variant:"centered",color:"blue"},render:e=>u({name:"OnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{background:"#111",color:"var(--neo-color-grey100)"}},[r(t,e,{actions:()=>r(d,null,[r(p,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(m,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})])}})},c={tags:["snapshot"],globals:{direction:"rtl"},args:{title:"ابنِ واجهات جميلة",subtitle:"نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج."}},o={tags:["snapshot"],render:E(t,[{name:"Centered",variant:"centered",renderComponent:(e,D)=>O(D,{color:e,variant:"centered",title:`${e} — Build beautiful interfaces`,subtitle:"A complete Vue 3 design system.",size:"sm"})}])},i={...o,tags:["!dev","test-only"],play:F()};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoHeroProps) => {
    return defineComponent({
      name: 'CenteredRender',
      setup() {
        return () => <NeoHero {...args}>
                        {{
            actions: () => <>
                                    <NeoButton text="Get started" color={args.color ?? 'blue'} variant="primary" />
                                    <NeoLinkButton href="#" text="View docs" color={args.color ?? 'blue'} variant="secondary" />
                                </>
          }}
                    </NeoHero>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHero
  title="Build beautiful interfaces"
  subtitle="A complete Vue 3 design system."
  color="blue"
>
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
    <NeoLinkButton href="#" text="View docs" color="blue" variant="secondary" />
  </template>
</NeoHero>\`
      }
    }
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,v,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'split'
  },
  render: (args: NeoHeroProps) => {
    return defineComponent({
      name: 'SplitRender',
      setup() {
        return () => <NeoHero {...args}>
                        {{
            actions: () => <>
                                    <NeoButton text="Get started" color={args.color ?? 'blue'} variant="primary" />
                                    <NeoLinkButton href="#" text="Learn more" color={args.color ?? 'blue'} variant="secondary" />
                                </>,
            media: () => <NeoImage src={placeholder(560, 420)} alt="Hero image" object-fit="cover" style={{
              borderRadius: '12px',
              blockSize: '100%',
              inlineSize: '100%'
            }} />
          }}
                    </NeoHero>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHero title="Build beautiful interfaces" variant="split" color="blue">
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
  </template>
  <template #media>
    <img src="..." alt="Hero image" />
  </template>
</NeoHero>\`
      }
    }
  }
}`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,C,A;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'sm',
    variant: 'centered'
  },
  render: (args: NeoHeroProps) => {
    return defineComponent({
      name: 'SmallRender',
      setup() {
        return () => <NeoHero {...args} />;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHero title="Page Banner" size="sm" variant="centered" color="blue" />\`
      }
    }
  }
}`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var H,x,B;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  args: {
    variant: 'centered',
    color: 'blue'
  },
  render: (args: NeoHeroProps) => {
    return defineComponent({
      name: 'OnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          background: '#111',
          color: 'var(--neo-color-grey100)'
        }}>
                        <NeoHero {...args}>
                            {{
              actions: () => <>
                                        <NeoButton text="Get started" color={args.color ?? 'blue'} variant="primary" />
                                        <NeoLinkButton href="#" text="View docs" color={args.color ?? 'blue'} variant="secondary" />
                                    </>
            }}
                        </NeoHero>
                    </div>;
      }
    });
  }
}`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,k,V;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    title: 'ابنِ واجهات جميلة',
    subtitle: 'نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج.'
  }
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var R,z,L;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createAllColorsRender<typeof NeoHero>(NeoHero, [{
    name: 'Centered',
    variant: 'centered',
    renderComponent: (color, Component) => h(Component, {
      color,
      variant: 'centered',
      title: \`\${color} — Build beautiful interfaces\`,
      subtitle: 'A complete Vue 3 design system.',
      size: 'sm'
    })
  }])
}`,...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var G,w,P;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const ie=["Centered","Split","Small","OnDark","RTL","AllColors","AllColorsA11y"];export{o as AllColors,i as AllColorsA11y,n as Centered,l as OnDark,c as RTL,s as Small,a as Split,ie as __namedExportsOrder,ce as default};
