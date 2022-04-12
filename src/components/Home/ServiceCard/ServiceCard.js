import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({services}) => {
    return (
        <div className="col-md-4">
            <div className="service-img">
                <img src={services.image} alt="" />
            </div>
           <div className="services-content">
           <h5>{services.title}</h5>
            <p>{services.description}</p>
           </div>
        </div>
    );
};

export default ServiceCard;