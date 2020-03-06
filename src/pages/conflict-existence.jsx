import React from "react";

import Title from "../components/title";
import FormNavigation from "../components/form-navigation";

import createQuestion from "../directives/create-question";
import redirectFromExistence from "../directives/redirect-from-existence";

function ConflictExistence() {
    return (
        <div>
            <Title titleText="1. Наличие конфликта" />

            { createQuestion(
                'conflict-type', 'В сложившейся ситуации Вы можете определить мешает ли кто-либо Вам ' +
                'психологически или физически реализовать свой интерес?',
                [['existent-conflict', 'Да, мешает'],
                    ['non-existent-conflict', 'Нет, явного вмешательства не наблюдаю']] ) }

            <FormNavigation
                backLink="/"
                forwardLink="/sections/conflict-type"
                onClick={ redirectFromExistence } />
        </div>
    );
}

export default ConflictExistence;
