import React from 'react';
import './AchivementArea.css';
import happyImage from '../../../../Image/happy.png';
import crazyImage from '../../../../Image/crazy.png';
import projectImage from '../../../../Image/project.png';
import runningImage from '../../../../Image/running.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AchivementArea = () => {
    return (
        <div className="achivement-area">
            <div className="container">
                <div className="wrapper">
                    <div class="grid-item item1">
                        <h1>Our Achievements</h1>
                        <p>It is a long established fact that a reader
                        will be distracted by the readable
                        content of a page when looking at its
                        layout.</p>
                    </div>
                    <div class="grid-item itemBg1 d-flex align-items-center justify-content-around">
                        <div className="img-box">
                            <img className="img-fluid" src={happyImage} alt="" srcset="" />
                        </div>
                        <div className="counter">
                            <h1><CountUp end={700} redraw={true} duration={4}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>+<span className="highlight">Happy Client</span></h1>
                        </div>
                    </div>
                    <div class="grid-item itemBg d-flex align-items-center justify-content-around">
                        <div className="img-box">
                            <img className="img-fluid" src={projectImage} alt="" srcset="" />
                        </div>
                        <div className="counter">
                            <h1><CountUp end={140} redraw={true} duration={6}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>+<span className="highlight">Project Completed</span></h1>
                        </div>
                    </div>
                    <div class="grid-item itemBg d-flex align-items-center justify-content-around">
                        <div className="img-box">
                            <img className="img-fluid" src={crazyImage} alt="" srcset="" />
                        </div>
                        <div className="counter">
                            <h1><CountUp end={25} redraw={true} duration={6}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>+<span className="highlight">Crazy Minds</span></h1>
                        </div>
                    </div>
                    <div class="grid-item itemBg d-flex align-items-center justify-content-around">
                        <div className="img-box">
                            <img className="img-fluid" src={runningImage} alt="" srcset="" />
                        </div>
                        <div className="counter">
                            <h1><CountUp end={75} redraw={true} duration={6}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>+<span className="highlight">Running Project</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchivementArea;