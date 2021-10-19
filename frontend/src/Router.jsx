import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Generate from "./containers/Generate";
import Signin from "./containers/Signin";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/generate"} component={Generate} />
        <Route exact path={"/signin"} component={Signin} />
      </Switch>
    </>
  );
};
export default Router;
