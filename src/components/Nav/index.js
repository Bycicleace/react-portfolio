import React from 'react';

function Nav() {
    return (
        <header className='flex-row px-1 space-between'>
            <h1>
                <a href="/">
                    EK
                </a>
            </h1>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">About</a>
                    </li>
                    <li className='mx-2'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='mx-2'>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className='mx-2'>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;