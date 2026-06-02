import{d as F,c as e}from"./iframe-D9nyRK5o.js";import{p as i}from"./placeholder-CgeahcyT.js";import{N as s}from"./NeoFeatureLine-C5WmigLh.js";import{a as N}from"./NeoHeadlineTypes-CVOcXnNm.js";import{h as L}from"./NeoHeadingGroupTypes-C1ovxeqr.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-B94pmqTU.js";import"./NeoHeadingGroup-BOllt7FY.js";import"./NeoHeadlinePrimary-5HFmFRaT.js";import"./useHeadline-C_Gbmvfw.js";import"./NeoHeadlineSecondary-D8JvCPnR.js";import"./NeoHeadlineTertiary-BZG9UMLt.js";import"./NeoLinkButton-Dv3_9T9z.js";import"./useButton-B-Bpk_ne.js";import"./NeoIcon-Cexy51PO.js";import"./NeoSection-YNQBYy8I.js";const T=["4/3","16/9","1/1"],_={title:"Organisms/NeoFeatureLine",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"\nA media-and-text row organism for feature sections. Image sits on one side, heading group + body + CTA on the other; the `reverse` prop flips the order at `bp-md` and above.\n\nThis component wraps itself in a `NeoSection`. If you place it **inside another `NeoSection`**, it auto-detects the ancestor and skips its own wrapper — so you never get a doubled section. To force-skip the wrapper in any other container, set `no-section`.\n                "}}},argTypes:{imageSrc:{control:"text",table:{category:"Content"},description:"Source URL of the feature image."},imageAlt:{control:"text",table:{category:"Content"},description:"Alt text for the feature image."},title:{control:"text",table:{category:"Content"},description:"Heading text for the feature line."},subtitle:{control:"text",table:{category:"Content"},description:"Overline/eyebrow text shown above the title."},body:{control:"text",table:{category:"Content"},description:"Body copy describing the feature."},ctaText:{control:"text",table:{category:"Content"},description:"Label for the call-to-action link. Requires `ctaHref` to render."},ctaHref:{control:"text",table:{category:"Content"},description:"Destination URL for the call-to-action link. Requires `ctaText` to render."},reverse:{control:"boolean",description:"Swaps image and content order at `bp-md` and above.",table:{category:"Layout"}},imageRatio:{control:"select",options:T,description:"Aspect ratio of the image.",table:{category:"Layout"}},headingVariant:{control:"select",options:L,description:"Controls the headline size.",table:{category:"Appearance"}},headingTag:{control:"select",options:N,description:"HTML element for the heading.",table:{category:"Appearance"}},color:{description:"Accent color applied to the heading and CTA.",table:{category:"Appearance"}},section:{control:!1,description:"Props forwarded to the internal `NeoSection` wrapper (e.g. `fullWidth`).",table:{category:"Layout"}},noSection:{control:"boolean",description:"Force-skip the internal `NeoSection` wrapper. A `NeoSection` ancestor is auto-detected and skipped already; use this to opt out inside non-`NeoSection` containers.",table:{category:"Layout"}}},args:{imageSrc:"https://picsum.photos/seed/featureline/800/600",imageAlt:"Feature image",title:"Build better products faster",subtitle:"A modern design system for Vue 3",body:"NeoMateria gives your team a shared visual language and a complete set of accessible, production-ready components.",color:"blue"}},t={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  subtitle="A modern design system for Vue 3"
  body="NeoMateria gives your team..."
  color="blue"
/>`}}}},o={tags:["snapshot"],args:{reverse:!0,color:"purple"},parameters:{docs:{source:{code:`<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  color="purple"
  reverse
/>`}}}},r={tags:["snapshot"],args:{color:"blue",ctaText:"Get started",ctaHref:"#"}},a={tags:["snapshot"],render:()=>F({name:"StackedRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"80px",padding:"24px"}},[e(s,{imageSrc:i(800,600),imageAlt:"Feature 1",title:"Accessible by default",body:"Every component is built with WCAG 2.1 AA compliance in mind, tested with automated tooling and screen readers.",color:"blue",ctaText:"Learn more",ctaHref:"#"},null),e(s,{imageSrc:i(800,600),imageAlt:"Feature 2",title:"Fully themed",body:"One color prop propagates through the entire component tree via CSS custom properties.",color:"purple",ctaText:"See the tokens",ctaHref:"#",reverse:!0},null),e(s,{imageSrc:i(800,600),imageAlt:"Feature 3",title:"Zero dependencies",body:"No runtime dependencies beyond Vue 3. Ship less, load faster.",color:"green",ctaText:"Browse components",ctaHref:"#"},null)])}})},n={tags:["snapshot"],args:{section:{fullWidth:!0}}};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    ctaText: 'Get started',
    ctaHref: '#'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,y,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,A,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    section: {
      fullWidth: true
    }
  }
}`,...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const z=["Default","Reversed","WithCTA","Stacked","FullWidth"];export{t as Default,n as FullWidth,o as Reversed,a as Stacked,r as WithCTA,z as __namedExportsOrder,_ as default};
