<script setup lang="ts">
import { computed } from 'vue'
import type { NeoCardProps } from './NeoCardTypes'
import { getClassNames } from '@/utils/classNames'
import NeoImage from '../../01-atoms/Image/NeoImage.vue'
import NeoBadge from '../../01-atoms/Badge/NeoBadge.vue'
import NeoButton from '../../01-atoms/Button/NeoButton/NeoButton.vue'
import NeoLink from '../../01-atoms/Link/NeoLink.vue'

const props = defineProps<NeoCardProps>()

const emit = defineEmits<{
	/** Emitted when the primary action button is clicked. Only fires when `href` is not set. */
	'action-click': [event: MouseEvent]
	/** Emitted when the secondary action button is clicked. Only fires when `href` is not set. */
	'secondary-action-click': [event: MouseEvent]
	/** Emitted when the card body is clicked. Only fires when `href` is not set. */
	'card-click': [event: MouseEvent]
}>()

const isClickable = computed(() => Boolean(props.href))

const classes = computed(() => {
	const cardClasses = getClassNames({
		component: 'NeoCard',
		modifiers: [
			props.size ?? 'medium',
			props.variant ?? 'default',
			props.rounded ? 'rounded' : '',
			isClickable.value ? 'clickable' : '',
		],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${cardClasses} ${themedClasses}`
})

const handleActionClick = (event: MouseEvent) => {
	emit('action-click', event)
}

const handleSecondaryActionClick = (event: MouseEvent) => {
	emit('secondary-action-click', event)
}

const handleCardClick = (event: MouseEvent) => {
	emit('card-click', event)
}
</script>

<template>
	<component
		:is="isClickable ? 'a' : 'article'"
		:class="classes"
		:href="isClickable ? props.href : undefined"
		:target="isClickable && props.external ? '_blank' : undefined"
		:rel="isClickable && props.external ? 'noopener noreferrer' : undefined"
		@click="isClickable ? handleCardClick($event) : undefined"
	>
		<div class="NeoCard-imageWrapper">
			<NeoImage
				:src="props.imageSrc"
				:alt="props.imageAlt"
				:object-fit="props.imageObjectFit ?? 'cover'"
				class="NeoCard-image"
			/>
		</div>
		<div class="NeoCard-content">
			<div v-if="props.tags && props.tags.length > 0" class="NeoCard-tags">
				<NeoBadge
					v-for="(tag, index) in props.tags"
					:key="index"
					:text="tag.text"
					:color="tag.color ?? props.color"
					size="small"
					variant="solid"
					rounded
				/>
			</div>
			<h3 class="NeoCard-title">{{ props.title }}</h3>
			<p v-if="props.description" class="NeoCard-description">
				{{ props.description }}
			</p>
			<div
				v-if="!isClickable && (props.actionText || props.secondaryActionText)"
				class="NeoCard-actions"
			>
				<NeoButton
					v-if="props.actionText"
					:text="props.actionText"
					:color="props.color"
					size="medium"
					variant="primary"
					rounded
					@click="handleActionClick"
				/>
				<NeoLink
					v-if="props.secondaryActionText && props.secondaryActionHref"
					:href="props.secondaryActionHref"
					:color="props.color"
					size="medium"
					variant="default"
					@click="handleSecondaryActionClick"
				>
					{{ props.secondaryActionText }}
				</NeoLink>
			</div>
		</div>
	</component>
</template>

<style scoped>
@import url('./NeoCard-themed.css');
@import url('./NeoCard-layout.css');

.NeoCard {
	background-color: var(--NeoCard-color-background);
	border: var(--NeoCard-sizing-borderWidth) solid var(--NeoCard-color-border);
	border-radius: var(--NeoCard-sizing-borderRadius);
	box-shadow: 0 2px 8px var(--NeoCard-color-shadow);
	display: flex;
	flex-direction: column;
	font-family: inherit;
	overflow: hidden;
	transition: box-shadow 0.2s ease;

	&:hover {
		box-shadow: 0 4px 16px var(--NeoCard-color-hoverShadow);
	}
}

.NeoCard-imageWrapper {
	block-size: var(--NeoCard-sizing-imageHeight);
	inline-size: 100%;
	overflow: hidden;
	position: relative;
}

.NeoCard-image {
	block-size: 100%;
	inline-size: 100%;
}

.NeoCard-content {
	display: flex;
	flex-direction: column;
	gap: var(--NeoCard-sizing-gap);
	padding: var(--NeoCard-sizing-padding);
}

.NeoCard-tags {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	gap: var(--NeoCard-sizing-tagGap);
}

.NeoCard-title {
	-webkit-box-orient: vertical;
	color: var(--NeoCard-color-title);
	display: -webkit-box;
	font-size: var(--NeoCard-sizing-titleFont);
	font-weight: 600;
	hyphens: auto;
	-webkit-line-clamp: var(--NeoCard-sizing-titleClamp);
	line-clamp: var(--NeoCard-sizing-titleClamp);
	line-height: 1.3;
	margin: 0;
	overflow: hidden;
	overflow-wrap: break-word;
}

.NeoCard-description {
	-webkit-box-orient: vertical;
	color: var(--NeoCard-color-description);
	display: -webkit-box;
	font-size: var(--NeoCard-sizing-descriptionFont);
	hyphens: auto;
	-webkit-line-clamp: var(--NeoCard-sizing-descriptionClamp);
	line-clamp: var(--NeoCard-sizing-descriptionClamp);
	line-height: 1.5;
	margin: 0;
	overflow: hidden;
	overflow-wrap: break-word;
}

.NeoCard-actions {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	gap: var(--neo-gap-sm);
	margin-block-start: auto;
}

/* Compact variant: horizontal layout on medium+ screens */
.NeoCard--compact {
	@mixin bp-md {
		flex-direction: row;

		& .NeoCard-imageWrapper {
			block-size: 100%;
			flex: 0 0 200px;
		}

		& .NeoCard-content {
			flex: 1;
		}
	}
}

/* Featured variant styling */
.NeoCard--featured {
	& .NeoCard-title {
		font-size: var(--neo-fontSize-headlineSm);
		font-weight: 700;
	}
}

/* Clickable card styling */
.NeoCard--clickable {
	cursor: pointer;
	text-decoration: none;
	transition:
		box-shadow 0.2s ease,
		transform 0.2s ease;

	&:hover {
		box-shadow: 0 6px 20px var(--NeoCard-color-hoverShadow);
		transform: translateY(-2px);
	}

	&:focus-visible {
		outline: 2px solid var(--neo-theme-color);
		outline-offset: 2px;
	}

	&:active {
		transform: translateY(0);
	}
}
</style>
