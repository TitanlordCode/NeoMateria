import{d,c as t,F as p,b as I,h as M}from"./iframe-D97hRsDr.js";import{p as j}from"./placeholder-CgeahcyT.js";import{a as E}from"./colorShowcase-B0D6CXNh.js";import{c as _}from"./createA11yPlay-BakXPOC5.js";import{N as r}from"./NeoHero-Cy3beWvG.js";import{a as $}from"./NeoHeadlineTypes-CVOcXnNm.js";import{N as m}from"./NeoButton-e5nE5jrG.js";import{N as g}from"./NeoLinkButton-b-U82eMy.js";import{N as q}from"./NeoImage-26gpCn16.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-BAN8dmkr.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadlinePrimary-x0CVJiMp.js";import"./useHeadline-D0HxijXo.js";import"./NeoSection-B5MUP6FZ.js";import"./useButton-D7uz1LQ6.js";import"./NeoIcon-9HhtqIbD.js";const J=["centered","split"],K=["sm","md","lg"],Q=I.filter(e=>e!=="white"),me={title:"Organisms/NeoHero",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"\nA page-level hero region with a headline, optional subtitle, actions, and media. Two variants: `centered` stacks content centered; `split` puts text on one side and media on the other.\n\nThis component wraps itself in a `NeoSection`. If you place it **inside another `NeoSection`**, it auto-detects the ancestor and skips its own wrapper — so you never get a doubled section. To force-skip the wrapper in any other container, set `no-section`.\n                "}}},argTypes:{title:{control:"text",table:{category:"Content"},description:"Main hero headline, rendered as the primary heading."},subtitle:{control:"text",table:{category:"Content"},description:"Supporting copy shown beneath the title."},variant:{control:"select",options:J,description:"`centered` — stacked, text centered. `split` — text left, media right.",table:{category:"Appearance"}},size:{control:"select",options:K,description:"Controls vertical padding.",table:{category:"Appearance"}},headingTag:{control:"select",options:$,description:"HTML element for the heading. Defaults to `h1` — change only for non-page-level heroes.",table:{category:"Appearance"}},color:{control:"select",options:Q,description:"Accent color applied to the title.",table:{category:"Appearance"}},actions:{control:!1,description:"CTA buttons or interactive elements rendered below the headline and body copy.",table:{category:"Slots"}},media:{control:!1,description:"Media content (image, video) displayed beside the text in `split` variant.",table:{category:"Slots"}},section:{control:!1,description:"Props forwarded to the internal `NeoSection` wrapper (e.g. `fullWidth`).",table:{category:"Layout"}},noSection:{control:"boolean",description:"Force-skip the internal `NeoSection` wrapper. A `NeoSection` ancestor is auto-detected and skipped already; use this to opt out inside non-`NeoSection` containers.",table:{category:"Layout"}}},args:{title:"Build beautiful interfaces",subtitle:"A complete Vue 3 design system — accessible, themed, and ready for production.",variant:"centered",size:"md",color:"blue"}},n={tags:["snapshot"],render:e=>d({name:"CenteredRender",setup(){return()=>t(r,e,{actions:()=>t(p,null,[t(m,{text:"Get started",color:e.color??"blue",variant:"primary"},null),t(g,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})}}),parameters:{docs:{source:{code:`<NeoHero
  title="Build beautiful interfaces"
  subtitle="A complete Vue 3 design system."
  color="blue"
>
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
    <NeoLinkButton href="#" text="View docs" color="blue" variant="secondary" />
  </template>
</NeoHero>`}}}},a={tags:["snapshot"],args:{variant:"split"},render:e=>d({name:"SplitRender",setup(){return()=>t(r,e,{actions:()=>t(p,null,[t(m,{text:"Get started",color:e.color??"blue",variant:"primary"},null),t(g,{href:"#",text:"Learn more",color:e.color??"blue",variant:"secondary"},null)]),media:()=>t(q,{src:j(560,420),alt:"Hero image","object-fit":"cover",style:{borderRadius:"12px",blockSize:"100%",inlineSize:"100%"}},null)})}}),parameters:{docs:{source:{code:`<NeoHero title="Build beautiful interfaces" variant="split" color="blue">
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
  </template>
  <template #media>
    <img src="..." alt="Hero image" />
  </template>
</NeoHero>`}}}},s={tags:["snapshot"],args:{size:"sm",variant:"centered"},render:e=>d({name:"SmallRender",setup(){return()=>t(r,e,null)}}),parameters:{docs:{source:{code:'<NeoHero title="Page Banner" size="sm" variant="centered" color="blue" />'}}}},i={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{variant:"centered",color:"blue"},render:e=>d({name:"OnDarkRender",setup(){return()=>t("div",{class:"u-onDark",style:{background:"#111",color:"var(--neo-color-grey100)"}},[t(r,e,{actions:()=>t(p,null,[t(m,{text:"Get started",color:e.color??"blue",variant:"primary"},null),t(g,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})])}})},l={tags:["snapshot"],globals:{direction:"rtl"},args:{title:"ابنِ واجهات جميلة",subtitle:"نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج."}},o={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:E(r,[{name:"Centered",variant:"centered",renderComponent:(e,W)=>M(W,{color:e,variant:"centered",title:`${e} — Build beautiful interfaces`,subtitle:"A complete Vue 3 design system.",size:"sm"})}])},c={...o,tags:["!dev","test-only"],play:_()},u={tags:["snapshot"],args:{section:{fullWidth:!0}}};var b,h,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,v,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var C,x,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var S,H,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(H=i.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var B,w,V;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    title: 'ابنِ واجهات جميلة',
    subtitle: 'نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج.'
  }
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var R,z,L;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var G,T,P;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var D,O,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    section: {
      fullWidth: true
    }
  }
}`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const ge=["Centered","Split","Small","OnDark","RTL","AllColors","AllColorsA11y","FullWidth"];export{o as AllColors,c as AllColorsA11y,n as Centered,u as FullWidth,i as OnDark,l as RTL,s as Small,a as Split,ge as __namedExportsOrder,me as default};
