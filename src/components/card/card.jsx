import React from "react";
import "./card.css";

function Card({ title, description, icon, image, right }) {
  return (
    <div className="card">
      <div className="title">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
      </div>
      <div className="arrow">
        <div className="description">
          {description.map((item, index) => (
            <p key={index}>
              <img src={right} />
              {item}
            </p>
          ))}
        </div>
        <div className="img">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Card;
