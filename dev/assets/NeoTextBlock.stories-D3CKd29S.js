import{d as s,b as h,c as t}from"./iframe-CxSUtlfl.js";import{N as a}from"./NeoTextBlock-Sj_t5Nom.js";import{h as T,a as f}from"./NeoHeadlineTypes-CVOcXnNm.js";import{h as b}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadingGroup-kBnmtE42.js";import"./NeoHeadlinePrimary-BhhrHS2o.js";import"./useHeadline-CblIP7xv.js";import"./NeoHeadlineSecondary-CGFb8tXJ.js";import"./NeoHeadlineTertiary-BMSsqoIS.js";import"./NeoLinkButton-DNCqAGjj.js";import"./useButton-AvhftX2-.js";import"./NeoIcon-BqT3zwQ9.js";const C=h.filter(e=>e!=="white"),c="Build faster with a complete set of accessible, production-ready Vue components that follow your design tokens automatically.",W={title:"Organisms/NeoTextBlock",component:a,tags:["autodocs"],argTypes:{heading:{control:"text",table:{category:"Content"}},body:{control:"text",table:{category:"Content"}},ctaText:{control:"text",table:{category:"Content"}},ctaHref:{control:"text",table:{category:"Content"}},headingVariant:{control:"select",options:b,description:"Size of the heading.",table:{category:"Appearance"}},headingTag:{control:"select",options:f,description:"HTML element for the heading.",table:{category:"Appearance"}},color:{control:"select",options:C,description:"Accent color applied to the heading and CTA.",table:{category:"Appearance"}},align:{control:"select",options:T,description:"Text alignment.",table:{category:"Appearance"}}},args:{heading:"Design systems made easy",body:c,headingVariant:"secondary"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},n={tags:["snapshot"],render:e=>s({name:"DefaultRender",setup(){return()=>t("div",{style:{maxInlineSize:"640px"}},[t(a,e,null)])}}),parameters:{docs:{source:{code:`<NeoTextBlock
  heading="Design systems made easy"
  body="${c}"
/>`}}}},r={tags:["snapshot"],args:{color:"blue",ctaText:"Get started",ctaHref:"#"},render:e=>s({name:"WithCTARender",setup(){return()=>t("div",{style:{maxInlineSize:"640px"}},[t(a,e,null)])}}),parameters:{docs:{source:{code:`<NeoTextBlock
  heading="Design systems made easy"
  body="${c}"
  color="blue"
  cta-text="Get started"
  cta-href="#"
/>`}}}},o={tags:["snapshot"],args:{align:"center",color:"purple",ctaText:"Learn more",ctaHref:"#"},render:e=>s({name:"CenteredRender",setup(){return()=>t("div",{style:{maxInlineSize:"640px"}},[t(a,e,null)])}})};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoTextBlockProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          maxInlineSize: '640px'
        }}>
                        <NeoTextBlock {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTextBlock
  heading="Design systems made easy"
  body="\${bodyText}"
/>\`
      }
    }
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    ctaText: 'Get started',
    ctaHref: '#'
  },
  render: (args: NeoTextBlockProps) => {
    return defineComponent({
      name: 'WithCTARender',
      setup() {
        return () => <div style={{
          maxInlineSize: '640px'
        }}>
                        <NeoTextBlock {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTextBlock
  heading="Design systems made easy"
  body="\${bodyText}"
  color="blue"
  cta-text="Get started"
  cta-href="#"
/>\`
      }
    }
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    align: 'center',
    color: 'purple',
    ctaText: 'Learn more',
    ctaHref: '#'
  },
  render: (args: NeoTextBlockProps) => {
    return defineComponent({
      name: 'CenteredRender',
      setup() {
        return () => <div style={{
          maxInlineSize: '640px'
        }}>
                        <NeoTextBlock {...args} />
                    </div>;
      }
    });
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const $=["Default","WithCTA","Centered"];export{o as Centered,n as Default,r as WithCTA,$ as __namedExportsOrder,W as default};
