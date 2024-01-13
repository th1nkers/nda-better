import React, { useState } from "react";
import "./NewsAndEvents.css";
import Card from "../shared/components/uiElements/Card";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Header from "../shared/components/uiElements/Header";
import ndaSong from "../assets/home/news-events-section/nda-song.mp4";
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";
import thumb from "../assets/home/news-events-section/thumb.jpg";
import { useInView } from "react-intersection-observer";

const NewsAndEvents = () => {
  const [videoRef, inView] = useInView({
    triggerOnce: true,
  });

  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

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
          <source src={ndaSong} type="video/mp4" />
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
          <li>
            <IoDocumentAttachOutline />
            <p>
              Procedure for Issue of NOC for Construction of Buildings & Other
              Structures around, NDA 75 Glorious Years Celebration (GYC) - Grand
              Finale 15 & 16 Jan 24 at NDA # Alumni Registration for
              Accommodation.
            </p>
          </li>
          <li>
            <IoDocumentAttachOutline />
            <p>
              Procedure for Issue of NOC for Construction of Buildings & Other
              Structures around, NDA 75 Glorious Years Celebration (GYC) - Grand
              Finale 15 & 16 Jan 24 at NDA # Alumni Registration for
              Accommodation.
            </p>
          </li>
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
