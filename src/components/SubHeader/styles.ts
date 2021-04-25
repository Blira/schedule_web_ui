import styled from 'styled-components';

interface ContainerProps {
    clickable: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding: 1.5rem;
    height: 6rem;

    @media(max-width: 407px){
        height: 9rem;
    }
    div {

        display: flex;
        align-items: center;
        
        transition: opacity 0.3s;

        &:hover {
                 ${props => props.clickable ? 'cursor: pointer; opacity: 0.7;' : ''};
                
        }
    }
    
    strong {
        font-size: 1.5rem;
        color: var(--light-grey)
    }
`