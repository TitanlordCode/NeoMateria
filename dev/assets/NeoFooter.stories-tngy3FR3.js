import{d as k,c as e,a as o,F as f}from"./iframe-Da9xFhCi.js";import{N as n}from"./NeoFooter-2ldtvRZg.js";import{N as r}from"./NeoLink-Ecla2uS2.js";import{a as Z}from"./argTypes-VnJZhiy7.js";import{c as Y}from"./colorShowcase-kwizdZpn.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLinkGroup-DQhOnzcM.js";import"./NeoHeadlineQuaternary-CbTuNACG.js";import"./useHeadline-CGFwQ-av.js";const $=["simple","multi-column","centered"],ee=[{title:"Product",links:[{text:"Features",href:"#features"},{text:"Pricing",href:"#pricing"},{text:"Documentation",href:"#docs"},{text:"Changelog",href:"#changelog"}]},{title:"Company",links:[{text:"About Us",href:"#about"},{text:"Blog",href:"#blog"},{text:"Careers",href:"#careers"},{text:"Contact",href:"#contact"}]},{title:"Resources",links:[{text:"Community",href:"#community"},{text:"Support",href:"#support"},{text:"API Reference",href:"#api"},{text:"Tutorials",href:"#tutorials"}]},{title:"Legal",links:[{text:"Privacy Policy",href:"#privacy"},{text:"Terms of Service",href:"#terms"},{text:"Cookie Policy",href:"#cookies"}]}],de={title:"Organisms/NeoFooter",component:n,tags:["autodocs"],argTypes:{...Z,color:{description:"Theme color for link hover/active states and accents.",table:{category:"Appearance"}},sections:{control:!1,description:"Array of link-group sections. Each section: `{ title: string, links: Array<{ text, href, external? }> }`.",table:{category:"Content"}},copyrightText:{control:"text",description:"Copyright line rendered at the bottom of the footer.",table:{category:"Content"}},layout:{control:"select",options:$,description:"`multi-column`: sections displayed in a responsive grid. `simple`: single-row layout with sections collapsed. `centered`: all content centred horizontally.",table:{category:"Appearance"}}},args:{color:"blue",layout:"multi-column",sections:ee,copyrightText:"© 2026 NeoMateria. All rights reserved."}},i={},s={args:{layout:"simple"}},a={args:{layout:"centered"}},l={parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
</NeoFooter>`}}},render:t=>k({name:"WithLogoRender",setup(){return()=>e(n,t,{logo:()=>e("div",{style:{fontSize:"24px",fontWeight:"bold",color:"var(--neo-theme-color)"}},[o("NeoMateria")])})}})},c={parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>k({name:"WithSocialLinksRender",setup(){return()=>e(n,t,{social:()=>e(f,null,[e(r,{href:"#twitter",color:"blue",size:"medium"},{default:()=>[o("Twitter")]}),e(r,{href:"#github",color:"grey",size:"medium"},{default:()=>[o("GitHub")]}),e(r,{href:"#discord",color:"indigo",size:"medium"},{default:()=>[o("Discord")]})])})}})},m={parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookies</NeoLink>
  </template>
</NeoFooter>`}}},render:t=>k({name:"WithLegalLinksRender",setup(){return()=>e(n,t,{legal:()=>e(f,null,[e(r,{href:"#privacy",color:"grey",size:"small"},{default:()=>[o("Privacy")]}),e(r,{href:"#terms",color:"grey",size:"small"},{default:()=>[o("Terms")]}),e(r,{href:"#cookies",color:"grey",size:"small"},{default:()=>[o("Cookies")]})])})}})},d={parameters:{docs:{source:{code:`<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
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
</NeoFooter>`}}},render:t=>k({name:"CompleteRender",setup(){return()=>e(n,t,{logo:()=>e("div",{style:{fontSize:"24px",fontWeight:"bold",color:"var(--neo-theme-color)"}},[o("NeoMateria")]),social:()=>e(f,null,[e(r,{href:"#twitter",color:"blue",size:"medium"},{default:()=>[o("Twitter")]}),e(r,{href:"#github",color:"grey",size:"medium"},{default:()=>[o("GitHub")]}),e(r,{href:"#discord",color:"indigo",size:"medium"},{default:()=>[o("Discord")]}),e(r,{href:"#linkedin",color:"blue",size:"medium"},{default:()=>[o("LinkedIn")]})]),legal:()=>e(f,null,[e(r,{href:"#privacy",color:"grey",size:"small"},{default:()=>[o("Privacy Policy")]}),e(r,{href:"#terms",color:"grey",size:"small"},{default:()=>[o("Terms of Service")]}),e(r,{href:"#cookies",color:"grey",size:"small"},{default:()=>[o("Cookie Policy")]})])})}})},u={args:{sections:[],layout:"centered"}},p={globals:{backgrounds:"#000"}},g={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-contentinfo",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:Y(n,["multi-column"])},h={globals:{backgrounds:"#000"},parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-contentinfo",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:Y(n,["multi-column"],{dark:!0})};var N,y,L;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var b,z,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    layout: 'simple'
  }
}`,...(v=(z=s.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var x,C,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    layout: 'centered'
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var F,P,w;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var T,M,W;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var A,D,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var G,H,O;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var I,q,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    sections: [],
    layout: 'centered'
  }
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,_,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var U,j,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
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
}`,...(J=(j=g.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  parameters: {
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
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ue=["Default","Simple","Centered","WithLogo","WithSocialLinks","WithLegalLinks","Complete","MinimalWithCopyright","OnDark","AllColors","AllColorsOnDark"];export{g as AllColors,h as AllColorsOnDark,a as Centered,d as Complete,i as Default,u as MinimalWithCopyright,p as OnDark,s as Simple,m as WithLegalLinks,l as WithLogo,c as WithSocialLinks,ue as __namedExportsOrder,de as default};
