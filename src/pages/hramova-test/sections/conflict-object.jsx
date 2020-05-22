import * as React from "react";

import Title from "../../../components/title";
import SectionNavigation from "../../../components/section-navigation";

import createQuestion from "../../../functions/create-question/create-question";
import sendToDb from "../../../server/functions/send-to-db";
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

      <SectionNavigation
        backLink="/Hramova-test/conflict-existence"
        forwardLink="/Hramova-test/conflict-reason-and-place"
        onClick={() => sendToDb("hramova-test", "hramova-test-answer")}
      />
    </div>
  );
}

export default ConflictObject;
