/** This module returns alert if an user hasn't filled test's answers */

function renderError(fieldId: string) {
  // Initialization variables
  const field: HTMLElement | null = document.getElementById(`${fieldId}`);
  let errorField: HTMLElement = document.createElement("div");
  const errorFieldById: HTMLElement | null = document.getElementById(`error-${fieldId}`);
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
