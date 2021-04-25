import { useHistory } from "react-router-dom";
import { ArrowBack } from "../../global/styles";
import { Container } from "./styles";

export default function SubHeader() {
    const history = useHistory();
    const handleClick = () => history.goBack();

    return (
        <Container onClick={handleClick}>
            <div>
                <ArrowBack fontSize="large" />
                <strong>Voltar</strong>
            </div>
        </Container>
    )
}