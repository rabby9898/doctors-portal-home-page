import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light Whole-navbar">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"> 
                      <a class="nav-link active" id="item" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" id="item" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" id="item" aria-current="page" href="#">Dental Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active text-white " id="item" aria-current="page" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active text-white" id="item" aria-current="page" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active text-white" id="item" aria-current="page" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
             </div>
        </nav>
    </div>
    );
};

export default Navbar;