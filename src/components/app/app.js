import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";
import "../../functions/alert-about-closing";

// Importing global pages
import Logo from "../logo/logo";
import Welcome from "../../pages/welcome";
import HramovaContacts from "../../pages/hramova-contacts";
import Psychologist from "../../pages/hramova-test/stop-pages/psychologist";
import Consultation from "../../pages/hramova-test/stop-pages/consultation";

// Importing pages of Hramova's test
import ConflictExistence from "../../pages/hramova-test/sections/conflict-existence";
import ConflictObject from "../../pages/hramova-test/sections/conflict-object";
import ConflictReasonAndPlace from "../../pages/hramova-test/sections/conflict-reason-and-place";
import Recommendation from "../../pages/hramova-test/sections/recommendation/recommendation";

// Importing pages of Tomas-Kilmann's test
import QuestionsFromOneToTen from "../../pages/tomas-kilmann-test/questions-1_10";
import QuestionsFromElevenToTwenty from "../../pages/tomas-kilmann-test/questions-11-20";
import QuestionsFromTwentyOneToThirty from "../../pages/tomas-kilmann-test/questions-21-30";
import RecommendationForTomasKilmann from "../../pages/tomas-kilmann-test/recommendation-tk/recommendation-tk";

function App() {
  return (
    <Router>
      <div className="app container w-50 mb-5">
        <Logo />

        <main>
          <Route path="/" exact component={Welcome} />

          <Route
            path="/Hramova-test/conflict-existence"
            component={ConflictExistence}
          />
          <Route
            path="/Hramova-test/conflict-object"
            component={ConflictObject}
          />
          <Route
            path="/Hramova-test/conflict-reason-and-place"
            component={ConflictReasonAndPlace}
          />
          <Route
            path="/Hramova-test/recommendation"
            component={Recommendation}
          />

          <Route path="/Hramova-contacts" component={HramovaContacts} />
          <Route path="/Hramova-test/psychologist" component={Psychologist} />
          <Route path="/Hramova-test/consultation" component={Consultation} />

          <Route
            path="/Tomas-Kilmann-test/section-1"
            component={QuestionsFromOneToTen}
          />
          <Route
            path="/Tomas-Kilmann-test/section-2"
            component={QuestionsFromElevenToTwenty}
          />
          <Route
            path="/Tomas-Kilmann-test/section-3"
            component={QuestionsFromTwentyOneToThirty}
          />
          <Route
            path="/Tomas-Kilmann-test/recommendation"
            component={RecommendationForTomasKilmann}
          />
        </main>
      </div>
    </Router>
  );
}

export default App;
