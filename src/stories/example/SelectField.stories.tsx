import { SelectField } from '@components/common'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Example/SelectField',
	component: SelectField,
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SelectField>

const defaultProps = {
	style: {
		width: 400,
	},
	option: ['banana', 'orange', 'storawberry'],
}

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />

export const Default = Template.bind({})
Default.args = {
	...defaultProps,
	label: '과일',
}

export const Icon = Template.bind({})
Icon.args = {
	...defaultProps,
	label: '과일',
	isIcon: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	...defaultProps,
	label: '과일',
	isIcon: true,
	disabled: true,
}
