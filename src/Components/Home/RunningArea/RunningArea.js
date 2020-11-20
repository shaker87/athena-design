import React from 'react';
import './RunningArea.css';
import runningBg from '../../../Image/runningProject.png';

const RunningArea = () => {
    return (
        <div className="running-area">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6">
                        <div className="running-area-content">
                            <h1>STAY RUNNING & Project</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                            <button className="btn custom-btn">Contact Us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={runningBg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RunningArea;