import React from 'react';
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';
import './Details.css';

const Details = () => {
    const {serviceId} = useParams();
    const services = useData();
    const serviceDetail = services?.find(srvc => srvc.id === +serviceId)
    console.log(serviceDetail);
    
    
    return (
        <div>
            <div className="container detail">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid detail-img" src={serviceDetail?.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>{serviceDetail?.name}</h4>
                        <p>{serviceDetail?.description}</p>
                        <br />
                        <h4>Price: {serviceDetail?.price} tk</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;