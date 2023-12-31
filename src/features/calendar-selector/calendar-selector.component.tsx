import styles from './calendar-selector.module.css'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import {
	dateFormatOptions,
	openDateFormatOption,
	selectDateFormatOption,
	useFormNewSaving,
} from './calendar-selector.component.ts'

const CalendarSelectorComponent = forwardRef(({}, ref) => {
	const { register } = useFormNewSaving()
	const inputHTML = useRef<HTMLInputElement>()

	useImperativeHandle(
		ref,
		() => {
			return {
				fill(completeDate: string) {
					inputHTML.current!.value = completeDate
				},
			}
		},
		[]
	)

	function handleClickChangeDateFormat(event: Event) {
		const format = selectDateFormatOption(event)
		inputHTML.current!.value = format!()
	}

	function displayCalendarOptions() {}

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
		<div
			className={styles.inputContainer}
			onClick={() => displayCalendarOptions()}>
			<input
				type={'text'}
				readOnly={true}
				disabled={true}
				className={styles.dateInput}
				{...register('date')}
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

export default CalendarSelectorComponent
