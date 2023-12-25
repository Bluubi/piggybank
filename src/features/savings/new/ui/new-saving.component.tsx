import styles from './new-saving.module.css'
import CalendarSelector from '../../../center-section/calendar-input/ui/calendar-input.component.tsx'

type Inputs = {
	limit: number
	month: string
}

export default function NewSaving() {
	return (
		<div
			role={'contentinfo'}
			className={styles.content}>
			<h2> Start your savings </h2>
			<CalendarSelector />
			<form>
				<label> Write your limit </label>
			</form>
		</div>
	)
}
