const DbManager = require("../db");
// import hramovaTest from "../data/hramova-test";

const dbManager = new DbManager();

function updateDb() {
    const answers = document.getElementsByClassName("answer-input");
    let respondentAnswers = [];
    let counter = 0;

    for (let answer of answers) {
        if (answer.checked) {
            const numberRest = counter % 2;
            const evenNumber = 0;
            const oddNumber = 1;

            counter++;

            if (numberRest === oddNumber) {
                respondentAnswers.push({
                    "questionName": `q${(answer === 1) ? counter : counter - 1}`,
                    "answerName": `a${(answer === 1) ? answer : counter - (counter - 1)}`,
                    "changeDate": `${new Date(Date.now())}`
                });
            }
            else if (numberRest === evenNumber) {
                respondentAnswers.push({
                    "questionName": `q${counter + 1}`,
                    "answerName": `a${answer}`,
                    "changeDate": `${new Date(Date.now())}`
                });
            }
        }
    }

    if (respondentAnswers) {
        dbManager.createItem(
            "hramova-answers",
            respondentAnswers
        );
    }
}

export default updateDb;
