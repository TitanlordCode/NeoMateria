import{b as A,d as t,c as e}from"./iframe-De1OY-BN.js";import{N as n}from"./NeoHeadingGroup-C16Y-ScD.js";import{h as D}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import{h as S,a as k}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadlinePrimary-BpBm-x9r.js";import"./useHeadline-DfLPp5Pa.js";import"./NeoHeadlineSecondary-asDHqzX_.js";import"./NeoHeadlineTertiary-Bt8HCphT.js";const z={title:"Molecules/NeoHeadingGroup",component:n,tags:["autodocs"],argTypes:{title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},overline:{control:"text",description:"Small uppercase label rendered above the title.",table:{category:"Content"}},variant:{control:"select",options:D,description:"Controls which headline size is used for the title.",table:{category:"Appearance"}},headingTag:{control:"select",options:k,description:"The HTML element for the title. Decouples visual size from document semantics.",table:{category:"Appearance"}},align:{control:"select",options:S,description:"Text alignment for the entire group.",table:{category:"Appearance"}},color:{control:"select",options:A,description:"Accent color applied to the title and overline.",table:{category:"Appearance"}}},args:{title:"Section Heading",variant:"primary"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},o={tags:["snapshot"],render:r=>t({name:"DefaultRender",setup(){return()=>e(n,r,null)}}),parameters:{docs:{source:{code:'<NeoHeadingGroup title="Section Heading" />'}}}},a={tags:["snapshot"],args:{overline:"Features",title:"Everything You Need",subtitle:"A complete design system for building beautiful interfaces at scale.",color:"blue"},render:r=>t({name:"WithOverlineRender",setup(){return()=>e(n,r,null)}}),parameters:{docs:{source:{code:`<NeoHeadingGroup
  overline="Features"
  title="Everything You Need"
  subtitle="A complete design system for building beautiful interfaces at scale."
  color="blue"
/>`}}}},s={tags:["snapshot"],args:{overline:"About Us",title:"Built for developers",subtitle:"Opinionated, accessible, and production-ready.",align:"center",color:"purple"},render:r=>t({name:"CenteredRender",setup(){return()=>e(n,r,null)}}),parameters:{docs:{source:{code:`<NeoHeadingGroup
  overline="About Us"
  title="Built for developers"
  subtitle="Opinionated, accessible, and production-ready."
  align="center"
  color="purple"
/>`}}}},i={tags:["no-test"],render:()=>t({name:"AllVariantsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"48px"}},[e(n,{title:"Primary — Page Hero",subtitle:"The largest headline. Use once per page, typically in a hero section.",variant:"primary"},null),e(n,{title:"Secondary — Section Header",subtitle:"Mid-size. Use for major sections within a page.",variant:"secondary"},null),e(n,{title:"Tertiary — Subsection",subtitle:"Smaller weight. Use for subsections or card headers.",variant:"tertiary"},null)])}})},l={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{overline:"Dark Mode",title:"Looks Great in the Dark",subtitle:"Inherits color from the container context.",color:"blue"},render:r=>t({name:"OnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{padding:"32px"}},[e(n,r,null)])}})};var c,u,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,g,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,H;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['no-test'],
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
}`,...(H=(y=i.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var N,G,x;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(x=(G=l.parameters)==null?void 0:G.docs)==null?void 0:x.source}}};const B=["Default","WithOverline","Centered","AllVariants","OnDark"];export{i as AllVariants,s as Centered,o as Default,l as OnDark,a as WithOverline,B as __namedExportsOrder,z as default};
