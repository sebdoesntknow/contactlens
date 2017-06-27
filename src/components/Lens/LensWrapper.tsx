import * as React from 'react';
import styled from 'styled-components';

interface LensWrapperProps {
    className?: string;
    children?: JSX.Element[] | string;
    margin?: string;
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    bgcolor?: string;
}

function LensWrapperContainer(props: LensWrapperProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const LensWrapper = styled(LensWrapperContainer)`
    margin: ${props => props.margin ? props.margin : '1em 1em'};
    width: ${props => props.width ? props.width : '5em'};
    height: ${props => props.height ? props.height : '5em'};
    border: ${props => props.border ? props.border : '1px dashed green'};
    borderRadius: ${props => props.borderRadius ? props.borderRadius : 'none'};
    background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
`;

export default LensWrapper;
