import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal();
    }
    
    return (
        <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 style={{textAlign:'center', color:'#1CC7C1'}}>{appointmentOn}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" type="text" class="form-control Input" placeholder="Your Name" {...register("example")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input type="phone" class="form-control Input" id="inputEmail4" placeholder="Phone-number" {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}

                <input defaultValue="test" type="email" class="form-control Input" id="inputEmail4" placeholder="Email" {...register("example")} />

                <input defaultValue="test" class="form-control Input" id="date" name="dob" placeholder="MM/DD/YYY" type="date" {...register("example")} />

                {errors.exampleRequired && <span>This field is required</span>}
    
                <button className="send-btn" type="submit">SEND</button>

            </form>

         </Modal>
        </div>
    );
};

export default AppointmentForm;