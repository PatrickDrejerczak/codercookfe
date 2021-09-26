import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateRecipePage from "./pages/CreateRecipePage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:name" exact component={CategoryPage} />
        <Route path="/recipe/:id" exact component={RecipeDetailPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/create" exact component={CreateRecipePage} />
      </Switch>
    </>
  );
};

export default App;
