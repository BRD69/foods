import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="green darken-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">ФУУУ-дянка</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export {Header}