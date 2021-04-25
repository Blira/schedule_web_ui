import styled from 'styled-components';

export const Container = styled.div`
    padding: 1.5rem;
    display: flex;
    align-items: center;

    div {

        display: flex;
        align-items: center;


        &:hover {
        cursor: pointer;
    }
    }
    
    strong {
        font-size: 1.5rem;
        color: var(--light-grey)
    }
`