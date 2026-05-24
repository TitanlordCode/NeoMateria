import{N as p}from"./NeoTooltip-BzDcyizs.js";import{N as W}from"./NeoButton-DHToiIFj.js";import{c as z}from"./createA11yPlay-ZXQq4FWN.js";import"./iframe-BF-isInV.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./useButton-DwgPL1zv.js";import"./NeoIcon-BIwAnHaT.js";import"./axe-CIqaWmEG.js";const H=["top","bottom","left","right"],e=()=>({template:'<div style="display: flex; justify-content: center; align-items: center; min-block-size: 160px; padding: 80px 200px;"><story /></div>'}),G={title:"Atoms/NeoTooltip",component:p,tags:["autodocs"],parameters:{layout:"centered",snapshot:{viewports:["sm","lg","xl"]}},argTypes:{text:{control:"text",table:{category:"Content"}},placement:{control:"select",options:H,table:{category:"Behavior"},description:"Which side of the trigger the tooltip appears on."},openDelay:{control:"number",table:{category:"Behavior"},description:"Milliseconds to wait before showing the tooltip."},visible:{control:"boolean",table:{category:"State"},description:"Force the tooltip to stay visible (useful for docs and testing)."}},args:{text:"Helpful tooltip text",placement:"top",openDelay:0,visible:!1},render:O=>({components:{NeoTooltip:p,NeoButton:W},setup:()=>({args:O}),template:`
            <NeoTooltip v-bind="args">
                <template #activator>
                    <NeoButton color="blue" size="medium" variant="secondary" text="Hover me" />
                </template>
            </NeoTooltip>
        `})},t={tags:["snapshot"],decorators:[e],args:{placement:"top",visible:!0}},o={tags:["snapshot"],decorators:[e],args:{placement:"bottom",visible:!0}},s={tags:["snapshot"],decorators:[e],args:{placement:"left",visible:!0}},a={tags:["snapshot"],decorators:[e],args:{placement:"right",visible:!0}},r={tags:["no-test"],args:{openDelay:500}},n={tags:["snapshot"],decorators:[e],globals:{backgrounds:"#000"},args:{visible:!0},parameters:{snapshot:{viewports:["sm","xl"]}}},i={...t,tags:["!dev","test-only"],play:z()};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'top',
    visible: true
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,g,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'bottom',
    visible: true
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'left',
    visible: true
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,f,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'right',
    visible: true
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,w,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    openDelay: 500
  }
}`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var P,N,S;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  globals: {
    backgrounds: '#000'
  },
  args: {
    visible: true
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var B,k,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Top,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const I=["Top","Bottom","Left","Right","WithDelay","OnDark","DefaultA11y"];export{o as Bottom,i as DefaultA11y,s as Left,n as OnDark,a as Right,t as Top,r as WithDelay,I as __namedExportsOrder,G as default};
