import * as types from "../constants/recipe.constant";

const initialState = {
  recipes: [],
  loading: false,
  selectedRecipe: null,
  recipeById: {},
  recipeByCategory: [],
  selectedId: null,
  urlToImage: "",
  recipeByUserId: [],
};

const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_RECIPE_REQUEST:
    case types.GET_SINGLE_RECIPE_REQUEST:
    case types.GET_MATCH_REQUEST:
    case types.GET_RECIPE_BY_CATEGORY_REQUEST:
    case types.GET_RECIPE_BY_USER_ID_REQUEST:
    case types.POST_RECIPE_REQUEST:
      return { ...state, loading: true };
    case types.POST_RECIPE_SUCCESS:
      return { ...state, loading: false };
    case types.GET_RECIPE_BY_CATEGORY_SUCCESS:
      return { ...state, recipeByCategory: payload };
    case types.GET_RECIPE_BY_USER_ID_SUCCESS:
      return { ...state, recipeByUserId: payload };
    case types.GET_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: payload,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_RECIPE_SUCCESS:
      return {
        ...state,
        recipeById: payload,
      };
    case types.MODEL_SELECTED_ID:
      return {
        ...state,
        selectedId: payload,
      };

    case types.GET_RECIPE_FAILURE:
    case types.GET_RECIPE_BY_CATEGORY_FAILURE:
    case types.GET_RECIPE_BY_USER_ID_FAILURE:
    case types.GET_SINGLE_RECIPE_FAILURE:
    case types.GET_MATCH_FAILURE:
      return { ...state, loading: false };
    case types.POST_RECIPE_FAILURE:
      return { ...state, submitLoading: false };
    case types.UPLOAD_IMAGE:
      return { ...state, urlToImage: payload };
    default:
      return state;
  }
};
export default recipeReducer;
