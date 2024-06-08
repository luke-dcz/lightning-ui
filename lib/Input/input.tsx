import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type InputProps = {
	className?: string
	label?: string;
	labelPlacement?: "left" | "top"
	name: string;
	placeholder?: string;
} & ComponentProps<'input'>

export const Input = ({ className = '', label, labelPlacement = 'top', name, placeholder, ...restProps }: InputProps) => {
	const labelStyling =
		labelPlacement === 'top' ? 'flex flex-col'
			: 'flex items-center gap-x-2'

	return (
		<div className={labelStyling}>
			<label htmlFor={name}>{label}</label>
			<input
				className={twMerge(
					'border border-black rounded pl-2 py-1',
					className
				)}
				id={name}
				name={name}
				placeholder={placeholder}
				{...restProps}
			/>
		</div>
	)
}