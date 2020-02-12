import React from 'react';
import Hero from '../Components/Hero';
import PhotoGallery from '../Components/PhotoGallery';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';


const HomePage = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <NavBar background="name" />
      <Hero />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default HomePage;
