<script setup lang="ts">
import type { NeoHeadlineProps, NeoHeadlineSlots } from '../NeoHeadlineTypes'
import { useHeadline } from '../useHeadline'

const props = defineProps<NeoHeadlineProps>()
defineSlots<NeoHeadlineSlots>()

const { classes, style } = useHeadline('NeoHeadlineSecondary', props)
</script>

<template>
	<component :is="props.tag ?? 'h2'" :class="classes" :style="style">
		<slot />
	</component>
</template>

<style scoped>
@import url('../NeoHeadline-shared.css');
@import url('./NeoHeadlineSecondary-themed.css');
@import url('./NeoHeadlineSecondary-layout.css');

.NeoHeadlineSecondary {
	color: var(--NeoHeadlineSecondary-color-text);
	font-size: var(--NeoHeadlineSecondary-sizing-fontSize);
	font-weight: var(--neo-fontWeight-bold);
	letter-spacing: -0.01em;
	line-height: var(--neo-lineHeight-tight);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
