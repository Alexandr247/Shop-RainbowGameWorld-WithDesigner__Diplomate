import React from 'react'

import logoImg from './../../img/icons/logo.jpg'

import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">

                    <div className="footer__logo">
                        <img src={logoImg} alt="Logo" />
                    </div>

                    <span className='footer__copyright'>© 2023 Rainbow game world</span>

                </div>
            </div>
        </footer>
    )
}

export default Footer