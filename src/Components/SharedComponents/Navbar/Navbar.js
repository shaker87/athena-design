import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo">
                                <img className="img-fluid" src={logo} alt="" srcset=""/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="checkbox" name="" id="chk"/>
                            <label htmlFor="chk" className="show-menu-btn">
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </label>
                            <div className="menu">
                                <ul>
                                    <li><Link to="" className="active" style={{textDecoration: 'none'}}>Home</Link></li>
                                    <li><Link to="" className="menu-item" style={{textDecoration: 'none'}}>About</Link></li>
                                    <li><Link to="" className="menu-item" style={{textDecoration: 'none'}}>Services</Link></li>
                                    <li><Link to="" className="menu-item" style={{textDecoration: 'none'}}>Pricing</Link></li>
                                    <li><Link to="" className="menu-item" style={{textDecoration: 'none'}}>Our Team</Link></li>
                                    <li><button className="btn custom-btn" style={{textDecoration: 'none'}}>Contact us</button></li>
                                    <label htmlFor="chk" className="hide-menu-btn">
                                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                    </label>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Navbar;