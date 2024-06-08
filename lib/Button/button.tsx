import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	borderRadius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	className?: string
	children: ReactNode;
	isDisabled?: boolean;
	size?: "sm" | "md" | "lg" | "xl";
	variant?: 'solid' | 'bordered' | 'ghost'
} & ComponentProps<'button'>

//TO-DO - color scheme prop (using predefined color scheme)

export const Button = ({ borderRadius = 'md', className = '', children, isDisabled = false, size = "md", variant = 'solid', ...restprops }: ButtonProps) => {
	const disabledStyle = isDisabled && 'cursor-not-allowed'
	const buttonSize =
		size === 'sm' ? 'text-sm'
			: size === 'md' ? 'text-base'
				: size === 'lg' ? 'text-lg'
					: 'text-xl'

	const variantStyle =
		variant === 'solid' ? 'bg-default hover:bg-default-dark'
			: variant === 'bordered' ? 'border-2 border-default text-default hover:text-default-dark'
				: 'border-2 border-default text-default hover:bg-default hover:text-white'

	const radius =
		borderRadius === 'none' ? 'rounded-none'
			: borderRadius === 'sm' ? 'rounded-sm'
				: borderRadius === 'base' ? 'rounded'
					: borderRadius === 'md' ? 'rounded-md'
						: borderRadius === 'lg' ? 'rounded-lg'
							: borderRadius === 'xl' ? 'rounded-xl'
								: 'rounded-full'

	const transitionStyle = 'transition-all ease-in-out duration-300'

	return (
		<button
			className={twMerge(
				'px-4 py-2 text-white',
				disabledStyle,
				buttonSize,
				radius,
				transitionStyle,
				variantStyle,
				className
			)}
			disabled={isDisabled}
			{...restprops}
		>
			{children}
		</button>
	)
}
