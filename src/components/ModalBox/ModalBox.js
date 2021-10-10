import { Modal, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ModalBox = (props) => {
  const takeId = useSelector((state) => state.recipe.selectedId);
  const recipe = useSelector((state) => state.recipe.recipeById);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Required Ingredients Preview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Ingredients</th>
              <th className="kopf">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {recipe.ingredients?.map((ingredient) => (
              <tr>
                <td className="detailRow">{ingredient.ingredient.name}</td>
                <td className="detailRow">
                  {ingredient.quantity} {ingredient.ingredient.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          variant="success"
          className="footerButton"
        >
          Close
        </Button>

        <Link as={Link} to={`/recipe/${takeId}`}>
          <Button variant="success" className="footerButton">
            See Detailed Recipe
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBox;
