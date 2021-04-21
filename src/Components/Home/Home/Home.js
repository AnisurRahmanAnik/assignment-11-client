import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navabar/Navbar';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Header></Header>
            <ServiceSection></ServiceSection>
            

        </div>
    );
};

export default Home;