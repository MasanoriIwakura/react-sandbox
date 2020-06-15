import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import GridLayout from "./pages/GridLayout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/grid">
          <GridLayout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
