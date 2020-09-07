import React from "react";
import { Orders } from "../../components/orders";

export function Staff({ orders }) {
  return (
    <div>
      <div>
        <Orders
          userType="staff"
          title="Open Orders"
          data={orders.filter((order) => !order.isComplete)}
        />
      </div>
      <div>
        <Orders
          userType="staff"
          title="Closed Orders"
          data={orders.filter((order) => order.isComplete)}
        />
      </div>
    </div>
  );
}

export default Staff;
