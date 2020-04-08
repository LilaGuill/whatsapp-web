import React from "react";
import FontAwesonme from "react-fontawesome";
import StyledSearchBar from "../elements/StyledSearchBar";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <label className="searchbar--label">
        <FontAwesonme name="search" className="searchbar--icon" />

        <input
          className="searchbar--input"
          placeholder="Rechercher ou Démarrer une discussion"
        />
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;
