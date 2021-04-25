import './styles'
import Calendar from 'react-calendar'

export function ScheduleCalendar() {
    return (
        <Calendar
            onClickDay={(event) => {
                alert(event)
            }}
        />
    )
}