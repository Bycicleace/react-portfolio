import React from 'react';

function Nav() {
    return (
        <header className='flex-row px-1'>
            <h1>
                <a href="/">
                    EK
                </a>
            </h1>
            <nav>
                <ul className='flex-row'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;