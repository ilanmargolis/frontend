import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={SignIn} exact path="/" />
      <Route component={Home} exact path="/home" />
      <Route component={ForgotPassword} exact path="/forgotpassword" />
    </Switch>
  </BrowserRouter>
);