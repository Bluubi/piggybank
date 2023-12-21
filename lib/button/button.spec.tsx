import { describe, expect, it } from 'vitest'
import Button from './button.component'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
	it('should render correctly with predefined props', async () => {
		render(
			<Button>
				<p>Click me</p>
			</Button>
		)

		const button = await screen.getByRole('submit')

		expect(button.className).toContain('base light')
	})
	it('should render correctly with defined props', async () => {
		render(
			<Button
				role={'button'}
				theme={'secondary'}
				type={'button'}
				preferences={'dark'}>
				<p>Click me</p>
			</Button>
		)

		const button = await screen.getByRole('button')

		expect(button.className).toContain('secondary dark')
	})
})
