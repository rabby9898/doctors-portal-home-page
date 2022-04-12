import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DoctorCard.css';
const DoctorCard = ({doctors}) => {
    return (
        <div className="col-md-4 doctors">
                <img src={doctors.img} alt=""/>
                <div className="doctors-content">
                    <h4>{doctors.name}</h4>
                    <div className="phone">
                        <FontAwesomeIcon className="icon"  style={{color:'#1CC7C1',marginBottom: '-24px',fontSize:'18px',marginLeft: '-90px'}} icon={doctors.icon} />
                        <p style={{marginLeft: '23px',fontSize:'14px'}}>{doctors.phone}</p>
                    </div>
                </div>
        </div>
    );
};

export default DoctorCard;