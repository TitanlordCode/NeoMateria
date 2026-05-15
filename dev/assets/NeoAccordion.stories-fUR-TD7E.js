import{d as t,c as e,m as J,h as a,a as s}from"./iframe-CDp9AjhM.js";import{N as r}from"./NeoAccordion-CyfWxZ8A.js";import{d as Q,a as X}from"./argTypes-VnJZhiy7.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoButton-COUnjCyk.js";import"./useButton-DL1fD-hW.js";import"./NeoIcon-Bozdex4T.js";const Z=["small","medium","large"],$=["default","bordered","filled"],{fn:ee}=__STORYBOOK_MODULE_TEST__,ce={title:"Molecules/NeoAccordion",component:r,tags:["autodocs"],parameters:{controls:{exclude:["color"]},snapshot:{viewports:["sm","md","lg","xl"]}},argTypes:{...X,...Q,title:{control:"text",table:{category:"Content"}},size:{control:"select",options:Z,description:"Controls header padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:$,description:"`default`: no border, transparent background — suitable for use inside other containers. `bordered`: shows a border around the accordion. `filled`: applies a background color to the header.",table:{category:"Appearance"}},defaultExpanded:{control:"boolean",description:"Whether the accordion starts in the open state on mount. Only applied once; not reactive after mount.",table:{category:"State"}}},args:{title:"Click to expand",size:"medium",variant:"default",defaultExpanded:!1,disabled:!1,onToggle:ee()}},o={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand">
  <p>This is the accordion content. It can contain any content you want,
     including text, images, or other components.</p>
</NeoAccordion>`}}},render:n=>t({name:"DefaultRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[s("This is the accordion content. It can contain any content you want, including text, images, or other components.")])]})}})},d={tags:["snapshot"],args:{defaultExpanded:!0},parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand" default-expanded>
  <p>This accordion starts in the expanded state.</p>
</NeoAccordion>`}}},render:n=>t({name:"ExpandedRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[s("This accordion starts in the expanded state.")])]})}})},c={tags:["snapshot"],args:{size:"small"},render:o.render},p={tags:["snapshot"],args:{size:"large"},render:o.render},l={tags:["snapshot"],args:{variant:"bordered",defaultExpanded:!0},parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand" variant="bordered" default-expanded>
  <p>This is the bordered variant with a visible border around the accordion.</p>
</NeoAccordion>`}}},render:n=>t({name:"BorderedRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[s("This is the bordered variant with a visible border around the accordion.")])]})}})},u={tags:["snapshot"],args:{variant:"filled",defaultExpanded:!0},parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand" variant="filled" default-expanded>
  <p>This is the filled variant with a background color.</p>
</NeoAccordion>`}}},render:n=>t({name:"FilledRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[s("This is the filled variant with a background color.")])]})}})},m={tags:["snapshot"],args:{disabled:!0},render:o.render},h={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- The icon slot receives { isExpanded } so you can swap icons on state -->
<NeoAccordion title="Click to expand">
  <template #icon="{ isExpanded }">
    <svg v-if="isExpanded" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
    <svg v-else viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </template>
  <p>This accordion uses custom plus/minus icons instead of the default chevron.</p>
</NeoAccordion>`}}},render:n=>t({name:"CustomIconRender",setup(){const f=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[a("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]),i=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[a("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]);return()=>e(r,n,{icon:({isExpanded:v})=>v?i:f,default:()=>e("p",null,[s("This accordion uses custom plus/minus icons instead of the default chevron.")])})}})},g={tags:["no-test"],parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 8px; max-width: 500px;">
  <NeoAccordion title="Section 1" variant="bordered">
    <p>Content for section 1.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 2" variant="bordered">
    <p>Content for section 2. Each section is independent.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 3" variant="bordered">
    <p>Content for section 3. Click to expand or collapse.</p>
  </NeoAccordion>
</div>`}}},render:n=>t({name:"AccordionGroupRender",setup(){const f=[{title:"Section 1",content:"Content for section 1. This can be any content."},{title:"Section 2",content:"Content for section 2. Each section is independent."},{title:"Section 3",content:"Content for section 3. Click to expand or collapse."}];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%",maxWidth:"500px"}},[f.map((i,v)=>e(r,J({key:v},n,{title:i.title,variant:"bordered"}),{default:()=>[e("p",null,[i.content])]}))])}})},x={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:o.render};var A,b,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoAccordion title="Click to expand">
  <p>This is the accordion content. It can contain any content you want,
     including text, images, or other components.</p>
</NeoAccordion>\`
      }
    }
  },
  render: (args: NeoAccordionProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoAccordion {...args}>
                        <p>
                            This is the accordion content. It can contain any content you want, including text,
                            images, or other components.
                        </p>
                    </NeoAccordion>;
      }
    });
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,N,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    defaultExpanded: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoAccordion title="Click to expand" default-expanded>
  <p>This accordion starts in the expanded state.</p>
</NeoAccordion>\`
      }
    }
  },
  render: (args: NeoAccordionProps) => {
    return defineComponent({
      name: 'ExpandedRender',
      setup() {
        return () => <NeoAccordion {...args}>
                        <p>This accordion starts in the expanded state.</p>
                    </NeoAccordion>;
      }
    });
  }
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var k,T,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  },
  render: Default.render
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,D,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  },
  render: Default.render
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var B,R,z;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'bordered',
    defaultExpanded: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoAccordion title="Click to expand" variant="bordered" default-expanded>
  <p>This is the bordered variant with a visible border around the accordion.</p>
</NeoAccordion>\`
      }
    }
  },
  render: (args: NeoAccordionProps) => {
    return defineComponent({
      name: 'BorderedRender',
      setup() {
        return () => <NeoAccordion {...args}>
                        <p>This is the bordered variant with a visible border around the accordion.</p>
                    </NeoAccordion>;
      }
    });
  }
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var O,_,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'filled',
    defaultExpanded: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoAccordion title="Click to expand" variant="filled" default-expanded>
  <p>This is the filled variant with a background color.</p>
</NeoAccordion>\`
      }
    }
  },
  render: (args: NeoAccordionProps) => {
    return defineComponent({
      name: 'FilledRender',
      setup() {
        return () => <NeoAccordion {...args}>
                        <p>This is the filled variant with a background color.</p>
                    </NeoAccordion>;
      }
    });
  }
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var j,F,G;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  },
  render: Default.render
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var L,V,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- The icon slot receives { isExpanded } so you can swap icons on state -->
<NeoAccordion title="Click to expand">
  <template #icon="{ isExpanded }">
    <svg v-if="isExpanded" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
    <svg v-else viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </template>
  <p>This accordion uses custom plus/minus icons instead of the default chevron.</p>
</NeoAccordion>\`
      }
    }
  },
  render: (args: NeoAccordionProps) => {
    return defineComponent({
      name: 'CustomIconRender',
      setup() {
        const plusIcon = h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '16',
          height: '16',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true'
        }, [h('line', {
          x1: '12',
          y1: '5',
          x2: '12',
          y2: '19'
        }), h('line', {
          x1: '5',
          y1: '12',
          x2: '19',
          y2: '12'
        })]);
        const minusIcon = h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '16',
          height: '16',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true'
        }, [h('line', {
          x1: '5',
          y1: '12',
          x2: '19',
          y2: '12'
        })]);
        return () => <NeoAccordion {...args} v-slots={{
          icon: ({
            isExpanded
          }: {
            isExpanded: boolean;
          }) => isExpanded ? minusIcon : plusIcon,
          default: () => <p>This accordion uses custom plus/minus icons instead of the default chevron.</p>
        }} />;
      }
    });
  }
}`,...(W=(V=h.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,K,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; flex-direction: column; gap: 8px; max-width: 500px;">
  <NeoAccordion title="Section 1" variant="bordered">
    <p>Content for section 1.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 2" variant="bordered">
    <p>Content for section 2. Each section is independent.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 3" variant="bordered">
    <p>Content for section 3. Click to expand or collapse.</p>
  </NeoAccordion>
</div>\`
      }
    }
  },
  render: (args: NeoAccordionProps) => {
    return defineComponent({
      name: 'AccordionGroupRender',
      setup() {
        const items = [{
          title: 'Section 1',
          content: 'Content for section 1. This can be any content.'
        }, {
          title: 'Section 2',
          content: 'Content for section 2. Each section is independent.'
        }, {
          title: 'Section 3',
          content: 'Content for section 3. Click to expand or collapse.'
        }];
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
          maxWidth: '500px'
        }}>
                        {items.map((item, index) => <NeoAccordion key={index} {...args} title={item.title} variant="bordered">
                                <p>{item.content}</p>
                            </NeoAccordion>)}
                    </div>;
      }
    });
  }
}`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,q,H;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: Default.render
}`,...(H=(q=x.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const pe=["Default","Expanded","Small","Large","Bordered","Filled","Disabled","CustomIcon","AccordionGroup","OnDark"];export{g as AccordionGroup,l as Bordered,h as CustomIcon,o as Default,m as Disabled,d as Expanded,u as Filled,p as Large,x as OnDark,c as Small,pe as __namedExportsOrder,ce as default};
