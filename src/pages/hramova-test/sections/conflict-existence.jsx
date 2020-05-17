import React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../directives/create-question/create-question";
import updateDb from "../../../directives/update-db";
import hramovaTest from "../../../data/hramova-test";

function ConflictExistence() {
  return (
    <div>
      <Title titleText="1. Наличие конфликта" />

      {createQuestion(
        `${hramovaTest[0].question.humanName}`,
        `${hramovaTest[0].question.text}`,
        [
          [hramovaTest[0].answers[0].humanName, hramovaTest[0].answers[0].text],
          [hramovaTest[0].answers[1].humanName, hramovaTest[0].answers[1].text],
        ]
      )}

      <FormNavigation
        id="navigation-conflict-existence"
        backLink="/"
        forwardLink="/Hramova-test/conflict-object"
        onClick={() => updateDb()}
      />
    </div>
  );
}

export default ConflictExistence;
