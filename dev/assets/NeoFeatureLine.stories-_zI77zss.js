import{d as v,c as e}from"./iframe-BjTGyj3F.js";import{p as c}from"./placeholder-CgeahcyT.js";import{N as s}from"./NeoFeatureLine-Dpf4b90p.js";import{a as C}from"./NeoHeadlineTypes-CVOcXnNm.js";import{h as N}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-D8c7hkFD.js";import"./NeoHeadingGroup-B_yPpZ_O.js";import"./NeoHeadlinePrimary-kNxgF46f.js";import"./useHeadline-DIWqBAI3.js";import"./NeoHeadlineSecondary-Bq6djaQA.js";import"./NeoHeadlineTertiary-BSM-xy12.js";import"./NeoLinkButton-DF4XbVk5.js";import"./useButton-D374LcAS.js";import"./NeoIcon-CmwF3HhE.js";import"./NeoSection-BmohoiVW.js";const T=["4/3","16/9","1/1"],j={title:"Organisms/NeoFeatureLine",component:s,tags:["autodocs"],argTypes:{imageSrc:{control:"text",table:{category:"Content"}},imageAlt:{control:"text",table:{category:"Content"}},title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},body:{control:"text",table:{category:"Content"}},ctaText:{control:"text",table:{category:"Content"}},ctaHref:{control:"text",table:{category:"Content"}},reverse:{control:"boolean",description:"Swaps image and content order at `bp-md` and above.",table:{category:"Layout"}},imageRatio:{control:"select",options:T,description:"Aspect ratio of the image.",table:{category:"Layout"}},headingVariant:{control:"select",options:N,description:"Controls the headline size.",table:{category:"Appearance"}},headingTag:{control:"select",options:C,description:"HTML element for the heading.",table:{category:"Appearance"}},color:{description:"Accent color applied to the heading and CTA.",table:{category:"Appearance"}}},args:{imageSrc:"https://picsum.photos/seed/featureline/800/600",imageAlt:"Feature image",title:"Build better products faster",subtitle:"A modern design system for Vue 3",body:"NeoMateria gives your team a shared visual language and a complete set of accessible, production-ready components.",color:"blue"}},t={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  subtitle="A modern design system for Vue 3"
  body="NeoMateria gives your team..."
  color="blue"
/>`}}}},r={tags:["snapshot"],args:{reverse:!0,color:"purple"},parameters:{docs:{source:{code:`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  color="purple"
  reverse
/>`}}}},o={tags:["snapshot"],args:{color:"blue",ctaText:"Get started",ctaHref:"#"}},a={tags:["snapshot"],render:()=>v({name:"StackedRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"80px",padding:"24px"}},[e(s,{imageSrc:c(800,600),imageAlt:"Feature 1",title:"Accessible by default",body:"Every component is built with WCAG 2.1 AA compliance in mind, tested with automated tooling and screen readers.",color:"blue",ctaText:"Learn more",ctaHref:"#"},null),e(s,{imageSrc:c(800,600),imageAlt:"Feature 2",title:"Fully themed",body:"One color prop propagates through the entire component tree via CSS custom properties.",color:"purple",ctaText:"See the tokens",ctaHref:"#",reverse:!0},null),e(s,{imageSrc:c(800,600),imageAlt:"Feature 3",title:"Zero dependencies",body:"No runtime dependencies beyond Vue 3. Ship less, load faster.",color:"green",ctaText:"Browse components",ctaHref:"#"},null)])}})},n={tags:["snapshot"],args:{section:{fullWidth:!0}}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    reverse: true,
    color: 'purple'
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
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    ctaText: 'Get started',
    ctaHref: '#'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,f,A;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: () => {
    return defineComponent({
      name: 'StackedRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          padding: '24px'
        }}>
                        <NeoFeatureLine imageSrc={placeholder(800, 600)} imageAlt="Feature 1" title="Accessible by default" body="Every component is built with WCAG 2.1 AA compliance in mind, tested with automated tooling and screen readers." color="blue" ctaText="Learn more" ctaHref="#" />
                        <NeoFeatureLine imageSrc={placeholder(800, 600)} imageAlt="Feature 2" title="Fully themed" body="One color prop propagates through the entire component tree via CSS custom properties." color="purple" ctaText="See the tokens" ctaHref="#" reverse />
                        <NeoFeatureLine imageSrc={placeholder(800, 600)} imageAlt="Feature 3" title="Zero dependencies" body="No runtime dependencies beyond Vue 3. Ship less, load faster." color="green" ctaText="Browse components" ctaHref="#" />
                    </div>;
      }
    });
  }
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var x,S,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    section: {
      fullWidth: true
    }
  }
}`,...(F=(S=n.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const q=["Default","Reversed","WithCTA","Stacked","FullWidth"];export{t as Default,n as FullWidth,r as Reversed,a as Stacked,o as WithCTA,q as __namedExportsOrder,j as default};
