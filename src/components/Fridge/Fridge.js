import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ingredientActions from "../../redux/actions/ingredient.action";
import recipeActions from "../../redux/actions/recipe.action";
import { routeActions } from "../../redux/actions/route.action";
import { useHistory } from "react-router";

const Fridge = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const ingredients = useSelector((state) => state.ingredient.ingredients);

  const [inputArr, setInputArr] = useState([{ ingredient: "" }]);
  const handleOnClick = () => {
    setInputArr([...inputArr, { ingredient: "" }]);
  };

  const handleIngredient = (e) => {
    let newArr = inputArr;
    console.log(e.target.value);
    const { index1, ingredient } = JSON.parse(e.target.value); // {"ingredient": Object, index1: 1}
    newArr[index1].ingredient = ingredient._id;
    setInputArr(newArr);
  };

  const handleSubmit = () => {
    const formData = inputArr.map((input) => input.ingredient);
    dispatch(recipeActions.match(formData));
  };

  useEffect(() => {
    dispatch(ingredientActions.getAllIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(routeActions.removeRedirectTo());
      } else {
        history.push(redirectTo);
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [dispatch, history, redirectTo]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          What´s in YOUR Fridge?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {inputArr.map((i, index1) => (
          <div>
            <InputGroup className="formBox">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleIngredient(e)}
              >
                <option>Select Ingredients</option>
                {ingredients.map((ingredient, index) => (
                  <option
                    value={JSON.stringify({
                      ingredient: ingredient,
                      index1: index1,
                    })}
                  >
                    {ingredient.name}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </div>
        ))}
        <Button className="addButton" variant="success" onClick={handleOnClick}>
          +
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="submitButton"
          variant="success"
          onClick={() => {
            handleSubmit();
            props.onHide();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Fridge;
