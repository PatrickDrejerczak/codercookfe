import { toast } from "react-toastify";
import * as types from "../constants/recipe.constant";
import { routeActions } from "./route.action";
import api from "../api";

const getAllRecipes = () => async (dispatch) => {
  dispatch({ type: types.GET_RECIPE_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}recipe`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_RECIPE_SUCCESS,
      payload: data.data.completed,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_RECIPE_FAILURE, payload: error });
  }
};

const getSingleRecipe =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_RECIPE_REQUEST, payload: null });
    try {
      const data = await api.get(`recipe/${id}`);

      dispatch({
        type: types.GET_SINGLE_RECIPE_SUCCESS,
        payload: data.data.data.recipe,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_SINGLE_RECIPE_FAILURE, payload: error });
    }
  };

const selectedId =
  ({ id }) =>
  (dispatch) => {
    dispatch({
      type: types.MODEL_SELECTED_ID,
      payload: id,
    });
  };

const getRecipeByCategory =
  ({ name }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_RECIPE_BY_CATEGORY_REQUEST, payload: null });
    try {
      const data = await api.get(`recipe/category/${name}`);

      dispatch({
        type: types.GET_RECIPE_BY_CATEGORY_SUCCESS,
        payload: data.data.data.recipes,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_RECIPE_BY_CATEGORY_FAILURE, payload: error });
    }
  };

const createRecipe = (formData) => async (dispatch) => {
  dispatch({ type: types.POST_RECIPE_REQUEST, payload: null });
  try {
    const res = await api.post("/recipe", formData);
    console.log("addRecipe", res);
    dispatch({
      type: types.POST_RECIPE_SUCCESS,
      payload: res.data.data,
    });
    dispatch(recipeActions.recipeRequest({ pageNum: 1 }));
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New product has been created!");
  } catch (err) {
    dispatch({ type: types.POST_RECIPE_FAILURE, payload: err });
  }
};

const updateRecipe = (recipeId, formData) => async (dispatch) => {
  try {
    dispatch({ type: types.PUT_RECIPE_REQUEST, payload: null });
    const res = await api.put(`/recipe/${recipeId}`, formData);

    dispatch({
      type: types.PUT_RECIPE_SUCCESS,
      payload: res.data.data,
    });

    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("The recipe has been updated successfully!");
  } catch (err) {
    dispatch({ type: types.PUT_RECIPE_FAILURE, payload: err });
    toast.error("Something went wrong");
  }
};

const deleteRecipe =
  (recipeId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_RECIPE_REQUEST, payload: null });
      const res = await api.delete(`/recipe/${recipeId}`);
      dispatch({
        type: types.DELETE_RECIPE_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The recipe has been deleted successfully");
    } catch (err) {
      dispatch({ type: types.DELETE_RECIPE_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };

const match = () => async (dispatch) => {
  dispatch({ type: types.GET_MATCH_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}match/:id`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_MATCH_SUCCESS,
      payload: data.data.completed,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_MATCH_FAILURE, payload: error });
  }
};

const recipeActions = {
  getAllRecipes,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe,
  match,
  createRecipe,
  getRecipeByCategory,
  selectedId,
};
export default recipeActions;
