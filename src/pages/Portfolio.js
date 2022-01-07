import React from 'react';
import NavBar from '../Components/NavBar';
import PortfolioItem from '../Components/PortfolioItem';
import MemoCube from '../images/MemoCube.png';
import TapMath from '../images/TapMath.png';
import MathLrn from '../images/MathLrn.png';
import NBSEngage from '../images/NBSEngage.png';
import Footer from '../Components/Footer';


const Portfolio = () => {
  window.scrollTo(0, 0);

  const portfolioArray = [
    {
      appName: "NBSEngage",
      appImage: NBSEngage,
      description: 'A two day hackathon project to create a platform for NBS Employees to connect',
      appPath: "https://nbs-engage.vercel.app/",
    },
    {
      appName:"MathLrn", 
      appImage: MathLrn, 
      description: 'An educational web-app designed for GCSE Maths students',
      appPath: "https://math-lrn.vercel.app/", 
    },
    {
      appName: "MemoCube",
      appImage: MemoCube,
      description: 'Memory training game - Click on the image to play!',
      appPath: "https://memo-cube.vercel.app/",
    },
    {
      appName: "TapMath",
      appImage: TapMath,
      description: 'Timed arithmetic game - Click on the image to play!',
      appPath: "https://tap-math.vercel.app/",
    }
  ]

  return (
    <div>
      <div className="nav-bar-container-scrolled"> </div>
      <NavBar />
      <div className="portfolio-recent-work">
                My Recent Work
      </div>
      {portfolioArray.map((item, i) => <PortfolioItem {...item} index={i} />)}
      <Footer />
    </div>
  );
};

export default Portfolio;
