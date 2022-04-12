import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';
const Appointment = () => {
    return (
       <section className="row appointment">
           <div className="col-md-4 doctor">
                <img src={doctor} alt="" />
           </div>
           <div className="col-md-6 appointment-content">
                <h5 style={{color:'#0FCFE8', marginBottom:'25px'}}>APPOINTMENT</h5>
                <h1 style={{ marginBottom:'25px'}}>Make An Appointment <br/> Today</h1>
                <p style={{ marginBottom:'25px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                <button className="learn-btn">Learn More</button>
           </div>
       </section>
    );
};

export default Appointment;