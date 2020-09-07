import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MaterialCard(props) {
  const { material } = props;
  return (
    <li className="db w-100 pa4 fl">
      <Link to={`/products/${material.id}`} className="db color-inherit">
        <div className="dib w-20 fl">
          <img
            src={material.imageUrl}
            alt="Thumbnail of resource"
            className="w-100"
          />
        </div>
        <div className="dib w-80 fl pl3">
          <h3 className="f5 mt0 mb2">Rs. {material.price}</h3>
          <h3 className="f5 mt0 mb2">Stock Left: {material.quantity}</h3>
        </div>
      </Link>
    </li>
  );
}
