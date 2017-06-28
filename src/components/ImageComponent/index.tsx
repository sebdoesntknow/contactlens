import * as React from 'react';
import styled from 'styled-components';

interface ImgProps {
    className?: string;
    children?: any;
    src: string;
}

function ImgContainer(props: ImgProps): JSX.Element {
    return(
        <img className={props.className} src={props.src} />
    );
}

const Img = styled(ImgContainer)`
    width: 3em;
    height: 3em;
`;

export default Img;
