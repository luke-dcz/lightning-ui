import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ChipProps = {
	children: ReactNode;
	className?: string;
	radius?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "full";
	size?: 'sm' | 'md' | 'lg'
}

export const Chip = ({ children, className = '', radius = "full", size = 'md' }: ChipProps) => {
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

	return (
		<div
			className={twMerge(
				'flex bg-default text-white items-center justify-center min-w-min max-w-fit relative box-border whitespace-nowrap',
				sizeStyle,
				radiusStyles,
				className
			)}
		>
			<span className="flex text-inherit font-light px-2">
				{children}
			</span>
		</div>
	)
}