<script setup lang="ts">
import { computed } from 'vue'
import type { NeoLinkProps } from './NeoLinkTypes'
import { getClassNames } from '@/utils/classNames'
import { getColorShade } from '@/utils/colorMapper'

const props = defineProps<NeoLinkProps>()

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
	if (props.disabled) {
		event.preventDefault()
		return
	}
	emit('click', event)
}

const computedRel = computed(() => {
	if (props.rel) return props.rel
	if (props.external || props.target === '_blank') {
		return 'noopener noreferrer'
	}
	return undefined
})

const classes = computed(() => {
	const linkClasses = getClassNames({
		component: 'NeoLink',
		modifiers: [
			props.size ?? 'medium',
			props.variant ?? 'default',
			props.disabled ? 'disabled' : '',
		],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [getColorShade(props.color, props.variant, 'grey500')],
	})
	return `${linkClasses} ${themedClasses}`
})
</script>

<template>
	<a
		:class="classes"
		:href="props.disabled ? undefined : props.href"
		:target="props.target"
		:rel="computedRel"
		:aria-disabled="props.disabled ? 'true' : undefined"
		@click="handleClick"
	>
		<slot>{{ props.text }}</slot>
	</a>
</template>

<style scoped>
@import url('./NeoLink-layout.css');
@import url('./NeoLink-themed.css');

.NeoLink {
	color: var(--NeoLink-color-text);
	cursor: pointer;
	font-size: var(--NeoLink-sizing-fontSize);
	font-weight: 500;
	text-decoration: none;
	transition:
		color 0.2s,
		text-decoration 0.2s;

	&:hover {
		color: var(--NeoLink-color-textHover);
	}

	&:focus-visible {
		outline: 2px solid var(--NeoLink-color-focus);
		outline-offset: 2px;
	}
}

.NeoLink--underline {
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration-thickness: 2px;
	}
}

.NeoLink--button {
	align-items: center;
	background-color: var(--NeoLink-color-buttonBackground);
	border-radius: 4px;
	display: inline-flex;
	justify-content: center;
	padding: var(--NeoLink-sizing-buttonPadding);

	&:hover {
		background-color: var(--NeoLink-color-buttonBackgroundHover);
	}
}

.NeoLink--disabled {
	cursor: not-allowed;
	opacity: 0.6;
	pointer-events: none;
}
</style>
