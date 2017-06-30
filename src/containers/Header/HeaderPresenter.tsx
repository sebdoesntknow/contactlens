import * as React from 'react';

import RowComponent from '../../components/Flexbox/RowComponent';
import { H1 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';

const Menu = RowComponent.extend`
    justify-content: space-around;
    background-color: palevioletred;
    flex: 0 100%;
    border: none;
`;

const Title = H1.extend`
    color: #5732bc;
    order: 1;
`;

const Settings = Paragraph.extend`
    color: #cfd192;
    font-size: 2em;
    order: 2;
`;
const Templates = Settings.extend``;
const Login = Settings.extend``;

interface HeaderPresenterProps {}

export default (props: HeaderPresenterProps) => {
    return (
        <Menu>
            <Title>ContactLens</Title>
            <Settings>Settings</Settings>
            <Templates>Templates</Templates>
            <Login>Login</Login>
        </Menu>
    );
};
