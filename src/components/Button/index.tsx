import * as React from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
    className?: string;
    children?: any;
}

function ButtonContainer(props: ButtonContainerProps): JSX.Element {
    return(
        <button className={props.className}>
            {props.children}
        </button>
    );
}

const Button = styled(ButtonContainer)`
    position: absolute;
    font-family: Poppins;
    font-size: 0.5em;
    color: #a35710;
    border: 1px dashed green;
    border-radius: none;
    background-color: #d8ea12;
    margin: none;
    padding: none;
    width: 5em;
    height: 3em;
`;

export default Button;
