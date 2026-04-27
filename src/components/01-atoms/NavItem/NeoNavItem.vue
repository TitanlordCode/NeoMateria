<script setup lang="ts">
import { computed } from 'vue'
import type { NeoNavItemProps } from './NeoNavItemTypes'
import { getClassNames } from '@/utils/classNames'

const props = withDefaults(defineProps<NeoNavItemProps>(), {
	size: 'medium',
	level: 0,
	expanded: false,
	hasChildren: false,
	showConnector: false,
})

const emit = defineEmits<{
	/** Emitted when a leaf item (no children) is clicked. */
	click: [event: MouseEvent]
	/** Emitted when a parent item (with children) is clicked to expand or collapse. */
	toggle: []
}>()

const visualLevel = computed(() => Math.min(props.level, 3))

const classes = computed(() => {
	const navItemClasses = getClassNames({
		component: 'NeoNavItem',
		modifiers: [props.size],
		states: [
			props.active ? 'active' : '',
			props.disabled ? 'disabled' : '',
			props.hasChildren ? 'hasChildren' : '',
			props.expanded ? 'expanded' : '',
			props.level > 0 ? `level-${visualLevel.value}` : '',
			props.showConnector && props.level > 0 ? 'connector' : '',
		],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${navItemClasses} ${themedClasses}`
})

const indentStyle = computed(() => ({
	'--NeoNavItem-sizing-level': props.level,
}))

const isLink = computed(() => Boolean(props.href) && !props.hasChildren)

const handleClick = (event: MouseEvent) => {
	if (props.disabled) {
		event.preventDefault()
		return
	}

	if (props.hasChildren) {
		event.preventDefault()
		emit('toggle')
	}

	emit('click', event)
}

const handleKeydown = (event: KeyboardEvent) => {
	if (event.key === 'Enter' || event.key === ' ') {
		if (props.hasChildren) {
			event.preventDefault()
			emit('toggle')
		}
	}
}
</script>

<template>
	<component
		:is="isLink ? 'a' : 'button'"
		:class="classes"
		:style="indentStyle"
		:href="isLink ? props.href : undefined"
		:target="isLink && props.external ? '_blank' : undefined"
		:rel="isLink && props.external ? 'noopener noreferrer' : undefined"
		:disabled="props.disabled && !isLink"
		:aria-disabled="props.disabled"
		:aria-current="props.active ? 'page' : undefined"
		:aria-expanded="props.hasChildren ? props.expanded : undefined"
		:aria-label="props.ariaLabel"
		:type="isLink ? undefined : 'button'"
		@click="handleClick"
		@keydown="handleKeydown"
	>
		<span class="NeoNavItem-content">
			<span v-if="$slots.iconStart" class="NeoNavItem-iconStart">
				<slot name="iconStart" />
			</span>
			<span class="NeoNavItem-label">{{ props.label }}</span>
			<span v-if="$slots.iconEnd" class="NeoNavItem-iconEnd">
				<slot name="iconEnd" />
			</span>
			<span v-else-if="props.hasChildren" class="NeoNavItem-expandIcon">
				<svg
					class="NeoNavItem-chevron"
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
			</span>
		</span>
	</component>
</template>

<style scoped>
@import url('./NeoNavItem-themed.css');
@import url('./NeoNavItem-layout.css');

.NeoNavItem {
	align-items: center;
	background: transparent;
	border: none;
	border-radius: var(--NeoNavItem-sizing-borderRadius);
	box-sizing: border-box;
	color: var(--NeoNavItem-color-text);
	cursor: pointer;
	display: flex;
	font-family: inherit;
	font-size: var(--NeoNavItem-sizing-fontSize);
	font-weight: 500;
	inline-size: 100%;
	padding-block: var(--NeoNavItem-sizing-paddingBlock);
	padding-inline-end: var(--NeoNavItem-sizing-paddingInline);
	padding-inline-start: calc(
		var(--NeoNavItem-sizing-paddingInline) +
			(var(--NeoNavItem-sizing-level, 0) * var(--NeoNavItem-sizing-indent))
	);
	text-align: start;
	text-decoration: none;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;

	&:focus-visible {
		outline: 2px solid var(--NeoNavItem-color-outline);
		outline-offset: -2px;
	}

	&:hover:not(.is-disabled) {
		background-color: var(--NeoNavItem-color-backgroundHover);
		color: var(--NeoNavItem-color-textHover);
	}
}

.NeoNavItem.is-active {
	background-color: var(--NeoNavItem-color-backgroundActive);
	color: var(--NeoNavItem-color-textActive);
	font-weight: 600;
}

.NeoNavItem.is-disabled {
	color: var(--NeoNavItem-color-textDisabled);
	cursor: not-allowed;
	opacity: 0.6;
}

.NeoNavItem-content {
	align-items: center;
	display: flex;
	gap: var(--NeoNavItem-sizing-gap);
	inline-size: 100%;
}

.NeoNavItem-iconStart,
.NeoNavItem-iconEnd,
.NeoNavItem-expandIcon {
	align-items: center;
	display: flex;
	flex-shrink: 0;
}

.NeoNavItem-label {
	flex: 1;
	min-inline-size: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.NeoNavItem-chevron {
	transition: transform 0.2s ease;
}

.NeoNavItem.is-expanded .NeoNavItem-chevron {
	transform: rotate(180deg);
}

/* Level-based font size reduction */
.NeoNavItem.is-level-1 {
	font-size: var(--NeoNavItem-sizing-fontSizeLevel1);
}

.NeoNavItem.is-level-2 {
	font-size: var(--NeoNavItem-sizing-fontSizeLevel2);
}

.NeoNavItem.is-level-3 {
	font-size: var(--NeoNavItem-sizing-fontSizeLevel3);
}

/* Connector line for hierarchy visualization */
.NeoNavItem.is-connector {
	position: relative;

	&::before {
		background-color: var(--NeoNavItem-color-connector);
		block-size: 100%;
		content: '';
		inline-size: var(--NeoNavItem-sizing-connectorThickness);
		inset-block-start: 0;
		inset-inline-start: calc(
			var(--NeoNavItem-sizing-connectorOffset) +
				((var(--NeoNavItem-sizing-level, 1) - 1) * var(--NeoNavItem-sizing-indent))
		);
		position: absolute;
	}

	&::after {
		background-color: var(--NeoNavItem-color-connector);
		block-size: var(--NeoNavItem-sizing-connectorThickness);
		content: '';
		inline-size: calc(var(--NeoNavItem-sizing-indent) / 2);
		inset-block-start: 50%;
		inset-inline-start: calc(
			var(--NeoNavItem-sizing-connectorOffset) +
				((var(--NeoNavItem-sizing-level, 1) - 1) * var(--NeoNavItem-sizing-indent))
		);
		position: absolute;
	}
}
</style>
