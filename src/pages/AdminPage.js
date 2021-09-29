import React, { useEffect } from "react";
import recipeActions from "../redux/actions/recipe.action";
import { authActions } from "../redux/actions/auth.action";
import categoryActions from "../redux/actions/category.action";
import ingredientActions from "../redux/actions/ingredient.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, CardGroup, Card } from "react-bootstrap";

import RecipeCard from "../components/RecipeCard/RecipeCard";

const AdminPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const categories = useSelector((state) => state.category.categories);
  const users = useSelector((state) => state.auth.users);

  useEffect(() => {
    dispatch(ingredientActions.getAllIngredients());
    dispatch(authActions.getAllUser());
    dispatch(recipeActions.getAllRecipes());
    dispatch(categoryActions.getAllCategories());
  }, []);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>Recipes</h1>
        <CardGroup>
          {recipes.length ? (
            recipes.map((recipes) => <RecipeCard recipe={recipes} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </CardGroup>
        <h1>Ingredients</h1>
        <CardGroup>
          {ingredients.length ? (
            ingredients.map((ingredients) => (
              <Card ingredient={ingredients}>{ingredients.name}</Card>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </CardGroup>
        <h1>Categories</h1>
        <CardGroup>
          {categories.length ? (
            categories.map((categories) => (
              <Card category={categories}>{categories.name}</Card>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </CardGroup>
        <h1>User</h1>
        <CardGroup>
          {users.length ? (
            users.map((users) => <Card user={users}>{users.name}</Card>)
          ) : (
            <h1>Loading...</h1>
          )}
        </CardGroup>
      </Row>
    </div>
  );
};

export default AdminPage;
