import { render } from "@testing-library/react";
import { Button } from "./button";

describe(`Component: ${Button.name}`, () => {
	it('should render', () => {
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
})