import * as React from 'react';
import styled from 'styled-components';

interface BarWrapperProps {
    className?: string;
    children?: JSX.Element[];
    primary?: boolean;
    bgcolor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontFamily?: string;
}

function BarWrapperContainer(props: BarWrapperProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const BarWrapper = styled(BarWrapperContainer)`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    position: ${props => props.primary ? 'fixed' : 'absolute'};
    background-color: ${props => props.bgcolor ? props.bgcolor : 'palevioletred'};
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '20%'};
    font-size: ${props => props.fontSize ? props.fontSize : '2em'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Poppins'};
    margin: 0 auto auto 0;
`;

export default BarWrapper;