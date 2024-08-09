import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './select';

describe(`Component: ${Select.name}`, () => {
	it('renders the component', () => {
		const { container } = render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
			/>
		)
		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="flex flex-col min-w-36 max-w-fit gap-1"
			  >
			    <button
			      class="flex items-center h-6 px-2 py-5 rounded-md border-2 border-default-light dark:border-default hover:border-default-light focus:outline-black dark:focus:outline-white"
			      data-testid="select-container"
			      tabindex="0"
			    >
			      <div
			        class="flex w-full justify-between items-center gap-2"
			      >
			        <p>
			          Select Value
			        </p>
			        <div
			          style="transform: none; transform-origin: 50% 55.00000000000001% 0;"
			        >
			          <svg
			            class="bi bi-chevron-down"
			            height="16"
			            stroke="currentColor"
			            stroke-width="1"
			            viewBox="0 0 16 16"
			            width="16"
			            xmlns="http://www.w3.org/2000/svg"
			          >
			            <path
			              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
			              fill-rule="evenodd"
			            />
			          </svg>
			        </div>
			      </div>
			    </button>
			    <ul
			      class="flex flex-col px-1 py-1 border-2 rounded border-default-light dark:border-default"
			      style="clip-path: inset(10% 50% 90% 50% round 2px);"
			    >
			      <li
			        class="px-2 rounded cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600"
			        style="opacity: 0; transform: translateY(20px);"
			      >
			        Option 1
			      </li>
			      <li
			        class="px-2 rounded cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600"
			        style="opacity: 0; transform: translateY(20px);"
			      >
			        Option 2
			      </li>
			      <li
			        class="px-2 rounded cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600"
			        style="opacity: 0; transform: translateY(20px);"
			      >
			        Option 3
			      </li>
			    </ul>
			  </div>
			</div>
		`)
	})

	it('renders the label', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
			/>
		)
		expect(screen.getByText('Select Value')).toBeInTheDocument()
	})

	it('renders a custom label', () => {
		render(
			<Select
				options={[
					{ value: 'cat', label: 'Cat' },
					{ value: 'dog', label: 'Dog' },
					{ value: 'lion', label: 'Lion' }
				]}
				label='Animals'
			/>
		)
		expect(screen.getByText('Animals')).toBeInTheDocument()
	})

	it('can display the options', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
			/>
		)
		fireEvent.click(screen.getByTestId('select-container'))
		expect(screen.getByText('Option 1')).toBeInTheDocument()
		expect(screen.getByText('Option 1')).toBeInTheDocument()
		expect(screen.getByText('Option 1')).toBeInTheDocument()
	})

	it('can select options', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
			/>
		)
		fireEvent.click(screen.getByTestId('select-container'))
		expect(screen.queryByTestId('Selected-Option 1')).not.toBeInTheDocument()
		fireEvent.click(screen.getByText('Option 1'))
		expect(screen.getByTestId('Selected-Option 1')).toBeInTheDocument()
		expect(screen.queryByTestId('Selected-Option 2')).not.toBeInTheDocument()
	})

	it('can remove the selected option', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
			/>
		)
		fireEvent.click(screen.getByTestId('select-container'))
		fireEvent.click(screen.getByText('Option 2'))
		expect(screen.getByTestId('Selected-Option 2')).toBeInTheDocument()
		fireEvent.click(screen.getByTestId('Option 2-cross-svg'))
		expect(screen.queryByTestId('Selected-Option 2')).not.toBeInTheDocument()
	})

	it('can select multiple options', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				multipleOptions={true}
			/>
		)
		fireEvent.click(screen.getByTestId('select-container'))
		fireEvent.click(screen.getByText('Option 1'))
		fireEvent.click(screen.getByText('Option 2'))
		fireEvent.click(screen.getByText('Option 3'))
		expect(screen.getByTestId('Selected-Option 1')).toBeInTheDocument()
		expect(screen.getByTestId('Selected-Option 2')).toBeInTheDocument()
		expect(screen.getByTestId('Selected-Option 3')).toBeInTheDocument()
	})

	it('can change the border radius', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				radius='full'
			/>
		)
		expect(screen.getByTestId('select-container')).toHaveClass('rounded-full')
	})

	it('can be disabled', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				isDisabled={true}
			/>
		)
		expect(screen.getByTestId('select-container')).toHaveClass('cursor-not-allowed')
	})

	it('can be required', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				isRequired={true}
			/>
		)
		expect(screen.getByText('*')).toBeInTheDocument()
	})

	it('has a solid variant', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				variant='solid'
			/>
		)
		expect(screen.getByTestId('select-container')).toHaveClass('bg-default-dark hover:bg-default focus:outline-none')
	})

	it('has a underlined variant', () => {
		render(
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				variant='underlined'
			/>
		)
		expect(screen.getByTestId('select-container')).toHaveClass('border-b-2')
	})
})