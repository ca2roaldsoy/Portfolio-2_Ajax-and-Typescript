import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

// Searchbar
function Search({ handleInput }) {
  return (
    <InputGroup className="search">
      <FormControl
        placeholder="Search..."
        onChange={e => handleInput(e)}
        role="search-input"
      />
    </InputGroup>
  );
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired
};

export default Search;
