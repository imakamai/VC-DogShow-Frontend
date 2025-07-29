import React from 'react';
import Navbar from '../Comp/Navbar';
import HeroSection from '../Comp/Hero';
import ContentSection from '../Comp/ContentSection';
import NewsSection from '../Comp/NewsSection';
import Footer from '../Comp/Footer';

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow overflow-y-auto">
                <HeroSection />
                <ContentSection />
                <NewsSection />
            </main>
            <Footer />
        </div>
    );
};

export default MainPage;