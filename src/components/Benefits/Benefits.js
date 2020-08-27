import React from 'react'
import BenefitsImg from '../../images/benefits.png'
import './benefits.css'

const Benefits = () => {
    return(
        <div className="V3-benefits-kp">
            <div className="V3-benefits-img-div-kp">
                <img src={BenefitsImg} className="V3-benefits-img-kp" alt="about" />
            </div>
            <div className="V3-benefits-text-div-kp">
                <h3 className="V3-benefits-h2-kp">Improve Your Strategic Content <br/> with Insights from V3Survey</h3>
                <p className="V3-benefits-para1-kp">
                    Developed to surface your target buyer’s changing priorities,
                    V3Survey utilizes the V3 B2B intent-based survey engine to
                    uncover valuable market insights to help drive strategic content.
                    </p>
                <p className="V3-benefits-para2-kp">
                    Customized survey programs connect directly with the decision
                    makers you need to reach, ensuring that the data is accurate and
                    up-to-date.
                </p>
                <p className="V3-benefits-para3-kp">Speak with a team member to discuss your buyer insight needs</p>
                <button className="V3-benefits-button-kp">contact us today</button>
            </div>
        </div>
    )
}


export default Benefits