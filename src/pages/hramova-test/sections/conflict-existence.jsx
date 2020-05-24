import React from "react";

import Title from "../../../components/title";
import SectionNavigation from "../../../components/section-navigation";

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

      <SectionNavigation
        id="navigation-conflict-existence"
        backLink="/"
        // forwardLink="/Hramova-test/conflict-object"
        onClick={() => sendToDb("hramova-test", "hramova-test-answer")}
      />
    </div>
  );
}

export default ConflictExistence;
