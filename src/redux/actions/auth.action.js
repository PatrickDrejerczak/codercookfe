import * as types from "../constants/auth.constant";
import api from "../api";
import { routeActions } from "./route.action";
import { toast } from "react-toastify";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    const name = res.data.data.user.name;
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    toast.success(`Welcome ${name}`);
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
    localStorage.setItem("accessToken", res.data.data.accessToken);
    localStorage.setItem("role", res.data.data.user.role);
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/register", { name, email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Thank you for your registration, ${name}!`);
    // dispatch(routeActions.redirect("/verify/_"));
    // const name = res.data.data.user.name;
    // dispatch(alertActions.setAlert(`Welcome, ${name}`, "success"));
    // api.defaults.headers.common["authorization"] =
    //   "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const updateProfile = (name, avatarUrl, userId) => async (dispatch) => {
  dispatch({ type: types.PUT_PROFILE_REQUEST, payload: null });
  try {
    const res = await api.put(`/user/me}`, { name, avatarUrl });
    dispatch({ type: types.PUT_PROFILE_SUCCESS, payload: res.data.data });
    toast.success(`Your profile has been updated.`);
  } catch (error) {
    dispatch({ type: types.PUT_PROFILE_FAILURE, payload: error });
  }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get(`/user/me`);
    console.log(res);
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.removeItem("accessToken");
  localStorage.removeItem("role");
  dispatch({ type: types.LOGOUT, payload: null });
};

const deleteUser =
  (userId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_USER_REQUEST, payload: null });
      const res = await api.delete(`/user/${userId}`);
      dispatch({
        type: types.DELETE_USER_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The user has been deleted successfully");
    } catch (err) {
      dispatch({ type: types.DELETE_USER_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };

const getAllUser = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_USER_REQUEST, payload: null });
  try {
    const data = await api.get("user");

    dispatch({
      type: types.GET_ALL_USER_SUCCESS,
      payload: data.data.data.user,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_ALL_USER_FAILURE, payload: error });
  }
};

export const authActions = {
  loginRequest,
  register,
  updateProfile,
  getCurrentUser,
  logout,
  deleteUser,
  getAllUser,
};
