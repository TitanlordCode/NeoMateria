<script setup lang="ts">
import { computed } from 'vue'
import type { NeoCoverPanelGridProps } from './NeoCoverPanelGridTypes'

const gapTokens = {
	small: 'var(--neo-gap-sm)',
	medium: 'var(--neo-gap-md)',
	large: 'var(--neo-gap-lg)',
} as const

const props = defineProps<NeoCoverPanelGridProps>()

const gridStyle = computed(() => ({
	'--NeoCoverPanelGrid-sizing-columns': props.columns ?? 4,
	'--NeoCoverPanelGrid-sizing-columnMinWidth': `${props.minColumnWidth ?? 160}px`,
	'--NeoCoverPanelGrid-sizing-gap': gapTokens[props.gap ?? 'medium'],
}))
</script>

<template>
	<div class="NeoCoverPanelGrid" :style="gridStyle">
		<slot />
	</div>
</template>

<style scoped>
@import url('./NeoCoverPanelGrid-layout.css');
</style>
