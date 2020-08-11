import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
