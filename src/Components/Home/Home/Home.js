import React from 'react';
import Header from '../Header/Header';
import RunningArea from '../RunningArea/RunningArea';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <RunningArea></RunningArea>
        </div>
    );
};

export default Home;