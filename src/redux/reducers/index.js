import { combineReducers } from "redux";
import recipeReducer from "./recipe.reducer";
import authReducer from "./auth.reducer";
import routeReducer from "./route.reducer";

export default combineReducers({
  recipe: recipeReducer,
  auth: authReducer,
  route: routeReducer,
});
