import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "./logo/logo";
import Welcome from "../pages/welcome";
import Solution from "../pages/solution";
import Main from "../pages/main";
import Psychologist from "../pages/psychologist";
import Psychotherapist from "../pages/psychotherapist";
import Psychotype from "../pages/psychotype";
import Context from "../pages/context";

function App() {
  return (
      <Router>
          <div className="App container w-50">
              <Logo />

              <Route path="/" exact component={ Welcome } />
              <Route path="/solution" exact component={ Solution } />

              <Route path="/sections/conflict-type" exact component={ Main } />
              <Route path="/sections/psychotype" exact component={ Psychotype } />
              <Route path="/sections/context" exact component={ Context } />

              <Route path="/psychologist" exact component={ Psychologist } />
              <Route path="/psychotherapist" exact component={ Psychotherapist } />
          </div>
      </Router>
  );
}

export default App;
