const DbManager = require("../db");

const dbManager = new DbManager();

function updateDb(startQuestion) {
  const pageQuestions = document.getElementsByClassName("question");
  const pageAnswers = document.getElementsByClassName("answer");
  const answersPerQuestion = pageAnswers.length / pageQuestions.length;
  let respondentAnswers = [];
  let answerCounter = 0;

  for (let answer of pageAnswers) {
    answerCounter++;

    if (answer.checked) {
      const numberRest = answerCounter % 2;
      const evenNumber = 0;
      const oddNumber = 1;

      if (numberRest === oddNumber) {
        respondentAnswers.push({
          questionName: `q${
            answerCounter === 1
              ? answerCounter
              : startQuestion + Math.floor(answerCounter / answersPerQuestion)
          }`,
          answerName: `a${
            answerCounter <= answersPerQuestion
              ? answerCounter
              : answerCounter % answersPerQuestion
          }`,
          changeDate: `${new Date(Date.now())}`,
        });
        console.log(answerCounter);
        console.log(answersPerQuestion);
        console.log(answerCounter / answersPerQuestion);
      } else if (numberRest === evenNumber) {
        respondentAnswers.push({
          questionName: `q${
            answerCounter === 1
              ? answerCounter
              : startQuestion + Math.floor(answerCounter / answersPerQuestion)
          }`,
          answerName: `a${
            answerCounter <= answersPerQuestion
              ? answerCounter
              : answerCounter % answersPerQuestion
          }`,
          changeDate: `${new Date(Date.now())}`,
        });
        console.log(answerCounter);
        console.log(answersPerQuestion);
        console.log(answerCounter / answersPerQuestion);
      }
    }
  }

  console.log(respondentAnswers);

  // if (respondentAnswers) {
  //   dbManager.createItem("hramova-pageAnswers", respondentAnswers);
  // }
}

export default updateDb;
