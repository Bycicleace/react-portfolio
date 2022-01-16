import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        currentNavigation,
        setCurrentNavigation
     } = props;

    return (
        <header className='flex-row flex-wrap px-1 space-between'>
            <h1>Elliott Kvamme</h1>
            <Nav
                currentNavigation = {currentNavigation}
                setCurrentNavigation = {setCurrentNavigation}
            />
        </header>
    )
}

export default Header;