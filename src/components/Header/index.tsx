import { Container, AppIcon, Logo } from './styles';

export function Header() {
    return (
        <Container>
            <Logo>
                <AppIcon fontSize="large" />
                <span>Scheduler</span>
            </Logo>
                <span>Agendamento de consultas odontológicas.</span>
        </Container>
    )
}