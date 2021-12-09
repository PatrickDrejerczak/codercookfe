import React, { useEffect } from "react";
import recipeActions from "../../redux/actions/recipe.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";
import "./AdminOptions.css";

const AdminRecipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);

  const handleDelete = (index) => {
    dispatch(recipeActions.deleteRecipe({ recipeId: recipes[index]._id }));
  };

  useEffect(() => {
    dispatch(recipeActions.getAllRecipes());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Recipes</th>
            </tr>
          </thead>
          <tbody>
            {recipes?.length ? (
              recipes.map((recipes, index) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {recipes.name}

                      <div className="adminButton">
                        <Button
                          variant="success"
                          className="adminPress"
                          onClick={() => handleDelete(index)}
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

        <br />
      </Row>
    </div>
  );
};

export default AdminRecipe;
