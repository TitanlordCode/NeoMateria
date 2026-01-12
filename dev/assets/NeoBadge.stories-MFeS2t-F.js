import{d as S,c as e,m as n,a as ge}from"./iframe-acYjf2IA.js";import{N as a}from"./NeoBadge-DfJCvy4v.js";import{c as me}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-BaMiToec.js";const Se={title:"Atoms/NeoBadge",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["solid","outlined","dot"]},color:{table:{defaultValue:{summary:"blue"}}}},args:{text:"Badge",size:"medium",variant:"solid",color:"blue"}},s={},t={args:{variant:"outlined"}},l={args:{variant:"dot"}},i={args:{size:"small"}},d={args:{size:"large"}},c={args:{rounded:!0,text:"Rounded Badge"}},p={render:r=>S({name:"StatusBadgesRender",setup(){return()=>e("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},[e(a,n(r,{color:"green",text:"Active"}),null),e(a,n(r,{color:"yellow",text:"Pending"}),null),e(a,n(r,{color:"red",text:"Error"}),null),e(a,n(r,{color:"grey",text:"Inactive"}),null)])}})},u={render:r=>S({name:"WithNotificationRender",setup(){return()=>e("div",{style:{position:"relative",display:"inline-block"}},[e("button",{style:{padding:"12px 24px",background:"var(--neo-color-blue500)",color:"var(--neo-color-white)",border:"none",borderRadius:"4px",cursor:"pointer"}},[ge("Notifications")]),e(a,n(r,{variant:"solid",size:"small",color:"red",text:"5",style:{position:"absolute",top:"-8px",right:"-8px"}}),null)])}})},g={render:r=>S({name:"DotIndicatorRender",setup(){return()=>e("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},[e(a,n(r,{variant:"dot",color:"green"}),null),e("span",null,[ge("Online")])])}})},m={args:{dismissible:!0,text:"Dismissible Badge",rounded:!0}},x={render:r=>S({name:"DismissibleTagsRender",setup(){const B=["TypeScript","Vue","React","Angular"];return()=>e("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},[B.map(o=>e(a,n(r,{key:o,text:o,dismissible:!0,rounded:!0,onDismiss:()=>console.log(`Dismissed: ${o}`)}),null))])}})},b={globals:{backgrounds:"#000"}},v={globals:{direction:"rtl"},args:{text:"نشاط"}},y={render:me(a,["solid","outlined",{variant:"dot",label:"Dot Variant",render:(r,B,o)=>e("div",{key:r,style:{display:"flex",alignItems:"center",gap:"4px"}},[e(a,n(o,{variant:"dot",color:r}),null),e("span",null,[r])])}])},f={globals:{backgrounds:"#000"},render:me(a,["solid","outlined",{variant:"dot",label:"Dot Variant",render:(r,B,o)=>e("div",{key:r,style:{display:"flex",alignItems:"center",gap:"4px"}},[e(a,n(o,{variant:"dot",color:r}),null),e("span",{class:"NeoBadge__dot-label"},[r])])}],{dark:!0})};var D,N,k;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(k=(N=s.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var R,C,I;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var h,w,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'dot'
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var _,A,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var V,z,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(W=(z=d.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var P,L,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    rounded: true,
    text: 'Rounded Badge'
  }
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var $,j,q;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,G,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    text: 'Dismissible Badge',
    rounded: true
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: NeoBadgeProps) => {
    return defineComponent({
      name: 'DismissibleTagsRender',
      setup() {
        const tags = ['TypeScript', 'Vue', 'React', 'Angular'];
        return () => <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
                        {tags.map(tag => <NeoBadge {...args} key={tag} text={tag} dismissible rounded onDismiss={() => console.log(\`Dismissed: \${tag}\`)} />)}
                    </div>;
      }
    });
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,ne;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,se,te;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'نشاط'
  }
}`,...(te=(se=v.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ie,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoBadge, ['solid', 'outlined', {
    variant: 'dot',
    label: 'Dot Variant',
    render: (color, _, args) => <div key={color} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }}>
                    <NeoBadge {...args} variant="dot" color={color} />
                    <span>{color}</span>
                </div>
  }])
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,pe,ue;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoBadge, ['solid', 'outlined', {
    variant: 'dot',
    label: 'Dot Variant',
    render: (color, _, args) => <div key={color} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }}>
                        <NeoBadge {...args} variant="dot" color={color} />
                        <span class="NeoBadge__dot-label">{color}</span>
                    </div>
  }], {
    dark: true
  })
}`,...(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Be=["Default","Outlined","Dot","Small","Large","Rounded","StatusBadges","WithNotification","DotIndicator","Dismissible","DismissibleTags","OnDark","RTL","AllColors","AllColorsOnDark"];export{y as AllColors,f as AllColorsOnDark,s as Default,m as Dismissible,x as DismissibleTags,l as Dot,g as DotIndicator,d as Large,b as OnDark,t as Outlined,v as RTL,c as Rounded,i as Small,p as StatusBadges,u as WithNotification,Be as __namedExportsOrder,Se as default};
