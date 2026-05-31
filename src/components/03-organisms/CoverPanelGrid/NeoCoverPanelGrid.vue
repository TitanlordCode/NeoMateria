<script setup lang="ts">
import { computed, inject } from 'vue'
import type { NeoCoverPanelGridProps } from './NeoCoverPanelGridTypes'
import NeoSection from '@/components/02-molecules/Section/NeoSection.vue'
import { neoSectionInjectionKey } from '@/components/02-molecules/Section/sectionContext'

const gapTokens = {
	small: 'var(--neo-gap-sm)',
	medium: 'var(--neo-gap-md)',
	large: 'var(--neo-gap-lg)',
} as const

const props = defineProps<NeoCoverPanelGridProps>()

const isInsideSection = inject(neoSectionInjectionKey, false)
const shouldWrap = computed(() => !props.noSection && !isInsideSection)

const gridStyle = computed(() => ({
	'--NeoCoverPanelGrid-sizing-columns': props.columns ?? 4,
	'--NeoCoverPanelGrid-sizing-columnMinWidth': `${props.minColumnWidth ?? 160}px`,
	'--NeoCoverPanelGrid-sizing-gap': gapTokens[props.gap ?? 'medium'],
}))
</script>

<template>
	<NeoSection v-if="shouldWrap" v-bind="props.section ?? {}">
		<div class="NeoCoverPanelGrid" :style="gridStyle">
			<slot />
		</div>
	</NeoSection>
	<div v-else class="NeoCoverPanelGrid" :style="gridStyle">
		<slot />
	</div>
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
