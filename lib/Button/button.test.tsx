import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe(`Component: ${Button.name}`, () => {
	it('renders the component', () => {
		const { container } = render(<Button>My Button</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="bg-blue-500"
			  >
			    My Button
			  </button>
			</div>
		`);
	})

	let buttonText: HTMLElement

	beforeEach(() => {
		render(
			<Button>Test</Button>
		)
		buttonText = screen.getByText('Test')
	})

	it('renders the child element', () => {
		expect(buttonText).toBeInTheDocument()
	})
})