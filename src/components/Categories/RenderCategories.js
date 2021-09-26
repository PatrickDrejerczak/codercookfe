import React from "react";
import Italian from "./Italian";
import Korean from "./Korean";
import Mexican from "./Mexican";
import Oriental from "./Oriental";
import Vegetarian from "./Vegetarian";

const RenderCategories = () => {
  return (
    <div>
      <Italian />
      <Korean />
      <Mexican />
      <Oriental />
      <Vegetarian />
    </div>
  );
};

export default RenderCategories;
