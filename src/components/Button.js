import React from 'react'
import styled from 'styled-components'

const ButtonSC = styled.button`
    background-color: ${props => props.reversed ? 'white' : '#5cc2aa'};
    color:${props => !props.reversed ? 'white' : '#5cc2aa'};
    border: ${props  => props.reversed ? '1px solid #5cc2aa' : 'none' };
    text-transform: none;
    font-weight: 300;
    font-size: 15px;
    width:100%;
    height: 60px;
    border-radius: 5px;
    margin: 2% 0 2% 0;
`;

function Button(props) {
    return (
        <ButtonSC reversed={props.reversed} onClick={props.click}>{props.children}</ButtonSC>
    )
}

export default Button