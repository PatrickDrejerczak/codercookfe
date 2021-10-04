import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecipeDetailRender.css";
import recipeActions from "../../redux/actions/recipe.action";
import StarRating from "../StarRating/StarRating";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";

const RecipeDetailPage = () => {
  const recipe = useSelector((state) => state.recipe.recipeById);
  const user = useSelector((state) => state.auth.user);
  const recipeLoading = useSelector((state) => state.recipe.recipeLoading);
  const authLoading = useSelector((state) => state.auth.authLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(recipeActions.addFavorite({ recipeId: recipe._id }));
  };
  console.log("user", user);
  return (
    <>
      {authLoading || recipeLoading ? (
        <h1>loading ..</h1>
      ) : (
        <Container fluid>
          <Card className="detailCard">
            <Card.Img
              variant="top"
              src={recipe.urlToImage}
              alt={recipe.name}
              className="imageContainer detailImage"
            />
            <br />
            <Card.Title className="detailTitle">{recipe.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted detailSubtitle">
              {recipe.description}
            </Card.Subtitle>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="kopf">Ingredients</th>
                    <th className="kopf">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.ingredients?.map((ingredient) => (
                    <tr>
                      <td className="detailRow">
                        {ingredient.ingredient.name}
                      </td>
                      <td className="detailRow">{ingredient.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <br />
              <Card.Text className="detailInstruction">
                {recipe.cookingInstruction}
              </Card.Text>
              <br />
              <Card.Footer className="text-muted detailFooter">
                <div className="buttonGroup">
                  {isAuthenticated === true ? (
                    user?._id === recipe.userId ? (
                      <Button
                        variant="success"
                        className="footerButton updateButton"
                      >
                        update
                      </Button>
                    ) : (
                      <div className="buttonRecipeGroup">
                        <Button
                          className="rds-save-recipe-btn search-save-recipe-btn ds-btn-primary ds-btn-conversion ds-btn-icon ds-btn-icon-mobile bi-recipe-save--init"
                          onClick={handleFavorite}
                        >
                          <Icon className="heartIcon" path={mdiHeart} />
                          <span>Favorite</span>
                        </Button>
                        <StarRating />
                      </div>
                    )
                  ) : (
                    <div className="buttonRecipeGroup">
                      <Button
                        className="rds-save-recipe-btn search-save-recipe-btn ds-btn-primary ds-btn-conversion ds-btn-icon ds-btn-icon-mobile bi-recipe-save--init"
                        onClick={handleFavorite}
                      >
                        <Icon className="heartIcon" path={mdiHeart} />
                        <span>Favorite</span>
                      </Button>
                      <StarRating />
                    </div>
                  )}
                </div>
                <Link as={Link} to={`/`}>
                  <Button variant="success" className="footerButton">
                    Main Page
                  </Button>
                </Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export default RecipeDetailPage;

// <div className="row-wrapper">
// <Row>
//   {recipe.name ? <RecipeCard recipe={recipe} /> : <h1>Loading...</h1>}
// </Row>
// </div>
