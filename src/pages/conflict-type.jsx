import React from "react";

import Title from "../components/title";
import FormNavigation from "../components/form-navigation";

import createQuestion from "../directives/create-question";
import redirectFromType from "../directives/redirect-from-type";

function ConflictType() {
    return (
        <div>
            <Title titleText="2. Тип конфликта" />

            { createQuestion(
                'conflict-type','Выберите тип Вашего конфликта',
                [['psychological', 'Психологический'],
                    ['psycho', 'Психический'], ['social', 'Социальный']] ) }

            <FormNavigation
                backLink="/sections/conflict-existence"
                forwardLink="/sections/psychotype"
                onClick={ redirectFromType } />
        </div>
    );
}

export default ConflictType;
