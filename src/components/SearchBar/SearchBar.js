import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <InputGroup id="searchBar" style={{ width: "20vw" }}>
      <FormControl
        type="text"
        className="mr-sm-2"
        placeholder="What are you craving for..."
        value={searchInput}
        onChange={handleInput}
        width="40px"
      />
      <Link to={`/search/${searchInput}`}>
        <Button variant="danger" id="button-addon1">
          Search
        </Button>
      </Link>
    </InputGroup>
  );
};

export default SearchBar;
