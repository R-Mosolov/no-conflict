import showAlert from "../show-alert";

function redirectFromObject(event) {
    const humanConflict = document.getElementById('human-conflict').checked;
    const groupConflict = document.getElementById('group-conflict').checked;
    const selfConflict = document.getElementById('self-conflict').checked;

    event.preventDefault();

    if (humanConflict || groupConflict) {
        return window.location.pathname = '/Hramova-test/conflict-reason-and-place';
    } else if (selfConflict) {
        return window.location.pathname = '/Hramova-test/psychologist';
    }

    return showAlert('navigation-conflict-object');
}

export default redirectFromObject;
