import * as React from 'react';
import styled from 'styled-components';

interface ParagraphProps {
    className?: string;
    children?: any;
}

function ParagraphContainer(props: ParagraphProps): JSX.Element {
    return(
        <p className={props.className}>
            {props.children}
        </p>
    );
}

const Paragraph = styled(ParagraphContainer)`    
    font-family: Poppins;
`;

export default Paragraph;
