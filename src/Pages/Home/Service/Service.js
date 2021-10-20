import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description } = service;
    return (
        <div className="service">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="pt-3">{name}</h3>
            <p>{description}</p>
            <Link to={`/details/${id}`}>
                <button className="btn btn-primary button-custom">Details</button>
            </Link>
        </div>
    );
};

export default Service;