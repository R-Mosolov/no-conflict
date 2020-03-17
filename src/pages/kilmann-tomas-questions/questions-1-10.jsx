import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";
import questions from "./data/questions";

import createQuestionForTomasKilmann from "../../directives/create-question/create-question-tk/create-question-tk";

function QuestionsFromOneToTen() {
    return (
        <div>
            <Title titleText="Тест Томаса-Килманна" />

            { createQuestionForTomasKilmann(
                '1',`${questions.q1.qName}`,
                [['a1', `${questions.q1.aA}`], ['b1', `${questions.q1.aB}`]]) }
            { createQuestionForTomasKilmann(
                '2',`${questions.q2.qName}`,
                [['a2', `${questions.q2.aA}`], ['b2', `${questions.q2.aB}`]]) }
            { createQuestionForTomasKilmann(
                '3',`${questions.q3.qName}`,
                [['a3', `${questions.q3.aA}`], ['b3', `${questions.q3.aB}`]]) }
            { createQuestionForTomasKilmann(
                '4',`${questions.q4.qName}`,
                [['a4', `${questions.q4.aA}`], ['b4', `${questions.q4.aB}`]]) }
            { createQuestionForTomasKilmann(
                '5',`${questions.q5.qName}`,
                [['a5', `${questions.q5.aA}`], ['b5', `${questions.q5.aB}`]]) }

            { createQuestionForTomasKilmann(
                '6',`${questions.q6.qName}`,
                [['a6', `${questions.q6.aA}`], ['b6', `${questions.q6.aB}`]]) }
            { createQuestionForTomasKilmann(
                '7',`${questions.q7.qName}`,
                [['a7', `${questions.q7.aA}`], ['b7', `${questions.q7.aB}`]]) }
            { createQuestionForTomasKilmann(
                '8',`${questions.q8.qName}`,
                [['a8', `${questions.q8.aA}`], ['b8', `${questions.q8.aB}`]]) }
            { createQuestionForTomasKilmann(
                '9',`${questions.q9.qName}`,
                [['a9', `${questions.q9.aA}`], ['b9', `${questions.q9.aB}`]]) }
            { createQuestionForTomasKilmann(
                '10',`${questions.q10.qName}`,
                [['a10', `${questions.q10.aA}`], ['b10', `${questions.q10.aB}`]]) }

            <FormNavigation

                backLink="/sections/recommendation"
                forwardLink="/sections/tomas-kilmann-2" />
        </div>
    );
}

export default QuestionsFromOneToTen;
