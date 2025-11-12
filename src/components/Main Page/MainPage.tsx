import React from 'react';
import Navbar from '../Components For Pages/Navbar';
import Hero from '../Components For Pages/Hero';
import FooterPage from '../Components For Pages/FooterPage';
import './MainPage.css';

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <Navbar />
            <div className="hero-container">
                <Hero />
            </div>
            <FooterPage />
        </div>
    );
};

export default MainPage;
