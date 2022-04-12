import React from 'react';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Services></Services>
           <About></About>
           <Appointment></Appointment>
           <Testimonial></Testimonial>
           <Blog></Blog>
           <Doctors></Doctors>
           <ContactForm></ContactForm>
           <Footer></Footer>
        </div>
    );
};

export default Home;