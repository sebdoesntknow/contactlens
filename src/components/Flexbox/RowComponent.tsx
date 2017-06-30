import * as React from 'react';
import styled from 'styled-components';

interface RowComponentProps {
    className?: string;
    children?: any;
    bgcolor?: string;
}

function RowComponentContainer(props: RowComponentProps): JSX.Element {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const RowComponent = styled(RowComponentContainer)`    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    flex-flow: row wrap;
`;

export default RowComponent;
