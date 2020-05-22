/** This module checks how much test's answers an user has filled */

// Importing dependencies
import showAlert from "./show-alert";

function checkAnswers() {

  // Searching all answers
  const sectionNavigation = document.getElementById("navigation-conflict-existence");
  const questionsQuantity = document.getElementsByClassName("question").length;
  const allAnswersQuantity = document.getElementsByClassName("hramova-test-answer").length;
  const allAnswersList = document.getElementsByClassName("hramova-test-answer");
  let markedAnswersQuantity = 0;
  const haveAllQuestionsChecked = markedAnswersQuantity === questionsQuantity;

  // Checking answers occupation
  for (let i = 0; i < allAnswersQuantity; i++) {
    if (allAnswersList[i].checked) {
      markedAnswersQuantity += 1;
    }
  }

  // Handling occupied and blank answers
  if (haveAllQuestionsChecked) {
    alert("Получены ответы на все вопросы.");
  } else {
    sectionNavigation.setAttribute("forwardLink", "/Hramova-test/conflict-object");
    return showAlert();
  }
}

// Exporting the module
export default checkAnswers;
