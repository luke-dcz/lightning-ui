import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	className?: string
	children: ReactNode;
	isDisabled?: boolean;
	radius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	size?: "sm" | "md" | "lg" | "xl";
	variant?: 'solid' | 'bordered' | 'ghost'
} & ComponentProps<'button'>

export const Button = ({ className = '', children, isDisabled = false, radius = 'md', size = "md", variant = 'solid', ...restprops }: ButtonProps) => {
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

	const radiusStyles =
		radius === 'none' ? 'rounded-none'
			: radius === 'sm' ? 'rounded-sm'
				: radius === 'base' ? 'rounded'
					: radius === 'md' ? 'rounded-md'
						: radius === 'lg' ? 'rounded-lg'
							: radius === 'xl' ? 'rounded-xl'
								: 'rounded-full'

	const transitionStyle = 'transition-all ease-in-out duration-300'

	return (
		<button
			className={twMerge(
				'px-4 py-2 text-white',
				disabledStyle,
				buttonSize,
				radiusStyles,
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
