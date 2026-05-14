<script setup lang="ts">
import { inject, onMounted, onUnmounted } from 'vue'
import type { NeoTabPanelProps } from './NeoTabsTypes'
import { neoTabsContextKey } from './NeoTabsTypes'

const props = defineProps<NeoTabPanelProps>()

const context = inject(neoTabsContextKey)

onMounted(() => {
	context?.registerTab({ id: props.id, label: props.label, disabled: props.disabled })
})

onUnmounted(() => {
	context?.unregisterTab(props.id)
})
</script>

<template>
	<div
		v-show="context?.activeTab.value === props.id"
		:id="`${context?.instanceId}-panel-${props.id}`"
		:aria-labelledby="`${context?.instanceId}-tab-${props.id}`"
		class="NeoTabPanel"
		role="tabpanel"
		tabindex="0"
	>
		<slot />
	</div>
</template>
