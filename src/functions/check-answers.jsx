/** This module checks how much test's answers an user has filled */

// Importing dependencies
import renderError from "./render-error";

function checkAnswers() {

  // Searching all answers
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
    return renderError("navigation-conflict-existence");
  }
}

// Exporting the module
export default checkAnswers;
