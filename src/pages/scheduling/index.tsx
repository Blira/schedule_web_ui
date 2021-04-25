import Card, { CardProps } from "../../components/Card"
import { ScheduleCalendar } from "../../components/ScheduleCalendar";
import { Container, ScheduleButton } from "./styles"
import SubHeader from "../../components/SubHeader"
import TimeTable from "../../components/TimeTable";

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
            <Container>
                <TimeTable />
            </Container>
            <Container>
                <ScheduleButton>Schedule appointment</ScheduleButton>
            </Container>
        </>
    )
}