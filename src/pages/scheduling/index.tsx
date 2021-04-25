import { CardProps } from "../../components/Card"
import SubHeader from "../../components/SubHeader"

interface SchedulingPageProps {
    location: {
        state: CardProps
    }
}

export function SchedulingPage(schedulingPageProps: SchedulingPageProps) {
    console.log(schedulingPageProps.location.state)
    return (
        <SubHeader />
    )
}