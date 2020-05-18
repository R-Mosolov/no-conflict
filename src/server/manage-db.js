import createUserId from "../directives/create-user-id/create-user-id";
const DbManager = require("../db-methods");

const dbManager = new DbManager();
const userId = createUserId();
let userAnswers = [];

function manageDb() {
  // Integrating logic with HTML
  const pageAnswers = document.getElementsByClassName("answer");

  // Searching checked checkboxes
  for (let answer of pageAnswers) {
    const questionDbName = answer.getAttribute("name");
    const answerDbName = answer.getAttribute("id");

    if (answer.checked) {
      // Generating data for DB
      userAnswers.push({
        questionName: questionDbName,
        answerName: answerDbName,
        changeDate: `${new Date(Date.now())}`,
      });

      // Merging current answers with old user's answers by using Local Storage
      localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      // Debugging condition's result
      console.log(
        "localStorage.getItem('userAnswers'): ",
        localStorage.getItem("userAnswers")
      );
    }
  }

  // Sending data to DB Google Firebase
  if (userAnswers) {
    dbManager.createItem(
      userId,
      "hramova-answers",
      JSON.parse(localStorage.getItem("userAnswers"))
    );
  }
}

export default manageDb;
