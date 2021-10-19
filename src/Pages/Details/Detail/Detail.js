import React from 'react';

const Detail = ({name, price, description}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Detail;