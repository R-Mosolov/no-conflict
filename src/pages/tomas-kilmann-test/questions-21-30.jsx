import * as React from "react";

import Title from "../../components/title";
import SectionNavigation from "../../components/section-navigation";

import createQuestionForTomasKilmann from "../../functions/create-question/create-question-tk/create-question-tk";
import sendToDb from "../../server/functions/send-to-db";
const tomasKilmannTest = require("../../data/tomas-kilmann-test.json");

function QuestionsFromTwentyOneToThirty() {
  return (
    <div>
      <Title titleText="Тест Томаса-Килманна" />

      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[20].question.name}`,
        `${tomasKilmannTest[20].question.text}`,
        [
          [
            tomasKilmannTest[20].answers[0].name,
            tomasKilmannTest[20].answers[0].text,
          ],
          [
            tomasKilmannTest[20].answers[1].name,
            tomasKilmannTest[20].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[21].question.name}`,
        `${tomasKilmannTest[21].question.text}`,
        [
          [
            tomasKilmannTest[21].answers[0].name,
            tomasKilmannTest[21].answers[0].text,
          ],
          [
            tomasKilmannTest[21].answers[1].name,
            tomasKilmannTest[21].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[22].question.name}`,
        `${tomasKilmannTest[22].question.text}`,
        [
          [
            tomasKilmannTest[22].answers[0].name,
            tomasKilmannTest[22].answers[0].text,
          ],
          [
            tomasKilmannTest[22].answers[1].name,
            tomasKilmannTest[22].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[23].question.name}`,
        `${tomasKilmannTest[23].question.text}`,
        [
          [
            tomasKilmannTest[23].answers[0].name,
            tomasKilmannTest[23].answers[0].text,
          ],
          [
            tomasKilmannTest[23].answers[1].name,
            tomasKilmannTest[23].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[24].question.name}`,
        `${tomasKilmannTest[24].question.text}`,
        [
          [
            tomasKilmannTest[24].answers[0].name,
            tomasKilmannTest[24].answers[0].text,
          ],
          [
            tomasKilmannTest[24].answers[1].name,
            tomasKilmannTest[24].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[25].question.name}`,
        `${tomasKilmannTest[25].question.text}`,
        [
          [
            tomasKilmannTest[25].answers[0].name,
            tomasKilmannTest[25].answers[0].text,
          ],
          [
            tomasKilmannTest[25].answers[1].name,
            tomasKilmannTest[25].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[26].question.name}`,
        `${tomasKilmannTest[26].question.text}`,
        [
          [
            tomasKilmannTest[26].answers[0].name,
            tomasKilmannTest[26].answers[0].text,
          ],
          [
            tomasKilmannTest[26].answers[1].name,
            tomasKilmannTest[26].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[27].question.name}`,
        `${tomasKilmannTest[27].question.text}`,
        [
          [
            tomasKilmannTest[27].answers[0].name,
            tomasKilmannTest[27].answers[0].text,
          ],
          [
            tomasKilmannTest[27].answers[1].name,
            tomasKilmannTest[27].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[28].question.name}`,
        `${tomasKilmannTest[28].question.text}`,
        [
          [
            tomasKilmannTest[28].answers[0].name,
            tomasKilmannTest[28].answers[0].text,
          ],
          [
            tomasKilmannTest[28].answers[1].name,
            tomasKilmannTest[28].answers[1].text,
          ],
        ]
      )}
      {createQuestionForTomasKilmann(
        `${tomasKilmannTest[29].question.name}`,
        `${tomasKilmannTest[29].question.text}`,
        [
          [
            tomasKilmannTest[29].answers[0].name,
            tomasKilmannTest[29].answers[0].text,
          ],
          [
            tomasKilmannTest[29].answers[1].name,
            tomasKilmannTest[29].answers[1].text,
          ],
        ]
      )}

      <SectionNavigation
        backLink="/Tomas-Kilmann-test/section-2"
        forwardLink="/Tomas-Kilmann-test/recommendation"
        onClick={() => sendToDb("tomas-kilmann-test", "tk-test-answer")}
      />
    </div>
  );
}

export default QuestionsFromTwentyOneToThirty;
