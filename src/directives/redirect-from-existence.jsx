import showAlert from "./show-alert";

function redirectFromExistence(event) {
    const existentConflict = document.getElementById('existent-conflict').checked;
    const nonExistentConflict = document.getElementById('non-existent-conflict').checked;

    event.preventDefault();

    if (existentConflict) {
        return window.location.pathname = '/sections/conflict-type';
    } else if (nonExistentConflict) {
        return window.location.pathname = '/consultation';
    }

    return showAlert('navigation-conflict-type');
}

export default redirectFromExistence;
