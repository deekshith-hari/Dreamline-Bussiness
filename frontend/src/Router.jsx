import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Generate from "./containers/Generate";
import YourBackground from "./containers/YourBackground";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/generate"} component={Generate} />
        <Route exact path={"/userbackground"} component={YourBackground} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </>
  );
};
export default Router;
