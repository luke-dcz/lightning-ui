import { render, screen } from "@testing-library/react";
import { Chip } from "./chip";

describe(`Component: ${Chip.name}`, () => {
	it('renders the component', () => {
		const { container } = render(<Chip>Chip</Chip>)
		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="flex bg-default text-white rounded-full items-center justify-center min-w-min max-w-fit relative box-border whitespace-nowrap text-base h-7 px-1"
			  >
			    <span
			      class="flex text-inherit font-light px-2"
			    >
			      Chip
			    </span>
			  </div>
			</div>
		`)
	})

	it('renders the chip text', () => {
		render(
			<Chip>
				Chip
			</Chip>
		)
		expect(screen.getByText('Chip')).toBeInTheDocument()
	})

	it('has custom styles', () => {
		render(
			<Chip
				className="bg-blue-500"
			>
				Chip
			</Chip>
		)
		expect(screen.getByText('Chip').parentElement).toHaveClass('bg-blue-500')
	})
})