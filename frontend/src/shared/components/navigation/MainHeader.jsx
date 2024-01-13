import React from "react";
import "./MainHeader.css";

const MainHeader = ({ children,...props }) => {
  return <div className={`main-header ${props.className}`}>{children}</div>;
};

export default MainHeader;
