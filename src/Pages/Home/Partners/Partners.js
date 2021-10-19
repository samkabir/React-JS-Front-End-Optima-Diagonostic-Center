import React from 'react';
import partner1 from '../../../images/Partners/AmarlabLogo.png';
import partner2 from '../../../images/Partners/sheba.png';
import partner3 from '../../../images/Partners/tonic.png';
import './Partners.css';


const Partners = () => {
    return (
        <div className="partners">
            <h2 className="text-primary">Service Partners</h2>
            <div className="container">
                <div className="row partners-container">
                    <div className="col-md-4">
                        <img className="img-fluid" src={partner1} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={partner2} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={partner3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;