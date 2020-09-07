import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      price: "",
      quantity: "",
      redirect: false,
    };
  }

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        imageUrl: this.state.imageUrl,
        price: this.state.price,
        quantity: this.state.quantity,
      }),
      userId: localStorage.getItem("userId"),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ redirect: true });
        window.location.reload();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="pa4">
        <main className="pa4 black-80">
          <form className="measure" onSubmit={this.handleSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Add New Product</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="imageUrl">
                  Image Url
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="price">
                  Price
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="number"
                  name="price"
                  id="price"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="number"
                  name="quantity"
                  id="quantity"
                  onChange={this.handleChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </main>
        {this.state.redirect ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default CreateProduct;
