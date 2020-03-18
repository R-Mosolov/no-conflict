import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";
import questions from "./data/questions";

import createQuestionForTomasKilmann from "../../directives/create-question/create-question-tk/create-question-tk";
import calculateTkFromTwentyOneToThirty from "./recommendation-tk/calculate-tk-test/calculate-tk-21-30";

function QuestionsFromTwentyOneToThirty() {
    return (
        <div>
            <Title titleText="Тест Томаса-Килманна" />

            { createQuestionForTomasKilmann(
                '21',`${questions.q21.qName}`,
                [['a21', `${questions.q21.aA}`], ['b21', `${questions.q21.aB}`]]) }
            { createQuestionForTomasKilmann(
                '22',`${questions.q22.qName}`,
                [['a22', `${questions.q22.aA}`], ['b22', `${questions.q22.aB}`]]) }
            { createQuestionForTomasKilmann(
                '23',`${questions.q23.qName}`,
                [['a23', `${questions.q23.aA}`], ['b23', `${questions.q23.aB}`]]) }
            { createQuestionForTomasKilmann(
                '24',`${questions.q24.qName}`,
                [['a24', `${questions.q24.aA}`], ['b24', `${questions.q24.aB}`]]) }
            { createQuestionForTomasKilmann(
                '25',`${questions.q25.qName}`,
                [['a25', `${questions.q25.aA}`], ['b25', `${questions.q25.aB}`]]) }

            { createQuestionForTomasKilmann(
                '26',`${questions.q26.qName}`,
                [['a26', `${questions.q26.aA}`], ['b26', `${questions.q26.aB}`]]) }
            { createQuestionForTomasKilmann(
                '27',`${questions.q27.qName}`,
                [['a27', `${questions.q27.aA}`], ['b27', `${questions.q27.aB}`]]) }
            { createQuestionForTomasKilmann(
                '28',`${questions.q28.qName}`,
                [['a28', `${questions.q28.aA}`], ['b28', `${questions.q28.aB}`]]) }
            { createQuestionForTomasKilmann(
                '29',`${questions.q29.qName}`,
                [['a29', `${questions.q29.aA}`], ['b29', `${questions.q29.aB}`]]) }
            { createQuestionForTomasKilmann(
                '30',`${questions.q30.qName}`,
                [['a30', `${questions.q30.aA}`], ['b30', `${questions.q30.aB}`]]) }

            <FormNavigation
                backLink="/sections/tomas-kilmann-2"
                forwardLink="/sections/recommendation-tk"
                onClick={ calculateTkFromTwentyOneToThirty } />
        </div>
    );
}

export default QuestionsFromTwentyOneToThirty;
