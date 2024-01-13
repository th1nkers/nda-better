import React, { useState } from "react";
import "./SlideSection.css";
import ImageSlider from "../shared/components/uiElements/ImageSlider";
import hut from "../assets/home/slide-section/hut-of-remembrance.jpg";
import glorious75 from "../assets/home/slide-section/glorious75.jpg";
import Headers from "../shared/components/uiElements/Header";
import mannKiBaat from "../assets/home/slide-section/mann-ki-baat.jpg";

const SlideSection = () => {
  const slides = [
    {
      url: glorious75,
      title: "75 Glorious years",
      detail: `The National Defence Academy (NDA) completes ‘75 Glorious Years’ of its existence on 16 January 2024, on this occassion, a year-long commemorative activities to highlight its achievements in various spheres are being conducted from 19 Jan 2023 to 16 Jan 2024.`,
    },
    {
      url: hut,
      title: "Hut of Remembrance",
      detail:
        "The sublime memorial hut enshrines and commemorates the sacrifices of all those alumni who laid down their lives for their motherland. It is a spiritual place of inspiration for all the cadets and officers.",
    },
    {
      url: "https://static.toiimg.com/thumb/msid-90383967,width-1280,height-720,resizemode-4/90383967.jpg",
      title: "Training",
      detail:
        "The National Defence Academy (NDA) at Khadakwasla, Pune, stands as a premier global defense institution, conceived post World War II to unite future Army, Navy, and Air Force officers into a potent joint force. From its inception in 1949 in Dehradun to its current stature in Pune, NDA has evolved significantly.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = (current) => {
    setCurrentIndex(current);
  };

  return (
    <div className="slide-section">
      <ImageSlider slides={slides} onCurrent={currentSlide} />
      <div className="slide-detail">
        <Headers id="slider-header">{slides[currentIndex].title}</Headers>
        <div className="slide-para">
          <p>{slides[currentIndex].detail}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
