import{d as j,r as z,v as L,u as W,I as $,J as H,x as K,y as J,A as G,t as Q}from"./iframe-B0Dukz3x.js";import{_ as U}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as X}from"./NeoButton-BBKKdN1N.js";import{c as Y}from"./createA11yPlay-BQ9rYRTW.js";import"./preload-helper-Dp1pzeXC.js";import"./useButton-P1G5yMpQ.js";import"./NeoIcon-BfncIjiP.js";import"./axe-C0a-FzRY.js";const d=j({__name:"NeoTooltip",props:{text:{},placement:{default:"top"},openDelay:{default:0},visible:{type:Boolean,default:!1}},setup(e){const s=e,t=z(!1);let r=null;const I=()=>{s.visible||(s.openDelay>0?r=setTimeout(()=>{t.value=!0},s.openDelay):t.value=!0)},O=()=>{s.visible||(r&&(clearTimeout(r),r=null),t.value=!1)},M=()=>t.value=!0,E=()=>t.value=!1;return(V,ee)=>(Q(),L("div",{class:"NeoTooltip-wrapper",onMouseenter:I,onMouseleave:O,onFocusin:M,onFocusout:E},[W(V.$slots,"activator",{},void 0,!0),$(K("div",{class:G(["NeoTooltip",`NeoTooltip--${e.placement}`]),role:"tooltip"},J(e.text),3),[[H,e.visible||t.value]])],32))}}),u=U(d,[["__scopeId","data-v-625722cf"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"NeoTooltip",type:1,props:[{name:"text",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"placement",global:!1,description:"",tags:[],required:!1,type:'"left" | "right" | "bottom" | "top"',declarations:[],schema:{kind:"enum",type:'"left" | "right" | "bottom" | "top"',schema:['"left"','"right"','"bottom"','"top"']},default:'"top"'},{name:"openDelay",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"visible",global:!1,description:"Force the tooltip to stay visible — useful for testing and docs.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"activator",type:"any",description:"The element that triggers the tooltip on hover.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & NeoTooltipSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & NeoTooltipSlots"}},{name:"placement",type:'"left" | "right" | "bottom" | "top"',description:"",declarations:[],schema:{kind:"enum",type:'"left" | "right" | "bottom" | "top"',schema:['"left"','"right"','"bottom"','"top"']}},{name:"openDelay",type:"number",description:"",declarations:[],schema:"number"},{name:"visible",type:"boolean",description:"Force the tooltip to stay visible — useful for testing and docs.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"text",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Tooltip/NeoTooltip.vue"});const Z=["top","bottom","left","right"],a=()=>({template:'<div style="display: flex; justify-content: center; align-items: center; min-block-size: 160px; padding: 80px 200px;"><story /></div>'}),ce={title:"Atoms/NeoTooltip",component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{text:{control:"text",table:{category:"Content"}},placement:{control:"select",options:Z,table:{category:"Behavior"},description:"Which side of the trigger the tooltip appears on."},openDelay:{control:"number",table:{category:"Behavior"},description:"Milliseconds to wait before showing the tooltip."},visible:{control:"boolean",table:{category:"State"},description:"Force the tooltip to stay visible (useful for docs and testing)."}},args:{text:"Helpful tooltip text",placement:"top",openDelay:0,visible:!1},render:e=>({components:{NeoTooltip:u,NeoButton:X},setup:()=>({args:e}),template:`
            <NeoTooltip v-bind="args">
                <template #activator>
                    <NeoButton color="blue" size="medium" variant="secondary" text="Hover me" />
                </template>
            </NeoTooltip>
        `})},o={tags:["snapshot"],decorators:[a],args:{placement:"top",visible:!0}},n={tags:["snapshot"],decorators:[a],args:{placement:"bottom",visible:!0}},i={tags:["snapshot"],decorators:[a],args:{placement:"left",visible:!0}},l={tags:["snapshot"],decorators:[a],args:{placement:"right",visible:!0}},c={tags:["no-test"],args:{openDelay:500}},p={tags:["snapshot"],decorators:[a],globals:{backgrounds:"#000"},args:{visible:!0}},m={...o,tags:["!dev","test-only"],play:Y()};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'top',
    visible: true
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,b,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'bottom',
    visible: true
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,k,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'left',
    visible: true
  }
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var x,w,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  args: {
    placement: 'right',
    visible: true
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,P,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    openDelay: 500
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var B,q,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withTooltipPadding],
  globals: {
    backgrounds: '#000'
  },
  args: {
    visible: true
  }
}`,...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var A,C,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Top,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const pe=["Top","Bottom","Left","Right","WithDelay","OnDark","DefaultA11y"];export{n as Bottom,m as DefaultA11y,i as Left,p as OnDark,l as Right,o as Top,c as WithDelay,pe as __namedExportsOrder,ce as default};
