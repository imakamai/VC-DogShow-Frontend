import React from 'react';
import Navbar from '../NavBar comp/Navbar';
import Hero from '../NavBar comp/Hero';
import './MainPage.css';

const MainPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="hero-container">
                <Hero/>
            </div>
        </div>
    );
};

export default MainPage;
