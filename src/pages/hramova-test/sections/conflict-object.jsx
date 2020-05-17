import * as React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../directives/create-question/create-question";
import updateDb from "../../../directives/update-db";
import hramovaTest from "../../../data/hramova-test";

function ConflictObject() {
  return (
    <div>
      <Title titleText="2. Тип конфликта" />

      {createQuestion(
        `${hramovaTest[1].question.name}`,
        `${hramovaTest[1].question.text}`,
        [
          [
            `${hramovaTest[1].answers[0].name}`,
            `${hramovaTest[1].answers[0].text}`,
          ],
          [
            `${hramovaTest[1].answers[1].name}`,
            `${hramovaTest[1].answers[1].text}`,
          ],
          [
            `${hramovaTest[1].answers[2].name}`,
            `${hramovaTest[1].answers[2].text}`,
          ],
        ]
      )}

      <FormNavigation
        id="navigation-conflict-object"
        backLink="/Hramova-test/conflict-existence"
        forwardLink="/Hramova-test/conflict-reason-and-place"
        onClick={() => updateDb()}
      />
    </div>
  );
}

export default ConflictObject;
