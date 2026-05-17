<script setup lang="ts">
import { computed } from 'vue'
import type { NeoCalloutProps, NeoCalloutSlots } from './NeoCalloutTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoCalloutProps>()
defineSlots<NeoCalloutSlots>()

const classes = computed(() => {
	const calloutClasses = getClassNames({
		component: 'NeoCallout',
		modifiers: [props.variant ?? 'bordered'],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color],
	})
	return `${calloutClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes" role="note">
		<div v-if="$slots.icon" class="NeoCallout-icon" aria-hidden="true">
			<slot name="icon" />
		</div>
		<div class="NeoCallout-content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoCallout-themed.css');
@import url('./NeoCallout-layout.css');

.NeoCallout {
	border-radius: var(--NeoCallout-sizing-borderRadius);
	display: flex;
	gap: var(--NeoCallout-sizing-gap);
	padding: var(--NeoCallout-sizing-padding);
}

.NeoCallout-icon {
	flex-shrink: 0;
}

.NeoCallout-content {
	flex: 1;
	min-inline-size: 0;
}

.NeoCallout--bordered {
	background-color: var(--NeoCallout-color-background);
	border: var(--NeoCallout-sizing-borderWidth) solid var(--NeoCallout-color-border);
	color: var(--NeoCallout-color-text);
}

.NeoCallout--filled {
	background-color: var(--NeoCallout-color-background);
	border: var(--NeoCallout-sizing-borderWidth) solid transparent;
	color: var(--NeoCallout-color-text);
}

/* Nested NeoLink: inherit the callout's accessible text color so contrast is
   guaranteed against any callout background. The link's own theme is ignored
   in this context; an underline is added so the link remains identifiable
   when it shares its color with surrounding callout text (WCAG G183). */
.NeoCallout :deep(.NeoLink) {
	--NeoLink-color-text: currentcolor;
	--NeoLink-color-textHover: currentcolor;
	--NeoLink-color-focus: currentcolor;

	border-radius: 2px;
	margin-inline: -2px;
	padding-inline: 2px;
	text-decoration: underline;
	text-underline-offset: 3px;
	transition:
		background-color 0.15s ease,
		text-decoration-thickness 0.15s ease;

	&:hover {
		background-color: color-mix(in srgb, currentcolor 15%, transparent);
		text-decoration-thickness: 2px;
	}
}
</style>
