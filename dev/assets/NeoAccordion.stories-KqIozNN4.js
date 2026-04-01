import{d as t,c as e,m as J,h as a,a as i}from"./iframe-Da9xFhCi.js";import{N as r}from"./NeoAccordion-Cg_nuWrX.js";import{d as Q,a as X}from"./argTypes-VnJZhiy7.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoButton-84VSvbyW.js";import"./useButton-CSX7DRNZ.js";import"./NeoIcon-DKGCrn9N.js";const Z=["small","medium","large"],$=["default","bordered","filled"],{fn:ee}=__STORYBOOK_MODULE_TEST__,se={title:"Molecules/NeoAccordion",component:r,tags:["autodocs"],parameters:{controls:{exclude:["color"]}},argTypes:{...X,...Q,title:{control:"text",table:{category:"Content"}},size:{control:"select",options:Z,description:"Controls header padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:$,description:"`default`: no border, transparent background — suitable for use inside other containers. `bordered`: shows a border around the accordion. `filled`: applies a background color to the header.",table:{category:"Appearance"}},defaultExpanded:{control:"boolean",description:"Whether the accordion starts in the open state on mount. Only applied once; not reactive after mount.",table:{category:"State"}}},args:{title:"Click to expand",size:"medium",variant:"default",defaultExpanded:!1,disabled:!1,onToggle:ee()}},o={parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand">
  <p>This is the accordion content. It can contain any content you want,
     including text, images, or other components.</p>
</NeoAccordion>`}}},render:n=>t({name:"DefaultRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[i("This is the accordion content. It can contain any content you want, including text, images, or other components.")])]})}})},c={args:{defaultExpanded:!0},parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand" default-expanded>
  <p>This accordion starts in the expanded state.</p>
</NeoAccordion>`}}},render:n=>t({name:"ExpandedRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[i("This accordion starts in the expanded state.")])]})}})},s={args:{size:"small"},render:o.render},l={args:{size:"large"},render:o.render},p={args:{variant:"bordered",defaultExpanded:!0},parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand" variant="bordered" default-expanded>
  <p>This is the bordered variant with a visible border around the accordion.</p>
</NeoAccordion>`}}},render:n=>t({name:"BorderedRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[i("This is the bordered variant with a visible border around the accordion.")])]})}})},u={args:{variant:"filled",defaultExpanded:!0},parameters:{docs:{source:{code:`<NeoAccordion title="Click to expand" variant="filled" default-expanded>
  <p>This is the filled variant with a background color.</p>
</NeoAccordion>`}}},render:n=>t({name:"FilledRender",setup(){return()=>e(r,n,{default:()=>[e("p",null,[i("This is the filled variant with a background color.")])]})}})},m={args:{disabled:!0},render:o.render},h={parameters:{docs:{source:{code:`<!-- The icon slot receives { isExpanded } so you can swap icons on state -->
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
</NeoAccordion>`}}},render:n=>t({name:"CustomIconRender",setup(){const f=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[a("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]),d=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[a("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]);return()=>e(r,n,{icon:({isExpanded:v})=>v?d:f,default:()=>e("p",null,[i("This accordion uses custom plus/minus icons instead of the default chevron.")])})}})},x={parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 8px; max-width: 500px;">
  <NeoAccordion title="Section 1" variant="bordered">
    <p>Content for section 1.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 2" variant="bordered">
    <p>Content for section 2. Each section is independent.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 3" variant="bordered">
    <p>Content for section 3. Click to expand or collapse.</p>
  </NeoAccordion>
</div>`}}},render:n=>t({name:"AccordionGroupRender",setup(){const f=[{title:"Section 1",content:"Content for section 1. This can be any content."},{title:"Section 2",content:"Content for section 2. Each section is independent."},{title:"Section 3",content:"Content for section 3. Click to expand or collapse."}];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%",maxWidth:"500px"}},[f.map((d,v)=>e(r,J({key:v},n,{title:d.title,variant:"bordered"}),{default:()=>[e("p",null,[d.content])]}))])}})},g={globals:{backgrounds:"#000"},render:o.render};var A,b,y;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var N,w,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,T,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: Default.render
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,D,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: Default.render
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var B,R,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var O,_,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  args: {
    disabled: true
  },
  render: Default.render
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var L,V,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(V=h.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,K,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,q,H;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: Default.render
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const le=["Default","Expanded","Small","Large","Bordered","Filled","Disabled","CustomIcon","AccordionGroup","OnDark"];export{x as AccordionGroup,p as Bordered,h as CustomIcon,o as Default,m as Disabled,c as Expanded,u as Filled,l as Large,g as OnDark,s as Small,le as __namedExportsOrder,se as default};
