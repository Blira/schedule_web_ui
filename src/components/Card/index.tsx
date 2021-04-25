import {
    CardContent, LocationCard, DoctorAvatar, AvatarContainer,
    UpperCard, LowerCard, CardDivider, LowerCardInfoContainer, CardTitle
} from './styles'
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Clock from '@material-ui/icons/QueryBuilder';


interface CardProps {
    title: string;
    avatar: string;
    name: string;
    description: string;
    firstInfo: string;
    secondInfo: string;
}

export default function Card(cardProps: CardProps) {
    return (
        <LocationCard>
            <CardContent>
                <UpperCard>
                    <CardTitle>{cardProps.title}</CardTitle>
                    <AvatarContainer>
                        <DoctorAvatar src={cardProps.avatar} />
                        <strong>{cardProps.name}</strong>
                    </AvatarContainer>
                    <span>{cardProps.description}</span>
                </UpperCard>
                <CardDivider />
                <LowerCard>
                    <LowerCardInfoContainer>
                        <CalendarIcon />
                        <span>{cardProps.firstInfo}</span>
                    </LowerCardInfoContainer>
                    <LowerCardInfoContainer>
                        <Clock />
                        <span>{cardProps.secondInfo}</span>
                    </LowerCardInfoContainer>
                </LowerCard>
            </CardContent>
        </LocationCard>
    )
}