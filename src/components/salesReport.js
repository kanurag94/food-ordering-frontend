import React, { useEffect, useState } from "react";

export function SalesReport({ data }) {
  const [openOrders, setOpenOrders] = useState([]);
  const [closedOrders, setClosedOrders] = useState([]);
  const [openRevenue, setOpenRevenue] = useState(0);
  const [closedRevenue, setClosedRevenue] = useState(0);

  function getSum(total, num) {
    for (let i = 0; i < num.length; i++) {
      total += num[i].amount;
    }
    console.log(num);
    return total;
  }

  function calculateData() {
    console.log(data);
    setOpenOrders(data.filter((order) => !order.isComplete));
    setClosedOrders(data.filter((order) => order.isComplete));
    setOpenRevenue(
      getSum(
        0,
        data.filter((order) => !order.isComplete)
      )
    );
    setClosedRevenue(
      getSum(
        0,
        data.filter((order) => order.isComplete)
      )
    );
  }

  useEffect(() => {
    calculateData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pa4">
      <h1>Sales Report</h1>
      <table className="f6 w-100 mw8 center">
        <thead>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
            Open Orders
          </th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
            Closed Orders
          </th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
            Total Orders
          </th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
            Received Revenue
          </th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
            Pending Revenue
          </th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
            Total Revenue
          </th>
        </thead>
        <tbody className="lh-copy">
          <tr>
            <td className="pv3 pr3 bb b--black-20">{openOrders.length}</td>
            <td className="pv3 pr3 bb b--black-20">{closedOrders.length}</td>
            <td className="pv3 pr3 bb b--black-20">
              {closedOrders.length + openOrders.length}
            </td>
            <td className="pv3 pr3 bb b--black-20">{openRevenue}</td>
            <td className="pv3 pr3 bb b--black-20">{closedRevenue}</td>
            <td className="pv3 pr3 bb b--black-20">
              {openRevenue + closedRevenue}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
