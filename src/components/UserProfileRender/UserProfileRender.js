import React, { useEffect } from "react";
import { authActions } from "../../redux/actions/auth.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, CardGroup, Col } from "react-bootstrap";

import RecipeCard from "../RecipeCard/RecipeCard";
import AvatarUploadButton from "../AvatarUploadButton/AvatarUploadButton";
import recipeActions from "../../redux/actions/recipe.action";

const UserProfileRender = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const recipe = useSelector((state) => state.recipe.recipeByUserId);

  useEffect(() => {
    dispatch(authActions.getCurrentUser());
    if (user._id) {
      dispatch(recipeActions.getRecipeByUserId({ userId: user._id }));
    }
  }, [dispatch, user._id]);

  console.log(recipe);

  return (
    <div>
      <div className="userProfileSettings">
        <div className="settings">
          <h1>Hello, {user.name}</h1>
          <img src={user.avatarUrl} alt={user.name} />
          <br />
          <br />
          <AvatarUploadButton />
          <br />
        </div>
      </div>
      <h1>My Recipes</h1>
      <div className="row-wrapper">
        <Row>
          <CardGroup>
            {recipe?.length ? (
              recipe.map((r) => (
                <Col sm={3}>
                  <RecipeCard recipe={r} />
                </Col>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </CardGroup>
        </Row>
      </div>
      <br />
      <h1>Favorites</h1>
      <br />
      <div className="row-wrapper">
        <Row>
          <CardGroup>
            {user.favorites?.length ? (
              user.favorites.map((favorites) => (
                <Col sm={3}>
                  <RecipeCard recipe={favorites} />
                </Col>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </CardGroup>
        </Row>
      </div>
    </div>
  );
};

export default UserProfileRender;
