import { fetchMaterial } from "../../services/material-service";
import React, { useEffect, useState } from "react";
import MaterialCard from "../../material-card";
import OrderSuccess from "../success/orderSuccess";

export function SingleProduct({ match }) {
  const [data, setData] = useState([]);
  const [pincode, setPincode] = useState("");
  const [redirect, setRedirect] = useState(false);
  const id = match.params.id;

  function loadData() {
    fetchMaterial(id, {}).then((materials) => {
      setData((data) => data.concat(materials));
    });
  }

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setPincode(value);
  };

  const handleDelete = (e) => {
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      userId: localStorage.getItem("userId"),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.message === "Deleted the product successfully") {
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/api/orders/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        itemId: id,
        orderPincode: pincode,
      }),
      userId: localStorage.getItem("userId"),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if ((data["message"] = "Order received successfully!"))
          setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  if (!data.length) {
    return <div className="pa4">Loading...</div>;
  }

  if (redirect) {
    return (
      <div>
        <OrderSuccess />
      </div>
    );
  }

  return (
    <div>
      {data.map((material) => (
        <MaterialCard material={material} key={id} />
      ))}
      <main className="pa4 black-80">
        <form className="measure" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="orderPincode">
                Pincode
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="orderPincode"
                id="orderPincode"
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Order Now"
            />
          </div>
        </form>
      </main>
      {localStorage.getItem("roles") === "ROLE_ADMIN" ? (
        <div className="pa4">
          <input
            className="b ph3 pv2 input-reset ba b--red white bg-red grow pointer f6 dib"
            type="submit"
            value="Delete Product"
            onClick={handleDelete}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
