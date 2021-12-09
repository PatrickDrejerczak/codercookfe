import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from "react-bootstrap";
import api from "../../redux/api";

const RenderWestern = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchWestern = async () => {
      const res = await api.get("recipe/category/western");
      console.log("western data", res);
      setData(res.data.data.recipes);
    };
    fetchWestern();
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

export default RenderWestern;
