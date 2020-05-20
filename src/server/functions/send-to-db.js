/** This module manages data by sending to DB when user finishes a test's block */

import createUserId from "../../functions/create-user-id/create-user-id";
const DbManager = require("../crud");

const dbManager = new DbManager();
const userId = createUserId();
let hramovaAnswers = [];
let tomasKilmannAnswers = [];

const isHramovaTest = (
    window.location.pathname === "/Hramova-test/conflict-existence"
    || window.location.pathname === "/Hramova-test/conflict-object"
    || window.location.pathname === "/Hramova-test/conflict-reason-and-place"
);
const isTomasKilmannTest = (
    window.location.pathname === "/Tomas-Kilmann-test/section-1"
    || window.location.pathname === "/Tomas-Kilmann-test/section-2"
    || window.location.pathname === "/Tomas-Kilmann-test/section-3"
);

function sendToDb() {
  // Integrating logic with HTML
  const pageAnswers = document.getElementsByClassName("answer");

  // Searching checked checkboxes
  for (let answer of pageAnswers) {
    const questionDbName = answer.getAttribute("name");
    const answerDbName = answer.getAttribute("id");

    // Generating data for DB
    if (isHramovaTest && answer.checked) {
      hramovaAnswers.push({
        questionName: questionDbName,
        answerName: answerDbName,
        changeDate: `${new Date(Date.now())}`,
      });
    }
    else if (isTomasKilmannTest && answer.checked) {
      tomasKilmannAnswers.push({
        questionName: questionDbName,
        answerName: answerDbName,
        changeDate: `${new Date(Date.now())}`,
      });
    }

      // Merging current answers with old user's answers by using Local Storage
      if (isHramovaTest) {
        localStorage.setItem("hramovaAnswers", JSON.stringify(hramovaAnswers));
      }
      else if (isTomasKilmannTest) {
        localStorage.setItem("tomasKilmannAnswers", JSON.stringify(tomasKilmannAnswers));
      }

      // Debugging condition's result
      if (isHramovaTest) {
        console.log(
          "localStorage.getItem('hramovaAnswers'): ",
          localStorage.getItem("hramovaAnswers")
        );
      }
      else if (isTomasKilmannTest) {
        console.log(
          "localStorage.getItem('tomasKilmannAnswers'): ",
          localStorage.getItem("tomasKilmannAnswers")
        );
      }
    }
  }

  // Debugging the function's result
  console.log(`window.location.pathname: `, window.location.pathname);
  console.log(`localStorage.getItem("hramovaAnswers"): ${localStorage.getItem("hramovaAnswers")}`);
  console.log(`localStorage.getItem("tomasKilmannAnswers"): ${localStorage.getItem("tomasKilmannAnswers")}`);

  // Sending data to DB Google Firebase
  if (isHramovaTest) {
    dbManager.createItem(
      userId,
      "hramova-test",
      JSON.parse(localStorage.getItem("hramovaAnswers"))
    );
  }
  else if (isTomasKilmannTest) {
    dbManager.createItem(
      userId,
      "tomas-kilmann-test",
      JSON.parse(localStorage.getItem("tomasKilmannAnswers"))
    );
  }

export default sendToDb;
