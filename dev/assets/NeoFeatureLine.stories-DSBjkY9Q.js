import{d as i,c as e}from"./iframe-Dknl-Izy.js";import{p as c}from"./placeholder-CgeahcyT.js";import{N as t}from"./NeoFeatureLine-CH2pG_nL.js";import{a as v}from"./NeoHeadlineTypes-CVOcXnNm.js";import{h as A}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-BszgdnEf.js";import"./NeoHeadingGroup-DffIbyCE.js";import"./NeoHeadlinePrimary-8Q_eNYdd.js";import"./useHeadline-1j-ccmJX.js";import"./NeoHeadlineSecondary-CgEKEcRo.js";import"./NeoHeadlineTertiary-CG-lYoD4.js";import"./NeoLinkButton-CyV9BOG2.js";import"./useButton-D17qNuey.js";import"./NeoIcon-OOi-7FOf.js";const F=["4/3","16/9","1/1"],O={title:"Organisms/NeoFeatureLine",component:t,tags:["autodocs"],argTypes:{imageSrc:{control:"text",table:{category:"Content"}},imageAlt:{control:"text",table:{category:"Content"}},title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},body:{control:"text",table:{category:"Content"}},ctaText:{control:"text",table:{category:"Content"}},ctaHref:{control:"text",table:{category:"Content"}},reverse:{control:"boolean",description:"Swaps image and content order at `bp-md` and above.",table:{category:"Layout"}},imageRatio:{control:"select",options:F,description:"Aspect ratio of the image.",table:{category:"Layout"}},headingVariant:{control:"select",options:A,description:"Controls the headline size.",table:{category:"Appearance"}},headingTag:{control:"select",options:v,description:"HTML element for the heading.",table:{category:"Appearance"}},color:{description:"Accent color applied to the heading and CTA.",table:{category:"Appearance"}}},args:{imageSrc:"https://picsum.photos/seed/featureline/800/600",imageAlt:"Feature image",title:"Build better products faster",subtitle:"A modern design system for Vue 3",body:"NeoMateria gives your team a shared visual language and a complete set of accessible, production-ready components.",color:"blue"}},n={tags:["snapshot"],render:r=>i({name:"DefaultRender",setup(){return()=>e("div",{style:{maxInlineSize:"960px",padding:"24px"}},[e(t,r,null)])}}),parameters:{docs:{source:{code:`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  subtitle="A modern design system for Vue 3"
  body="NeoMateria gives your team..."
  color="blue"
/>`}}}},a={tags:["snapshot"],args:{reverse:!0,color:"purple"},render:r=>i({name:"ReversedRender",setup(){return()=>e("div",{style:{maxInlineSize:"960px",padding:"24px"}},[e(t,r,null)])}}),parameters:{docs:{source:{code:`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  color="purple"
  reverse
/>`}}}},o={tags:["snapshot"],args:{color:"blue",ctaText:"Get started",ctaHref:"#"},render:r=>i({name:"WithCTARender",setup(){return()=>e("div",{style:{maxInlineSize:"960px",padding:"24px"}},[e(t,r,null)])}})},s={tags:["snapshot"],render:()=>i({name:"StackedRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"80px",maxInlineSize:"960px",padding:"24px"}},[e(t,{imageSrc:c(800,600),imageAlt:"Feature 1",title:"Accessible by default",body:"Every component is built with WCAG 2.1 AA compliance in mind, tested with automated tooling and screen readers.",color:"blue",ctaText:"Learn more",ctaHref:"#"},null),e(t,{imageSrc:c(800,600),imageAlt:"Feature 2",title:"Fully themed",body:"One color prop propagates through the entire component tree via CSS custom properties.",color:"purple",ctaText:"See the tokens",ctaHref:"#",reverse:!0},null),e(t,{imageSrc:c(800,600),imageAlt:"Feature 3",title:"Zero dependencies",body:"No runtime dependencies beyond Vue 3. Ship less, load faster.",color:"green",ctaText:"Browse components",ctaHref:"#"},null)])}})};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoFeatureLineProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          maxInlineSize: '960px',
          padding: '24px'
        }}>
                        <NeoFeatureLine {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  subtitle="A modern design system for Vue 3"
  body="NeoMateria gives your team..."
  color="blue"
/>\`
      }
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    reverse: true,
    color: 'purple'
  },
  render: (args: NeoFeatureLineProps) => {
    return defineComponent({
      name: 'ReversedRender',
      setup() {
        return () => <div style={{
          maxInlineSize: '960px',
          padding: '24px'
        }}>
                        <NeoFeatureLine {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  color="purple"
  reverse
/>\`
      }
    }
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,y,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    ctaText: 'Get started',
    ctaHref: '#'
  },
  render: (args: NeoFeatureLineProps) => {
    return defineComponent({
      name: 'WithCTARender',
      setup() {
        return () => <div style={{
          maxInlineSize: '960px',
          padding: '24px'
        }}>
                        <NeoFeatureLine {...args} />
                    </div>;
      }
    });
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,f,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: () => {
    return defineComponent({
      name: 'StackedRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          maxInlineSize: '960px',
          padding: '24px'
        }}>
                        <NeoFeatureLine imageSrc={placeholder(800, 600)} imageAlt="Feature 1" title="Accessible by default" body="Every component is built with WCAG 2.1 AA compliance in mind, tested with automated tooling and screen readers." color="blue" ctaText="Learn more" ctaHref="#" />
                        <NeoFeatureLine imageSrc={placeholder(800, 600)} imageAlt="Feature 2" title="Fully themed" body="One color prop propagates through the entire component tree via CSS custom properties." color="purple" ctaText="See the tokens" ctaHref="#" reverse />
                        <NeoFeatureLine imageSrc={placeholder(800, 600)} imageAlt="Feature 3" title="Zero dependencies" body="No runtime dependencies beyond Vue 3. Ship less, load faster." color="green" ctaText="Browse components" ctaHref="#" />
                    </div>;
      }
    });
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const E=["Default","Reversed","WithCTA","Stacked"];export{n as Default,a as Reversed,s as Stacked,o as WithCTA,E as __namedExportsOrder,O as default};
