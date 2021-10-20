import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services" className="container my-5 pt-3">
            <h2 className="text-primary">Services</h2>
            <div className="service-container pt-3">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;