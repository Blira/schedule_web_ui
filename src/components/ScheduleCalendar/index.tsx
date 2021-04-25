import { Detail } from 'react-calendar';
import { useSelectedDate } from '../../hooks/useSelectedDate'
import './styles'
import { Calendar } from './styles'

export function ScheduleCalendar() {

    const { setSelectedDate } = useSelectedDate();

    function handleClick(newSelectedDate: Date) {
        setSelectedDate(newSelectedDate)
    }

    interface DisableBusyDaysData {
        activeStartDate: Date;
        date: Date;
        view: Detail;
    }

    interface BusyDate {
        month: number;
        days: number[]
    }

    const busyDates: BusyDate[] = [
        {
            month: 4,
            days: [28, 26, 27, 29, 12, 14, 20, 17, 7, 6]
        }
    ]

    const disableBusyDays = ({ activeStartDate, date, view }: DisableBusyDaysData) => {
        const currentMonth: BusyDate = busyDates.find(busyDate => busyDate.month === date.getMonth()) as BusyDate;
        const disableMonth = !!currentMonth
        const disableDay = currentMonth?.days.includes(date.getDate());
        const isWeekend = [0, 6].includes(date.getDay());
        const disable = disableDay && disableMonth;
        return isWeekend ? isWeekend : disable;
    }


    return (
        <Calendar
            tileDisabled={disableBusyDays}
            minDate={new Date()}
            showNeighboringMonth={false}
            onClickDay={handleClick}
        />
    )
}