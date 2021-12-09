import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from "react-bootstrap";
import api from "../../redux/api";

const RenderChinese = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchChinese = async () => {
      const res = await api.get("recipe/category/chinese");
      console.log("chinese data", res);
      setData(res.data.data.recipes);
    };
    fetchChinese();
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

export default RenderChinese;
