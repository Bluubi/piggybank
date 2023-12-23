import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'

import NavLink from './link-navigator.component'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import App from '../../src/App'
import NewSaving from '../../src/features/savings/new/ui/new-saving.component'

describe('Link Navigator', () => {
	afterEach(() => {
		cleanup()
	})

	test('should render link', () => {
		const { getByRole } = render(
			<MemoryRouter>
				<NavLink
					theme={'primary'}
					path={''}
					role={'link'}
					type={'button'}
				/>
			</MemoryRouter>
		)
		const link = getByRole('link')

		expect(link.className).toContain('primary')
	})

	test.skip('should go to path', async () => {
		const { getByRole } = render(
			<BrowserRouter>
				<Routes>
					<Route
						path={''}
						element={<App />}></Route>
					<Route
						path={'/saving/new'}
						element={<NewSaving />}></Route>
				</Routes>
			</BrowserRouter>
		)

		const link = getByRole('link') as HTMLAnchorElement
		fireEvent.click(link)

		await waitFor(() => {
			expect(document.body.textContent).toContain('Keep in that way')
		})
	})
})
