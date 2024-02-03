import {ReactElement} from "react";

import './Footer.scss'

export function Footer(): ReactElement {
    return (
        <footer className="footer">
           <div className="footer__row">
                <div className="footer__item">التطوير والتشغيل التقني</div>
                <div className="footer__item">
                    {/* href to be our own brand website. */}
                    <a href="#"> 
                        <img className="footer__logo" src="../../imgs/footerlogo.png"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}