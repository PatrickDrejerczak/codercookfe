import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";

import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeDetailPage = () => {
  const recipe = useSelector((state) => state.recipe.recipeById);

  return (
    <div className="row-wrapper">
      <Row>
        {recipe.name ? <RecipeCard recipe={recipe} /> : <h1>Loading...</h1>}
      </Row>
    </div>
  );
};

export default RecipeDetailPage;
