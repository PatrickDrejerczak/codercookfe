import React from "react";
import Italian from "./Italian";
import Mexican from "./Mexican";
import Vegetarian from "./Vegetarian";
import Chinese from "./Chinese";
import Western from "./Western";
import Japanese from "./Japanese";

const RenderCategories = () => {
  return (
    <div>
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
