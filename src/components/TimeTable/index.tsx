import { useSelectedTime } from '../../hooks/useSelectedTime'
import { Container, TimesContainer, Time } from './style'


export default function TimeTable() {
    const times = ['10:16', '10:17', '10:18', '10:19', '10:20', '10:21', '10:22', '10:23', '10:24',]
    const { selectedTime, setSelectedTime } = useSelectedTime();


    const handleClick = (time: string) => {
        setSelectedTime(time)
    }
    return (
        <Container>
            <strong>Horários</strong>
            <TimesContainer>
                {times.map((time, index) => (
                    <Time key={index} selected={time === selectedTime} onClick={() => handleClick(time)}>
                        <span>{time}</span>
                    </Time>
                ))}
            </TimesContainer>
        </Container>
    )
}