import React from 'react';

const PortfolioItem = (props) => (
  <div className={props.appName}>
    <h1 className="portfolio-header">
      {' '}
      {props.appName}
      {' '}
    </h1>
    <div className="lil-border"> </div>
    <div className="portfolio-item">
      <a target="blank" href={props.appPath}>
        {' '}
        <img src={props.appImage} className="portfolio-preview" alt="app-preview" />
        {' '}
      </a>
      <p>
        {' '}
        {props.description}
        {' '}
      </p>
    </div>
  </div>
);

export default PortfolioItem;
