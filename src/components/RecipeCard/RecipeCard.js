import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./styles.css";
import ModalBox from "../ModalBox/ModalBox";
import { Link } from "react-router-dom";
import recipeActions from "../../redux/actions/recipe.action";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const RecipeCard = ({ recipe }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    setModalShow(true);
    dispatch(recipeActions.selectedId({ id: recipe._id }));
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up">
      <Card className="recipeCard">
        <Card.Img
          variant="top"
          src={recipe.urlToImage}
          onClick={handleOnClick}
          className="imageContainer recipeCardPicture"
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
    </div>
  );
};

export default RecipeCard;
