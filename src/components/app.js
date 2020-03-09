import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "./logo/logo";
import Welcome from "../pages/welcome";

import ConflictExistence from "../pages/chramova-questions/conflict-existence";
import ConflictType from "../pages/chramova-questions/conflict-type";
import Psychotype from "../pages/chramova-questions/psychotype";

import QuestionsFromOneToTen from "../pages/kilmann-tomas-questions/questions-1-10";
import QuestionsFromElevenToTwenty from "../pages/kilmann-tomas-questions/questions-11-20";
import QuestionsFromTwentyOneToThirty from "../pages/kilmann-tomas-questions/questions-21-30";

import Psychologist from "../pages/stop-pages/psychologist";
import Psychotherapist from "../pages/stop-pages/psychotherapist";
import Consultation from "../pages/stop-pages/consultation";

import Recommendation from "../pages/chramova-questions/recommendation";

function App() {
  return (
      <Router>
          <div className="App container w-50">
              <Logo />

              <Route path="/" exact component={ Welcome } />

              <Route path="/sections/conflict-existence" exact component={ ConflictExistence } />
              <Route path="/sections/conflict-type" exact component={ ConflictType } />
              <Route path="/sections/psychotype" exact component={ Psychotype } />
              <Route path="/sections/recommendation" exact component={ Recommendation } />

              <Route path="/psychologist" exact component={ Psychologist } />
              <Route path="/psychotherapist" exact component={ Psychotherapist } />
              <Route path="/consultation" exact component={ Consultation } />

              <Route path="/sections/tomas-kilmann-1" exact component={ QuestionsFromOneToTen } />
              <Route path="/sections/tomas-kilmann-2" exact component={ QuestionsFromElevenToTwenty } />
              <Route path="/sections/tomas-kilmann-3" exact component={ QuestionsFromTwentyOneToThirty } />
          </div>
      </Router>
  );
}

export default App;
