import React from 'react'
import './download.css'
import downloadImg from '../../images/payment.png'

const Download = () => {
    return (
        <div className="V3-download-kp">
            <div className="V3-download-img-div-kp">
                <img className="V3-download-img-kp" src={downloadImg} alt="download" />
            </div>
            <div className="V3-download-text-kp">
                <h2 className="V3-download-h2-kp">6 Things to Look for in Lead Generation Partner</h2>
                <p className="V3-download-p-kp">
                    Before launching head-frst into your search, take a moment
                    to consider the core goals of your campaigns and what you
                    are really looking for in a partnership. This resource discusses
                    six key features to look for in your quest to find the perfect
                    lead generation partner.
                </p>
                <button className="V3-download-button-kp">Download Now</button>
            </div>
        </div>
    )
}

export default Download;