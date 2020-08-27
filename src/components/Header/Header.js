import React from 'react'
import headerImg from '../../images/header.png'
import './header.css'

const Header = () => {
    return (
        <div className="V3-header-kp">
            <div className="V3-image-div-kp">
                <img className="V3-image-kp" src={headerImg} alt="header" />
            </div>
            <div className="V3-header-about-kp">
                <h4 className="V3-Headerh4-kp">V3SURVEY:</h4>
                <h1 className="V3-Headerh1-kp">B2B Technology <br/> Buyer Insights</h1>
            </div>
        </div>
    )
}

export default Header