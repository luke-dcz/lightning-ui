import { useState } from "react";
import { twMerge } from "tailwind-merge";

type SelectProps = {
	options: {
		value: string;
		label: string
	}[]
}

export const Select = ({ options }: SelectProps) => {
	const [showOptions, setShowOptions] = useState(false)
	const [selectedOption, setSelectedOption] = useState<string>('')

	const toggleShowOptions = () => {
		setShowOptions(!showOptions)
	}

	const handleSelectOption = (value: string) => {
		setSelectedOption(value)
		setShowOptions(false)
	}

	const optionsStyle = showOptions ? 'flex' : 'hidden'

	return (
		<div className="flex flex-col min-w-fit max-w-fit gap-1">
			<div className="flex items-center h-6 border-2 border-default-light dark:border-default hover:border-default-light focus:outline-black dark:focus:outline-white rounded px-2 py-5 hover:cursor-pointer" onClick={() => toggleShowOptions()}>
				<div className="flex justify-between items-center gap-2">
					{selectedOption === '' ? (
						<p className="text-slate-700">Select Value</p>
					) : (
						<div className="flex px-1 border rounded justify-between items-center">
							<p>{selectedOption}</p>
							<div onClick={() => setSelectedOption('')}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
								</svg>
							</div>
						</div>
					)}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down text-default" viewBox="0 0 16 16" strokeWidth="1" stroke="black">
						<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
					</svg>
				</div>
			</div>
			<div className={twMerge(
				'flex flex-col px-2 border rounded',
				optionsStyle
			)}>
				{options.map((item) => (
					<p key={item.value} onClick={() => handleSelectOption(item.label)}>{item.label}</p>
				))}
			</div>
		</div >
	)
}