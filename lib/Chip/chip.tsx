import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ChipProps = {
	children: ReactNode;
	className?: string;
	size?: 'sm' | 'md' | 'lg'
}

export const Chip = ({ children, className = '', size = 'md' }: ChipProps) => {
	const sizeStyle = size === 'sm' ? 'text-sm h-6 px-1'
		: size === 'md' ? 'text-base h-7 px-1'
			: 'text-lg h-8 px-2'

	return (
		<div
			className={twMerge(
				'flex bg-default text-white rounded-full items-center justify-center min-w-min max-w-fit relative box-border whitespace-nowrap',
				sizeStyle,
				className
			)}
		>
			<span className="flex text-inherit font-light px-2">
				{children}
			</span>
		</div>
	)
}