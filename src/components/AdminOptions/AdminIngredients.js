import React, { useEffect } from "react";
import ingredientActions from "../../redux/actions/ingredient.action";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Row } from "react-bootstrap";
import CreateIngredient from "../CreateIngredient/CreateIngredient";
import "./AdminOptions.css";

const AdminIngredients = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredient.ingredients);

  const handleDelete = (index) => {
    dispatch(
      ingredientActions.deleteIngredient({
        ingredientId: ingredients[index]._id,
      })
    );
    console.log("testfrontend", ingredients[index]._id);
  };
  const handleNewIngredient = () => {
    setModalShow(true);
  };

  useEffect(() => {
    dispatch(ingredientActions.getAllIngredients());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {ingredients?.length ? (
              ingredients.map((ingredients, index) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {ingredients.name}{" "}
                      <div className="adminButton">
                        <Button
                          variant="success"
                          className="adminPress"
                          onClick={() => handleDelete(index)}
                          style={{ backgroundColor: "#007343" }}
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
        <div>
          <Button
            variant="success"
            className="adminPress"
            style={{ backgroundColor: "#007343" }}
            onClick={handleNewIngredient}
          >
            + New Ingredient
          </Button>
        </div>
        <CreateIngredient show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </div>
  );
};

export default AdminIngredients;
