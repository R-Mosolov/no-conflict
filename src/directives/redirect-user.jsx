import showAlert from "./show-alert";

function redirectUser(event) {
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

    return showAlert();
}

export default redirectUser;
