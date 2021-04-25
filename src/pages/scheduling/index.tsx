import Card, { CardProps } from "../../components/Card"
import { ScheduleCalendar } from "../../components/ScheduleCalendar";
import { Container } from "./styles"
import SubHeader from "../../components/SubHeader"

interface SchedulingPageProps {
    location: {
        state: CardProps
    }
}

export function SchedulingPage(schedulingPageProps: SchedulingPageProps) {
    const cardProps = schedulingPageProps.location.state;
    return (
        <>
            <SubHeader />
            <Card
                animated={false}
                title={cardProps.title}
                avatar={cardProps.avatar}
                name={cardProps.name}
                description={cardProps.description}
                firstInfo={cardProps.firstInfo}
                secondInfo={cardProps.secondInfo}
            />
            <Container>
                <ScheduleCalendar />
            </Container>
        </>
    )
}