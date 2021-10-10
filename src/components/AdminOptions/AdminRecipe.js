import React, { useEffect } from "react";
import recipeActions from "../../redux/actions/recipe.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";
import "./AdminOptions.css";

const AdminRecipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);

  const handleDelete = () => {
    dispatch(recipeActions.deleteRecipe(recipes._id));
  };

  useEffect(() => {
    dispatch(recipeActions.getAllRecipes());
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
            {recipes?.length ? (
              recipes.map((recipes) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {recipes.name}{" "}
                      <div className="adminButton">
                        <Button variant="success" className="adminPress">
                          Edit
                        </Button>
                        <Button
                          variant="success"
                          className="adminPress"
                          onClick={handleDelete}
                        >
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
      </Row>
    </div>
  );
};

export default AdminRecipe;
