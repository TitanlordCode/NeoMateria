import{b as D,d as t,c as e}from"./iframe-BNVHVJhn.js";import{N as r}from"./NeoHeadingGroup-DC5T-nGI.js";import{h as S}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import{h as x,a as k}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadlinePrimary-BWLdawQg.js";import"./useHeadline-B1vqXKMh.js";import"./NeoHeadlineSecondary-BDKwoF9n.js";import"./NeoHeadlineTertiary-DkTcmAXh.js";const z={title:"Molecules/NeoHeadingGroup",component:r,tags:["autodocs"],argTypes:{title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},overline:{control:"text",description:"Small uppercase label rendered above the title.",table:{category:"Content"}},variant:{control:"select",options:S,description:"Controls which headline size is used for the title.",table:{category:"Appearance"}},headingTag:{control:"select",options:k,description:"The HTML element for the title. Decouples visual size from document semantics.",table:{category:"Appearance"}},align:{control:"select",options:x,description:"Text alignment for the entire group.",table:{category:"Appearance"}},color:{control:"select",options:D,description:"Accent color applied to the title and overline.",table:{category:"Appearance"}}},args:{title:"Section Heading",variant:"primary"}},o={render:n=>t({name:"DefaultRender",setup(){return()=>e(r,n,null)}}),parameters:{docs:{source:{code:'<NeoHeadingGroup title="Section Heading" />'}}}},a={args:{overline:"Features",title:"Everything You Need",subtitle:"A complete design system for building beautiful interfaces at scale.",color:"blue"},render:n=>t({name:"WithOverlineRender",setup(){return()=>e(r,n,null)}}),parameters:{docs:{source:{code:`<NeoHeadingGroup
  overline="Features"
  title="Everything You Need"
  subtitle="A complete design system for building beautiful interfaces at scale."
  color="blue"
/>`}}}},i={args:{overline:"About Us",title:"Built for developers",subtitle:"Opinionated, accessible, and production-ready.",align:"center",color:"purple"},render:n=>t({name:"CenteredRender",setup(){return()=>e(r,n,null)}}),parameters:{docs:{source:{code:`<NeoHeadingGroup
  overline="About Us"
  title="Built for developers"
  subtitle="Opinionated, accessible, and production-ready."
  align="center"
  color="purple"
/>`}}}},s={render:()=>t({name:"AllVariantsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"48px"}},[e(r,{title:"Primary — Page Hero",subtitle:"The largest headline. Use once per page, typically in a hero section.",variant:"primary"},null),e(r,{title:"Secondary — Section Header",subtitle:"Mid-size. Use for major sections within a page.",variant:"secondary"},null),e(r,{title:"Tertiary — Subsection",subtitle:"Smaller weight. Use for subsections or card headers.",variant:"tertiary"},null)])}})},l={globals:{backgrounds:"#000"},args:{overline:"Dark Mode",title:"Looks Great in the Dark",subtitle:"Inherits color from the container context.",color:"blue"},render:n=>t({name:"OnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{padding:"32px"}},[e(r,n,null)])}})};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: NeoHeadingGroupProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoHeadingGroup {...args} />;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadingGroup title="Section Heading" />\`
      }
    }
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    overline: 'Features',
    title: 'Everything You Need',
    subtitle: 'A complete design system for building beautiful interfaces at scale.',
    color: 'blue'
  },
  render: (args: NeoHeadingGroupProps) => {
    return defineComponent({
      name: 'WithOverlineRender',
      setup() {
        return () => <NeoHeadingGroup {...args} />;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadingGroup
  overline="Features"
  title="Everything You Need"
  subtitle="A complete design system for building beautiful interfaces at scale."
  color="blue"
/>\`
      }
    }
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    overline: 'About Us',
    title: 'Built for developers',
    subtitle: 'Opinionated, accessible, and production-ready.',
    align: 'center',
    color: 'purple'
  },
  render: (args: NeoHeadingGroupProps) => {
    return defineComponent({
      name: 'CenteredRender',
      setup() {
        return () => <NeoHeadingGroup {...args} />;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadingGroup
  overline="About Us"
  title="Built for developers"
  subtitle="Opinionated, accessible, and production-ready."
  align="center"
  color="purple"
/>\`
      }
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,v,H;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return defineComponent({
      name: 'AllVariantsRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px'
        }}>
                        <NeoHeadingGroup title="Primary — Page Hero" subtitle="The largest headline. Use once per page, typically in a hero section." variant="primary" />
                        <NeoHeadingGroup title="Secondary — Section Header" subtitle="Mid-size. Use for major sections within a page." variant="secondary" />
                        <NeoHeadingGroup title="Tertiary — Subsection" subtitle="Smaller weight. Use for subsections or card headers." variant="tertiary" />
                    </div>;
      }
    });
  }
}`,...(H=(v=s.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var N,G,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  args: {
    overline: 'Dark Mode',
    title: 'Looks Great in the Dark',
    subtitle: 'Inherits color from the container context.',
    color: 'blue'
  },
  render: (args: NeoHeadingGroupProps) => {
    return defineComponent({
      name: 'OnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          padding: '32px'
        }}>
                        <NeoHeadingGroup {...args} />
                    </div>;
      }
    });
  }
}`,...(A=(G=l.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};const B=["Default","WithOverline","Centered","AllVariants","OnDark"];export{s as AllVariants,i as Centered,o as Default,l as OnDark,a as WithOverline,B as __namedExportsOrder,z as default};
