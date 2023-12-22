import { Link } from 'react-router-dom'
import { ComponentProps } from 'react'
import { BaseProps } from '../utils.ts'

type NavLinkProps = ComponentProps<'a'> &
	BaseProps & {
		path: string
	}
export default function NavLink({
	path,
	theme,
	role,
	type,
	...props
}: NavLinkProps) {
	return (
		<Link
			to={path}
			className={theme}
			role={role}
			type={type}>
			{props.children}
		</Link>
	)
}
