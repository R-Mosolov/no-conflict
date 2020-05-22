/** This module returns alert if an user hasn't filled test's answers */

function showAlert() {
  const formNavigation = document.getElementById("navigation-conflict-existence");

  // Inserting the alert's text into GUI
  formNavigation.insertAdjacentHTML(
    "beforebegin",
    `<div style="margin-top: 12px; color: red"><b>Пожалуйста, ответьте на все вопросы. </b></div>`
  );
}

// Exporting the module
export default showAlert;
