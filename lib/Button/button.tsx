import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	borderRadius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	className?: string
	children: ReactNode;
	isDisabled?: boolean;
	size?: "sm" | "md" | "lg" | "xl";
} & ComponentProps<'button'>

//TO-DO - Variants prop, size prop, color scheme prop (using predefined color scheme)

export const Button = ({ borderRadius = 'md', className = '', children, isDisabled = false, size = "md", ...restprops }: ButtonProps) => {
	const disabledStyle = isDisabled && 'cursor-not-allowed'
	const buttonSize =
		size === 'sm' ? 'text-sm'
			: size === 'md' ? 'text-base'
				: size === 'lg' ? 'text-lg'
					: 'text-xl'

	const radius =
		borderRadius === 'none' ? 'rounded-none'
			: borderRadius === 'sm' ? 'rounded-sm'
				: borderRadius === 'base' ? 'rounded'
					: borderRadius === 'md' ? 'rounded-md'
						: borderRadius === 'lg' ? 'rounded-lg'
							: borderRadius === 'xl' ? 'rounded-xl'
								: 'rounded-full'
	return (
		<button
			className={twMerge(
				'px-4 py-2 bg-default text-white hover:bg-default-dark transition-all ease-in-out duration-300',
				disabledStyle,
				buttonSize,
				radius,
				className
			)}
			disabled={isDisabled}
			{...restprops}
		>
			{children}
		</button>
	)
}
