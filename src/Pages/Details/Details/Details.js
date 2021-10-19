import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';

const Details = () => {
    const {serviceId} = useParams();
    const [details, setDetails] = useState([])
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    console.log(serviceId);
    
    return (
        <div>
            {
                    details.map(detail =><Detail
                        key={detail.id}
                        detail={detail}
                    ></Detail>)
                }
        </div>
    );
};

export default Details;