import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from "react-bootstrap";
import api from "../../redux/api";

const RenderMexican = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMexican = async () => {
      const res = await api.get("recipe/category/mexican");
      console.log("mexican data", res);
      setData(res.data.data.recipes);
    };
    fetchMexican();
  }, []);
  console.log("data", data);
  return (
    <Row>
      {data.map((recipe) => (
        <Col sm={4}>
          {" "}
          <RecipeCard recipe={recipe} />
        </Col>
      ))}
    </Row>
  );
};

export default RenderMexican;
