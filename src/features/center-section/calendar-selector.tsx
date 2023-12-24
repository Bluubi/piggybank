import styles from "./calendar-input/ui/calendar-input.module.css";
import React, {forwardRef, useRef} from "react";

const CalendarSelector = forwardRef(({}, ref) => {
    const inputHTML = useRef<HTMLInputElement | null>(null)

    React.useImperativeHandle(ref, () => {
        return {
            fill(completeDate: string) {
                return inputHTML.current!.value = completeDate;
            }
        }
    })

    return (<div className={styles.inputContainer}>
        <input type={'text'} readOnly={true} disabled={true} className={styles.dateInput} ref={inputHTML} />
        <div className={styles.dateSelector}> Selecciona el estilo de fecha </div>
    </div>)
});

export default CalendarSelector;
