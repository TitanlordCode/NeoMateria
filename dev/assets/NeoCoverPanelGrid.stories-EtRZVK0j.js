import{d as u,c as n,r as B,F as ae,i as ce}from"./iframe-DWqQgaTj.js";import{p as m}from"./placeholder-CgeahcyT.js";import{N as s}from"./NeoCoverPanelGrid-Dc38E3vt.js";import{N as c}from"./NeoCoverPanel-Beun7tJz.js";import{N as G}from"./NeoPennant-BnKwMfB0.js";import{S as A}from"./defaultIcons-BlhkR5yW.js";import"./preload-helper-Dp1pzeXC.js";import"./NeoSection-CrIeU2N1.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-y18I_-0x.js";import"./iconStrings-DsK5_d8D.js";const se=["small","medium","large"];function l(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!ce(r)}const we={title:"Organisms/NeoCoverPanelGrid",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"\nA responsive grid layout for `NeoCoverPanel` items. Uses CSS `auto-fill` with a `minmax` column constraint — the grid drops columns as the container narrows, but never exceeds `columns`.\n\n**How `columns` and `minColumnWidth` interact:**\nThe grid tries to fill as many columns as possible. `minColumnWidth` is the floor — a column will never be narrower than this value. `columns` is the ceiling — the grid will never add more columns than this even when space allows.\n\nSet `minColumnWidth` based on the minimum readable size of your content. Lower values produce more columns at medium widths.\n                "}},controls:{exclude:["color"]}},argTypes:{columns:{control:{type:"number",min:2,max:8,step:1},description:"Maximum number of columns at full container width. Works with `minColumnWidth` — see component docs for full explanation.",table:{category:"Layout"}},minColumnWidth:{control:{type:"number",min:80,max:400,step:10},description:"Minimum pixel width each column must be before the grid drops a column. Defaults to `160`.",table:{category:"Layout"}},gap:{control:"select",options:se,description:"Gap between grid items. `small` = `--neo-gap-sm`, `medium` = `--neo-gap-md`, `large` = `--neo-gap-lg`.",table:{category:"Layout"}}},args:{columns:4,minColumnWidth:160,gap:"medium"}},i=["#64748b","#475569","#334155","#6366f1","#8b5cf6","#ec4899","#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6"],g=Array.from({length:12},(r,o)=>({imageSrc:m(300,450,i[o%i.length]),imageAlt:`Cover ${o+1}`,title:`Item ${o+1}`,color:"blue"})),de=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},null)]),ue=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},null)]),ge=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},null)]),pe=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},null)]),f={tags:["snapshot"],render:r=>u({name:"DefaultRender",setup(){return()=>{let o;return n(s,r,l(o=g.map(e=>n(c,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?o:{default:()=>[o]})}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},N={tags:["snapshot"],args:{columns:2},render:r=>u({name:"TwoColumnsRender",setup(){return()=>{let o;return n("div",{style:{padding:"16px"}},[n(s,r,l(o=g.slice(0,6).map(e=>n(c,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?o:{default:()=>[o]})])}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="2" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},S={tags:["snapshot"],args:{columns:6,minColumnWidth:120},render:r=>u({name:"SixColumnsRender",setup(){return()=>{let o;return n("div",{style:{padding:"16px"}},[n(s,r,l(o=g.map(e=>n(c,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title,rounded:!0},null)))?o:{default:()=>[o]})])}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="6" :min-column-width="120" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  />
</NeoCoverPanelGrid>`}}}},k={tags:["snapshot"],render:r=>{const o=[{rank:"yellow",platform:"blue"},{rank:"yellow",platform:"blueGrey"},{rank:"yellow",platform:"purple"},{rank:"grey",platform:"red"},{rank:"grey",platform:"blue"},{rank:"grey",platform:"green"},{rank:"grey",platform:"blueGrey"},{rank:"grey",platform:"purple"}];return u({name:"WithPennantsRender",setup(){return()=>{let e;return n(s,r,l(e=g.slice(0,8).map((d,v)=>n(c,{key:d.imageSrc,color:"blue",imageSrc:d.imageSrc,imageAlt:d.imageAlt,title:d.title,rounded:!0},{pennants:()=>n(ae,null,[n(G,{color:o[v].platform},l(A)?A:{default:()=>[A]}),n(G,{color:o[v].rank},{default:()=>[v+1]})])})))?e:{default:()=>[e]})}}})},parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="(item, index) in items"
    :key="item.id"
    color="blue"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  >
    <template #pennants>
      <!-- Platform badge -->
      <NeoPennant color="blue"><PlatformIcon /></NeoPennant>
      <!-- Rank badge -->
      <NeoPennant color="yellow">{{ index + 1 }}</NeoPennant>
    </template>
  </NeoCoverPanel>
</NeoCoverPanelGrid>`}}}},C={tags:["no-test"],render:r=>{const o=[{imageSrc:m(300,450,i[0]),imageAlt:"Cover 1",title:"Item 1",color:"blue",rounded:!0,pennants:[{color:"blue",content:"star"},{color:"yellow",content:"number",rank:1}],action:"favorite"},{imageSrc:m(300,450,i[1]),imageAlt:"Cover 2",title:"Item 2",color:"purple",rounded:!0,pennants:[{color:"yellow",content:"number",rank:2}],action:"bookmark"},{imageSrc:m(300,450,i[2]),imageAlt:"Cover 3",title:"Item 3",color:"green",rounded:!0,pennants:[{color:"green",content:"star"},{color:"grey",content:"number",rank:3}],action:"favorite"},{imageSrc:m(300,450,i[3]),imageAlt:"Cover 4",title:"Item 4",color:"indigo",pennants:[{color:"red",content:"star"}]},{imageSrc:m(300,450,i[4]),imageAlt:"Cover 5",title:"Item 5",color:"red",rounded:!0,action:"favorite"},{imageSrc:m(300,450,i[5]),imageAlt:"Cover 6",title:"Item 6",color:"pink",pennants:[{color:"purple",content:"star"},{color:"pink",content:"star"},{color:"grey",content:"number",rank:6}],action:"bookmark"},{imageSrc:m(300,450,i[6]),imageAlt:"Cover 7",title:"Item 7",color:"orange",rounded:!0},{imageSrc:m(300,450,i[7]),imageAlt:"Cover 8",title:"Item 8",color:"teal",pennants:[{color:"teal",content:"number",rank:8}],action:"favorite"}];return u({name:"MixedContentRender",setup(){const e=B(new Set),d=B(new Set),v=a=>{const t=new Set(e.value);t.has(a)?t.delete(a):t.add(a),e.value=t},ie=a=>{const t=new Set(d.value);t.has(a)?t.delete(a):t.add(a),d.value=t},x=a=>a?{pennants:()=>n(ae,null,[a.map((t,p)=>n(G,{key:p,color:t.color},{default:()=>[t.content==="star"?A:t.rank]}))])}:{};return()=>{let a;return n(s,r,l(a=o.map((t,p)=>{let w;if(t.action){const P=t.action==="favorite",le=P?e.value.has(p):d.value.has(p),me=P?()=>v(p):()=>ie(p);return n(c,{key:t.imageSrc,color:t.color,imageSrc:t.imageSrc,imageAlt:t.imageAlt,title:t.title,rounded:t.rounded,clickBehavior:"action",actionAriaLabel:P?"Add to favorites":"Bookmark",actionActive:le,"onAction-click":me},{...x(t.pennants),"action-icon":({active:I})=>P?I?ue:de:I?pe:ge})}return n(c,{key:t.imageSrc,color:t.color,imageSrc:t.imageSrc,imageAlt:t.imageAlt,title:t.title,rounded:t.rounded,clickBehavior:"none"},l(w=x(t.pennants))?w:{default:()=>[w]})}))?a:{default:()=>[a]})}}})},parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium">
  <!-- Plain panel — no extras -->
  <NeoCoverPanel color="orange" :image-src="..." image-alt="..." title="..." rounded />

  <!-- With pennants only -->
  <NeoCoverPanel color="indigo" :image-src="..." image-alt="..." title="...">
    <template #pennants>
      <NeoPennant color="red"><StarIcon /></NeoPennant>
    </template>
  </NeoCoverPanel>

  <!-- With pennants + favorite action -->
  <NeoCoverPanel
    color="blue"
    :image-src="..."
    image-alt="..."
    title="..."
    rounded
    click-behavior="action"
    action-aria-label="Add to favorites"
    :action-active="isFavorited"
    @action-click="toggleFavorite"
  >
    <template #pennants>
      <NeoPennant color="blue"><StarIcon /></NeoPennant>
      <NeoPennant color="yellow">1</NeoPennant>
    </template>
    <template #action-icon="{ active }">
      <HeartFilledIcon v-if="active" />
      <HeartIcon v-else />
    </template>
  </NeoCoverPanel>

  <!-- With bookmark action -->
  <NeoCoverPanel
    color="purple"
    :image-src="..."
    image-alt="..."
    title="..."
    rounded
    click-behavior="action"
    action-aria-label="Bookmark"
    :action-active="isBookmarked"
    @action-click="toggleBookmark"
  >
    <template #action-icon="{ active }">
      <BookmarkFilledIcon v-if="active" />
      <BookmarkIcon v-else />
    </template>
  </NeoCoverPanel>
</NeoCoverPanelGrid>`}}}},h={tags:["no-test"],args:{gap:"large"},render:r=>u({name:"LargeGapRender",setup(){return()=>{let o;return n(s,r,l(o=g.slice(0,8).map(e=>n(c,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?o:{default:()=>[o]})}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="large">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},b={tags:["snapshot"],args:{section:{fullWidth:!0}},render:r=>u({name:"FullWidthRender",setup(){return()=>{let o;return n(s,r,l(o=g.map(e=>n(c,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?o:{default:()=>[o]})}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium" :section="{fullWidth: true}">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},y={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<div class="u-onDark">
  <NeoCoverPanelGrid :columns="4" gap="medium">
    <NeoCoverPanel
      v-for="item in items"
      :key="item.id"
      :color="item.color"
      :image-src="item.imageSrc"
      :image-alt="item.imageAlt"
      :title="item.title"
      rounded
    />
  </NeoCoverPanelGrid>
</div>`}}},render:r=>u({name:"OnDarkRender",setup(){return()=>{let o;return n("div",{class:"u-onDark",style:{padding:"16px"}},[n(s,r,l(o=g.map(e=>n(c,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title,rounded:!0},null)))?o:{default:()=>[o]})])}}})};var F,W,R;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoCoverPanelGrid {...args}>
                        {sampleItems.map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} />)}
                    </NeoCoverPanelGrid>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(R=(W=f.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var L,z,D;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: 2
  },
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'TwoColumnsRender',
      setup() {
        return () => <div style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
                            {sampleItems.slice(0, 6).map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} />)}
                        </NeoCoverPanelGrid>
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="2" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(D=(z=N.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var _,M,H;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: 6,
    minColumnWidth: 120
  },
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'SixColumnsRender',
      setup() {
        return () => <div style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
                            {sampleItems.map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} rounded />)}
                        </NeoCoverPanelGrid>
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="6" :min-column-width="120" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  />
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(H=(M=S.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var O,T,j,V,$;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoCoverPanelGridProps) => {
    const pennantConfigs: {
      rank: Color;
      platform: Color;
    }[] = [{
      rank: 'yellow',
      platform: 'blue'
    }, {
      rank: 'yellow',
      platform: 'blueGrey'
    }, {
      rank: 'yellow',
      platform: 'purple'
    }, {
      rank: 'grey',
      platform: 'red'
    }, {
      rank: 'grey',
      platform: 'blue'
    }, {
      rank: 'grey',
      platform: 'green'
    }, {
      rank: 'grey',
      platform: 'blueGrey'
    }, {
      rank: 'grey',
      platform: 'purple'
    }];
    return defineComponent({
      name: 'WithPennantsRender',
      setup() {
        return () => <NeoCoverPanelGrid {...args}>
                        {sampleItems.slice(0, 8).map((item, index) => <NeoCoverPanel key={item.imageSrc} color="blue" imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} rounded>
                                {{
              pennants: () => <>
                                            <NeoPennant color={pennantConfigs[index].platform}>{StarIcon}</NeoPennant>
                                            <NeoPennant color={pennantConfigs[index].rank}>{index + 1}</NeoPennant>
                                        </>
            }}
                            </NeoCoverPanel>)}
                    </NeoCoverPanelGrid>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="(item, index) in items"
    :key="item.id"
    color="blue"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  >
    <template #pennants>
      <!-- Platform badge -->
      <NeoPennant color="blue"><PlatformIcon /></NeoPennant>
      <!-- Rank badge -->
      <NeoPennant color="yellow">{{ index + 1 }}</NeoPennant>
    </template>
  </NeoCoverPanel>
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(j=(T=k.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:`Pennants let you attach small colored badges to the top edge of each panel.
Here each panel shows a rank badge (1–8) and a colored platform indicator.
Mix pennant colors and counts per item — up to 5 fit comfortably on a standard-width panel.`,...($=(V=k.parameters)==null?void 0:V.docs)==null?void 0:$.description}}};var E,U,q,J,K;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['no-test'],
  render: (args: NeoCoverPanelGridProps) => {
    type RichItem = {
      imageSrc: string;
      imageAlt: string;
      title: string;
      color: Color;
      rounded?: boolean;
      pennants?: {
        color: Color;
        content: 'star' | 'number';
        rank?: number;
      }[];
      action?: 'favorite' | 'bookmark';
    };
    const richItems: RichItem[] = [{
      imageSrc: placeholder(300, 450, sampleColors[0]),
      imageAlt: 'Cover 1',
      title: 'Item 1',
      color: 'blue',
      rounded: true,
      pennants: [{
        color: 'blue',
        content: 'star'
      }, {
        color: 'yellow',
        content: 'number',
        rank: 1
      }],
      action: 'favorite'
    }, {
      imageSrc: placeholder(300, 450, sampleColors[1]),
      imageAlt: 'Cover 2',
      title: 'Item 2',
      color: 'purple',
      rounded: true,
      pennants: [{
        color: 'yellow',
        content: 'number',
        rank: 2
      }],
      action: 'bookmark'
    }, {
      imageSrc: placeholder(300, 450, sampleColors[2]),
      imageAlt: 'Cover 3',
      title: 'Item 3',
      color: 'green',
      rounded: true,
      pennants: [{
        color: 'green',
        content: 'star'
      }, {
        color: 'grey',
        content: 'number',
        rank: 3
      }],
      action: 'favorite'
    }, {
      imageSrc: placeholder(300, 450, sampleColors[3]),
      imageAlt: 'Cover 4',
      title: 'Item 4',
      color: 'indigo',
      pennants: [{
        color: 'red',
        content: 'star'
      }]
    }, {
      imageSrc: placeholder(300, 450, sampleColors[4]),
      imageAlt: 'Cover 5',
      title: 'Item 5',
      color: 'red',
      rounded: true,
      action: 'favorite'
    }, {
      imageSrc: placeholder(300, 450, sampleColors[5]),
      imageAlt: 'Cover 6',
      title: 'Item 6',
      color: 'pink',
      pennants: [{
        color: 'purple',
        content: 'star'
      }, {
        color: 'pink',
        content: 'star'
      }, {
        color: 'grey',
        content: 'number',
        rank: 6
      }],
      action: 'bookmark'
    }, {
      imageSrc: placeholder(300, 450, sampleColors[6]),
      imageAlt: 'Cover 7',
      title: 'Item 7',
      color: 'orange',
      rounded: true
    }, {
      imageSrc: placeholder(300, 450, sampleColors[7]),
      imageAlt: 'Cover 8',
      title: 'Item 8',
      color: 'teal',
      pennants: [{
        color: 'teal',
        content: 'number',
        rank: 8
      }],
      action: 'favorite'
    }];
    return defineComponent({
      name: 'MixedContentRender',
      setup() {
        const favorites = ref<Set<number>>(new Set());
        const bookmarks = ref<Set<number>>(new Set());
        const toggleFavorite = (index: number) => {
          const updated = new Set(favorites.value);
          if (updated.has(index)) {
            updated.delete(index);
          } else {
            updated.add(index);
          }
          favorites.value = updated;
        };
        const toggleBookmark = (index: number) => {
          const updated = new Set(bookmarks.value);
          if (updated.has(index)) {
            updated.delete(index);
          } else {
            updated.add(index);
          }
          bookmarks.value = updated;
        };
        const renderPennants = (pennants: RichItem['pennants']) => {
          if (!pennants) return {};
          return {
            pennants: () => <>
                                {pennants.map((pennant, pennantIndex) => <NeoPennant key={pennantIndex} color={pennant.color}>
                                        {pennant.content === 'star' ? StarIcon : pennant.rank}
                                    </NeoPennant>)}
                            </>
          };
        };
        return () => <NeoCoverPanelGrid {...args}>
                        {richItems.map((item, index) => {
            if (item.action) {
              const isFavorite = item.action === 'favorite';
              const isActive = isFavorite ? favorites.value.has(index) : bookmarks.value.has(index);
              const handleClick = isFavorite ? () => toggleFavorite(index) : () => toggleBookmark(index);
              return <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} rounded={item.rounded} clickBehavior="action" actionAriaLabel={isFavorite ? 'Add to favorites' : 'Bookmark'} actionActive={isActive} onAction-click={handleClick}>
                                        {{
                  ...renderPennants(item.pennants),
                  'action-icon': ({
                    active
                  }: {
                    active: boolean;
                  }) => isFavorite ? active ? HeartFilledIcon : HeartIcon : active ? BookmarkFilledIcon : BookmarkIcon
                }}
                                    </NeoCoverPanel>;
            }
            return <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} rounded={item.rounded} clickBehavior="none">
                                    {renderPennants(item.pennants)}
                                </NeoCoverPanel>;
          })}
                    </NeoCoverPanelGrid>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="4" gap="medium">
  <!-- Plain panel — no extras -->
  <NeoCoverPanel color="orange" :image-src="..." image-alt="..." title="..." rounded />

  <!-- With pennants only -->
  <NeoCoverPanel color="indigo" :image-src="..." image-alt="..." title="...">
    <template #pennants>
      <NeoPennant color="red"><StarIcon /></NeoPennant>
    </template>
  </NeoCoverPanel>

  <!-- With pennants + favorite action -->
  <NeoCoverPanel
    color="blue"
    :image-src="..."
    image-alt="..."
    title="..."
    rounded
    click-behavior="action"
    action-aria-label="Add to favorites"
    :action-active="isFavorited"
    @action-click="toggleFavorite"
  >
    <template #pennants>
      <NeoPennant color="blue"><StarIcon /></NeoPennant>
      <NeoPennant color="yellow">1</NeoPennant>
    </template>
    <template #action-icon="{ active }">
      <HeartFilledIcon v-if="active" />
      <HeartIcon v-else />
    </template>
  </NeoCoverPanel>

  <!-- With bookmark action -->
  <NeoCoverPanel
    color="purple"
    :image-src="..."
    image-alt="..."
    title="..."
    rounded
    click-behavior="action"
    action-aria-label="Bookmark"
    :action-active="isBookmarked"
    @action-click="toggleBookmark"
  >
    <template #action-icon="{ active }">
      <BookmarkFilledIcon v-if="active" />
      <BookmarkIcon v-else />
    </template>
  </NeoCoverPanel>
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(q=(U=C.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`Real-world grids typically mix panels with different configurations:
some have pennants, some have action buttons, some are plain links.
This story combines all optional props to show the full range of panel content.`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    gap: 'large'
  },
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'LargeGapRender',
      setup() {
        return () => <NeoCoverPanelGrid {...args}>
                        {sampleItems.slice(0, 8).map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} />)}
                    </NeoCoverPanelGrid>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="4" gap="large">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    section: {
      fullWidth: true
    }
  },
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'FullWidthRender',
      setup() {
        return () => <NeoCoverPanelGrid {...args}>
                        {sampleItems.map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} />)}
                    </NeoCoverPanelGrid>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCoverPanelGrid :columns="4" gap="medium" :section="{fullWidth: true}">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>\`
      }
    }
  }
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,te,re;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    docs: {
      source: {
        code: \`<div class="u-onDark">
  <NeoCoverPanelGrid :columns="4" gap="medium">
    <NeoCoverPanel
      v-for="item in items"
      :key="item.id"
      :color="item.color"
      :image-src="item.imageSrc"
      :image-alt="item.imageAlt"
      :title="item.title"
      rounded
    />
  </NeoCoverPanelGrid>
</div>\`
      }
    }
  },
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'OnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
                            {sampleItems.map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} rounded />)}
                        </NeoCoverPanelGrid>
                    </div>;
      }
    });
  }
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Ge=["Default","TwoColumns","SixColumns","WithPennants","MixedContent","LargeGap","FullWidth","OnDark"];export{f as Default,b as FullWidth,h as LargeGap,C as MixedContent,y as OnDark,S as SixColumns,N as TwoColumns,k as WithPennants,Ge as __namedExportsOrder,we as default};
