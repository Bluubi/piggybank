import styles from './new-saving.module.css'
import CalendarSelector from '../../../calendar-input/ui/calendar-input.component.tsx'
import {useFormNewSaving} from '../../../calendar-selector/calendar-selector.component.ts'
import Button from "../../../../../lib/button/button.component.tsx";
import {FieldValues, FormProvider} from "react-hook-form";

export type NewSavingForm = {
	limit: number
	date: string
}

export default function NewSaving() {
	function registerNewSaving(data: FieldValues) {
		console.log(data);
	}

	const { register, handleSubmit, methods } = useFormNewSaving()

	return (
		<div
			role={'contentinfo'}
			className={styles.content}>
			<h2> Start your savings </h2>
			<FormProvider {...methods}>
			<form onSubmit={handleSubmit(registerNewSaving)}>
				<CalendarSelector />
				<div className={styles.controller}>
					<label> Write your limit </label>
					<input
						className={styles.input}
						type={'number'}
						{...register('limit', {
							required: true,
							min: 1
						})}
					/>
				</div>

				<Button theme={'primary'} role={'submit'} type={'submit'} > Create </Button>
			</form>
			</FormProvider>
		</div>
	)
}
