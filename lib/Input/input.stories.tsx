import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"

const meta: Meta<typeof Input> = {
	component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const TopLabel: Story = {
	args: {
		label: 'Label'
	}
}

export const LeftLabel: Story = {
	args: {
		label: "Label",
		labelPlacement: 'left'
	}
}

export const WithPlaceholder: Story = {
	args: {
		placeholder: "Enter here"
	}
}