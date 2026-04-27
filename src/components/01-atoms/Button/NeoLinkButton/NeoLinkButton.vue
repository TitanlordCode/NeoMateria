<script setup lang="ts">
import type { NeoLinkButtonProps, NeoLinkButtonSlots } from './NeoLinkButtonTypes'
import { useButton } from '../useButton'
import NeoIcon from '../../Icon/NeoIcon.vue'

const props = defineProps<NeoLinkButtonProps>()

defineSlots<NeoLinkButtonSlots>()

const { classes } = useButton(props)
</script>

<template>
	<a
		:aria-label="props.ariaLabel"
		:class="classes"
		:href="props.href"
		:rel="props.external ? 'noopener noreferrer' : undefined"
		:target="props.external ? '_blank' : undefined"
	>
		<slot name="prefix" />
		<NeoIcon
			v-if="$slots.iconStart"
			color-variant="text"
			:color="props.color"
			size="medium"
			aria-hidden
		>
			<slot name="iconStart" />
		</NeoIcon>
		<slot>{{ props.text }}</slot>
		<NeoIcon
			v-if="$slots.iconEnd"
			color-variant="text"
			:color="props.color"
			size="medium"
			aria-hidden
		>
			<slot name="iconEnd" />
		</NeoIcon>
		<slot name="suffix" />
	</a>
</template>

<style scoped>
@import url('../NeoButton/NeoButton-themed.css');
@import url('../NeoButton/NeoButton-layout.css');

.NeoButton {
	align-items: center;
	background-color: var(--NeoButton-color-background);
	border-color: var(--NeoButton-color-border);
	border-radius: var(--NeoButton-sizing-borderRadius);
	border-style: solid;
	border-width: var(--NeoButton-sizing-borderWidth);
	color: var(--NeoButton-color-text);
	display: inline-flex;
	font-family: inherit;
	font-size: var(--NeoButton-sizing-fontSize);
	font-weight: 600;
	gap: var(--NeoButton-sizing-gap);
	justify-content: center;
	min-block-size: var(--NeoButton-sizing-inline);
	min-inline-size: var(--NeoButton-sizing-inline);
	padding: var(--NeoButton-sizing-padding);
	text-decoration: none;

	&:focus-visible {
		outline-color: var(--NeoButton-color-focus);
	}

	&:hover {
		cursor: pointer;
	}
}

.NeoButton--fullWidth {
	inline-size: 100%;
	justify-content: space-between;
}

.NeoButton--ghost {
	font-weight: 500;
	min-block-size: unset;
}

.NeoButton--primary {
	&:hover {
		transform: scale(1.05);
	}
}

.NeoButton--primary.NeoButton--pressed {
	filter: brightness(0.9);
}

.NeoButton--secondary {
	&:hover {
		box-shadow: 0 0 0 2px var(--NeoButton-color-focus);
	}
}

.NeoButton--secondary.NeoButton--pressed {
	box-shadow: 0 0 0 2px var(--NeoButton-color-focus);
}

.NeoButton--tertiary {
	&:hover {
		text-decoration: 2px underline;
		text-underline-offset: 4px;
	}
}

.NeoButton--tertiary.NeoButton--pressed {
	text-decoration: 2px underline;
	text-underline-offset: 4px;
}
</style>
