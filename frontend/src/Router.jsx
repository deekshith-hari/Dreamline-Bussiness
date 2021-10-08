import React from "react";
import { Route, Switch } from "react-router";

import Home from "./containers/Home";
import Generate from "./containers/Generate";
import Logo from "./containers/Logo";
import Info from "./containers/Info";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path="/generate" component={Generate} />
        <Route exact path="/logo" component={Logo} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </>
  );
};
export default Router;
