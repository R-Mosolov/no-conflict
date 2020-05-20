import * as React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";
import questions from "./data/questions.json";

import createQuestionForTomasKilmann from "../../functions/create-question/create-question-tk/create-question-tk";
import calculateTkFromElevenToTwenty from "./recommendation-tk/calculate-tk-test/calculate-tk-11-20";

function QuestionsFromElevenToTwenty() {
  return (
    <div>
      <Title titleText="Тест Томаса-Килманна" />

      {createQuestionForTomasKilmann("11", `${questions.q11.qName}`, [
        ["a11", `${questions.q11.aA}`],
        ["b11", `${questions.q11.aB}`],
      ])}
      {createQuestionForTomasKilmann("12", `${questions.q12.qName}`, [
        ["a12", `${questions.q12.aA}`],
        ["b12", `${questions.q12.aB}`],
      ])}
      {createQuestionForTomasKilmann("13", `${questions.q13.qName}`, [
        ["a13", `${questions.q13.aA}`],
        ["b13", `${questions.q13.aB}`],
      ])}
      {createQuestionForTomasKilmann("14", `${questions.q14.qName}`, [
        ["a14", `${questions.q14.aA}`],
        ["b14", `${questions.q14.aB}`],
      ])}
      {createQuestionForTomasKilmann("15", `${questions.q15.qName}`, [
        ["a15", `${questions.q15.aA}`],
        ["b15", `${questions.q15.aB}`],
      ])}

      {createQuestionForTomasKilmann("16", `${questions.q16.qName}`, [
        ["a16", `${questions.q16.aA}`],
        ["b16", `${questions.q16.aB}`],
      ])}
      {createQuestionForTomasKilmann("17", `${questions.q17.qName}`, [
        ["a17", `${questions.q17.aA}`],
        ["b17", `${questions.q17.aB}`],
      ])}
      {createQuestionForTomasKilmann("18", `${questions.q18.qName}`, [
        ["a18", `${questions.q18.aA}`],
        ["b18", `${questions.q18.aB}`],
      ])}
      {createQuestionForTomasKilmann("19", `${questions.q19.qName}`, [
        ["a19", `${questions.q19.aA}`],
        ["b19", `${questions.q19.aB}`],
      ])}
      {createQuestionForTomasKilmann("20", `${questions.q20.qName}`, [
        ["a20", `${questions.q20.aA}`],
        ["b20", `${questions.q20.aB}`],
      ])}

      <FormNavigation
        backLink="/Tomas-Kilmann-test/section-1"
        forwardLink="/Tomas-Kilmann-test/section-3"
        onClick={calculateTkFromElevenToTwenty}
      />
    </div>
  );
}

export default QuestionsFromElevenToTwenty;
