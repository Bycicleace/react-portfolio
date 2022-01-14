import React from 'react';

function Footer() {
    return (
        <div className='flex-row space-between'>
            <h3 className='mx-2'>&copy; Elliott Kvamme, 2022</h3>
            <ul className='flex-row mx-2'>
                <div className='mx-2' id="github">GH</div>
                <div id="linkedin">LI</div>
            </ul>
        </div>
    )
}

export default Footer;