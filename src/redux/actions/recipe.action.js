import { toast } from "react-toastify";
import * as types from "../constants/recipe.constant";
import { routeActions } from "./route.action";
import api from "../api";

const getAllRecipes = () => async (dispatch) => {
  dispatch({ type: types.GET_RECIPE_REQUEST, payload: null });
  try {
    const data = await api.get(`recipe?limit=4`);

    dispatch({
      type: types.GET_RECIPE_SUCCESS,
      payload: data.data.data.recipes,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_RECIPE_FAILURE, payload: error });
  }
};

const getFavorites = () => async (dispatch) => {
  dispatch({ type: types.GET_FAVORITES_REQUEST, payload: null });
  try {
    const data = await api.get(`recipe`);

    dispatch({
      type: types.GET_FAVORITES_SUCCESS,
      payload: data.data.data.favorites,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_FAVORITES_FAILURE, payload: error });
  }
};

const getSingleRecipe =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_RECIPE_REQUEST, payload: null });
    try {
      console.log(id);
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
  ({ name, pageNum = 1, limit = 6 }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_RECIPE_BY_CATEGORY_REQUEST, payload: null });
    try {
      const data = await api.get(`recipe/category/${name}?limit=${limit}`);

      dispatch({
        type: types.GET_RECIPE_BY_CATEGORY_SUCCESS,
        payload: data.data.data.recipes,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_RECIPE_BY_CATEGORY_FAILURE, payload: error });
    }
  };

const getRecipeByUserId =
  ({ userId }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_RECIPE_BY_USER_ID_REQUEST, payload: null });
    try {
      const data = await api.get(`recipe/user/${userId}`);

      dispatch({
        type: types.GET_RECIPE_BY_USER_ID_SUCCESS,
        payload: data.data.data.recipes,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_RECIPE_BY_USER_ID_FAILURE, payload: error });
    }
  };

const createRecipe = (formData) => async (dispatch) => {
  dispatch({ type: types.POST_RECIPE_REQUEST, payload: null });
  try {
    const res = await api.put(`/recipe`, formData);
    console.log("addRecipe", res);
    dispatch({
      type: types.POST_RECIPE_SUCCESS,
      payload: res.data.data,
    });
    // dispatch(recipeActions.recipeRequest({ pageNum: 1 }));
    dispatch(routeActions.redirect(`/recipe/${res.data.data.recipes._id}`));
    toast.success("New recipe has been created!");
  } catch (err) {
    dispatch({ type: types.POST_RECIPE_FAILURE, payload: err });
    toast.error("Input missing!");
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

const addFavorite =
  ({ recipeId }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.PUT_ADD_FAVORITE_REQUEST, payload: null });
      const res = await api.put(`/user/favorite/${recipeId}`);

      dispatch({
        type: types.PUT_ADD_FAVORITE_SUCCESS,
        payload: res.data.data,
      });

      toast.success(
        "The recipe has been added to your favorites successfully!"
      );
    } catch (error) {
      toast.error("Login required");
    }
  };

const deleteRecipe =
  ({ recipeId }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_RECIPE_REQUEST, payload: null });
      const res = await api.delete(`/recipe/${recipeId}`);
      dispatch({
        type: types.DELETE_RECIPE_SUCCESS,
        payload: { ...res.data.data, recipeId },
      });

      toast.success("The recipe has been deleted successfully");
    } catch (err) {
      dispatch({ type: types.DELETE_RECIPE_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };

const match = (inputArr) => async (dispatch) => {
  dispatch({ type: types.GET_MATCH_REQUEST, payload: null });
  try {
    console.log(inputArr);
    const res = await api.post("recipe/match/", { inputArr });
    console.log("success", res);

    dispatch({
      type: types.GET_MATCH_SUCCESS,
      payload: res.data.data,
    });
    //redirect to new page here when succes
    toast.success("Recipes have been matched successfully!");
    dispatch(routeActions.redirect(`/recipe/match`));
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_MATCH_FAILURE, payload: error });
  }
};

const searchRecipe =
  ({ search }) =>
  async (dispatch) => {
    try {
      const data = await api.get(`/recipe/search?search=${search}`);

      dispatch({
        type: types.SEARCH_RECIPE,
        payload: data.data.data,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

const uploadImage =
  ({ urlToImage }) =>
  (dispatch) => {
    dispatch({ type: types.UPLOAD_IMAGE, payload: urlToImage });
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
  uploadImage,
  getRecipeByUserId,
  addFavorite,
  searchRecipe,
  getFavorites,
};
export default recipeActions;
