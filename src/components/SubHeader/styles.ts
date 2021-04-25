import styled from 'styled-components';

export const Container = styled.div`
    padding: 1.5rem;
    display: flex;
    align-items: center;

    div {

        display: flex;
        align-items: center;

        transition: opacity 0.3s;

        &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    }
    
    strong {
        font-size: 1.5rem;
        color: var(--light-grey)
    }
`