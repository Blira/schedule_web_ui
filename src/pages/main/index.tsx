import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import CardContainer from '../../components/CardContainer'

interface Location {
    title: string;
    avatar: string;
    name: string;
    description: string;
    firstInfo: string;
    secondInfo: string;
}

export function MainPage() {

    const [locations, setLocations] = useState<Location[]>([])

    useEffect(() => {
        setLocations([
            {

                title: "Ilha do Leite",
                avatar: "https://i.pravatar.cc/150",
                name: "Renata Pompilio",
                description: "Agentamendo de consultas na Ilha do leite",
                firstInfo: "1 Session",
                secondInfo: "1h 30m Session"
            },
            {

                title: "Ilha do Leite",
                avatar: "https://i.pravatar.cc/100",
                name: "Pompilio Renata",
                description: "Agentamendo de consultas na Ilha do leite",
                firstInfo: "1 Session",
                secondInfo: "1h 30m Session"
            },
            {

                title: "Ilha do Leite",
                avatar: "https://i.pravatar.cc/200",
                name: "Repilio Pomnata",
                description: "Agentamendo de consultas na Ilha do leite",
                firstInfo: "1 Session",
                secondInfo: "1h 30m Session"
            }
        ])
    }, [])

    return (
        <CardContainer>
            {locations.map((location, index) => (
            <Card
            key={index}
            title={location.title}
            avatar={location.avatar}
            name={location.name}
            description={location.description}
            firstInfo={location.firstInfo}
            secondInfo={location.secondInfo}
        />
            ))}
        </CardContainer>
    )
}