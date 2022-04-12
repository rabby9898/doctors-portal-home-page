import React from 'react';
import './TestimonialCard.css'
const TestimonialCard = ({patients}) => {
    return (
        <div className="col-md-4 testi-container ">
            <div>
                <p style={{textAlign:'justify',fontSize:'14px', width: '78%'}}>{patients.description}</p>
            </div>
            <div className="testi-content">
                   <div> 
                       <img src={patients.image} alt="" />
                   </div>
                <div>
                    <h6 style={{textAlign:'center', color: '#58C4C4'}}>{patients.name}</h6>
                    <p style={{textAlign:'center'}}>{patients.Location}</p>
                </div>
            </div>
        </div>
        
    );
};

export default TestimonialCard;