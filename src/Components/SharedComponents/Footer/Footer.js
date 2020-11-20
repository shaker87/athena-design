import React from 'react';
import './Footer.css';
import logo from '../../../Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faFacebook, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="area-title">
                    <h1>Get your design right, right now</h1>
                    <p>Be the first know our latest offers and updates!</p>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <input className="input-field" type="text" placeholder="Enter your email address" />
                        <input className="footer-btn" type="button" value="Get Started" />
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-items items1">
                        <div className="footer-logo">
                            <img className="img-fluid" src={logo} alt="" srcset="" />
                        </div>
                        <div className="icon">
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={faBehance}></FontAwesomeIcon></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-items similar-style">
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>Pricing</li>
                    </div>
                    <div className="grid-items similar-style">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact us</li>
                        <li>Status</li>
                    </div>
                    <div className="grid-items similar-style">
                        <li>About us</li>
                        <li>Terms of service</li>
                        <li>Security</li>
                        <li>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;