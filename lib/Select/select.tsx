import { Variants, motion } from 'framer-motion';
import { useState } from "react";
import { twMerge } from 'tailwind-merge';

type SelectProps = {
	containerStyles?: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	label?: string;
	listBoxStyles?: string;
	multipleOptions?: boolean
	options: {
		value: string;
		label: string
	}[]
	radius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	variant?: 'solid' | 'bordered' | 'underlined'
}

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const Select = ({ containerStyles = '', isDisabled = false, isRequired = false, label = "Select Value", listBoxStyles = '', multipleOptions = false, options, radius = 'md', variant = 'bordered' }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState<string[]>([])

	const toggleShowOptions = () => {
		setIsOpen(!isOpen)
	}


	const handleSelectOptions = (value: string) => {
		if (multipleOptions) {
			setSelectedOptions(
				[...selectedOptions, value]
			)
		} else {
			setSelectedOptions([value])
			setIsOpen(false)
		}
	}

	const removeItem = (index: number, e: React.MouseEvent) => {
		if (e && e.stopPropagation) e.stopPropagation()
		setSelectedOptions(
			selectedOptions.filter(item =>
				selectedOptions.indexOf(item) !== index
			)
		)
	}

	const radiusStyles =
		radius === 'none' ? 'rounded-none'
			: radius === 'sm' ? 'rounded-sm'
				: radius === 'base' ? 'rounded'
					: radius === 'md' ? 'rounded-md'
						: radius === 'lg' ? 'rounded-lg'
							: radius === 'xl' ? 'rounded-xl'
								: 'rounded-full'

	const disabledStyle = isDisabled && 'cursor-not-allowed'

	const variantStyle =
		variant === 'solid' ? 'bg-default-dark text-white hover:bg-default focus:outline-none'
			: variant === 'bordered' ? 'border-2 border-default-light dark:border-default hover:border-default-light focus:outline-black dark:focus:outline-white'
				: 'border-b-2 rounded-none border-default-light dark:border-default hover:border-default-light focus:outline-none focus:border-black dark:focus:border-white'

	return (
		<motion.div
			initial={false}
			animate={isOpen ? "open" : "closed"}
			className={twMerge(
				"flex flex-col min-w-36 max-w-fit gap-1",
				disabledStyle
			)}

		>
			<motion.button
				whileTap={{ scale: 0.97 }}
				className={twMerge(
					'flex items-center h-6 px-2 py-5',
					disabledStyle,
					radiusStyles,
					variantStyle,
					containerStyles

				)}
				onClick={() => toggleShowOptions()}
				data-testid="select-container"
				disabled={isDisabled}
			>
				<div className="flex w-full justify-between items-center gap-2">
					{selectedOptions.length === 0 ? (
						<p>
							{label}
							{isRequired && (
								<span className="text-red-500">*</span>
							)}
						</p>
					) : (
						<>
							{selectedOptions.map((item, index) => (
								<div className="flex px-1 border rounded gap-1 justify-between items-center">
									<p data-testid={`Selected-${item}`}>{item}</p>
									<div className='rounded hover:bg-zinc-200 transition-all ease-in-out duration-150' onClick={(e) => removeItem(index, e)}>
										<svg data-testid={`${item}-cross-svg`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
											<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
										</svg>
									</div>
								</div>
							))}
						</>
					)}
					<motion.div
						variants={{
							open: { rotate: 180 },
							closed: { rotate: 0 }
						}}
						transition={{ duration: 0.2 }}
						style={{ originY: 0.55 }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke='currentColor' className="bi bi-chevron-down" viewBox="0 0 16 16" strokeWidth="1" >
							<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
						</svg>
					</motion.div>
				</div>
			</motion.button>
			<motion.ul
				className={twMerge(
					'flex flex-col px-1 py-1 border-2 rounded border-default-light dark:border-default',
					listBoxStyles
				)}
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
				data-testid='select-listbox'
			>
				{options.map((item) => (
					<motion.li
						className='px-2 rounded cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600'
						variants={itemVariants}
						key={item.value}
						onClick={() => handleSelectOptions(item.label)}
					>
						{item.label}
					</motion.li>
				))}
			</motion.ul>
		</motion.div >
	)
}