import { Variants, motion } from 'framer-motion';
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type SelectProps = {
	options: {
		value: string;
		label: string
	}[]
	label?: string
}

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const Select = ({ options, label = "Select Value" }: SelectProps) => {
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
		<motion.div initial={false} animate={showOptions ? "open" : "closed"} className="flex flex-col min-w-fit max-w-fit gap-1">
			<div className="flex items-center h-6 border-2 border-default-light dark:border-default hover:border-default-light focus:outline-black dark:focus:outline-white rounded px-2 py-5 hover:cursor-pointer" onClick={() => toggleShowOptions()}>
				<div className="flex justify-between items-center gap-2">
					{selectedOption === '' ? (
						<p className="text-slate-700">{label}</p>
					) : (
						<div className="flex px-1 border rounded gap-1 justify-between items-center">
							<p>{selectedOption}</p>
							<div className='rounded hover:bg-zinc-200 transition-all ease-in-out duration-150' onClick={() => setSelectedOption('')}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
								</svg>
							</div>
						</div>
					)}
					<motion.div
						variants={{
							open: { rotate: 180 },
							closed: { rotate: 0 }
						}}
						transition={{ duration: 0.2 }}
						style={{ originY: 0.55 }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down text-default" viewBox="0 0 16 16" strokeWidth="1" stroke="black">
							<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
						</svg>
					</motion.div>
				</div>
			</div>
			<motion.ul className={twMerge(
				'flex flex-col px-1 py-1 border-2 rounded border-default-light dark:border-default',
				optionsStyle
			)
			}
				variants={{
					open: {
						clipPath: "inset(0% 0% 0% 0% round 2px)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.5,
							delayChildren: 0.2,
							staggerChildren: 0.05
						}
					},
					closed: {
						clipPath: "inset(10% 50% 90% 50% round 2px)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.3
						}
					}
				}}
				style={{ pointerEvents: showOptions ? "auto" : "none" }}
			>
				{options.map((item) => (
					<motion.li className='px-2 rounded cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all ease-in-out duration-150' variants={itemVariants} key={item.value} onClick={() => handleSelectOption(item.label)}>{item.label}</motion.li>
				))}
			</motion.ul>
		</motion.div >
	)
}