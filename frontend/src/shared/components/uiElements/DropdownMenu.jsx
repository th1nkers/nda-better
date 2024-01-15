import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  const { item } = props;

  return (
      <div className="dropdown-menu">
        <div className="dropdown-inner">
          <ul className="dropdown-list-section">
            {item.subLinksHeader.map((subItem) => (
              <li className="dropdown-list" key={subItem.linksHeader}>
                <Button>
                  <Link to={subItem.links}>{subItem.linksHeader}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <div className="dropdown-detail">
            <p>{item.subPara}</p>
            <img
              id="mobile-dropdown-img"
              src={item.subImgUrl}
              alt={item.subHeader}
            />
          </div>
          <img id="dropdown-img" src={process.env.REACT_APP_BASE_URL + item.subImgUrl} alt={item.subHeader} />
        </div>
      </div>
  );
};

export default DropdownMenu;
