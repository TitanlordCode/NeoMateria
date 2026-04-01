import{d as o,c as e,m as u,a as _,b as q}from"./iframe-BNVHVJhn.js";import{g as H}from"./colorShowcase-BzxvNubM.js";import{p as t}from"./placeholder-J2GqGUFJ.js";import{N as a}from"./NeoProgressPanel-DefO340M.js";import{N as M}from"./NeoPennant-Deew9JiW.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-C_2VXNk2.js";import"./NeoProgressBar-CkvocKZK.js";import"./NeoHeadlineTertiary-DkTcmAXh.js";import"./useHeadline-B1vqXKMh.js";const V=q.filter(n=>n!=="white"),ne={title:"Molecules/NeoProgressPanel",component:a,tags:["autodocs"],argTypes:{color:{description:"Theme color for the progress bar fill and border accent.",table:{category:"Appearance"}},value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Drives the width of the progress bar fill.",table:{category:"Content"}},valueLabel:{control:"text",description:"Text displayed below the progress bar (e.g. `'completed'`, `'of total'`, `'pts'`).",table:{category:"Content"}},subtitle:{control:"text",description:"Optional secondary line below the title — e.g. genre, author, or year.",table:{category:"Content"}},rounded:{control:"boolean",description:"Applies rounded corners.",table:{category:"Appearance"}},href:{control:"text",description:"Makes the entire panel a link. When set, the image and title become a single anchor.",table:{category:"Behavior"}},external:{control:"boolean",description:'Opens the link in a new tab and adds `rel="noopener noreferrer"`. Requires `href`.',table:{category:"Behavior"}},imageSrc:{control:"text",description:"URL of the cover image displayed on the left side of the panel.",table:{category:"Content"}},imageAlt:{control:"text",description:"Alt text for the cover image.",table:{category:"Content"}},title:{control:"text",description:"Primary label for the item. Clamped to 2 lines — override via `--NeoProgressPanel-sizing-titleClamp`.",table:{category:"Content"}}},args:{color:"blue",imageSrc:"https://picsum.photos/seed/progresspanel1/200/300",imageAlt:"Cover image",title:"Item Title",value:68,valueLabel:"completed"}},l={render:n=>o({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  value-label="completed"
/>`}}}},s={args:{subtitle:"Action · 2024",imageSrc:t(200,300)},render:n=>o({name:"WithSubtitleRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  subtitle="Action · 2024"
  :value="68"
  value-label="completed"
/>`}}}},i={args:{imageSrc:t(200,300),title:"First Place Entry",subtitle:"Drama · 2024",value:84,valueLabel:"completed"},render:n=>o({name:"WithPennantRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,{pennant:()=>e(M,{color:n.color??"blue"},{default:()=>[e("span",{style:{fontSize:"1rem",fontWeight:"700"}},[_("1")])]})})])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="First Place Entry"
  subtitle="Drama · 2024"
  :value="84"
  value-label="completed"
>
  <template #pennant>
    <NeoPennant color="blue">
      <span style="font-size: 1rem; font-weight: 700">1</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>`}}}},c={args:{imageSrc:t(200,300),href:"#item-details"},render:n=>o({name:"ClickableRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  href="#item-details"
/>`}}}},p={args:{imageSrc:t(200,300),title:"An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice",subtitle:"Adventure · Science Fiction · Thriller · 2024",valueLabel:"of the total target value for this reporting period",value:42},render:n=>o({name:"LongTextRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice"
  subtitle="Adventure · Science Fiction · Thriller · 2024"
  :value="42"
  value-label="of the total target value for this reporting period"
/>`}}}},m={render:()=>o({name:"TopThreeRender",setup(){const n=[{color:"blue",imageSrc:t(200,300),imageAlt:"First place cover",title:"First Place Item",subtitle:"Drama · 2024",value:42,valueLabel:"completed",rank:"1"},{color:"grey",imageSrc:t(200,300),imageAlt:"Second place cover",title:"Second Place Item",subtitle:"Action · 2023",value:31,valueLabel:"completed",rank:"2"},{color:"red",imageSrc:t(200,300),imageAlt:"Third place cover",title:"Third Place Item",subtitle:"Comedy · 2024",value:27,valueLabel:"completed",rank:"3"}];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"12px",inlineSize:"320px",padding:"16px"}},[n.map(r=>e(a,u({key:r.rank},r),{pennant:()=>e(M,{color:r.color},{default:()=>[e("span",{style:{fontSize:"1rem",fontWeight:"700"}},[r.rank])]})}))])}}),parameters:{docs:{source:{code:`<NeoProgressPanel color="blue" title="First Place Item" :value="42" value-label="completed">
  <template #pennant>
    <NeoPennant color="blue">
      <span style="font-size: 1rem; font-weight: 700">1</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>
<NeoProgressPanel color="grey" title="Second Place Item" :value="31" value-label="completed">
  <template #pennant>
    <NeoPennant color="grey">
      <span style="font-size: 1rem; font-weight: 700">2</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>
<NeoProgressPanel color="red" title="Third Place Item" :value="27" value-label="completed">
  <template #pennant>
    <NeoPennant color="red">
      <span style="font-size: 1rem; font-weight: 700">3</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>`}}}},d={render:n=>o({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[V.map(r=>H("NeoProgressPanel",r,e(a,u({key:r},n,{color:r,imageSrc:t(200,300),imageAlt:"Cover placeholder",title:r}),null),"default",!1))])}})},g={globals:{backgrounds:"#000"},render:n=>o({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[V.map(r=>H("NeoProgressPanel",r,e(a,u({key:r},n,{color:r,imageSrc:t(200,300),imageAlt:"Cover placeholder",title:r}),null),"default",!0))])}})};var P,v,b;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressPanel {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  value-label="completed"
/>\`
      }
    }
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    subtitle: 'Action · 2024',
    imageSrc: placeholder(200, 300)
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'WithSubtitleRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressPanel {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  subtitle="Action · 2024"
  :value="68"
  value-label="completed"
/>\`
      }
    }
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,N,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    imageSrc: placeholder(200, 300),
    title: 'First Place Entry',
    subtitle: 'Drama · 2024',
    value: 84,
    valueLabel: 'completed'
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'WithPennantRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressPanel {...args}>
                            {{
              pennant: () => <NeoPennant color={args.color ?? 'blue'}>
                                        <span style={{
                  fontSize: '1rem',
                  fontWeight: '700'
                }}>1</span>
                                    </NeoPennant>
            }}
                        </NeoProgressPanel>
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="First Place Entry"
  subtitle="Drama · 2024"
  :value="84"
  value-label="completed"
>
  <template #pennant>
    <NeoPennant color="blue">
      <span style="font-size: 1rem; font-weight: 700">1</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>\`
      }
    }
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,T,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    imageSrc: placeholder(200, 300),
    href: '#item-details'
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'ClickableRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressPanel {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  href="#item-details"
/>\`
      }
    }
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var k,z,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    imageSrc: placeholder(200, 300),
    title: 'An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice',
    subtitle: 'Adventure · Science Fiction · Thriller · 2024',
    valueLabel: 'of the total target value for this reporting period',
    value: 42
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'LongTextRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px'
        }}>
                        <NeoProgressPanel {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice"
  subtitle="Adventure · Science Fiction · Thriller · 2024"
  :value="42"
  value-label="of the total target value for this reporting period"
/>\`
      }
    }
  }
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var L,I,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return defineComponent({
      name: 'TopThreeRender',
      setup() {
        const items = [{
          color: 'blue' as Color,
          imageSrc: placeholder(200, 300),
          imageAlt: 'First place cover',
          title: 'First Place Item',
          subtitle: 'Drama · 2024',
          value: 42,
          valueLabel: 'completed',
          rank: '1'
        }, {
          color: 'grey' as Color,
          imageSrc: placeholder(200, 300),
          imageAlt: 'Second place cover',
          title: 'Second Place Item',
          subtitle: 'Action · 2023',
          value: 31,
          valueLabel: 'completed',
          rank: '2'
        }, {
          color: 'red' as Color,
          imageSrc: placeholder(200, 300),
          imageAlt: 'Third place cover',
          title: 'Third Place Item',
          subtitle: 'Comedy · 2024',
          value: 27,
          valueLabel: 'completed',
          rank: '3'
        }];
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          inlineSize: '320px',
          padding: '16px'
        }}>
                        {items.map(item => <NeoProgressPanel key={item.rank} {...item}>
                                {{
              pennant: () => <NeoPennant color={item.color}>
                                            <span style={{
                  fontSize: '1rem',
                  fontWeight: '700'
                }}>{item.rank}</span>
                                        </NeoPennant>
            }}
                            </NeoProgressPanel>)}
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoProgressPanel color="blue" title="First Place Item" :value="42" value-label="completed">
  <template #pennant>
    <NeoPennant color="blue">
      <span style="font-size: 1rem; font-weight: 700">1</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>
<NeoProgressPanel color="grey" title="Second Place Item" :value="31" value-label="completed">
  <template #pennant>
    <NeoPennant color="grey">
      <span style="font-size: 1rem; font-weight: 700">2</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>
<NeoProgressPanel color="red" title="Third Place Item" :value="27" value-label="completed">
  <template #pennant>
    <NeoPennant color="red">
      <span style="font-size: 1rem; font-weight: 700">3</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>\`
      }
    }
  }
}`,...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var R,w,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'AllColorsRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxInlineSize: '360px',
          padding: '16px'
        }}>
                        {surfaceColors.map((color: SurfaceColor) => getColorWrapper('NeoProgressPanel', color, <NeoProgressPanel key={color} {...args} color={color} imageSrc={placeholder(200, 300)} imageAlt="Cover placeholder" title={color} />, 'default', false))}
                    </div>;
      }
    });
  }
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,E,O;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'AllColorsOnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxInlineSize: '360px',
          padding: '16px'
        }}>
                        {surfaceColors.map((color: SurfaceColor) => getColorWrapper('NeoProgressPanel', color, <NeoProgressPanel key={color} {...args} color={color} imageSrc={placeholder(200, 300)} imageAlt="Cover placeholder" title={color} />, 'default', true))}
                    </div>;
      }
    });
  }
}`,...(O=(E=g.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const re=["Default","WithSubtitle","WithPennant","Clickable","LongText","TopThree","AllColors","AllColorsOnDark"];export{d as AllColors,g as AllColorsOnDark,c as Clickable,l as Default,p as LongText,m as TopThree,i as WithPennant,s as WithSubtitle,re as __namedExportsOrder,ne as default};
