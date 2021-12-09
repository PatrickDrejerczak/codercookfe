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
    case types.POST_INGREDIENT_REQUEST:
      return { ...state, loading: true };
    case types.POST_INGREDIENT_SUCCESS:
      return { ...state, loading: false };
    case types.GET_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredients: payload,
        loading: false,
      };
    case types.DELETE_INGREDIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        ingredients: [
          ...state.ingredients.filter(
            (ingredient) => ingredient._id !== payload.ingredientId
          ),
        ],
      };
    case types.GET_SINGLE_INGREDIENT_SUCCESS:
      return {
        ...state,
        selectedIngredient: payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.GET_INGREDIENT_FAILURE:
    case types.GET_SINGLE_INGREDIENT_FAILURE:
    case types.POST_INGREDIENT_FAILURE:
      return { ...state, submitLoading: false };
    default:
      return state;
  }
};
export default ingredientReducer;
