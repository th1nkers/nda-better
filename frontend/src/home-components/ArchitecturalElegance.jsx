import React, { useState } from "react";
import "./ArchitecturalElegance.css";
import Header from "../shared/components/uiElements/Header";
import Modal from "../shared/components/uiElements/Modal";

const ArchitecturalElegance = ({architecturalData}) => {
  const [showModal, setShowModal] = useState(false);
  const [imgContent, setImgContent] = useState();
    
    const modalImageHandler = (index) => {
      setImgContent(architecturalData[index]);
      setShowModal(true);
    };
  
    const closeModalHandler = () => {
      setShowModal(false);
    };

  return (
    <>
      {showModal && (
        <Modal imgContent={imgContent} onClose={closeModalHandler} />
      )}
      <div className="architectural-elegance">
        <img
          src="https://www.xtremz.in/dynamic/framework/xtreme/images/product_images/0_QZ8F.jpg"
          alt="elegance-logo"
        />
        <Header id="architectural-header">Architectural Elegance</Header>
        <div className="architectural-gallery">
          {architecturalData.map((image, index) => (
            <img
              onClick={() => modalImageHandler(index)}
              key={index}
              src={image.imgUrl}
              alt={image.header}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArchitecturalElegance;
