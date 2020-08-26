import React from 'react'
import './footer.css'
import facebookIcon from '../../images/facebook.png'
import instagramIcon from '../../images/instagram.png'
import twitterIcon from '../../images/twitter.png'
import linkedinIcon from '../../images/linkedin.png'
import mailIcon from '../../images/mail.png'

const Footer = () => {
    return (
        <div>
            <div className="V3-footer-kp">
                <div className="V3-footer-items-kp">
                    <div className="V3-footer-logo-kp" id="V3-footer-logo-kp">HERE LOGO</div>
                    <div className="V3-footer-socialIcon-kp">
                        <img className="V3-footer-icon-kp" src={facebookIcon}></img>
                        <img className="V3-footer-icon-kp" src={facebookIcon}></img>
                        <img className="V3-footer-icon-kp" src={facebookIcon}></img>
                        <img className="V3-footer-icon-kp" src={facebookIcon}></img>
                    </div>
                </div>
                <div className="V3-footer-items-kp">
                    <h4 className="V3-footer-h4-kp">Privacy and Terms</h4>
                    <ul className="V3-footer-ul-kp">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div className="V3-footer-items-kp">
                    <h4 className="V3-footer-h4-kp">Get to Know Us</h4>
                    <ul className="V3-footer-ul-kp">
                        <li>About VenaliciumB2B</li>
                        <li>Meet the Team</li>
                        <li>Careers</li>
                        <li>Audiences</li>
                        <li>Blog</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="V3-footer-items-kp">
                    <h4 className="V3-footer-h4-kp">Lead Generation</h4>
                    <ul className="V3-footer-ul-kp">
                        <li>V3ABM</li>
                        <li>V3Syndication</li>
                        <li>V3Trends</li>
                    </ul>
                </div>
                <div className="V3-footer-items-kp">
                    <h4 className="V3-footer-h4-kp">Content Creation</h4>
                    <ul className="V3-footer-ul-kp">
                        <li>V3Survey</li>
                        <li>V3Content</li>
                        <li>Content Sponsorships</li>
                    </ul>
                    <h4 className="V3-footer-h4-kp">Lead Development</h4>
                    <ul className="V3-footer-ul-kp">
                        <li>V3Research</li>
                        <li>V3Conversion</li>
                        <li>V3Funnel</li>
                    </ul>
                </div>
                <div className="V3-footer-items-kp">
                    <h4 className="V3-footer-h4-kp">Subscribe to our News</h4>
                    <p className="V3-footer-p-kp">Stay informed and learn more about our demand generation solutions by providing your buisness email</p>
                    <div className="V3-footer-form-kp">
                        <img className="V3-footer-mail-kp" src={mailIcon}></img>
                        <input className="V3-footer-input-kp" placeholder="Email" />
                    </div>
                    <button className="V3-footer-button-kp">Submit</button>
                </div>
            </div>
            <div className="V3-footer-credit-kp">
                <p className="V3-footer-credit-p-kp">
                    Design | Developed and Maintained ny Bili. <br/>
                    &copy; All Rights Reserved 2020.
                </p>
            </div>
        </div>
    )
}


export default Footer