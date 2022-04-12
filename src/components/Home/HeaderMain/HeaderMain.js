import React from 'react';
import chair from '../../../images/chair.png'
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{height:'416px'}} className="row" id="main-header">
                <div className="col-md-4 offset-md-1 contain-p">
                    <h1 style={{color:'#3A4256'}}>Your new smile <br/> start here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed alias tempora ad at temporibus!</p>
                    <button style={{background:''}} className="btn btn-primary" id="appointment-btn">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid chair-bg-main" />
                </div>
        </main>
    );
};

export default HeaderMain;