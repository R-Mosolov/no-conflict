import React from 'react';

import './create-question-tk.css';

function createQuestionForTomasKilmann(radioName, question, idsAndLabelNames) {
  function createAnswers() {
    let arr = [];
    let keyNumber = Math.random() * 10000;
    const iterable = new Map(idsAndLabelNames);

    for (let [id, labelName] of iterable) {
      arr.push(
        <div className="mt-1 d-flex border rounded">
          <div className="pt-2 pl-3 pr-3 border custom-input-bg">
            <input
              type="radio"
              name={radioName}
              id={id}
              className="tk-test-answer"
              key={keyNumber}
            />
          </div>

          <label className="mt-2 pl-2 pr-1" htmlFor={id} key={keyNumber}>
            {labelName}
          </label>
        </div>
      );
    }

    return arr;
  }

  return (
    <div>
      <h6 className="question mt-4 mb-3">{question}</h6>

      {createAnswers()}
    </div>
  );
}

export default createQuestionForTomasKilmann;
