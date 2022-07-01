import React from "react";
import "./Feature.css";

function Feature({ title, text }) {
  return (
    <div className="gpt3_features-container_feature">
      <div className="gpt3_features-container_feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3_features-container-feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
