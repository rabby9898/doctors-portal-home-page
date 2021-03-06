import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
const Footer = () => {
    return (
        <footer className="offset-md-1 main-footer">
            <div className="row">
                <div className="col-md-3 link">
                    <h4 style={{color:'#5BC5C5'}} >Links</h4>
                    <ul>
                        <li><a href="">Emergency of dental care</a></li>
                        <li><a href="">Check up</a></li>
                        <li><a href="">Personal disease treatment</a></li>
                        <li><a href="">Tooth extraction</a></li>
                        <li><a href="">Check up</a></li>
                    </ul>
                </div>
                <div className="col-md-3 link">
                    <h4 style={{color:'#5BC5C5'}}>Services</h4>
                        <ul>
                            <li><a href="">Emergency of dental care</a></li>
                            <li><a href="">Check up</a></li>
                            <li><a href="">Personal disease treatment</a></li>
                            <li><a href="">Tooth extraction</a></li>
                            <li><a href="">Check up</a></li>
                            <li><a href="">Tooth extraction</a></li>
                            <li><a href="">Check up</a></li>
                        </ul>
                </div>
                <div className="col-md-3 link">
                    <h4 style={{color:'#5BC5C5'}}>Oral Health</h4>
                        <ul>
                            <li><a href="">Emergency of dental care</a></li>
                            <li><a href="">Check up</a></li>
                            <li><a href="">Personal disease treatment</a></li>
                            <li><a href="">Tooth extraction</a></li>
                            <li><a href="">Check up</a></li>
                            <li><a href="">Personal disease treatment</a></li>
                            <li><a href="">Tooth extraction</a></li>
                            <li><a href="">Check up</a></li>
                        </ul>   
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#5BC5C5'}}>Our Address</h4>
                    <p>New York City,USA</p>
                      <div className="social">
                         <FontAwesomeIcon className="icon" icon={faFacebook} />
                         <FontAwesomeIcon className="icon" icon={faTwitter} />
                         <FontAwesomeIcon className="icon" icon={faGooglePlus} />
                      </div>
                   <div>
                   <div style={{marginTop:'94px',marginBottom:'-18px'}}>
                        <small>Call Now</small>
                   </div>
                    <div>
                        <button className="footer-btn">+25878544</button>
                    </div>
                   </div>
                </div>

            </div>
            <p style={{textAlign:'center', marginTop: '91px', marginLeft: '-107px',fontSize: '14px'}}>Copyright 2022 all right reserved</p>
        </footer>
    );
};

export default Footer;