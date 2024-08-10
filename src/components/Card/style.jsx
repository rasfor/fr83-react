import { styled } from 'styled-components';

export const StyledCard = styled.div`
    width: 300px;
    height: 600px;
    background-color: ${props => props.bgColor ? props.bgColor: 'blue' };
    display: flex;
`

export const StyledTotal = styled.div`
    display:grid;
    height: 45px;
    grid-template-columns: 1fr 1fr;
`

export const StyledValue = styled.h1`
    font-size: 50px;
    margin:0;
`

export const StyledText = styled.span`
    font-size: 18px;
    ${props => props.end && 'align-self: end'}
`