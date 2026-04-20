import{d as oe,c as h,m as le}from"./iframe-Dknl-Izy.js";import{N as d}from"./NeoLinkGroup-CFguwtvJ.js";import{a as ie}from"./argTypes-VnJZhiy7.js";import{c as re}from"./colorShowcase-ukgIxckm.js";import{c as te}from"./createA11yPlay-C_PKokKa.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLink-BrDW50cM.js";import"./NeoHeadlineQuaternary-BJpsopCZ.js";import"./useHeadline-1j-ccmJX.js";import"./axe-Dc5bORdo.js";const ce=["small","medium","large"],pe=["vertical","horizontal"],ue=[{text:"Home",href:"/"},{text:"About",href:"/about"},{text:"Products",href:"/products",active:!0},{text:"Contact",href:"/contact"}],Ae={title:"Molecules/NeoLinkGroup",component:d,tags:["autodocs"],argTypes:{...ie,color:{description:"Theme color for link hover/active states.",table:{category:"Appearance"}},title:{control:"text",description:"Heading rendered above the links. When omitted, `ariaLabel` must be provided to label the nav landmark accessibly.",table:{category:"Content"}},links:{control:!1,description:"Array of link objects. Each link: `{ text, href, active?, external? }`.",table:{category:"Content"}},size:{control:"select",options:ce,description:"Controls font size and link spacing.",table:{category:"Appearance"}},variant:{control:"select",options:pe,description:"`vertical`: links are stacked in a column. `horizontal`: links are arranged in a row.",table:{category:"Appearance"}},default:{control:!1,description:"Additional content rendered after the link list (e.g. a description or CTA).",table:{category:"Slots"}}},args:{title:"Navigation",links:ue,color:"blue",size:"medium",variant:"vertical"}},t={tags:["snapshot"]},n={tags:["snapshot"],args:{title:void 0,ariaLabel:"Navigation"}},a={tags:["snapshot"],args:{variant:"horizontal"}},s={tags:["snapshot"],args:{size:"small"}},o={tags:["snapshot"],args:{size:"large"}},l={tags:["snapshot"],args:{title:"External Resources",links:[{text:"GitHub",href:"https://github.com",external:!0},{text:"Documentation",href:"https://docs.example.com",external:!0},{text:"Support",href:"https://support.example.com",external:!0}]}},i={tags:["no-test"],parameters:{docs:{source:{code:`<div style="display: flex; gap: 48px; flex-wrap: wrap;">
  <NeoLinkGroup
    title="Company"
    color="blue"
    size="small"
    :links="[
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Press', href: '/press' },
    ]"
  />
  <NeoLinkGroup
    title="Products"
    color="blue"
    size="small"
    :links="[
      { text: 'Features', href: '/features' },
      { text: 'Pricing', href: '/pricing' },
    ]"
  />
  <!-- repeat for more sections -->
</div>`}}},render:ne=>oe({name:"FooterExampleRender",setup(){const ae=[{title:"Company",links:[{text:"About Us",href:"/about"},{text:"Careers",href:"/careers"},{text:"Press",href:"/press"}]},{title:"Products",links:[{text:"Features",href:"/features"},{text:"Pricing",href:"/pricing"},{text:"Enterprise",href:"/enterprise"}]},{title:"Resources",links:[{text:"Documentation",href:"/docs"},{text:"Blog",href:"/blog"},{text:"Community",href:"/community"}]},{title:"Legal",links:[{text:"Privacy Policy",href:"/privacy"},{text:"Terms of Service",href:"/terms"},{text:"Cookie Policy",href:"/cookies"}]}];return()=>h("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"}},[ae.map((g,se)=>h(d,le({key:se},ne,{title:g.title,links:g.links,size:"small"}),null))])}})},c={tags:["snapshot"],globals:{backgrounds:"#000"}},p={tags:["snapshot"],globals:{direction:"rtl"},args:{title:"التنقل"}},e={tags:["snapshot"],parameters:{a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:re(d,["vertical","horizontal"])},r={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:re(d,["vertical","horizontal"],{dark:!0})},u={...e,tags:["!dev","test-only"],play:te()},m={...r,tags:["!dev","test-only"],play:te()};var f,x,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,b,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    title: undefined,
    ariaLabel: 'Navigation'
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,A,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'horizontal'
  }
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var z,P,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(L=(P=s.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,G,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(D=(G=o.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var E,w,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    title: 'External Resources',
    links: [{
      text: 'GitHub',
      href: 'https://github.com',
      external: true
    }, {
      text: 'Documentation',
      href: 'https://docs.example.com',
      external: true
    }, {
      text: 'Support',
      href: 'https://support.example.com',
      external: true
    }]
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var F,O,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; gap: 48px; flex-wrap: wrap;">
  <NeoLinkGroup
    title="Company"
    color="blue"
    size="small"
    :links="[
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Press', href: '/press' },
    ]"
  />
  <NeoLinkGroup
    title="Products"
    color="blue"
    size="small"
    :links="[
      { text: 'Features', href: '/features' },
      { text: 'Pricing', href: '/pricing' },
    ]"
  />
  <!-- repeat for more sections -->
</div>\`
      }
    }
  },
  render: (args: NeoLinkGroupProps) => {
    return defineComponent({
      name: 'FooterExampleRender',
      setup() {
        const sections = [{
          title: 'Company',
          links: [{
            text: 'About Us',
            href: '/about'
          }, {
            text: 'Careers',
            href: '/careers'
          }, {
            text: 'Press',
            href: '/press'
          }]
        }, {
          title: 'Products',
          links: [{
            text: 'Features',
            href: '/features'
          }, {
            text: 'Pricing',
            href: '/pricing'
          }, {
            text: 'Enterprise',
            href: '/enterprise'
          }]
        }, {
          title: 'Resources',
          links: [{
            text: 'Documentation',
            href: '/docs'
          }, {
            text: 'Blog',
            href: '/blog'
          }, {
            text: 'Community',
            href: '/community'
          }]
        }, {
          title: 'Legal',
          links: [{
            text: 'Privacy Policy',
            href: '/privacy'
          }, {
            text: 'Terms of Service',
            href: '/terms'
          }, {
            text: 'Cookie Policy',
            href: '/cookies'
          }]
        }];
        return () => <div style={{
          display: 'flex',
          gap: '48px',
          flexWrap: 'wrap'
        }}>
                        {sections.map((section, index) => <NeoLinkGroup key={index} {...args} title={section.title} links={section.links} size="small" />)}
                    </div>;
      }
    });
  }
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,H,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var U,B,V;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    title: 'التنقل'
  }
}`,...(V=(B=p.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var _,j,M;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: createSimpleColorShowcase(NeoLinkGroup, ['vertical', 'horizontal'])
}`,...(M=(j=e.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var I,J,K;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: createSimpleColorShowcase(NeoLinkGroup, ['vertical', 'horizontal'], {
    dark: true
  })
}`,...(K=(J=r.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Se=["Default","WithoutTitle","Horizontal","Small","Large","WithExternalLinks","FooterExample","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{e as AllColors,u as AllColorsA11y,r as AllColorsOnDark,m as AllColorsOnDarkA11y,t as Default,i as FooterExample,a as Horizontal,o as Large,c as OnDark,p as RTL,s as Small,l as WithExternalLinks,n as WithoutTitle,Se as __namedExportsOrder,Ae as default};
