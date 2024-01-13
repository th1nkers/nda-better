import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiGalleryFill } from "react-icons/ri";
import { LiaFileDownloadSolid } from "react-icons/lia";
import DropdownMenu from "../uiElements/DropdownMenu";
import about from "../../../assets/home/nav/about.png";
import academics from "../../../assets/home/nav/academics.png";
import training from "../../../assets/home/nav/training.png";
import outdoorTraining from "../../../assets/home/nav/outdoor-training.png";
import administration from "../../../assets/home/nav/administration.png";
import hallOfFame from "../../../assets/home/nav/hall-of-fame.png";
import cadet from "../../../assets/home/nav/cadet.png";
import "./Navlinks.css";

const BOTTOM_SUBHEADER = [
  {
    subHeader: "About us",
    subLinksHeader: [
      {
        linksHeader: "History of NDA",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Insignia and Motto",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Ist Course JSW",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Vision and Mission",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Five Pillars of Academy",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `National Defence Academy has emerged as an iconic Military Academy over years, attracting not only the finest young men from all corners of the country but also from friendly foreign countries. In the seven decades of its glorious existence, National Defence Academy has grown both in grace and grandeur. From its portals have graduated the 'The Leaders of the men', who have proved their worth and have demonstrated the essence of inter-services camaraderie and jointmanship, thereby vindicating the faith and vision of its founding fathers.`,
    subImgUrl: about,
  },
  {
    subHeader: "Academics",
    subLinksHeader: [
      {
        linksHeader: "Overview",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Aim",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Mission",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Vision",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Major Activities",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Recognition",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Faculty",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Streams",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Resources",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Degrees and Certificates",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `National Defence Academy is recognized by the Jawaharlal Nehru University, New Delhi, for the award of B.A./B.Sc./B.Sc (Computer Science) for Army Cadets and B Tech degree for Navy and Air Force Cadets. NDA has been recognized by Jawaharlal Nehru University (JNU), New Delhi since 1973.  Academic excellence is a prerequisite for continued trainability. Academic instruction at the NDA is imparted by qualified and highly motivated Academic officers Civilian and Service Instructors. The curriculum is well-rounded but demanding and is supported by up-to-date libraries and laboratories. The aim is to achieve excellence in academic pursuits without compromising on outdoor activities.`,
    subImgUrl: academics,
  },
  {
    subHeader: "Service Training",
    subLinksHeader: [
      {
        linksHeader: "Army Training Team",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Naval Training Team",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Airforce Training Team",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Joint Training Team",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `The mission of Service Training is to provide the highest standards of military training keeping in view the requirements of modern-day warfare, inculcate in cadets qualities of leadership, a desire for self-improvement, and a drive to excel in every sphere. Incorporate a culture of jointmanship in training and promote the spirit of jointmanship in thought, word, and deed. Emphasize on overall personality development of a Cadet by inculcating a sense of self-discipline, honor, integrity, camaraderie, and spirit-de-corps.`,
    subImgUrl: training,
  },
  {
    subHeader: "Outdoor Training",
    subLinksHeader: [
      {
        linksHeader: "Physical",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Equitation",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Drill",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `National Defence Academy will continue to be the global premier joint training institution and centre of excellence for producing junior leaders, for the Indian Armed Forces, equipped with professional, moral, and physical attributes required to face the challenges of the future battlefield and capable of leading troops to victory, in the entire spectrum of conflict.`,
    subImgUrl: outdoorTraining,
  },
  {
    subHeader: "Administration",
    subLinksHeader: [
      {
        linksHeader: "Aim",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Mission",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Vision",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Objectives",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Major Tasks",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "RTI",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Motivational Visit",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `Office administration is one of the key elements associated with a high level of workplace productivity and efficiency. The administration department at National Defence Academy provides logistics support for the smooth conduct of training and ensures the efficient functioning of various departments. They act as backend support to training and reinforce all processes thereby assist in realizing and achieving the goals of the organization when it comes to efficient administration at all levels.`,
    subImgUrl: administration,
  },
  {
    subHeader: "Cadets' Corner",
    subLinksHeader: [
      {
        linksHeader: "Life as a cadet",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Clubs & Activities",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Battalions & Squadrons",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Cadets' Mess",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `Three formative years at the academy instill in the cadets a sense of intense belonging, bonding, and feelings of oneness with the alma-mater. Breaking bread and training together engender the spirit of camaraderie which in the ultimate analysis forms the bedrock of inter-services co-operation in times to come.`,
    subImgUrl: cadet,
  },
  {
    subHeader: "Hall of Fame",
    subLinksHeader: [
      {
        linksHeader: "Gallantry Awards",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "The Chiefs",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Commandant’s Gallery",
        links: "https://chat.openai.com/",
      },
      {
        linksHeader: "Men at Helm",
        links: "https://chat.openai.com/",
      },
    ],
    subPara: `Valour, Glory, Sacrifice & Duty – The Men of Defence are the epitome of the highest values that our country stands for. From the icy landscapes of Siachen to the arid deserts of Rajasthan, they act as a shield for over a billion lives in our country keeping us safe from all external threats that continue to haunt our borders. The Hall of Fame honors the achievements of the Men at Helm and the Chiefs of Staff.`,
    subImgUrl: hallOfFame,
  },
];

const Navlinks = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState({});

  const handleMouseEnter = (item) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [item]: false,
    }));
  };

  return (
    <div className="subHeader">
      <ul className="upper-subheader">
        <Link to="alumni">Alumni</Link>
        <Link to="parents">Parents</Link>
        <Link to="faqs">FAQs</Link>
        <Link to="contact-us">Contact Us</Link>
      </ul>
      <ul className="bottom-subheader">
        {BOTTOM_SUBHEADER.map((item) => (
          <li
            key={item.subHeader}
            onMouseEnter={() => handleMouseEnter(item.subHeader)}
            onMouseLeave={() => handleMouseLeave(item.subHeader)}
          >
            <div>
              {item.subHeader}
              {dropdownVisibility[item.subHeader] && (
                <DropdownMenu item={item} />
              )}
            </div>
          </li>
        ))}
        <li>
          <Link id="nav-links" to="/gallery">
            <RiGalleryFill />
          </Link>
        </li>
        <li>
          <Link id="nav-links" to="/docs-download">
            <LiaFileDownloadSolid />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
