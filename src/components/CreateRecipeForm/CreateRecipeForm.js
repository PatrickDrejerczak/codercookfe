import React from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";
import ImgUploadButton from "../ImgUploadButton/ImgUploadButton";

const CreateRecipeForm = () => {
  return (
    <div>
      <h2>Name your dish</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <br />
      <h2>Required Main Ingredients</h2>
      <InputGroup>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">Chicken</option>
          <option value="2">Fish</option>
          <option value="3">Pork</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="Number" placeholder="Enter required amount" />
        </Form.Group>
      </InputGroup>
      <br />
      <h2>Required Spices</h2>
      <InputGroup>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">Pepper</option>
          <option value="2">Salt</option>
          <option value="3">Chilli</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="Number" placeholder="Enter required amount" />
        </Form.Group>
      </InputGroup>
      <br />
      <h2>Cooking Instructions</h2>
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <br />
      <ImgUploadButton />
      <Button variant="primary">Submit</Button>
      <br />
    </div>
  );
};

export default CreateRecipeForm;
