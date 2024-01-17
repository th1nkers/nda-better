import React, { useState } from "react";
import ImageSlider from "../shared/components/uiElements/ImageSlider";
import Headers from "../shared/components/uiElements/Header";
import "./SlideSection.css";


const SlideSection = ({ slideData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = (current) => {
    setCurrentIndex(current);
  };

  return (
    <div className="slide-section">
      <ImageSlider slides={slideData} onCurrent={currentSlide} />
      <div className="slide-detail">
        <Headers id="slider-header">{slideData[currentIndex].title}</Headers>
        <div className="slide-para">
          <p>{slideData[currentIndex].detail}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
