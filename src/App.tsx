import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Admin from "./pages/Admin";

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
      </Switch>
    </Router>
  );
};

const Home = () => {
  return (
    <>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/admin">ReactAdmin</Link>
      </li>
    </ul>
    </>
  );
};

const About = () => {
  return <h2>About</h2>;
};

export default App;
