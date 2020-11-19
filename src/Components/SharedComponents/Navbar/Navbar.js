import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo.png';

const Navbar = () => {
    return (
        <div className="nav-area">
            <nav class="navbar navbar-expand-lg navbar-light container">
                <Link to="#" class="navbar-brand"><img className="" src={logo} alt="" srcset=""/></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ml-4 active">
                            <Link to="#" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ml-4">
                            <Link to="#" class="nav-link">About</Link>
                        </li>
                        <li class="nav-item ml-4">
                            <Link to="#" class="nav-link">Service</Link>
                        </li>
                        <li class="nav-item ml-4">
                            <Link to="#" class="nav-link">Pricing</Link>
                        </li>
                        <li class="nav-item ml-4">
                            <Link to="#" class="nav-link">Our Team</Link>
                        </li>
                        <li class="nav-item ml-4">
                            <button className="btn custom-btn">Contact</button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>

    );
};

export default Navbar;