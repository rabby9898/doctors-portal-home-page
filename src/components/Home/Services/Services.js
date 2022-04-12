import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import Flouride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';

const servicesData = [
    {
        image:Flouride,
        title: 'Flouride Treatment',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
    },
    {
        image:Cavity,
        title: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
    },
    {
        image:Whitening,
        title: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
    }
]
const Services = () => {
    return (
        <section className="row main-ser-sec">
            <div className="services">
                <h5>Our Services</h5>
                <h1>Services We Provide</h1>
            </div>
            {
                servicesData.map(services => <ServiceCard services={services}></ServiceCard>)
            }
        </section>
    );
};

export default Services;