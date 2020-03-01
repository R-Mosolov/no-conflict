import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "./logo/logo";
import Welcome from "../pages/welcome";

import ConflictType from "../pages/conflict-type";
import Psychotherapist from "../pages/psychotherapist";
import Psychologist from "../pages/psychologist";

import Psychotype from "../pages/psychotype";
import Context from "../pages/context";
import Solution from "../pages/solution";

function App() {
  return (
      <Router>
          <div className="App container w-50">
              <Logo />

              <Route path="/" exact component={ Welcome } />

              <Route path="/sections/conflict-type" exact component={ ConflictType } />
              <Route path="/psychologist" exact component={ Psychologist } />
              <Route path="/psychotherapist" exact component={ Psychotherapist } />

              <Route path="/sections/psychotype" exact component={ Psychotype } />
              <Route path="/sections/context" exact component={ Context } />
              <Route path="/solution" exact component={ Solution } />
          </div>
      </Router>
  );
}

export default App;
