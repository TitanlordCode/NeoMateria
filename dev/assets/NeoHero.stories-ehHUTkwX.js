import{d,c as r,F as p,b as j,h as E}from"./iframe-CTMn5qNf.js";import{p as I}from"./placeholder-CgeahcyT.js";import{a as M}from"./colorShowcase-CN4sFWnb.js";import{c as _}from"./createA11yPlay-kihteW60.js";import{N as t}from"./NeoHero-BaYL3fup.js";import{a as $}from"./NeoHeadlineTypes-CVOcXnNm.js";import{N as m}from"./NeoButton-DDqdkNDQ.js";import{N as g}from"./NeoLinkButton-BkuoqwX4.js";import{N as q}from"./NeoImage-CIO7Oe1n.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-_1yeUoyL.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadlinePrimary-CLbBvooA.js";import"./useHeadline-BXma_d8t.js";import"./NeoSection-B2C58QuJ.js";import"./useButton-DMMzAdeq.js";import"./NeoIcon-jwqnDL1X.js";const J=["centered","split"],K=["sm","md","lg"],Q=j.filter(e=>e!=="white"),me={title:"Organisms/NeoHero",component:t,tags:["autodocs"],argTypes:{title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},variant:{control:"select",options:J,description:"`centered` — stacked, text centered. `split` — text left, media right.",table:{category:"Appearance"}},size:{control:"select",options:K,description:"Controls vertical padding.",table:{category:"Appearance"}},headingTag:{control:"select",options:$,description:"HTML element for the heading. Defaults to `h1` — change only for non-page-level heroes.",table:{category:"Appearance"}},color:{control:"select",options:Q,description:"Accent color applied to the title.",table:{category:"Appearance"}},actions:{control:!1,description:"CTA buttons or interactive elements rendered below the headline and body copy.",table:{category:"Slots"}},media:{control:!1,description:"Media content (image, video) displayed beside the text in `split` variant.",table:{category:"Slots"}}},args:{title:"Build beautiful interfaces",subtitle:"A complete Vue 3 design system — accessible, themed, and ready for production.",variant:"centered",size:"md",color:"blue"}},n={tags:["snapshot"],render:e=>d({name:"CenteredRender",setup(){return()=>r(t,e,{actions:()=>r(p,null,[r(m,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(g,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})}}),parameters:{docs:{source:{code:`<NeoHero
  title="Build beautiful interfaces"
  subtitle="A complete Vue 3 design system."
  color="blue"
>
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
    <NeoLinkButton href="#" text="View docs" color="blue" variant="secondary" />
  </template>
</NeoHero>`}}}},a={tags:["snapshot"],args:{variant:"split"},render:e=>d({name:"SplitRender",setup(){return()=>r(t,e,{actions:()=>r(p,null,[r(m,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(g,{href:"#",text:"Learn more",color:e.color??"blue",variant:"secondary"},null)]),media:()=>r(q,{src:I(560,420),alt:"Hero image","object-fit":"cover",style:{borderRadius:"12px",blockSize:"100%",inlineSize:"100%"}},null)})}}),parameters:{docs:{source:{code:`<NeoHero title="Build beautiful interfaces" variant="split" color="blue">
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
  </template>
  <template #media>
    <img src="..." alt="Hero image" />
  </template>
</NeoHero>`}}}},s={tags:["snapshot"],args:{size:"sm",variant:"centered"},render:e=>d({name:"SmallRender",setup(){return()=>r(t,e,null)}}),parameters:{docs:{source:{code:'<NeoHero title="Page Banner" size="sm" variant="centered" color="blue" />'}}}},l={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{variant:"centered",color:"blue"},render:e=>d({name:"OnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{background:"#111",color:"var(--neo-color-grey100)"}},[r(t,e,{actions:()=>r(p,null,[r(m,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(g,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})])}})},i={tags:["snapshot"],globals:{direction:"rtl"},args:{title:"ابنِ واجهات جميلة",subtitle:"نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج."}},o={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:M(t,[{name:"Centered",variant:"centered",renderComponent:(e,W)=>E(W,{color:e,variant:"centered",title:`${e} — Build beautiful interfaces`,subtitle:"A complete Vue 3 design system.",size:"sm"})}])},c={...o,tags:["!dev","test-only"],play:_()},u={tags:["snapshot"],args:{section:{fullWidth:!0}}};var b,y,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,h,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(h=a.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var C,x,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var H,B,S;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var k,V,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    title: 'ابنِ واجهات جميلة',
    subtitle: 'نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج.'
  }
}`,...(R=(V=i.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var z,w,L;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
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
}`,...(L=(w=o.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var G,P,D;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var T,O,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    section: {
      fullWidth: true
    }
  }
}`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const ge=["Centered","Split","Small","OnDark","RTL","AllColors","AllColorsA11y","FullWidth"];export{o as AllColors,c as AllColorsA11y,n as Centered,u as FullWidth,l as OnDark,i as RTL,s as Small,a as Split,ge as __namedExportsOrder,me as default};
