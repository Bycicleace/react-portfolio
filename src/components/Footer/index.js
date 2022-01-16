import React from 'react';

function Footer() {
    return (
        <div className='flex-row flex-wrap space-between'>
            <h3 className='mx-2'>&copy; Elliott Kvamme, 2022</h3>
            <ul className='flex-row flex-wrap mx-2'>
                <div className='mx-2' id="github">
                    <a href="https://www.github.com/Bycicleace" target='_blank'>
                        <img src="./icons/GH-Light-32x32.png" />
                    </a>
                </div>
                <div className='mx-2' id="linkedin">
                    <a href="https://www.linkedin.com/in/elliottkvamme/" target='_blank'>
                        <img src="./icons/LI-32x32.png" />
                    </a>
                </div>
                <div className='mx-2' id="stackoverflow">
                    <a href="https://stackoverflow.com/users/12927898/elliott-kvamme" target='_blank'>
                        <img src="./icons/SO-32x32.png" />
                    </a>
                </div>
            </ul>
        </div>
    )
}

export default Footer;