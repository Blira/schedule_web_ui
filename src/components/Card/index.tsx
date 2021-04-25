import {
    CardContent, LocationCard, Avatar, AvatarContainer,
    UpperCard, LowerCard, CardDivider, LowerCardInfoContainer, CardTitle
} from './styles'
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Clock from '@material-ui/icons/QueryBuilder';
import { useHistory } from 'react-router-dom';


export interface CardProps {
    title: string;
    avatar: string;
    name: string;
    description: string;
    firstInfo: string;
    secondInfo: string;
    animated?: boolean
}



export default function Card(cardProps: CardProps) {
    const history = useHistory();
    const handleClick = () => history.push({ pathname: '/scheduling', state: cardProps });
    return (
        <LocationCard onClick={handleClick} animated={cardProps.animated}>
            <CardContent>
                <UpperCard>
                    <CardTitle>{cardProps.title}</CardTitle>
                    <AvatarContainer>
                        <Avatar src={cardProps.avatar} />
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