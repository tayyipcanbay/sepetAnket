import React, {Component} from "react";
import {Link} from "react-router-dom";

function ButtonQuestions() {
  return (
    <Link to="/questions">
      <button>Questions</button>
    </Link>
  );
}
export default ButtonQuestions;