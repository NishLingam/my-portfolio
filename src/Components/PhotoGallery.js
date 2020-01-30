import React, { useState } from 'react';
import MemoCubePic from '../images/MemoCube.png';
import TapMathPic from '../images/TapMath.png';


const photoArray = [MemoCubePic, TapMathPic];
const photoLength = photoArray.length;





const PhotoGallery = () => {

    const [photoIndex, setPhotoIndex] = useState(0);

    const photoIndexIncreaser = () => {
            setPhotoIndex(photoIndex + 1)
    };

    const photoIndexDecreaser = () => {
        if (photoIndex === 0) {
            setPhotoIndex(photoLength - 1)
        } else {
            setPhotoIndex(photoIndex - 1)   
        }
    };

    return (
        <div className = 'photo-gallery-container'>
            <div className = 'photo-gallery-header'> Photo Gallery </div>
            <div className = 'lil-border'> </div>
            <div className = 'photo-gallery-carousel'>
                <button onClick = {photoIndexDecreaser}> Left </button> 
                <img src={photoArray[photoIndex%photoLength]} alt = 'ProjectImage' className = 'photo-gallery-main' />
                <button onClick={photoIndexIncreaser} > Right </button>
            </div>
        </div>

    )
}


export default PhotoGallery;