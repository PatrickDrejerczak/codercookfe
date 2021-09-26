import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import data from "../../data";
import { Row, Col } from "react-bootstrap";

const RenderItalian = () => {
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

export default RenderItalian;
