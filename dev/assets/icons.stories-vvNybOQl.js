import{d as i,h as e}from"./iframe-C76Gz-Ft.js";import{N as s}from"./NeoIcon-BCPKt7wL.js";import{A as l,C as d,a as p,D as I,H as m,b as u,I as x,M as f,c as g,S as H}from"./defaultIcons-Dky2e0vO.js";const h={title:"Foundation/Icons",parameters:{backgrounds:{disable:!0},direction:{disable:!0},snapshot:{viewports:["sm","xl"]}}},b=[{name:"AddIcon",icon:l},{name:"ChevronDownIcon",icon:d},{name:"CloseIcon",icon:p},{name:"DeleteIcon",icon:I},{name:"HeartFilledIcon",icon:m},{name:"HeartIcon",icon:u},{name:"InfoIcon",icon:x},{name:"MenuIcon",icon:f},{name:"MoreHorizontalIcon",icon:g},{name:"StarIcon",icon:H}],n={tags:["!dev","snapshot"],render:()=>i({name:"AllIconsRender",setup(){return()=>e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"12px",padding:"4px"}},b.map(({name:t,icon:c})=>e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",padding:"20px 12px",border:"1px solid rgba(128,128,128,0.25)",borderRadius:"8px"}},[e(s,{colorVariant:"text",ariaHidden:!0},{default:()=>c}),e("code",{style:{fontSize:"11px",lineHeight:"1"}},t)])))}}),parameters:{docs:{source:{code:"import { AddIcon, ChevronDownIcon, CloseIcon, DeleteIcon, HeartFilledIcon, HeartIcon, InfoIcon, MenuIcon, MoreHorizontalIcon, StarIcon } from 'neomateria'"}}}};var o,a,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev', 'snapshot'],
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
      }, [h(NeoIcon, {
        colorVariant: 'text',
        ariaHidden: true
      }, {
        default: () => icon
      }), h('code', {
        style: {
          fontSize: '11px',
          lineHeight: '1'
        }
      }, name)])));
    }
  }),
  parameters: {
    docs: {
      source: {
        code: \`import { AddIcon, ChevronDownIcon, CloseIcon, DeleteIcon, HeartFilledIcon, HeartIcon, InfoIcon, MenuIcon, MoreHorizontalIcon, StarIcon } from 'neomateria'\`
      }
    }
  }
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const C=["AllIcons"],S=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:n,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{n as A,S as I};
