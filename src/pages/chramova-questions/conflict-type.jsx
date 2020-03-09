import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";

import createQuestion from "../../directives/create-question";
import redirectFromType from "../../directives/redirect-from-type";

function ConflictType() {
    return (
        <div>
            <Title titleText="2. Тип конфликта" />


            { createQuestion(
                'conflict-type','2.1. С кем Вы конфликтуете?',
                [['human-conflict', 'С человеком'],
                    ['group-conflict', 'С группой людей'], ['self-conflict', 'С собой']] ) }

            { createQuestion(
                'conflict-type','2.2. Почему Вы конфликтуете?',
                [['emotional-conflict', 'Мне не нравится оппонент (его слова, поступки, отношение ко мне)'],
                    ['social-conflict', 'Оппонент не совпадает со мной в едином видении наших дел'],
                    ['rational-conflict', 'Все, что делает оппонент, разрушает наши с ним отношения']] ) }

            { createQuestion(
                'conflict-type','2.3. Где Вы конфликтуете?',
                [['work-conflict', 'На работе'],
                    ['family-conflict', 'В семье'], ['fiend-conflict', 'В кругу знакомых / друзей']] ) }


            <FormNavigation
                id="navigation-conflict-type"
                backLink="/sections/conflict-existence"
                forwardLink="/sections/psychotype"
                onClick={ redirectFromType } />
        </div>
    );
}

export default ConflictType;
