import{d as i,c as e,m as l,b as le,r as y,a as B,F as ce,i as se}from"./iframe-Da9xFhCi.js";import{N as r}from"./NeoCoverPanel-DfNCZ-fV.js";import{N as s}from"./NeoPennant-Cii9vxOb.js";import{H as d,b as p}from"./defaultIcons-DqdwkU5d.js";import{p as N}from"./placeholder-J2GqGUFJ.js";import{s as S}from"./iconSnippets-DKkOH1Iz.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-C-1C2F0l.js";const ve=["action","link","none"],{fn:F}=__STORYBOOK_MODULE_TEST__;function v(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!se(n)}const m=N(300,450),Pe={title:"Molecules/NeoCoverPanel",component:r,tags:["autodocs"],argTypes:{color:{description:"Theme color for overlays and action button accents.",table:{category:"Appearance"}},clickBehavior:{control:"select",options:ve,description:"`none`: image is decorative. `link`: image acts as a link (uses `href`). `action`: image triggers an action button — emits `image-click`.",table:{category:"Behavior"}},rounded:{control:"boolean",description:"Applies rounded corners to the panel.",table:{category:"Appearance"}},imageSrc:{control:"text",table:{category:"Content"}},imageAlt:{control:"text",table:{category:"Content"}},title:{control:"text",table:{category:"Content"}},imageAriaLabel:{control:"text",description:"Accessible label for the image when it is interactive (`clickBehavior` is `link` or `action`).",table:{category:"Accessibility"}},actionAriaLabel:{control:"text",description:"Accessible label for the action button overlay.",table:{category:"Accessibility"}},actionActive:{control:"boolean",description:"Marks the action button as toggled on (e.g. a 'favored' state). Sets `aria-pressed`.",table:{category:"Behavior"}}},args:{color:"blue",imageSrc:"https://picsum.photos/seed/coverpanel1/300/450",imageAlt:"Cover image",title:"Cover Panel Title",clickBehavior:"none","onImage-click":F(),"onAction-click":F()}},c=n=>({color:n.color,imageSrc:n.imageSrc,imageAlt:n.imageAlt,title:n.title,imageAriaLabel:n.imageAriaLabel,rounded:n.rounded}),o=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null)]),f={parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover image"
  title="Cover Panel Title"
  click-behavior="none"
/>`}}},render:n=>i({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none"}),null)])}})},u={parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",clickBehavior:"action",imageAriaLabel:"Select this item",actionAriaLabel:"Add to favorites",actionActive:!1},render:n=>i({name:"ImageClickAndActionButtonRender",setup(){const a=y(!1),t=y(!1);return()=>e("div",{style:{display:"flex",gap:"24px",padding:"16px",alignItems:"flex-start"}},[e("div",{style:{inlineSize:"160px"}},[e(r,l(c(n),{clickBehavior:"action",imageAriaLabel:a.value?"Deselect this item":"Select this item",actionAriaLabel:t.value?"Remove from favorites":"Add to favorites",actionActive:t.value,"onImage-click":()=>{a.value=!a.value},"onAction-click":()=>{t.value=!t.value}}),{"action-icon":({active:x})=>x?d:p})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",fontSize:"14px",fontFamily:"monospace",paddingBlockStart:"8px"}},[e("div",null,[B("Image click:")," ",e("strong",{style:{color:a.value?"green":"inherit"}},[a.value?"selected":"idle"])]),e("div",null,[B("Action button:")," ",e("strong",{style:{color:t.value?"#e11d48":"inherit"}},[t.value?"favoured":"idle"])])])])}})},h={parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="link"
  href="/item/details"
  image-aria-label="View item details"
/>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",clickBehavior:"link",href:"#cover-item",imageAriaLabel:"View cover item details"},render:n=>i({name:"LinkModeRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"link",href:"#cover-item"}),null)])}})},A={parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Add to favorites"
>
  <template #pennants>
    <NeoPennant color="yellow">${S}</NeoPennant>
    <NeoPennant color="blue">${S}</NeoPennant>
    <NeoPennant color="red">${S}</NeoPennant>
  </template>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",actionAriaLabel:"Add to favorites"},render:n=>i({name:"WithPennantsRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none",actionAriaLabel:"Add to favorites"}),{pennants:()=>e(ce,null,[e(s,{color:"yellow"},v(o)?o:{default:()=>[o]}),e(s,{color:"blue"},v(o)?o:{default:()=>[o]}),e(s,{color:"red"},v(o)?o:{default:()=>[o]})]),"action-icon":({active:a})=>a?d:p})])}})},g={parameters:{docs:{source:{code:`<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
>
  <template #pennants>
    <template v-for="color in ['yellow', 'blue', 'green', 'purple', 'red']" :key="color">
      <NeoPennant :color="color">${S}</NeoPennant>
    </template>
  </template>
</NeoCoverPanel>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder"},render:n=>i({name:"WithManyPennantsRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none"}),{pennants:()=>e(ce,null,[e(s,{color:"yellow"},v(o)?o:{default:()=>[o]}),e(s,{color:"blue"},v(o)?o:{default:()=>[o]}),e(s,{color:"green"},v(o)?o:{default:()=>[o]}),e(s,{color:"purple"},v(o)?o:{default:()=>[o]}),e(s,{color:"red"},v(o)?o:{default:()=>[o]})])})])}})},b={parameters:{docs:{source:{code:`<NeoCoverPanel
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
</NeoCoverPanel>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",actionAriaLabel:"Remove from favorites",actionActive:!0},render:n=>i({name:"ActionActiveRender",setup(){return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none",actionAriaLabel:"Remove from favorites",actionActive:!0}),{"action-icon":({active:a})=>a?d:p})])}})},P={parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},args:{imageSrc:m,imageAlt:"Cover placeholder",actionAriaLabel:"42 votes"},render:n=>i({name:"WithActionCountRender",setup(){const a=y(42),t=y(!1),x=()=>{t.value=!t.value,a.value=t.value?a.value+1:a.value-1};return()=>e("div",{style:{inlineSize:"160px",padding:"16px"}},[e(r,l(c(n),{clickBehavior:"none",actionAriaLabel:`${a.value} votes`,actionActive:t.value,"onAction-click":x}),{"action-icon":({active:I})=>e("span",{style:{alignItems:"center",color:I?"white":"var(--neo-theme-color)",display:"inline-flex",fontSize:"11px",fontWeight:"700",gap:"2px"}},[I?d:p,a.value])})])}})},C={render:n=>i({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",padding:"16px"}},[le.map(a=>e("div",{key:a,style:{inlineSize:"120px"}},[e(r,l(c(n),{color:a,imageSrc:N(300,450),imageAlt:`Cover placeholder for ${a}`,clickBehavior:"none",actionAriaLabel:"Add to favorites"}),{"action-icon":({active:t})=>t?d:p})]))])}})},k={globals:{backgrounds:"#000"},render:n=>i({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexWrap:"wrap",gap:"12px",padding:"16px"}},[le.map(a=>e("div",{key:a,style:{inlineSize:"120px"}},[e(r,l(c(n),{color:a,imageSrc:N(300,450),imageAlt:`Cover placeholder for ${a}`,clickBehavior:"none",actionAriaLabel:"Add to favorites"}),{"action-icon":({active:t})=>t?d:p})]))])}})};var L,H,w;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(H=f.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var R,z,W,j,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
            fontFamily: 'monospace',
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
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source},description:{story:'The image surface itself is a `<button>` (clickBehavior="action").\nClicking it emits `image-click` — useful for selection, expanding a modal, etc.\nThe floating action button (heart) emits `action-click` independently.\nBoth are demonstrated here with separate visible state.',...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.description}}};var $,M,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var T,_,V;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                                        <NeoPennant color="yellow">{StarPennant}</NeoPennant>
                                        <NeoPennant color="blue">{StarPennant}</NeoPennant>
                                        <NeoPennant color="red">{StarPennant}</NeoPennant>
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
}`,...(V=(_=A.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var E,U,K,Y,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
                                        <NeoPennant color="yellow">{StarPennant}</NeoPennant>
                                        <NeoPennant color="blue">{StarPennant}</NeoPennant>
                                        <NeoPennant color="green">{StarPennant}</NeoPennant>
                                        <NeoPennant color="purple">{StarPennant}</NeoPennant>
                                        <NeoPennant color="red">{StarPennant}</NeoPennant>
                                    </>
          }} />
                    </div>;
      }
    });
  }
}`,...(K=(U=g.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:`Up to 5 pennants sit side-by-side in a single row, anchored to the end (right) edge.
Pennants are absolutely positioned and do not affect panel dimensions.`,...(q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var G,J,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,oe,ae;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,re,ie;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
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
}`,...(ie=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const Ce=["Default","ImageClickAndActionButton","LinkMode","WithPennants","WithManyPennants","ActionActive","WithActionCount","AllColors","AllColorsOnDark"];export{b as ActionActive,C as AllColors,k as AllColorsOnDark,f as Default,u as ImageClickAndActionButton,h as LinkMode,P as WithActionCount,g as WithManyPennants,A as WithPennants,Ce as __namedExportsOrder,Pe as default};
