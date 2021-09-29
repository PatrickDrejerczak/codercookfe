import React from "react";
import { useSelector } from "react-redux";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecipeDetailRender.css";

const RecipeDetailPage = () => {
  const recipe = useSelector((state) => state.recipe.recipeById);
  const user = useSelector((state) => state.auth.user);

  return (
    <Container fluid>
      <Card className="detailCard">
        <Card.Title className="detailTitle">{recipe.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted detailSubtitle">
          {recipe.description}
        </Card.Subtitle>
        <Card.Img
          variant="top"
          src={recipe.urlToImage}
          alt={recipe.name}
          className="imageContainer detailImage"
        />
        <Card.Body>
          <ul className="detailInstruction">
            {recipe.ingredients?.map((ingredient) => (
              <li>
                <div>{ingredient.ingredient.name}</div>
                <div>{ingredient.quantity}</div>
              </li>
            ))}
          </ul>
          <Card.Text className="detailInstruction">
            {recipe.cookingInstruction}
          </Card.Text>
          <Card.Footer className="text-muted detailFooter">
            <Link as={Link} to={`/`}>
              <Button variant="success" className="footerButton">
                Main Page
              </Button>
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
      {user._id === recipe.userId ? <button>update</button> : <div />}
    </Container>
  );
};

export default RecipeDetailPage;

// <div className="row-wrapper">
// <Row>
//   {recipe.name ? <RecipeCard recipe={recipe} /> : <h1>Loading...</h1>}
// </Row>
// </div>
