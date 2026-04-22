<script setup lang="ts">
import { getClassNames } from '@/utils/classNames'
import { computed } from 'vue'
import type { NeoSectionProps } from './NeoSectionTypes'
const props = withDefaults(defineProps<NeoSectionProps>(), {
	fullWidth: false,
	gap: 'var(--neo-gap-md)',
	padding: '0',
})

const classes = computed(() => {
	const sectionClasses = getClassNames({
		component: 'NeoSection',
		modifiers: [props.fullWidth ? 'full-width' : ''],
	})
	return `${sectionClasses}`
})
</script>

<template>
	<section
		:class="classes"
		:style="{ '--NeoSection-sizing-gap': gap, '--NeoSection-sizing-inlinePadding': padding }"
	>
		<slot />
	</section>
</template>

<style scoped>
@import url('./NeoSection-layout.css');

.NeoSection {
	column-gap: var(--NeoSection-sizing-gap);
	display: grid;
	grid-template-columns:
		[full-start] minmax(var(--NeoSection-sizing-inlinePadding), 1fr)
		[content-start] repeat(12, minmax(0, calc(var(--neo-spacing-max-global-size) / 12)))
		[content-end] minmax(var(--NeoSection-sizing-inlinePadding), 1fr)
		[full-end];
	inline-size: 100%;
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
