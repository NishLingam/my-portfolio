import React from 'react';
import NavBar from '../Components/NavBar';
import PortfolioItem from '../Components/PortfolioItem';
import MemoCube from '../images/MemoCube.png';
import TapMath from '../images/TapMath.png';
import MathLrn from '../images/MathLrn.png';
import Footer from '../Components/Footer';


const Portfolio = () => {
  window.scrollTo(0, 0);

  const MathLrnDesc = 'An educational web-app designed for GCSE Maths students'
  const MemoCubeDes = 'Memory training game - Click on the image to play!';
  const TapMathDes = 'Timed arithmetic - Click on the image to play!';
  return (
    <div>
      <div className="nav-bar-container-scrolled"> </div>
      <NavBar />
      <div className="portfolio-recent-work">
                My Recent Work
      </div>
      <PortfolioItem appName="MathLrn" appImage={MathLrn} description={MathLrnDesc} appPath="https://math-lrn.vercel.app/" />
      <PortfolioItem appName="MemoCube" appImage={MemoCube} description={MemoCubeDes} appPath="https://memo-cube.vercel.app/" />
      <PortfolioItem appName="TapMath" appImage={TapMath} description={TapMathDes} appPath="https://tap-math.vercel.app/" />
      <Footer />
    </div>
  );
};

export default Portfolio;
