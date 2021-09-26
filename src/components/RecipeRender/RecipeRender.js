import React from "react";

import Row from "react-bootstrap/Row";
import { data } from "../../data";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeRender = () => {
  return (
    <div className="row-wrapper">
      <Row>
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </Row>
    </div>
  );
};

export default RecipeRender;
