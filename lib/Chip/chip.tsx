import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ChipProps = {
	children: ReactNode;
	className?: string;
}

export const Chip = ({ children, className = '' }: ChipProps) => {
	return (
		<div
			className={twMerge(
				'flex bg-default text-white rounded-full items-center justify-center min-w-min max-w-fit relative box-border px-1 h-7 whitespace-nowrap',
				className
			)}
		>
			<span className="flex text-inherit font-normal px-2">
				{children}
			</span>
		</div>
	)
}