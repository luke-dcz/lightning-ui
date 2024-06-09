import { render, screen } from "@testing-library/react";
import { Chip } from "./chip";

describe(`Component: ${Chip.name}`, () => {
	it('renders the component', () => {
		const { container } = render(<Chip>Chip</Chip>)
		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="flex bg-default text-white rounded-full items-center justify-center min-w-min max-w-fit relative box-border px-1 h-7 whitespace-nowrap"
			  >
			    <span
			      class="flex text-inherit font-normal px-2"
			    >
			      Chip
			    </span>
			  </div>
			</div>
		`)
	})
})