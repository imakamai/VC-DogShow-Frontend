import React from 'react';
import Navbar from '../NavBar comp/Navbar';
import Hero from '../NavBar comp/Hero';
import FooterPage from '../NavBar comp/FooterPage';
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
