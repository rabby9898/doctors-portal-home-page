import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import winson from '../../../images/people-1.png';
import sara from '../../../images/people-2.png';
import alex from '../../../images/people-3.png';

const patientsData =[
    {
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of',
        image:winson,
        name:'Winson Herry',
        Location: 'New York'
    },
    {
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of',
        image:sara,
        name:'Sara Grey',
        Location: 'Old York'
    },
    {
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of',
        image:alex,
        name:'Alex Watt',
        Location: 'Cali York'
    }
]
const Testimonial = () => {
    return (
        <section className="row offset-md-1">
           <div style={{marginBottom:'75px', marginTop: '-45px'}}>
                <h5 style={{color:'#1CC7C1'}}>TESTIMONIAL</h5>
                <h1>What's Our Patients <br/> Says</h1>
           </div>
            {
                patientsData.map(patients => <TestimonialCard patients={patients}></TestimonialCard>)
            }
        </section>
    );
};

export default Testimonial;