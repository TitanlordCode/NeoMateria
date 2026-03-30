<script setup lang="ts">
import { computed } from 'vue'
import type { NeoFooterProps, NeoFooterSlots } from './NeoFooterTypes'
import { getClassNames } from '@/utils/classNames'
import NeoLinkGroup from '../../02-molecules/LinkGroup/NeoLinkGroup.vue'

const props = defineProps<NeoFooterProps>()

defineSlots<NeoFooterSlots>()

const classes = computed(() => {
	const footerClasses = getClassNames({
		component: 'NeoFooter',
		modifiers: [props.layout ?? 'multi-column'],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${footerClasses} ${themedClasses}`
})
</script>

<template>
	<footer :class="classes" :aria-label="props.ariaLabel ?? 'Footer'">
		<div class="NeoFooter-content">
			<div v-if="$slots.logo" class="NeoFooter-logo">
				<slot name="logo" />
			</div>

			<div v-if="props.sections && props.sections.length > 0" class="NeoFooter-sections">
				<slot name="sections">
					<NeoLinkGroup
						v-for="(section, index) in props.sections"
						:key="section.title + '-' + index"
						:title="section.title"
						:links="section.links"
						:color="props.color"
						size="small"
						variant="vertical"
						class="NeoFooter-section"
					/>
				</slot>
			</div>

			<div v-if="$slots.social" class="NeoFooter-social">
				<slot name="social" />
			</div>

			<div v-if="props.copyrightText || $slots.legal" class="NeoFooter-bottom">
				<div v-if="$slots.legal" class="NeoFooter-legal">
					<slot name="legal" />
				</div>
				<p v-if="props.copyrightText" class="NeoFooter-copyright">
					{{ props.copyrightText }}
				</p>
			</div>

			<div v-if="$slots.bottom" class="NeoFooter-bottomSlot">
				<slot name="bottom" />
			</div>
		</div>
	</footer>
</template>

<style scoped>
@import url('./NeoFooter-themed.css');
@import url('./NeoFooter-layout.css');

.NeoFooter {
	background-color: var(--NeoFooter-color-background);
	border-block-start: 1px solid var(--NeoFooter-color-border);
	font-family: inherit;
	padding: var(--NeoFooter-sizing-padding);
}

.NeoFooter-content {
	display: flex;
	flex-direction: column;
	gap: var(--NeoFooter-sizing-gap);
	margin: 0 auto;
	max-inline-size: 1280px;
}

.NeoFooter-logo {
	margin-block-end: var(--neo-spacing-core-md);
}

.NeoFooter-sections {
	display: flex;
	flex-wrap: wrap;
	gap: var(--NeoFooter-sizing-sectionGap);
}

.NeoFooter-section {
	min-inline-size: 150px;
}

.NeoFooter-social {
	border-block-start: 1px solid var(--NeoFooter-color-border);
	display: flex;
	gap: var(--neo-gap-md);
	padding-block-start: var(--neo-spacing-core-lg);
}

.NeoFooter-bottom {
	border-block-start: 1px solid var(--NeoFooter-color-border);
	display: flex;
	flex-direction: column;
	gap: var(--neo-gap-sm);
	padding-block-start: var(--neo-spacing-core-lg);

	@mixin bp-md {
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
}

.NeoFooter-legal {
	display: flex;
	flex-wrap: wrap;
	gap: var(--neo-gap-md);
}

.NeoFooter-copyright {
	color: var(--NeoFooter-color-copyright);
	font-size: var(--NeoFooter-sizing-copyrightFont);
	margin: 0;
}

.NeoFooter-bottomSlot {
	border-block-start: 1px solid var(--NeoFooter-color-border);
	padding-block-start: var(--neo-spacing-core-lg);
}

.NeoFooter--simple {
	& .NeoFooter-sections {
		display: flex;
		flex-direction: column;
		gap: var(--NeoFooter-sizing-sectionGap);
	}
}

.NeoFooter--multi-column {
	& .NeoFooter-sections {
		display: grid;
		gap: var(--NeoFooter-sizing-sectionGap);
		grid-template-columns: 1fr;

		@mixin bp-sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@mixin bp-md {
			grid-template-columns: repeat(3, 1fr);
		}

		@mixin bp-lg {
			grid-template-columns: repeat(4, 1fr);
		}
	}
}

.NeoFooter--centered {
	& .NeoFooter-content {
		align-items: center;
		text-align: center;
	}

	& .NeoFooter-section {
		align-items: center;
	}

	& .NeoFooter-sections {
		justify-content: center;
	}
}
</style>
