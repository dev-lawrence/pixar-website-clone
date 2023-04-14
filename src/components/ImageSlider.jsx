import { useState } from 'react';
import { GalleryImages } from './GalleryImages';

const ImageSlider = () => {
  const [clickedImg, setClickedImg] = useState(null);

  return (
    <>
      <div className="image-slider">
        {GalleryImages.map((image, index) => {
          return (
            <div key={index} className="slide-img">
              <img src={image.src} alt={image.text} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
