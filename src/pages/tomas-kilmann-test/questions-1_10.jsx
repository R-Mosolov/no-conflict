import * as React from 'react';

import Title from '../../components/title';
import SectionNavigation from '../../components/section-navigation';

import createQuestionForTomasKilmann from '../../functions/create-question/create-question-tk/create-question-tk';
import sendToDb from '../../server/functions/send-to-db';
import tomasKilmannTest from '../../data/tomas-kilmann-test';

function renderQuestionsAndAnswers() {
  const firstQuestionNumber = 0;
  const lastQuestionNumber = 10;
  let questionList = [];

  for (let item = firstQuestionNumber; item < lastQuestionNumber; item++) {
    questionList.push(
      createQuestionForTomasKilmann(
        `${tomasKilmannTest[item].question.name}`,
        `${tomasKilmannTest[item].question.text}`,
        [
          [
            tomasKilmannTest[item].answers[0].name,
            tomasKilmannTest[item].answers[0].text,
          ],
          [
            tomasKilmannTest[item].answers[1].name,
            tomasKilmannTest[item].answers[1].text,
          ],
        ]
      )
    );
  }

  return questionList;
}

function QuestionsFromOneToTen() {
  return (
    <div>
      <Title titleText="Тест Томаса-Килманна" />

      {renderQuestionsAndAnswers()}

      <SectionNavigation
        backLink="/Hramova-test/recommendation"
        forwardLink="/Tomas-Kilmann-test/section-2"
        onClick={() => sendToDb('tomas-kilmann-test', 'tk-test-answer')}
      />
    </div>
  );
}

export default QuestionsFromOneToTen;
