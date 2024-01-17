import React, { useState } from "react";
import Card from "../shared/components/uiElements/Card";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Header from "../shared/components/uiElements/Header";
import { DefaultPlayer as Video } from "react-html5video/dist";
import thumb from "../assets/home/news-events-section/thumb.jpg";
import { useInView } from "react-intersection-observer";
import ndaVideo from "../assets/home/news-events-section/nda-video.mp4"
import "react-html5video/dist/styles.css";
import "./NewsAndEvents.css";

const NewsAndEvents = ({ newsEventsData }) => {
  const [videoRef, inView] = useInView({
    triggerOnce: true,
  });

  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  console.log(newsEventsData[0].nda_video);

  return (
    <div className="news-and-events-section">
      <div ref={videoRef} className="video-section">
        <Video
          autoPlay={inView && !isVideoPlaying}
          loop
          muted
          poster={thumb}
          onPlay={handleVideoPlay}
        >
          <source src={ndaVideo} type="video/mp4" />
        </Video>
      </div>
      <Card className="news-and-events">
        <Header dotted id="news-h1">
          News & events
        </Header>
        <ul className="news-and-events-list">
          <li>
            <IoDocumentAttachOutline />
            <p>
              Procedure for Issue of NOC for Construction of Buildings & Other
              Structures around, NDA 75 Glorious Years Celebration (GYC) - Grand
              Finale 15 & 16 Jan 24 at NDA # Alumni Registration for
              Accommodation.
            </p>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default NewsAndEvents;
