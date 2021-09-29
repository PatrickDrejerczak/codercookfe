import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from "react-bootstrap";
import api from "../../redux/api";

const RenderItalian = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchItalian = async () => {
      const res = await api.get("recipe/category/italian");
      console.log("italinen data", res);
      setData(res.data.data.recipes);
    };
    fetchItalian();
  }, []);
  console.log("data", data);
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
