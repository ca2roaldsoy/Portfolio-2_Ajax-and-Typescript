import React from "react";
import PropType from "prop-types";

// Display Title for each page
function Title({ title }) {
  return <h1>{title}</h1>;
}

Title.propType = {
  title: PropType.string.isRequired
};

export default Title;
