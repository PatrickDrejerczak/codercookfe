import React, { useEffect } from "react";
import ingredientActions from "../../redux/actions/ingredient.action";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Row } from "react-bootstrap";
import "./AdminOptions.css";

const AdminIngredients = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredient.ingredients);

  const handleDelete = () => {
    dispatch(ingredientActions.deleteIngredient(ingredients._id));
  };

  useEffect(() => {
    dispatch(ingredientActions.getAllIngredients());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>Ingredients</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {ingredients?.length ? (
              ingredients.map((ingredients) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {ingredients.name}{" "}
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
          + New Ingredient
        </Button>
      </Row>
    </div>
  );
};

export default AdminIngredients;
