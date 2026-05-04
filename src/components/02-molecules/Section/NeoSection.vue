<script setup lang="ts">
import { getClassNames } from '@/utils/classNames'
import { computed } from 'vue'
import type { NeoSectionProps } from './NeoSectionTypes'

const props = defineProps<NeoSectionProps>()

const classes = computed(() =>
	getClassNames({
		component: 'NeoSection',
		modifiers: [props.fullWidth ? 'full-width' : ''],
	}),
)
</script>

<template>
	<section
		:class="classes"
		:style="{
			'--NeoSection-sizing-columnGap': columnGap,
			'--NeoSection-sizing-rowGap': rowGap,
			'--NeoSection-sizing-inlinePadding': padding,
		}"
	>
		<slot />
	</section>
</template>

<style scoped>
@import url('./NeoSection-layout.css');

.NeoSection {
	column-gap: var(--NeoSection-sizing-columnGap);
	display: grid;
	grid-template-columns:
		[full-start] minmax(var(--NeoSection-sizing-inlinePadding), 1fr)
		[content-start] repeat(12, minmax(0, var(--NeoSection-sizing-columnWidth)))
		[content-end] minmax(var(--NeoSection-sizing-inlinePadding), 1fr)
		[full-end];
	inline-size: 100%;
	row-gap: var(--NeoSection-sizing-rowGap);
}

.NeoSection > :deep(*) {
	/* same as span 12 */
	grid-column: content-start / content-end;
}

.NeoSection--full-width {
	grid-template-columns:
		[full-start] var(--NeoSection-sizing-inlinePadding)
		[content-start] repeat(12, 1fr)
		[content-end] var(--NeoSection-sizing-inlinePadding)
		[full-end];
}
</style>
