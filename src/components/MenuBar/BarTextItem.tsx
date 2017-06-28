import * as React from 'react';
import styled from 'styled-components';

interface BarTextItemProps {
    className?: string;
    children?: JSX.Element[] | string;
    fontSize?: string;
    fontFamily?: string;
    color?: string;
    margin?: string;
    padding?: string;
}

function BarTextItemContainer(props: BarTextItemProps) {
    return (
        <span className={props.className}>
            {props.children}
        </span>
    );
}

const BarTextItem = styled(BarTextItemContainer)`
    font-size: ${props => props.fontSize ? props.fontSize : '1em'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Poppins'};
    color: ${props => props.color ? props.color : 'black'};
    margin: ${props => props.margin ? props.margin : '1em 1em'};
    padding: ${props => props.padding ? props.padding : 'none'};
    text-align: center;
`;

export default BarTextItem;
