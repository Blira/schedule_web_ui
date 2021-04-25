import { ReactNode } from 'react'
import { Container} from './styles'


interface CardContainerProps {
    children: ReactNode
}
export default function CardContainer({children}: CardContainerProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}