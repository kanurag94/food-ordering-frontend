import { fetchMaterials } from "../../services/material-service";
import React, { useEffect, useState } from "react";
import MaterialCard from "../../material-card";

export function AllProducts() {
  const [data, setData] = useState([]);

  function _loadNextBatch() {
    fetchMaterials({}).then((materials) => {
      setData((data) => data.concat(materials));
    });
  }

  useEffect(() => {
    _loadNextBatch();
  }, []);

  if (!data.length) {
    return <div className="pa4">Loading Products...</div>;
  }

  return (
    <ul>
      <div className="pl4">
        <h2>All Products</h2>
      </div>
      {data.map((material) => (
        <MaterialCard
          material={material}
          heading="All Products"
          key={material.id}
        />
      ))}
    </ul>
  );
}
