import React from "react";
import "./FeatureDescription.css";

const FeatureDescription = () => {
  return (
    <div>
      <div className="featureBox">
        <div className="leftBox">
          <img
            src="https://post.healthline.com/wp-content/uploads/2020/08/duck-meat-1200x628-facebook-1200x628.jpg"
            alt="duckmeat"
            height="600px"
            width="600px"
          />
        </div>
        <div className="rightBox">
          <p className="featureArticle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
            tristique.
          </p>
          <p className="featureArticle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
            tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDescription;
