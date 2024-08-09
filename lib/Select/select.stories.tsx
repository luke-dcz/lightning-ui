import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select"

const meta: Meta<typeof Select> = {
	component: Select
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		]
	}
}

export const CustomLabel: Story = {
	args: {
		options: [
			{ value: 'cat', label: 'Cat' },
			{ value: 'dog', label: 'Dog' },
			{ value: 'wolf', label: 'Wolf' },
			{ value: 'fish', label: 'Fish' },
			{ value: 'elephant', label: 'Elephant' },
			{ value: 'lion', label: 'Lion' },
			{ value: 'tiger', label: 'Tiger' },
			{ value: 'leopard', label: 'Leopard' },
		],
		label: 'Animals'
	}
}

export const MultipleOptions: Story = {
	args: {
		options: [
			{ value: 'cat', label: 'Cat' },
			{ value: 'dog', label: 'Dog' },
			{ value: 'wolf', label: 'Wolf' },
			{ value: 'fish', label: 'Fish' },
			{ value: 'elephant', label: 'Elephant' },
			{ value: 'lion', label: 'Lion' },
			{ value: 'tiger', label: 'Tiger' },
			{ value: 'leopard', label: 'Leopard' },
		],
		label: 'Animals',
		multipleOptions: true
	}
}

export const NoRadius: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		],
		radius: 'none'
	}
}

export const FullRadius: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		],
		radius: 'full'
	}
}

export const DisabledSelect: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		],
		isDisabled: true
	}
}