import * as React from 'react';

import BarWrapper from './BarWrapper';
import BarTextItem from './BarTextItem';

interface MenuBarProps {}
interface MenuBarState {}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
    render() {
        return (
            <BarWrapper primary={true}>
                <BarTextItem fontSize={'2em'} fontFamily={'Poppins'} margin={'0.5em 0.5em'}>Templates</BarTextItem>
                <BarTextItem fontSize={'2em'} fontFamily={'Poppins'} margin={'0.5em 0.5em'}>Settings</BarTextItem>
            </BarWrapper>
        );
    }
}

export default MenuBar;
