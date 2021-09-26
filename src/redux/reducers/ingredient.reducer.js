import * as types from "../constants/ingredient.constant";

const initialState = {
  ingredients: [],
  loading: false,
  selectedIngredient: null,
};

const ingredientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_INGREDIENT_REQUEST:
    case types.GET_SINGLE_INGREDIENT_REQUEST:
    case types.CREATE_INGREDIENT_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_INGREDIENT_SUCCESS:
      return { ...state, loading: false };
    case types.GET_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredients: payload.ingredients,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_INGREDIENT_SUCCESS:
      return {
        ...state,
        selectedIngredient: payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.GET_INGREDIENT_FAILURE:
    case types.GET_SINGLE_INGREDIENT_REQUEST_FAILURE:
    case types.CREATE_INGREDIENT_FAILURE:
      return { ...state, submitLoading: false };
    default:
      return state;
  }
};
export default ingredientReducer;
