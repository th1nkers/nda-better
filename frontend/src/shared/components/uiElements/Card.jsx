import React from "react";
import './Card.css'

const Card = ({ children, className }) => {
  return <div className={`card-section ${className}`}>
    {children}
</div>;
};

export default Card;
