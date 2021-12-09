import React from "react";
import RenderChinese from "./RenderChinese";
import "./RenderCategories.css";

const Chinese = () => {
  return (
    <div className="categoryGroup">
      <h1>Chinese Cuisine</h1>
      <RenderChinese />
    </div>
  );
};

export default Chinese;
