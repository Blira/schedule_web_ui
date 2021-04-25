import { darken, opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: var(--light-grey);
    border-radius: 0.4rem;

    padding: 2rem;
    text-align: center;

    strong {
        font-size: 1.5rem;
        font-weight: 400;
    }
    
    `

export const TimesContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    `

export const Time = styled.div`
    background: ${opacify(0.1, 'rgba(128, 128, 128, 0.2)')};
    border-radius: 0.4rem;
    padding: 1rem;

    &:hover {
        background: ${darken(0.9, 'rgba(128, 128, 128, 0.2)')};
    }
`

export const Table = styled.table`
    width: 100%;
    border-spacing: 0.5rem 0.5rem;
    background-color: var(--light-grey);
    border-radius: 0.4rem;

    thead {
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: center;
        line-height: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        text-align: center;
        border-radius: 0.4rem;
        background-color: ${opacify(0.1, 'rgba(128, 128, 128, 0.2)')};

        &:hover {
        background-color: ${darken(0.9, 'rgba(128, 128, 128, 0.2)')};
        }

    }

`

// export const TableBody = styled.tbody`
//     width: 100%;
// `

// export const TableData = styled.td`
//     width: 100%;
// `

// export const TableHead = styled.thead`
//     width: 100%;
// `

// export const TableRow = styled.tr`
//     width: 100%;
// `