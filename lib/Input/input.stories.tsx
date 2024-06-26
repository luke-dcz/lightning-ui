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

export const CustomStyles: Story = {
	args: {
		className: 'bg-blue-400 text-white focus:outline-none border-2'
	}
}

export const FullBorderRadius: Story = {
	args: {
		radius: 'full'
	}
}

export const IsRequiredInput: Story = {
	args: {
		label: "Email",
		labelPlacement: "left",
		isRequired: true
	}
}

export const SolidInputVariant: Story = {
	args: {
		variant: 'solid'
	}
}

export const BorderedInputVariant: Story = {
	args: {
		variant: 'bordered'
	}
}

export const UnderlineInputVariant: Story = {
	args: {
		variant: 'underlined'
	}
}

export const DisabledInput: Story = {
	args: {
		isDisabled: true
	}
}