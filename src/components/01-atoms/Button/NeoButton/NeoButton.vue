<script setup lang="ts">
import { useAttrs } from 'vue'
import type { NeoButtonProps, NeoButtonSlots } from './NeoButtonTypes'
import { useButton } from '../useButton'
import NeoIcon from '../../Icon/NeoIcon.vue'

const props = defineProps<NeoButtonProps>()

defineSlots<NeoButtonSlots>()

const emit = defineEmits<{
	/** Emitted when the button is clicked. Not fired when `disabled` is `true`. */
	click: [event: MouseEvent]
}>()

const attrs = useAttrs()

const { classes } = useButton(props)

const handleClick = (event: MouseEvent) => {
	if (!props.disabled) {
		emit('click', event)
	}
}
</script>

<template>
	<button
		v-bind="attrs"
		:aria-label="props.ariaLabel"
		:aria-pressed="props.pressed"
		:class="classes"
		:disabled="props.disabled ?? undefined"
		@click="handleClick"
	>
		<slot name="prefix" />
		<NeoIcon v-if="$slots.iconStart" size="medium" aria-hidden>
			<slot name="iconStart" />
		</NeoIcon>
		<slot>{{ props.text }}</slot>
		<NeoIcon v-if="$slots.iconEnd" size="medium" aria-hidden>
			<slot name="iconEnd" />
		</NeoIcon>
		<slot name="suffix" />
	</button>
</template>

<style scoped>
@import url('./NeoButton-themed.css');
@import url('./NeoButton-layout.css');

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
	hyphens: auto;
	justify-content: center;
	min-block-size: var(--NeoButton-sizing-inline);
	min-inline-size: var(--NeoButton-sizing-inline);
	overflow-wrap: break-word;
	padding: var(--NeoButton-sizing-padding);
	text-decoration: none;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

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

		&:disabled {
			transform: none;
		}
	}
}

.NeoButton--primary.NeoButton--pressed {
	filter: brightness(0.9);
}

.NeoButton--secondary {
	&:hover {
		box-shadow: 0 0 0 2px var(--NeoButton-color-focus);

		&:disabled {
			box-shadow: none;
		}
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

/* Icons inside a button always inherit the button's current text color,
   including hover/pressed state changes */
:deep(.NeoIcon) {
	--NeoIcon-color-icon: currentcolor;
}
</style>
