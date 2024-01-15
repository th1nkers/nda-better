import React, { useState } from "react";
import Card from "../shared/components/uiElements/Card";
import "./CommandantMsg.css";
import Header from "../shared/components/uiElements/Header";
import Button from "@mui/material/Button";
import Modal from "../shared/components/uiElements/Modal";


const CommandantMsg = ({msgData}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal
          msg={msgData[0]}
          onOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="cammandantMsg-section">
        <Card className="celebration-logo">
          <Header dotted>75 Glorious Years Celebration </Header>
          <img
            src="https://wizquiz.consultnexus.in/wp-content/uploads/2023/06/Logo-75-YEars-1.png"
            alt="75th glorious"
          />
        </Card>
        <Card className="cammandant-msg">
          <h1>Message From The Commandant</h1>
          <div className="cammandant-msg-detail">
            <div className="cammandant-img">
              <img src={process.env.REACT_APP_BASE_URL + msgData[0].commandantImgPath} alt={msgData[0].position + " image"} />
            </div>
            <div className="cammandant-msg-para">
              <p>
                {msgData[0].para.substring(0, 610)}
                ...
                <Button
                  variant="text"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Read in detail
                </Button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CommandantMsg;
