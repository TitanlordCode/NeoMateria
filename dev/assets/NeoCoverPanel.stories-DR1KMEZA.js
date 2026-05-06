import{d as i,c as e,m as l,b as be,r as I,a as R,F as Ce,i as ye}from"./iframe-qv8QN6wW.js";import{N as r}from"./NeoCoverPanel-B-wb9JS3.js";import{N as s}from"./NeoPennant-BczJrjlk.js";import{s as N,H as d,b as v,S as o}from"./defaultIcons--RAKhoNJ.js";import{p as F}from"./placeholder-CgeahcyT.js";import{c as Pe}from"./createA11yPlay-DGE-7m0Q.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-C9CyuQqt.js";import"./axe-B5oo0i1s.js";const ke=["action","link","none"],{fn:w}=__STORYBOOK_MODULE_TEST__;function p(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!ye(n)}const m=F(300,450),ze={title:"Molecules/NeoCoverPanel",component:r,tags:["autodocs"],argTypes:{color:{description:"Theme color for overlays and action button accents.",table:{category:"Appearance"}},clickBehavior:{control:"select",options:ke,description:"`none`: image is decorative. `link`: image acts as a link (uses `href`). `action`: image triggers an action button — emits `image-click`.",table:{category:"Behavior"}},rounded:{control:"boolean",description:"Applies rounded corners to the panel.",table:{category:"Appearance"}},imageSrc:{control:"text",table:{category:"Content"}},imageAlt:{control:"text",table:{category:"Content"}},title:{control:"text",table:{category:"Content"}},imageAriaLabel:{control:"text",description:"Accessible label for the image when it is interactive (`clickBehavior` is `link` or `action`).",table:{category:"Accessibility"}},actionAriaLabel:{control:"text",description:"Accessible label for the action button overlay.",table:{category:"Accessibility"}},actionActive:{control:"boolean",description:"Marks the action button as toggled on (e.g. a 'favored' state). Sets `aria-pressed`.",table:{category:"Behavior"}},pennants:{control:!1,description:"Pennant badges displayed at the top of the panel, anchored to the end edge. Up to 5 small-sized pennants fit on a panel of ~240px wide.",table:{category:"Slots"}},"action-icon":{control:!1,description:"Custom icon for the action overlay button. Receives `active` (current pressed state).",table:{category:"Slots"}}},args:{color:"blue",imageSrc:"https://picsum.photos/seed/coverpanel1/300/450",imageAlt:"Cover image",title:"Cover Panel Title",clickBehavior:"none","onImage-click":w(),"onAction-click":w()},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},c=n=>({color:n.color,imageSrc:n.imageSrc,imageAlt:n.imageAlt,title:n.title,imageAriaLabel:n.imageAriaLabel,rounded:n.rounded}),A={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover image"
  title="Cover Panel Title"
  click-behavior="none"
/>`}}},render:n=>i({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none"}),null)])}})},u={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
import { ref } from 'vue'

const isSelected = ref(false)
const isFavored = ref(false)
<\/script>

<template>
  <NeoCoverPanel
    color="blue"
    image-src="/path/to/cover.jpg"
    image-alt="Cover placeholder"
    click-behavior="action"
    :image-aria-label="isSelected ? 'Deselect this item' : 'Select this item'"
    :action-aria-label="isFavored ? 'Remove from favorites' : 'Add to favorites'"
    :action-active="isFavored"
    @image-click="isSelected = !isSelected"
    @action-click="isFavored = !isFavored"
  >
    <template #action-icon="{ active }">
      <HeartFilledIcon v-if="active" />
      <HeartIcon v-else />
    </template>
  </NeoCoverPanel>
</template>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",clickBehavior:"action",imageAriaLabel:"Select this item",actionAriaLabel:"Add to favorites",actionActive:!1},render:n=>i({name:"ImageClickAndActionButtonRender",setup(){const a=I(!1),t=I(!1);return()=>e("div",{style:{display:"flex",gap:"24px",padding:"16px",alignItems:"flex-start"}},[e("div",{style:{inlineSize:"160px"}},[e(r,l(c(n),{clickBehavior:"action",imageAriaLabel:a.value?"Deselect this item":"Select this item",actionAriaLabel:t.value?"Remove from favorites":"Add to favorites",actionActive:t.value,"onImage-click":()=>{a.value=!a.value},"onAction-click":()=>{t.value=!t.value}}),{"action-icon":({active:B})=>B?d:v})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",fontSize:"14px",fontFamily:"sans-serif",paddingBlockStart:"8px"}},[e("div",null,[R("Image click:")," ",e("strong",{style:{color:a.value?"green":"inherit"}},[a.value?"selected":"idle"])]),e("div",null,[R("Action button:")," ",e("strong",{style:{color:t.value?"#e11d48":"inherit"}},[t.value?"favoured":"idle"])])])])}})},b={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="link"
  href="/item/details"
  image-aria-label="View item details"
/>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",clickBehavior:"link",href:"#cover-item",imageAriaLabel:"View cover item details"},render:n=>i({name:"LinkModeRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"link",href:"#cover-item"}),null)])}})},C={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Add to favorites"
>
  <template #pennants>
    <NeoPennant color="yellow">${N}</NeoPennant>
    <NeoPennant color="blue">${N}</NeoPennant>
    <NeoPennant color="red">${N}</NeoPennant>
  </template>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",actionAriaLabel:"Add to favorites"},render:n=>i({name:"WithPennantsRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none",actionAriaLabel:"Add to favorites"}),{pennants:()=>e(Ce,null,[e(s,{color:"yellow"},p(o)?o:{default:()=>[o]}),e(s,{color:"blue"},p(o)?o:{default:()=>[o]}),e(s,{color:"red"},p(o)?o:{default:()=>[o]})]),"action-icon":({active:a})=>a?d:v})])}})},g={tags:["no-test"],parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
>
  <template #pennants>
    <template v-for="color in ['yellow', 'blue', 'green', 'purple', 'red']" :key="color">
      <NeoPennant :color="color">${N}</NeoPennant>
    </template>
  </template>
</NeoCoverPanel>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder"},render:n=>i({name:"WithManyPennantsRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none"}),{pennants:()=>e(Ce,null,[e(s,{color:"yellow"},p(o)?o:{default:()=>[o]}),e(s,{color:"blue"},p(o)?o:{default:()=>[o]}),e(s,{color:"green"},p(o)?o:{default:()=>[o]}),e(s,{color:"purple"},p(o)?o:{default:()=>[o]}),e(s,{color:"red"},p(o)?o:{default:()=>[o]})])})])}})},P={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Remove from favorites"
  :action-active="true"
>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",actionAriaLabel:"Remove from favorites",actionActive:!0},render:n=>i({name:"ActionActiveRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none",actionAriaLabel:"Remove from favorites",actionActive:!0}),{"action-icon":({active:a})=>a?d:v})])}})},y={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
import { ref } from 'vue'

const count = ref(42)
const isActive = ref(false)

const handleActionClick = () => {
  isActive.value = !isActive.value
  count.value = isActive.value ? count.value + 1 : count.value - 1
}
<\/script>

<template>
  <NeoCoverPanel
    color="blue"
    image-src="/path/to/cover.jpg"
    image-alt="Cover placeholder"
    click-behavior="none"
    :action-aria-label="\`\${count} votes\`"
    :action-active="isActive"
    @action-click="handleActionClick"
  >
    <template #action-icon="{ active }">
      <span style="display: inline-flex; align-items: center; gap: 2px; font-size: 11px; font-weight: 700;">
        <HeartFilledIcon v-if="active" />
        <HeartIcon v-else />
        {{ count }}
      </span>
    </template>
  </NeoCoverPanel>
</template>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",actionAriaLabel:"42 votes"},render:n=>i({name:"WithActionCountRender",setup(){const a=I(42),t=I(!1),B=()=>{t.value=!t.value,a.value=t.value?a.value+1:a.value-1};return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none",actionAriaLabel:`${a.value} votes`,actionActive:t.value,"onAction-click":B}),{"action-icon":({active:L})=>e("span",{style:{alignItems:"center",color:L?"white":"var(--neo-theme-color)",display:"inline-flex",fontSize:"11px",fontWeight:"700",gap:"2px"}},[L?d:v,a.value])})])}})},k={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{title:"عنوان لوحة الغلاف"}},h={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:n=>i({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",padding:"16px"}},[be.map(a=>e("div",{key:a,style:{inlineSize:"120px"}},[e(r,l(c(n),{color:a,imageSrc:F(300,450),imageAlt:`Cover placeholder for ${a}`,clickBehavior:"none",actionAriaLabel:"Add to favorites"}),{"action-icon":({active:t})=>t?d:v})]))])}})},f={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:n=>i({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexWrap:"wrap",gap:"12px",padding:"16px"}},[be.map(a=>e("div",{key:a,style:{inlineSize:"120px"}},[e(r,l(c(n),{color:a,imageSrc:F(300,450),imageAlt:`Cover placeholder for ${a}`,clickBehavior:"none",actionAriaLabel:"Add to favorites"}),{"action-icon":({active:t})=>t?d:v})]))])}})},S={...h,tags:["!dev","test-only"],play:Pe()},x={...f,tags:["!dev","test-only"],play:Pe()};var H,z,D;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover image"
  title="Cover Panel Title"
  click-behavior="none"
/>\`
      }
    }
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          inlineSize: '160px',
          padding: '16px'
        }}>
                        <NeoCoverPanel {...baseProps(args)} clickBehavior="none" />
                    </div>;
      }
    });
  }
}`,...(D=(z=A.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,j,$,O,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
import { ref } from 'vue'

const isSelected = ref(false)
const isFavored = ref(false)
<\/script>

<template>
  <NeoCoverPanel
    color="blue"
    image-src="/path/to/cover.jpg"
    image-alt="Cover placeholder"
    click-behavior="action"
    :image-aria-label="isSelected ? 'Deselect this item' : 'Select this item'"
    :action-aria-label="isFavored ? 'Remove from favorites' : 'Add to favorites'"
    :action-active="isFavored"
    @image-click="isSelected = !isSelected"
    @action-click="isFavored = !isFavored"
  >
    <template #action-icon="{ active }">
      <HeartFilledIcon v-if="active" />
      <HeartIcon v-else />
    </template>
  </NeoCoverPanel>
</template>\`
      }
    }
  },
  args: {
    imageSrc: coverPlaceholder,
    imageAlt: 'Cover placeholder',
    clickBehavior: 'action',
    imageAriaLabel: 'Select this item',
    actionAriaLabel: 'Add to favorites',
    actionActive: false
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'ImageClickAndActionButtonRender',
      setup() {
        const isSelected = ref(false);
        const isFavored = ref(false);
        return () => <div style={{
          display: 'flex',
          gap: '24px',
          padding: '16px',
          alignItems: 'flex-start'
        }}>
                        <div style={{
            inlineSize: '160px'
          }}>
                            <NeoCoverPanel {...baseProps(args)} clickBehavior="action" imageAriaLabel={isSelected.value ? 'Deselect this item' : 'Select this item'} actionAriaLabel={isFavored.value ? 'Remove from favorites' : 'Add to favorites'} actionActive={isFavored.value} onImage-click={() => {
              isSelected.value = !isSelected.value;
            }} onAction-click={() => {
              isFavored.value = !isFavored.value;
            }} v-slots={{
              'action-icon': ({
                active
              }: {
                active: boolean;
              }) => active ? HeartFilledIcon : HeartIcon
            }} />
                        </div>
                        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '14px',
            fontFamily: 'sans-serif',
            paddingBlockStart: '8px'
          }}>
                            <div>
                                Image click:{' '}
                                <strong style={{
                color: isSelected.value ? 'green' : 'inherit'
              }}>
                                    {isSelected.value ? 'selected' : 'idle'}
                                </strong>
                            </div>
                            <div>
                                Action button:{' '}
                                <strong style={{
                color: isFavored.value ? '#e11d48' : 'inherit'
              }}>
                                    {isFavored.value ? 'favoured' : 'idle'}
                                </strong>
                            </div>
                        </div>
                    </div>;
      }
    });
  }
}`,...($=(j=u.parameters)==null?void 0:j.docs)==null?void 0:$.source},description:{story:'The image surface itself is a `<button>` (clickBehavior="action").\nClicking it emits `image-click` — useful for selection, expanding a modal, etc.\nThe floating action button (heart) emits `action-click` independently.\nBoth are demonstrated here with separate visible state.',...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.description}}};var M,_,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="link"
  href="/item/details"
  image-aria-label="View item details"
/>\`
      }
    }
  },
  args: {
    imageSrc: coverPlaceholder,
    imageAlt: 'Cover placeholder',
    clickBehavior: 'link',
    href: '#cover-item',
    imageAriaLabel: 'View cover item details'
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'LinkModeRender',
      setup() {
        return () => <div style={{
          inlineSize: '160px',
          padding: '16px'
        }}>
                        <NeoCoverPanel {...baseProps(args)} clickBehavior="link" href="#cover-item" />
                    </div>;
      }
    });
  }
}`,...(V=(_=b.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var E,U,K;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Add to favorites"
>
  <template #pennants>
    <NeoPennant color="yellow">\${starIconSvg}</NeoPennant>
    <NeoPennant color="blue">\${starIconSvg}</NeoPennant>
    <NeoPennant color="red">\${starIconSvg}</NeoPennant>
  </template>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>\`
      }
    }
  },
  args: {
    imageSrc: coverPlaceholder,
    imageAlt: 'Cover placeholder',
    actionAriaLabel: 'Add to favorites'
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'WithPennantsRender',
      setup() {
        return () => <div style={{
          inlineSize: '160px',
          padding: '16px'
        }}>
                        <NeoCoverPanel {...baseProps(args)} clickBehavior="none" actionAriaLabel="Add to favorites" v-slots={{
            pennants: () => <>
                                        <NeoPennant color="yellow">{StarIcon}</NeoPennant>
                                        <NeoPennant color="blue">{StarIcon}</NeoPennant>
                                        <NeoPennant color="red">{StarIcon}</NeoPennant>
                                    </>,
            'action-icon': ({
              active
            }: {
              active: boolean;
            }) => active ? HeartFilledIcon : HeartIcon
          }} />
                    </div>;
      }
    });
  }
}`,...(K=(U=C.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Y,q,G,J,Q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
>
  <template #pennants>
    <template v-for="color in ['yellow', 'blue', 'green', 'purple', 'red']" :key="color">
      <NeoPennant :color="color">\${starIconSvg}</NeoPennant>
    </template>
  </template>
</NeoCoverPanel>\`
      }
    }
  },
  args: {
    imageSrc: coverPlaceholder,
    imageAlt: 'Cover placeholder'
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'WithManyPennantsRender',
      setup() {
        return () => <div style={{
          inlineSize: '160px',
          padding: '16px'
        }}>
                        <NeoCoverPanel {...baseProps(args)} clickBehavior="none" v-slots={{
            pennants: () => <>
                                        <NeoPennant color="yellow">{StarIcon}</NeoPennant>
                                        <NeoPennant color="blue">{StarIcon}</NeoPennant>
                                        <NeoPennant color="green">{StarIcon}</NeoPennant>
                                        <NeoPennant color="purple">{StarIcon}</NeoPennant>
                                        <NeoPennant color="red">{StarIcon}</NeoPennant>
                                    </>
          }} />
                    </div>;
      }
    });
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:`Up to 5 pennants sit side-by-side in a single row, anchored to the end (right) edge.
Pennants are absolutely positioned and do not affect panel dimensions.`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,ee;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Remove from favorites"
  :action-active="true"
>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>\`
      }
    }
  },
  args: {
    imageSrc: coverPlaceholder,
    imageAlt: 'Cover placeholder',
    actionAriaLabel: 'Remove from favorites',
    actionActive: true
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'ActionActiveRender',
      setup() {
        return () => <div style={{
          inlineSize: '160px',
          padding: '16px'
        }}>
                        <NeoCoverPanel {...baseProps(args)} clickBehavior="none" actionAriaLabel="Remove from favorites" actionActive={true} v-slots={{
            'action-icon': ({
              active
            }: {
              active: boolean;
            }) => active ? HeartFilledIcon : HeartIcon
          }} />
                    </div>;
      }
    });
  }
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,oe,ae;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
import { ref } from 'vue'

const count = ref(42)
const isActive = ref(false)

const handleActionClick = () => {
  isActive.value = !isActive.value
  count.value = isActive.value ? count.value + 1 : count.value - 1
}
<\/script>

<template>
  <NeoCoverPanel
    color="blue"
    image-src="/path/to/cover.jpg"
    image-alt="Cover placeholder"
    click-behavior="none"
    :action-aria-label="\\\`\\\${count} votes\\\`"
    :action-active="isActive"
    @action-click="handleActionClick"
  >
    <template #action-icon="{ active }">
      <span style="display: inline-flex; align-items: center; gap: 2px; font-size: 11px; font-weight: 700;">
        <HeartFilledIcon v-if="active" />
        <HeartIcon v-else />
        {{ count }}
      </span>
    </template>
  </NeoCoverPanel>
</template>\`
      }
    }
  },
  args: {
    imageSrc: coverPlaceholder,
    imageAlt: 'Cover placeholder',
    actionAriaLabel: '42 votes'
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'WithActionCountRender',
      setup() {
        const count = ref(42);
        const isActive = ref(false);
        const handleActionClick = () => {
          isActive.value = !isActive.value;
          count.value = isActive.value ? count.value + 1 : count.value - 1;
        };
        return () => <div style={{
          inlineSize: '160px',
          padding: '16px'
        }}>
                        <NeoCoverPanel {...baseProps(args)} clickBehavior="none" actionAriaLabel={\`\${count.value} votes\`} actionActive={isActive.value} onAction-click={handleActionClick} v-slots={{
            'action-icon': ({
              active
            }: {
              active: boolean;
            }) => <span style={{
              alignItems: 'center',
              color: active ? 'white' : 'var(--neo-theme-color)',
              display: 'inline-flex',
              fontSize: '11px',
              fontWeight: '700',
              gap: '2px'
            }}>
                                        {active ? HeartFilledIcon : HeartIcon}
                                        {count.value}
                                    </span>
          }} />
                    </div>;
      }
    });
  }
}`,...(ae=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,re,ie;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  args: {
    title: 'عنوان لوحة الغلاف'
  }
}`,...(ie=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ce,se;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'AllColorsRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px'
        }}>
                        {colors.map((color: Color) => <div key={color} style={{
            inlineSize: '120px'
          }}>
                                <NeoCoverPanel {...baseProps(args)} color={color} imageSrc={placeholder(300, 450)} imageAlt={\`Cover placeholder for \${color}\`} clickBehavior="none" actionAriaLabel="Add to favorites" v-slots={{
              'action-icon': ({
                active
              }: {
                active: boolean;
              }) => active ? HeartFilledIcon : HeartIcon
            }} />
                            </div>)}
                    </div>;
      }
    });
  }
}`,...(se=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var pe,de,ve;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: (args: NeoCoverPanelProps) => {
    return defineComponent({
      name: 'AllColorsOnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px'
        }}>
                        {colors.map((color: Color) => <div key={color} style={{
            inlineSize: '120px'
          }}>
                                <NeoCoverPanel {...baseProps(args)} color={color} imageSrc={placeholder(300, 450)} imageAlt={\`Cover placeholder for \${color}\`} clickBehavior="none" actionAriaLabel="Add to favorites" v-slots={{
              'action-icon': ({
                active
              }: {
                active: boolean;
              }) => active ? HeartFilledIcon : HeartIcon
            }} />
                            </div>)}
                    </div>;
      }
    });
  }
}`,...(ve=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var me,ue,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,fe,Ae;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Ae=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};const De=["Default","ImageClickAndActionButton","LinkMode","WithPennants","WithManyPennants","ActionActive","WithActionCount","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{P as ActionActive,h as AllColors,S as AllColorsA11y,f as AllColorsOnDark,x as AllColorsOnDarkA11y,A as Default,u as ImageClickAndActionButton,b as LinkMode,k as RTL,y as WithActionCount,g as WithManyPennants,C as WithPennants,De as __namedExportsOrder,ze as default};
