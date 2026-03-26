<script setup lang="ts">
import { computed } from 'vue'
import type { NeoPennantProps } from './NeoPennantTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoPennantProps>()

const classes = computed(() => {
	const pennantClasses = getClassNames({
		component: 'NeoPennant',
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${pennantClasses} ${themedClasses}`
})
</script>

<template>
	<a
		v-if="props.href"
		:class="classes"
		:href="props.href"
		:aria-label="props.ariaLabel"
		:target="props.external ? '_blank' : undefined"
		:rel="props.external ? 'noopener noreferrer' : undefined"
	>
		<slot />
	</a>
	<span v-else :class="classes" aria-hidden="true">
		<slot />
	</span>
</template>

<style scoped>
@import url('./NeoPennant-themed.css');
@import url('./NeoPennant-layout.css');

.NeoPennant {
	align-items: center;
	block-size: var(--NeoPennant-sizing-height);
	color: var(--NeoPennant-color-content);
	display: inline-flex;
	filter: drop-shadow(0 2px 4px rgb(0 0 0 / 30%));
	flex-shrink: 0;
	inline-size: var(--NeoPennant-sizing-width);
	justify-content: center;
	padding-block-end: calc(var(--NeoPennant-sizing-height) * 0.28);
	padding-inline: var(--NeoPennant-sizing-padding);
	position: relative;
	text-decoration: none;
	transition: opacity 0.2s ease;

	&::before {
		background-color: var(--NeoPennant-color-background);
		block-size: 100%;
		clip-path: polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%);
		content: '';
		inline-size: 100%;
		inset: 0;
		position: absolute;
		z-index: -1;
	}

	&:hover {
		opacity: 0.85;
	}

	&:focus-visible {
		outline: 2px solid var(--NeoPennant-color-content);
		outline-offset: 1px;
	}

	/* Make slotted images and SVGs fill the pennant width.
	   Overrides any fixed width/height attributes on the element. */
	& :deep(img),
	& :deep(svg) {
		block-size: auto;
		display: block;
		inline-size: 100%;
	}
}
</style>
