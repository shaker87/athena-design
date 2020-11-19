import React from 'react';
import './HeaderMain.css';
import headerMainBg from '../../../Image/headerMainBg.png';

const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-main-left-content">
                            <h1>Florence<br />agency</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever <br/>
                            since the 1500s, when an unknown printer took a galley of type and <br/>
                            scrambled it to make a type specimen book.</p>
                            <button className="btn custom-btn">See Pricing</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-main-left-content">
                            <img className="img-fluid" src={headerMainBg} alt="" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;