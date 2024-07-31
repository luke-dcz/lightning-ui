import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type InputProps = {
	className?: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	label?: string;
	labelPlacement?: "left" | "top"
	name: string;
	placeholder?: string;
	radius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	variant?: 'solid' | 'bordered' | 'underlined'
} & ComponentProps<'input'>

export const Input = ({ className = '', isDisabled = false, isRequired = false, label, labelPlacement = 'top', name, placeholder, radius = 'md', variant = 'bordered', ...restProps }: InputProps) => {
	const labelStyling =
		labelPlacement === 'top' ? 'flex flex-col'
			: 'flex items-center gap-x-2'

	const radiusStyles =
		radius === 'none' ? 'rounded-none'
			: radius === 'sm' ? 'rounded-sm'
				: radius === 'base' ? 'rounded'
					: radius === 'md' ? 'rounded-md'
						: radius === 'lg' ? 'rounded-lg'
							: radius === 'xl' ? 'rounded-xl'
								: 'rounded-full'
	const variantStyle =
		variant === 'solid' ? 'bg-default-dark hover:bg-default focus:outline-none'
			: variant === 'bordered' ? 'border-2 border-default-light dark:border-default hover:border-default-light focus:outline-black dark:focus:outline-white'
				: 'border-b-2 rounded-none border-default-light dark:border-default hover:border-default-light focus:outline-none focus:border-black dark:focus:border-white'

	const transitionStyle = 'transition-all ease-in-out duration-300'

	const disabledStyle = isDisabled && 'cursor-not-allowed'

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
					disabledStyle,
					radiusStyles,
					variantStyle,
					transitionStyle,
					className
				)}
				disabled={isDisabled}
				id={name}
				name={name}
				placeholder={placeholder}
				required={isRequired}
				{...restProps}
			/>
		</div>
	)
}