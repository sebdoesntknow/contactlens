import * as React from 'react';
import styled from 'styled-components';

interface ColumnComponentProps {
    className?: string;
    children?: any;
    bgcolor?: string;
}

function ColumnComponentContainer(props: ColumnComponentProps): JSX.Element {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const ColumnComponent = styled(ColumnComponentContainer)`    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    flex-flow: column wrap;
`;

export default ColumnComponent;
