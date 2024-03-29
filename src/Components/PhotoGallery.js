import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MemoCubePic from '../images/MemoCube.png';
import TapMathPic from '../images/TapMath.png';
import MathLrnPic from '../images/MathLrn.png';
import NBSEngagePic from '../images/NBSEngage.png';
import { ReactComponent as LeftSVGComponent } from '../images/left-arrow.svg';


const photoArray = [MathLrnPic, NBSEngagePic, MemoCubePic, TapMathPic];
const photoLength = photoArray.length;

const PhotoGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const photoIndexIncreaser = () => {
    setPhotoIndex(photoIndex + 1);
  };

  const photoIndexDecreaser = () => {
    if (photoIndex === 0) {
      setPhotoIndex(photoLength - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  const previewSwitchHandler = (index) => {
    setPhotoIndex(index);
  };

  return (
    <div className="photo-gallery-container">
      <div className="photo-gallery-header"> Photo Gallery </div>
      <div className="lil-border"> </div>
      <div className="photo-gallery-carousel">
        <LeftSVGComponent onClick={photoIndexDecreaser} className="carousel-button-left noSelect" />
        <NavLink to="/portfolio">
          <img src={photoArray[photoIndex % photoLength]} alt="ProjectImage" className="photo-gallery-main noSelect" />
        </NavLink>
        <LeftSVGComponent onClick={photoIndexIncreaser} className="carousel-button-right noSelect" />
      </div>
      <div className="preview-container">
        {photoArray.map((ele) => (
          <img
            src={ele}
            alt="preview"
            key={photoArray.indexOf(ele)}
            className={photoArray.indexOf(ele) === photoIndex % photoLength ? 'preview-image-border' : 'preview-image'}
            onClick={() => previewSwitchHandler(photoArray.indexOf(ele))}
          />
        ))}
      </div>
    </div>

  );
};


export default PhotoGallery;
