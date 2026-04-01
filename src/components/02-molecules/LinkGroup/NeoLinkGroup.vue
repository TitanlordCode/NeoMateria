<script setup lang="ts">
import { computed } from 'vue'
import type { NeoLinkGroupProps, NeoLinkGroupSlots } from './NeoLinkGroupTypes'
import { getClassNames } from '@/utils/classNames'
import NeoLink from '../../01-atoms/Link/NeoLink.vue'
import NeoHeadlineQuaternary from '../../01-atoms/Headline/NeoHeadlineQuaternary/NeoHeadlineQuaternary.vue'

const props = defineProps<NeoLinkGroupProps>()

defineSlots<NeoLinkGroupSlots>()

const classes = computed(() => {
	const groupClasses = getClassNames({
		component: 'NeoLinkGroup',
		modifiers: [props.size ?? 'medium', props.variant ?? 'vertical'],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${groupClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes">
		<slot name="title">
			<NeoHeadlineQuaternary
				v-if="props.title"
				:tag="props.headingTag ?? 'h4'"
				class="NeoLinkGroup-title"
				>{{ props.title }}</NeoHeadlineQuaternary
			>
		</slot>
		<nav class="NeoLinkGroup-links" :aria-label="props.ariaLabel ?? props.title">
			<slot>
				<NeoLink
					v-for="(link, index) in props.links"
					:key="index"
					:href="link.href"
					:external="link.external"
					:color="props.color ?? 'blue'"
					:size="props.size ?? 'medium'"
					variant="default"
					:class="`NeoLinkGroup-link${link.active ? ' NeoLinkGroup-link--active' : ''}`"
					:aria-current="link.active ? 'page' : undefined"
				>
					{{ link.text }}
				</NeoLink>
			</slot>
		</nav>
	</div>
</template>

<style scoped>
@import url('./NeoLinkGroup-themed.css');
@import url('./NeoLinkGroup-layout.css');

.NeoLinkGroup {
	display: flex;
	flex-direction: column;
	font-family: inherit;
	gap: var(--NeoLinkGroup-sizing-gap);
}

.NeoLinkGroup-title {
	color: var(--NeoLinkGroup-color-title);
	font-size: var(--NeoLinkGroup-sizing-titleFontSize);
	font-weight: 600;
	margin: 0;
}

.NeoLinkGroup-links {
	display: flex;
	gap: var(--NeoLinkGroup-sizing-linkGap);
}

.NeoLinkGroup--vertical .NeoLinkGroup-links {
	flex-direction: column;
}

.NeoLinkGroup--horizontal .NeoLinkGroup-links {
	flex-direction: row;
	flex-wrap: wrap;
}

.NeoLinkGroup-link {
	color: var(--NeoLinkGroup-color-link);
	font-size: var(--NeoLinkGroup-sizing-linkFontSize);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--NeoLinkGroup-color-linkHover);
	}
}

.NeoLinkGroup-link--active {
	color: var(--NeoLinkGroup-color-linkActive);
	font-weight: 600;
}
</style>
