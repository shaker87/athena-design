import React from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;