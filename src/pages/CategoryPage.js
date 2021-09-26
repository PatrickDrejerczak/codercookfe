import React, { useEffect } from "react";
import CategorySidebar from "../components/CategorySidebar/CategorySidebar";
import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import recipeActions from "../../src/redux/actions/recipe.action";
import { useParams } from "react-router";

const CategoryPage = () => {
  const params = useParams();
  const name = params.name;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recipeActions.getRecipeByCategory({ name }));
  }, [dispatch]);
  return (
    <div>
      <Header />
      <CategorySidebar />
    </div>
  );
};

export default CategoryPage;
