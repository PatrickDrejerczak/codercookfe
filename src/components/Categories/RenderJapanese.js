import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from "react-bootstrap";
import api from "../../redux/api";

const RenderJapanese = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchJapanese = async () => {
      const res = await api.get("recipe/category/japanese");
      console.log("japanese data", res);
      setData(res.data.data.recipes);
    };
    fetchJapanese();
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

export default RenderJapanese;
