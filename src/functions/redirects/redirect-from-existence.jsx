import showAlert from "../render-error";

function redirectFromExistence(event) {
  const existentConflict = document.getElementById("existent-conflict").checked;
  const nonExistentConflict = document.getElementById("non-existent-conflict")
    .checked;

  event.preventDefault();

  if (existentConflict) {
    return (window.location.pathname = "/Hramova-test/conflict-object");
  } else if (nonExistentConflict) {
    return (window.location.pathname = "/Hramova-test/consultation");
  }

  return showAlert("navigation-conflict-existence");
}

export default redirectFromExistence;
