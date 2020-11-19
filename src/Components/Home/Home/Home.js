import React from 'react';
import Header from '../Header/Header';
import RunningArea from '../RunningArea/RunningArea';
import Service from '../Service/Service';
import AchivementArea from './AchivementArea/AchivementArea';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <RunningArea></RunningArea>
            <AchivementArea></AchivementArea>
        </div>
    );
};

export default Home;