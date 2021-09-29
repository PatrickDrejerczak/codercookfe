import { combineReducers } from "redux";
import recipeReducer from "./recipe.reducer";
import authReducer from "./auth.reducer";
import routeReducer from "./route.reducer";
import ingredientReducer from "./ingredient.reducer";
import categoryReducer from "./category.reducer";

export default combineReducers({
  recipe: recipeReducer,
  auth: authReducer,
  route: routeReducer,
  ingredient: ingredientReducer,
  category: categoryReducer,
});
