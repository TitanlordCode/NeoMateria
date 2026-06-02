import{b as y,d as u,c as e}from"./iframe-D9nyRK5o.js";import{N as a}from"./NeoStat-CVJDaJDK.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const A=["sm","md","lg"],k={title:"Molecules/NeoStat",component:a,tags:["autodocs"],argTypes:{value:{control:"text",table:{category:"Content"},description:"The headline statistic, displayed prominently."},label:{control:"text",table:{category:"Content"},description:"Descriptive caption shown beneath the value."},color:{control:"select",options:y,description:"Accent color applied to the value.",table:{category:"Appearance"}},size:{control:"select",options:A,description:"Controls the font size of the value and label.",table:{category:"Appearance"}}},args:{value:"12,400",label:"Active users",size:"md"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},r={tags:["snapshot"],render:t=>u({name:"DefaultRender",setup(){return()=>e(a,t,null)}}),parameters:{docs:{source:{code:'<NeoStat value="12,400" label="Active users" />'}}}},o={tags:["snapshot"],args:{color:"blue"},render:t=>u({name:"ColoredRender",setup(){return()=>e(a,t,null)}}),parameters:{docs:{source:{code:'<NeoStat value="12,400" label="Active users" color="blue" />'}}}},n={tags:["no-test"],render:()=>u({name:"AllSizesRender",setup(){return()=>e("div",{style:{display:"flex",gap:"48px",alignItems:"flex-end"}},[e(a,{value:"99k",label:"Small",size:"sm",color:"blue"},null),e(a,{value:"99k",label:"Medium",size:"md",color:"blue"},null),e(a,{value:"99k",label:"Large",size:"lg",color:"blue"},null)])}})},s={tags:["no-test"],render:()=>u({name:"StatRowRender",setup(){const t=[{value:"12,400",label:"Active users",color:"blue"},{value:"98.2%",label:"Uptime",color:"green"},{value:"4.9★",label:"Rating",color:"amber"},{value:"2.1s",label:"Load time",color:"purple"}];return()=>e("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"}},[t.map(l=>e(a,{key:l.label,value:l.value,label:l.label,color:l.color},null))])}}),parameters:{docs:{source:{code:`<NeoStat value="12,400" label="Active users" color="blue" />
<NeoStat value="98.2%" label="Uptime" color="green" />
<NeoStat value="4.9★" label="Rating" color="amber" />
<NeoStat value="2.1s" label="Load time" color="purple" />`}}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,b;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,g,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['no-test'],
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
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var N,f,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['no-test'],
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
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const w=["Default","Colored","AllSizes","StatRow"];export{n as AllSizes,o as Colored,r as Default,s as StatRow,w as __namedExportsOrder,k as default};
