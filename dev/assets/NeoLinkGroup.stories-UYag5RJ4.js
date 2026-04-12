import{d as J,c as m,m as K}from"./iframe-BBbPLObx.js";import{N as p}from"./NeoLinkGroup-DW967dsp.js";import{a as Q}from"./argTypes-VnJZhiy7.js";import{c as _}from"./colorShowcase-CVTHfhfV.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLink-Crcw9R3O.js";import"./NeoHeadlineQuaternary-BIlxhCZk.js";import"./useHeadline-pIEPZDoK.js";const X=["small","medium","large"],Y=["vertical","horizontal"],Z=[{text:"Home",href:"/"},{text:"About",href:"/about"},{text:"Products",href:"/products",active:!0},{text:"Contact",href:"/contact"}],le={title:"Molecules/NeoLinkGroup",component:p,tags:["autodocs"],argTypes:{...Q,color:{description:"Theme color for link hover/active states.",table:{category:"Appearance"}},title:{control:"text",description:"Heading rendered above the links. When omitted, `ariaLabel` must be provided to label the nav landmark accessibly.",table:{category:"Content"}},links:{control:!1,description:"Array of link objects. Each link: `{ text, href, active?, external? }`.",table:{category:"Content"}},size:{control:"select",options:X,description:"Controls font size and link spacing.",table:{category:"Appearance"}},variant:{control:"select",options:Y,description:"`vertical`: links are stacked in a column. `horizontal`: links are arranged in a row.",table:{category:"Appearance"}}},args:{title:"Navigation",links:Z,color:"blue",size:"medium",variant:"vertical"}},e={},r={args:{title:void 0,ariaLabel:"Navigation"}},t={args:{variant:"horizontal"}},n={args:{size:"small"}},a={args:{size:"large"}},o={args:{title:"External Resources",links:[{text:"GitHub",href:"https://github.com",external:!0},{text:"Documentation",href:"https://docs.example.com",external:!0},{text:"Support",href:"https://support.example.com",external:!0}]}},s={parameters:{docs:{source:{code:`<div style="display: flex; gap: 48px; flex-wrap: wrap;">
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
</div>`}}},render:j=>J({name:"FooterExampleRender",setup(){const M=[{title:"Company",links:[{text:"About Us",href:"/about"},{text:"Careers",href:"/careers"},{text:"Press",href:"/press"}]},{title:"Products",links:[{text:"Features",href:"/features"},{text:"Pricing",href:"/pricing"},{text:"Enterprise",href:"/enterprise"}]},{title:"Resources",links:[{text:"Documentation",href:"/docs"},{text:"Blog",href:"/blog"},{text:"Community",href:"/community"}]},{title:"Legal",links:[{text:"Privacy Policy",href:"/privacy"},{text:"Terms of Service",href:"/terms"},{text:"Cookie Policy",href:"/cookies"}]}];return()=>m("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"}},[M.map((u,I)=>m(p,K({key:I},j,{title:u.title,links:u.links,size:"small"}),null))])}})},i={globals:{backgrounds:"#000"}},l={parameters:{a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:_(p,["vertical","horizontal"])},c={globals:{backgrounds:"#000"},parameters:{a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:_(p,["vertical","horizontal"],{dark:!0})};var d,f,x;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,h,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: undefined,
    ariaLabel: 'Navigation'
  }
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'horizontal'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,z,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var L,P,N;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(N=(P=a.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var A,G,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(G=o.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var w,D,F;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var T,W,H;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var R,O,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var U,B,V;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(B=c.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const ce=["Default","WithoutTitle","Horizontal","Small","Large","WithExternalLinks","FooterExample","OnDark","AllColors","AllColorsOnDark"];export{l as AllColors,c as AllColorsOnDark,e as Default,s as FooterExample,t as Horizontal,a as Large,i as OnDark,n as Small,o as WithExternalLinks,r as WithoutTitle,ce as __namedExportsOrder,le as default};
