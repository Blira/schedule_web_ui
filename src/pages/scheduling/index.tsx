import { CardProps } from "../../components/Card"

interface SchedulingPageProps {
    location: {
        state: CardProps
    }
}

export function SchedulingPage(schedulingPageProps: SchedulingPageProps) {
    console.log(schedulingPageProps.location.state)
    return (
        <h2>SCHEDULING</h2>
    )
}