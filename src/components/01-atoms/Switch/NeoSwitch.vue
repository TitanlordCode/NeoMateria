<script setup lang="ts">
import { computed } from 'vue'
import type { NeoSwitchProps } from './NeoSwitchTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoSwitchProps>()

const emit = defineEmits<{
	/** Emitted when the switch is toggled. Receives the new boolean value. */
	'update:modelValue': [value: boolean]
}>()

const classes = computed(() => {
	const switchClasses = getClassNames({
		component: 'NeoSwitch',
		modifiers: [props.size ?? 'medium'],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color],
	})
	return `${switchClasses} ${themedClasses}`
})

const handleChange = (event: Event) => {
	const target = event.target as HTMLInputElement
	emit('update:modelValue', target.checked)
}
</script>

<template>
	<label :class="classes">
		<input
			class="NeoSwitch-input"
			type="checkbox"
			role="switch"
			:checked="props.modelValue"
			:disabled="props.disabled"
			:aria-label="props.ariaLabel"
			:aria-checked="props.modelValue"
			@change="handleChange"
		/>
		<span class="NeoSwitch-track" aria-hidden="true">
			<span class="NeoSwitch-thumb" />
		</span>
		<span v-if="props.label" class="NeoSwitch-label">{{ props.label }}</span>
	</label>
</template>

<style scoped>
@import url('./NeoSwitch-layout.css');
@import url('./NeoSwitch-themed.css');

.NeoSwitch {
	align-items: center;
	cursor: pointer;
	display: inline-flex;
	font-family: inherit;
	gap: var(--NeoSwitch-sizing-gap);
	user-select: none;
}

/* Base styles must come before compound selectors (no-descending-specificity). */
.NeoSwitch-track {
	background-color: var(--NeoSwitch-color-trackOff);
	block-size: var(--NeoSwitch-sizing-trackHeight);
	border-radius: 9999px;
	display: inline-block;
	flex-shrink: 0;
	inline-size: var(--NeoSwitch-sizing-trackWidth);
	position: relative;
	transition: background-color 0.2s;
}

.NeoSwitch-thumb {
	background-color: var(--NeoSwitch-color-thumb);
	block-size: var(--NeoSwitch-sizing-thumbSize);
	border-radius: 50%;
	box-shadow: 0 1px 3px var(--NeoSwitch-color-thumbShadow);
	inline-size: var(--NeoSwitch-sizing-thumbSize);
	inset-block-start: var(--NeoSwitch-sizing-thumbOffset);
	inset-inline-start: var(--NeoSwitch-sizing-thumbOffset);
	position: absolute;
	transition: transform 0.2s;
}

.NeoSwitch-label {
	color: var(--NeoSwitch-color-label);
	font-size: var(--NeoSwitch-fontSize-label);
}

.NeoSwitch-input {
	block-size: 0;
	inline-size: 0;
	opacity: 0;
	position: absolute;

	&:focus-visible + .NeoSwitch-track {
		outline: 2px solid var(--NeoSwitch-color-focus);
		outline-offset: 2px;
	}

	&:disabled ~ .NeoSwitch-track,
	&:disabled ~ .NeoSwitch-label {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:checked + .NeoSwitch-track {
		background-color: var(--NeoSwitch-color-trackOn);
	}

	&:checked + .NeoSwitch-track .NeoSwitch-thumb {
		transform: translateX(var(--NeoSwitch-sizing-thumbTravel));
	}
}

.NeoSwitch:has(.NeoSwitch-input:disabled) {
	cursor: not-allowed;
}
</style>
