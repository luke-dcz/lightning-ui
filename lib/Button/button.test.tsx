import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe(`Component: ${Button.name}`, () => {
	it('renders the component', () => {
		const { container } = render(<Button>My Button</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="px-4 py-2 bg-default text-white hover:bg-default-dark transition-all ease-in-out duration-300 text-base rounded-md"
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
})