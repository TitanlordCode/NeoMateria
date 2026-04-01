import{d as s,h as e}from"./iframe-Da9xFhCi.js";import{A as i,C as l,a as d,D as p,H as I,b as m,I as u,M as x,c as f}from"./defaultIcons-DqdwkU5d.js";const g={title:"Foundation/Icons",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}},b=[{name:"AddIcon",icon:i},{name:"ChevronDownIcon",icon:l},{name:"CloseIcon",icon:d},{name:"DeleteIcon",icon:p},{name:"HeartFilledIcon",icon:I},{name:"HeartIcon",icon:m},{name:"InfoIcon",icon:u},{name:"MenuIcon",icon:x},{name:"MoreHorizontalIcon",icon:f}],n={tags:["!dev"],render:()=>s({name:"AllIconsRender",setup(){return()=>e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"12px",padding:"4px"}},b.map(({name:c,icon:t})=>e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",padding:"20px 12px",border:"1px solid rgba(128,128,128,0.25)",borderRadius:"8px"}},[t,e("code",{style:{fontSize:"11px"}},c)])))}}),parameters:{docs:{source:{code:"import { AddIcon, ChevronDownIcon, CloseIcon, DeleteIcon, HeartFilledIcon, HeartIcon, InfoIcon, MenuIcon, MoreHorizontalIcon } from 'neomateria'"}}}};var o,a,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => defineComponent({
    name: 'AllIconsRender',
    setup() {
      return () => h('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '12px',
          padding: '4px'
        }
      }, allIcons.map(({
        name,
        icon
      }) => h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          padding: '20px 12px',
          border: '1px solid rgba(128,128,128,0.25)',
          borderRadius: '8px'
        }
      }, [icon, h('code', {
        style: {
          fontSize: '11px'
        }
      }, name)])));
    }
  }),
  parameters: {
    docs: {
      source: {
        code: \`import { AddIcon, ChevronDownIcon, CloseIcon, DeleteIcon, HeartFilledIcon, HeartIcon, InfoIcon, MenuIcon, MoreHorizontalIcon } from 'neomateria'\`
      }
    }
  }
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const C=["AllIcons"],v=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:n,__namedExportsOrder:C,default:g},Symbol.toStringTag,{value:"Module"}));export{n as A,v as I};
