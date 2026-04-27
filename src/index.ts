import './assets/styles/globals.css'

export { type Color } from '@/assets/typescript/colors'
export { type SurfaceColor } from '@/assets/typescript/colorTypes'
export { breakpoints, mediaQueries, type BreakpointKey } from '@/assets/typescript/breakpoints'

// Atoms
export { default as NeoButton } from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
export {
	type NeoButtonProps,
	type NeoButtonSize,
	type NeoButtonVariant,
} from '@/components/01-atoms/Button/NeoButton/NeoButtonTypes'

export { default as NeoIconButton } from '@/components/01-atoms/Button/NeoIconButton/NeoIconButton.vue'
export {
	type NeoIconButtonProps,
	type NeoIconButtonSlots,
} from '@/components/01-atoms/Button/NeoIconButton/NeoIconButtonTypes'

export { default as NeoLinkButton } from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
export {
	type NeoLinkButtonProps,
	type NeoLinkButtonSize,
	type NeoLinkButtonVariant,
	type NeoLinkButtonSlots,
} from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButtonTypes'

export { default as NeoInput } from '@/components/01-atoms/Input/NeoInput.vue'
export { type NeoInputProps } from '@/components/01-atoms/Input/NeoInputTypes'

export { default as NeoCheckbox } from '@/components/01-atoms/Checkbox/NeoCheckbox.vue'
export { type NeoCheckboxProps } from '@/components/01-atoms/Checkbox/NeoCheckboxTypes'

export { default as NeoRadio } from '@/components/01-atoms/Radio/NeoRadio.vue'
export { type NeoRadioProps } from '@/components/01-atoms/Radio/NeoRadioTypes'

export { default as NeoTextArea } from '@/components/01-atoms/TextArea/NeoTextArea.vue'
export { type NeoTextAreaProps } from '@/components/01-atoms/TextArea/NeoTextAreaTypes'

export { default as NeoImage } from '@/components/01-atoms/Image/NeoImage.vue'
export { type NeoImageProps } from '@/components/01-atoms/Image/NeoImageTypes'

export { default as NeoLink } from '@/components/01-atoms/Link/NeoLink.vue'
export { type NeoLinkProps } from '@/components/01-atoms/Link/NeoLinkTypes'

export { default as NeoSpinner } from '@/components/01-atoms/Spinner/NeoSpinner.vue'
export { type NeoSpinnerProps } from '@/components/01-atoms/Spinner/NeoSpinnerTypes'

export { default as NeoSwitch } from '@/components/01-atoms/Switch/NeoSwitch.vue'
export {
	type NeoSwitchProps,
	type NeoSwitchSize,
	switchSizes,
} from '@/components/01-atoms/Switch/NeoSwitchTypes'

export { default as NeoTooltip } from '@/components/01-atoms/Tooltip/NeoTooltip.vue'
export {
	type NeoTooltipProps,
	type NeoTooltipPlacement,
	type NeoTooltipSlots,
	tooltipPlacements,
} from '@/components/01-atoms/Tooltip/NeoTooltipTypes'

export { default as NeoBadge } from '@/components/01-atoms/Badge/NeoBadge.vue'
export { type NeoBadgeProps, type NeoBadgeSlots } from '@/components/01-atoms/Badge/NeoBadgeTypes'

export { default as NeoIcon } from '@/components/01-atoms/Icon/NeoIcon.vue'
export { type NeoIconProps, type NeoIconSlots } from '@/components/01-atoms/Icon/NeoIconTypes'
export {
	AddIcon,
	ChevronDownIcon,
	CloseIcon,
	DeleteIcon,
	HeartFilledIcon,
	HeartIcon,
	InfoIcon,
	MenuIcon,
	MoreHorizontalIcon,
	StarIcon,
} from '@/components/01-atoms/Icon/defaultIcons'

export { default as NeoNavItem } from '@/components/01-atoms/NavItem/NeoNavItem.vue'
export { type NeoNavItemProps } from '@/components/01-atoms/NavItem/NeoNavItemTypes'

export { default as NeoPennant } from '@/components/01-atoms/Pennant/NeoPennant.vue'
export { type NeoPennantProps } from '@/components/01-atoms/Pennant/NeoPennantTypes'

export { default as NeoProgressBar } from '@/components/01-atoms/ProgressBar/NeoProgressBar.vue'
export {
	type NeoProgressBarProps,
	type NeoProgressBarSize,
	progressBarSizes,
} from '@/components/01-atoms/ProgressBar/NeoProgressBarTypes'

export { default as NeoHeadlinePrimary } from '@/components/01-atoms/Headline/NeoHeadlinePrimary/NeoHeadlinePrimary.vue'
export { default as NeoHeadlineSecondary } from '@/components/01-atoms/Headline/NeoHeadlineSecondary/NeoHeadlineSecondary.vue'
export { default as NeoHeadlineTertiary } from '@/components/01-atoms/Headline/NeoHeadlineTertiary/NeoHeadlineTertiary.vue'
export { default as NeoHeadlineQuaternary } from '@/components/01-atoms/Headline/NeoHeadlineQuaternary/NeoHeadlineQuaternary.vue'
export {
	type NeoHeadlineProps,
	type NeoHeadlineSlots,
	type NeoHeadlineTag,
	type NeoHeadlineAlign,
	headlineTags,
	headlineAligns,
} from '@/components/01-atoms/Headline/NeoHeadlineTypes'

export { default as NeoText } from '@/components/01-atoms/Text/NeoText/NeoText.vue'
export {
	type NeoTextProps,
	type NeoTextSlots,
	type NeoTextSize,
	type NeoTextTag,
	type NeoTextWeight,
	textSizes,
	textTags,
	textWeights,
} from '@/components/01-atoms/Text/NeoText/NeoTextTypes'

// Molecules
export { default as NeoSelect } from '@/components/02-molecules/Select/NeoSelect.vue'
export { type NeoSelectProps } from '@/components/02-molecules/Select/NeoSelectTypes'

export { default as NeoCard } from '@/components/02-molecules/Card/NeoCard.vue'
export { type NeoCardProps, type NeoCardTag } from '@/components/02-molecules/Card/NeoCardTypes'

export { default as NeoAccordion } from '@/components/02-molecules/Accordion/NeoAccordion.vue'
export {
	type NeoAccordionProps,
	type NeoAccordionSlots,
} from '@/components/02-molecules/Accordion/NeoAccordionTypes'

export { default as NeoLinkGroup } from '@/components/02-molecules/LinkGroup/NeoLinkGroup.vue'
export {
	type NeoLinkGroupProps,
	type NeoLinkGroupLink,
	type NeoLinkGroupSlots,
} from '@/components/02-molecules/LinkGroup/NeoLinkGroupTypes'

export { default as NeoSheet } from '@/components/02-molecules/Sheet/NeoSheet.vue'
export {
	type NeoSheetProps,
	type NeoSheetVariant,
} from '@/components/02-molecules/Sheet/NeoSheetTypes'

export { default as NeoCoverPanel } from '@/components/02-molecules/CoverPanel/NeoCoverPanel.vue'
export {
	type NeoCoverPanelProps,
	type NeoCoverPanelSlots,
} from '@/components/02-molecules/CoverPanel/NeoCoverPanelTypes'

export { default as NeoProgressPanel } from '@/components/02-molecules/ProgressPanel/NeoProgressPanel.vue'
export {
	type NeoProgressPanelProps,
	type NeoProgressPanelSlots,
} from '@/components/02-molecules/ProgressPanel/NeoProgressPanelTypes'

export { default as NeoDropdown } from '@/components/02-molecules/Dropdown/NeoDropdown.vue'
export {
	type NeoDropdownProps,
	type NeoDropdownSlots,
	type NeoDropdownPlacement,
	dropdownPlacements,
} from '@/components/02-molecules/Dropdown/NeoDropdownTypes'

export { default as NeoHeadingGroup } from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroup.vue'
export {
	type NeoHeadingGroupProps,
	type NeoHeadingGroupVariant,
	headingGroupVariants,
} from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroupTypes'

export { default as NeoStat } from '@/components/02-molecules/Stat/NeoStat/NeoStat.vue'
export {
	type NeoStatProps,
	type NeoStatSize,
	statSizes,
} from '@/components/02-molecules/Stat/NeoStat/NeoStatTypes'

export { default as NeoCallout } from '@/components/02-molecules/Callout/NeoCallout/NeoCallout.vue'
export {
	type NeoCalloutProps,
	type NeoCalloutSlots,
	type NeoCalloutVariant,
	calloutVariants,
} from '@/components/02-molecules/Callout/NeoCallout/NeoCalloutTypes'

export { default as NeoTextBlock } from '@/components/02-molecules/TextBlock/NeoTextBlock/NeoTextBlock.vue'
export { type NeoTextBlockProps } from '@/components/02-molecules/TextBlock/NeoTextBlock/NeoTextBlockTypes'

export { default as NeoFeatureCard } from '@/components/02-molecules/FeatureCard/NeoFeatureCard/NeoFeatureCard.vue'
export { type NeoFeatureCardProps } from '@/components/02-molecules/FeatureCard/NeoFeatureCard/NeoFeatureCardTypes'

export { default as NeoSection } from '@/components/02-molecules/Section/NeoSection.vue'
export { type NeoSectionProps } from '@/components/02-molecules/Section/NeoSectionTypes'

// Organisms
export { default as NeoNavigation } from '@/components/03-organisms/Navigation/NeoNavigation.vue'
export {
	type NeoNavigationProps,
	type NeoNavigationLink,
	type NeoNavigationSlots,
	type NeoNavigationCollapseActions,
	navigationCollapseActions,
} from '@/components/03-organisms/Navigation/NeoNavigationTypes'

export { default as NeoFooter } from '@/components/03-organisms/Footer/NeoFooter.vue'
export {
	type NeoFooterProps,
	type NeoFooterSection,
	type NeoFooterLink,
	type NeoFooterSlots,
} from '@/components/03-organisms/Footer/NeoFooterTypes'

export { default as NeoCoverPanelGrid } from '@/components/03-organisms/CoverPanelGrid/NeoCoverPanelGrid.vue'
export {
	type NeoCoverPanelGridProps,
	type NeoCoverPanelGridGap,
	coverPanelGridGaps,
} from '@/components/03-organisms/CoverPanelGrid/NeoCoverPanelGridTypes'

export { default as NeoFeatureLine } from '@/components/03-organisms/FeatureLine/NeoFeatureLine/NeoFeatureLine.vue'
export {
	type NeoFeatureLineProps,
	type NeoFeatureLineImageRatio,
	featureLineImageRatios,
} from '@/components/03-organisms/FeatureLine/NeoFeatureLine/NeoFeatureLineTypes'

export { default as NeoHero } from '@/components/03-organisms/Hero/NeoHero/NeoHero.vue'
export {
	type NeoHeroProps,
	type NeoHeroSlots,
	type NeoHeroVariant,
	type NeoHeroSize,
	heroVariants,
	heroSizes,
} from '@/components/03-organisms/Hero/NeoHero/NeoHeroTypes'
