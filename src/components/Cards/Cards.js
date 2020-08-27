import React from 'react'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import './cards.css'

const Cards = () => {
    return (
        <div className="V3-cards-kp">
            <div className="V3-card-kp">
                <div className="V3-card-img-div-kp">
                    <img className="V3-card-img-kp" src={card1} alt="card1" />
                </div>
                <div className="V3-card-about-kp">
                    <h3 className="V3-card-h3-kp">Persona Filtering</h3>
                    <p className="V3-card-p-kp">
                        The power to target by demographic
                        frmographic, and technographic
                        flters
                    </p>
                </div>
            </div>
            <div className="V3-card-kp">
                <div className="V3-card-img-div-kp">
                    <img className="V3-card-img-kp" src={card2} alt="card2" />
                </div>
                <div className="V3-card-about-kp">
                    <h3 className="V3-card-h3-kp">Our Brands</h3>
                    <p className="V3-card-p-kp">
                        Our Brands
                        HR Trends, IT Management Trends,
                        Sales Technology Trends, IT Security
                        Trends, Business Software Trends, Marketing Technology Trends
                    </p>
                </div>
            </div>
            <div className="V3-card-kp">
                <div className="V3-card-img-div-kp">
                    <img className="V3-card-img-kp" src={card3} alt="card3" />
                </div>
                <div className="V3-card-about-kp">
                    <h3 className="V3-card-h3-kp">Multi-Channel <br/>Engagement</h3>
                    <p className="V3-card-p-kp">
                        Email and telephone outreacht
                        targeting your persona flters
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards


