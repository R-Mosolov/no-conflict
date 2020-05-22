/** This module manages data by sending to DB when user finishes a test's block */

import createUserId from "../../functions/create-user-id/create-user-id";
const DbManager = require("../crud");

// Defining variables
const dbManager = new DbManager();
const userId = createUserId();
let userAnswers = [];

function sendToDb(collName, inputClassName) {
  // Integrating logic with HTML
  const pageAnswers = document.getElementsByClassName(inputClassName);

  // Checking a new section ("Is it Tomas-Kilmann's test?")
  if (window.location.pathname === "/Tomas-Kilmann-test/section-1") {
    userAnswers = [];
    localStorage.removeItem('userAnswers');
  }

  // Searching checked checkboxes
  for (let answer of pageAnswers) {
    const questionDbName = answer.getAttribute("name");
    const answerDbName = answer.getAttribute("id");

    // Generating data for DB
    if (answer.checked) {
      userAnswers.push({
        questionName: questionDbName,
        answerName: answerDbName,
        changeDate: `${new Date(Date.now())}`,
      });
    }

    // Merging current answers with old user's answers by using Local Storage
    if (userAnswers) {
      localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    }
  }

  // Sending data to DB Google Firebase
  if (userAnswers) {
    dbManager.createItem(
        userId,
        collName,
        JSON.parse(localStorage.getItem("userAnswers"))
    );
  }
}

export default sendToDb;
