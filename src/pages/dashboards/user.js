import React from "react";
import { Orders } from "../../components/orders";

export function User({ orders }) {
  return (
    <div>
      <div>
        <Orders
          userType="user"
          title="Open Orders"
          data={orders.filter((order) => !order.isComplete)}
        />
      </div>
      <div>
        <Orders
          userType="user"
          title="Closed Orders"
          data={orders.filter((order) => order.isComplete)}
        />
      </div>
    </div>
  );
}

export default User;
