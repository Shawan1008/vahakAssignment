import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import HondoLogo1 from '../Images/drawable-mdpi/HondoLogo1.png';
import ProfileTop from '../Images/drawable-mdpi/ProfileTop.png';
import './Header.css';
const Header = () => {

    return (
        <div className="HeaderContainer">
            <div className="hamburgermenu">
                <Hamburger/>
            </div>
            <div className="carlogo">
                <img src={HondoLogo1} alt="honda"/>
            </div>
            <div className="profile">
                <img src={ProfileTop} alt="logo"/>
            </div>
        </div>
    )
}
export default Header