import{d as o,c as e,m as h,a as ne,b as re}from"./iframe-BYCYRk6r.js";import{g as Y}from"./colorShowcase-CSIWNWxO.js";import{c as Z}from"./createA11yPlay-B3s8m8FR.js";import{p as t}from"./placeholder-CgeahcyT.js";import{N as a}from"./NeoProgressPanel-BgNoY6vc.js";import{N as $}from"./NeoPennant-DkDoZ-O7.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-zu59xchv.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-DzLPkA0L.js";import"./NeoProgressBar-BveoRa3N.js";import"./NeoHeadlineTertiary-B2uexvUd.js";import"./useHeadline-CyeocJ_C.js";const ee=re.filter(n=>n!=="white"),ve={title:"Organisms/NeoProgressPanel",component:a,tags:["autodocs"],argTypes:{color:{description:"Theme color for the progress bar fill and border accent.",table:{category:"Appearance"}},value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Drives the width of the progress bar fill.",table:{category:"Content"}},valueLabel:{control:"text",description:"Text displayed below the progress bar (e.g. `'completed'`, `'of total'`, `'pts'`).",table:{category:"Content"}},subtitle:{control:"text",description:"Optional secondary line below the title — e.g. genre, author, or year.",table:{category:"Content"}},rounded:{control:"boolean",description:"Applies rounded corners.",table:{category:"Appearance"}},href:{control:"text",description:"Makes the entire panel a link. When set, the image and title become a single anchor.",table:{category:"Behavior"}},external:{control:"boolean",description:'Opens the link in a new tab and adds `rel="noopener noreferrer"`. Requires `href`.',table:{category:"Behavior"}},imageSrc:{control:"text",description:"URL of the cover image displayed on the left side of the panel.",table:{category:"Content"}},imageAlt:{control:"text",description:"Alt text for the cover image.",table:{category:"Content"}},title:{control:"text",description:"Primary label for the item. Clamped to 2 lines — override via `--NeoProgressPanel-sizing-titleClamp`.",table:{category:"Content"}},pennant:{control:!1,description:"Optional single pennant overlaid on the top-right corner of the image. Automatically scaled to fit within 30% of the image width.",table:{category:"Slots"}}},args:{color:"blue",imageSrc:"https://picsum.photos/seed/progresspanel1/200/300",imageAlt:"Cover image",title:"Item Title",value:68,valueLabel:"completed"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},i={tags:["snapshot"],render:n=>o({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  value-label="completed"
/>`}}}},p={tags:["snapshot"],args:{subtitle:"Action · 2024",imageSrc:t(200,300)},render:n=>o({name:"WithSubtitleRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  subtitle="Action · 2024"
  :value="68"
  value-label="completed"
/>`}}}},c={tags:["snapshot"],args:{imageSrc:t(200,300),title:"First Place Entry",subtitle:"Drama · 2024",value:84,valueLabel:"completed"},render:n=>o({name:"WithPennantRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,{pennant:()=>e($,{color:n.color??"blue"},{default:()=>[e("span",{style:{fontSize:"1rem",fontWeight:"700"}},[ne("1")])]})})])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
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
</NeoProgressPanel>`}}}},m={tags:["snapshot"],args:{imageSrc:t(200,300),href:"#item-details"},render:n=>o({name:"ClickableRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  href="#item-details"
/>`}}}},d={tags:["snapshot"],args:{imageSrc:t(200,300),title:"An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice",subtitle:"Adventure · Science Fiction · Thriller · 2024",valueLabel:"of the total target value for this reporting period",value:42},render:n=>o({name:"LongTextRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice"
  subtitle="Adventure · Science Fiction · Thriller · 2024"
  :value="42"
  value-label="of the total target value for this reporting period"
/>`}}}},g={tags:["snapshot"],render:()=>o({name:"TopThreeRender",setup(){const n=[{color:"blue",imageSrc:t(200,300),imageAlt:"First place cover",title:"First Place Item",subtitle:"Drama · 2024",value:42,valueLabel:"completed",rank:"1"},{color:"grey",imageSrc:t(200,300),imageAlt:"Second place cover",title:"Second Place Item",subtitle:"Action · 2023",value:31,valueLabel:"completed",rank:"2"},{color:"red",imageSrc:t(200,300),imageAlt:"Third place cover",title:"Third Place Item",subtitle:"Comedy · 2024",value:27,valueLabel:"completed",rank:"3"}];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"12px",inlineSize:"320px",padding:"16px"}},[n.map(r=>e(a,h({key:r.rank},r),{pennant:()=>e($,{color:r.color},{default:()=>[e("span",{style:{fontSize:"1rem",fontWeight:"700"}},[r.rank])]})}))])}}),parameters:{docs:{source:{code:`<NeoProgressPanel color="blue" title="First Place Item" :value="42" value-label="completed">
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
</NeoProgressPanel>`}}}},u={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{title:"عنوان العنصر",valueLabel:"مكتمل"}},l={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:n=>o({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[ee.map(r=>Y("NeoProgressPanel",r,e(a,h({key:r},n,{color:r,imageSrc:t(200,300),imageAlt:"Cover placeholder",title:r}),null),"default",!1))])}})},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:n=>o({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[ee.map(r=>Y("NeoProgressPanel",r,e(a,h({key:r},n,{color:r,imageSrc:t(200,300),imageAlt:"Cover placeholder",title:r}),null),"default",!0))])}})},P={...l,tags:["!dev","test-only"],play:Z()},v={...s,tags:["!dev","test-only"],play:Z()};var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,N,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,A,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var k,D,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(z=(D=m.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var L,w,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var R,W,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(B=(W=g.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,O,E;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    title: 'عنوان العنصر',
    valueLabel: 'مكتمل'
  }
}`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var H,V,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
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
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,M,U;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(U=(M=s.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var j,G,J;P.parameters={...P.parameters,docs:{...(j=P.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(J=(G=P.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const he=["Default","WithSubtitle","WithPennant","Clickable","LongText","TopThree","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{l as AllColors,P as AllColorsA11y,s as AllColorsOnDark,v as AllColorsOnDarkA11y,m as Clickable,i as Default,d as LongText,u as RTL,g as TopThree,c as WithPennant,p as WithSubtitle,he as __namedExportsOrder,ve as default};
