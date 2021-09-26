import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import recipeActions from "../../src/redux/actions/recipe.action";
import { useParams } from "react-router";
import React, { useEffect } from "react";
import RecipeSidebar from "../components/RecipeSidebar/RecipeSidebar";

const RecipeDetailPage = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recipeActions.getSingleRecipe({ id }));
  }, [dispatch]);
  return (
    <div>
      <Header />
      <RecipeSidebar />
    </div>
  );
};

export default RecipeDetailPage;
