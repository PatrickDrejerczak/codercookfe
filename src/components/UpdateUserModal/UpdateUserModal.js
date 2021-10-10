import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/auth.action";

import "./UpdateUserModal.css";

const UpdateUserModal = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const selectedUser = useSelector((state) => state.auth.userById);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    // TODO: handle Register
    dispatch(authActions.updateProfile(name, email));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Selected User
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
                  Hello
                </Form.Group>
                <Form.Group className="signUpInput">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  Hello
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

export default UpdateUserModal;
