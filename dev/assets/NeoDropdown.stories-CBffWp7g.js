import{d as c,r as d,c as n,m as u,F as K,i as Y}from"./iframe-D_T2aSQH.js";import{N as i}from"./NeoDropdown-DRnSrm0M.js";import{_ as G}from"./NeoIconButton-CC4KmePC.js";import{N as m}from"./NeoButton-CgQg3H2m.js";import{N as v}from"./NeoNavItem-WqTxg40-.js";import{N as J}from"./NeoTooltip-DZaONH1R.js";import{c as x}from"./defaultIcons-DajOVIh-.js";import{f as Q}from"./iconStrings-DvlgHS7z.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-D4_UligG.js";import"./useButton-BxthMNAq.js";const X=["bottom-start","bottom-end","top-start","top-end"],{expect:l,fn:Z,userEvent:p,waitFor:s,within:V}=__STORYBOOK_MODULE_TEST__;function ee(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!Y(o)}const fe={title:"Molecules/NeoDropdown",component:i,tags:["autodocs"],argTypes:{placement:{control:"select",options:X,description:"Where the panel opens relative to the trigger. `bottom-start` aligns the panel's leading edge to the trigger's leading edge; `bottom-end` aligns the trailing edges.",table:{category:"Appearance"}},open:{control:!1,description:"Controlled open state. When provided the component is fully controlled — you must update it via `@update:open`. Omit to use uncontrolled mode with `defaultOpen`.",table:{category:"State"}},defaultOpen:{control:!1,description:"Initial open state for uncontrolled mode. Only applied on mount; ignored once the component is mounted. Has no effect when `open` is provided.",table:{category:"State"}},closeOnEscape:{control:"boolean",description:"Close the panel when the user presses Escape. Disable for persistent panels that should only close via an explicit trigger click.",table:{category:"Behavior"}},closeOnClickOutside:{control:"boolean",description:"Close the panel when the user clicks anywhere outside the trigger and panel. Uses a transparent full-screen backdrop to capture the click.",table:{category:"Behavior"}}},args:{placement:"bottom-start",closeOnEscape:!0,closeOnClickOutside:!0,"onUpdate:open":Z()},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},ne={border:"none",borderBlockStart:"1px solid var(--NeoDropdown-color-panelBorder)",inlineSize:"100%",margin:"4px 0"},oe=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[n("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},null),n("circle",{cx:"12",cy:"7",r:"4"},null)]),te=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[n("circle",{cx:"12",cy:"12",r:"3"},null),n("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"},null)]),ae=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[n("circle",{cx:"12",cy:"12",r:"10"},null),n("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},null),n("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},null)]),re=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[n("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},null),n("polyline",{points:"16 17 21 12 16 7"},null),n("line",{x1:"21",y1:"12",x2:"9",y2:"12"},null)]),g=()=>n(K,null,[n(v,{color:"grey",size:"small",label:"Profile",href:"#"},{iconStart:()=>oe}),n(v,{color:"grey",size:"small",label:"Settings",href:"#"},{iconStart:()=>te}),n(v,{color:"grey",size:"small",label:"Help",href:"#"},{iconStart:()=>ae}),n("hr",{style:ne},null),n(v,{color:"red",size:"small",label:"Sign out",href:"#"},{iconStart:()=>re})]),$=o=>c({name:"TextTriggerRender",setup(){const e=d(o.defaultOpen??!1),t=()=>{e.value=!e.value},a=r=>{e.value=r};return()=>n("div",{style:{padding:"24px",paddingBlockEnd:"200px"}},[n(i,u(o,{open:e.value,"onUpdate:open":a}),{trigger:()=>n(m,{color:"blue",variant:"secondary",text:"Options","aria-expanded":e.value,onClick:t},null),default:g})])}}),N={parameters:{docs:{source:{code:`<NeoDropdown placement="bottom-start">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton
      color="blue"
      variant="secondary"
      text="Options"
      :aria-expanded="isOpen"
      @click="toggle"
    />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`}}},render:o=>c({name:"DefaultRender",setup(){const e=d(!1),t=()=>{e.value=!e.value},a=r=>{e.value=r};return()=>n("div",{style:{padding:"24px",paddingBlockEnd:"200px"}},[n(i,u(o,{open:e.value,"onUpdate:open":a}),{trigger:()=>n(m,{color:"blue",variant:"secondary",text:"Options","aria-expanded":e.value,onClick:t},null),default:g})])}}),play:async({canvasElement:o,step:e})=>{const t=V(o);await e("Open dropdown",async()=>{await p.click(t.getByRole("button")),await s(()=>{l(document.querySelector(".NeoDropdown-panel")).not.toBeNull()})}),await e("Close with Escape",async()=>{await p.keyboard("{Escape}"),await s(()=>{l(document.querySelector(".NeoDropdown-panel")).toBeNull()})})}},h={tags:["snapshot"],args:{placement:"bottom-end",defaultOpen:!0},parameters:{docs:{source:{code:`<!-- Aligned to the right of the trigger -->
<NeoDropdown placement="bottom-end">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`}}},render:o=>c({name:"PlacementBottomEndRender",setup(){const e=d(o.defaultOpen??!1),t=()=>{e.value=!e.value},a=r=>{e.value=r};return()=>n("div",{style:{display:"flex",justifyContent:"flex-end",padding:"24px",paddingBlockEnd:"200px"}},[n(i,u(o,{open:e.value,"onUpdate:open":a}),{trigger:()=>n(m,{color:"blue",variant:"secondary",text:"Options","aria-expanded":e.value,onClick:t},null),default:g})])}})},f={tags:["snapshot"],args:{defaultOpen:!0},parameters:{docs:{source:{code:`<!-- Wrap the icon-only trigger in NeoTooltip to surface the label as a visible hint -->
<NeoDropdown placement="bottom-end">
  <template #trigger="{ isOpen, toggle }">
    <NeoTooltip text="More options" placement="bottom">
      <template #activator>
        <NeoIconButton
          color="blue"
          variant="ghost"
          aria-label="More options"
          :aria-expanded="isOpen"
          @click="toggle"
        >
          ${Q}
        </NeoIconButton>
      </template>
    </NeoTooltip>
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`}}},render:o=>c({name:"WithIconTriggerRender",setup(){const e=d(o.defaultOpen??!1),t=()=>{e.value=!e.value},a=r=>{e.value=r};return()=>n("div",{style:{padding:"24px",paddingBlockEnd:"200px"}},[n(i,u(o,{open:e.value,"onUpdate:open":a}),{trigger:()=>n(J,{text:"More options",placement:"bottom"},{activator:()=>n(G,{color:"blue",variant:"ghost",ariaLabel:"More options","aria-expanded":e.value,onClick:t},ee(x)?x:{default:()=>[x]})}),default:g})])}})},w={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoDropdown :open="isOpen" @update:open="isOpen = $event">
    <template #trigger="{ isOpen, toggle }">
      <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
    </template>
    <NeoNavItem color="grey" size="small" label="Profile" href="#" />
    <NeoNavItem color="grey" size="small" label="Settings" href="#" />
    <NeoNavItem color="grey" size="small" label="Help" href="#" />
    <hr />
    <NeoNavItem color="red" size="small" label="Sign out" href="#" />
  </NeoDropdown>
</template>`}}},render:o=>c({name:"ControlledRender",setup(){const e=d(!1);return()=>n("div",{style:{alignItems:"center",display:"flex",gap:"16px",padding:"24px",paddingBlockEnd:"200px"}},[n(i,u(o,{open:e.value,"onUpdate:open":t=>{e.value=t}}),{trigger:({toggle:t})=>n(m,{color:"blue",variant:"secondary",text:"Options",onClick:t},null),default:g}),n("span",{style:{color:"var(--neo-color-grey700)",fontSize:"14px"}},[e.value?"Open":"Closed"])])}})},y={tags:["no-test"],args:{closeOnEscape:!1,closeOnClickOutside:!1,defaultOpen:!0},parameters:{docs:{source:{code:`<!-- Panel stays open until manually toggled — useful for persistent filter panels -->
<NeoDropdown :close-on-escape="false" :close-on-click-outside="false">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`}}},render:o=>$(o)},b={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{defaultOpen:!0},render:o=>$(o)},O={tags:["!dev"],render:o=>c({name:"InteractionRender",setup(){const e=d(!1),t=()=>{e.value=!e.value},a=r=>{e.value=r};return()=>n("div",{style:{padding:"24px",paddingBlockEnd:"200px"}},[n(i,u(o,{open:e.value,"onUpdate:open":a}),{trigger:()=>n(m,{color:"blue",variant:"secondary",text:"Options","aria-expanded":e.value,onClick:t},null),default:g})])}}),play:async({canvasElement:o,step:e})=>{const t=V(o);await e("Open dropdown via trigger",async()=>{await p.click(t.getByRole("button")),await s(()=>{l(document.querySelector(".NeoDropdown-panel")).not.toBeNull()})}),await e("Close dropdown by clicking outside",async()=>{await s(()=>{l(document.querySelector(".NeoDropdown-backdrop")).not.toBeNull()});const a=document.querySelector(".NeoDropdown-backdrop");await p.click(a),await s(()=>{l(document.querySelector(".NeoDropdown-panel")).toBeNull()})}),await e("Open again and close with Escape",async()=>{await p.click(t.getByRole("button")),await s(()=>l(document.querySelector(".NeoDropdown-panel")).not.toBeNull()),await p.keyboard("{Escape}"),await s(()=>l(document.querySelector(".NeoDropdown-panel")).toBeNull())})}};var k,I,D;N.parameters={...N.parameters,docs:{...(k=N.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<NeoDropdown placement="bottom-start">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton
      color="blue"
      variant="secondary"
      text="Options"
      :aria-expanded="isOpen"
      @click="toggle"
    />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>\`
      }
    }
  },
  render: (args: NeoDropdownProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        const isOpen = ref(false);
        const handleToggle = () => {
          isOpen.value = !isOpen.value;
        };
        const handleUpdate = (value: boolean) => {
          isOpen.value = value;
        };
        return () => <div style={{
          padding: '24px',
          paddingBlockEnd: '200px'
        }}>
                        <NeoDropdown {...args} open={isOpen.value} onUpdate:open={handleUpdate} v-slots={{
            trigger: () => <NeoButton color="blue" variant="secondary" text="Options" aria-expanded={isOpen.value} onClick={handleToggle} />,
            default: renderDropdownItems
          }} />
                    </div>;
      }
    });
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Open dropdown', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => {
        expect(document.querySelector('.NeoDropdown-panel')).not.toBeNull();
      });
    });
    await step('Close with Escape', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => {
        expect(document.querySelector('.NeoDropdown-panel')).toBeNull();
      });
    });
  }
}`,...(D=(I=N.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var B,S,z;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    placement: 'bottom-end',
    defaultOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Aligned to the right of the trigger -->
<NeoDropdown placement="bottom-end">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>\`
      }
    }
  },
  render: (args: NeoDropdownProps) => {
    return defineComponent({
      name: 'PlacementBottomEndRender',
      setup() {
        const isOpen = ref(args.defaultOpen ?? false);
        const handleToggle = () => {
          isOpen.value = !isOpen.value;
        };
        const handleUpdate = (value: boolean) => {
          isOpen.value = value;
        };
        return () => <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '24px',
          paddingBlockEnd: '200px'
        }}>
                        <NeoDropdown {...args} open={isOpen.value} onUpdate:open={handleUpdate} v-slots={{
            trigger: () => <NeoButton color="blue" variant="secondary" text="Options" aria-expanded={isOpen.value} onClick={handleToggle} />,
            default: renderDropdownItems
          }} />
                    </div>;
      }
    });
  }
}`,...(z=(S=h.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var E,C,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    defaultOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Wrap the icon-only trigger in NeoTooltip to surface the label as a visible hint -->
<NeoDropdown placement="bottom-end">
  <template #trigger="{ isOpen, toggle }">
    <NeoTooltip text="More options" placement="bottom">
      <template #activator>
        <NeoIconButton
          color="blue"
          variant="ghost"
          aria-label="More options"
          :aria-expanded="isOpen"
          @click="toggle"
        >
          \${moreHorizontalIconSvg}
        </NeoIconButton>
      </template>
    </NeoTooltip>
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>\`
      }
    }
  },
  render: (args: NeoDropdownProps) => {
    return defineComponent({
      name: 'WithIconTriggerRender',
      setup() {
        const isOpen = ref(args.defaultOpen ?? false);
        const handleToggle = () => {
          isOpen.value = !isOpen.value;
        };
        const handleUpdate = (value: boolean) => {
          isOpen.value = value;
        };
        return () => <div style={{
          padding: '24px',
          paddingBlockEnd: '200px'
        }}>
                        <NeoDropdown {...args} open={isOpen.value} onUpdate:open={handleUpdate} v-slots={{
            trigger: () => <NeoTooltip text="More options" placement="bottom">
                                        {{
                activator: () => <NeoIconButton color="blue" variant="ghost" ariaLabel="More options" aria-expanded={isOpen.value} onClick={handleToggle}>
                                                    {MoreHorizontalIcon}
                                                </NeoIconButton>
              }}
                                    </NeoTooltip>,
            default: renderDropdownItems
          }} />
                    </div>;
      }
    });
  }
}`,...(T=(C=f.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var P,U,H;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoDropdown :open="isOpen" @update:open="isOpen = $event">
    <template #trigger="{ isOpen, toggle }">
      <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
    </template>
    <NeoNavItem color="grey" size="small" label="Profile" href="#" />
    <NeoNavItem color="grey" size="small" label="Settings" href="#" />
    <NeoNavItem color="grey" size="small" label="Help" href="#" />
    <hr />
    <NeoNavItem color="red" size="small" label="Sign out" href="#" />
  </NeoDropdown>
</template>\`
      }
    }
  },
  render: (args: NeoDropdownProps) => {
    return defineComponent({
      name: 'ControlledRender',
      setup() {
        const isOpen = ref(false);
        return () => <div style={{
          alignItems: 'center',
          display: 'flex',
          gap: '16px',
          padding: '24px',
          paddingBlockEnd: '200px'
        }}>
                        <NeoDropdown {...args} open={isOpen.value} onUpdate:open={(value: boolean) => {
            isOpen.value = value;
          }} v-slots={{
            trigger: ({
              toggle
            }: {
              isOpen: boolean;
              toggle: () => void;
            }) => <NeoButton color="blue" variant="secondary" text="Options" onClick={toggle} />,
            default: renderDropdownItems
          }} />
                        <span style={{
            color: 'var(--neo-color-grey700)',
            fontSize: '14px'
          }}>
                            {isOpen.value ? 'Open' : 'Closed'}
                        </span>
                    </div>;
      }
    });
  }
}`,...(H=(U=w.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var R,M,q;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    closeOnEscape: false,
    closeOnClickOutside: false,
    defaultOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Panel stays open until manually toggled — useful for persistent filter panels -->
<NeoDropdown :close-on-escape="false" :close-on-click-outside="false">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>\`
      }
    }
  },
  render: (args: NeoDropdownProps) => renderWithTextTrigger(args)
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var _,W,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  args: {
    defaultOpen: true
  },
  render: (args: NeoDropdownProps) => renderWithTextTrigger(args)
}`,...(F=(W=b.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var j,A,L;O.parameters={...O.parameters,docs:{...(j=O.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: NeoDropdownProps) => {
    return defineComponent({
      name: 'InteractionRender',
      setup() {
        const isOpen = ref(false);
        const handleToggle = () => {
          isOpen.value = !isOpen.value;
        };
        const handleUpdate = (value: boolean) => {
          isOpen.value = value;
        };
        return () => <div style={{
          padding: '24px',
          paddingBlockEnd: '200px'
        }}>
                        <NeoDropdown {...args} open={isOpen.value} onUpdate:open={handleUpdate} v-slots={{
            trigger: () => <NeoButton color="blue" variant="secondary" text="Options" aria-expanded={isOpen.value} onClick={handleToggle} />,
            default: renderDropdownItems
          }} />
                    </div>;
      }
    });
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Open dropdown via trigger', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => {
        expect(document.querySelector('.NeoDropdown-panel')).not.toBeNull();
      });
    });
    await step('Close dropdown by clicking outside', async () => {
      await waitFor(() => {
        expect(document.querySelector('.NeoDropdown-backdrop')).not.toBeNull();
      });
      const backdrop = document.querySelector('.NeoDropdown-backdrop') as HTMLElement;
      await userEvent.click(backdrop);
      await waitFor(() => {
        expect(document.querySelector('.NeoDropdown-panel')).toBeNull();
      });
    });
    await step('Open again and close with Escape', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(document.querySelector('.NeoDropdown-panel')).not.toBeNull());
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(document.querySelector('.NeoDropdown-panel')).toBeNull());
    });
  }
}`,...(L=(A=O.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const we=["Default","PlacementBottomEnd","WithIconTrigger","Controlled","PersistentDropdown","OnDark","Interaction"];export{w as Controlled,N as Default,O as Interaction,b as OnDark,y as PersistentDropdown,h as PlacementBottomEnd,f as WithIconTrigger,we as __namedExportsOrder,fe as default};
