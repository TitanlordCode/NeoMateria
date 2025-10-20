import{d as g,f as J,g as Q,o as U,j as X,n as Y,a as f,t as Z,c as e,m as o}from"./vue.esm-bundler-DAnUScag.js";import{g as v,_ as ee}from"./_plugin-vue_export-helper-DQpfx0YY.js";import{c as ae}from"./colors-D7cU6MZF.js";const G=g({__name:"NeoBadge",props:{class:{},text:{},size:{},color:{},variant:{},rounded:{type:Boolean}},setup(a){const n=a,H=J(()=>{const y=v({component:"NeoBadge",modifiers:[n.size??"medium",n.variant??"solid",n.rounded?"rounded":""],additional:n.class}),x=v({component:"Themed",modifiers:[n.color??"grey"]});return`${y} ${x}`});return(y,x)=>(U(),Q("span",{class:Y(H.value),role:"status"},[X(y.$slots,"default",{},()=>[f(Z(n.text),1)],!0)],2))}}),r=ee(G,[["__scopeId","data-v-61588099"]]);G.__docgenInfo={exportName:"default",displayName:"NeoBadge",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"solid" | "outlined" | "dot"',declarations:[],schema:{kind:"enum",type:'"solid" | "outlined" | "dot"',schema:['"solid"','"outlined"','"dot"']}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:'"solid" | "outlined" | "dot"',description:"",declarations:[],schema:{kind:"enum",type:'"solid" | "outlined" | "dot"',schema:['"solid"','"outlined"','"dot"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Badge/NeoBadge.vue"};const te={title:"Atoms/NeoBadge",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["solid","outlined","dot"]},color:{control:"select",options:ae}},args:{text:"Badge",size:"medium",variant:"solid",color:"blue"}},t={},s={args:{variant:"outlined"}},i={args:{variant:"dot"}},d={args:{size:"small"}},l={args:{size:"large"}},c={args:{rounded:!0,text:"Rounded Badge"}},p={render:a=>g({name:"StatusBadgesRender",setup(){return()=>e("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},[e(r,o(a,{color:"green",text:"Active"}),null),e(r,o(a,{color:"yellow",text:"Pending"}),null),e(r,o(a,{color:"red",text:"Error"}),null),e(r,o(a,{color:"grey",text:"Inactive"}),null)])}})},m={render:a=>g({name:"WithNotificationRender",setup(){return()=>e("div",{style:{position:"relative",display:"inline-block"}},[e("button",{style:{padding:"12px 24px",background:"var(--neo-color-blue500)",color:"var(--neo-color-white)",border:"none",borderRadius:"4px",cursor:"pointer"}},[f("Notifications")]),e(r,o(a,{variant:"solid",size:"small",color:"red",text:"5",style:{position:"absolute",top:"-8px",right:"-8px"}}),null)])}})},u={render:a=>g({name:"DotIndicatorRender",setup(){return()=>e("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},[e(r,o(a,{variant:"dot",color:"green"}),null),e("span",null,[f("Online")])])}})};var h,b,N;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(N=(b=t.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var B,k,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var R,_,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'dot'
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var z,q,I;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var P,w,D;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var O,W,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    rounded: true,
    text: 'Rounded Badge'
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,A,T;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: NeoBadgeProps) => {
    return defineComponent({
      name: 'StatusBadgesRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
                        <NeoBadge {...args} color="green" text="Active" />
                        <NeoBadge {...args} color="yellow" text="Pending" />
                        <NeoBadge {...args} color="red" text="Error" />
                        <NeoBadge {...args} color="grey" text="Inactive" />
                    </div>;
      }
    });
  }
}`,...(T=(A=p.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var $,j,K;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: NeoBadgeProps) => {
    return defineComponent({
      name: 'WithNotificationRender',
      setup() {
        return () => <div style={{
          position: 'relative',
          display: 'inline-block'
        }}>
                        <button style={{
            padding: '12px 24px',
            background: 'var(--neo-color-blue500)',
            color: 'var(--neo-color-white)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
                            Notifications
                        </button>
                        <NeoBadge {...args} variant="solid" size="small" color="red" text="5" style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px'
          }} />
                    </div>;
      }
    });
  }
}`,...(K=(j=m.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var L,M,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: NeoBadgeProps) => {
    return defineComponent({
      name: 'DotIndicatorRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
                        <NeoBadge {...args} variant="dot" color="green" />
                        <span>Online</span>
                    </div>;
      }
    });
  }
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const se=["Default","Outlined","Dot","Small","Large","Rounded","StatusBadges","WithNotification","DotIndicator"];export{t as Default,i as Dot,u as DotIndicator,l as Large,s as Outlined,c as Rounded,d as Small,p as StatusBadges,m as WithNotification,se as __namedExportsOrder,te as default};
