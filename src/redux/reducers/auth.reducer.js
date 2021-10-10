import * as types from "../constants/auth.constant";
const isAuthenticated = !!localStorage.getItem("accessToken");
const role = localStorage.getItem("role");
const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken"),
  loading: false,
  isAuthenticated: isAuthenticated,
  role: role,
  users: [],
  avatarUrl: "",
  userById: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.GET_ALL_USER_REQUEST:
    case types.GET_USER_BY_ID_REQUEST:
    case types.PUT_PROFILE_REQUEST:
    case types.DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        role: payload.user.role,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user._id !== payload.userId)],
      };
    case types.LOGIN_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
      return state;
    case types.GET_USER_BY_ID_FAILURE:
      return state;
    case types.GET_ALL_USER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };
    case types.DELETE_USER_FAILURE:
      return { ...state, loading: false };

    case types.PUT_PROFILE_SUCCESS:
      return { ...state, loading: false, user: { ...state.user, payload } };

    case types.REGISTER_FAILURE:
    case types.PUT_PROFILE_FAILURE:
      return { ...state, loading: false };

    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
        role: payload.role,
      };
    case types.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userById: payload,
        loading: false,
      };
    case types.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
