import * as React from 'react';
import styled from 'styled-components';

interface ContactLensWrapperProps {
    className?: string;
    children: any;
}

function ContactLensWrapperContainer(props: ContactLensWrapperProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const ContactLensWrapper = styled(ContactLensWrapperContainer)`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
`;

export default ContactLensWrapper;
