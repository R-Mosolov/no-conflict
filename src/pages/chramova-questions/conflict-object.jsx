import React from "react";

import Title from "../../components/title";
import FormNavigation from "../../components/form-navigation";

import createQuestion from "../../directives/create-question";
import redirectFromObject from "../../directives/redirects/redirect-from-object";

function ConflictObject() {
    return (
        <div>
            <Title titleText="2. Тип конфликта" />


            { createQuestion(
                'conflict-object','2.1. С кем Вы конфликтуете?',
                [['human-conflict', 'С человеком'],
                    ['group-conflict', 'С группой людей'], ['self-conflict', 'С собой']] ) }


            <FormNavigation
                id="navigation-conflict-object"
                backLink="/sections/conflict-existence"
                forwardLink="/sections/conflict-reason-and-place"
                onClick={ redirectFromObject } />
        </div>
    );
}

export default ConflictObject;
