import React from 'react';
import Hero from './Hero';
import PhotoGallery from './PhotoGallery';
import Footer from './Footer';
import NavBar from './NavBar';



const HomePage = () => {


    return (
        <div>
            <NavBar background = 'name' />
            <Hero />
            <PhotoGallery />
            <Footer />
        </div>
    )
}

export default HomePage;