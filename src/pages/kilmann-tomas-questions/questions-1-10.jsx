import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";
import questions from "./data/questions";

import createQuestion from "../../directives/create-question";

function QuestionsFromOneToTen() {
    return (
        <div>
            <Title titleText="Тест Томаса-Килманна" />

            { createQuestion(
                '1',`${questions.q1.qName}`,
                [['a1', `${questions.q1.aA}`], ['b1', `${questions.q1.aB}`]]) }
            { createQuestion(
                '2',`${questions.q2.qName}`,
                [['a2', `${questions.q2.aA}`], ['b2', `${questions.q2.aB}`]]) }
            { createQuestion(
                '3',`${questions.q3.qName}`,
                [['a3', `${questions.q3.aA}`], ['b3', `${questions.q3.aB}`]]) }
            { createQuestion(
                '4',`${questions.q4.qName}`,
                [['a4', `${questions.q4.aA}`], ['b4', `${questions.q4.aB}`]]) }
            { createQuestion(
                '5',`${questions.q5.qName}`,
                [['a5', `${questions.q5.aA}`], ['b5', `${questions.q5.aB}`]]) }

            { createQuestion(
                '6',`${questions.q6.qName}`,
                [['a6', `${questions.q6.aA}`], ['b6', `${questions.q6.aB}`]]) }
            { createQuestion(
                '7',`${questions.q7.qName}`,
                [['a7', `${questions.q7.aA}`], ['b7', `${questions.q7.aB}`]]) }
            { createQuestion(
                '8',`${questions.q8.qName}`,
                [['a8', `${questions.q8.aA}`], ['b8', `${questions.q8.aB}`]]) }
            { createQuestion(
                '9',`${questions.q9.qName}`,
                [['a9', `${questions.q9.aA}`], ['b9', `${questions.q9.aB}`]]) }
            { createQuestion(
                '10',`${questions.q10.qName}`,
                [['a10', `${questions.q10.aA}`], ['b10', `${questions.q10.aB}`]]) }

            <FormNavigation

                backLink="/sections/recommendation"
                forwardLink="/sections/tomas-kilmann-2" />
        </div>
    );
}

export default QuestionsFromOneToTen;
