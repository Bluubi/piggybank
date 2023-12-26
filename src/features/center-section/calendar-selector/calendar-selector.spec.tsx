import {describe, test, expect, afterEach} from 'vitest'
import {cleanup, render} from '@testing-library/react'
import CalendarSelector from './calendar-selector.component.tsx'
import { Simulate } from 'react-dom/test-utils'
import click = Simulate.click

describe('Calendar selector', () => {
	afterEach(() => {
		cleanup()
	})
	test('should render', () => {
		const { getByTestId } = render(<CalendarSelector />)

		const dateSelector = getByTestId('date-selector')
		const list = dateSelector.querySelector('ul')

		const liElements = list!.children

		expect(liElements.length).toEqual(2)
		expect(liElements[0].textContent).toContain('YYYY/MM/DD')
		expect(liElements[1].textContent).toContain('DD/MM/YYYY')
	})

	test('should trigger event on click and change date format es-ES => zh-Hans-CN', () => {
		const { getByTestId } = render(<CalendarSelector />)

		const dateSelector = getByTestId('date-selector')
		const input = getByTestId('input') as HTMLInputElement
		const list = dateSelector.querySelector('ul')
		const liElements = list!.children

		input.value = new Date().toLocaleDateString('zh-Hans-CN')
		click(liElements[0])

		expect(input.value).toEqual(new Date().toLocaleDateString('es-ES'))
	});

	test('should trigger event on click and change date format zh-Hans-CN => es-ES', () => {
		const { getByTestId } = render(<CalendarSelector />)

		const dateSelector = getByTestId('date-selector')
		const input = getByTestId('input') as HTMLInputElement
		const list = dateSelector.querySelector('ul')
		const liElements = list!.children

		input.value = new Date().toLocaleDateString('es-ES')
		click(liElements[1])

		expect(input.value).toEqual(new Date().toLocaleDateString('zh-Hans-CN'))
	})
})
