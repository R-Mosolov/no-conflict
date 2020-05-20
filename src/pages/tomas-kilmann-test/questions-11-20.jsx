import * as React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";

import createQuestionForTomasKilmann from "../../functions/create-question/create-question-tk/create-question-tk";
import sendToDb from "../../server/functions/send-to-db";
const tomasKilmannTest = require("../../data/tomas-kilmann-test.json");

function QuestionsFromElevenToTwenty() {
  return (
    <div>
      <Title titleText="Тест Томаса-Килманна" />

      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[10].question.name}`,
        `${tomasKilmannTest[10].question.text}`,
        [
          [
            tomasKilmannTest[10].answers[0].name,
            tomasKilmannTest[10].answers[0].text,
          ],
          [
            tomasKilmannTest[10].answers[1].name,
            tomasKilmannTest[10].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[11].question.name}`,
        `${tomasKilmannTest[11].question.text}`,
        [
          [
            tomasKilmannTest[11].answers[0].name,
            tomasKilmannTest[11].answers[0].text,
          ],
          [
            tomasKilmannTest[11].answers[1].name,
            tomasKilmannTest[11].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[12].question.name}`,
        `${tomasKilmannTest[12].question.text}`,
        [
          [
            tomasKilmannTest[12].answers[0].name,
            tomasKilmannTest[12].answers[0].text,
          ],
          [
            tomasKilmannTest[12].answers[1].name,
            tomasKilmannTest[12].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[13].question.name}`,
        `${tomasKilmannTest[13].question.text}`,
        [
          [
            tomasKilmannTest[13].answers[0].name,
            tomasKilmannTest[13].answers[0].text,
          ],
          [
            tomasKilmannTest[13].answers[1].name,
            tomasKilmannTest[13].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[14].question.name}`,
        `${tomasKilmannTest[14].question.text}`,
        [
          [
            tomasKilmannTest[14].answers[0].name,
            tomasKilmannTest[14].answers[0].text,
          ],
          [
            tomasKilmannTest[14].answers[1].name,
            tomasKilmannTest[14].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[15].question.name}`,
        `${tomasKilmannTest[15].question.text}`,
        [
          [
            tomasKilmannTest[15].answers[0].name,
            tomasKilmannTest[15].answers[0].text,
          ],
          [
            tomasKilmannTest[15].answers[1].name,
            tomasKilmannTest[15].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[16].question.name}`,
        `${tomasKilmannTest[16].question.text}`,
        [
          [
            tomasKilmannTest[16].answers[0].name,
            tomasKilmannTest[16].answers[0].text,
          ],
          [
            tomasKilmannTest[16].answers[1].name,
            tomasKilmannTest[16].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[17].question.name}`,
        `${tomasKilmannTest[17].question.text}`,
        [
          [
            tomasKilmannTest[17].answers[0].name,
            tomasKilmannTest[17].answers[0].text,
          ],
          [
            tomasKilmannTest[17].answers[1].name,
            tomasKilmannTest[17].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[18].question.name}`,
        `${tomasKilmannTest[18].question.text}`,
        [
          [
            tomasKilmannTest[18].answers[0].name,
            tomasKilmannTest[18].answers[0].text,
          ],
          [
            tomasKilmannTest[18].answers[1].name,
            tomasKilmannTest[18].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[19].question.name}`,
        `${tomasKilmannTest[19].question.text}`,
        [
          [
            tomasKilmannTest[19].answers[0].name,
            tomasKilmannTest[19].answers[0].text,
          ],
          [
            tomasKilmannTest[19].answers[1].name,
            tomasKilmannTest[19].answers[1].text,
          ],
        ]
      )}

      <FormNavigation
        backLink="/Tomas-Kilmann-test/section-1"
        forwardLink="/Tomas-Kilmann-test/section-3"
        onClick={() => sendToDb()}
      />
    </div>
  );
}

export default QuestionsFromElevenToTwenty;
