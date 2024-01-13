import React, { useState } from "react";
import "./SlideSection.css";
import ImageSlider from "../shared/components/uiElements/ImageSlider";
import hut from "../assets/home/slide-section/hut-of-remembrance.jpg";
import glorious75 from "../assets/home/slide-section/glorious75.png";
import Headers from "../shared/components/uiElements/Header";

const SlideSection = () => {
  const slides = [
    {
      url: glorious75,
      title: "75 Glorious years",
      detail:
        "The National Defence Academy (NDA) at Khadakwasla, Pune, stands as a premier global defense institution, conceived post World War II to unite future Army, Navy, and Air Force officers into a potent joint force. From its inception in 1949 in Dehradun to its current stature in Pune, NDA has evolved significantly.The National Defence Academy (NDA) at Khadakwasla, Pune, stands as a premier global defense institution, conceived post World War II to unite future Army, Navy, and Air Force officers into a potent joint force. From its inception in 1949 in Dehradun to its current stature in Pune, NDA has evolved significantly.The National Defence Academy (NDA) at Khadakwasla, Pune, stands as a premier global defense institution, conceived post World War II to unite future Army, Navy, and Air Force officers into a potent joint force. From its inception in 1949 in Dehradun to its current stature in Pune, NDA has evolved significantly. .Inaugurated by Pandit Jawaharlal Nehru in 1955, the Academy has become a symbol of integration and jointmanship among the three Defense Services, producing leaders not only in the military but also in diverse fields like science, technology, arts, literature, and sports.",
    },
    { url: hut, 
      title: "Hut of Remembrance",
      detail: "hohohohohohohohoh"
    },
    {
      url: "https://static.toiimg.com/thumb/msid-90383967,width-1280,height-720,resizemode-4/90383967.jpg",
      title: "training",
      detail: "The National Defence Academy (NDA) at Khadakwasla, Pune, stands as a premier global defense institution, conceived post World War II to unite future Army, Navy, and Air Force officers into a potent joint force. From its inception in 1949 in Dehradun to its current stature in Pune, NDA has evolved significantly."
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
        <Headers>{slides[currentIndex].title}</Headers>
        <div className="slide-para">
        <p>{slides[currentIndex].detail}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
