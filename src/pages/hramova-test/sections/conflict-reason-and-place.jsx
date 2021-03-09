import * as React from 'react';

import Title from '../../../components/title';
import SectionNavigation from '../../../components/section-navigation';

import createQuestion from '../../../functions/create-question/create-question';
import sendToDb from '../../../server/functions/send-to-db';
import hramovaTest from '../../../data/hramova-test';

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

      <SectionNavigation
        backLink="/Hramova-test/conflict-object"
        forwardLink="/Hramova-test/recommendation"
        onClick={() => sendToDb('hramova-test', 'hramova-test-answer')}
      />
    </div>
  );
}

export default ConflictReasonAndPlace;
