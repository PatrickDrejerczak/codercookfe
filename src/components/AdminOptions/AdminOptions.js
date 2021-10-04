import React, { useEffect } from "react";
import recipeActions from "../../redux/actions/recipe.action";
import { authActions } from "../../redux/actions/auth.action";
import categoryActions from "../../redux/actions/category.action";
import ingredientActions from "../../redux/actions/ingredient.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";
import "./AdminOptions.css";

const AdminOptions = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const categories = useSelector((state) => state.category.categories);
  const users = useSelector((state) => state.auth.users);

  useEffect(() => {
    dispatch(ingredientActions.getAllIngredients());
    dispatch(authActions.getAllUser());
    dispatch(recipeActions.getAllRecipes());
    dispatch(categoryActions.getAllCategories());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>Recipes</h1>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Recipes</th>
            </tr>
          </thead>
          <tbody>
            {recipes.length ? (
              recipes.map((recipes) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {recipes.name}{" "}
                      <div className="adminButton">
                        <Button variant="success" className="adminPress">
                          Edit
                        </Button>
                        <Button variant="success" className="adminPress">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </div>
                </tr>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </tbody>
        </Table>
        <Button variant="success" className="adminPress">
          + New Recipe
        </Button>
        <br />
        <br />
        <h1>Ingredients</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.length ? (
              ingredients.map((ingredients) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {ingredients.name}{" "}
                      <div className="adminButton">
                        <Button variant="success" className="adminPress">
                          Edit
                        </Button>
                        <Button variant="success" className="adminPress">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </div>
                </tr>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </tbody>
        </Table>
        <Button variant="success" className="adminPress">
          + New Ingredient
        </Button>
        <br />
        <h1>User</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Users</th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((users) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {users.name}{" "}
                      <div className="adminButton">
                        <Button variant="success" className="adminPress">
                          Edit
                        </Button>
                        <Button variant="success" className="adminPress">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </div>
                </tr>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </tbody>
        </Table>
        <Button variant="success" className="adminPress">
          + New User
        </Button>
        <br />
        <h1>Category</h1>
        <br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Categories</th>
            </tr>
          </thead>
          <tbody>
            {categories.length ? (
              categories.map((categories) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {categories.name}
                      <div className="adminButton">
                        <Button variant="success" className="adminPress">
                          Edit
                        </Button>
                        <Button variant="success" className="adminPress">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </div>
                </tr>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </tbody>
        </Table>
        <Button variant="success" className="adminPress">
          + Category
        </Button>
        <br />
      </Row>
    </div>
  );
};

export default AdminOptions;
