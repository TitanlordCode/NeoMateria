import{d as s,c as t,b as h}from"./iframe-B0Dukz3x.js";import{N as a}from"./NeoTextBlock-CwmW_umb.js";import{h as T,a as f}from"./NeoHeadlineTypes-CVOcXnNm.js";import{h as b}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadingGroup-C9ZZL3FC.js";import"./NeoHeadlinePrimary-CMw6Vjnp.js";import"./useHeadline-DgrZFlcf.js";import"./NeoHeadlineSecondary-Douy5bx7.js";import"./NeoHeadlineTertiary-CatAD7IM.js";import"./NeoLinkButton-Bzqx0xKJ.js";import"./useButton-P1G5yMpQ.js";import"./NeoIcon-BfncIjiP.js";const C=h.filter(e=>e!=="white"),c="Build faster with a complete set of accessible, production-ready Vue components that follow your design tokens automatically.",$={title:"Molecules/NeoTextBlock",component:a,tags:["autodocs"],argTypes:{heading:{control:"text",table:{category:"Content"}},body:{control:"text",table:{category:"Content"}},ctaText:{control:"text",table:{category:"Content"}},ctaHref:{control:"text",table:{category:"Content"}},headingVariant:{control:"select",options:b,description:"Size of the heading.",table:{category:"Appearance"}},headingTag:{control:"select",options:f,description:"HTML element for the heading.",table:{category:"Appearance"}},color:{control:"select",options:C,description:"Accent color applied to the heading and CTA.",table:{category:"Appearance"}},align:{control:"select",options:T,description:"Text alignment.",table:{category:"Appearance"}}},args:{heading:"Design systems made easy",body:c,headingVariant:"secondary"}},n={tags:["snapshot"],render:e=>s({name:"DefaultRender",setup(){return()=>t("div",{style:{maxInlineSize:"640px"}},[t(a,e,null)])}}),parameters:{docs:{source:{code:`<NeoTextBlock
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
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const w=["Default","WithCTA","Centered"];export{o as Centered,n as Default,r as WithCTA,w as __namedExportsOrder,$ as default};
