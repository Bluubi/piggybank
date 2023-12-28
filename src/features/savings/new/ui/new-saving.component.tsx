import styles from './new-saving.module.css'
import CalendarSelector from '../../../calendar-input/ui/calendar-input.component.tsx'
import { useFormNewSaving } from '../../../calendar-selector/calendar-selector.component.ts'

export type NewSavingForm = {
	limit: number
	date: string
}

export default function NewSaving() {
	function registerNewSaving() {}

	const { register, handleSubmit } = useFormNewSaving()

	return (
		<div
			role={'contentinfo'}
			className={styles.content}>
			<h2> Start your savings </h2>
			<form onSubmit={handleSubmit(registerNewSaving)}>
				<CalendarSelector />
				<label> Write your limit </label>
				<input
					type={'number'}
					{...register('limit', {
						required: true,
					})}
				/>
			</form>
		</div>
	)
}
