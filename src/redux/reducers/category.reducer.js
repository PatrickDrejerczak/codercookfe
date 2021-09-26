import * as types from "../constants/category.constant";

const initialState = {
  categories: [],
  loading: false,
  selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORY_REQUEST:
    case types.GET_SINGLE_CATEGORY_REQUEST:
    case types.CREATE_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_CATEGORY_SUCCESS:
      return { ...state, loading: false };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedCategory: payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.GET_CATEGORY_FAILURE:
    case types.GET_SINGLE_CATEGORY_REQUEST_FAILURE:
    case types.CREATE_CATEGORY_FAILURE:
      return { ...state, submitLoading: false };
    default:
      return state;
  }
};
export default categoryReducer;
