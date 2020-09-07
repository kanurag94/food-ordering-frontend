import React from "react";
import { AllProducts } from "./products/allProducts";
import CreateProduct from "./products/createProduct";

export default function Index() {
  return (
    <div>
      {localStorage.getItem("roles") === "ROLE_ADMIN" ? <CreateProduct /> : ""}
      <AllProducts />
    </div>
  );
}
