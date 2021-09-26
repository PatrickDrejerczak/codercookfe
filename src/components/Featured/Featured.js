import React from "react";
import Story from "./Story";
import FeaturedCarousel from "./FeaturedCarousel";
import "./Featured.css";

const Featured = () => {
  return (
    <div>
      <div className="storyBox">
        <Story />
        <FeaturedCarousel />
      </div>
    </div>
  );
};

export default Featured;
