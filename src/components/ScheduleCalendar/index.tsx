import './styles'
import { Calendar } from './styles'

export function ScheduleCalendar() {
    return (
        <Calendar
            onClickDay={(event) => {
                console.log(event)
            }}
        />
    )
}