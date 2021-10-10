import React from "react";
import {
  Form,
  InputGroup,
  Button,
  FormControl,
  Card,
  Container,
} from "react-bootstrap";
import ImgUploadButton from "../ImgUploadButton/ImgUploadButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ingredientActions from "../../redux/actions/ingredient.action";
import categoryActions from "../../redux/actions/category.action";
import recipeActions from "../../redux/actions/recipe.action";
import "./CreateRecipeForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routeActions } from "../../redux/actions/route.action";
import { useHistory } from "react-router";

const CreateRecipeForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [category, setCategory] = useState("");
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const categories = useSelector((state) => state.category.categories);
  const urlToImage = useSelector((state) => state.recipe.urlToImage);
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const history = useHistory();
  const [inputArr, setInputArr] = useState([{ ingredient: "", quantity: "" }]);
  const handleOnClick = () => {
    setInputArr([...inputArr, { ingredient: "", quantity: "" }]);
  };

  const handleRecipeName = (e) => {
    setRecipeName(e.target.value);
  };
  console.log(recipeName);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  console.log(description);

  const handleCookingInstructions = (e) => {
    setCookingInstructions(e.target.value);
  };
  console.log(cookingInstructions);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  console.log(category);

  const handleIngredient = (e) => {
    let newArr = inputArr;
    console.log(e.target.value);
    const { index1, ingredient } = JSON.parse(e.target.value); // {"ingredient": Object, index1: 1}
    newArr[index1].ingredient = ingredient._id;
    setInputArr(newArr);
  };

  const handleSubmit = () => {
    const formData = {
      name: recipeName,
      description,
      cookingInstruction: cookingInstructions,
      ingredients: inputArr,
      categoryId: category,
      urlToImage,
    };
    dispatch(recipeActions.createRecipe(formData));
  };

  console.log(inputArr);
  const handleQuantity = (e, index1) => {
    let newArr = inputArr;
    newArr[index1].quantity = e.target.value;
    setInputArr(newArr);
  };
  useEffect(() => {
    dispatch(ingredientActions.getAllIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
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

  console.log(urlToImage);

  return (
    <Container fluid>
      <Card className="createRecipeCard">
        <Card.Title className="createRecipeTitle">
          Create A New Recipe
        </Card.Title>
        <Card.Text className="createRecipeText">
          <FontAwesomeIcon
            icon="comment-alt"
            size="2x"
            className="searchIcon"
          />
          Name your dish
        </Card.Text>
        <Form.Group
          className="mb-3 formBox"
          value={recipeName}
          onChange={handleRecipeName}
        >
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>
        <br />
        <Card.Text className="createRecipeText">
          <FontAwesomeIcon icon="utensils" size="2x" className="searchIcon" />
          Description
        </Card.Text>
        <InputGroup
          value={description}
          onChange={handleDescription}
          className="formBox"
        >
          <FormControl
            as="textarea"
            aria-label="With textarea"
            style={{ height: "8vh" }}
            required
          />
        </InputGroup>
        <br />
        <Card.Text className="createRecipeText">
          <FontAwesomeIcon
            icon="bread-slice"
            size="2x"
            className="searchIcon"
          />
          Category
        </Card.Text>
        <InputGroup className="formBox">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => handleCategory(e)}
          >
            <option>Open this select menu</option>
            {categories.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
          </Form.Select>
        </InputGroup>
        <br />

        <Card.Text className="createRecipeText">
          <FontAwesomeIcon icon="book" size="2x" className="searchIcon" />
          Recipe
        </Card.Text>
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
                    {ingredient.name} {ingredient.unit}
                  </option>
                ))}
              </Form.Select>

              <Form.Group className="mb-3 amountBox" controlId="formBasicEmail">
                <Form.Control
                  type="Number"
                  placeholder="Enter required amount"
                  onChange={(e) => handleQuantity(e, index1)}
                  required
                />
              </Form.Group>
            </InputGroup>
          </div>
        ))}
        <Button className="addButton" variant="success" onClick={handleOnClick}>
          +
        </Button>
        <br />
        <Card.Text className="createRecipeText">
          <FontAwesomeIcon icon="fire-alt" size="2x" className="searchIcon" />
          <span>Cooking Instructions</span>
        </Card.Text>
        <InputGroup
          value={cookingInstructions}
          onChange={handleCookingInstructions}
          className="formBox"
        >
          <FormControl
            as="textarea"
            aria-label="With textarea"
            className="formBox"
            style={{ height: "15vh" }}
            required
          />
        </InputGroup>
        <br />
        <div className="createRecipeButtons">
          <ImgUploadButton />

          <Button
            className="submitButton"
            variant="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <br />
      </Card>
    </Container>
  );
};

export default CreateRecipeForm;
