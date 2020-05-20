import React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../functions/create-question/create-question";
import sendToDb from "../../../server/functions/send-to-db";
import hramovaTest from "../../../data/hramova-test";

function ConflictExistence() {
  return (
    <div>
      <Title titleText="1. Наличие конфликта" />

      {createQuestion(
        `${hramovaTest[0].question.name}`,
        `${hramovaTest[0].question.text}`,
        [
          [hramovaTest[0].answers[0].name, hramovaTest[0].answers[0].text],
          [hramovaTest[0].answers[1].name, hramovaTest[0].answers[1].text],
        ]
      )}

      <FormNavigation
        id="navigation-conflict-existence"
        backLink="/"
        forwardLink="/Hramova-test/conflict-object"
        onClick={() => sendToDb()}
      />
    </div>
  );
}

export default ConflictExistence;
