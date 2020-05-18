import * as React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../directives/create-question/create-question";
import manageDb from "../../../server/manage-db";
import hramovaTest from "../../../data/hramova-test";

function ConflictReasonAndPlace() {
  return (
    <div>
      <Title titleText="3. Место и причина конфликта" />

      {createQuestion(
        `${hramovaTest[2].question.name}`,
        `${hramovaTest[2].question.text}`,
        [
          [
            `${hramovaTest[2].answers[0].name}`,
            `${hramovaTest[2].answers[0].text}`,
          ],
          [
            `${hramovaTest[2].answers[1].name}`,
            `${hramovaTest[2].answers[1].text}`,
          ],
          [
            `${hramovaTest[2].answers[2].name}`,
            `${hramovaTest[2].answers[2].text}`,
          ],
        ]
      )}

      {createQuestion(
        `${hramovaTest[3].question.name}`,
        `${hramovaTest[3].question.text}`,
        [
          [
            `${hramovaTest[3].answers[0].name}`,
            `${hramovaTest[3].answers[0].text}`,
          ],
          [
            `${hramovaTest[3].answers[1].name}`,
            `${hramovaTest[3].answers[1].text}`,
          ],
          [
            `${hramovaTest[3].answers[2].name}`,
            `${hramovaTest[3].answers[2].text}`,
          ],
        ]
      )}

      <FormNavigation
        id="navigation-conflict-reason-and-place"
        backLink="/Hramova-test/conflict-object"
        forwardLink="/Hramova-test/recommendation"
        onClick={() => manageDb()}
      />
    </div>
  );
}

export default ConflictReasonAndPlace;
