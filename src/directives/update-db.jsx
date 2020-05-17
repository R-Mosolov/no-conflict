import createUserId from "./create-user-id/create-user-id";
const DbManager = require("../db");

const dbManager = new DbManager();
const userId = createUserId();
const isDbDocument = dbManager.readItem(`${userId}`);

function updateDb() {
  // Integrating logic with HTML
  const pageAnswers = document.getElementsByClassName("answer");
  let userAnswers = [];

  // Searching checked checkboxes
  for (let answer of pageAnswers) {
    const questionDbName = answer.getAttribute("name");
    const answerDbName = answer.getAttribute("id");

    if (answer.checked) {
      // Generating data for DB from first condition
      userAnswers.push({
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

  console.log("userAnswers", userAnswers);
  console.log("isDbDocument", isDbDocument);

  // Sending data to DB Google Firebase
  if (userAnswers) {
    if (isDbDocument === null) {
      dbManager.createItem(`${userId}`, "hramova-answers", userAnswers);
    } else {
      dbManager.updateItem(`${userId}`, "hramova-answers", userAnswers);
    }
  }
}

export default updateDb;
