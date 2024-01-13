import React from "react";
import "./Footer.css";
import indiaGov from "./assets/shared/india-gov.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-detail">
        <div className="footer-img">
          {/* <img src="https://presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png?x39644" alt="india-emblem" /> */}
          <img
            src="https://www.mygov.in/sites/all/themes/mygov/front_assets/images/logo.svg"
            alt="my-gov"
          />
          <img
            src="https://cmsadmin.amritmahotsav.nic.in/writereaddata/portal/images/logo-poster-2.jpg"
            alt="footerimg"
          />
          <img
            src="https://www.india.gov.in/sites/upload_files/npi/files/newsletter/logo_share.png"
            alt="india-gov"
            i
          />
        </div>
        <ul className="footer-links">
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/32">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/12#adm-rti">RTI</Link>
          </li>
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/31">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/30">
              Copyright Statement
            </Link>
          </li>
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/29">
              Hyperlinking Policy
            </Link>
          </li>
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/34">Disclaimer</Link>
          </li>
          <li>
            <Link to="https://nda.nic.in/site-page-viewer/33">Sitemap</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">suryaXth1nkers @2024</div>
    </div>
  );
};

export default Footer;
