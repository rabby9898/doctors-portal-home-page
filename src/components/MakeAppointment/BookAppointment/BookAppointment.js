import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const BookCard =[
    {
        title:'Teeth Orthodondtics',
        Time:'8:00 AM - 9:00 AM',
        space:'10',
    },
    {
        title:'Cosmetic Dentistry',
        Time:'9:00 AM - 10:00 AM',
        space:'10',
    },
    {
        title:'Teeth Cleaning',
        Time:'11:00 AM - 12:00 PM',
        space:'10',
    },
    {
        title:'Cavity Protection',
        Time:'2:05 AM - 3:05 PM',
        space:'10',
    },
    {
        title:'Teeth Binding',
        Time:'3:05 AM - 4:05 PM',
        space:'10',
    },
    {
        title:'Teeth Therapy',
        Time:'6:30 AM - 7:30 AM',
        space:'10',
    }
]
const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{color:'#10CFE5'}} className="text-center">Available Appointments on {date.toDateString()}</h2>
            
            <div style={{marginTop:'90px'}} className="row row-cols-1 row-cols-md-3 g-6 offset-md-1">
            {
               BookCard.map(booking => <BookingCard booking={booking} ></BookingCard>) 
            }
            </div>
        </section>
    );
};

export default BookAppointment;