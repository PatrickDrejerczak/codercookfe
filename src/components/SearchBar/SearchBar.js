import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import "./SearchBar.css";
import recipeActions from "../../redux/actions/recipe.action";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const searchRecipes = useSelector((state) => state.recipe.searchRecipes);
  const handleInput = (e) => {
    setSearchInput(e.target.value);
    dispatch(recipeActions.searchRecipe({ search: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: "100%" }}>
      <Form id="searchBar" onSubmit={handleSubmit} className="input-wrapper">
        <FormControl
          type="text"
          className="mr-sm-2"
          placeholder="What are you craving for..."
          value={searchInput}
          onChange={handleInput}
          width="100%"
        />
        {/* <Button variant="danger" id="button-addon1">
    Search
  </Button> */}
        <div className="search-drop-down">
          <Table striped bordered hover size="sm">
            <tbody>
              {searchRecipes.map((recipe, index) => (
                <tr>
                  <td className="reihe">
                    {" "}
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/recipe/${recipe._id}`}
                    >
                      {recipe.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <FontAwesomeIcon icon="search" size="2x" className="searchIcon" />
      </Form>
    </div>
  );
};

export default SearchBar;
