import showAlert from "./show-alert";

function checkAnswers(ids, id) {
    const questionNumber = document.getElementsByClassName('question').length;
    const allAnswersNumber = document.getElementsByClassName('answer').length;
    let markedAnswersNumber = 0;

    for (let i = 0; i < allAnswersNumber; i++) {
        if (document.getElementById(`${ids[i]}`).checked) {
            markedAnswersNumber += 1;
        }
    }

    if (markedAnswersNumber === questionNumber) {
        alert('Получены ответы на все вопросы.');
    } else {
        return showAlert(id);
    }
}

export default checkAnswers;
