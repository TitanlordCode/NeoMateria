import{d as L,c as e,a as o,F as N}from"./iframe-CoRvzhma.js";import{N as n}from"./NeoFooter-DstkXYXX.js";import{N as r}from"./NeoLink-CKvCmO_K.js";import{a as de}from"./argTypes-VnJZhiy7.js";import{c as ce}from"./colorShowcase-wsEEdQV9.js";import{c as me}from"./createA11yPlay-ByZeGIGl.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLinkGroup-Ba3fXC9J.js";import"./NeoHeadlineQuaternary-BO1LGZzL.js";import"./useHeadline-BZ0XyQbq.js";import"./axe-1dPYUaTP.js";const pe=["simple","multi-column","centered"],ue=[{title:"Product",links:[{text:"Features",href:"#features"},{text:"Pricing",href:"#pricing"},{text:"Documentation",href:"#docs"},{text:"Changelog",href:"#changelog"}]},{title:"Company",links:[{text:"About Us",href:"#about"},{text:"Blog",href:"#blog"},{text:"Careers",href:"#careers"},{text:"Contact",href:"#contact"}]},{title:"Resources",links:[{text:"Community",href:"#community"},{text:"Support",href:"#support"},{text:"API Reference",href:"#api"},{text:"Tutorials",href:"#tutorials"}]},{title:"Legal",links:[{text:"Privacy Policy",href:"#privacy"},{text:"Terms of Service",href:"#terms"},{text:"Cookie Policy",href:"#cookies"}]}],Se={title:"Organisms/NeoFooter",component:n,tags:["autodocs"],argTypes:{...de,color:{description:"Theme color for link hover/active states and accents.",table:{category:"Appearance"}},sections:{control:!1,description:"Array of link-group sections. Each section: `{ title: string, links: Array<{ text, href, external? }> }`.",table:{category:"Content"}},copyrightText:{control:"text",description:"Copyright line rendered at the bottom of the footer.",table:{category:"Content"}},layout:{control:"select",options:pe,description:"`multi-column`: sections displayed in a responsive grid. `simple`: single-row layout with sections collapsed. `centered`: all content centred horizontally.",table:{category:"Appearance"}},logo:{control:!1,description:"Brand logo displayed in the footer header area.",table:{category:"Slots"}},social:{control:!1,description:"Social media icons or links.",table:{category:"Slots"}},legal:{control:!1,description:"Legal links or text rendered at the bottom of the footer.",table:{category:"Slots"}}},args:{color:"blue",layout:"multi-column",sections:ue,copyrightText:"© 2026 NeoMateria. All rights reserved."}},a={tags:["snapshot"]},l={tags:["snapshot"],args:{layout:"simple"}},c={tags:["snapshot"],args:{layout:"centered"}},m={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
</NeoFooter>`}}},render:t=>L({name:"WithLogoRender",setup(){return()=>e(n,t,{logo:()=>e("div",{style:{fontSize:"24px",fontWeight:"bold",color:"var(--neo-theme-color)"}},[o("NeoMateria")])})}})},d={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>L({name:"WithSocialLinksRender",setup(){return()=>e(n,t,{social:()=>e(N,null,[e(r,{href:"#twitter",color:"blue",size:"medium"},{default:()=>[o("Twitter")]}),e(r,{href:"#github",color:"grey",size:"medium"},{default:()=>[o("GitHub")]}),e(r,{href:"#discord",color:"indigo",size:"medium"},{default:()=>[o("Discord")]})])})}})},p={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookies</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>L({name:"WithLegalLinksRender",setup(){return()=>e(n,t,{legal:()=>e(N,null,[e(r,{href:"#privacy",color:"grey",size:"small"},{default:()=>[o("Privacy")]}),e(r,{href:"#terms",color:"grey",size:"small"},{default:()=>[o("Terms")]}),e(r,{href:"#cookies",color:"grey",size:"small"},{default:()=>[o("Cookies")]})])})}})},u={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
    <NeoLink href="https://linkedin.com" color="blue" size="medium">LinkedIn</NeoLink>
  </template>
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy Policy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms of Service</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookie Policy</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>L({name:"CompleteRender",setup(){return()=>e(n,t,{logo:()=>e("div",{style:{fontSize:"24px",fontWeight:"bold",color:"var(--neo-theme-color)"}},[o("NeoMateria")]),social:()=>e(N,null,[e(r,{href:"#twitter",color:"blue",size:"medium"},{default:()=>[o("Twitter")]}),e(r,{href:"#github",color:"grey",size:"medium"},{default:()=>[o("GitHub")]}),e(r,{href:"#discord",color:"indigo",size:"medium"},{default:()=>[o("Discord")]}),e(r,{href:"#linkedin",color:"blue",size:"medium"},{default:()=>[o("LinkedIn")]})]),legal:()=>e(N,null,[e(r,{href:"#privacy",color:"grey",size:"small"},{default:()=>[o("Privacy Policy")]}),e(r,{href:"#terms",color:"grey",size:"small"},{default:()=>[o("Terms of Service")]}),e(r,{href:"#cookies",color:"grey",size:"small"},{default:()=>[o("Cookie Policy")]})])})}})},g={tags:["snapshot"],args:{sections:[],layout:"centered"}},h={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},f={tags:["snapshot"],globals:{direction:"rtl"},args:{copyrightText:"© 2026 نيوماتيريا. جميع الحقوق محفوظة."}},s={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]},a11y:{config:{rules:[{id:"landmark-no-duplicate-contentinfo",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:ce(n,["multi-column"])},i={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},a11y:{config:{rules:[{id:"landmark-no-duplicate-contentinfo",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:ce(n,["multi-column"],{dark:!0})},k={...s,tags:["!dev","test-only"],play:me()},y={...i,tags:["!dev","test-only"],play:me()};var b,v,z;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var x,C,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    layout: 'simple'
  }
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,w,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    layout: 'centered'
  }
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var P,T,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
</NeoFooter>\`
      }
    }
  },
  render: (args: NeoFooterProps) => {
    return defineComponent({
      name: 'WithLogoRender',
      setup() {
        return () => <NeoFooter {...args} v-slots={{
          logo: () => <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'var(--neo-theme-color)'
          }}>
                                    NeoMateria
                                </div>
        }} />;
      }
    });
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,W,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
  </template>
</NeoFooter>\`
      }
    }
  },
  render: (args: NeoFooterProps) => {
    return defineComponent({
      name: 'WithSocialLinksRender',
      setup() {
        return () => <NeoFooter {...args} v-slots={{
          social: () => <>
                                    <NeoLink href="#twitter" color="blue" size="medium">
                                        Twitter
                                    </NeoLink>
                                    <NeoLink href="#github" color="grey" size="medium">
                                        GitHub
                                    </NeoLink>
                                    <NeoLink href="#discord" color="indigo" size="medium">
                                        Discord
                                    </NeoLink>
                                </>
        }} />;
      }
    });
  }
}`,...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var O,G,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookies</NeoLink>
  </template>
</NeoFooter>\`
      }
    }
  },
  render: (args: NeoFooterProps) => {
    return defineComponent({
      name: 'WithLegalLinksRender',
      setup() {
        return () => <NeoFooter {...args} v-slots={{
          legal: () => <>
                                    <NeoLink href="#privacy" color="grey" size="small">
                                        Privacy
                                    </NeoLink>
                                    <NeoLink href="#terms" color="grey" size="small">
                                        Terms
                                    </NeoLink>
                                    <NeoLink href="#cookies" color="grey" size="small">
                                        Cookies
                                    </NeoLink>
                                </>
        }} />;
      }
    });
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,q,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
    <NeoLink href="https://linkedin.com" color="blue" size="medium">LinkedIn</NeoLink>
  </template>
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy Policy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms of Service</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookie Policy</NeoLink>
  </template>
</NeoFooter>\`
      }
    }
  },
  render: (args: NeoFooterProps) => {
    return defineComponent({
      name: 'CompleteRender',
      setup() {
        return () => <NeoFooter {...args} v-slots={{
          logo: () => <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'var(--neo-theme-color)'
          }}>
                                    NeoMateria
                                </div>,
          social: () => <>
                                    <NeoLink href="#twitter" color="blue" size="medium">
                                        Twitter
                                    </NeoLink>
                                    <NeoLink href="#github" color="grey" size="medium">
                                        GitHub
                                    </NeoLink>
                                    <NeoLink href="#discord" color="indigo" size="medium">
                                        Discord
                                    </NeoLink>
                                    <NeoLink href="#linkedin" color="blue" size="medium">
                                        LinkedIn
                                    </NeoLink>
                                </>,
          legal: () => <>
                                    <NeoLink href="#privacy" color="grey" size="small">
                                        Privacy Policy
                                    </NeoLink>
                                    <NeoLink href="#terms" color="grey" size="small">
                                        Terms of Service
                                    </NeoLink>
                                    <NeoLink href="#cookies" color="grey" size="small">
                                        Cookie Policy
                                    </NeoLink>
                                </>
        }} />;
      }
    });
  }
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var E,V,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    sections: [],
    layout: 'centered'
  }
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var U,j,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(J=(j=h.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    copyrightText: '© 2026 نيوماتيريا. جميع الحقوق محفوظة.'
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    a11y: {
      config: {
        rules: [{
          id: 'landmark-no-duplicate-contentinfo',
          enabled: false
        }, {
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: createSimpleColorShowcase(NeoFooter, ['multi-column'])
}`,...($=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,oe,re;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    a11y: {
      config: {
        rules: [{
          id: 'landmark-no-duplicate-contentinfo',
          enabled: false
        }, {
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: createSimpleColorShowcase(NeoFooter, ['multi-column'], {
    dark: true
  })
}`,...(re=(oe=i.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,ae,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(le=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ae=["Default","Simple","Centered","WithLogo","WithSocialLinks","WithLegalLinks","Complete","MinimalWithCopyright","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{s as AllColors,k as AllColorsA11y,i as AllColorsOnDark,y as AllColorsOnDarkA11y,c as Centered,u as Complete,a as Default,g as MinimalWithCopyright,h as OnDark,f as RTL,l as Simple,p as WithLegalLinks,m as WithLogo,d as WithSocialLinks,Ae as __namedExportsOrder,Se as default};
