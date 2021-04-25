import { useSelectedDate } from '../../hooks/useSelectedDate'
import './styles'
import { Calendar } from './styles'

export function ScheduleCalendar() {

    const { setSelectedDate } = useSelectedDate();

    function handleClick(newSelectedDate: Date) {
        setSelectedDate(newSelectedDate)
    }

    return (
        <Calendar
            onClickDay={handleClick}
        />
    )
}