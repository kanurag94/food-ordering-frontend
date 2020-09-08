import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/not-found";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import Dashboard from "./pages/dashboards/index";
import Navbar from "./components/navbar";
import { SingleProduct } from "./pages/products/singleProduct";

function App() {
  return (
    <div className="w-100 center pa3 sans-serif">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
