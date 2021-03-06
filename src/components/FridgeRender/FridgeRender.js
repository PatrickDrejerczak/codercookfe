import React from "react";
import { useSelector } from "react-redux";
import { Row, CardGroup } from "react-bootstrap";

import RecipeCard from "../RecipeCard/RecipeCard";

const FridgeRender = () => {
  const recipes = useSelector((state) => state.recipe.inputArr);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>Recipes Matching Your Fridge</h1>
        <CardGroup>
          {recipes?.length ? (
            recipes.map((recipe) => <RecipeCard recipe={recipe} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </CardGroup>
      </Row>
    </div>
  );
};

export default FridgeRender;
