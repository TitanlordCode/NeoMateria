import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import {
	AddIcon,
	ChevronDownIcon,
	CloseIcon,
	DeleteIcon,
	HeartFilledIcon,
	HeartIcon,
	InfoIcon,
	MenuIcon,
	MoreHorizontalIcon,
} from '@/components/01-atoms/Icon/defaultIcons'

const meta = {
	title: 'Foundation/Icons',
	parameters: {
		backgrounds: { disable: true },
		direction: { disable: true },
	},
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const allIcons: { name: string; icon: ReturnType<typeof h> }[] = [
	{ name: 'AddIcon', icon: AddIcon },
	{ name: 'ChevronDownIcon', icon: ChevronDownIcon },
	{ name: 'CloseIcon', icon: CloseIcon },
	{ name: 'DeleteIcon', icon: DeleteIcon },
	{ name: 'HeartFilledIcon', icon: HeartFilledIcon },
	{ name: 'HeartIcon', icon: HeartIcon },
	{ name: 'InfoIcon', icon: InfoIcon },
	{ name: 'MenuIcon', icon: MenuIcon },
	{ name: 'MoreHorizontalIcon', icon: MoreHorizontalIcon },
]

export const AllIcons: Story = {
	tags: ['!dev'],
	render: () =>
		defineComponent({
			name: 'AllIconsRender',
			setup() {
				return () =>
					h(
						'div',
						{
							style: {
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
								gap: '12px',
								padding: '4px',
							},
						},
						allIcons.map(({ name, icon }) =>
							h(
								'div',
								{
									style: {
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										gap: '10px',
										padding: '20px 12px',
										border: '1px solid rgba(128,128,128,0.25)',
										borderRadius: '8px',
									},
								},
								[icon, h('code', { style: { fontSize: '11px' } }, name)],
							),
						),
					)
			},
		}),
	parameters: {
		docs: {
			source: {
				code: `import { AddIcon, ChevronDownIcon, CloseIcon, DeleteIcon, HeartFilledIcon, HeartIcon, InfoIcon, MenuIcon, MoreHorizontalIcon } from 'neomateria'`,
			},
		},
	},
}
