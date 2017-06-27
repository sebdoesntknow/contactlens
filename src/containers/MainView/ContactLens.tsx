import * as React from 'react';

import ContactLensWrapper from '../../components/ContactLensBody/ContactLensWrapper';
import MenuBar from '../../components/MenuBar';
import LensWrapper from '../../components/Lens/LensWrapper';

interface ContactLensProps {}
interface ContactLensState {}

class ContactLens extends React.Component<ContactLensProps, ContactLensState> {

    constructor(props: ContactLensProps) {
        super(props);
    }

    render() {
        return(
            <ContactLensWrapper>
                <MenuBar />
                <LensWrapper margin={'5em 2em'} width={'15em'} height={'15em'} />
                <LensWrapper margin={'5em 2em'} width={'15em'} height={'15em'} />
            </ContactLensWrapper>
        );
    }
}

export default ContactLens;
