import React from "react";
import { Orders } from "../../components/orders";

export function User({ data }) {
  return (
    <div>
      <div>
        <Orders
          userType="user"
          title="Open Orders"
          data={data.filter((order) => !order.isComplete)}
        />
      </div>
      <div>
        <Orders
          userType="user"
          title="Closed Orders"
          data={data.filter((order) => order.isComplete)}
        />
      </div>
    </div>
  );
}

export default User;
