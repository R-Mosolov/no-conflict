import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";
import questions from "./data/questions";

import createQuestion from "../../directives/create-question";
import checkAnswers from "../../directives/check-answers";

function QuestionsFromElevenToTwenty() {
    return (
        <div>
            <Title titleText="Тест Томаса-Килманна" />

            { createQuestion(
                '11',`${questions.q11.qName}`,
                [['a11', `${questions.q11.aA}`], ['b11', `${questions.q11.aB}`]]) }
            { createQuestion(
                '12',`${questions.q12.qName}`,
                [['a12', `${questions.q12.aA}`], ['b12', `${questions.q12.aB}`]]) }
            { createQuestion(
                '13',`${questions.q13.qName}`,
                [['a13', `${questions.q13.aA}`], ['b13', `${questions.q13.aB}`]]) }
            { createQuestion(
                '14',`${questions.q14.qName}`,
                [['a14', `${questions.q14.aA}`], ['b14', `${questions.q14.aB}`]]) }
            { createQuestion(
                '15',`${questions.q15.qName}`,
                [['a15', `${questions.q15.aA}`], ['b15', `${questions.q15.aB}`]]) }

            { createQuestion(
                '16',`${questions.q16.qName}`,
                [['a16', `${questions.q16.aA}`], ['b16', `${questions.q16.aB}`]]) }
            { createQuestion(
                '17',`${questions.q17.qName}`,
                [['a17', `${questions.q17.aA}`], ['b17', `${questions.q17.aB}`]]) }
            { createQuestion(
                '18',`${questions.q18.qName}`,
                [['a18', `${questions.q18.aA}`], ['b18', `${questions.q18.aB}`]]) }
            { createQuestion(
                '19',`${questions.q19.qName}`,
                [['a19', `${questions.q19.aA}`], ['b19', `${questions.q19.aB}`]]) }
            { createQuestion(
                '20',`${questions.q20.qName}`,
                [['a20', `${questions.q20.aA}`], ['b20', `${questions.q20.aB}`]]) }

            <FormNavigation
                backLink="/sections/tomas-kilmann-1"
                forwardLink="/sections/tomas-kilmann-3" />
        </div>
    );
}

export default QuestionsFromElevenToTwenty;
