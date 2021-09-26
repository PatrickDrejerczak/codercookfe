import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import data from "../../data";
import { Col, Row } from "react-bootstrap";

const RenderVegetarian = () => {
  return (
    <Row>
      {data.map((recipe) => (
        <Col lg={3}>
          {" "}
          <RecipeCard recipe={recipe} />
        </Col>
      ))}
    </Row>
  );
};

export default RenderVegetarian;
