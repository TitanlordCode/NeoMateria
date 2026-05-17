import{d as t,c as e,m as f,a as ce,b as pe}from"./iframe-DWqQgaTj.js";import{g as oe}from"./colorShowcase-IlMIp6wy.js";import{c as le}from"./createA11yPlay-Ct54RQJR.js";import{p as o}from"./placeholder-CgeahcyT.js";import{N as a}from"./NeoProgressPanel-gb1Ns53T.js";import{N as se}from"./NeoPennant-BnKwMfB0.js";import{a as me}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-BgIyYaiS.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoProgressBar-DVg5e3Qv.js";import"./NeoImage-y18I_-0x.js";import"./NeoHeadlineTertiary-CKjdPUIT.js";import"./useHeadline-DcreqWCb.js";const ie=pe.filter(n=>n!=="white"),Te={title:"Organisms/NeoProgressPanel",component:a,tags:["autodocs"],argTypes:{color:{description:"Theme color for the progress bar fill and border accent.",table:{category:"Appearance"}},value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0–100. Drives the width of the progress bar fill.",table:{category:"Content"}},valueLabel:{control:"text",description:"Text displayed below the progress bar (e.g. `'completed'`, `'of total'`, `'pts'`).",table:{category:"Content"}},subtitle:{control:"text",description:"Optional secondary line below the title — e.g. genre, author, or year.",table:{category:"Content"}},rounded:{control:"boolean",description:"Applies rounded corners.",table:{category:"Appearance"}},href:{control:"text",description:"Makes the entire panel a link. When set, the image and title become a single anchor.",table:{category:"Behavior"}},external:{control:"boolean",description:'Opens the link in a new tab and adds `rel="noopener noreferrer"`. Requires `href`.',table:{category:"Behavior"}},imageSrc:{control:"text",description:"URL of the cover image displayed on the left side of the panel.",table:{category:"Content"}},imageAlt:{control:"text",description:"Alt text for the cover image.",table:{category:"Content"}},title:{control:"text",description:"Primary label for the item. Clamped to 2 lines — override via `--NeoProgressPanel-sizing-titleClamp`.",table:{category:"Content"}},headingTag:{control:"select",options:me,description:"HTML element used for the title. Defaults to `h2`. Adjust to match your page heading hierarchy — e.g. `h3` when the panel is inside a section that already has an `h2`.",table:{category:"Content"}},pennant:{control:!1,description:"Optional single pennant overlaid on the top-right corner of the image. Automatically scaled to fit within 30% of the image width.",table:{category:"Slots"}},decimals:{control:{type:"number",min:0,max:6,step:1},description:"Maximum number of fraction digits to display for the percent value. Trailing zeros are stripped. Defaults to `2`.",table:{category:"Content"}},locale:{control:"text",description:"BCP 47 locale (e.g. `de-DE`) controlling the decimal separator. Defaults to `<html lang>`, then the runtime default.",table:{category:"Content"}}},args:{color:"blue",imageSrc:"https://picsum.photos/seed/progresspanel1/200/300",imageAlt:"Cover image",title:"Item Title",value:68,valueLabel:"completed"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},i={tags:["snapshot"],render:n=>t({name:"DefaultRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  value-label="completed"
/>`}}}},c={tags:["snapshot"],args:{subtitle:"Action · 2024",imageSrc:o(200,300)},render:n=>t({name:"WithSubtitleRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  subtitle="Action · 2024"
  :value="68"
  value-label="completed"
/>`}}}},p={tags:["snapshot"],args:{imageSrc:o(200,300),title:"First Place Entry",subtitle:"Drama · 2024",value:84,valueLabel:"completed"},render:n=>t({name:"WithPennantRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,{pennant:()=>e(se,{color:n.color??"blue"},{default:()=>[e("span",{style:{fontSize:"1rem",fontWeight:"700"}},[ce("1")])]})})])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
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
</NeoProgressPanel>`}}}},m={tags:["snapshot"],args:{imageSrc:o(200,300),href:"#item-details"},render:n=>t({name:"ClickableRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  href="#item-details"
/>`}}}},d={tags:["snapshot"],args:{imageSrc:o(200,300),title:"An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice",subtitle:"Adventure · Science Fiction · Thriller · 2024",valueLabel:"of the total target value for this reporting period",value:42},render:n=>t({name:"LongTextRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice"
  subtitle="Adventure · Science Fiction · Thriller · 2024"
  :value="42"
  value-label="of the total target value for this reporting period"
/>`}}}},g={tags:["snapshot"],render:()=>t({name:"TopThreeRender",setup(){const n=[{color:"blue",imageSrc:o(200,300),imageAlt:"First place cover",title:"First Place Item",subtitle:"Drama · 2024",value:42,valueLabel:"completed",rank:"1"},{color:"grey",imageSrc:o(200,300),imageAlt:"Second place cover",title:"Second Place Item",subtitle:"Action · 2023",value:31,valueLabel:"completed",rank:"2"},{color:"red",imageSrc:o(200,300),imageAlt:"Third place cover",title:"Third Place Item",subtitle:"Comedy · 2024",value:27,valueLabel:"completed",rank:"3"}];return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"12px",inlineSize:"320px",padding:"16px"}},[n.map(r=>e(a,f({key:r.rank},r),{pennant:()=>e(se,{color:r.color},{default:()=>[e("span",{style:{fontSize:"1rem",fontWeight:"700"}},[r.rank])]})}))])}}),parameters:{docs:{source:{code:`<NeoProgressPanel color="blue" title="First Place Item" :value="42" value-label="completed">
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
</NeoProgressPanel>`}}}},u={tags:["snapshot"],args:{value:73.456,decimals:2,valueLabel:"completed"},render:n=>t({name:"WithDecimalsRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="73.456"
  :decimals="2"
  value-label="completed"
/>`}}}},P={tags:["snapshot"],args:{value:73.456,decimals:2,locale:"de-DE",valueLabel:"erledigt"},render:n=>t({name:"GermanLocaleRender",setup(){return()=>e("div",{style:{inlineSize:"320px",padding:"16px"}},[e(a,n,null)])}}),parameters:{docs:{source:{code:`<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="73.456"
  :decimals="2"
  locale="de-DE"
  value-label="erledigt"
/>`}}}},v={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{title:"عنوان العنصر",valueLabel:"مكتمل"}},l={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:n=>t({name:"AllColorsRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[ie.map(r=>oe("NeoProgressPanel",r,e(a,f({key:r},n,{color:r,imageSrc:o(200,300),imageAlt:"Cover placeholder",title:r}),null),"default",!1))])}})},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:n=>t({name:"AllColorsOnDarkRender",setup(){return()=>e("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"360px",padding:"16px"}},[ie.map(r=>oe("NeoProgressPanel",r,e(a,f({key:r},n,{color:r,imageSrc:o(200,300),imageAlt:"Cover placeholder",title:r}),null),"default",!0))])}})},h={...l,tags:["!dev","test-only"],play:le()},b={...s,tags:["!dev","test-only"],play:le()};var x,y,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var C,S,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var T,D,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var L,z,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var I,R,W;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var B,E,F;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,H,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    value: 73.456,
    decimals: 2,
    valueLabel: 'completed'
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'WithDecimalsRender',
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
  :value="73.456"
  :decimals="2"
  value-label="completed"
/>\`
      }
    }
  }
}`,...(G=(H=u.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var M,V,_;P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    value: 73.456,
    decimals: 2,
    locale: 'de-DE',
    valueLabel: 'erledigt'
  },
  render: (args: NeoProgressPanelProps) => {
    return defineComponent({
      name: 'GermanLocaleRender',
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
  :value="73.456"
  :decimals="2"
  locale="de-DE"
  value-label="erledigt"
/>\`
      }
    }
  }
}`,...(_=(V=P.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var j,q,U;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(q=v.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var J,K,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,ae,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const De=["Default","WithSubtitle","WithPennant","Clickable","LongText","TopThree","WithDecimals","GermanLocale","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{l as AllColors,h as AllColorsA11y,s as AllColorsOnDark,b as AllColorsOnDarkA11y,m as Clickable,i as Default,P as GermanLocale,d as LongText,v as RTL,g as TopThree,u as WithDecimals,p as WithPennant,c as WithSubtitle,De as __namedExportsOrder,Te as default};
