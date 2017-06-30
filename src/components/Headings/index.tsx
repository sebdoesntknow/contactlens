import * as React from 'react';
import styled from 'styled-components';

interface H1ContainerProps {
    className?: string;
    children?: any;
}

function HeadingContainer(props: H1ContainerProps): JSX.Element {
    return(
        <h1 className={props.className}>
            {props.children}
        </h1>
    );
}

export const H1 = styled(HeadingContainer)`
    font-size: 2em;
    font-family: Poppins;
    color: black;
`;
