import React from 'react';

function Nav(props) {
    const {
        currentNavigation,
        setCurrentNavigation
     } = props;

    return (
        <header className='flex-row flex-wrap px-1 space-between'>
            <h1>
                <a href="/">
                    Elliott Kvamme
                </a>
            </h1>
            <nav>
                <ul className='flex-row flex-wrap'>
                    <li className={`mx-2 ${currentNavigation === 'about' && 'navactive'}`}>
                        <span onClick={() => setCurrentNavigation('about')}>About</span>
                    </li>
                    <li className={`mx-2 ${currentNavigation === 'projects' && 'navactive'}`}>
                        <span onClick={() => setCurrentNavigation('projects')}>Projects</span>
                    </li>
                    <li className={`mx-2 ${currentNavigation === 'resume' && 'navactive'}`}>
                        <span onClick={() => setCurrentNavigation('resume')}>Resume</span>
                    </li>
                    <li className={`mx-2 ${currentNavigation === 'contact' && 'navactive'}`}>
                        <span onClick={() => setCurrentNavigation('contact')}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;