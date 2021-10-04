import React, { useEffect } from "react";
import recipeActions from "../../redux/actions/recipe.action";
import { authActions } from "../../redux/actions/auth.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";

const UserProfileRender = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(authActions.getCurrentUser());
    dispatch(recipeActions.getAllRecipes());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>Favorites</h1>
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
                      {recipes.favorites}{" "}
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
        <h1>User Name</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Recipes</th>
            </tr>
          </thead>
          <tbody>
            {user.length ? (
              user.map((user) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {user.name}{" "}
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
        <h1>{user.name}</h1>
      </Row>
    </div>
  );
};

export default UserProfileRender;
