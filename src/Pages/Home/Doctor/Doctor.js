import React from 'react';
import './Doctor.css';

const Doctor = ({docs}) => {
    const {name, img, description} = docs;

    return (
        <div className="col-md-4 doc-container">
            <img className="img-fluid" src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Doctor;