<script setup lang="ts">
import { computed } from 'vue'
import type { NeoCoverPanelGridProps } from './NeoCoverPanelGridTypes'
import NeoSection from '@/components/02-molecules/Section/NeoSection.vue'

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
	<NeoSection v-bind="props.section">
		<div class="NeoCoverPanelGrid" :style="gridStyle">
			<slot />
		</div>
	</NeoSection>
</template>

<style scoped>
@import url('./NeoCoverPanelGrid-layout.css');

.NeoCoverPanelGrid {
	display: grid;
	gap: var(--NeoCoverPanelGrid-sizing-gap);
	grid-template-columns: repeat(
		auto-fill,
		minmax(
			max(
				var(--NeoCoverPanelGrid-sizing-columnMinWidth),
				calc(100% / var(--NeoCoverPanelGrid-sizing-columns) - var(--NeoCoverPanelGrid-sizing-gap))
			),
			1fr
		)
	);
}
</style>
