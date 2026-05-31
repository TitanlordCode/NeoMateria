import{d as s,b as y,c as t}from"./iframe-Bg0OttVg.js";import{N as a}from"./NeoTextBlock-eeA2YHeu.js";import{h as f,a as T}from"./NeoHeadlineTypes-CVOcXnNm.js";import{h as b}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoHeadingGroup-BKJCBuOe.js";import"./NeoHeadlinePrimary-BkKyzwYv.js";import"./useHeadline-DfckPeyI.js";import"./NeoHeadlineSecondary-B66F3LPf.js";import"./NeoHeadlineTertiary-D2VZDy6n.js";import"./NeoLinkButton-Bwi5xfnQ.js";import"./useButton-BSwY0W_p.js";import"./NeoIcon-X07-7rWn.js";const C=y.filter(e=>e!=="white"),c="Build faster with a complete set of accessible, production-ready Vue components that follow your design tokens automatically.",V={title:"Organisms/NeoTextBlock",component:a,tags:["autodocs"],argTypes:{heading:{control:"text",table:{category:"Content"},description:"Heading text for the block."},body:{control:"text",table:{category:"Content"},description:"Body copy rendered below the heading."},ctaText:{control:"text",table:{category:"Content"},description:"Label for the call-to-action link. Requires `ctaHref` to render."},ctaHref:{control:"text",table:{category:"Content"},description:"Destination URL for the call-to-action link. Requires `ctaText` to render."},headingVariant:{control:"select",options:b,description:"Size of the heading.",table:{category:"Appearance"}},headingTag:{control:"select",options:T,description:"HTML element for the heading.",table:{category:"Appearance"}},color:{control:"select",options:C,description:"Accent color applied to the heading and CTA.",table:{category:"Appearance"}},align:{control:"select",options:f,description:"Text alignment.",table:{category:"Appearance"}}},args:{heading:"Design systems made easy",body:c,headingVariant:"secondary"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},n={tags:["snapshot"],render:e=>s({name:"DefaultRender",setup(){return()=>t("div",{style:{maxInlineSize:"640px"}},[t(a,e,null)])}}),parameters:{docs:{source:{code:`<NeoTextBlock
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const W=["Default","WithCTA","Centered"];export{o as Centered,n as Default,r as WithCTA,W as __namedExportsOrder,V as default};
