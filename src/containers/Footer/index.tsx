import * as React from 'react';

import BarWrapper from '../../components/MenuBar/BarWrapper';
import ComboBoxWrapper from '../../components/ComboBox/ComboBoxWrapper';

const FooterBar = ComboBoxWrapper.extend`
    position: absolute;
    background-color: papayawhip;
    width: 10em;
    height: 2em;
    margin: 1em auto auto 35%;
    border: 1px solid #893f9e;
    border-radius: 3px;
`;

interface FooterProps {}
interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
    render() {
        return (
            <BarWrapper
                margin={'25em auto auto auto'}
                height={'4em'}
            >
                <FooterBar>
                    <option value="A">Template 1</option>
                    <option value="B">Template 2</option>
                    <option value="C">Template 3</option>
                </FooterBar>
            </BarWrapper>
        );
    }
}

export default Footer;
