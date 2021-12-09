import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ingredientActions from "../../redux/actions/ingredient.action";
import { routeActions } from "../../redux/actions/route.action";

import "./CreateIngredient.css";

const CreateIngredient = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    unit: "",
  });

  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.route.redirectTo);

  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, unit } = formData;

    // TODO: handle Register
    dispatch(ingredientActions.createIngredient(name, type, unit));
    window.location.reload(false);
  };

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "/admin/profile") {
        dispatch(routeActions.removeRedirectTo());
      } else {
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [dispatch, redirectTo]);

  console.log(props);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Ingredient
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="signUpContainer">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="text"
                    placeholder="main or spice"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="text"
                    placeholder="unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                  />
                </Form.Group>

                {loading ? (
                  <Button
                    className="btn-block"
                    variant="primary"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </Button>
                ) : (
                  <Button
                    className="btn-block signUpButton"
                    type="submit"
                    variant="primary"
                  >
                    Create New Ingredient
                  </Button>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          variant="success"
          className="footerButton"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateIngredient;
