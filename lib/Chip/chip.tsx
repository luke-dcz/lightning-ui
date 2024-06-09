import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ChipProps = {
	children: ReactNode;
	className?: string;
	radius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	size?: 'sm' | 'md' | 'lg';
	variant?: 'solid' | 'bordered';
}

export const Chip = ({ children, className = '', radius = "full", size = 'md', variant = 'solid' }: ChipProps) => {
	const radiusStyles =
		radius === 'none' ? 'rounded-none'
			: radius === 'sm' ? 'rounded-sm'
				: radius === 'base' ? 'rounded'
					: radius === 'md' ? 'rounded-md'
						: radius === 'lg' ? 'rounded-lg'
							: radius === 'xl' ? 'rounded-xl'
								: 'rounded-full'

	const sizeStyle = size === 'sm' ? 'text-sm h-6 px-1'
		: size === 'md' ? 'text-base h-7 px-1'
			: 'text-lg h-8 px-2'

	const variantStyle =
		variant === 'solid' ? 'bg-default text-white'
			: 'border-2 border-default text-default'

	return (
		<div
			className={twMerge(
				'flex items-center justify-center min-w-min max-w-fit relative box-border whitespace-nowrap',
				sizeStyle,
				radiusStyles,
				variantStyle,
				className
			)}
		>
			<span className="flex text-inherit font-light px-2">
				{children}
			</span>
		</div>
	)
}