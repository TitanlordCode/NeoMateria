import{b as A,d as u,c as e}from"./iframe-Da9xFhCi.js";import{N as l}from"./NeoStat-BBHh13x2.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const R=["sm","md","lg"],w={title:"Molecules/NeoStat",component:l,tags:["autodocs"],argTypes:{value:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},color:{control:"select",options:A,description:"Accent color applied to the value.",table:{category:"Appearance"}},size:{control:"select",options:R,description:"Controls the font size of the value and label.",table:{category:"Appearance"}}},args:{value:"12,400",label:"Active users",size:"md"}},o={render:a=>u({name:"DefaultRender",setup(){return()=>e(l,a,null)}}),parameters:{docs:{source:{code:'<NeoStat value="12,400" label="Active users" />'}}}},n={args:{color:"blue"},render:a=>u({name:"ColoredRender",setup(){return()=>e(l,a,null)}}),parameters:{docs:{source:{code:'<NeoStat value="12,400" label="Active users" color="blue" />'}}}},t={render:()=>u({name:"AllSizesRender",setup(){return()=>e("div",{style:{display:"flex",gap:"48px",alignItems:"flex-end"}},[e(l,{value:"99k",label:"Small",size:"sm",color:"blue"},null),e(l,{value:"99k",label:"Medium",size:"md",color:"blue"},null),e(l,{value:"99k",label:"Large",size:"lg",color:"blue"},null)])}})},s={render:()=>u({name:"StatRowRender",setup(){const a=[{value:"12,400",label:"Active users",color:"blue"},{value:"98.2%",label:"Uptime",color:"green"},{value:"4.9★",label:"Rating",color:"amber"},{value:"2.1s",label:"Load time",color:"purple"}];return()=>e("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"}},[a.map(r=>e(l,{key:r.label,value:r.value,label:r.label,color:r.color},null))])}}),parameters:{docs:{source:{code:`<NeoStat value="12,400" label="Active users" color="blue" />
<NeoStat value="98.2%" label="Uptime" color="green" />
<NeoStat value="4.9★" label="Rating" color="amber" />
<NeoStat value="2.1s" label="Load time" color="purple" />`}}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: NeoStatProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoStat {...args} />;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoStat value="12,400" label="Active users" />\`
      }
    }
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,b;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'blue'
  },
  render: (args: NeoStatProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoStat {...args} />;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoStat value="12,400" label="Active users" color="blue" />\`
      }
    }
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,S,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return defineComponent({
      name: 'AllSizesRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'flex-end'
        }}>
                        <NeoStat value="99k" label="Small" size="sm" color="blue" />
                        <NeoStat value="99k" label="Medium" size="md" color="blue" />
                        <NeoStat value="99k" label="Large" size="lg" color="blue" />
                    </div>;
      }
    });
  }
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var N,f,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return defineComponent({
      name: 'StatRowRender',
      setup() {
        const stats = [{
          value: '12,400',
          label: 'Active users',
          color: 'blue'
        }, {
          value: '98.2%',
          label: 'Uptime',
          color: 'green'
        }, {
          value: '4.9★',
          label: 'Rating',
          color: 'amber'
        }, {
          value: '2.1s',
          label: 'Load time',
          color: 'purple'
        }];
        return () => <div style={{
          display: 'flex',
          gap: '48px',
          flexWrap: 'wrap'
        }}>
                        {stats.map(stat => <NeoStat key={stat.label} value={stat.value} label={stat.label} color={stat.color as never} />)}
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoStat value="12,400" label="Active users" color="blue" />
<NeoStat value="98.2%" label="Uptime" color="green" />
<NeoStat value="4.9★" label="Rating" color="amber" />
<NeoStat value="2.1s" label="Load time" color="purple" />\`
      }
    }
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const L=["Default","Colored","AllSizes","StatRow"];export{t as AllSizes,n as Colored,o as Default,s as StatRow,L as __namedExportsOrder,w as default};
