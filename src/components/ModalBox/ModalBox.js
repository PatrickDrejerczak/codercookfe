import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ModalBox = (props) => {
  const takeId = useSelector((state) => state.recipe.selectedId);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ingredients Required
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Grilled Chicken Kebab with Fries</h4>
        <ul>
          <li>Chicken</li>
          <li>French Fries</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Link as={Link} to={`recipe/${takeId}`}>
          <Button>See Detailed Recipe</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBox;
