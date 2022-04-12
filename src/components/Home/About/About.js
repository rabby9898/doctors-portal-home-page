import React from 'react';
import dentalCare from '../../../images/treatment.png';
import './About.css';

const About = () => {
    return (
       <section className="row about-container">
           <div className="col-md-4 treatment">
                <img src={dentalCare} alt="" />
           </div>
           <div className="col-md-6 about-content">
                <h1>Exceptional Dental <br/> Care, On Your Terms</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                <button className="learn-btn">Learn More</button>
           </div>
       </section>
    );
};

export default About;