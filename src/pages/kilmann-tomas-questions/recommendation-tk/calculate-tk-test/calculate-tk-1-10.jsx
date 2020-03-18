function calculateTkTest() {
    let confrontation = 0;
    let collaboration = 0;
    let compromise = 0;
    let digression = 0;
    let adaptation = 0;

    function checkAnswerById(id) {
        return document.getElementById(`${id}`).checked;
    }

    if (checkAnswerById('a1')) digression += 1;
    if (checkAnswerById('b1')) adaptation += 1;

    if (checkAnswerById('a2')) compromise += 1;
    if (checkAnswerById('b2')) collaboration += 1;

    if (checkAnswerById('a3')) confrontation += 1;
    if (checkAnswerById('b3')) adaptation += 1;

    if (checkAnswerById('a4')) compromise += 1;
    if (checkAnswerById('b4')) adaptation += 1;

    if (checkAnswerById('a5')) confrontation += 1;
    if (checkAnswerById('b5')) digression += 1;

    if (checkAnswerById('a6')) digression += 1;
    if (checkAnswerById('b6')) confrontation += 1;

    if (checkAnswerById('a7')) digression += 1;
    if (checkAnswerById('b7')) compromise += 1;

    if (checkAnswerById('a8')) confrontation += 1;
    if (checkAnswerById('b8')) collaboration += 1;

    if (checkAnswerById('a9')) digression += 1;
    if (checkAnswerById('b9')) confrontation += 1;

    if (checkAnswerById('a10')) confrontation += 1;
    if (checkAnswerById('b10')) compromise += 1;

    localStorage.setItem('confrontation', confrontation);
    localStorage.setItem('collaboration', collaboration);
    localStorage.setItem('compromise', compromise);
    localStorage.setItem('digression', digression);
    localStorage.setItem('adaptation', adaptation);
}

export default calculateTkTest;
