/** This module returns alert if an user hasn't filled test's answers */

function renderError(fieldId) {
  // Initialization variables
  const field = document.getElementById(`${fieldId}`);
  let errorField = document.createElement("div");
  const errorFieldById = document.getElementById(`error-${fieldId}`);
  errorField.innerHTML = "Пожалуйста, ответьте на все вопросы.";
  errorField.className = "m-0 mt-2 alert alert-danger error-message";
  errorField.id = `error-${fieldId}`;

  // Deleting repeated alerts
  if (errorFieldById) {
    errorFieldById.remove();
  }

  // Inserting the alert into GUI
  if (field) {
    field.after(errorField);
  }
}

// Exporting the module
export default renderError;
