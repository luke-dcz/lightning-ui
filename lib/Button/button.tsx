import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	className?: string
	children: ReactNode;
	isDisabled?: boolean;
} & ComponentProps<'button'>

//TO-DO - Variants prop, size prop, color scheme prop (using predefined color scheme)

export const Button = ({ className = '', children, isDisabled = false, ...restprops }: ButtonProps) => {
	const disabledStyle = isDisabled && 'cursor-not-allowed'
	return (
		<button
			className={twMerge(
				'px-4 py-2 rounded-lg bg-default text-white hover:bg-default-dark transition-all ease-in-out duration-300',
				disabledStyle,
				className
			)}
			{...restprops}
		>
			{children}
		</button>
	)
}
