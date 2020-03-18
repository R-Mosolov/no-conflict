function calculateTkFromTwentyOneToThirty() {
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


    if (checkAnswerById('a21')) collaboration += 1;
    if (checkAnswerById('b21')) adaptation += 1;

    if (checkAnswerById('a22')) compromise += 1;
    if (checkAnswerById('b22')) confrontation += 1;

    if (checkAnswerById('a23')) collaboration += 1;
    if (checkAnswerById('b23')) digression += 1;

    if (checkAnswerById('a24')) adaptation += 1;
    if (checkAnswerById('b24')) compromise += 1;

    if (checkAnswerById('a25')) confrontation += 1;
    if (checkAnswerById('b25')) adaptation += 1;

    if (checkAnswerById('a26')) compromise += 1;
    if (checkAnswerById('b26')) collaboration += 1;

    if (checkAnswerById('a27')) digression += 1;
    if (checkAnswerById('b27')) adaptation += 1;

    if (checkAnswerById('a28')) confrontation += 1;
    if (checkAnswerById('b28')) collaboration += 1;

    if (checkAnswerById('a29')) compromise += 1;
    if (checkAnswerById('b29')) digression += 1;

    if (checkAnswerById('a30')) adaptation += 1;
    if (checkAnswerById('b30')) collaboration += 1;


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

export default calculateTkFromTwentyOneToThirty;
