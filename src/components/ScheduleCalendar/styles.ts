import styled from 'styled-components';
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { opacify } from 'polished';


export const Calendar = styled(ReactCalendar)`
    width: 100%;
    border-radius: 0.4rem;
     * {
    font-size: 1rem;
     }

    .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus, .react-calendar__tile--active{ 
        background: ${opacify(0.1, 'rgba(128, 128, 128, 0.2)')};
    }

    .react-calendar__tile--now {
        background-color: var(--light-grey);
        &:hover {
        background-color: grey;

        }
    }

    .react-calendar__month-view__days__day--weekend {
        color: grey;
    }
`