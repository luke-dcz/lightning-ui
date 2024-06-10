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