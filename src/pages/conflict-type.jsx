import React from "react";

import Title from "../components/title";
import FormNavigation from "../components/form-navigation";

import createQuestion from "../directives/create-question";
import redirectUser from "../directives/redirect-user";

function ConflictType() {
    return (
        <div>
            <Title titleText="1. Тип конфликта" />

            { createQuestion(
                'conflict-type','1.1. Выберите тип Вашего конфликта',
                [['psychological', 'Психологический'],
                    ['psycho', 'Психический'], ['social', 'Социальный']] ) }

            <FormNavigation
                backLink="/"
                forwardLink="/sections/psychotype"
                onClick={ redirectUser } />
        </div>
    );
}

export default ConflictType;
