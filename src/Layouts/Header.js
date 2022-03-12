import React from "react";

function Header() {

    return (
        <nav className="nav" >
            <div className="nav__logo-box">
                <img src="./images/logo-outline--black.svg" alt="logo" />
                <span className="nav__author" >Boonyarit Ritdet</span>
            </div>
            <div className="hamburger-box">
                <span className="hamburger-icon" >&nbsp;</span>
            </div>
        </nav>
    )
}

export default Header;