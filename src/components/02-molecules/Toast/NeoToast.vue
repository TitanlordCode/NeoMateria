<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { NeoToastProps, NeoToastSlots } from './NeoToastTypes'
import { getClassNames } from '@/utils/classNames'
import { dismissToast } from './toastStore'
import NeoIcon from '@/components/01-atoms/Icon/NeoIcon.vue'
import NeoIconButton from '@/components/01-atoms/Button/NeoIconButton/NeoIconButton.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import {
	CheckIcon,
	CloseIcon,
	ErrorIcon,
	InfoIcon,
	WarningIcon,
} from '@/components/01-atoms/Icon/defaultIcons'

const props = defineProps<NeoToastProps>()
defineSlots<NeoToastSlots>()

const SEVERITY_ICON = {
	success: CheckIcon,
	info: InfoIcon,
	warning: WarningIcon,
	error: ErrorIcon,
} as const

const classes = computed(() => {
	const toastClasses = getClassNames({
		component: 'NeoToast',
		modifiers: [props.entry.severity],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.entry.color],
	})
	return `${toastClasses} ${themedClasses}`
})

const role = computed(() => (props.entry.ariaLive === 'assertive' ? 'alert' : 'status'))

const rootRef = ref<HTMLElement | null>(null)
const paused = ref(false)
let timerId: ReturnType<typeof setTimeout> | null = null
let remaining = props.entry.duration
let startedAt = 0

const clearTimer = () => {
	if (timerId !== null) {
		clearTimeout(timerId)
		timerId = null
	}
}

const handleDismiss = () => {
	clearTimer()
	dismissToast(props.entry.id)
}

const handleActionClick = () => {
	props.entry.action?.onClick(props.entry.id)
	handleDismiss()
}

const scheduleDismiss = () => {
	if (remaining <= 0) return
	startedAt = Date.now()
	timerId = setTimeout(handleDismiss, remaining)
}

const handlePauseStart = () => {
	if (paused.value || timerId === null) return
	paused.value = true
	remaining -= Date.now() - startedAt
	clearTimer()
}

const handlePauseEnd = () => {
	if (!paused.value) return
	paused.value = false
	scheduleDismiss()
}

watch(
	() => props.entry.createdAt,
	() => {
		// `toast.promise` replaces an entry in place — reset the timer to the new duration.
		clearTimer()
		paused.value = false
		remaining = props.entry.duration
		scheduleDismiss()
	},
)

onMounted(() => {
	scheduleDismiss()
})

onBeforeUnmount(() => {
	clearTimer()
})
</script>

<template>
	<div
		ref="rootRef"
		:class="classes"
		:role="role"
		:aria-live="props.entry.ariaLive"
		aria-atomic="true"
		@mouseenter="handlePauseStart"
		@mouseleave="handlePauseEnd"
		@focusin="handlePauseStart"
		@focusout="handlePauseEnd"
	>
		<div v-if="props.entry.showIcon" class="NeoToast-icon">
			<slot name="icon" :entry="props.entry">
				<NeoIcon size="medium" aria-hidden>
					<component :is="SEVERITY_ICON[props.entry.severity]" />
				</NeoIcon>
			</slot>
		</div>

		<div class="NeoToast-content">
			<slot name="message" :entry="props.entry">
				<p class="NeoToast-message">{{ props.entry.message }}</p>
			</slot>
		</div>

		<div v-if="props.entry.action" class="NeoToast-action">
			<NeoButton
				:color="props.entry.color"
				variant="tertiary"
				size="small"
				:text="props.entry.action.label"
				@click="handleActionClick"
			/>
		</div>

		<div v-if="props.entry.closable" class="NeoToast-close">
			<NeoIconButton
				:color="props.entry.color"
				variant="tertiary"
				size="small"
				ariaLabel="Dismiss notification"
				@click="handleDismiss"
			>
				<component :is="CloseIcon" />
			</NeoIconButton>
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoToast-themed.css');
@import url('./NeoToast-layout.css');

.NeoToast {
	align-items: center;
	background-color: var(--NeoToast-color-background);
	border: var(--NeoToast-sizing-borderWidth) solid var(--NeoToast-color-border);
	border-radius: var(--NeoToast-sizing-borderRadius);
	box-shadow: var(--NeoToast-color-shadow);
	color: var(--NeoToast-color-text);
	display: flex;
	gap: var(--NeoToast-sizing-gap);
	max-inline-size: var(--NeoToast-sizing-maxWidth);
	min-inline-size: var(--NeoToast-sizing-minWidth);
	padding: var(--NeoToast-sizing-padding);
	pointer-events: auto;
	position: relative;
}

.NeoToast-icon {
	color: var(--NeoToast-color-icon);
	flex-shrink: 0;
}

/* Thread the toast's accessible icon color into the slotted NeoIcon — without this
   the icon falls back to its own theme color (which is `grey` when no `color` prop
   is passed) and loses the severity tint. */
:deep(.NeoToast-icon .NeoIcon) {
	--NeoIcon-color-icon: var(--NeoToast-color-icon);
}

/* Tertiary buttons inside the toast (close + action) default to `--neo-theme-color`,
   which renders as amber/yellow-500 for warnings — too light on white. Route them
   through the toast's accessible color so every severity stays visible. */
:deep(.NeoToast-close .NeoButton),
:deep(.NeoToast-action .NeoButton) {
	--NeoButton-color-text: var(--NeoToast-color-icon);
}

.NeoToast-content {
	flex: 1;
	min-inline-size: 0;
}

.NeoToast-message {
	hyphens: auto;
	line-height: 1.4;
	margin: 0;
	overflow-wrap: break-word;
}

.NeoToast-action {
	flex-shrink: 0;
}

.NeoToast-close {
	flex-shrink: 0;
}
</style>
