// import { useEffect, useState } from 'react';
import { Container, TimesContainer, Time } from './style'


export default function TimeTable() {
    const times = ['10:15', '10:15', '10:15', '10:15', '10:15', '10:15', '10:15', '10:15', '10:15',]

    // const [selectedTime, setSelectedTime] = useState('');

    // useEffect((evt: string) => {
    //     setSelectedTime(evt)
    // }, [])

    return (
        <Container>
            <strong>Horários</strong>
            <TimesContainer>
                {times.map((time, index) => (
                    <Time key={index} onClick={() => {
                        console.log(time)
                    }}>
                        <span>{time}</span>
                    </Time>
                ))}
            </TimesContainer>
        </Container>
    )
}