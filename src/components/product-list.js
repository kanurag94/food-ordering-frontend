import { fetchMaterials } from "../services/material-service";
import React, { useEffect, useRef, useState } from "react";
import MaterialCard from "../material-card";
import NotifyingLoader from "./notifying-loader";

export function ProductList() {
  const [data, setData] = useState([]);
  const page = useRef(0);

  function _loadNextBatch() {
    const pageIndex = page.current++;

    fetchMaterials({}).then((materials) => {
      setData((data) => data.concat(materials));
    });
  }

  useEffect(() => {
    _loadNextBatch();
  }, []);

  if (!data.length) {
    return <div className="pa4">The materials are loading...</div>;
  }

  return (
    <>
      <ul className="list pl0 cf">
        {data.map((material) => (
          <MaterialCard material={material} />
        ))}
        <NotifyingLoader />
      </ul>
    </>
  );
}
