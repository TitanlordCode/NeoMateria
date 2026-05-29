<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, useTemplateRef } from 'vue'
import type {
	NeoNavigationProps,
	NeoNavigationLink,
	NeoNavigationSlots,
	NeoNavigationExpose,
} from './NeoNavigationTypes'
import { getClassNames } from '@/utils/classNames'
import NeoLink from '../../01-atoms/Link/NeoLink.vue'
import NeoButton from '../../01-atoms/Button/NeoButton/NeoButton.vue'
import NeoIconButton from '../../01-atoms/Button/NeoIconButton/NeoIconButton.vue'
import NeoNavItem from '../../01-atoms/NavItem/NeoNavItem.vue'
import NeoSheet from '../../02-molecules/Sheet/NeoSheet.vue'
import NeoDropdown from '../../02-molecules/Dropdown/NeoDropdown.vue'

const props = defineProps<NeoNavigationProps>()

defineSlots<NeoNavigationSlots>()

const emit = defineEmits<{
	/** Emitted when the mobile menu opens or closes. Receives the new open state as a boolean. */
	'toggle-mobile-menu': [isOpen: boolean]
}>()

const navRef = useTemplateRef<HTMLElement>('navEl')
const navHeight = ref(0)

const isMobileMenuOpen = ref(false)
const openDropdown = ref<number | null>(null)
const expandedMobileItems = ref<Record<number, boolean>>({})

const isFlyout = computed(() => props.variant === 'flyout')
const isActionsDropdownOpen = ref(false)

const activeFlyoutChildren = computed(() => {
	if (openDropdown.value === null || !props.links) return []
	return props.links[openDropdown.value]?.children ?? []
})

const classes = computed(() => {
	const navClasses = getClassNames({
		component: 'NeoNavigation',
		modifiers: [
			props.variant ?? 'default',
			props.collapseActions ? `collapseActions-${props.collapseActions}` : '',
		],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${navClasses} ${themedClasses}`
})

const toggleMobileMenu = (value?: boolean) => {
	isMobileMenuOpen.value = value ?? !isMobileMenuOpen.value
	emit('toggle-mobile-menu', isMobileMenuOpen.value)
}

const mobileToggleLabelProps = computed(
	():
		| { text: string; ariaLabel?: never }
		| { text?: never; ariaLabel: string }
		| { text?: never; ariaLabel?: never } => {
		if (props.menuLabel !== undefined) {
			return { text: isMobileMenuOpen.value ? props.closeLabel! : props.menuLabel }
		}
		if (props.menuAriaLabel !== undefined) {
			return { ariaLabel: props.menuAriaLabel }
		}
		return {}
	},
)

const handleMobileSheetUpdate = (isOpen: boolean) => {
	if (isMobileMenuOpen.value !== isOpen) {
		isMobileMenuOpen.value = isOpen
		emit('toggle-mobile-menu', isOpen)
	}
}

const hasChildren = (link: NeoNavigationLink): boolean => {
	return Boolean(link.children && link.children.length > 0)
}

const toggleDropdown = (index: number) => {
	openDropdown.value = openDropdown.value === index ? null : index
}

const closeDropdown = () => {
	openDropdown.value = null
}

const toggleMobileItem = (index: number) => {
	expandedMobileItems.value[index] = !expandedMobileItems.value[index]
}

const handleMobileLinkClick = () => {
	toggleMobileMenu(false)
}

const handleDropdownKeydown = (event: KeyboardEvent, index: number) => {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault()
		toggleDropdown(index)
	} else if (event.key === 'Escape') {
		closeDropdown()
	} else if (event.key === 'ArrowDown' && openDropdown.value === index && !isFlyout.value) {
		event.preventDefault()
		const dropdown = document.querySelector(`#nav-dropdown-${index}`)
		const firstItem = dropdown?.querySelector('a') as HTMLElement
		firstItem?.focus()
	}
}

const handleDropdownItemKeydown = (event: KeyboardEvent, index: number) => {
	const dropdown = document.querySelector(`#nav-dropdown-${index}`)
	const items = dropdown?.querySelectorAll('a') as NodeListOf<HTMLElement>
	const currentIndex = Array.from(items).findIndex((item) => item === document.activeElement)

	if (event.key === 'ArrowDown') {
		event.preventDefault()
		const nextIndex = (currentIndex + 1) % items.length
		items[nextIndex]?.focus()
	} else if (event.key === 'ArrowUp') {
		event.preventDefault()
		const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1
		items[prevIndex]?.focus()
	} else if (event.key === 'Escape') {
		closeDropdown()
		const trigger = document.querySelector(`#nav-trigger-${index}`) as HTMLElement
		trigger?.focus()
	}
}

const handleClickOutside = (event: MouseEvent) => {
	const target = event.target as HTMLElement
	if (!target.closest('.NeoNavigation-dropdown') && !target.closest('.NeoNavigation-flyoutPanel')) {
		closeDropdown()
	}
}

const updateNavHeight = (height: number) => {
	navHeight.value = height
	document.documentElement.style.setProperty('--NeoNavigation-sizing-blockSize', `${height}px`)
}

const resizeObserver = new ResizeObserver(() => {
	updateNavHeight(navRef.value?.offsetHeight ?? 0)
})

onMounted(() => {
	updateNavHeight(navRef.value?.offsetHeight ?? 0)
	if (navRef.value) resizeObserver.observe(navRef.value)
	document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
	resizeObserver.disconnect()
	document.documentElement.style.removeProperty('--NeoNavigation-sizing-blockSize')
	document.removeEventListener('click', handleClickOutside)
})

defineExpose<NeoNavigationExpose>({ close: () => toggleMobileMenu(false) })
</script>

<template>
	<nav ref="navEl" :class="classes" :aria-label="props.ariaLabel ?? 'Main navigation'">
		<div class="NeoNavigation-container">
			<div class="NeoNavigation-bar">
				<div class="NeoNavigation-start">
					<NeoButton
						v-if="(props.links && props.links.length > 0) || $slots.links || $slots.mobileMenu"
						v-bind="mobileToggleLabelProps"
						:color="props.color"
						size="medium"
						variant="ghost"
						class="NeoNavigation-mobileToggle"
						:aria-expanded="isMobileMenuOpen"
						@click="toggleMobileMenu()"
					>
						<template #iconStart>
							<slot name="menuIcon">
								<svg
									v-if="isMobileMenuOpen"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
								<svg
									v-else
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<line x1="3" y1="12" x2="21" y2="12"></line>
									<line x1="3" y1="6" x2="21" y2="6"></line>
									<line x1="3" y1="18" x2="21" y2="18"></line>
								</svg>
							</slot>
						</template>
					</NeoButton>

					<div v-if="$slots.logo" class="NeoNavigation-logo">
						<slot name="logo" />
					</div>
				</div>

				<div
					v-if="(props.links && props.links.length > 0) || $slots.links"
					class="NeoNavigation-desktopLinks"
				>
					<slot name="links">
						<template v-for="(link, index) in props.links" :key="link.text + index">
							<div v-if="hasChildren(link)" class="NeoNavigation-dropdown">
								<NeoButton
									:id="`nav-trigger-${index}`"
									:text="link.text"
									:color="props.color"
									size="medium"
									variant="ghost"
									:class="`NeoNavigation-dropdownTrigger${link.active ? ' NeoNavigation-link--active' : ''}`"
									:aria-expanded="openDropdown === index"
									:aria-controls="`nav-dropdown-${index}`"
									aria-haspopup="menu"
									@click.stop="toggleDropdown(index)"
									@keydown="handleDropdownKeydown($event, index)"
								>
									<template #iconEnd>
										<slot name="dropdownIcon" :is-open="openDropdown === index">
											<svg
												class="NeoNavigation-dropdownIcon"
												:class="{ 'is-open': openDropdown === index }"
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
								<ul
									v-if="!isFlyout"
									v-show="openDropdown === index"
									:id="`nav-dropdown-${index}`"
									class="NeoNavigation-dropdownMenu"
									role="menu"
									:aria-labelledby="`nav-trigger-${index}`"
								>
									<li v-for="(child, childIndex) in link.children" :key="childIndex" role="none">
										<NeoLink
											:href="child.href ?? '#'"
											:external="child.external"
											:color="props.color"
											size="medium"
											variant="default"
											role="menuitem"
											:class="{ 'NeoNavigation-link--active': child.active }"
											:aria-current="child.active ? 'page' : undefined"
											class="NeoNavigation-dropdownItem"
											@click="closeDropdown"
											@keydown="handleDropdownItemKeydown($event, index)"
										>
											{{ child.text }}
										</NeoLink>
									</li>
								</ul>
							</div>

							<NeoLink
								v-else
								:href="link.href ?? '#'"
								:external="link.external"
								:color="props.color"
								size="medium"
								variant="default"
								:class="{ 'NeoNavigation-link--active': link.active }"
								:aria-current="link.active ? 'page' : undefined"
								class="NeoNavigation-link"
							>
								{{ link.text }}
							</NeoLink>
						</template>
					</slot>
				</div>

				<div class="NeoNavigation-actions">
					<!-- Expanded actions: visible on desktop when collapseActions='mobile' -->
					<div v-if="props.collapseActions === 'mobile'" class="NeoNavigation-actionsExpanded">
						<slot name="actions" />
					</div>

					<!-- Collapsed actions: the dropdown trigger -->
					<NeoDropdown
						v-if="props.collapseActions"
						placement="bottom-end"
						:open="isActionsDropdownOpen"
						class="NeoNavigation-actionsDropdown"
						@update:open="isActionsDropdownOpen = $event"
					>
						<template #trigger="{ isOpen, toggle }">
							<slot name="actionsMenuTrigger" :is-open="isOpen" :toggle="toggle">
								<NeoIconButton
									:color="props.color"
									variant="ghost"
									:ariaLabel="props.actionsMenuAriaLabel ?? 'More actions'"
									:aria-expanded="isOpen"
									@click="toggle"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<circle cx="5" cy="12" r="2"></circle>
										<circle cx="12" cy="12" r="2"></circle>
										<circle cx="19" cy="12" r="2"></circle>
									</svg>
								</NeoIconButton>
							</slot>
						</template>
						<slot name="actions" />
					</NeoDropdown>

					<!-- Default: no collapse -->
					<template v-if="!props.collapseActions">
						<slot name="actions" />
					</template>
				</div>
			</div>
		</div>

		<!-- Flyout panel: full-width panel below the nav bar for the flyout variant -->
		<Transition name="NeoNavigation-flyout">
			<div
				v-if="isFlyout && openDropdown !== null"
				id="nav-flyout-panel"
				class="NeoNavigation-flyoutPanel"
				role="menu"
				:style="{ insetBlockStart: navHeight + 'px' }"
			>
				<div class="NeoNavigation-flyoutContent">
					<NeoLink
						v-for="(child, childIndex) in activeFlyoutChildren"
						:key="childIndex"
						:href="child.href ?? '#'"
						:external="child.external"
						:color="props.color"
						size="medium"
						variant="default"
						role="menuitem"
						:class="{ 'NeoNavigation-link--active': child.active }"
						:aria-current="child.active ? 'page' : undefined"
						class="NeoNavigation-flyoutItem"
						@click="closeDropdown"
					>
						{{ child.text }}
					</NeoLink>
				</div>
			</div>
		</Transition>

		<!-- Mobile menu: NeoSheet teleported to <main> or <body> -->
		<NeoSheet
			position="left"
			size="large"
			:open="isMobileMenuOpen"
			:modal="true"
			:close-on-escape="true"
			:close-on-overlay-click="true"
			:color="props.color"
			:z-index="90"
			aria-label="Mobile navigation menu"
			@update:open="handleMobileSheetUpdate"
		>
			<slot name="mobileMenu">
				<div class="NeoNavigation-mobilePanelContent">
					<nav class="NeoNavigation-mobileMenuNav" aria-label="Mobile navigation">
						<template v-for="(link, index) in props.links" :key="link.text">
							<div v-if="hasChildren(link)">
								<NeoNavItem
									:label="link.text"
									:color="props.color"
									:active="link.active"
									has-children
									:expanded="expandedMobileItems[index]"
									@toggle="toggleMobileItem(index)"
								/>
								<div v-if="expandedMobileItems[index]" class="NeoNavigation-mobileSubmenu">
									<NeoNavItem
										v-for="(child, childIndex) in link.children"
										:key="childIndex"
										:label="child.text"
										:href="child.href"
										:external="child.external"
										:color="props.color"
										:active="child.active"
										:level="1"
										size="small"
										@click="handleMobileLinkClick"
									/>
								</div>
							</div>

							<NeoNavItem
								v-else
								:label="link.text"
								:href="link.href"
								:external="link.external"
								:color="props.color"
								:active="link.active"
								@click="handleMobileLinkClick"
							/>
						</template>
					</nav>

					<div v-if="$slots.mobileActions" class="NeoNavigation-mobileMenuActions">
						<slot name="mobileActions" />
					</div>
				</div>
			</slot>
		</NeoSheet>
	</nav>
</template>

<style scoped>
@import url('./NeoNavigation-themed.css');
@import url('./NeoNavigation-layout.css');

.NeoNavigation {
	align-items: center;
	background-color: var(--NeoNavigation-color-background);
	border-block-end: 1px solid var(--NeoNavigation-color-border);
	display: flex;
	font-family: inherit;
	inset-block-start: 0;
	min-block-size: var(--NeoNavigation-sizing-height);
	position: sticky;
	z-index: 100;
}

.NeoNavigation-container {
	flex: 1;
	margin: 0 auto;
	max-inline-size: var(--NeoNavigation-sizing-maxInlineSize);
	padding-inline: var(--NeoNavigation-sizing-paddingInline);
}

.NeoNavigation-bar {
	align-items: center;
	display: flex;
	gap: var(--NeoNavigation-sizing-gap);
	justify-content: space-between;

	/* Visible across all breakpoints so dropdown panels inside the actions slot
	   can extend below the bar on mobile (previously `hidden` < 768px clipped
	   them). Oversized logos/labels can still overflow horizontally — that's
	   the consumer's choice and matches the existing desktop behavior. */
	overflow: visible;
}

.NeoNavigation-start {
	align-items: center;
	display: flex;
	flex-shrink: 0;
	gap: var(--NeoNavigation-sizing-linkGap);
}

.NeoNavigation-logo {
	align-items: center;
	display: flex;
}

.NeoNavigation-desktopLinks {
	align-items: center;
	display: none;
	flex: 1;
	gap: var(--NeoNavigation-sizing-linkGap);

	@mixin bp-md {
		display: flex;
	}
}

.NeoNavigation-link {
	color: var(--NeoNavigation-color-link);
	font-size: var(--NeoNavigation-fontSize-value);
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--NeoNavigation-color-linkHover);
	}
}

.NeoNavigation-link--active {
	color: var(--NeoNavigation-color-linkActive);
	font-weight: 600;
}

.NeoNavigation-mobileToggle {
	display: flex;

	@mixin bp-md {
		display: none;
	}
}

.NeoNavigation-actions {
	align-items: center;
	display: flex;
	flex-shrink: 0;
	gap: var(--NeoNavigation-sizing-actionsGap);
}

.NeoNavigation-dropdown {
	position: relative;
}

.NeoNavigation-dropdownTrigger {
	color: var(--NeoNavigation-color-link);
	font-size: var(--NeoNavigation-fontSize-value);
	gap: var(--NeoNavigation-sizing-dropdownListGap);
	padding: var(--NeoNavigation-sizing-dropdownListPaddingBlock) 0;
}

.NeoNavigation-dropdownIcon {
	transition: transform 0.2s ease;

	&.is-open {
		transform: rotate(180deg);
	}
}

.NeoNavigation-dropdownMenu {
	background-color: var(--NeoNavigation-color-background);
	border: 1px solid var(--NeoNavigation-color-border);
	border-radius: var(--NeoNavigation-sizing-dropdownItemBorderRadius);
	box-shadow: 0 4px 12px var(--NeoNavigation-color-dropdownShadow);
	inset-block-start: 100%;
	inset-inline-start: 0;
	list-style: none;
	margin: 0;
	min-inline-size: 200px;
	padding: var(--NeoNavigation-sizing-dropdownListPaddingBlock) 0;
	position: absolute;
	z-index: 100;
}

.NeoNavigation-dropdownItem {
	color: var(--NeoNavigation-color-link);
	display: block;
	font-size: var(--NeoNavigation-fontSize-value);
	padding: var(--NeoNavigation-sizing-dropdownItemPaddingInline);
	text-decoration: none;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;

	&:hover,
	&:focus {
		background-color: var(--NeoNavigation-color-dropdownHover);
		color: var(--NeoNavigation-color-linkHover);
	}

	&:focus-visible {
		outline: 2px solid var(--NeoNavigation-color-outline);
		outline-offset: -2px;
	}
}

.NeoNavigation-mobilePanelContent {
	display: flex;
	flex-direction: column;
	gap: var(--NeoNavigation-sizing-mobileToggleGap);
	padding: var(--NeoNavigation-sizing-mobilePanelPadding);
}

.NeoNavigation-mobileMenuNav {
	display: flex;
	flex-direction: column;
	gap: var(--NeoNavigation-sizing-mobileLinksGap);
}

.NeoNavigation-mobileSubmenu {
	display: flex;
	flex-direction: column;
	gap: var(--NeoNavigation-sizing-mobileLinksGap);
}

.NeoNavigation-mobileMenuActions {
	border-block-start: 1px solid var(--NeoNavigation-color-border);
	padding-block-start: var(--NeoNavigation-sizing-mobileLinksPaddingBlockStart);
}

/* collapseActions=mobile: dropdown visible on mobile, expanded actions visible on desktop */
.NeoNavigation--collapseActions-mobile {
	& .NeoNavigation-actionsDropdown {
		@mixin bp-md {
			display: none;
		}
	}

	& .NeoNavigation-actionsExpanded {
		display: none;

		@mixin bp-md {
			align-items: center;
			display: flex;
			gap: var(--NeoNavigation-sizing-actionsGap);
		}
	}
}

/* collapseActions=always: dropdown always visible */
.NeoNavigation--collapseActions-always {
	& .NeoNavigation-actionsDropdown {
		display: inline-flex;
	}
}

/* Compact variant: mobile toggle always visible, desktop links always hidden */
.NeoNavigation--compact {
	& .NeoNavigation-desktopLinks {
		display: none;
	}

	& .NeoNavigation-mobileToggle {
		@mixin bp-md {
			display: flex;
		}
	}
}

/* Flyout panel: full-width panel below the nav bar */
.NeoNavigation-flyoutPanel {
	background-color: var(--NeoNavigation-color-background);
	border-block-end: 1px solid var(--NeoNavigation-color-border);
	box-shadow: 0 4px 12px var(--NeoNavigation-color-dropdownShadow);
	inline-size: 100%;
	inset-inline-start: 0;
	position: fixed;
	z-index: 99;
}

.NeoNavigation-flyoutContent {
	display: flex;
	flex-wrap: wrap;
	gap: var(--NeoNavigation-sizing-desktopDropdownGap);
	margin: 0 auto;
	max-inline-size: var(--NeoNavigation-sizing-maxInlineSize);
	padding-block: var(--NeoNavigation-sizing-desktopDropdownPaddingBlock);
	padding-inline: var(--NeoNavigation-sizing-paddingInline);
}

.NeoNavigation-flyoutItem {
	font-size: var(--NeoNavigation-fontSize-value);
	font-weight: 500;
}

.NeoNavigation-flyout-enter-active,
.NeoNavigation-flyout-leave-active {
	transition:
		opacity 0.2s ease,
		transform 0.2s ease;
}

.NeoNavigation-flyout-enter-from,
.NeoNavigation-flyout-leave-to {
	opacity: 0;
	transform: translateY(calc(var(--NeoNavigation-sizing-flyoutSlideOffset) * -1));
}
</style>
