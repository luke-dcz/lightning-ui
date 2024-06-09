import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type InputProps = {
	borderRadius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	className?: string;
	isRequired?: boolean;
	label?: string;
	labelPlacement?: "left" | "top"
	name: string;
	placeholder?: string;
	variant?: 'solid' | 'bordered' | 'underlined'
} & ComponentProps<'input'>

export const Input = ({ borderRadius = 'md', className = '', isRequired = false, label, labelPlacement = 'top', name, placeholder, variant = 'bordered', ...restProps }: InputProps) => {
	const labelStyling =
		labelPlacement === 'top' ? 'flex flex-col'
			: 'flex items-center gap-x-2'

	const radius =
		borderRadius === 'none' ? 'rounded-none'
			: borderRadius === 'sm' ? 'rounded-sm'
				: borderRadius === 'base' ? 'rounded'
					: borderRadius === 'md' ? 'rounded-md'
						: borderRadius === 'lg' ? 'rounded-lg'
							: borderRadius === 'xl' ? 'rounded-xl'
								: 'rounded-full'
	const variantStyle =
		variant === 'solid' ? 'bg-default-dark hover:bg-default focus:outline-none'
			: variant === 'bordered' ? 'border-2 border-default-light dark:border-default hover:border-default hover:border-default-light focus:outline-black dark:focus:outline-white'
				: 'border-b-2 rounded-none border-default-light dark:border-default hover:border-default hover:border-default-light focus:outline-none focus:border-black dark:focus:border-white'

	const transitionStyle = 'transition-all ease-in-out duration-300'

	return (
		<div className={labelStyling}>
			{(label && isRequired) ? (
				<label htmlFor={name}>
					{label}
					<span className="text-red-500">*</span>
				</label>
			) : (label && <label htmlFor={name}>{label}</label>)}
			<input
				className={twMerge(
					'pl-2 py-1',
					radius,
					variantStyle,
					transitionStyle,
					className
				)}
				id={name}
				name={name}
				placeholder={placeholder}
				required={isRequired}
				{...restProps}
			/>
		</div>
	)
}