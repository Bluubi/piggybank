import { ComponentProps } from 'react'
import { BaseProps } from '../utils'
import '../styles.css'

type ButtonProps = ComponentProps<'button'> & BaseProps

export default function Button({
	theme = 'base',
	role = 'submit',
	type = 'submit',
	preferences = 'light',
	...props
}: Partial<ButtonProps>) {
	return (
		<button
			className={`${theme} ${preferences}`}
			role={role}
			type={type}>
			{props.children}
		</button>
	)
}
