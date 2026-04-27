<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import type { NeoAccordionProps, NeoAccordionSlots } from './NeoAccordionTypes'
import { getClassNames } from '@/utils/classNames'
import NeoButton from '../../01-atoms/Button/NeoButton/NeoButton.vue'

const props = defineProps<NeoAccordionProps>()

defineSlots<NeoAccordionSlots>()

const emit = defineEmits<{
	/** Emitted when the header is clicked. Receives the new expanded state as a boolean. */
	toggle: [isExpanded: boolean]
}>()

const isExpanded = ref(props.defaultExpanded ?? false)
const contentId = useId()
const triggerId = useId()

const classes = computed(() => {
	const accordionClasses = getClassNames({
		component: 'NeoAccordion',
		modifiers: [props.size ?? 'medium', props.variant ?? 'default'],
		states: [isExpanded.value ? 'expanded' : ''],
	})
	return accordionClasses
})

const toggle = () => {
	if (props.disabled) return
	isExpanded.value = !isExpanded.value
	emit('toggle', isExpanded.value)
}

const handleKeydown = (event: KeyboardEvent) => {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault()
		toggle()
	}
}
</script>

<template>
	<div :class="classes">
		<slot name="trigger" :is-expanded="isExpanded" :toggle="toggle">
			<NeoButton
				:id="triggerId"
				:text="props.title"
				:color="'grey'"
				:size="props.size ?? 'medium'"
				variant="ghost"
				:disabled="props.disabled"
				class="NeoAccordion-trigger"
				:aria-expanded="isExpanded"
				:aria-controls="contentId"
				@click="toggle"
				@keydown="handleKeydown"
			>
				<template #iconEnd>
					<slot name="icon" :is-expanded="isExpanded">
						<svg
							class="NeoAccordion-icon"
							:class="{ 'is-expanded': isExpanded }"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</slot>
				</template>
			</NeoButton>
		</slot>
		<div
			v-show="isExpanded"
			:id="contentId"
			class="NeoAccordion-content"
			role="region"
			:aria-labelledby="triggerId"
			:aria-hidden="!isExpanded"
		>
			<slot />
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoAccordion-themed.css');
@import url('./NeoAccordion-layout.css');

.NeoAccordion {
	display: flex;
	flex-direction: column;
	font-family: inherit;
	inline-size: 100%;
}

.NeoAccordion-trigger {
	color: var(--NeoAccordion-color-trigger);
	font-size: var(--NeoAccordion-sizing-fontSize);
	gap: var(--NeoAccordion-sizing-triggerGap);
	justify-content: space-between;
	text-align: start;
}

.NeoAccordion-icon {
	flex-shrink: 0;
	transition: transform 0.2s ease;

	&.is-expanded {
		transform: rotate(180deg);
	}
}

.NeoAccordion-content {
	color: var(--NeoAccordion-color-content);
	font-size: var(--NeoAccordion-sizing-contentFontSize);
	padding-block-start: var(--NeoAccordion-sizing-contentPadding);
}

.NeoAccordion--bordered {
	border: 1px solid var(--NeoAccordion-color-border);
	border-radius: var(--NeoAccordion-sizing-containerBorderRadius);
	padding: var(--NeoAccordion-sizing-containerPadding);
}

.NeoAccordion--filled {
	background-color: var(--NeoAccordion-color-background);
	border-radius: var(--NeoAccordion-sizing-containerBorderRadius);
	padding: var(--NeoAccordion-sizing-containerPadding);
}
</style>
