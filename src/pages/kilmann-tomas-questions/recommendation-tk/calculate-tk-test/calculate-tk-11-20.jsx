function calculateTkFromElevenToTwenty() {
    let confrontation = 0;
    let collaboration = 0;
    let compromise = 0;
    let digression = 0;
    let adaptation = 0;

    const oldConfrontation = parseInt(localStorage.getItem('confrontation'), 10);
    const oldCollaboration = parseInt(localStorage.getItem('collaboration'), 10);
    const oldCompromise = parseInt(localStorage.getItem('compromise'), 10);
    const oldDigression = parseInt(localStorage.getItem('digression'), 10);
    const oldAdaptation = parseInt(localStorage.getItem('adaptation'), 10);


    function checkAnswerById(id) {
        return document.getElementById(`${id}`).checked;
    }


    if (checkAnswerById('a11')) collaboration += 1;
    if (checkAnswerById('b11')) adaptation += 1;

    if (checkAnswerById('a12')) digression += 1;
    if (checkAnswerById('b12')) compromise += 1;

    if (checkAnswerById('a13')) compromise += 1;
    if (checkAnswerById('b13')) confrontation += 1;

    if (checkAnswerById('a14')) collaboration += 1;
    if (checkAnswerById('b14')) confrontation += 1;

    if (checkAnswerById('a15')) adaptation += 1;
    if (checkAnswerById('b15')) digression += 1;

    if (checkAnswerById('a16')) adaptation += 1;
    if (checkAnswerById('b16')) confrontation += 1;

    if (checkAnswerById('a17')) confrontation += 1;
    if (checkAnswerById('b17')) digression += 1;

    if (checkAnswerById('a18')) adaptation += 1;
    if (checkAnswerById('b18')) compromise += 1;

    if (checkAnswerById('a19')) collaboration += 1;
    if (checkAnswerById('b19')) digression += 1;

    if (checkAnswerById('a20')) collaboration += 1;
    if (checkAnswerById('b20')) compromise += 1;


    localStorage.setItem('confrontation', oldConfrontation + confrontation);
    localStorage.setItem('collaboration', oldCollaboration + collaboration);
    localStorage.setItem('compromise', oldCompromise + compromise);
    localStorage.setItem('digression', oldDigression + digression);
    localStorage.setItem('adaptation', oldAdaptation + adaptation);


    return alert([
        localStorage.getItem('confrontation'),
        localStorage.getItem('collaboration'),
        localStorage.getItem('compromise'),
        localStorage.getItem('digression'),
        localStorage.getItem('adaptation')
    ]);
}

export default calculateTkFromElevenToTwenty;
