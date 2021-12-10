import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/auth.action";
import { routeActions } from "../../redux/actions/route.action";

import "./CreateUserModal.css";

const CreateUserModal = (props) => {
  console.log(props);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.route.redirectTo);

  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formData;
    if (password !== password2) {
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    }
    // TODO: handle Register
    dispatch(authActions.register(name, email, password));
    setFormData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
    // window.location.reload(false);
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
      onHide={() => props.setShow(false)}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="signUpContainer">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="signUpInput">
                  <div className="text-center">
                    {formData.avatarUrl && (
                      <div className="mb-3">
                        <img
                          src={formData.avatarUrl}
                          className="avatar-lg"
                          alt="avatar"
                        />
                      </div>
                    )}
                  </div>
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <small className="form-text text-danger">
                      {errors.name}
                    </small>
                  )}
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <small className="form-text text-danger">
                      {errors.email}
                    </small>
                  )}
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <small className="form-text text-danger">
                      {errors.password}
                    </small>
                  )}
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={formData.password2}
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
                    onClick={() => props.setShow(false)}
                  >
                    Create New User
                  </Button>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => props.setShow(false)}
          variant="success"
          className="footerButton"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateUserModal;
