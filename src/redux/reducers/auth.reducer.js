import * as types from "../constants/auth.constant";
const isAuthenticated = !!localStorage.getItem("accessToken");
const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken"),
  loading: false,
  isAuthenticated: isAuthenticated,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.UPDATE_PROFILE_REQUEST:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.LOGIN_FAILURE:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, user: { ...state.user, payload } };

    case types.REGISTER_FAILURE:
    case types.UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false };

    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
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
