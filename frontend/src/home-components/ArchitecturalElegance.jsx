import React, { useState } from "react";
import "./ArchitecturalElegance.css";
import Header from "../shared/components/uiElements/Header";
import hut from "../assets/home/slide-section/hut-of-remembrance.jpg";
import habibulah from "../assets/home/habibulah.jpg";
import Modal from "../shared/components/uiElements/Modal";

const ARCHITECTURAL_GALLERY = [
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sudan_Block.jpg/1280px-Sudan_Block.jpg",
    header: "Sudan Block",
    detail: "sudan detail",
  },
  {
    imgUrl: hut,
    header: "Hut of Remembrance",
    detail:
      "The sublime memorial hut enshrines and commemorates the sacrifices of all those alumni who laid down their lives for their motherland. It is a spiritual place of inspiration for all the cadets and officers. Situated on a scenic hill slope, west of the Sudan Block, Hut of Remembrance was built by the cadets between January 1956 and May 1957. The Garden around the hut was landscaped in 1992 to complement the serenity and the inspirational aura of the shrine. In this reverential place, passing out cadets and the officers of the Academy assemble in a solemn ceremony to pay homage to the martyred and decorated heroes and seek the blessings of God.",
  },
  {
    imgUrl: habibulah,
    header: "Habibullah Hall",
    detail: "Detail for habibulah image",
  },
  {
    imgUrl: "https://live.staticflickr.com/4111/5028768462_51ae7a8e9a_b.jpg",
    header: "Header for habibulah image",
    detail: "Detail for habibulah image",
  },
  {
    imgUrl:
      "https://images.shiksha.com/mediadata/images/1503288065phpvRuDTX.jpeg",
    header: "Header for habibulah image",
    detail: "Detail for habibulah image",
  },
  {
    imgUrl:
      "https://www.ssbcrack.com/wp-content/uploads/2017/12/NDA-Passing-Out-Parade-30-Nov-2017-4-1024x683.jpg",
    header: "Header for habibulah image",
    detail: "Detail for habibulah image",
  },
  {
    imgUrl:
      "https://content.jdmagicbox.com/comp/pune/g5/020pxx20.xx20.181024200558.g9g5/catalogue/nda-parade-ground-khadakwasla-pune-znjf43curq.jpg",
    header: "Header for habibulah image",
    detail: "Detail for habibulah image",
  },
  {
    imgUrl:
      "https://gs-post-images.grdp.co/2020/6/stadium-img1592218855588-74.JPG-rs-high-webp.JPG",
    header: "Header for habibulah image",
    detail: "Detail for habibulah image",
  },
  {
    imgUrl:
      "https://content3.jdmagicbox.com/comp/pune/t6/020pxx20.xx20.180626132929.k7t6/catalogue/peacock-bay-nda-khadakwasla-pune-museums-7m89s1g05z.jpg",
    header: "Header for habibulah image",
    detail: "Detail for habibulah image",
  },
];

const ArchitecturalElegance = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgContent, setImgContent] = useState();

  const modalImageHandler = (index) => {
    setImgContent(ARCHITECTURAL_GALLERY[index]);
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
          {ARCHITECTURAL_GALLERY.map((image, index) => (
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
