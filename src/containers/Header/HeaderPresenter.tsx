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

const MenuOption = Paragraph.extend`
    color: #cfd192;
    font-size: 2em;
    order: 2;
`;

interface HeaderPresenterProps {}

export default (props: HeaderPresenterProps) => {
    return (
        <Menu>
            <Title>ContactLens</Title>
            <MenuOption>Settings</MenuOption>
            <MenuOption>Templates</MenuOption>
            <MenuOption>Login</MenuOption>
        </Menu>
    );
};
