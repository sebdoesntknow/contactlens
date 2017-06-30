import * as React from 'react';

import Presenter from './HeaderPresenter';

interface HeaderProps {}
interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <Presenter />
        );
    }
}

export default Header;
