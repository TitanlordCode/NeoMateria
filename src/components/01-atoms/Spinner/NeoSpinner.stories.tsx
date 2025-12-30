import { colors } from '@/assets/typescript/colors'
import type { Meta, StoryObj } from '@storybook/vue3'
import NeoSpinner from './NeoSpinner.vue'
import { defineComponent } from 'vue'
import type { NeoSpinnerProps } from './NeoSpinnerTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/NeoSpinner',
	component: NeoSpinner,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		color: {
			control: 'select',
			options: colors,
		},
	},
	args: {
		size: 'medium',
		color: 'blue',
	},
} satisfies Meta<typeof NeoSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
	},
}

export const CustomLabel: Story = {
	args: {
		label: 'Please wait...',
	},
}

export const WithoutLabel: Story = {
	args: {
		label: '',
	},
}

export const InButton: Story = {
	render: (args: NeoSpinnerProps) => {
		return defineComponent({
			name: 'InButtonRender',
			setup() {
				return () => (
					<button
						style={{
							padding: '12px 24px',
							background: 'var(--neo-color-blue500)',
							color: 'var(--neo-color-white)',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
						}}
					>
						<NeoSpinner {...args} size="small" label="" />
						Loading...
					</button>
				)
			},
		})
	},
	args: {
		color: 'grey',
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
		label: 'جاري التحميل...',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoSpinner, [
		{
			variant: 'default',
			label: 'Spinner',
			render: (color, _, args) => <NeoSpinner {...args} color={color} label={color} />,
		},
	]),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: { value: '#000' },
	},
	render: createSimpleColorShowcase(
		NeoSpinner,
		[
			{
				variant: 'default',
				label: 'Spinner',
				render: (color, _, args) => <NeoSpinner {...args} color={color} label={color} />,
			},
		],
		{
			dark: true,
		},
	),
}
