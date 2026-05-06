import{b as o}from"./axe-D-kTwwPZ.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,i=()=>async({canvasElement:s})=>{const a=await o.run(s,{runOnly:{type:"tag",values:["wcag2a","wcag2aa"]}}),e=a.violations.map(t=>`${t.description}: ${t.nodes.map(n=>n.html).join(", ")}`);c(a.violations,e.join(`
`)).toHaveLength(0)};export{i as c};
