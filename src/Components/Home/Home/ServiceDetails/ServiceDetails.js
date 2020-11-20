import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="service-box">
                <img src={service.image} alt="" srcset="" />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;