import { render, screen } from "@testing-library/react";
import { Input } from "./input";

describe(`Component: ${Input.name}`, () => {
	it('renders the component', () => {
		const { container } = render(
			<Input name="input" />
		)
		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="flex flex-col"
			  >
			    <label
			      for="input"
			    />
			    <input
			      class="border border-black rounded pl-2 py-1"
			      id="input"
			      name="input"
			    />
			  </div>
			</div>
		`)
	})

	it('renders the label', () => {
		render(
			<Input
				data-testid="input"
				name="input"
				label="Label"
			/>
		)
		expect(screen.getByText("Label")).toBeInTheDocument()
		expect(screen.getByTestId("input").parentElement).toHaveClass('flex-col')
	})

	it('correctly positions the label', () => {
		render(
			<Input
				data-testid="input"
				name="input"
				label="Label"
				labelPlacement="left"
			/>
		)
		expect(screen.getByTestId("input").parentElement).toHaveClass('flex items-center gap-x-2')
	})

	it('renders the placeholder', () => {
		render(
			<Input
				name="input"
				placeholder="Test Placeholder"
			/>
		)
		expect(screen.getByPlaceholderText("Test Placeholder")).toBeInTheDocument()
	})

	it('has custom styles', () => {
		render(
			<Input
				data-testid="input"
				name="input"
				className="bg-red-500"
			/>
		)
		expect(screen.getByTestId('input')).toHaveClass('bg-red-500')
	})
})