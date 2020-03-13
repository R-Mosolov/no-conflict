import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";
import questions from "./data/questions";

import createQuestion from "../../directives/create-question";
import checkAnswers from "../../directives/check-answers";

function QuestionsFromTwentyOneToThirty() {
    return (
        <div>
            <Title titleText="Тест Томаса-Килманна" />

            { createQuestion(
                '21',`${questions.q21.qName}`,
                [['a21', `${questions.q21.aA}`], ['b21', `${questions.q21.aB}`]]) }
            { createQuestion(
                '22',`${questions.q22.qName}`,
                [['a22', `${questions.q22.aA}`], ['b22', `${questions.q22.aB}`]]) }
            { createQuestion(
                '23',`${questions.q23.qName}`,
                [['a23', `${questions.q23.aA}`], ['b23', `${questions.q23.aB}`]]) }
            { createQuestion(
                '24',`${questions.q24.qName}`,
                [['a24', `${questions.q24.aA}`], ['b24', `${questions.q24.aB}`]]) }
            { createQuestion(
                '25',`${questions.q25.qName}`,
                [['a25', `${questions.q25.aA}`], ['b25', `${questions.q25.aB}`]]) }

            { createQuestion(
                '26',`${questions.q26.qName}`,
                [['a26', `${questions.q26.aA}`], ['b26', `${questions.q26.aB}`]]) }
            { createQuestion(
                '27',`${questions.q27.qName}`,
                [['a27', `${questions.q27.aA}`], ['b27', `${questions.q27.aB}`]]) }
            { createQuestion(
                '28',`${questions.q28.qName}`,
                [['a28', `${questions.q28.aA}`], ['b28', `${questions.q28.aB}`]]) }
            { createQuestion(
                '29',`${questions.q29.qName}`,
                [['a29', `${questions.q29.aA}`], ['b29', `${questions.q29.aB}`]]) }
            { createQuestion(
                '30',`${questions.q30.qName}`,
                [['a30', `${questions.q30.aA}`], ['b30', `${questions.q30.aB}`]]) }

            <FormNavigation
                backLink="/sections/tomas-kilmann-2"
                forwardLink="/" />
        </div>
    );
}

export default QuestionsFromTwentyOneToThirty;
