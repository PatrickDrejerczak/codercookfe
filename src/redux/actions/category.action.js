import { toast } from "react-toastify";
import * as types from "../constants/ingredient.constant";
import { routeActions } from "./route.actions";
import api from "../../apiService";

const getAllCategories = () => async (dispatch) => {
  dispatch({ type: types.GET_CATEGORY_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}category`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_CATEGORY_SUCCESS,
      payload: data.data.completed,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_CATEGORY_FAILURE, payload: error });
  }
};

const getSingleCategory = () => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_CATEGORY_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}category/:id`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_SINGLE_CATEGORY_SUCCESS,
      payload: data.data.pending,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_SINGLE_CATEGORY_FAILURE, payload: error });
  }
};

const createCategory = (formData) => async (dispatch) => {
  dispatch({ type: types.POST_CATEGORY_REQUEST, payload: null });
  try {
    const res = await api.post("/category", formData);
    console.log("addCategory", res);
    dispatch({
      type: types.POST_CATEGORY_SUCCESS,
      payload: res.data.data,
    });
    dispatch(recipeActions.recipeRequest({ pageNum: 1 }));
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New category has been created!");
  } catch (err) {
    dispatch({ type: types.POST_CATEGORY_FAILURE, payload: err });
  }
};

const updateCategory = (categoryId, formData) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_CATEGORY_REQUEST, payload: null });
    const res = await api.put(`/category/${categoryId}`, formData);

    dispatch({
      type: types.UPDATE_CATEGORY_SUCCESS,
      payload: res.data.data,
    });

    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("The category has been updated successfully!");
  } catch (err) {
    dispatch({ type: types.UPDATE_CATEGORY_FAILURE, payload: err });
    toast.error("Something went wrong");
  }
};

const deleteCategory =
  (categoryId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_CATEGORY_REQUEST, payload: null });
      const res = await api.delete(`/category/${categoryId}`);
      dispatch({
        type: types.DELETE_CATEGORY_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The category has been deleted successfully");
    } catch (err) {
      dispatch({ type: types.DELETE_CATEGORY_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };

const recipeActions = {
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
  createCategory,
};
export default recipeActions;
