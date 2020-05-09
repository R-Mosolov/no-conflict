import React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../directives/create-question/create-question";
import calculateHramovaTest from "./recommendation/calculate-hramova-test";

function ConflictReasonAndPlace() {
    return (
        <div>
            <Title titleText="3. Место и причина конфликта" />


            { createQuestion(
                'conflict-reason','3.1. Почему Вы конфликтуете?',
                [['emotional-conflict', 'Мне не нравится оппонент (его слова, поступки, отношение ко мне)'],
                    ['social-conflict', 'Оппонент не совпадает со мной в едином видении наших дел'],
                    ['rational-conflict', 'Все, что делает оппонент, разрушает наши с ним отношения']] ) }

            { createQuestion(
                'conflict-place','3.2. Где Вы конфликтуете?',
                [['work-conflict', 'На работе'],
                    ['family-conflict', 'В семье'], ['friend-conflict', 'В кругу знакомых / друзей']] ) }


            <FormNavigation
                id="navigation-conflict-reason-and-place"
                backLink="/Hramova-test/conflict-object"
                forwardLink="/Hramova-test/recommendation"
                onClick={ calculateHramovaTest } />
        </div>
    );
}

export default ConflictReasonAndPlace;
