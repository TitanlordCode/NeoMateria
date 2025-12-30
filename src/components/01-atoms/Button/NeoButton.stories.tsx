import type { Meta, StoryObj } from '@storybook/vue3'

import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import NeoButton from '@/components/01-atoms/Button/NeoButton.vue'
import { colors, colorNames, type Color } from '@/assets/typescript/colors'
import { buttonSizes, buttonVariants, type NeoButtonProps } from './NeoButtonTypes'
import { defineComponent, ref } from 'vue'
import { addIcon, deleteIcon } from '../Icon/exampleIcons'
import {
	needsLightBackground,
	getBackgroundColor,
	createSimpleColorShowcase,
} from '../../../../.storybook/utils/colorShowcase'

const colorRender = (args: NeoButtonProps) => {
	const accessibilityBackgrounds = ref(args.variant !== 'primary')

	const toggleAccessibilityBackground = () =>
		(accessibilityBackgrounds.value = !accessibilityBackgrounds.value)

	return defineComponent({
		name: 'ColorRender',
		setup() {
			return () => (
				<>
					{args.variant !== 'primary' && (
						<div style={{ paddingBlock: '8px' }}>
							<NeoButton
								{...args}
								variant="primary"
								text={`Toggle accessibility background ${accessibilityBackgrounds.value ? '🟢' : '🔴'}`}
								onClick={toggleAccessibilityBackground}
							/>
						</div>
					)}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
							maxInlineSize: '100%',
						}}
					>
						{colorNames.map((colorName: string) => (
							<div class={`box-${colorName}`} style={{ inlineSize: '100%' }}>
								{colors
									.filter((color: Color) => color.replace(/\d+$/, '') === colorName)
									.map((color: Color, index: number) => {
										const needsWrapper = needsLightBackground(
											color,
											accessibilityBackgrounds.value,
											args.variant === 'primary',
										)

										return (
											<div
												class={accessibilityBackgrounds.value ? `Themed--${color}` : ''}
												style={{
													inlineSize: '100%',
													padding: '8px',
													backgroundColor: getBackgroundColor(
														color,
														accessibilityBackgrounds.value,
														args.variant === 'primary',
													),
													border: needsWrapper ? '1px dashed #e0e0e0' : 'none',
													borderRadius: needsWrapper ? '4px' : '0',
												}}
												title={
													needsWrapper
														? 'Uses black text - optimized for light backgrounds'
														: undefined
												}
											>
												<NeoButton
													key={index}
													{...args}
													color={color as NeoButtonProps['color']}
													text={color}
												/>
											</div>
										)
									})}
							</div>
						))}
					</div>
				</>
			)
		},
	})
}

const meta: Meta<typeof NeoButton> = {
	title: 'Atoms/NeoButton',
	component: NeoButton,
	tags: ['autodocs'],
	argTypes: {
		text: { control: 'text' },
		size: { control: 'select', options: buttonSizes },
		variant: { control: 'select', options: buttonVariants },
		disabled: { control: 'boolean' },
		color: { control: 'select', options: colors },
	},
	args: {
		text: 'Click me',
		size: 'medium',
		color: 'grey',
		variant: 'primary',
		disabled: false,
		rounded: false,
		onClick: fn(),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = {
	args: {
		size: 'small',
	},
}
export const large: Story = {
	args: {
		size: 'large',
	},
}

export const Disabled: Story = {
	args: {
		text: 'Disabled NeoButton',
		disabled: true,
	},
}

export const Rounded: Story = {
	args: {
		text: 'Rounded NeoButton',
		rounded: true,
	},
}

export const PrimaryColored: Story = {
	render: colorRender,
}

export const SecondaryColored: Story = {
	args: {
		variant: 'secondary',
	},
	render: colorRender,
}

export const TertiaryColored: Story = {
	args: {
		variant: 'tertiary',
	},
	render: colorRender,
}

export const WithIconStart: Story = {
	args: {
		text: 'With Icon Start',
		iconStart: () => addIcon,
	},
}

export const WithIconEnd: Story = {
	args: {
		text: 'With Icon End',
		iconEnd: () => deleteIcon,
	},
}

export const WithIconStartAndEnd: Story = {
	args: {
		...WithIconStart.args,
		...WithIconEnd.args,
		text: 'With Both Icon',
	},
}

export const interaction: Story = {
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Check click functionality', async () => {
			await userEvent.click(canvas.getByRole('button'))
		})

		await waitFor(() => expect(args.onClick).toHaveBeenCalled())
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: { value: '#000' },
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		text: 'انقر هنا',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: { value: '#000' },
	},
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary'], {
		dark: true,
	}),
}
