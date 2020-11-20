import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../Header/Header';
import Package from '../PackageArea/Package';
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
            <Package></Package>
            <Footer></Footer>
        </div>
    );
};

export default Home;