import chooseAnswer from "../directives/choose-answer";

function redirect(event) {
    const psychological = document.getElementById('psychological').checked;
    const psycho = document.getElementById('psycho').checked;
    const social = document.getElementById('social').checked;

    event.preventDefault();

    if (psychological) {
        return window.location.pathname = '/psychologist';
    } else if (psycho) {
        return window.location.pathname = '/psychotherapist';
    } else if (social) {
        return window.location.pathname = '/sections/psychotype';
    }

    return chooseAnswer();
}

export default redirect;
