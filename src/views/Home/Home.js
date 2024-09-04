import React from "react";
import "./Home.css";
import ImgSecure from "./cyber-security.png";
import likeImage from "./love.png";
import brainImage from "./artificial-intelligence.png";
import FeatureCard from "../../component/FeatureCard/FeatureCard";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    featureImage: ImgSecure,
    featureText:"Notes will be saved securely in your browser's local storage."
  },
  {
    featureImage: brainImage,
    featureText:"Use Yours brain for thinking.not for remembering things."
  },
  {
    featureImage: likeImage,
    featureText:"Loved by 100+ users. Feedbacks are always welcome!"
  },
 
]

function Home() {
  return (
    <div>
      <h1 className="text-primary text-center app-title">📑Quick Notes</h1>
      <p className="text-center text-secondary">
        Your pocket friendly note taking app.{" "}
        <del>Never forget anything again!</del>
        <span className="highlight text-black tagline-highlight"> Remember everything!🧠</span>
      </p>

      <div>
        <h3 className="text-center">Why you should use Quick Note?</h3>

        <div className="feature-container">
          {
            FEATURES.map((feature,i)=>{
              const {featureImage , featureText} = feature;
              return(
                <FeatureCard
                featureImage={featureImage}
                featureText={featureText}
                key={i}/>
              ) 
            })
          }
        </div>
      </div>

      <div className="buttons-container">
        <Link to="/add">
        <button className="btn btn-primary">
          ✒️Add Note
          </button>
        </Link>

        <Link to="/show">
        <button className="btn btn-secondary">
          📖View Notes
        </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;
