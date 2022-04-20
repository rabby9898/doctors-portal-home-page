import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css';
const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main style={{height:'416px'}} className="row" id="main-header">
        <div className="col-md-4 offset-md-1 contain-p">
            <h1 style={{color:'#3A4256'}}>APPOINTMENT</h1>
            <div>
                <Calendar className="calender" onChange={handleDateChange} value={new Date()} />
            </div>
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid chair-bg-main" />
        </div>
</main>
    );
};

export default AppointmentHeader;