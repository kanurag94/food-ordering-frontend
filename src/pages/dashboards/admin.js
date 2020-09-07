import React from "react";
import { Orders } from "../../components/orders";
import SignUpCustom from "../auth/signUpCustom";
import CreateProduct from "../products/createProduct";
import { SalesReport } from "../../components/salesReport";

export function Admin({ orders }) {
  return (
    <div>
      <div className="bb">
        <SalesReport userType="admin" data={orders} />
      </div>
      <div>
        <Orders
          userType="admin"
          title="Open Orders"
          data={orders.filter((order) => !order.isComplete)}
        />
      </div>
      <div>
        <Orders
          userType="admin"
          title="Closed Orders"
          data={orders.filter((order) => order.isComplete)}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="bl">
          <SignUpCustom />
        </div>
        <div className="bl">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
}

export default Admin;
