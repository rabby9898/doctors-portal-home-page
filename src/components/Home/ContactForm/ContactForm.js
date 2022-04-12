import React from 'react';
import './ContactForm.css'
const ContactForm = () => {
    return (
        <section className="row contact-form">
            <div className=" contact-content">
                    <h5 style={{textAlign:'center',color:'#1CC7C1', marginTop:'40px'}}>CONTACT US</h5>
                    <h1 style={{textAlign:'center',color:'white',fontWeight:'400'}}>Always Connect With Us</h1>
                <div className="main-form">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
                        <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <button className="submit-btn">SUBMIT</button>
            </div>
        </section>
    );
};

export default ContactForm;