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
} & ComponentProps<'input'>

export const Input = ({ borderRadius = 'md', className = '', isRequired = false, label, labelPlacement = 'top', name, placeholder, ...restProps }: InputProps) => {
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
					'border border-black pl-2 py-1',
					radius,
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