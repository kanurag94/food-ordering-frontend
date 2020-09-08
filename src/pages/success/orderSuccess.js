import React from "react";

export default function OrderSuccess() {
  return (
    <div className="pa4">
      <h1>Thank You {localStorage.getItem("name")}!</h1>
      <h2>Our Chef is preparing your order!</h2>
      <div>
        <button
          className="b ph3 mr4 pv2 input-reset ba b--green bg-transparent grow pointer f6 dib"
          onClick={(e) => window.location.replace("/")}
        >
          Buy some more cookies?
        </button>
        <button
          className="b ph3 pv2 input-reset ba b--green bg-transparent grow pointer f6 dib"
          onClick={(e) => window.location.replace("/dashboard")}
        >
          Visit Dashboard
        </button>
      </div>
      <div className="pt4">
        <img
          alt="order-success"
          src="https://i.pinimg.com/originals/7b/65/ae/7b65aeeae6d0baecc06eec79beaa295e.gif"
        ></img>
      </div>
    </div>
  );
}
