import{d as b,c as e,a as o,F as L}from"./iframe-D9nyRK5o.js";import{N as n}from"./NeoFooter-vibwBzxb.js";import{N as r}from"./NeoLink-D3-_A2js.js";import{a as ke}from"./argTypes-VnJZhiy7.js";import{c as he}from"./colorShowcase-CPaxLojg.js";import{c as fe}from"./createA11yPlay-CpEQ4bEB.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLinkGroup-DoFqSOaa.js";import"./NeoHeadlineQuaternary-Dpu8VyZq.js";import"./useHeadline-C_Gbmvfw.js";import"./axe-zbpV6D8O.js";const ye=["simple","multi-column","centered"],Ne=[{title:"Product",links:[{text:"Features",href:"#features"},{text:"Pricing",href:"#pricing"},{text:"Documentation",href:"#docs"},{text:"Changelog",href:"#changelog"}]},{title:"Company",links:[{text:"About Us",href:"#about"},{text:"Blog",href:"#blog"},{text:"Careers",href:"#careers"},{text:"Contact",href:"#contact"}]},{title:"Resources",links:[{text:"Community",href:"#community"},{text:"Support",href:"#support"},{text:"API Reference",href:"#api"},{text:"Tutorials",href:"#tutorials"}]},{title:"Legal",links:[{text:"Privacy Policy",href:"#privacy"},{text:"Terms of Service",href:"#terms"},{text:"Cookie Policy",href:"#cookies"}]}],De={title:"Organisms/NeoFooter",component:n,tags:["autodocs"],argTypes:{...ke,color:{description:"Theme color for link hover/active states and accents.",table:{category:"Appearance"}},sections:{control:!1,description:"Array of link-group sections. Each section: `{ title: string, links: Array<{ text, href, external? }> }`.",table:{category:"Content"}},copyrightText:{control:"text",description:"Copyright line rendered at the bottom of the footer.",table:{category:"Content"}},layout:{control:"select",options:ye,description:"`multi-column`: sections displayed in a responsive grid. `simple`: single-row layout with sections collapsed. `centered`: column group centred horizontally; column titles and link items centre-aligned within each column, body text stays left-aligned (no `text-align` cascade).",table:{category:"Appearance"}},logo:{control:!1,description:"Brand logo displayed in the footer header area.",table:{category:"Slots"}},social:{control:!1,description:"Social media icons or links.",table:{category:"Slots"}},legal:{control:!1,description:"Legal links or text rendered at the bottom of the footer.",table:{category:"Slots"}}},args:{color:"blue",layout:"multi-column",sections:Ne,copyrightText:"© 2026 NeoMateria. All rights reserved."}},l={tags:["snapshot"]},c={tags:["snapshot"],args:{layout:"simple"}},m={tags:["snapshot"],args:{layout:"centered"}},d={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
</NeoFooter>`}}},render:t=>b({name:"WithLogoRender",setup(){return()=>e(n,t,{logo:()=>e("div",{style:{fontSize:"24px",fontWeight:"bold",color:"var(--neo-theme-color)"}},[o("NeoMateria")])})}})},p={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>b({name:"WithSocialLinksRender",setup(){return()=>e(n,t,{social:()=>e(L,null,[e(r,{href:"#twitter",color:"blue",size:"medium"},{default:()=>[o("Twitter")]}),e(r,{href:"#github",color:"grey",size:"medium"},{default:()=>[o("GitHub")]}),e(r,{href:"#discord",color:"indigo",size:"medium"},{default:()=>[o("Discord")]})])})}})},u={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookies</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>b({name:"WithLegalLinksRender",setup(){return()=>e(n,t,{legal:()=>e(L,null,[e(r,{href:"#privacy",color:"grey",size:"small"},{default:()=>[o("Privacy")]}),e(r,{href:"#terms",color:"grey",size:"small"},{default:()=>[o("Terms")]}),e(r,{href:"#cookies",color:"grey",size:"small"},{default:()=>[o("Cookies")]})])})}})},g={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
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
</NeoFooter>`}}},render:t=>b({name:"CompleteRender",setup(){return()=>e(n,t,{logo:()=>e("div",{style:{fontSize:"24px",fontWeight:"bold",color:"var(--neo-theme-color)"}},[o("NeoMateria")]),social:()=>e(L,null,[e(r,{href:"#twitter",color:"blue",size:"medium"},{default:()=>[o("Twitter")]}),e(r,{href:"#github",color:"grey",size:"medium"},{default:()=>[o("GitHub")]}),e(r,{href:"#discord",color:"indigo",size:"medium"},{default:()=>[o("Discord")]}),e(r,{href:"#linkedin",color:"blue",size:"medium"},{default:()=>[o("LinkedIn")]})]),legal:()=>e(L,null,[e(r,{href:"#privacy",color:"grey",size:"small"},{default:()=>[o("Privacy Policy")]}),e(r,{href:"#terms",color:"grey",size:"small"},{default:()=>[o("Terms of Service")]}),e(r,{href:"#cookies",color:"grey",size:"small"},{default:()=>[o("Cookie Policy")]})])})}})},h={tags:["snapshot"],args:{sections:[],layout:"centered"}},s={tags:["snapshot"],args:{sections:[],copyrightText:void 0}},f={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},k={tags:["snapshot"],globals:{direction:"rtl"},args:{copyrightText:"© 2026 نيوماتيريا. جميع الحقوق محفوظة."}},i={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]},a11y:{config:{rules:[{id:"landmark-no-duplicate-contentinfo",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:he(n,["multi-column"])},a={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},a11y:{config:{rules:[{id:"landmark-no-duplicate-contentinfo",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:he(n,["multi-column"],{dark:!0})},y={...i,tags:["!dev","test-only"],play:fe()},N={...a,tags:["!dev","test-only"],play:fe()};var v,z,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(x=(z=l.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var S,C,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    layout: 'simple'
  }
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var w,F,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    layout: 'centered'
  }
}`,...(T=(F=m.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var P,D,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var W,R,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var G,H,I;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var q,B,E;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(B=g.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var V,_,U;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    sections: [],
    layout: 'centered'
  }
}`,...(U=(_=h.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var j,J,K,Q,X;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    sections: [],
    copyrightText: undefined
  }
}`,...(K=(J=s.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Visualises the CLS-reservation: no sections, no copyright, no slots.\nThe footer still occupies its `--NeoFooter-sizing-minBlockSize` reservation\n(600/480/400/360 px from mobile → ≥1024px) so consumer pages don't shift when\nasync footer content paints in. Consumers with intentionally shorter footers\nshould override `--NeoFooter-sizing-minBlockSize`.",...(X=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,oe,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    copyrightText: '© 2026 نيوماتيريا. جميع الحقوق محفوظة.'
  }
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,se;i.parameters={...i.parameters,docs:{...(te=i.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ne=i.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,ae,le;a.parameters={...a.parameters,docs:{...(ie=a.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ae=a.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ce,me,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(de=(me=y.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ue,ge;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ge=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const Me=["Default","Simple","Centered","WithLogo","WithSocialLinks","WithLegalLinks","Complete","MinimalWithCopyright","EmptySkeleton","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{i as AllColors,y as AllColorsA11y,a as AllColorsOnDark,N as AllColorsOnDarkA11y,m as Centered,g as Complete,l as Default,s as EmptySkeleton,h as MinimalWithCopyright,f as OnDark,k as RTL,c as Simple,u as WithLegalLinks,d as WithLogo,p as WithSocialLinks,Me as __namedExportsOrder,De as default};
