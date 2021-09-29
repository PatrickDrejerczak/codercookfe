import React from "react";
import { useSelector } from "react-redux";

import { Row, CardGroup } from "react-bootstrap";

import RecipeCard from "../components/RecipeCard/RecipeCard";

const UserPage = () => {
  const recipes = useSelector((state) => state.recipe.recipeByUserId);

  return (
    <div className="row-wrapper">
      <Row>
        <CardGroup>
          {recipes.length ? (
            recipes.map((recipes) => <RecipeCard recipe={recipes} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </CardGroup>
      </Row>
    </div>
  );
};

export default UserPage;
