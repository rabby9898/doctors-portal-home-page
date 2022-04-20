import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';
const BookingCard = ({booking}) => {
    const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <div className="book-content" >
                <h4 style={{color:'#11D0DE'}}>{booking.title}</h4>
                <h6 style={{fontWeight:'700'}}>{booking.Time}</h6>
                <small>{booking.space} Spaces available</small>
                <div>
                    <button onClick={openModal} className="appoint-btn">APPOINTMENT</button>
                </div> 
            </div>
            <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.title}></AppointmentForm>
        </div>
    );
};

export default BookingCard;