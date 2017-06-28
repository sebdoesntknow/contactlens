import * as React from 'react';
import styled from 'styled-components';

interface ComboBoxProps {
    className?: string;
    children?: JSX.Element[];
}

function ComboBoxContainer(props: ComboBoxProps) {
    return (
        <select className={props.className}>
            {props.children}
        </select>
    );
}

const ComboBox = styled(ComboBoxContainer)`
    position: 'absolute';
    background-color: palevioletred;
    width: 5em;
    height: 1em;
    color: black;
    font-family: Poppins;
    font-size: 1em;
    border: 0.1em dashed red;
    border-radius: none;
    padding: none;
`;

export default ComboBox;
