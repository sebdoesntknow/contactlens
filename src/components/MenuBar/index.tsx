import * as React from 'react';

import BarWrapper from './BarWrapper';
import BarTextItem from './BarTextItem';
import { H1 } from '../Headings';

const Header = BarWrapper.extend`
    display: flex;
    position: relative;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const Login = BarTextItem.extend`
    margin: none;
    font-size: 1.5em;
    padding: 0.5em;
`;

interface MenuBarProps {}
interface MenuBarState {}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
    render() {
        return (
            <Header>
                <H1>Contact Lens</H1>
                <BarTextItem padding={'0.5em'} fontSize={'1.5em'} fontFamily={'Poppins'}>Templates</BarTextItem>
                <BarTextItem padding={'0.5em'} fontSize={'1.5em'} fontFamily={'Poppins'}>Settings</BarTextItem>
                <BarTextItem padding={'0.5em'} fontSize={'1.5em'} fontFamily={'Poppins'}>Settings</BarTextItem>
                <Login>Login</Login>
            </Header>
        );
    }
}

export default MenuBar;
