import React from "react";
import "./FeatureCard.css";

function FeatureCard({featureImage, featureText}) {
  return (
    <div className="feature-card">
      <img src={featureImage} alt="secure" className="feature-img" />
      <p className="feature-text">{featureText}</p>
    </div>
  );
}

export default FeatureCard;
