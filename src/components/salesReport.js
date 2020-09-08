import React from "react";

export function SalesReport({ data }) {
  function getSum(total, num) {
    for (let i = 0; i < num.length; i++) {
      total += num[i].amount;
    }
    return total;
  }

  const openOrders = data.filter((order) => !order.isComplete);
  const closedOrders = data.filter((order) => order.isComplete);
  const openRevenue = getSum(0, openOrders);
  const closedRevenue = getSum(0, closedOrders);

  return (
    <div className="pa4">
      <h1>Sales Report</h1>
      <table className="f6 w-100 mw8 center">
        <thead>
          <tr>
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
              Pending Revenue
            </th>
            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
              Received Revenue
            </th>
            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
              Total Revenue
            </th>
          </tr>
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

export default SalesReport;
