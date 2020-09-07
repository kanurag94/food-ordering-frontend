import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

    fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken !== null) {
          this.setState({ redirect: true });
        }
        console.log(data);
        if (data["message"] === "User Not found.") {
          alert("User Not Found");
          return;
        }
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("name", data.username);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("roles", data.roles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <main className="pa4 black-80">
          <form className="measure center" onSubmit={this.handleSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">
                  Username
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="username"
                  id="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
          </form>
        </main>
        {this.state.redirect ? <Redirect to="/success" /> : null}
      </div>
    );
  }
}

export default SignIn;
