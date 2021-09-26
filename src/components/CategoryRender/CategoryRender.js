import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";

import RecipeCard from "../RecipeCard/RecipeCard";

const CategoryRender = () => {
  const recipes = useSelector((state) => state.recipe.recipeByCategory);

  return (
    <div className="row-wrapper">
      <Row>
        {recipes.length ? (
          recipes.map((recipe) => <RecipeCard recipe={recipe} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </Row>
    </div>
  );
};

export default CategoryRender;
