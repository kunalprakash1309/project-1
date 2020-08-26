import React from 'react'
import AboutImg from '../../images/about.png'
import './about.css'

const About = () => {
    return (
        <div className="V3-about-kp">
            <div className="V3-about-img-div-kp">
                <img className="V3-about-img-kp" src={AboutImg} />
            </div>
            <div className="V3-about-text-div-kp">
                <h3 className="V3-about-h2-kp">What are Your Target B2B Buyers <br/>Looking For?</h3>
                <p className="V3-about-para1-kp">
                    In today’s B2B landscape, the needs and challenges technology
                    buyers face are in a constant state of flux. Understanding these
                    shifting priorities is key to building a content strategy that will
                    resonate with your target personas.
                </p>
                <p className="V3-about-para2-kp">
                    Discovering these valuable market insights requires a vast
                    amount of internal resources. Working with a demand
                    generation partner that is actively surveying your market can
                    save your bottom line and accelerate your business intelligence
                    process
                </p>
                <button className="V3-about-button-kp">contact us today</button>
            </div>
        </div>
    )
}


export default About 