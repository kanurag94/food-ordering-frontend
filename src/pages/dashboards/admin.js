import React from "react";
import { Orders } from "../../components/orders";
import SignUpCustom from "../auth/signUpCustom";
import CreateProduct from "../products/createProduct";
import SalesReport from "../../components/salesReport";

export function Admin({ data }) {
  return (
    <div>
      <div className="flex flex-wrap ">
        <div>
          <SalesReport userType="admin" data={data} />
        </div>
        <div className="bl">
          <SignUpCustom />
        </div>
        <div className="bl">
          <CreateProduct />
        </div>
      </div>
      <div>
        <Orders
          userType="admin"
          title="Open Orders"
          data={data.filter((order) => !order.isComplete)}
        />
      </div>
      <div>
        <Orders
          userType="admin"
          title="Closed Orders"
          data={data.filter((order) => order.isComplete)}
        />
      </div>
    </div>
  );
}

export default Admin;
