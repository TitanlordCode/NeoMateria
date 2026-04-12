import{d as c,c as r,F as i,b as z,h as V}from"./iframe-BBbPLObx.js";import{p as R}from"./placeholder-J2GqGUFJ.js";import{a as G}from"./colorShowcase-CVTHfhfV.js";import{N as t}from"./NeoHero-D2Pwa0LM.js";import{a as L}from"./NeoHeadlineTypes-CVOcXnNm.js";import{N as d}from"./NeoButton-CsxJoi-B.js";import{N as u}from"./NeoLinkButton-hA0GwsXd.js";import{N as w}from"./NeoImage-DB5DIDKj.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadlinePrimary-CaTXF9rw.js";import"./useHeadline-pIEPZDoK.js";import"./useButton-otF8SIdU.js";import"./NeoIcon-DXYOa7dd.js";const D=["centered","split"],O=["sm","md","lg"],P=z.filter(e=>e!=="white"),X={title:"Organisms/NeoHero",component:t,tags:["autodocs"],argTypes:{title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},variant:{control:"select",options:D,description:"`centered` — stacked, text centered. `split` — text left, media right.",table:{category:"Appearance"}},size:{control:"select",options:O,description:"Controls vertical padding.",table:{category:"Appearance"}},headingTag:{control:"select",options:L,description:"HTML element for the heading. Defaults to `h1` — change only for non-page-level heroes.",table:{category:"Appearance"}},color:{control:"select",options:P,description:"Accent color applied to the title.",table:{category:"Appearance"}}},args:{title:"Build beautiful interfaces",subtitle:"A complete Vue 3 design system — accessible, themed, and ready for production.",variant:"centered",size:"md",color:"blue"}},o={render:e=>c({name:"CenteredRender",setup(){return()=>r(t,e,{actions:()=>r(i,null,[r(d,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(u,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})}}),parameters:{docs:{source:{code:`<NeoHero
  title="Build beautiful interfaces"
  subtitle="A complete Vue 3 design system."
  color="blue"
>
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
    <NeoLinkButton href="#" text="View docs" color="blue" variant="secondary" />
  </template>
</NeoHero>`}}}},n={args:{variant:"split"},render:e=>c({name:"SplitRender",setup(){return()=>r(t,e,{actions:()=>r(i,null,[r(d,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(u,{href:"#",text:"Learn more",color:e.color??"blue",variant:"secondary"},null)]),media:()=>r(w,{src:R(560,420),alt:"Hero image","object-fit":"cover",style:{borderRadius:"12px",blockSize:"100%",inlineSize:"100%"}},null)})}}),parameters:{docs:{source:{code:`<NeoHero title="Build beautiful interfaces" variant="split" color="blue">
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
  </template>
  <template #media>
    <img src="..." alt="Hero image" />
  </template>
</NeoHero>`}}}},a={args:{size:"sm",variant:"centered"},render:e=>c({name:"SmallRender",setup(){return()=>r(t,e,null)}}),parameters:{docs:{source:{code:'<NeoHero title="Page Banner" size="sm" variant="centered" color="blue" />'}}}},s={globals:{backgrounds:"#000"},args:{variant:"centered",color:"blue"},render:e=>c({name:"OnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{background:"#111",color:"var(--neo-color-grey100)"}},[r(t,e,{actions:()=>r(i,null,[r(d,{text:"Get started",color:e.color??"blue",variant:"primary"},null),r(u,{href:"#",text:"View docs",color:e.color??"blue",variant:"secondary"},null)])})])}})},l={render:G(t,[{name:"Centered",variant:"centered",renderComponent:(e,A)=>V(A,{color:e,variant:"centered",title:`${e} — Build beautiful interfaces`,subtitle:"A complete Vue 3 design system.",size:"sm"})}])};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,f,N;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var v,y,H;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(H=(y=a.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var x,h,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var C,k,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const Y=["Centered","Split","Small","OnDark","AllColors"];export{l as AllColors,o as Centered,s as OnDark,a as Small,n as Split,Y as __namedExportsOrder,X as default};
