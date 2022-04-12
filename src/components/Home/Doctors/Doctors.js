import React from 'react';
import caudi from '../../../images/doctor-small.png';
import salim  from '../../../images/doctor-small.png';
import Daniel from '../../../images/doctor-small.png';
import DoctorCard from '../DoctorCard/DoctorCard';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

const doctorsData=[
    {
        img:caudi,
        name:'Dr. Caudi',
        icon: faPhone,
        phone:'+485415151'
    },
    {
        img:salim,
        name:'Dr. Salim Adsan',
        phone:'+42415151',
        icon: faPhone,
    },
    {
        img:Daniel,
        name:'Dr. Daniel Woaks',
        phone:'+44285415151',
        icon: faPhone,
    }
]
const Doctors = () => {
    return (
        <section className="row offset-md-1">
            <div>
                <h5 style={{textAlign:'center',color:'#1CC7C1',marginBottom:'80px', marginTop:'80px'}}>Our Doctors</h5>
            </div>
            {
                doctorsData.map(doctors=> <DoctorCard doctors={doctors}></DoctorCard>)
            }
        </section>
    );
};

export default Doctors;