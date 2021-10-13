import React from "react";
import Italian from "./Italian";
import Mexican from "./Mexican";
import Vegetarian from "./Vegetarian";
import Chinese from "./Chinese";
import Western from "./Western";
import Japanese from "./Japanese";
import "./RenderCategories.css";

const RenderCategories = () => {
  return (
    <div className="categoriesMainPage">
      <Italian />
      <Mexican />
      <Western />
      <Vegetarian />
      <Japanese />
      <Chinese />
    </div>
  );
};

export default RenderCategories;
