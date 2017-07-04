import * as React from 'react';

import BarWrapper from '../../components/Flexbox/RowComponent';
import ComboBoxWrapper from '../../components/ComboBox/ComboBoxWrapper';

const FooterSelect = ComboBoxWrapper.extend`
    position: absolute;
    background-color: papayawhip;
    width: 10em;
    height: 2em;
    margin: 1em auto auto 40%;
    border: 1px solid #893f9e;
    border-radius: 3px;
`;

const FooterBar = BarWrapper.extend`
    background-color: palevioletred;
    order: 5;
    width: 100%;
    height: 5em;
`;

interface FooterProps {}
interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
    render() {
        return (
            <FooterBar>
                <FooterSelect>
                    <option value="A">Template 1</option>
                    <option value="B">Template 2</option>
                    <option value="C">Template 3</option>
                </FooterSelect>
            </FooterBar>
        );
    }
}

export default Footer;
