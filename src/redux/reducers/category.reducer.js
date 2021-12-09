import * as types from "../constants/category.constant";

const initialState = {
  categories: [],
  loading: false,
  selectedCategory: null,
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORY_REQUEST:
    case types.GET_SINGLE_CATEGORY_REQUEST:
    case types.POST_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case types.POST_CATEGORY_SUCCESS:
      return { ...state, loading: false };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    case types.GET_SINGLE_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedCategory: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [
          ...state.categories.filter(
            (category) => category._id !== payload.categoryId
          ),
        ],
      };
    case types.GET_CATEGORY_FAILURE:
    case types.GET_SINGLE_CATEGORY_FAILURE:
    case types.POST_CATEGORY_FAILURE:
      return { ...state, submitLoading: false };
    default:
      return state;
  }
};
export default categoryReducer;
