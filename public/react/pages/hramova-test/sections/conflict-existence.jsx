import React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../directives/create-question/create-question";
import redirectFromExistence from "../../../directives/redirects/redirect-from-existence";

function ConflictExistence() {
    return (
        <div>
            <Title titleText="1. Наличие конфликта" />

            { createQuestion(
                'conflict-type', '1.1. В сложившейся ситуации Вы можете определить мешает ли кто-либо Вам ' +
                'психологически или физически реализовать свой интерес?',
                [['existent-conflict', 'Да, мешает'],
                    ['non-existent-conflict', 'Нет, явного вмешательства не наблюдаю']] ) }

            <FormNavigation
                id="navigation-conflict-existence"
                backLink="/"
                forwardLink="/Hramova-test/conflict-object"
                onClick={ redirectFromExistence } />
        </div>
    );
}

export default ConflictExistence;
