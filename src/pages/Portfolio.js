import React from 'react';
import NavBar from '../Components/NavBar';
import PortfolioItem from '../Components/PortfolioItem';
import MemoCube from '../images/MemoCube.png';
import TapMath from '../images/TapMath.png';
import Footer from '../Components/Footer';


const Portfolio = () => {
  window.scrollTo(0, 0);

  const MemoCubeDes = 'React and Redux Project - Click on the image to play!';
  const TapMathDes = 'Vanilla Javascript project - Click on the image to play!';
  return (
    <div>
      <div className="nav-bar-container-scrolled"> </div>
      <NavBar />
      <div className="portfolio-recent-work">
                My Recent Work
      </div>

      <PortfolioItem appName="MemoCube" appImage={MemoCube} description={MemoCubeDes} appPath="/memocube" />
      <PortfolioItem appName="TapMath" appImage={TapMath} description={TapMathDes} appPath="/tapmath" />
      <Footer />
    </div>
  );
};

export default Portfolio;
