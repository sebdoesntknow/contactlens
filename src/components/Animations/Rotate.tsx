import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

interface AnimationProps {
    className?: string;
    children?: any;
}

function RotateContainer(props: AnimationProps): JSX.Element {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const Rotate = styled(RotateContainer)`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

export default Rotate;
