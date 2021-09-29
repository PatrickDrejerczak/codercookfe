import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";
import ModalBox from "../ModalBox/ModalBox";
import { Link } from "react-router-dom";
import recipeActions from "../../redux/actions/recipe.action";
import { useDispatch } from "react-redux";

const RecipeCard = ({ recipe }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    setModalShow(true);
    dispatch(recipeActions.selectedId({ id: recipe._id }));
  };

  return (
    <Card className="recipeCard">
      <Card.Img
        variant="top"
        src={recipe.urlToImage}
        onClick={handleOnClick}
        className="imageContainer"
      />
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Link as={Link} to={`category/${recipe.category}`}>
          <Card.Text>{recipe.category}</Card.Text>
        </Link>
        <Card.Text>{recipe.description}</Card.Text>

        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
