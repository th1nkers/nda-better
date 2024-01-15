import React from "react";
import MainHeader from "./MainHeader";
import Navlinks from "./Navlinks";
import nda from "../../../assets/home/nda.png";
import sudo from "../../../assets/home/sudo.png";
import "./MainNavigation.css";

const MainNavigation = () => {

  return (
    <>
      <MainHeader>
        <div className="main-logo">
          <img src={nda} alt="main-logo" />
          <div className="main-logo-header">
            <h1>National Defence Academy</h1>
            <h3>Khadakwasla, Pune, India</h3>
          </div>
        </div>
        <div className="sudo-logo">
          <img src={sudo} alt="sudo-logo" />
        </div>
      </MainHeader>
      <div className="no-mobile-view-navlinks">
        <Navlinks />
      </div>
    </>
  );
};

export default MainNavigation;
