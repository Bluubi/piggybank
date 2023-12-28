import { ComponentProps } from 'react'

export default function MainSection({ ...props }: ComponentProps<'section'>) {
	return <section>{props.children}</section>
}
