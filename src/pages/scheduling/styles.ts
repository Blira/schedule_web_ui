import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    text-align: right;
`

export const ScheduleButton = styled.button`
    padding: 2rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.4rem;

    transition: background-color 0.5s;
    transition: color 0.5s;
    
    &:hover {
        background-color: var(--light-red);
        color: white;
    }
`