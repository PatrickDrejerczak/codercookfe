import { toast } from "react-toastify";
import * as types from "../constants/ingredient.constant";
import { routeActions } from "./route.actions";
import api from "../../apiService";

const getAllIngredients = () => async (dispatch) => {
  dispatch({ type: types.GET_INGREDIENT_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}ingredient`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_INGREDIENT_SUCCESS,
      payload: data.data.completed,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_INGREDIENT_FAILURE, payload: error });
  }
};

const getSingleIngredient = () => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_INGREDIENT_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}ingredient/:id`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_SINGLE_INGREDIENT_SUCCESS,
      payload: data.data.pending,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_SINGLE_INGREDIENT_FAILURE, payload: error });
  }
};

const createIngredient = (formData) => async (dispatch) => {
  dispatch({ type: types.CREATE_INGREDIENT_REQUEST, payload: null });
  try {
    const res = await api.post("/ingredient", formData);
    console.log("addIngredient", res);
    dispatch({
      type: types.CREATE_INGREDIENT_SUCCESS,
      payload: res.data.data,
    });
    dispatch(recipeActions.recipeRequest({ pageNum: 1 }));
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New ingredient has been created!");
  } catch (err) {
    dispatch({ type: types.CREATE_INGREDIENT_FAILURE, payload: err });
  }
};

const updateIngredient = (ingredientId, formData) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_INGREDIENT_REQUEST, payload: null });
    const res = await api.put(`/ingredient/${ingredientId}`, formData);

    dispatch({
      type: types.UPDATE_INGREDIENT_SUCCESS,
      payload: res.data.data,
    });

    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("The ingredient has been updated successfully!");
  } catch (err) {
    dispatch({ type: types.UPDATE_INGREDIENT_FAILURE, payload: err });
    toast.error("Something went wrong");
  }
};

const deleteIngredient =
  (ingredientId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_INGREDIENT_REQUEST, payload: null });
      const res = await api.delete(`/ingredient/${ingredientId}`);
      dispatch({
        type: types.DELETE_INGREDIENT_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The ingredient has been deleted successfully");
    } catch (err) {
      dispatch({ type: types.DELETE_INGREDIENT_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };

const recipeActions = {
  getAllIngredients,
  getSingleIngredient,
  deleteIngredient,
  updateIngredient,
  createIngredient,
};
export default recipeActions;
