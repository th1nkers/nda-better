import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiGalleryFill } from "react-icons/ri";
import { LiaFileDownloadSolid } from "react-icons/lia";
import DropdownMenu from "../uiElements/DropdownMenu";
import { useHttpClient } from "../../hooks/http-hook";
import "./Navlinks.css";

const NAV_ICON = {}

const Navlinks = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const [fetchNavData, setFetchNavData] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const fetchedData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/"
        );
        setFetchNavData(fetchedData);
      } catch (err) {}
    };

    fetchNavData();
  }, []);

  if (isLoading || !fetchNavData || fetchNavData.length === 0) return;

  return (
    <div className="subHeader">
      <ul className="upper-subheader">
        {/* <Link to="alumni">Alumni</Link>
        <Link to="parents">Parents</Link>
        <Link to="faqs">FAQs</Link>
        <Link to="contact-us">Contact Us</Link> */}
      </ul>
      <ul className="bottom-subheader">
        {fetchNavData?.home?.navData.map((item) => (
          <li
            key={item.subHeader}
            onMouseEnter={() => handleMouseEnter(item.subHeader)}
            onMouseLeave={() => handleMouseLeave(item.subHeader)}
          >
            <div>
              <div className="no-mobile-view-navlinks">{item.subHeader}</div>
              <div className="mobile-view-navlinks">
                <img
                  src={process.env.REACT_APP_BASE_URL + item.subIcon}
                  alt={item.subHeader}
                />
              </div>

              {dropdownVisibility[item.subHeader] && (
                <DropdownMenu item={item} />
              )}
            </div>
          </li>
        ))}
        <li>
          <Link id="nav-links" to="https://nda.nic.in/gallery-view">
            <RiGalleryFill />
          </Link>
        </li>
        <li>
          <Link id="nav-links" to="https://nda.nic.in/site-page-viewer/27">
            <LiaFileDownloadSolid />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
