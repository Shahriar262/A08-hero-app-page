import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import HeroSection from '../Components/HeroSection';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HeroSection />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;