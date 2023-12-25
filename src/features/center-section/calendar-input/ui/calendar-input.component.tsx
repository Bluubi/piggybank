import Calendar from 'react-calendar'
import styles from './calendar-input.module.css'
import CalendarSelectorComponent from '../../calendar-selector/calendar-selector.component.tsx'
import React from 'react'

export default function CalendarInput() {
	const inputHTML = React.createRef()

	function setDate(value: Date) {
		const month = value.getMonth()
		const year = value.getFullYear()
		const number = value.getDate()
		// @ts-expect-error Typescript cannot infer this input is CalendarSelectorComponent type
		inputHTML.current!.fill(`${year}/${month}/${number}`)
	}

	return (
		<div>
			<CalendarSelectorComponent ref={inputHTML} />
			<Calendar
				className={`${styles.calendar}`}
				onChange={(value) => setDate(new Date(value))}
			/>
		</div>
	)
}

