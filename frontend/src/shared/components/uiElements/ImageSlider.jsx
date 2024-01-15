import { useEffect, useState } from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import "./ImageSlider.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ImageSlider = ({ slides, onCurrent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, SetTimer] = useState(0);

  useEffect(() => {
    const newTimer = setInterval(() => {
      goToNext();
    }, 5000);

    SetTimer(newTimer);

    return () => clearInterval(newTimer);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${
      process.env.REACT_APP_BASE_URL + slides[currentIndex].url
    })`,
  };

  onCurrent(currentIndex);

  const handleMouseEnter = () => {
    clearInterval(timer);
    SetTimer(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const handleMouseLeave = () => {
    clearInterval(timer);
    const newTimer = setInterval(() => {
      goToNext();
    }, 5000);

    SetTimer(newTimer);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="sliderStyles"
    >
      <div className="img-arrow">
        <div onClick={goToPrevious} className="leftArrowStyles">
          <IoMdArrowDropleftCircle />
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          <IoMdArrowDroprightCircle />
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            className="dotStyle"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
