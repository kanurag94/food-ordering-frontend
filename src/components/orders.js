import React from "react";

export function Orders({ userType, data, title }) {
  function handleComplete(e) {
    fetch(`http://localhost:8080/api/orders/${e.target.value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      userId: localStorage.getItem("userId"),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data["message"]);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!data.length) {
    return (
      <div className="pa4 ph3 pv4 bb b--red bg-transparent grow f5 dib">
        No {title} found
      </div>
    );
  }

  return (
    <div className="pa4">
      <div className="overflow-auto">
        <h1>{title}</h1>
        <table className="f6 w-100 mw8 center">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Order Id
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Item Id
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Amount</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                User Id
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Staff Id
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Pincode
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ETA</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Complete
              </th>
              {userType === "admin" || userType === "staff" ? (
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                  Mark as Complete
                </th>
              ) : (
                ""
              )}
            </tr>
          </thead>
          <tbody className="lh-copy">
            {data.map((order) => (
              <tr key={order.id}>
                <td className="pv3 pr3 bb b--black-20">{order.id}</td>
                <td className="pv3 pr3 bb b--black-20">{order.itemId}</td>
                <td className="pv3 pr3 bb b--black-20">{order.amount}</td>
                <td className="pv3 pr3 bb b--black-20">{order.userId}</td>
                <td className="pv3 pr3 bb b--black-20">{order.staffId}</td>
                <td className="pv3 pr3 bb b--black-20">{order.orderPincode}</td>
                <td className="pv3 pr3 bb b--black-20">{order.eta}</td>
                <td className="pv3 pr3 bb b--black-20">
                  {order.isComplete ? "Yes" : "No"}
                </td>
                {userType === "admin" || userType === "staff" ? (
                  <td className="pv3 pr3 bb b--black-20">
                    {!order.isComplete ? (
                      <button
                        className="b ph3 pv2 input-reset ba b--green bg-transparent grow pointer f6 dib"
                        value={order.id}
                        onClick={handleComplete}
                      >
                        Complete Order
                      </button>
                    ) : (
                      <button className="b ph3 pv2 input-reset ba b--green bg-green white grow pointer f6 dib">
                        Completed
                      </button>
                    )}
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
