import React from 'react';
import Hero from './Hero';
import HomeDescription from './HomeDescription';
import NavBar from './NavBar';
import PhotoGallery from './PhotoGallery';
import Footer from './Footer';

const HomePage = () => (
    <div  onScroll={(e)=>console.log(e)}>
        <Hero />
        <PhotoGallery />
        <Footer />
    </div>
)

export default HomePage;