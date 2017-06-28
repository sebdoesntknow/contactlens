import * as React from 'react';

import ContactLensWrapper from '../../components/ContactLensBody/ContactLensWrapper';
import MenuBar from '../../components/MenuBar';
import LensWrapper from '../../components/Lens/LensWrapper';
import Footer from '../Footer';

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
                <Footer />
            </ContactLensWrapper>
        );
    }
}

export default ContactLens;
