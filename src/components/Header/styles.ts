import { red } from '@material-ui/core/colors';
import AddToQueue from '@material-ui/icons/AddToQueue';
import styled from 'styled-components';

export const Container = styled.div`
        background-color: ${red[300]};
        height: 4rem;

        margin-bottom: 1rem;
`

export const AppIcon = styled(AddToQueue)`
        color: var(--background);
        margin: 1rem 1rem;

`