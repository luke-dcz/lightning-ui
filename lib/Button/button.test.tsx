import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe(`Component: ${Button.name}`, () => {
	it('renders the component', () => {
		const { container } = render(<Button>My Button</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="px-4 py-2 text-white text-base rounded-md transition-all ease-in-out duration-300 bg-default hover:bg-default-dark"
			  >
			    My Button
			  </button>
			</div>
		`);
	})

	let buttonText: HTMLElement

	beforeEach(() => {
		render(
			<Button data-testid='button'>Test</Button>
		)
		buttonText = screen.getByText('Test')
	})

	it('renders the child element', () => {
		expect(buttonText).toBeInTheDocument()
	})

	it('has the default color background', () => {
		expect(screen.getByTestId('button')).toHaveClass("bg-default")
	})

	it('has custom styles given through the className prop', () => {
		render(
			<Button data-testid="button2" className="bg-orange-500 rounded-full">
				Test
			</Button>
		)
		expect(screen.getByTestId('button2')).toHaveClass('bg-orange-500 rounded-full')
		expect(screen.getByTestId('button2')).not.toHaveClass('bg-default rounded-lg')
	})

	it('has applies a border radius', () => {
		render(
			<Button data-testid="smallRadius" borderRadius="sm">
				Test
			</Button>
		)
		expect(screen.getByTestId('smallRadius')).toHaveClass('rounded-sm')
	})

	it('changes size', () => {
		render(
			<Button data-testid="largeButton" size="lg">
				Test
			</Button>
		)
		expect(screen.getByTestId('largeButton')).toHaveClass('text-lg')
	})

	it('can be disabled', () => {
		render(
			<Button data-testid="disabledButton" isDisabled={true}>
				Test
			</Button>
		)
		expect(screen.getByTestId('disabledButton')).toHaveClass('cursor-not-allowed')
	})

	it('has a bordered variant', () => {
		render(
			<Button data-testid="borderedButton" variant="bordered">
				Test
			</Button>
		)
		expect(screen.getByTestId('borderedButton')).toHaveClass('border-2 border-default text-default')
	})

	it('has a ghost variant', () => {
		render(
			<Button data-testid="ghostButton" variant="ghost">
				Test
			</Button>
		)
		expect(screen.getByTestId('ghostButton')).toHaveClass('border-2 border-default text-default hover:bg-default hover:text-white')
	})
})