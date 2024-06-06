import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	className?: string
	children: ReactNode;
} & ComponentProps<'button'>

export const Button = ({ className = '', children, ...restprops }: ButtonProps) => {
	return (
		<button
			className={twMerge(
				'px-4 py-2 rounded-lg bg-default',
				className
			)}
			{...restprops}
		>
			{children}
		</button>
	)
}
