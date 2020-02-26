import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "./logo/logo";
import Main from "../pages/main";
import Psychologist from "../pages/psychologist";
import Psychotherapist from "../pages/psychotherapist";

function App() {
  return (
      <Router>
          <div className="App container w-50">
              <Logo />
              <Route path="/" exact component={ Main } />
              <Route path="/psychologist" exact component={ Psychologist } />
              <Route path="/psychotherapist" exact component={ Psychotherapist } />
          </div>
      </Router>
  );
}

export default App;
