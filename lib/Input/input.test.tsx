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
			    <input
			      class="pl-2 py-1 rounded-md border-2 border-default-light dark:border-default hover:border-default-light focus:outline-black dark:focus:outline-white transition-all ease-in-out duration-300"
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

	it('can change the border radius', () => {
		render(
			<Input
				borderRadius="full"
				data-testid="input"
				name="input"
			/>
		)
		expect(screen.getByTestId('input')).toHaveClass('rounded-full')
	})

	it('can be made required', () => {
		render(
			<Input
				data-testid="input"
				name="input"
				label="Label"
				labelPlacement="left"
				isRequired
			/>
		)
		expect(screen.getByText('*')).toBeInTheDocument()
	})

	it('has a solid variant', () => {
		render(
			<Input
				data-testid="input"
				name="input"
				variant="solid"
			/>
		)
		expect(screen.getByTestId('input')).toHaveClass('bg-default-dark hover:bg-default focus:outline-none')
	})

	it('has an underlined variant', () => {
		render(
			<Input
				data-testid="input"
				name="input"
				variant="underlined"
			/>
		)
		expect(screen.getByTestId('input')).toHaveClass('border-b-2')
	})
})