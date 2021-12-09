import React, { useEffect } from "react";
import categoryActions from "../../redux/actions/category.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";
import "./AdminOptions.css";
import CreateCategory from "../CreateCategory/CreateCategory";

const AdminCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
  }, [dispatch]);

  const handleDelete = (index) => {
    dispatch(
      categoryActions.deleteCategory({
        categoryId: categories[index]._id,
      })
    );
    console.log("testfrontend", categories[index]._id);
  };
  const handleNewCategory = () => {
    setModalShow(true);
  };

  return (
    <div className="row-wrapper">
      <Row>
        <br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Categories</th>
            </tr>
          </thead>
          <tbody>
            {categories?.length ? (
              categories.map((categories, index) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {categories.name}
                      <div className="adminButton">
                        <Button
                          variant="success"
                          className="adminPress"
                          style={{ backgroundColor: "#007343" }}
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
        <div>
          <Button
            variant="success"
            className="adminPress"
            style={{ backgroundColor: "#007343" }}
            onClick={handleNewCategory}
          >
            + Category
          </Button>
        </div>
        <CreateCategory show={modalShow} onHide={() => setModalShow(false)} />
        <br />
      </Row>
    </div>
  );
};

export default AdminCategory;
