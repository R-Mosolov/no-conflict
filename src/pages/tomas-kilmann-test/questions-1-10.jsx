import * as React from "react";

import Title from "../../components/title";
import SectionNavigation from "../../components/section-navigation";

import createQuestionForTomasKilmann from "../../functions/create-question/create-question-tk/create-question-tk";
import sendToDb from "../../server/functions/send-to-db";
const tomasKilmannTest = require("../../data/tomas-kilmann-test.json");

function QuestionsFromOneToTen() {
  return (
    <div>
      <Title titleText="Тест Томаса-Килманна" />

      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[0].question.name}`,
        `${tomasKilmannTest[0].question.text}`,
        [
          [
            tomasKilmannTest[0].answers[0].name,
            tomasKilmannTest[0].answers[0].text,
          ],
          [
            tomasKilmannTest[0].answers[1].name,
            tomasKilmannTest[0].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[1].question.name}`,
        `${tomasKilmannTest[1].question.text}`,
        [
          [
            tomasKilmannTest[1].answers[0].name,
            tomasKilmannTest[1].answers[0].text,
          ],
          [
            tomasKilmannTest[1].answers[1].name,
            tomasKilmannTest[1].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[2].question.name}`,
        `${tomasKilmannTest[2].question.text}`,
        [
          [
            tomasKilmannTest[2].answers[0].name,
            tomasKilmannTest[2].answers[0].text,
          ],
          [
            tomasKilmannTest[2].answers[1].name,
            tomasKilmannTest[2].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[3].question.name}`,
        `${tomasKilmannTest[3].question.text}`,
        [
          [
            tomasKilmannTest[3].answers[0].name,
            tomasKilmannTest[3].answers[0].text,
          ],
          [
            tomasKilmannTest[3].answers[1].name,
            tomasKilmannTest[3].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[4].question.name}`,
        `${tomasKilmannTest[4].question.text}`,
        [
          [
            tomasKilmannTest[4].answers[0].name,
            tomasKilmannTest[4].answers[0].text,
          ],
          [
            tomasKilmannTest[4].answers[1].name,
            tomasKilmannTest[4].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[5].question.name}`,
        `${tomasKilmannTest[5].question.text}`,
        [
          [
            tomasKilmannTest[5].answers[0].name,
            tomasKilmannTest[5].answers[0].text,
          ],
          [
            tomasKilmannTest[5].answers[1].name,
            tomasKilmannTest[5].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[6].question.name}`,
        `${tomasKilmannTest[6].question.text}`,
        [
          [
            tomasKilmannTest[6].answers[0].name,
            tomasKilmannTest[6].answers[0].text,
          ],
          [
            tomasKilmannTest[6].answers[1].name,
            tomasKilmannTest[6].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[7].question.name}`,
        `${tomasKilmannTest[7].question.text}`,
        [
          [
            tomasKilmannTest[7].answers[0].name,
            tomasKilmannTest[7].answers[0].text,
          ],
          [
            tomasKilmannTest[7].answers[1].name,
            tomasKilmannTest[7].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[8].question.name}`,
        `${tomasKilmannTest[8].question.text}`,
        [
          [
            tomasKilmannTest[8].answers[0].name,
            tomasKilmannTest[8].answers[0].text,
          ],
          [
            tomasKilmannTest[8].answers[1].name,
            tomasKilmannTest[8].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[9].question.name}`,
        `${tomasKilmannTest[9].question.text}`,
        [
          [
            tomasKilmannTest[9].answers[0].name,
            tomasKilmannTest[9].answers[0].text,
          ],
          [
            tomasKilmannTest[9].answers[1].name,
            tomasKilmannTest[9].answers[1].text,
          ],
        ]
      )}

      <SectionNavigation
        backLink="/Hramova-test/recommendation"
        forwardLink="/Tomas-Kilmann-test/section-2"
        onClick={() => sendToDb("tomas-kilmann-test", "tk-test-answer")}
      />
    </div>
  );
}

export default QuestionsFromOneToTen;
