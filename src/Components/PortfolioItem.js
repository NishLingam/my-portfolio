import React from 'react';

const PortfolioItem = ({ appName, appImage, description, appPath, index }) => (
  <div className={index % 2 === 0 ? "portfolio-item-grey" : "portfolio-item-white"}>
    <h1 className="portfolio-header">
      {appName}
    </h1>
    <div className="lil-border"> </div>
    <div className="portfolio-item">
      <a target="blank" href={appPath}>
        <img src={appImage} className="portfolio-image" alt="app-preview" />
      </a>
      <div className='portfolio-description'>
        {description}
      </div>
    </div>
  </div>
);

export default PortfolioItem;
