import { red, common } from '@material-ui/core/colors';
import AddToQueue from '@material-ui/icons/AddToQueue';
import styled from 'styled-components';

export const Container = styled.div`
        background-color: ${red[300]};
        width: 100%;

        padding: 1rem;
        height: 5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;


        color: ${common.white};
`

export const Logo = styled.div`
        display:flex;
        align-items: center;

        span {
                margin-left: 1rem;
                font-size: 1.25rem;
                font-weight: 500;
        }

        
`

export const AppIcon = styled(AddToQueue)`

`