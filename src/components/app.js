import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Logo from "./logo/logo";
import Welcome from "../pages/welcome";
import ChramovaContacts from "../pages/chramova-contacts";

import ConflictExistence from "../pages/chramova-questions/conflict-existence";
import ConflictObject from "../pages/chramova-questions/conflict-object";
import ConflictReasonAndPlace from "../pages/chramova-questions/conflict-reason-and-place";
import Recommendation from "../pages/chramova-questions/recommendation";


import QuestionsFromOneToTen from "../pages/kilmann-tomas-questions/questions-1-10";
import QuestionsFromElevenToTwenty from "../pages/kilmann-tomas-questions/questions-11-20";
import QuestionsFromTwentyOneToThirty from "../pages/kilmann-tomas-questions/questions-21-30";
import RecommendationForTomasKilmann from "../pages/kilmann-tomas-questions/recommendation-tk/recommendation-tk";

import Psychologist from "../pages/stop-pages/psychologist";
import Consultation from "../pages/stop-pages/consultation";


function App() {
  return (
      <Router>
          <div className="App container w-50">
              <Logo />

              <main>
                  <Route path="/" exact component={ Welcome } />
                  <Route path="/chramova-contacts" component={ ChramovaContacts } />

                  <Route path="/sections/conflict-existence" component={ ConflictExistence } />
                  <Route path="/sections/conflict-object" component={ ConflictObject } />
                  <Route path="/sections/conflict-reason-and-place" component={ ConflictReasonAndPlace } />
                  <Route path="/sections/recommendation" component={ Recommendation } />

                  <Route path="/psychologist" component={ Psychologist } />
                  <Route path="/consultation" component={ Consultation } />

                  <Route path="/sections/tomas-kilmann-1" component={ QuestionsFromOneToTen } />
                  <Route path="/sections/tomas-kilmann-2" component={ QuestionsFromElevenToTwenty } />
                  <Route path="/sections/tomas-kilmann-3" component={ QuestionsFromTwentyOneToThirty } />
                  <Route path="/sections/recommendation-tk" component={ RecommendationForTomasKilmann } />
              </main>
          </div>
      </Router>
  );
}

export default App;
