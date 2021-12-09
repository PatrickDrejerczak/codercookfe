import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from "react-bootstrap";
import api from "../../redux/api";

const RenderVegetarian = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchVegetarian = async () => {
      const res = await api.get("recipe/category/vegetarian");
      console.log("vegetarian data", res);
      setData(res.data.data.recipes);
    };
    fetchVegetarian();
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

export default RenderVegetarian;
