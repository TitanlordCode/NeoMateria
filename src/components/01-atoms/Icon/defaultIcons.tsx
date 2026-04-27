/**
 * Default icons used in NeoMateria components.
 * These icons are provided as slot defaults and can be imported
 * by users who want to use them elsewhere in their application.
 *
 * Usage:
 * ```tsx
 * import { ChevronDownIcon, MenuIcon, CloseIcon, AddIcon, DeleteIcon } from 'neomateria'
 *
 * <NeoIcon>{ChevronDownIcon}</NeoIcon>
 * ```
 */
import { createStaticVNode } from 'vue'
import {
	chevronDownIconSvg,
	menuIconSvg,
	closeIconSvg,
	addIconSvg,
	deleteIconSvg,
	heartIconSvg,
	heartFilledIconSvg,
	moreHorizontalIconSvg,
	infoIconSvg,
	starIconSvg,
} from './iconStrings'

export const ChevronDownIcon = createStaticVNode(chevronDownIconSvg, 1)
export const MenuIcon = createStaticVNode(menuIconSvg, 1)
export const CloseIcon = createStaticVNode(closeIconSvg, 1)
export const AddIcon = createStaticVNode(addIconSvg, 1)
export const DeleteIcon = createStaticVNode(deleteIconSvg, 1)
export const HeartIcon = createStaticVNode(heartIconSvg, 1)
export const HeartFilledIcon = createStaticVNode(heartFilledIconSvg, 1)
export const MoreHorizontalIcon = createStaticVNode(moreHorizontalIconSvg, 1)
export const InfoIcon = createStaticVNode(infoIconSvg, 1)
export const StarIcon = createStaticVNode(starIconSvg, 1)
