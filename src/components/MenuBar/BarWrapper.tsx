import * as React from 'react';
import styled from 'styled-components';

interface BarWrapperProps {
    className?: string;
    children?: any;
    primary?: boolean;
    bgcolor?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
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
    margin: ${props => props.margin ? props.margin : '0 auto auto 0'};
    padding: ${props => props.padding ? props.padding : 'none'};
`;

export default BarWrapper;
