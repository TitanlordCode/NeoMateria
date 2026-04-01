import{d as i,e as m,q as D,w as y,A as H,G as I,t as g,x as f,c as r,v as h,E as R,y as u,z as b,a as z,b as V}from"./iframe-Da9xFhCi.js";import{p as B}from"./placeholder-J2GqGUFJ.js";import{g as C,_ as G}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as P}from"./NeoImage-C-1C2F0l.js";import{N as M}from"./NeoHeadlineSecondary-T-HUhND7.js";import{a as E}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-CGFwQ-av.js";const O={class:"NeoFeatureCard-imageWrapper"},j={class:"NeoFeatureCard-content"},K={key:1,class:"NeoFeatureCard-excerpt"},s=i({__name:"NeoFeatureCard",props:{imageSrc:{},imageAlt:{},category:{},title:{},headingTag:{},excerpt:{},href:{},color:{},class:{}},setup(a){const e=a,l=m(()=>!!e.href),q=m(()=>{const d=C({component:"NeoFeatureCard",modifiers:[l.value?"clickable":""],additional:e.class}),p=e.color?C({component:"Themed",modifiers:[e.color]}):"";return p?`${d} ${p}`:d}),w=m(()=>{if(e.color)return{"--NeoFeatureCard-color-category":"var(--neo-theme-colorAccessible)"}});return(d,p)=>(g(),D(I(l.value?"a":"article"),{class:H(q.value),href:l.value?e.href:void 0},{default:y(()=>[f("div",O,[r(P,{src:e.imageSrc,alt:e.imageAlt,"object-fit":"cover",class:"NeoFeatureCard-image"},null,8,["src","alt"])]),f("div",j,[e.category?(g(),h("p",{key:0,class:"NeoFeatureCard-category",style:R(w.value)},u(e.category),5)):b("",!0),r(M,{tag:e.headingTag??"h3",color:e.color,clamp:3},{default:y(()=>[z(u(e.title),1)]),_:1},8,["tag","color"]),e.excerpt?(g(),h("p",K,u(e.excerpt),1)):b("",!0)])]),_:1},8,["class","href"]))}}),c=G(s,[["__scopeId","data-v-4e617da5"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"NeoFeatureCard",type:1,props:[{name:"imageSrc",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"imageAlt",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"category",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"title",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"NeoHeadlineTag",declarations:[],schema:{kind:"array",type:"NeoHeadlineTag"}},{name:"excerpt",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"href",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"color",global:!1,description:"",tags:[],required:!1,type:"SurfaceColor",declarations:[],schema:{kind:"array",type:"SurfaceColor"}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"color",type:"SurfaceColor",description:"",declarations:[],schema:{kind:"array",type:"SurfaceColor"}},{name:"href",type:"string",description:"",declarations:[],schema:"string"},{name:"headingTag",type:"NeoHeadlineTag",description:"",declarations:[],schema:{kind:"array",type:"NeoHeadlineTag"}},{name:"title",type:"string",description:"",declarations:[],schema:"string"},{name:"imageSrc",type:"string",description:"",declarations:[],schema:"string"},{name:"imageAlt",type:"string",description:"",declarations:[],schema:"string"},{name:"category",type:"string",description:"",declarations:[],schema:"string"},{name:"excerpt",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/FeatureCard/NeoFeatureCard/NeoFeatureCard.vue"});const $=V.filter(a=>a!=="white"),ee={title:"Molecules/NeoFeatureCard",component:c,tags:["autodocs"],argTypes:{imageSrc:{control:"text",table:{category:"Content"}},imageAlt:{control:"text",table:{category:"Content"}},category:{control:"text",table:{category:"Content"}},title:{control:"text",table:{category:"Content"}},excerpt:{control:"text",table:{category:"Content"}},href:{control:"text",description:"Makes the entire card a link.",table:{category:"Behavior"}},headingTag:{control:"select",options:E,description:"HTML element for the title.",table:{category:"Appearance"}},color:{control:"select",options:$,description:"Accent color applied to the category label and title.",table:{category:"Appearance"}}},args:{imageSrc:"https://picsum.photos/seed/feature1/800/450",imageAlt:"Feature image",category:"Design Systems",title:"How to build a scalable component library",excerpt:"A practical guide to structuring Vue components for long-term maintainability and consistency.",color:"blue"}},t={render:a=>i({name:"DefaultRender",setup(){return()=>r("div",{style:{maxInlineSize:"480px"}},[r(c,a,null)])}}),parameters:{docs:{source:{code:`<NeoFeatureCard
  image-src="..."
  image-alt="Feature image"
  category="Design Systems"
  title="How to build a scalable component library"
  excerpt="A practical guide..."
  color="blue"
/>`}}}},n={args:{href:"#article"},render:a=>i({name:"ClickableRender",setup(){return()=>r("div",{style:{maxInlineSize:"480px"}},[r(c,a,null)])}}),parameters:{docs:{source:{code:`<NeoFeatureCard
  image-src="..."
  image-alt="Feature image"
  category="Design Systems"
  title="How to build a scalable component library"
  color="blue"
  href="#article"
/>`}}}},o={render:()=>i({name:"CardGridRender",setup(){const a=[{title:"Getting Started with Vue 3",category:"Tutorial",color:"blue"},{title:"Design Token Strategies",category:"Design",color:"purple"},{title:"Accessibility First",category:"A11y",color:"green"}];return()=>r("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",maxInlineSize:"960px"}},[a.map(e=>r(c,{key:e.title,imageSrc:B(800,450),imageAlt:e.title,category:e.category,title:e.title,excerpt:"A deep dive into modern web development practices and component architecture.",color:e.color,href:"#"},null))])}})};var N,x,S;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: NeoFeatureCardProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <div style={{
          maxInlineSize: '480px'
        }}>
                        <NeoFeatureCard {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoFeatureCard
  image-src="..."
  image-alt="Feature image"
  category="Design Systems"
  title="How to build a scalable component library"
  excerpt="A practical guide..."
  color="blue"
/>\`
      }
    }
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,F,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    href: '#article'
  },
  render: (args: NeoFeatureCardProps) => {
    return defineComponent({
      name: 'ClickableRender',
      setup() {
        return () => <div style={{
          maxInlineSize: '480px'
        }}>
                        <NeoFeatureCard {...args} />
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoFeatureCard
  image-src="..."
  image-alt="Feature image"
  category="Design Systems"
  title="How to build a scalable component library"
  color="blue"
  href="#article"
/>\`
      }
    }
  }
}`,...(k=(F=n.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var _,A,T;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return defineComponent({
      name: 'CardGridRender',
      setup() {
        const cards = [{
          title: 'Getting Started with Vue 3',
          category: 'Tutorial',
          color: 'blue' as SurfaceColor
        }, {
          title: 'Design Token Strategies',
          category: 'Design',
          color: 'purple' as SurfaceColor
        }, {
          title: 'Accessibility First',
          category: 'A11y',
          color: 'green' as SurfaceColor
        }];
        return () => <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          maxInlineSize: '960px'
        }}>
                        {cards.map(card => <NeoFeatureCard key={card.title} imageSrc={placeholder(800, 450)} imageAlt={card.title} category={card.category} title={card.title} excerpt="A deep dive into modern web development practices and component architecture." color={card.color} href="#" />)}
                    </div>;
      }
    });
  }
}`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const ae=["Default","Clickable","CardGrid"];export{o as CardGrid,n as Clickable,t as Default,ae as __namedExportsOrder,ee as default};
