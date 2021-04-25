import { useHistory } from "react-router-dom";
import { ArrowBack } from "../../global/styles";
import { Container } from "./styles";

interface SubHeaderProps {
    empty?: boolean;
}

export default function SubHeader({ empty }: SubHeaderProps) {
    const history = useHistory();
    const handleClick = () => history.goBack();

    if (!empty) {
        return (
            <Container clickable={true} onClick={handleClick}>
                <div>
                    <ArrowBack fontSize="large" />
                    <strong>Voltar</strong>
                </div>
            </Container>
        )
    } else {
        return (
            <Container clickable={false}>
                <div>
                    <strong>Locais de agendamento disponíveis</strong>
                </div>
            </Container>)
    }
}