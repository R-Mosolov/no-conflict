const DbManager = require("../db");

const dbManager = new DbManager();

function updateDb() {
  // Integrating logic with HTML
  const pageQuestions = document.getElementsByClassName("question");
  const pageAnswers = document.getElementsByClassName("answer");
  let respondentAnswers = [];

  // Searching checked checkboxes
  for (let answer of pageAnswers) {
    const questionDbName = answer.getAttribute("name");
    const answerDbName = answer.getAttribute("id");

    if (answer.checked) {
      // Generating data for DB from first condition
      respondentAnswers.push({
        questionName: questionDbName,
        answerName: answerDbName,
        changeDate: `${new Date(Date.now())}`,
      });

      // Debugging the result
      console.log("answer: ", answer);
      console.log("question's ID: ", answer.getAttribute("id"));
      console.log("question's name: ", answer.getAttribute("name"));
    }
  }

  console.log("respondentAnswers", respondentAnswers);
}

export default updateDb;
