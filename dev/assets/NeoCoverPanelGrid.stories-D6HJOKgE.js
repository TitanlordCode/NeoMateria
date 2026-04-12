import{d as p,c as n,r as I,F as ne,i as ae}from"./iframe-BBbPLObx.js";import{p as l}from"./placeholder-J2GqGUFJ.js";import{N as d}from"./NeoCoverPanelGrid-fLZ2G1fm.js";import{N as s}from"./NeoCoverPanel-B8KaEhG8.js";import{N as w}from"./NeoPennant-qYavnZWh.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoImage-DB5DIDKj.js";const ie=["small","medium","large"];function m(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!ae(r)}const fe={title:"Organisms/NeoCoverPanelGrid",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"\nA responsive grid layout for `NeoCoverPanel` items. Uses CSS `auto-fill` with a `minmax` column constraint — the grid drops columns as the container narrows, but never exceeds `columns`.\n\n**How `columns` and `minColumnWidth` interact:**\nThe grid tries to fill as many columns as possible. `minColumnWidth` is the floor — a column will never be narrower than this value. `columns` is the ceiling — the grid will never add more columns than this even when space allows.\n\nSet `minColumnWidth` based on the minimum readable size of your content. Lower values produce more columns at medium widths.\n                "}},controls:{exclude:["color"]}},argTypes:{columns:{control:{type:"select"},options:[2,3,4,5,6],description:"Maximum number of columns at full container width. Works with `minColumnWidth` — see component docs for full explanation.",table:{category:"Layout"}},minColumnWidth:{control:{type:"number",min:80,max:400,step:10},description:"Minimum pixel width each column must be before the grid drops a column. Defaults to `160`.",table:{category:"Layout"}},gap:{control:"select",options:ie,description:"Gap between grid items. `small` = `--neo-gap-sm`, `medium` = `--neo-gap-md`, `large` = `--neo-gap-lg`.",table:{category:"Layout"}}},args:{columns:4,minColumnWidth:160,gap:"medium"}},i=["#64748b","#475569","#334155","#6366f1","#8b5cf6","#ec4899","#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6"],g=Array.from({length:12},(r,t)=>({imageSrc:l(300,450,i[t%i.length]),imageAlt:`Cover ${t+1}`,title:`Item ${t+1}`,color:"blue"})),le=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},null)]),me=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},null)]),ce=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},null)]),se=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",style:{blockSize:"18px",inlineSize:"18px"}},[n("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},null)]),b=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[n("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null)]),f={render:r=>p({name:"DefaultRender",setup(){return()=>{let t;return n("div",{style:{padding:"16px"}},[n(d,r,m(t=g.map(e=>n(s,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?t:{default:()=>[t]})])}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},N={args:{columns:2},render:r=>p({name:"TwoColumnsRender",setup(){return()=>{let t;return n("div",{style:{padding:"16px"}},[n(d,r,m(t=g.slice(0,6).map(e=>n(s,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?t:{default:()=>[t]})])}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="2" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},S={args:{columns:6,minColumnWidth:120},render:r=>p({name:"SixColumnsRender",setup(){return()=>{let t;return n("div",{style:{padding:"16px"}},[n(d,r,m(t=g.map(e=>n(s,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title,rounded:!0},null)))?t:{default:()=>[t]})])}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="6" :min-column-width="120" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  />
</NeoCoverPanelGrid>`}}}},k={render:r=>{const t=[{rank:"yellow",platform:"blue"},{rank:"yellow",platform:"blueGrey"},{rank:"yellow",platform:"purple"},{rank:"grey",platform:"red"},{rank:"grey",platform:"blue"},{rank:"grey",platform:"green"},{rank:"grey",platform:"blueGrey"},{rank:"grey",platform:"purple"}];return p({name:"WithPennantsRender",setup(){return()=>{let e;return n("div",{style:{padding:"16px"}},[n(d,r,m(e=g.slice(0,8).map((c,v)=>n(s,{key:c.imageSrc,color:"blue",imageSrc:c.imageSrc,imageAlt:c.imageAlt,title:c.title,rounded:!0},{pennants:()=>n(ne,null,[n(w,{color:t[v].platform},m(b)?b:{default:()=>[b]}),n(w,{color:t[v].rank},{default:()=>[v+1]})])})))?e:{default:()=>[e]})])}}})},parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium">
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
</NeoCoverPanelGrid>`}}}},C={render:r=>{const t=[{imageSrc:l(300,450,i[0]),imageAlt:"Cover 1",title:"Item 1",color:"blue",rounded:!0,pennants:[{color:"blue",content:"star"},{color:"yellow",content:"number",rank:1}],action:"favorite"},{imageSrc:l(300,450,i[1]),imageAlt:"Cover 2",title:"Item 2",color:"purple",rounded:!0,pennants:[{color:"yellow",content:"number",rank:2}],action:"bookmark"},{imageSrc:l(300,450,i[2]),imageAlt:"Cover 3",title:"Item 3",color:"green",rounded:!0,pennants:[{color:"green",content:"star"},{color:"grey",content:"number",rank:3}],action:"favorite"},{imageSrc:l(300,450,i[3]),imageAlt:"Cover 4",title:"Item 4",color:"indigo",pennants:[{color:"red",content:"star"}]},{imageSrc:l(300,450,i[4]),imageAlt:"Cover 5",title:"Item 5",color:"red",rounded:!0,action:"favorite"},{imageSrc:l(300,450,i[5]),imageAlt:"Cover 6",title:"Item 6",color:"pink",pennants:[{color:"purple",content:"star"},{color:"pink",content:"star"},{color:"grey",content:"number",rank:6}],action:"bookmark"},{imageSrc:l(300,450,i[6]),imageAlt:"Cover 7",title:"Item 7",color:"orange",rounded:!0},{imageSrc:l(300,450,i[7]),imageAlt:"Cover 8",title:"Item 8",color:"teal",pennants:[{color:"teal",content:"number",rank:8}],action:"favorite"}];return p({name:"MixedContentRender",setup(){const e=I(new Set),c=I(new Set),v=a=>{const o=new Set(e.value);o.has(a)?o.delete(a):o.add(a),e.value=o},oe=a=>{const o=new Set(c.value);o.has(a)?o.delete(a):o.add(a),c.value=o},x=a=>a?{pennants:()=>n(ne,null,[a.map((o,u)=>n(w,{key:u,color:o.color},{default:()=>[o.content==="star"?b:o.rank]}))])}:{};return()=>{let a;return n("div",{style:{padding:"16px"}},[n(d,r,m(a=t.map((o,u)=>{let A;if(o.action){const P=o.action==="favorite",te=P?e.value.has(u):c.value.has(u),re=P?()=>v(u):()=>oe(u);return n(s,{key:o.imageSrc,color:o.color,imageSrc:o.imageSrc,imageAlt:o.imageAlt,title:o.title,rounded:o.rounded,clickBehavior:"action",actionAriaLabel:P?"Add to favorites":"Bookmark",actionActive:te,"onAction-click":re},{...x(o.pennants),"action-icon":({active:G})=>P?G?me:le:G?se:ce})}return n(s,{key:o.imageSrc,color:o.color,imageSrc:o.imageSrc,imageAlt:o.imageAlt,title:o.title,rounded:o.rounded,clickBehavior:"none"},m(A=x(o.pennants))?A:{default:()=>[A]})}))?a:{default:()=>[a]})])}}})},parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="medium">
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
</NeoCoverPanelGrid>`}}}},y={args:{gap:"large"},render:r=>p({name:"LargeGapRender",setup(){return()=>{let t;return n("div",{style:{padding:"16px"}},[n(d,r,m(t=g.slice(0,8).map(e=>n(s,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title},null)))?t:{default:()=>[t]})])}}}),parameters:{docs:{source:{code:`<NeoCoverPanelGrid :columns="4" gap="large">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`}}}},h={globals:{backgrounds:"#000"},render:r=>p({name:"OnDarkRender",setup(){return()=>{let t;return n("div",{class:"u-onDark",style:{padding:"16px"}},[n(d,r,m(t=g.map(e=>n(s,{key:e.imageSrc,color:e.color,imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title,rounded:!0},null)))?t:{default:()=>[t]})])}}}),parameters:{docs:{source:{code:`<div class="u-onDark">
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
</div>`}}}};var B,F,R;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
                            {sampleItems.map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} />)}
                        </NeoCoverPanelGrid>
                    </div>;
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
}`,...(R=(F=f.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var W,L,z;N.parameters={...N.parameters,docs:{...(W=N.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(L=N.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var D,_,M;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(_=S.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var H,O,T,j,V;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        return () => <div style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
                            {sampleItems.slice(0, 8).map((item, index) => <NeoCoverPanel key={item.imageSrc} color="blue" imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} rounded>
                                    {{
                pennants: () => <>
                                                <NeoPennant color={pennantConfigs[index].platform}>
                                                    {StarPennant}
                                                </NeoPennant>
                                                <NeoPennant color={pennantConfigs[index].rank}>{index + 1}</NeoPennant>
                                            </>
              }}
                                </NeoCoverPanel>)}
                        </NeoCoverPanelGrid>
                    </div>;
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
}`,...(T=(O=k.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:`Pennants let you attach small colored badges to the top edge of each panel.
Here each panel shows a rank badge (1–8) and a colored platform indicator.
Mix pennant colors and counts per item — up to 5 fit comfortably on a standard-width panel.`,...(V=(j=k.parameters)==null?void 0:j.docs)==null?void 0:V.description}}};var $,E,U,q,J;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
                                        {pennant.content === 'star' ? StarPennant : pennant.rank}
                                    </NeoPennant>)}
                            </>
          };
        };
        return () => <div style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
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
                        </NeoCoverPanelGrid>
                    </div>;
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
}`,...(U=(E=C.parameters)==null?void 0:E.docs)==null?void 0:U.source},description:{story:`Real-world grids typically mix panels with different configurations:
some have pennants, some have action buttons, some are plain links.
This story combines all optional props to show the full range of panel content.`,...(J=(q=C.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    gap: 'large'
  },
  render: (args: NeoCoverPanelGridProps) => {
    return defineComponent({
      name: 'LargeGapRender',
      setup() {
        return () => <div style={{
          padding: '16px'
        }}>
                        <NeoCoverPanelGrid {...args}>
                            {sampleItems.slice(0, 8).map(item => <NeoCoverPanel key={item.imageSrc} color={item.color} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} />)}
                        </NeoCoverPanelGrid>
                    </div>;
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
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
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
  },
  parameters: {
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
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ne=["Default","TwoColumns","SixColumns","WithPennants","MixedContent","LargeGap","OnDark"];export{f as Default,y as LargeGap,C as MixedContent,h as OnDark,S as SixColumns,N as TwoColumns,k as WithPennants,Ne as __namedExportsOrder,fe as default};
