import Calendar from 'react-calendar'
import styles from './calendar-input.module.css'
import CalendarSelectorComponent from '../../calendar-selector/calendar-selector.component.tsx'
import { useEffect, useRef, useState } from 'react'

export default function CalendarInput() {
	const inputHTML = useRef<{fill: (value: string) => void}>(null);

	const [ date, setDate ] = useState<Date>(new Date());

	useEffect(() => {
			const month = date.getMonth()
			const year = date.getFullYear()
			const number = date.getDate()
			if(inputHTML.current){
				inputHTML.current.fill(`${year}/${month}/${number}`)
			}
		
	}, [inputHTML, date])

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

