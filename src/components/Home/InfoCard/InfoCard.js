import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';
const InfoCard = ({info}) => {
    return (
        
        <div className="col-md-4 text-white info-sec">
            <div className={`d-flex info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
               <div className="info-content">
                    <h5>{info.title}</h5>
                    <small>{info.description}</small>
               </div>
            </div>
        </div>
        
    );
};

export default InfoCard;