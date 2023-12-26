import styles from './calendar-selector.module.css'
import React, { forwardRef, useRef } from 'react'
import {
	dateFormatOptions,
	openDateFormatOption,
	selectDateFormatOption,
} from './calendar-selector.component.ts'

const CalendarSelector = forwardRef(({}, ref) => {
	const inputHTML = useRef<HTMLInputElement | null>(null)

	React.useImperativeHandle(ref, () => {
		return {
			fill(completeDate: string) {
				inputHTML.current!.value = completeDate
			},
		}
	})

	function handleClickChangeDateFormat(event: Event) {
		const format = selectDateFormatOption(event)
		console.log('hehe hoooooi')
		inputHTML.current!.value = format!()
	}

	function generateDateFormatOptions() {
		const list: JSX.Element[] = []
		dateFormatOptions.forEach((_, key: string) =>
			list.push(
				<li
					data-value={key}
					key={`id_${key}`}
					onClick={(event) => handleClickChangeDateFormat(event)}>
					{' '}
					{key}
				</li>
			)
		)
		return list
	}

	return (
		<div className={styles.inputContainer} data-testid={'input-container'}>
			<input
				type={'text'}
				readOnly={true}
				disabled={true}
				data-testid={'input'}
				className={styles.dateInput}
				ref={inputHTML}
			/>
			<div
				className={styles.dateSelector}
				onClick={openDateFormatOption}>
				<p>Selecciona el estilo de fecha</p>
			</div>
			<div
				className={styles.childSelector}
				data-testid={'date-selector'}>
				<ul>{generateDateFormatOptions()}</ul>
			</div>
		</div>
	)
})

export default CalendarSelector
