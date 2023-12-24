import Calendar from "react-calendar";
import styles from './calendar-input.module.css';
import CalendarSelector from "../../calendar-selector.tsx";
import {ForwardRefExoticComponent, useRef} from "react";

export default function CalendarInput() {

    const inputHTML = useRef<ForwardRefExoticComponent<typeof CalendarSelector>>(null)

    function setDate(value: Date) {
        const month = value.getMonth()
        const year = value.getFullYear()
        const number = value.getDate()
        console.log(inputHTML.current);
        inputHTML.current!.fill(`${year}/${month}/${number}`);
    }

    return (
        <div>
            <CalendarSelector ref={inputHTML}/>
            <Calendar className={ `${styles.calendar}` } onChange={(value) => setDate(new Date(value))} />
        </div>)
}

/*function getStringMonth(monthNumber: number): string {
    const months = [
        'jan',
        'feb',
        'march',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
    ]

    return months[monthNumber]
}*/
