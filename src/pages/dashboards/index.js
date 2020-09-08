import React, { useEffect, useState } from "react";
import Admin from "./admin";
import Staff from "./staff";
import User from "./user";

export function Dashboard(props) {
  const [data, setData] = useState([]);

  function loadData() {
    fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      userId: localStorage.getItem("userId"),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  if (localStorage.getItem("roles") === null) {
    return <div className="pa4">Loading dashboard...</div>;
  }

  return (
    <div>
      <div className="pa4 ph3 pv2 bb b--green bg-transparent grow f5 dib">
        <h1>Hi {localStorage.getItem("name")}!</h1>
      </div>
      {localStorage.getItem("roles") === "ROLE_ADMIN" ? (
        <Admin data={data} />
      ) : (
        ""
      )}
      {localStorage.getItem("roles").includes("ROLE_STAFF") ? (
        <Staff data={data} />
      ) : (
        ""
      )}
      {localStorage.getItem("roles").includes("ROLE_USER") ? (
        <User data={data} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
