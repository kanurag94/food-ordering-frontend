import React from "react";
import { Orders } from "../../components/orders";

export function Staff({ data }) {
  return (
    <div>
      <div>
        <Orders
          userType="staff"
          title="Open Orders"
          data={data.filter((order) => !order.isComplete)}
        />
      </div>
      <div>
        <Orders
          userType="staff"
          title="Closed Orders"
          data={data.filter((order) => order.isComplete)}
        />
      </div>
    </div>
  );
}

export default Staff;
