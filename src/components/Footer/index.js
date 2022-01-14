import React from 'react';

function Footer() {
    return (
        <div className='flex-row space-between'>
            <h3 className='mx-2'>&copy; Elliott Kvamme, 2022</h3>
            <ul className='flex-row mx-2'>
                <div className='mx-2' id="github">
                    <a href="https://www.github.com/Bycicleace">
                        <img src="./icons/GH-Light-32x32.png" />
                    </a>
                </div>
                <div id="linkedin">
                    <a href="https://www.linkedin.com/in/elliottkvamme/">
                        <img src="./icons/LI-32x32.png" />
                    </a>
                </div>
            </ul>
        </div>
    )
}

export default Footer;