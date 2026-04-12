import{d as B,c as e,m as n,a as ue}from"./iframe-BBbPLObx.js";import{N as a}from"./NeoBadge-BM8e5zkb.js";import{c as me}from"./colorShowcase-CVTHfhfV.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const xe=["small","medium","large"],ve=["solid","outlined","dot"],{fn:ye}=__STORYBOOK_MODULE_TEST__,De={title:"Atoms/NeoBadge",component:a,tags:["autodocs"],argTypes:{text:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the badge.",table:{category:"Appearance"}},size:{control:"select",options:xe,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:ve,description:"`solid`: filled background. `outlined`: border only with transparent background. `dot`: shows only a small colored dot, no text.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a pill shape.",table:{category:"Appearance"}},dismissible:{control:"boolean",description:"Shows a close button that emits `dismiss` when clicked. Useful for removable filter tags.",table:{category:"Behavior"}}},args:{text:"Badge",size:"medium",variant:"solid",color:"blue",onDismiss:ye()}},s={},t={args:{variant:"outlined"}},i={args:{variant:"dot"}},l={args:{size:"small"}},d={args:{size:"large"}},c={args:{rounded:!0,text:"Rounded Badge"}},p={parameters:{docs:{source:{code:`<div style="display: flex; gap: 12px; flex-wrap: wrap;">
  <NeoBadge color="green" text="Active" />
  <NeoBadge color="yellow" text="Pending" />
  <NeoBadge color="red" text="Error" />
  <NeoBadge color="grey" text="Inactive" />
</div>`}}},render:r=>B({name:"StatusBadgesRender",setup(){return()=>e("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},[e(a,n(r,{color:"green",text:"Active"}),null),e(a,n(r,{color:"yellow",text:"Pending"}),null),e(a,n(r,{color:"red",text:"Error"}),null),e(a,n(r,{color:"grey",text:"Inactive"}),null)])}})},g={parameters:{docs:{source:{code:`<div style="position: relative; display: inline-block;">
  <button>Notifications</button>
  <NeoBadge
    variant="solid"
    size="small"
    color="red"
    text="5"
    style="position: absolute; top: -8px; right: -8px;"
  />
</div>`}}},render:r=>B({name:"WithNotificationRender",setup(){return()=>e("div",{style:{position:"relative",display:"inline-block"}},[e("button",{style:{padding:"12px 24px",background:"var(--neo-color-blue700)",color:"var(--neo-color-white)",border:"none",borderRadius:"4px",cursor:"pointer"}},[ue("Notifications")]),e(a,n(r,{variant:"solid",size:"small",color:"red",text:"5",style:{position:"absolute",top:"-8px",right:"-8px"}}),null)])}})},u={parameters:{docs:{source:{code:`<div style="display: flex; align-items: center; gap: 8px;">
  <NeoBadge variant="dot" color="green" />
  <span>Online</span>
</div>`}}},render:r=>B({name:"DotIndicatorRender",setup(){return()=>e("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},[e(a,n(r,{variant:"dot",color:"green"}),null),e("span",null,[ue("Online")])])}})},m={args:{dismissible:!0,text:"Dismissible Badge",rounded:!0}},x={parameters:{docs:{source:{code:`<script setup>
const tags = ref(['TypeScript', 'Vue', 'React', 'Angular'])
const dismiss = (tag) => tags.value = tags.value.filter(existingTag => existingTag !== tag)
<\/script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <NeoBadge
      v-for="tag in tags"
      :key="tag"
      :text="tag"
      color="blue"
      dismissible
      rounded
      @dismiss="dismiss(tag)"
    />
  </div>
</template>`}}},render:r=>B({name:"DismissibleTagsRender",setup(){const N=["TypeScript","Vue","React","Angular"];return()=>e("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},[N.map(o=>e(a,n(r,{key:o,text:o,dismissible:!0,rounded:!0,onDismiss:()=>console.log(`Dismissed: ${o}`)}),null))])}})},v={globals:{backgrounds:"#000"}},y={globals:{direction:"rtl"},args:{text:"نشاط"}},b={render:me(a,["solid","outlined",{variant:"dot",label:"Dot Variant",render:(r,N,o)=>e("div",{key:r,style:{display:"flex",alignItems:"center",gap:"4px"}},[e(a,n(o,{variant:"dot",color:r}),null),e("span",null,[r])])}])},f={globals:{backgrounds:"#000"},render:me(a,["solid","outlined",{variant:"dot",label:"Dot Variant",render:(r,N,o)=>e("div",{key:r,style:{display:"flex",alignItems:"center",gap:"4px"}},[e(a,n(o,{variant:"dot",color:r}),null),e("span",{class:"NeoBadge__dot-label"},[r])])}],{dark:!0})};var S,D,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var w,h,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(R=(h=t.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var T,A,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'dot'
  }
}`,...(_=(A=i.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var O,C,I;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var z,V,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(P=(V=d.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var W,E,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    rounded: true,
    text: 'Rounded Badge'
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var U,$,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; gap: 12px; flex-wrap: wrap;">
  <NeoBadge color="green" text="Active" />
  <NeoBadge color="yellow" text="Pending" />
  <NeoBadge color="red" text="Error" />
  <NeoBadge color="grey" text="Inactive" />
</div>\`
      }
    }
  },
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
}`,...(K=($=p.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var M,Y,j;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<div style="position: relative; display: inline-block;">
  <button>Notifications</button>
  <NeoBadge
    variant="solid"
    size="small"
    color="red"
    text="5"
    style="position: absolute; top: -8px; right: -8px;"
  />
</div>\`
      }
    }
  },
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
            background: 'var(--neo-color-blue700)',
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
}`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,F,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; align-items: center; gap: 8px;">
  <NeoBadge variant="dot" color="green" />
  <span>Online</span>
</div>\`
      }
    }
  },
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
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    text: 'Dismissible Badge',
    rounded: true
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const tags = ref(['TypeScript', 'Vue', 'React', 'Angular'])
const dismiss = (tag) => tags.value = tags.value.filter(existingTag => existingTag !== tag)
<\/script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <NeoBadge
      v-for="tag in tags"
      :key="tag"
      :text="tag"
      color="blue"
      dismissible
      rounded
      @dismiss="dismiss(tag)"
    />
  </div>
</template>\`
      }
    }
  },
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,se,te;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'نشاط'
  }
}`,...(te=(se=y.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,le,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=b.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ge;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const ke=["Default","Outlined","Dot","Small","Large","Rounded","StatusBadges","WithNotification","DotIndicator","Dismissible","DismissibleTags","OnDark","RTL","AllColors","AllColorsOnDark"];export{b as AllColors,f as AllColorsOnDark,s as Default,m as Dismissible,x as DismissibleTags,i as Dot,u as DotIndicator,d as Large,v as OnDark,t as Outlined,y as RTL,c as Rounded,l as Small,p as StatusBadges,g as WithNotification,ke as __namedExportsOrder,De as default};
