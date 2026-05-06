import{d as N,c as e,m as r,a as Be}from"./iframe-BKkc2IKm.js";import{N as a}from"./NeoBadge-D3lbuTRt.js";import{c as Ne}from"./colorShowcase-CTRUiQdh.js";import{c as Se}from"./createA11yPlay-4oBkD041.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-B4D_vvyn.js";const we=["small","medium","large"],De=["solid","outlined","dot"],{fn:ke}=__STORYBOOK_MODULE_TEST__,ze={title:"Atoms/NeoBadge",component:a,tags:["autodocs"],argTypes:{text:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the badge.",table:{category:"Appearance"}},size:{control:"select",options:we,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:De,description:"`solid`: filled background. `outlined`: border only with transparent background. `dot`: shows only a small colored dot, no text.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a pill shape.",table:{category:"Appearance"}},dismissible:{control:"boolean",description:"Shows a close button that emits `dismiss` when clicked. Useful for removable filter tags.",table:{category:"Behavior"}},default:{control:!1,description:"Badge label content. Falls back to the `text` prop if empty.",table:{category:"Slots"}}},args:{text:"Badge",size:"medium",variant:"solid",color:"blue",onDismiss:ke()},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},l={tags:["snapshot"]},i={tags:["snapshot"],args:{variant:"outlined"}},d={tags:["snapshot"],args:{variant:"dot"}},p={tags:["snapshot"],args:{size:"small"}},c={tags:["snapshot"],args:{size:"large"}},g={tags:["snapshot"],args:{rounded:!0,text:"Rounded Badge"}},u={tags:["snapshot"],parameters:{docs:{source:{code:`<div style="display: flex; gap: 12px; flex-wrap: wrap;">
  <NeoBadge color="green" text="Active" />
  <NeoBadge color="yellow" text="Pending" />
  <NeoBadge color="red" text="Error" />
  <NeoBadge color="grey" text="Inactive" />
</div>`}}},render:s=>N({name:"StatusBadgesRender",setup(){return()=>e("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},[e(a,r(s,{color:"green",text:"Active"}),null),e(a,r(s,{color:"yellow",text:"Pending"}),null),e(a,r(s,{color:"red",text:"Error"}),null),e(a,r(s,{color:"grey",text:"Inactive"}),null)])}})},m={tags:["snapshot"],parameters:{docs:{source:{code:`<div style="position: relative; display: inline-block;">
  <button>Notifications</button>
  <NeoBadge
    variant="solid"
    size="small"
    color="red"
    text="5"
    style="position: absolute; top: -8px; right: -8px;"
  />
</div>`}}},render:s=>N({name:"WithNotificationRender",setup(){return()=>e("div",{style:{position:"relative",display:"inline-block"}},[e("button",{style:{padding:"12px 24px",background:"var(--neo-color-blue700)",color:"var(--neo-color-white)",border:"none",borderRadius:"4px",cursor:"pointer"}},[Be("Notifications")]),e(a,r(s,{variant:"solid",size:"small",color:"red",text:"5",style:{position:"absolute",top:"-8px",right:"-8px"}}),null)])}})},x={tags:["snapshot"],parameters:{docs:{source:{code:`<div style="display: flex; align-items: center; gap: 8px;">
  <NeoBadge variant="dot" color="green" />
  <span>Online</span>
</div>`}}},render:s=>N({name:"DotIndicatorRender",setup(){return()=>e("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},[e(a,r(s,{variant:"dot",color:"green"}),null),e("span",null,[Be("Online")])])}})},y={tags:["snapshot"],args:{dismissible:!0,text:"Dismissible Badge",rounded:!0}},v={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:s=>N({name:"DismissibleTagsRender",setup(){const S=["TypeScript","Vue","React","Angular"];return()=>e("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},[S.map(n=>e(a,r(s,{key:n,text:n,dismissible:!0,rounded:!0,onDismiss:()=>console.log(`Dismissed: ${n}`)}),null))])}})},b={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},f={tags:["snapshot"],globals:{direction:"rtl"},args:{text:"نشاط"},parameters:{snapshot:{viewports:["sm","xl"]}}},t={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ne(a,["solid","outlined",{variant:"dot",label:"Dot Variant",render:(s,S,n)=>e("div",{key:s,style:{display:"flex",alignItems:"center",gap:"4px"}},[e(a,r(n,{variant:"dot",color:s}),null),e("span",null,[s])])}])},o={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ne(a,["solid","outlined",{variant:"dot",label:"Dot Variant",render:(s,S,n)=>e("div",{key:s,style:{display:"flex",alignItems:"center",gap:"4px"}},[e(a,r(n,{variant:"dot",color:s}),null),e("span",{class:"NeoBadge__dot-label"},[s])])}],{dark:!0})},h={...t,tags:["!dev","test-only"],play:Se()},B={...o,tags:["!dev","test-only"],play:Se()};var w,D,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var A,R,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'outlined'
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,O,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'dot'
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var I,z,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(P=(z=p.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var V,W,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var L,U,$;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true,
    text: 'Rounded Badge'
  }
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var F,K,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Y,j,q;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    dismissible: true,
    text: 'Dismissible Badge',
    rounded: true
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,se,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(ae=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ne,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,le,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'نشاط'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,pe,ce;t.parameters={...t.parameters,docs:{...(de=t.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
                    <span>{color}</span>
                </div>
  }])
}`,...(ce=(pe=t.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ge,ue,me;o.parameters={...o.parameters,docs:{...(ge=o.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(me=(ue=o.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var xe,ye,ve;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ve=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,fe,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(he=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const Pe=["Default","Outlined","Dot","Small","Large","Rounded","StatusBadges","WithNotification","DotIndicator","Dismissible","DismissibleTags","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{t as AllColors,h as AllColorsA11y,o as AllColorsOnDark,B as AllColorsOnDarkA11y,l as Default,y as Dismissible,v as DismissibleTags,d as Dot,x as DotIndicator,c as Large,b as OnDark,i as Outlined,f as RTL,g as Rounded,p as Small,u as StatusBadges,m as WithNotification,Pe as __namedExportsOrder,ze as default};
