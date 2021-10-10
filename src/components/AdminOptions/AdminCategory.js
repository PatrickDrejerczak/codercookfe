import React, { useEffect } from "react";
import categoryActions from "../../redux/actions/category.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";
import "./AdminOptions.css";

const AdminCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>Categories</h1>
        <br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Categories</th>
            </tr>
          </thead>
          <tbody>
            {categories?.length ? (
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

export default AdminCategory;
