import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Stats from './Stats';
import Community from './Community';
import CTA from './CTA';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Stats />
            <Community />
            <CTA />
            <Footer />
        </div>
    );
};

export default Homepage;
