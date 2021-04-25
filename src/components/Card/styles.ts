import styled from 'styled-components';


export const Container = styled.div`
        border-radius: 0.4rem;
        margin: 0rem 4rem;
        padding: 4rem;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
`


interface LocationCardProps {
        animated?: boolean
}

export const LocationCard = styled.div<LocationCardProps>`
        padding: 1rem;
        background-color: var(--light-grey);
        border-radius: 0.4rem;

        box-shadow: 0.1rem 0.1rem 0.4rem;

        transition: transform 0.5s;

        &:hover {
                 ${props => props.animated ? 'transform: scale(1.05); cursor: pointer;' : ''};
                
        }

        &:active {
                 ${props => props.animated ? 'opacity: 0.6;' : ''};
                
        }
`

interface AvatarProps {
        src: string;
}
export const Avatar = styled.img<AvatarProps>`
        src: ${props => props.src};
        margin-top: 0.5rem;
        border-radius: 3rem;
        width: 4rem;
        height: 4rem;
`
export const CardDivider = styled.hr`
        border-top: 1px solid #bbb;   

`

export const CardTitle = styled.strong`
        display: block;
        margin-bottom: 1rem;
`

export const UpperCard = styled.div`
        margin-bottom: 0.5rem;

        strong {        
                font-size: 1.5rem;
        }
        span {
                display: block;
                margin-top: 1rem;
                color: var(--text-body);
                }
`
export const LowerCard = styled.div`
margin-top: 0.5rem;
`
export const LowerCardInfoContainer = styled.div`
        display: flex;
        align-items: center;
        margin: 1rem 0rem;

        span {
                margin: auto 1rem;
                color: var(--text-body);
        }
`
export const AvatarContainer = styled.div`
    display: flex;
    align-items: center;

    strong {
        margin-left: 1rem;
        font-weight: 350;
    }

`

export const CardContent = styled.div`
`