import * as React from 'react';

import BarWrapper from './BarWrapper';

interface MenuBarProps {}
interface MenuBarState {}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
    render() {
        return (
            <BarWrapper primary={true}>
                <p>ContactLens</p>
                <p>Settings</p>
            </BarWrapper>
        );
    }
}

export default MenuBar;
