import React from 'react';
import '../Footer.css';
//import LoginPopup from './Login-popup'
import { NewLoginPopup } from './new-login-popup';

function Footer() {
    return (
        <div className="Footer">
            <footer>
                {/*<LoginPopup />*/}
                <NewLoginPopup />
            </footer>
        </div>
    )
}

export default Footer;