import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <h1>Success!</h1>
      <Link to="/">Back to homepage?</Link>
    </div>
  );
}
