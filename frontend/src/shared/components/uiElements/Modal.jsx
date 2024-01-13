import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Backdrop from "./Backdrop";
import modalClose from "../../../assets/shared/modal-close.gif";
import "./Modal.css";

const ModalOverlay = ({ onOpen, onClose, imgContent, msg, ...props }) => {
  const handleModalOpen = () => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
  };

  const handleModalClose = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  useEffect(() => {
    handleModalOpen();
    return handleModalClose;
  }, [onOpen, onClose]);

  let content;

  if (imgContent) {
    content = (
      <>
        <img src={imgContent.imgUrl} alt={imgContent.header} />
        <div className="modal-detail">
          <Header id="modal-detail-header" dotted>{imgContent.header}</Header>
          <p>{imgContent.detail}</p>
        </div>
      </>
    );
  } else {
    content = (
      <div className="modal-msg-para">
        <p>{msg.para}</p>
        <div className="modal-msg-footer">
          <h3>Vice Admiral Ajay Kochhar, AVSM, NM</h3>
          <h6>Commandant</h6>
          <h6>National Defence Academy</h6>
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <div className="modal-section">
      <div className="modal-close" onClick={onClose}>
        <img src={modalClose} alt="" />
      </div>
      {content}
    </div>,
    document.getElementById("modal-hook")
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onClose} />
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
