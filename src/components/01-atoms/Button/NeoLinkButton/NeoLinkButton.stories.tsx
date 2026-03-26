import type { Meta, StoryObj } from '@storybook/vue3-vite'

import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
import { buttonSizes, buttonVariants } from '../NeoButton/NeoButtonTypes'
import { ariaLabelArgType } from '../../../../../.storybook/utils/argTypes'
import { AddIcon, DeleteIcon } from '../../Icon/defaultIcons'
import { createSimpleColorShowcase } from '../../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/Button/NeoLinkButton',
	component: NeoLinkButton,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		text: { control: 'text', table: { category: 'Content' } },
		href: { control: 'text', table: { category: 'Content' } },
		external: { control: 'boolean', table: { category: 'Behavior' } },
		color: {
			description:
				'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: buttonSizes,
			description: 'Controls padding and font size.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: buttonVariants,
			description:
				'Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded corners for a pill shape.',
			table: { category: 'Appearance' },
		},
		fullWidth: {
			control: 'boolean',
			description: "Stretches the link button to fill its container's full inline size.",
			table: { category: 'Appearance' },
		},
	},
	args: {
		text: 'Go to page',
		href: '#',
		size: 'medium',
		color: 'blue',
		variant: 'primary',
		rounded: false,
		fullWidth: false,
		external: false,
	},
} satisfies Meta<typeof NeoLinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
	args: { size: 'small' },
}

export const Large: Story = {
	args: { size: 'large' },
}

export const Rounded: Story = {
	args: { rounded: true },
}

export const Secondary: Story = {
	args: { variant: 'secondary' },
}

export const Tertiary: Story = {
	args: { variant: 'tertiary' },
}

export const Ghost: Story = {
	args: { variant: 'ghost', text: 'Ghost Link' },
}

export const External: Story = {
	args: {
		text: 'Open in new tab',
		href: 'https://example.com',
		external: true,
	},
}

export const WithIconStart: Story = {
	args: {
		text: 'With Icon Start',
		iconStart: () => AddIcon,
	},
}

export const WithIconEnd: Story = {
	args: {
		text: 'With Icon End',
		iconEnd: () => DeleteIcon,
	},
}

export const FullWidth: Story = {
	args: {
		variant: 'ghost',
		text: 'Full Width Link',
		fullWidth: true,
		iconEnd: () => AddIcon,
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		text: 'انتقل إلى الصفحة',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
		dark: true,
	}),
}
